import {FormFeedback, FormGroup, Input} from "reactstrap";

export default function FormInput(props){
    let state = props.state,
        stateToProps = {};

    for(let key in props){
        if(key !== 'state')
            stateToProps[key] = props[key];
    }

    return (
        <FormGroup>
            <Input
                value = {state.fieldsValue[props.name] || ''}
                {...stateToProps}
                invalid = {!!state.fieldsError[props.name]}
                valid = {!state.fieldsError[props.name] && state.fieldsValue[props.name]}
            />
            <FormFeedback invalid>{state.fieldsError[props.name]}</FormFeedback>
            <FormFeedback valid>OK!</FormFeedback>
        </FormGroup>
    )
}