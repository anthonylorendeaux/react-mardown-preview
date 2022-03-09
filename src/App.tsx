import {Editor} from './components/Editor';
import {Markdown} from './components/Markdown';
import EditorProvider from './EditorContext';

const App: React.FC = () => {
  return (
    <EditorProvider>
          <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white items-center rounded-2xl border shadow-xl p-10 w-10/12 h-4/6">
        <header>
          <h1 className="text-center text-xl "> Markdown preview editor </h1>
        </header>
        <div className="container flex flex-row justify-between h-full">
          <Editor/>
          <Markdown/>
        </div>
      </div>
    </div>
    </EditorProvider>
  )
};

export default App
