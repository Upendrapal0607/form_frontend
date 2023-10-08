import logo from './logo.svg';
import './App.css';
import Song from './Componants/Songs';
// import SoundToString from './Componants/SoundToString';
import SpeechRecognitionComponent from './Componants/SoundToString';
import Chat from './Componants/Chat';


function App() {
  // console.log(<Song/>)
  return (
    <div className="App">
   <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   {/* <SpeechRecognitionComponent/> */}
   {/* <Chat/> */}
    </div>
  );
}

export default App;
