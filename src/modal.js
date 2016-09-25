import React from 'react';
import {  Link } from 'react-router'

const Modal = React.createClass({
    render() {
        return (
            <div id="myModal" class="modal">

                <div class="modal-content">
                    <span class="close">x</span>
                    <p>Some text in the Modal..</p>
                </div>

            </div>
        )
    }
});
export default Modal;
