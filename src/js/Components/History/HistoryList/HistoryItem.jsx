import * as stat from 'js/Components/Dashboard/const';

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
        return Object.entries(props.drivers).find(
            ([drivID, driver]) => id === drivID
        ) || [null, {name: ''}];
    }

    function createContent(order){
        if(order.status !== stat.ORDER_FREE){
            if(order.status === stat.ORDER_FINISHED) {
                return (
                    <div>
                        <div>Водитель: {findDriver(order.autoID)[1].name + '/' + order.autoID}</div>
                        <div>Дата принятия: {new Date(order.orderAccept).toLocaleString()}</div>
                        <div>Дата завершения: {new Date(order.orderFinished).toLocaleString()}</div>
                        <div className="small text-right text-secondary">{order.price} грн</div>
                    </div>
                );
            }

            return (
                <div>
                    <div>Водитель: {findDriver(order.autoID)[1].name + '/' + order.autoID}</div>
                    <div>Дата принятия: {new Date(order.orderAccept).toLocaleString()}</div>
                </div>
            );
        }
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
                <div>Создан: {new Date(props.order.orderCreate).toLocaleString()}</div>

                {createContent(props.order)}
            </div>
        </div>
    );
}

export default HistoryItem;