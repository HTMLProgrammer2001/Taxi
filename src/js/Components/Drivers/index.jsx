import Layout from 'js/Layout';
import DriverForm from './DriverForm';
import DriverList from './DriverList/';

function Drivers(){
    return (
        <div className="container p-3 d-flex justify-content-center">
            <div className="col-sm-6 col-md-9 col-sm-12">
                <div className="card py-3">
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