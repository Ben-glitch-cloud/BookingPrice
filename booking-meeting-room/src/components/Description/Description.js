import './Description.css'

function Description(props){ 

    function setShowRatesWindow(){ props.setShowRatesWindow() }

    return(
        <div className='DescriptionCon'> 
            <div className='DescriptionItem'>
                <p>To book a meeting room type in below the number of mintes you need. The price will adjust depending on the amount of time. <span className='RatesLink' onClick={() => setShowRatesWindow()}>View Meeting Room Rates</span></p>
            </div>
        </div>
    )
} 

export default Description