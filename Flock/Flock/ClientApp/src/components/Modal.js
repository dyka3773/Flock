import React, { Children } from 'react';
import '../componentCSS/Modal.css';

const Modal = React.forwardRef(({onClose,children}, ref) => {



    return (
        <div className="ui custom-modal" ref={ref} onClick={onClose}>
            <div className="ui segment">
                <div className="button-wrapper">
                    <button className="ui button close" onClick={onClose}>
                        X
                    </button>
                </div>
                    
                
                
                {children}
            </div>
        </div>
        );
})

export default Modal;
