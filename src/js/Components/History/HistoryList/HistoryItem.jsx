import * as stat from 'js/Components/Dashboard/const';

import {connect} from 'react-redux';

let colors = {
    [stat.ORDER_FREE]: 'primary',
    [stat.ORDER_WAIT]: 'warning',
    [stat.ORDER_AUTO]: 'warning',
    [stat.ORDER_MOVE]: 'danger',
    [stat.ORDER_PAY]: 'secondary',
    [stat.ORDER_FINISHED]: 'success'
};

function HistoryItem(props){
    function findDriver(id){
        return props.drivers.find(
            (driver) => driver.autoID === id
        ) || {name: ''};
    }

    function createContent(order){
        if(order.status !== stat.ORDER_FREE){
            if(order.status === stat.ORDER_FINISHED) {
                return (
                    <div>
                        <div className="mb-3">Водитель: {findDriver(order.autoID).name + '/' + order.autoID}</div>

                        <div className="small d-flex justify-content-between">
                            <div className="text-secondary">{new Date(props.order.orderCreate).toLocaleString()}</div>
                            <div className="text-secondary">{order.price} грн</div>
                        </div>
                    </div>
                );
            }

            return (
                <div>
                    <div className="mb-3">Водитель: {findDriver(order.autoID).name + '/' + order.autoID}</div>

                    <div className="small d-flex justify-content-between">
                        <div className="text-secondary">{new Date(props.order.orderCreate).toLocaleString()}</div>
                        <div className="text-secondary"> </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="small d-flex justify-content-between mt-3">
                <div className="text-secondary">{new Date(props.order.orderCreate).toLocaleString()}</div>
                <div className="text-secondary"> </div>
            </div>
        );
    }

    return (
        <div className="card" key = {props.order.orderID}>
            <div className="card-body">
                <div className="small d-flex justify-content-between mb-3">
                    <div className={`text-${colors[props.order.status]}`}>{props.order.status}</div>
                    <div className="text-secondary">#{props.order.orderID}</div>
                </div>

                <div>Откуда: {props.order.start}</div>
                <div>Куда: {props.order.destination}</div>

                {createContent(props.order)}
            </div>
        </div>
    );
}

let stateToProps = (state) => {
    return {
        drivers: state.drivers.list.val
    }
};

export default connect(stateToProps, null)(HistoryItem);