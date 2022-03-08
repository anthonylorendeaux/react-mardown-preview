import React, { Component } from "react";
import {EditorContext, EditorContextType} from '../EditorContext';

export const Editor: React.FC = () => {
    const { text, updateText } = React.useContext(EditorContext) as EditorContextType;

    function handleTextChange(event: any) {
        updateText(event.target.value);
    }
    
    return (
        <div className="w-4/5  h-full">
            <textarea value={text} onChange={handleTextChange}></textarea>
        </div>
    )
}