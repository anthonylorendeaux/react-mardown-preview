import React, { Component } from "react";
import {EditorContext, EditorContextType} from '../EditorContext';

export const Editor: React.FC = () => {
    const { text, updateText } = React.useContext(EditorContext) as EditorContextType;

    function handleTextChange() {
        var textZ = "updated";
        console.log('Change:' + textZ)
        updateText(textZ);
    }
    
    return (
        <div className="w-4/5  h-full">
            <button onClick={handleTextChange}> {text} </button>
        </div>
    )
}