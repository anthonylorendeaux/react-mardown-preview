import React, { createContext, useEffect, useState } from 'react';

export type EditorContextType = {
    text: string,
    updateText: (text: string) => void;
};

export const EditorContext = createContext<EditorContextType | null>(null);

const EditorProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [text, setText] = useState<string>("");

    useEffect(() => {
        setText("# Your document");
      });

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
