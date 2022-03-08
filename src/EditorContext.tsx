import React, { createContext } from 'react';

export type EditorContextType = {
    text: string,
    updateText: (text: string) => void;
};

export const EditorContext = createContext<EditorContextType | null>(null);

const EditorProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [text, setText] = React.useState<string>("# Edit me");
    
    const updateText = (text: string) => {
        setText(text);
    }

    return (
        <EditorContext.Provider value={{ text, updateText }}>
            {children}
        </EditorContext.Provider>
    );
}

export default EditorProvider;
