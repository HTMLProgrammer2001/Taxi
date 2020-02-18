import Layout from 'js/Layout';
import DriverForm from './DriverForm';
import DriverList from './DriverList';

function Drivers(){
    return (
        <div className="container p-3">
            <div>
                <div className="">
                    <DriverForm/>
                </div>
                <div>
                    <DriverList/>
                </div>
            </div>
        </div>
    );
}

export default Layout(Drivers);