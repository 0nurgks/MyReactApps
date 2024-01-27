import React from 'react'
import Taskcreator from './taskcreator';

function Formshow(myformprops){
const mychildprop =myformprops;
return(
    <div>        <Taskcreator myformprops={mychildprop} />
    </div>
)




}

export default Formshow;