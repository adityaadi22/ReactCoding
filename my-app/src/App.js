import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    
<Navbar title = "My-App2" AboutMyApp="About us" />

<div className ="container">
<TextForm heading = "Enter the Text to analyze"/>
</div>
{/* <Navbar /> */}
    </>
  );
}

export default App;
