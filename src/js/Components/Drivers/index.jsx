import Layout from 'js/Layout';
import DriverForm from './DriverForm';
import DriverList from './DriverList';

function Drivers(){
    return (
        <div className="container p-3">
            <div className="row">
                <div className="col-md-8 col-sm-12 pr-5 ord-sm-2">
                    <DriverList/>
                </div>
                <div className="col-md-4 col-sm-12 bg-white mt-sm-3 ord-sm-1 history-form">
                    <DriverForm/>
                </div>
            </div>
        </div>
    );
}

export default Layout(Drivers);