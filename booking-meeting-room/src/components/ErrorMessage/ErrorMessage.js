import './ErrorMessage.css'

function ErrorMessage(props){
    return( <p className='Error'>{props.error}</p>)
} 

export default ErrorMessage