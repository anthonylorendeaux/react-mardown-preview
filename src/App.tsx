import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Editor} from './components/Editor';
import EditorContext from './EditorContext';

const App: React.FC = () => {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText: "Test markdown",
  };

  return (
    <EditorContext.Provider value={contextValue}>
          <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white items-center rounded-2xl border shadow-xl p-10 w-10/12 h-4/6">
        {/* Make component */}
        <header>
          <h1 className="text-center text-xl "> Markdown preview editor </h1>
        </header>
        {/* Two part one text editor other text review */}
        <div className="container flex flex-row justify-between h-full">
          <Editor/>
          <div className="w-4/5 h-full">
            <p> Markdown preview</p>
          </div>
        </div>
      </div>
    </div>
    </EditorContext.Provider>
  )
};

export default App
