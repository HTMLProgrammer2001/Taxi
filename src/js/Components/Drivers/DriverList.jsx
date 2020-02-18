import {connect} from 'react-redux';

import firebaseProj from 'js/fareConfig';
import * as creators from 'js/actionCreators';

class DriverList extends React.Component{
    componentDidMount(){
        this.props.loadDrivers();
    }

    render(){
        return (
          <ul>
              {
                  this.props.drivers.map(
                  (driver) => {
                        return <li>{driver.name}</li>
                    }
                  )
              }
          </ul>
        );
    }
}

let stateToProps = (state) => {
    let drivers = state.drivers.list.val;

    //filter and sort drivers via form in store
    drivers = drivers.filter( (driver) => {
        return driver.name.includes(state.drivers.form.search);
    });

    drivers = drivers.sort( (a, b) => {
        return state.drivers.form.sortDir === 'ASC' ?
            +a.rating < +b.rating
                :
            +a.rating > +b.rating
    } );

    return {
        drivers
    }
},

    loadData = () => {
        return (dispatch) => {
            //real time update
            firebaseProj.database().ref("/auto").on('child_changed', (snap) => {
                dispatch(
                    creators.driverChange({
                        autoID: snap.key,
                        ...snap.val()
                    })
                );
            });

            firebaseProj.database().ref("/auto").on('child_added', (snap) => {
                dispatch(
                    creators.driverAdd({
                        autoID: snap.key,
                        ...snap.val()
                    })
                );
            });

            firebaseProj.database().ref("/auto").on('child_removed', (snap) => {
                dispatch(
                    creators.driverRemove(snap.key)
                );
            });
        }
    },

    dispatchToProps = (dispatch) => {
        return {
            loadDrivers: () => {
                dispatch(loadData())
            }
        };
    };

export default connect(stateToProps, dispatchToProps)(DriverList);