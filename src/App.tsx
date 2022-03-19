import {Editor} from './components/Editor';
import {Markdown} from './components/Markdown';
import EditorProvider from './EditorContext';

const App: React.FC = () => {
  return (
    <EditorProvider>
      <div className="flex items-center justify-center max-h-screen h-screen bg-blue-100">
        <div className=" bg-white items-center rounded-2xl border shadow-xl p-10 w-11/12 mt-10 h-4/5 flex flex-col overflow-x-clip overflow-y-auto">
          <header>
            <h1 className="text-center text-xl"> Markdown preview editor </h1>
            <div className="m-1 border-b border-2 border-r-2 border-gray-200"></div>
          </header>
          <div className="container h-full m-4 grid grid-cols-2 gap-4">
            <Editor />
            <Markdown/>
          </div>
        </div>
      </div>
    </EditorProvider>
  )
};

export default App
