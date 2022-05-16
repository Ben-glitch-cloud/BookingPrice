import './Button.css'

function Button(props){ 

    function setShowBookingWindow(){ props.setBookingBasket()}

    return(<button onClick={() => setShowBookingWindow()}>{props.name}</button>)
} 
export default Button