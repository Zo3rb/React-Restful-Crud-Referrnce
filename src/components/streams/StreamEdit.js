import _ from 'lodash'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import PreLoader from '../PreLoader';
import StreamForm from './StreamForm';

class StreamEdit extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmitForm = formValues => {
        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.stream) {
            return (
                <div className="container-fluid">
                    <div className="row p-5">
                        <div className="col-sm-12 col-md-8 offset-md-2">
                            <PreLoader />
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container-fluid">
                <div className="row py-5">
                    <div className="col-sm-12 col-md-10 offset-md-1">
                        <h3 className="text-center text-white mt-3 font-weight-bold">{this.props.stream.title}</h3>
                        <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')}
                            onSubmit={this.onSubmitForm}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
