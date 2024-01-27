import React, { useState } from "react";



function Myform({myprops}){


const [forminput,setForminput] = useState(null);
const [formtextinput,setFormtextinput] = useState(null);

const buttonhandlechange= (event)=> 
{
    event.prevent.default();
    myprops = {forminput,formtextinput}
    setForminput("");
    setFormtextinput("");
};



    return(
        <div>
            <form>
                <label>Baslık giriniz</label>
                <input value={(forminput)}></input>
                <label>Text giriniz</label>
                <textarea value={(formtextinput)}  ></textarea>
                <button onChange={buttonhandlechange}></button>
            </form>
        </div>
    )
}
export default Myform;