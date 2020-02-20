import {connect} from 'react-redux';

import DriverHOC from '../../DriversHOC';
import DriverItem from './DriverItem';

class DriverList extends React.Component{
    render(){
        return (
            <ul className="p-0">
                {
                    !this.props.drivers || !this.props.drivers.length ?
                        <div className="card p-3">
                            Ничего не найдено
                        </div>
                            :
                        null
                }

                {
                    this.props.drivers.map(
                        (driver) => {
                            return <DriverItem driver = {driver}/>
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