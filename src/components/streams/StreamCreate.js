import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
    onFormSubmit = formValues => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row p-5">
                        <div className="col-sm-12 col-md-10 offset-md-1">
                            <h2 className="text-center h1 text-white mt-3 font-weight-bold">Start New Stream</h2>
                            <StreamForm onSubmit={this.onFormSubmit} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(null, { createStream })(StreamCreate)