import React, { useState } from 'react';
import MarkdownEditor from '../components/MarkdownEditor';
import MarkdownViewer from '../components/MarkdownViewer';

import '../modulesCSS/MarkdownEditView.css'

const MarkdownEditView = ({ editorValue, setEditorValue }) => {

    
    
    const get = document.getElementById("markdown-viewer") ?
                    document.getElementById("markdown-viewer")
                    :
                    <div></div>
    
    console.log(get);
    
    return (
        <div id="markdown-edit-view">
            <MarkdownEditor value={editorValue} onChange={setEditorValue}/>
            <MarkdownViewer value={editorValue} />
        </div>
        );

}

export default MarkdownEditView;