import './RatesWindow.css'

function RatesWindow(props){ 

    function setCloseRatesWindow(){props.setCloseRatesWindow()} 

    return(
        <div className='RatesWindow'>
            <div className='RatesInfo'> 
            <div className="Header"> 
                    <p className="HeaderBookingInfo">Rates</p> 
                    <button className="CloseWindow" onClick={() => setCloseRatesWindow()}>Close</button>
                </div> 
                <table className="RatesTable">
                    <tr>
                        <th>Time</th> 
                        <th>Price</th>
                    </tr> 
                    <tr>
                        <td>Minute</td>
                        <td>£2</td>
                    </tr> 
                    <tr>
                        <td>Hour</td>
                        <td>£22</td>
                    </tr>
                    <tr>
                        <td>Day</td>
                        <td>£60</td>
                    </tr>
                    <tr>
                        <td>Week</td>
                        <td>£105</td>
                    </tr>
                </table>
                <p className="RatesMessage">Rates will defult to the lowest price.</p>
            </div>
        </div>
    )
} 

export default RatesWindow