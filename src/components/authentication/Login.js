import React from "react";
import {Form, FormGroup, Label, Input, Button, Card, CardText, CardTitle, Row, Col} from 'reactstrap';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import {loadTokens} from '../../actions/tokenActions';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        if(this.props.isLoggedIn) {
            browserHistory.push('/dashboard');
        }
        this.state = {
            username: '',
            password: ''
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }


    redirectTo(e) {
        browserHistory.push(e.target.getAttribute("to"));

    }
    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    signIn() {
        this.props.loadTokens(this.state.username, this.state.password);
        browserHistory.push("/getCurrentUser");
    }


    render() {
        return (
            <div>
                    <Card block>
                        <CardTitle>Login</CardTitle>
                        <CardText>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="username" hidden>Username</Label>
                                        <Input type="text" name="username" id="username" value={this.state.username} onChange={this.handleUsernameChange} placeholder="Username" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <Label for="password" hidden>Password</Label>
                                        <Input type="password" name="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardText>
                        <Button onClick={this.signIn}>Sign in</Button>
                        <Button onClick={this.redirectTo} to="/register">Sign up</Button>
                    </Card>
            </div>
        );
    }

}

let mapStateToProps = function(state) {
    return {
        access_token: state.tokens.access_token
    };
};

let mapDispatchToProps = function (dispatch) {
    return({
        loadTokens: (username, password) => {
            dispatch(loadTokens(username, password));
        }
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);