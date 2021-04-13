import React, { Children } from 'react';
import '../componentCSS/Modal.css';

const Modal = React.forwardRef(({onClose,children}, ref) => {



    return (
        <div className="ui custom-modal" ref={ref} onClick={onClose}>
            <div className="segment ui">
                <button className="ui basic button close" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
        );
})

export default Modal;
