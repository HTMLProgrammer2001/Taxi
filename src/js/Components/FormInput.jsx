import {FormFeedback, FormGroup, Input} from "reactstrap";

//пробрасываем ссылку
export default React.forwardRef( (props, ref) => {
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
                ref = {ref}
                invalid = {!!state.fieldsError[props.name]}
                valid = {!state.fieldsError[props.name] && state.fieldsValue[props.name]}
            />
            <FormFeedback invalid>{state.fieldsError[props.name]}</FormFeedback>
            <FormFeedback valid>OK!</FormFeedback>
        </FormGroup>
    )
} );