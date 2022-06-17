import React , { useState } from 'react'

export default function TextForms(props) {
    const [text, setText] = useState('Enter Text Here ');
    
    const handleUpClick = ()=>{
        console.log('uppercase was clicked',text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log('onchange was clicked');
        setText(event.target.value)
    }

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
             <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea> 
             <button className='btn btn-primary mt-2' onClick={handleUpClick}>convert to uppercase</button> 
        </div>
    </div>
  )
}
