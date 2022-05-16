import './App.css'; 
import BookingForm from './components/BookingForm/BookingForm'; 
import Header from './components/Heading/Heading' 
import Description from './components/Description/Description'; 
import BookingOutPut from './components/BookingOutPut/BookingOutPut'; 
import Button from './components/BookingButton/Button' 
import BookingBasket from './components/BookingConfirmation/BookingBasket';  
import calculateAmount from './feature/CalculateAmountFunaction/CalculateAmount'
import RatesWindow from './components/RatesWindow/RatesWindow';  
import Error from './components/ErrorMessage/ErrorMessage'

import React, { useState, useEffect } from 'react';

function App() {  

  const [Time, setTime] = useState(0)  
  const [money, setMoney] = useState(0)  
  const [ShowConfirmation, setShowConfirmation] = useState(false) 
  const [error, setError] = useState('') 
  const [ShowRates, setShowRates] = useState(false)

  useEffect(() => { 
    setError(error => error = '')
    let OverAllscore = calculateAmount(Time)  
    setMoney(money => money = OverAllscore)
  }, [Time]) 

  function setDuration(timeDuration){  setTime(Time => Time = Number(timeDuration)) }    

  function setShowBookingWindow(){    
    Time !== 0 ? setShowConfirmation(ShowConfirmation => ShowConfirmation = !ShowConfirmation)  : setError(error => error = '0 minutes, thats not enough time for a meeting?')
  } 
  
  function setCloseWindow(){ setShowConfirmation(ShowConfirmation => ShowConfirmation = !ShowConfirmation) } 

  function setCloseRatesWindow(){ setShowRates(ShowRates => ShowRates = !ShowRates)} 

  return (
    <div className="App">  
      <Header/> 
      <Description setShowRatesWindow={setCloseRatesWindow}/>  
      {ShowRates ? <RatesWindow setCloseRatesWindow={setCloseRatesWindow}/> : null}
      {ShowConfirmation ? <BookingBasket setCloseWindow={setCloseWindow} setTime={Time} setMoney={money}/> : null}
      <div className='BookingCon'>
        <BookingForm getDuration={setDuration}/> 
        <BookingOutPut money={money}/> 
      </div>  
      <Button setBookingBasket={setShowBookingWindow} name={"Book Meeting Room"}/> 
      <Error error={error}/>
     
    </div>
  );
}

export default App;
