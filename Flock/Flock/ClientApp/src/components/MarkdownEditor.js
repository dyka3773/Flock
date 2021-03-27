import React from 'react';
import ReactMarkdown from 'react-markdown';
import { render } from 'react-dom';

const MarkdownEditor = ({value, onChange}) => {

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <div class="ui form markdown-editor">
            <div class="field">
                <label>Text</label>
                <textarea
                    onChange={handleChange}
                    value={value}
                />
            </div>
        </div>
        );


}

export default MarkdownEditor;