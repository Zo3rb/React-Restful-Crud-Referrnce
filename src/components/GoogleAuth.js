import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '814826596857-q3nl1jpjsoidpbvcsc0bjbs4o3o4qaoe.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        }
        else {
            this.props.signOut()
        }
    }

    onSignIn = () => this.auth.signIn()
    onSignOut = () => this.auth.signOut()

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        }
        else if (this.props.isSignedIn) {
            return (
                <li className="nav-item mr-3">
                    <button className="btn btn-danger p-2" onClick={this.onSignOut}>
                        Sign Out <i className="fas fa-sign-out-alt"></i>
                    </button>
                </li>
            )
        }
        return (
            <li className="nav-item mr-3">
                <button className="btn btn-danger p-2" onClick={this.onSignIn}>
                    Sign In With <i className="fab fa-google"></i>
                </button>
            </li>
        )
    }

    render() {
        return (
            <>
                {this.renderAuthButton()}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);