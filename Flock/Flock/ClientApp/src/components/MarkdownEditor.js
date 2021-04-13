import React from 'react';
import ReactMarkdown from 'react-markdown';
import { render } from 'react-dom';

const MarkdownEditor = ({value, onChange}) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div className="ui form markdown-editor">
            <div className="field">
                <label>Text</label>
                <textarea
                    onChange={handleChange}
                    value={value}
                ></textarea>
            </div>
        </div>
        );


}

export default MarkdownEditor;



