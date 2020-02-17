import Layout from 'js/Layout';
import HistoryForm from './HistoryForm';
import HistoryList from './HistoryList/';

function History(){
    return (
        <div className="container p-3">
            <div className="row">
                <div className="col-sm-8 pr-5">
                    <HistoryList/>
                </div>
                <div className="col-sm-4 bg-white mt-sm-3">
                    <HistoryForm/>
                </div>
            </div>
        </div>
    );
}

export default Layout(History);