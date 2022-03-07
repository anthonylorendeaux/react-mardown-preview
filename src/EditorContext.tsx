import React from "react";

interface MarkdownContextInterface {
    markdownText: string;
}


export default React.createContext<MarkdownContextInterface | null>(null);