import * as creators from 'js/actionCreators';
import * as stat from 'js/Components/Dashboard/const';
import firebaseProj from 'js/fareConfig';

import {connect} from 'react-redux';

class HistoryForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {auto: []}
    }

    componentDidMount(){
        firebaseProj.database().ref('/auto').once('value', (snap) => {
            this.setState({
                auto: snap.val()
            });
        });
    }

    render(){
        return (
                <form className="mt-sm-3">
                    <div className="form-group">
                        <label htmlFor="driver">Водитель:</label>

                        <select
                            name = "driver"
                            className="custom-select mb-3"
                            value = {this.props.historyForm.driver || ''}
                            onChange = {
                                (e) => this.props.historyFilterChange(
                                    creators.historyDriverChange(e.target.value)
                                )
                            }
                        >
                            <option value = "">Все</option>

                            {
                                Object.entries(this.state.auto).map(([key, auto]) => {
                                    return <option value = {key} key = {key}>{auto.name}(ID: {key})</option>;
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateStart">Начиная с:</label>

                        <input
                            type="date"
                            className="form-control mb-3"
                            placeholder="Date start"
                            value = {this.props.historyForm.dateStart || ''}
                            onChange={
                                (e) => this.props.historyFilterChange(
                                    creators.historyDateStartChange(e.target.value)
                                )
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateEnd">Заканчивая до:</label>

                        <input
                            type="date"
                            className="form-control mb-3"
                            placeholder="Date end"
                            value = {this.props.historyForm.dateEnd || ''}
                            onChange={
                                (e) => this.props.historyFilterChange(
                                    creators.historyDateEndChange(e.target.value)
                                )
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="orderStatus">Статус:</label>

                        <select
                            className="custom-select mb-3"
                            value = {this.props.historyForm.status || ''}
                            onChange={
                                (e) => this.props.historyFilterChange(
                                    creators.historyStatusChange(e.target.value)
                                )
                            }
                        >
                            <option value = "">Все</option>
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
                            value = {this.props.historyForm.sortBy || ''}
                            onChange={
                                (e) => this.props.historyFilterChange(
                                    creators.historySortFieldChange(e.target.value)
                                )
                            }
                        >
                            <option value="orderCreate">Дате создания</option>
                            <option value="status">Статусу</option>
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
                                defaultChecked={this.props.historyForm.sortDir === 'ASC'}
                                onClick={
                                    (e) => this.props.historyFilterChange(
                                        creators.historySortDirectionChange(e.target.form.sortDir.value)
                                    )
                                }
                                style = {{zIndex: 9999}}
                            />
                            <label
                                htmlFor="sortDir"
                                className="custom-control-label"
                            >Прямой</label>
                        </div>

                        <div className="custom-control custom-radio">
                            <input
                                type="radio"
                                className="custom-control-input"
                                name = "sortDir"
                                value = "DESC"
                                onClick={
                                    (e) => this.props.historyFilterChange(
                                        creators.historySortDirectionChange(e.target.form.sortDir.value)
                                    )
                                }
                                defaultChecked={this.props.historyForm.sortDir === 'DESC'}
                                style = {{zIndex: 9999}}
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="sortDir"
                            >Обратный</label>
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
        historyFilterChange: (action) => dispatch(action)
    };
};

export default connect(stateToProps, dispatchToProps)(HistoryForm);