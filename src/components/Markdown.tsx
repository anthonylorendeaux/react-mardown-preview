import React, { Component } from "react";
import {EditorContext, EditorContextType} from '../EditorContext';

export const Markdown: React.FC = () => {
    const { text } = React.useContext(EditorContext) as EditorContextType;  
    return (
        <div className="w-4/5  h-full">
            <p> {text}</p>
        </div>
    )
}