import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import PreLoader from '../PreLoader';

class StreamShow extends Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return (
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 offset-md-2">
                            <div class="card">
                                <PreLoader />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container-fluid">
                <div className="row p-5">
                    <div className="col-sm-12 col-md-8 offset-md-2">
                        <div className="card">
                            <img src="" className="card-img-top" alt={this.props.stream.title} />
                            <div className="card-body bg-primary text-white py-3">
                                <h3 className="card-title">{this.props.stream.title}</h3>
                                <p className="card-text">{this.props.stream.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
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
    { fetchStream })(StreamShow);