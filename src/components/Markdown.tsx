import React, { Component } from "react";
import {EditorContext, EditorContextType} from '../EditorContext';
import ReactMarkdown from 'react-markdown'

export const Markdown: React.FC = () => {
    const { text } = React.useContext(EditorContext) as EditorContextType;  
    return (
        <div className="w-4/5  h-full">
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    )
}