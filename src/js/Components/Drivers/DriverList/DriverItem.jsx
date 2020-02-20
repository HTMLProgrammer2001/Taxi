import Rating from '../../Dashboard/Rating';
import * as stat from 'js/Components/Dashboard/const';

let colors = {
    [stat.AUTO_FREE]: 'success',
    [stat.AUTO_ORDER]: 'warning',
    [stat.AUTO_WAIT]: 'warning',
    [stat.AUTO_MOVE]: 'danger',
    [stat.AUTO_PAY]: 'secondary'
};

function DriverItem(props) {
    return (
        <div className="card" key = {props.driver.autoID}>
            <div className="card-body">
                <div className="small d-flex justify-content-between mb-3">
                    <div className={`text-${colors[props.driver.status]}`}>{props.driver.status}</div>
                    <div className="text-secondary">#{props.driver.autoID}</div>
                </div>

                <div className="d-flex">
                    <img src = {props.driver.photo} width="100px" height="100px" className="mr-3"/>

                    <div>
                        <div>Имя: {props.driver.name}</div>
                        <div>Номер машины: {props.driver.nomer}</div>
                    </div>
                </div>

                <div className="d-flex mt-3 justify-content-end">
                    <div>
                        <Rating
                            rat={
                                props.driver.sumRating/(props.driver.countRating ? props.driver.countRating : 1)
                            }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DriverItem;