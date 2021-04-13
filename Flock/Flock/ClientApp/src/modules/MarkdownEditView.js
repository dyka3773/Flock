import React, { useState } from 'react';
import MarkdownEditor from '../components/MarkdownEditor';
import MarkdownViewer from '../components/MarkdownViewer';

const MarkdownEditView = () => {

    const [editorValue, setEditorValue] = useState("");
    
    const get = document.getElementsByClassName("markdown-viewer") ?
                    document.getElementsByClassName("markdown-viewer")[0]
                    :
                    <div></div>
    
    console.log(get);
    
    return (
        <div>
            <h1>Markdown Editor/Viewer</h1>
            <MarkdownEditor value={editorValue} onChange={setEditorValue}/>
            <MarkdownViewer value={editorValue} />
        </div>
        );

}

export default MarkdownEditView;