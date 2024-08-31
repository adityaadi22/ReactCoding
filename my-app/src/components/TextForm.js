import React ,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick =() =>{
        console.log("Uppercase was clicked" +text);
        let newText =text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("onChange");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here');
    // text= "new text";// Wrong Way to change the state
    // setText("new text"); //correct way to change the state
  return (
    <div>
     <h1>{props.heading} -{text}</h1>
    <div className="mb-3">
    <label for="myBox" class="form-label">Enter text</label>
    <textarea className="form-control" value = {text} onChange= {handleOnChange}  id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick ={handleUpClick}>Convert to uppercase</button>
    </div>
  )
}
