import {Redirect} from 'react-router-dom';

function Error(props){
    if(props.error)
        return (
            <div className="alert alert-danger">
                {props.error}
            </div>
        );
    else
        if(props.error === '' && props.successRedirect)
            return (
                <Redirect to = {props.successRedirect} push = {true}/>
            );

    return null;
}

export default Error;