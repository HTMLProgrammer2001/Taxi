import * as creators from 'js/actionCreators';

import {connect} from 'react-redux';

class HistoryForm extends React.Component{
    render(){
        return (
                <form>
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Driver"
                        onChange={(e) => this.props.changeDriver(e.target.value)}
                    />

                        <input
                            type="datetime"
                            className="form-control mb-3"
                            placeholder="Date start"
                            onChange={(e) => this.props.changeStartDate(e.target.value)}
                        />

                        <input
                            type="datetime"
                            className="form-control mb-3"
                            placeholder="Date end"
                            onChange={(e) => this.props.changeEndDate(e.target.value)}
                        />

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="status"
                        onChange={(e) => this.props.changeStatus(e.target.value)}
                    />
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
        changeStatus: (pay) => dispatch(creators.historyStatusChange(pay))
    };
};

export default connect(stateToProps, dispatchToProps)(HistoryForm);