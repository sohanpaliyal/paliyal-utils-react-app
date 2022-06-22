import React , { useState } from 'react'

export default function TextForms(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = ()=>{
        // console.log('uppercase was clicked',text);
        let newText = text.toUpperCase();
        setText(newText);
        props.initAlert('Converted to Uppercase','warn')
    }

    
    const handleLoClick = ()=>{
        // console.log('uppercase was clicked',text);
        let newText = text.toLowerCase();
        setText(newText);
        props.initAlert('Converted to Lowercase','warn')
    }

    const deleteText = ()=>{
        // console.log('uppercase was clicked',text);
        // let newText = text.toLowerCase();
        setText('');
        props.initAlert('text is deleted','warn')
    }

    const handleOnChange = (event)=>{
        // console.log('onchange was clicked');
        setText(event.target.value)
    }


    
    const handleCopy = ()=>{
        // console.log('onchange was clicked');
        const text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value) 
        props.initAlert('text copied','warn')
    }

    const removeExtraSpaces = () =>{
        const newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.initAlert('extra spaces removed','warn')
    }

  return (
    <>
    <div className='container' style={{color:props.mode==='dark' ? 'white':'gray'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
             <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark' ? '#042743':'white',color:props.mode==='dark' ? 'white':'#042743'}}></textarea> 
             <button className='btn btn-primary mt-2 mx-2' onClick={handleUpClick}>convert to uppercase</button>
             <button className='btn btn-primary mt-2 mx-2' onClick={handleLoClick}>convert to lowercase</button> 
             <button className='btn btn-primary mt-2 mx-2' onClick={deleteText}>delete</button> 
             <button className='btn btn-primary mt-2 mx-2' onClick={handleCopy}>Copy Text</button> 
             <button className='btn btn-primary mt-2 mx-2' onClick={removeExtraSpaces}>Remove Extra Spaces</button> 
        </div>
    </div>
    <div className='container my-2' style={{color:props.mode==='dark' ? 'white':'gray'}}>
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
