
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as duck from '../duck';
import Radium, {StyleRoot} from 'radium';
import RaisedButton from 'material-ui/RaisedButton';

// dumb component
import Login from '../component/login';


const styles = {
    body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh'
    }
}

class LoginContainer extends React.Component {
    render() {
        return (
            <StyleRoot>
                <div style={styles.body}>
                    <p>Welcome to React App Boilerplate</p>
                    <Login />
                    <RaisedButton label="Thank you" primary={true} />
                </div>
            </StyleRoot>
        )
    }
}

export default connect (
    (state) => state.loginReducer,
    (dispatch) => ({actions: bindActionCreators(duck, dispatch)})
)(LoginContainer);