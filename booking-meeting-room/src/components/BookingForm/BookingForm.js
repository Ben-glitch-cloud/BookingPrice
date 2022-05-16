import './BookingForm.css'
import React, { useState } from 'react';


function BookingForm(props){  

    function GetTime(e){ props.getDuration(e.target.value)}

    return(
        <div className='Form'> 
            <input onChange={e => GetTime(e)} type='number' min="1" placeholder='Minutes'/> 
            <label>Minutes</label>
        </div>
    )
} 

export default BookingForm