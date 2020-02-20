import Rating from './Rating';
import firebaseProj from 'js/fareConfig';

import {toast} from 'react-toastify';

class MarkForm extends React.Component{
    constructor(props){
        super(props);

        this.onRating = this.onRating.bind(this);
    }

    render(){
        return (
            <div className="d-flex justify-content-center">
                <Rating onRating = {this.onRating}/>
            </div>
        );
    }

    onRating(rating){
        let order = this.props.order;

        firebaseProj
            .database()
            .ref('/orders/' + order.orderID)
            .update({
                rating
            })

            .then(
                () => {
                    console.log(order);

                    firebaseProj
                        .database()
                        .ref('/auto/' + order.autoID)
                        .once('value', (snap) => {

                            firebaseProj
                                .database()
                                .ref('/auto/' + order.autoID)
                                .update({
                                    sumRating: snap.val().sumRating + rating,
                                    countRating: snap.val().countRating + 1
                                }).then(
                                () => {
                                    toast('Ваша оценка сохранена', {
                                        type: toast.TYPE.SUCCESS
                                    });

                                    this.props.close();
                                })
                            .catch((err) => {
                                toast('Ошибка сохранения' + err.message, {
                                    type: toast.TYPE.ERROR
                                });
                            })
                    });
                }
            )
            .catch((err) => {
                toast('Ошибка сохранения' + err.message, {
                    type: toast.TYPE.ERROR
                });
            })
    }
}

export default MarkForm;

