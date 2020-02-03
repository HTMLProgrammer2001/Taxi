import * as creators from 'js/actionCreators';
import * as stat from 'js/Components/Dashboard/const';

import {connect} from 'react-redux';

class HistoryForm extends React.Component{
    render(){
        return (
                <form>
                    <div className="form-group">
                        <label htmlFor="driver">Водитель:</label>

                        <select
                            name = "driver"
                            className="custom-select mb-3"
                            onChange = {(e) => this.props.changeDriver(e.target.value)}
                        >
                            <option value = "">All</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateStart">Начиная с:</label>

                        <input
                            type="date"
                            className="form-control mb-3"
                            placeholder="Date start"
                            onChange={(e) => this.props.changeStartDate(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateEnd">Заканчивая:</label>

                        <input
                            type="date"
                            className="form-control mb-3"
                            placeholder="Date end"
                            onChange={(e) => this.props.changeEndDate(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="orderStatus">Статус:</label>

                        <select
                            className="custom-select mb-3"
                            onChange = {(e) => this.props.changeStatus(e.target.value)}
                        >
                            <option value = "">All</option>
                            {
                                [stat.ORDER_FREE, stat.ORDER_WAIT, stat.ORDER_AUTO,
                                    stat.ORDER_MOVE, stat.ORDER_PAY, stat.ORDER_FINISHED].map(
                                    (status, key) => {
                                        return <option value = {status} key = {key}>{status}</option>;
                                    }
                                )
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="sortBy">Сортировать по:</label>

                        <select
                            className="custom-select mb-3"
                            onChange={(e) => this.props.changeSortField(e.target.value)}
                        >
                            <option value="orderCreate">Date of create</option>
                            <option value="status">Status</option>
                            <option value="orderID">ID</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="sortDir">Порядок сортировки:</label>

                        <div className="custom-control custom-radio">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name = "sortDir"
                                value="ASC"
                                defaultChecked={true}
                                onClick={(e) => {
                                    this.props.changeSortDir(e.target.form.sortDir.value);
                                }}
                                style = {{zIndex: 9999}}
                            />
                            <label
                                htmlFor="sortDir"
                                className="custom-control-label"
                            >ASC</label>
                        </div>

                        <div className="custom-control custom-radio">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name = "sortDir"
                                value = "DESC"
                                onClick={(e) => {
                                    this.props.changeSortDir(e.target.form.sortDir.value);
                                }}
                                style = {{zIndex: 9999}}
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="sortDir"
                            >DESC</label>
                        </div>
                    </div>
                </form>
        );
    }
}

let stateToProps = (state) => {
    return {
        historyForm: state.history.form,
    };
};

let dispatchToProps = (dispatch) => {
    return {
        changeDriver: (pay) => dispatch(creators.historyDriverChange(pay)),
        changeStartDate: (pay) => dispatch(creators.historyDateStartChange(pay)),
        changeEndDate: (pay) => dispatch(creators.historyDateEndChange(pay)),
        changeStatus: (pay) => dispatch(creators.historyStatusChange(pay)),
        changeSortField: (pay) => dispatch(creators.historySortFieldChange(pay)),
        changeSortDir: (pay) => dispatch(creators.historySortDirectionChange(pay))
    };
};

export default connect(stateToProps, dispatchToProps)(HistoryForm);