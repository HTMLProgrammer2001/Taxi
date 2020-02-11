import CropForm from "./Crop/CropForm";

import 'bootstrap';

class Test extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            file: null
        };

        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div>
                <div className="btn btn-primary" data-target = "#changeAva" data-toggle = "modal">Обновить</div>

                <div className="modal fade" role="dialog" id = "changeAva">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span data-dismiss = "modal">T</span>
                            </div>

                            <div className="modal-body">
                                <input type="file" onChange={this.onChange}/>
                                {this.state.file ? <CropForm file = {this.state.file}/> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    }


    onChange(e){
        this.setState({file: e.target.files[0]});
    }
}

export default Test;