function calculateAmount(Time){
    let TimeObject = {min: 0, hour: 0, day: 0, week: 0}
    let OverAllTime = Time  
    let OverAllscore = 0
    while(OverAllTime > 0){
      if(OverAllTime >= 10080){
        OverAllTime -= 10080 
        TimeObject['week'] += 1
      } else if(OverAllTime >= 1440 ){
        OverAllTime -= 1440 
        TimeObject['day'] += 1 
      } else if(OverAllTime >= 60){
        OverAllTime -= 60 
        TimeObject['hour'] += 1
      } else {
        OverAllTime -= 1 
        TimeObject['min'] += 1
      }
    } 
    if((TimeObject['min'] * 2) <= 22){
      OverAllscore += TimeObject['min'] * 2
    } else if((TimeObject['min'] * 2) > 22){
      OverAllscore += 22
    }  
    if((TimeObject['hour'] * 22) <= 60){
      OverAllscore += TimeObject['hour'] * 22
    } else if((TimeObject['hour'] * 22) > 60){
      OverAllscore += TimeObject['hour'] += 60
    } 
    if((TimeObject['day'] * 60) <= 105){
      OverAllscore += TimeObject['day'] * 60
    } else if((TimeObject['day'] * 60) > 105){
      OverAllscore += 105
    } 
    OverAllscore += TimeObject['week'] * 105 
    return OverAllscore
    // setMoney(money => money = OverAllscore)
  } 

  export default calculateAmount