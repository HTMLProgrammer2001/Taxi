import Layout from 'js/Layout';
import HistoryForm from './HistoryForm';
import HistoryList from './HistoryList/';

function History(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <HistoryList/>
                </div>
                <div className="col-sm-4">
                    <HistoryForm/>
                </div>
            </div>
        </div>
    );
}

export default Layout(History);