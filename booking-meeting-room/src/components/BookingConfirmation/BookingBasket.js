import './BookingBasket.css'  
import Button from '../BookingButton/Button'

function BookingBasket(props){ 

    function setCloseWindow(){ props.setCloseWindow()}

    return(
        <div className='BookingConfirmationWindow'>
            <div className='BookingInfo'> 
                <div className="Header"> 
                    <p className="HeaderBookingInfo">Booking Meeting Room</p> 
                    <button className="CloseWindow" onClick={() => setCloseWindow()}>Close</button>
                </div> 
                <p className='Time'>Number of Minutes {props.setTime}</p>
                <p className="Money">Total Amount £{props.setMoney}</p> 
                <div className="BookingNav">
                    <button className="CheckOut">Book</button>
                </div> 
            </div>
        </div>
    )
} 

export default BookingBasket