import HistoryItem from './HistoryItem';
import * as creators from 'js/actionCreators';

import {connect} from 'react-redux';

class HistoryList extends React.Component{
    componentDidMount(){
        this.props.loadOrders();
    }

    render(){
        if(this.props.historyOrders.loading)
            return <div>Загрузка данных...</div>;

        if(this.props.historyOrders.error)
            return <div className="text-danger">Ошибка загрузки заказов: {error.message}</div>;

        if(!this.props.historyOrders.val.length)
            return <div>Записей по данному фильтру не найдено.</div>

        return this.props.historyOrders.val.map(
            (order) =>
                <HistoryItem order = {order} key = {order.orderID}/>
        );
    }
}

let stateToProps = (state) => {
    let orders = state.history.orders.val;

    //check auto
    orders = orders.filter( (ord) => {
        return state.history.form.driver === '' || state.history.form.driver === ord.autoID;
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
            dispatch(
                creators.historyOrderChange({
                    orderID: snap.key,
                    ...snap.val()
                })
            );
        });

        firebaseProj.database().ref("/orders").on('child_added', (snap) => {
            dispatch(
                creators.historyOrderAdd({
                    orderID: snap.key,
                    ...snap.val()
                })
            );
        });

        firebaseProj.database().ref("/orders").on('child_removed', (snap) => {
            dispatch(
                creators.historyOrderAdd(snap.key)
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