import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends Component {
    myRef = React.createRef()
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
        this.myRef.current.click()
    }

    action = () => {
        const { id } = this.props.match.params
        return <button data-dismiss="modal" type="button" onClick={() => this.props.deleteStream(id)} className="btn btn-danger">Delete</button>
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }

        return `Are you sure you want to delete the stream with title: ${
            this.props.stream.title
            }`;
    }

    render() {
        return (
            <div>
                <button style={{ display: 'none' }} type="button" ref={this.myRef} data-toggle="modal" data-target="#exampleModal"></button>
                <Modal header={"Delete Stream"}
                    content={this.renderContent()}
                    action={this.action()}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps,
    { fetchStream, deleteStream })
    (StreamDelete);