import {
    Card, CardBody, Row, Col,
    CardTitle, Form, FormGroup, Label, Input, FormFeedback, FormText
} from 'reactstrap';

import {
    toast,
    ToastContainer
} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default () => {
    let props = {invalid: true};

    return (
        <div>
            <Row>
                <Col md="6">
                    <Card className="main-card mb-3">
                        <CardBody>
                            <CardTitle>Basic</CardTitle>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Input without validation</Label>
                                    <Input/>
                                    <FormFeedback>You will not be able to see this</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Valid input</Label>
                                    <Input valid onChange={(e)=>console.log(e.target.value)}/>
                                    <FormFeedback valid>Sweet! that name is available</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Invalid input</Label>
                                    <Input invalid/>
                                    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card className="main-card mb-3">
                        <CardBody className="pb-5">
                            <CardTitle>Alternate Style</CardTitle>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Input without validation</Label>
                                    <Input/>
                                    <FormFeedback tooltip>You will not be able to see this</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Valid input</Label>
                                    <Input valid/>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Invalid input</Label>
                                    <Input invalid onChange = {(e) => toast(e.target.value)}/>
                                    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                    <FormText>Example help text that remains unchanged.</FormText>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>

            <ToastContainer/>
        </div>
    );
}