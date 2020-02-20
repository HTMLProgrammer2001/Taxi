import {connect} from 'react-redux';
import firebaseProj from 'js/fareConfig';
import * as creators from 'js/actionCreators';

let stateToProps = (state) => {
        return {
            loaded: state.drivers.list.loaded
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
                dispatch(creators.driverLoad());
                dispatch(loadData());
            }
        };
    };

export default function(Elem){
    class WrappedElem extends React.Component{
        componentDidMount(){
            if(!this.props.loaded)
                this.props.loadDrivers();
        }

        render(){
            return <Elem {...this.props}/>
        }
    }

    return connect(stateToProps, dispatchToProps)(WrappedElem);
}