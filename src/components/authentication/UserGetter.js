import React, {PropTypes} from "react";
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import {loadCurrentUser} from '../../actions/currentUserActions';
import Loader from '../common/Loader';

class UserGetter extends React.Component {
    constructor(props, context) {
        super(props, context);
        /*if(this.props.isLoggedIn) {
            browserHistory.push('/dashboard');
        }*/
        this.getCurrentUser = this.getCurrentUser.bind(this);
    }

    getCurrentUser() {
        this.props.loadCurrentUser(this.props.access_token);
    }


    render() {
        if(this.props.currentUser != null) {
            browserHistory.push("/dashboard");
        }

        if(this.props.access_token != null) {
            this.getCurrentUser();
        }

        return (
            <div className="row justify-content-center m-0 p-0 pt-5">
                <Loader />
            </div>
        );
    }

}

UserGetter.propTypes = {
    access_token: PropTypes.object.isRequired,
    currentUser: PropTypes.object.isRequired,
    loadCurrentUser: PropTypes.object.isRequired
};

let mapStateToProps = function(state) {
    return {
        access_token: state.tokens.access_token,
        currentUser: state.currentUser
    };
};

let mapDispatchToProps = function (dispatch) {
    return({
        loadCurrentUser: (access_token) => {
            dispatch(loadCurrentUser(access_token));
        }
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(UserGetter);