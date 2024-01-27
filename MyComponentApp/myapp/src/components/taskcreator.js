import React from 'react'


function Taskcreator(mychildprop){
    return(
        <div>
               <label>Başlığım</label>
               <text>{mychildprop.propa}</text>
               <label>Görevim</label>
               <text>{mychildprop.propb}</text>
        </div>
    )
}

export default Taskcreator;