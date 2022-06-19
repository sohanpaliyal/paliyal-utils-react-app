import React , { useState } from 'react'

export default function TextForms(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = ()=>{
        // console.log('uppercase was clicked',text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    
    const handleLoClick = ()=>{
        // console.log('uppercase was clicked',text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const deleteText = ()=>{
        // console.log('uppercase was clicked',text);
        // let newText = text.toLowerCase();
        setText('');
    }

    const handleOnChange = (event)=>{
        // console.log('onchange was clicked');
        setText(event.target.value)
    }

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
             <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea> 
             <button className='btn btn-primary mt-2 mx-2' onClick={handleUpClick}>convert to uppercase</button>
             <button className='btn btn-primary mt-2 mx-2' onClick={handleLoClick}>convert to lowercase</button> 
             <button className='btn btn-primary mt-2 mx-2' onClick={deleteText}>delete</button> 
        </div>
    </div>
    <div className='container my-2'>
        <h2>
            Your text summary
        </h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> normal person {text.split(" ").length * 0.008} Minutes takes to read this</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
