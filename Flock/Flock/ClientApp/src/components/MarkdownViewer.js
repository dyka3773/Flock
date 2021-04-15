import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const MarkdownViewer = ({value}) => {

    
    
    return (
        <div className="ui segment" id="markdown-viewer">
           
            <ReactMarkdown children={value} skipHtml plugins={[gfm]}/> 
        </div>
        );


}

export default MarkdownViewer;