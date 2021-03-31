import React from 'react';
import '../componentCSS/Modal.css';

const Modal = React.forwardRef(({onClose}, ref) => {



    return (
        <div className="ui custom-modal" ref={ref} onClick={onClose}>
            <div className="segment ui">
                <button className="ui basic button close" onClick={onClose}>
                    X
                </button>
                <div class="header">Header</div>
                <div class="content">
                    <p>asdasd</p>
                    <p>asdasd</p>
                    <p>asdasd</p>
                </div>
            </div>
        </div>
        );
})

export default Modal;
