import * as creators from 'js/actionCreators';
import * as stat from 'js/Components/Dashboard/const';
import firebaseProj from 'js/fareConfig';

//date picker


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
                        <div className="custom-control custom-switch">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="sortDir"
                                onChange={
                                    (e) =>
                                        this.props.historyFilterChange(
                                            creators.historySortDirectionChange(!e.target.checked ? 'ASC' : 'DESC')
                                        )
                                }/>

                            <label htmlFor="sortDir" className="custom-control-label">Сортировка по убыванию</label>
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