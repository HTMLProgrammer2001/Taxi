import {connect} from 'react-redux';

import DriverHOC from '../DriversHOC';

class DriverList extends React.Component{
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
    drivers = drivers.filter( (driver) => {
        return driver.name.includes(state.drivers.form.search);
    });

    drivers = drivers.sort( (a, b) => {
        return state.drivers.form.sortDir === 'ASC' ?
            a.sumRating/(a.countRating ? a.countRating : 1) < b.sumRating/(b.countRating ? b.countRating : 1)
            :
            a.sumRating/(a.countRating ? a.countRating : 1) > b.sumRating/(b.countRating ? b.countRating : 1)
    } );

    return {
        drivers
    }
};

export default connect(stateToProps, null)(DriverHOC(DriverList));