import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdmin = stream => {
        if (stream.userId === this.props.currentUser) {
            return (
                <div className="align-self-end ml-auto">
                    <Link to={`/streams/edit/${stream.id}`} className="btn btn-warning btn-block">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="btn btn-danger btn-block">Delete</Link>
                </div>
            )
        }
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div className="card mb-3" key={stream.id}>
                    <div className="card-body bg-primary text-white d-flex justify-content-start py-5">
                        <div>
                            <Link to={`/streams/show/${stream.id}`} className="text-white">
                                <i className="fas fa-play fa-3x"></i>
                            </Link>
                        </div>
                        <div className="ml-5">
                            <h3 className="card-title">
                                <Link to={`/streams/show/${stream.id}`} className="text-white">
                                    {stream.title}
                                </Link>
                            </h3>
                            <p className="card-text text-dark font-weight-bold">{stream.description}</p>
                        </div>
                        {this.renderAdmin(stream)}
                    </div>
                </div>
            )
        })
    }

    renderCreate = () => {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <div className="float-right">
                        <Link to="/streams/new">
                            <button className="btn btn-success p-3 font-weight-bold">Create Stream</button>
                        </Link>
                    </div>
                    <div className="clearfix"></div>
                </div>
            )
        }
    }

    render() {
        return (
            <>
                {/* Starting Greeting Here */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="text-center col-sm-12">
                            <h1 className="h2 mt-5">React & Redux (Streamy Tutorial App)</h1>
                        </div>
                    </div>
                </div>
                {/* Ending Greeting Here */}
                {/* Starting Showing The List of Streams Inside The App */}
                <div className="container-fluid">
                    <div className="row mt-5 py-5">
                        <div className="col-sm-12 col-md-8 offset-md-2">
                            {this.renderList()}
                            {this.renderCreate()}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUser: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,
    { fetchStreams })(StreamList);