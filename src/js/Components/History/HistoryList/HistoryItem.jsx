import * as stat from 'js/Components/Dashboard/const';

function HistoryItem(props){
    function createContent(order){
        if(order.status !== stat.ORDER_FREE){
            if(order.status === stat.ORDER_FINISHED) {
                return (
                    <div>
                        <div>Дата принятия: {new Date(order.orderAccept).toLocaleString()}</div>
                        <div>Дата завершения: {new Date(order.orderFinished).toLocaleString()}</div>
                        <div>Цена: {order.price} грн</div>
                    </div>
                );
            }

            return (
                <div>
                    <div>ID водителя: {order.autoID}</div>
                    <div>Дата принятия: {new Date(order.orderAccept).toLocaleString()}</div>
                </div>
            );
        }
    }

    return (
        <div className="card" key = {props.order.orderID}>
            <div className="card-body">
                <div>Заказ №: {props.order.orderID}</div>
                <div>Начальный адресс: {props.order.start}</div>
                <div>Конечный адресс: {props.order.destination}</div>
                <div>Статус: {props.order.status}</div>
                <div>Создан: {new Date(props.order.orderCreate).toLocaleString()}</div>

                {createContent(props.order)}
            </div>
        </div>
    );
}

export default HistoryItem;