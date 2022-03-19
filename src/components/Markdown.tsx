import React, { Component } from "react";
import {EditorContext, EditorContextType} from '../EditorContext';
import ReactMarkdown from 'react-markdown'
import MarkdownPreview from '@uiw/react-markdown-preview';

export const Markdown: React.FC = () => {
    const { text } = React.useContext(EditorContext) as EditorContextType;  
    return (
        <div className="w-4/5 h-4/5">
             <MarkdownPreview source={text}/>
        </div>
    )
}