import React, { useState } from 'react'
import Output from './Output';

function Greeting() {
    const[changedText,setChangedText]=useState(false);
    const changeTextHandler=()=>{
        setChangedText(true);    }
  return (
    <div>
{!changedText && <Output>i a here with changed text</Output>}
{changedText && <Output>i a here withoutbefore_clicked changed text</Output>}
        <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
}

export default Greeting