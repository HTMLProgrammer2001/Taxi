import {connect} from 'react-redux';
import * as creators from 'js/actionCreators';

function DriverForm(props){
    return (
      <form className="row d-flex justify-content-between">
          <input
              type = "text"
              className="form-control"
              value={props.driverForm.search}
              placeholder="Поиск..."
              onChange = {
                  (e) => props.driverFormChange(
                      creators.driverSearchChange(e.target.value)
                  )
              }
          />

          <input
              type = "checkbox"
              className="form-control"
              checked={props.driverForm.sortDir === 'ASC'}
              onChange = {
                  (e) => props.driverFormChange(
                      creators.driverSortDirectionChange(e.target.checked ? 'ASC' : 'DESC')
                  )
              }
          />

      </form>
    );
}

let stateToProps = (state) => {
        return {
            driverForm: state.drivers.form
        }
    },
    dispatchToProps = (dispatch) => {
        return {
            driverFormChange: (action) => dispatch(action)
        };
    };

export default connect(stateToProps, dispatchToProps)(DriverForm);