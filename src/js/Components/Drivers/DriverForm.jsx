import {connect} from 'react-redux';
import * as creators from 'js/actionCreators';

function DriverForm(props){
    return (
      <form className="row d-flex justify-content-between align-items-center px-5">
          <div className="form-group w-50 m-0">
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
          </div>

          <div className="form-group m-0">
              <div className="custom-control custom-switch">
                  <input
                      type="checkbox"
                      checked={props.driverForm.sortDir === 'ASC'}
                      className="custom-control-input"
                      id="sortDir"
                      onChange = {
                          (e) => props.driverFormChange(
                              creators.driverSortDirectionChange(e.target.checked ? 'ASC' : 'DESC')
                          )
                      }/>

                  <label htmlFor="sortDir" className="custom-control-label">По убыванию</label>
              </div>
          </div>
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