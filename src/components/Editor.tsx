import React, { Component } from "react";
import EditorContext from '../EditorContext';

export const Editor: React.FC = () => {
    const editorContext = React.useContext(EditorContext);

    function handleTextChange() {
        console.log('Change')
    }
    
    return (
        <div className="w-4/5  h-full">
            <p onClick={handleTextChange}> {editorContext?.markdownText} </p>
        </div>
    )
}