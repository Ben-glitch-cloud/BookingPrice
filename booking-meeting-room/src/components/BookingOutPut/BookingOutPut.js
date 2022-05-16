import './BookingOutPut.css'

function BookingOutPut(props){
    return(
        <p className='MoneyOutPut'><span className='Total'>Total Amount</span> £{props.money}</p> 
    )
} 

export default BookingOutPut