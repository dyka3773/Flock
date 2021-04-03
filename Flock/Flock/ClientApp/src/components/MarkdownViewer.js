import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const MarkdownViewer = ({value}) => {

    const renderers = {
        name: () => {
            return <h1>awwwwww</h1>
        },

    }
    
    return (
        <div class="ui segment markdown-viewer">
           
            <ReactMarkdown children={value} skipHtml plugins={[gfm]} renderer={renderers}/> 
        </div>
        );


}

export default MarkdownViewer;