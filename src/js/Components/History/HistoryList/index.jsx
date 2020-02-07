import HistoryItem from './HistoryItem';
import * as creators from 'js/actionCreators';

import {connect} from 'react-redux';

class HistoryList extends React.Component{
    componentDidMount(){
        this.props.loadOrders();
    }

    DateConvert(key, value){
            if(['orderCreate', 'orderAccept', 'orderFinished'].includes(key))
                return (new Date(value)).toLocaleString();

            return value;
    }

    fetchDate(type){
        let orders = JSON.stringify(this.props.historyOrders.val, this.DateConvert);

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

        if(!this.props.historyOrders.val.length)
            return <div>Записей по данному фильтру не найдено.</div>;

        return (
            <div>
                <div className = "row d-flex">
                    <div className = "btn btn-primary m-3" onClick={() => this.fetchDate('Excel')}>Excel</div>

                    <div className = "btn btn-primary m-3" onClick={() => this.fetchDate('PDF')}>PDF</div>
                </div>

                {
                    this.props.historyOrders.val.map(
                        (order) =>
                            <HistoryItem order = {order} key = {order.orderID}/>
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
        return ord.orderCreate > state.history.form.dateStart
            && (!state.history.form.dateEnd || ord.orderCreate < state.history.form.dateEnd);
    } );

    //check status
    orders = orders.filter( (ord) => {
        return !state.history.form.status || ord.status == state.history.form.status;
    } );

    orders = orders.sort((a, b) => {
       return state.history.form.sortDir === 'ASC' ?
                a[state.history.form.sortBy] > b[state.history.form.sortBy]
            :
                a[state.history.form.sortBy] < b[state.history.form.sortBy];
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