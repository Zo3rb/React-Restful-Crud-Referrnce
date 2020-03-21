import React from 'react';
import ReactDOM from 'react-dom';
import history from '../browserHistory';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document" onClick={() => history.push("/")}>
                <div className="modal-content">
                    <div className="modal-header bg-danger text-white">
                        <h5 className="modal-title" id="exampleModalLabel">{props.header}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-5 text-dark">
                        <h5>{props.content}</h5>
                    </div>
                    <div className="modal-footer">
                        {props.action}
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>, document.querySelector('#modal')
    )
}

export default Modal;
