import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { render } from 'react-dom';
import gfm from 'remark-gfm';

const MarkdownViewer = ({value}) => {

    
    console.log(<ReactMarkdown children={value} skipHtml renderers={renderers} />);
    return (
        <div class="ui segment markdown-viewer">
           
            <ReactMarkdown children={value} skipHtml plugins={[gfm]}/> 
        </div>
        );


}

export default MarkdownViewer;