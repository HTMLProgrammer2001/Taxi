import HistoryItem from './HistoryItem';
import * as creators from 'js/actionCreators';
import firebaseProj from 'js/fareConfig';

import {connect} from 'react-redux';

class HistoryList extends React.Component{
    componentDidMount(){
        this.props.loadOrders();
    }

    static DateConvert(key, value){
            if(['orderCreate', 'orderAccept', 'orderFinished'].includes(key))
                return (new Date(value)).toLocaleString();

            return value;
    }

    fetchDate(type){
        let orders = JSON.stringify(this.props.historyOrders.val, HistoryList.DateConvert);

        switch(type){
            case 'Excel':
                fetch('http://taxi/api/excel.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    mode: 'cors',
                    body: `orders=${orders}`
                }).then( (res)=> {
                    res.blob().then( (file) => {
                        let a = document.createElement('a');
                        a.href = URL.createObjectURL(file);
                        a.download = 'history' + +new Date() + '.xlsx';
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                    } );
                } );
                break;
            case 'PDF':
                fetch('http://taxi/api/pdf.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    mode: 'cors',
                    body: `orders=${orders}`
                }).then( (res)=> {
                    res.blob().then( (file) => {
                        let a = document.createElement('a');
                        a.href = URL.createObjectURL(file);
                        a.download = 'history' + +new Date() + '.pdf';
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                    } );
                } );
        }
    }

    render(){

        return (
            <div className="mt-sm-3">
                <div className = "d-flex justify-content-between flex-md-row flex-sm-row align-items-center card px-5">
                    <div className="card-title d-flex align-items-center m-0">Заказы</div>

                    <div>
                        <div
                            className = "btn btn-outline-primary m-3 px-5"
                            onClick={() => this.fetchDate('Excel')}>Excel</div>

                        <div
                            className = "btn btn-outline-primary m-3 px-5"
                            onClick={() => this.fetchDate('PDF')}>PDF</div>
                    </div>
                </div>

                    {
                        this.props.historyOrders.val.map(
                            (order) =>
                                <HistoryItem order = {order} key = {order.orderID}/>
                        ) || (
                            <div className="card">
                                <div className="card-body">
                                    Записей по данному фильтру не найдено.
                                </div>
                            </div>
                        )
                    }
            </div>
        );
    }
}

let stateToProps = (state) => {
    let orders = state.history.orders.val;

    //check auto
    orders = orders.filter( (ord) => {
        return state.history.form.driver === '' || +state.history.form.driver === +ord.autoID;
    } );

    //check date
    orders = orders.filter( (ord) => {
        return (!state.history.form.dateStart || ord.orderCreate > Date.parse(state.history.form.dateStart))
            && (!state.history.form.dateEnd || ord.orderCreate < Date.parse(state.history.form.dateEnd));
    } );

    //check status
    orders = orders.filter( (ord) => {
        return !state.history.form.status || ord.status === state.history.form.status;
    } );

    orders = orders.sort((a, b) => {
       return state.history.form.sortDir === 'ASC' ?
                a[state.history.form.sortBy] < b[state.history.form.sortBy]
            :
                a[state.history.form.sortBy] > b[state.history.form.sortBy];
    });

    return {
        historyOrders: {...state.history.orders, val: orders}
    };
};

let loadData = () => {
    return dispatch => {

        //real time update
        firebaseProj.database().ref("/orders").on('child_changed', (snap) => {
            if(snap.val().user !== firebaseProj.auth().currentUser.uid)
                return;

            dispatch(
                creators.historyOrderChange({
                    orderID: snap.key,
                    ...snap.val()
                })
            );
        });

        firebaseProj.database().ref("/orders").on('child_added', (snap) => {
            if(snap.val().user !== firebaseProj.auth().currentUser.uid)
                return;

            dispatch(
                creators.historyOrderAdd({
                    orderID: snap.key,
                    ...snap.val()
                })
            );
        });

        firebaseProj.database().ref("/orders").on('child_removed', (snap) => {
            if(snap.val().user !== firebaseProj.auth().currentUser.uid)
                return;

            dispatch(
                creators.historyOrderRemove(snap.key)
            );
        });
    }
};

let dispatchToProps = (dispatch) => {
    return {
        loadOrders: () => {
            dispatch(loadData());
        }
    };
};

export default connect(stateToProps, dispatchToProps)(HistoryList);