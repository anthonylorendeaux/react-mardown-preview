import React, { Component } from "react";
import {EditorContext, EditorContextType} from '../EditorContext';
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';

export const Editor: React.FC = () => {
    const { text, updateText } = React.useContext(EditorContext) as EditorContextType;

    function handleTextChange(value: string) {
        updateText(value);
    }
    
    return (
        <div className="w-4/5 h-full">
            <CodeMirror
                className="h-4/5 w-full"
                value={text}
                onChange={(value, viewUpdate) => {
                    handleTextChange(value)
                }}
                extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
            />
        </div>
    )
}