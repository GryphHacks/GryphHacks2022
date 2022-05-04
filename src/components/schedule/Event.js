import React, {useState, useEffect} from 'react'

const Event = (props) => {
  const [isClicked, setClicked] = useState(false);
  const [isEven, setIsEven] = useState('');
  let sDate = new Date(props.event.start_date);
  let eDate = new Date(props.event.end_date);

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  useEffect(() => {
    setClicked(false)
    setIsEven(parseInt(props.eventId) % 2 == 0 ? 'even' : '')
  }, [props.dayId])

  return (
    <div>
   
      <div className={`divQuestionS ${isEven}`} onClick={() => setClicked(!isClicked)}>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div style={{display:"flex", alignItems: "center"}}>
            <div style={{paddingRight: "10px", borderRight:"2px solid white"}}>
              <div>{formatAMPM(sDate)}</div>
              <div>{formatAMPM(eDate)}</div>
            </div>
            <div style={{marginLeft: "10px"}}>{props.event.event_name}</div>
          </div>
          <div>
          {isClicked ? <p className = "up" style={{marginTop:"20px"}}></p>: <p className = "down" style={{marginTop:"20px"}}></p>}
          </div>
        </div>
      </div>

      <div 
        className={`answer-collapseS ${isClicked ? 'show' : ''}`}>
        {props.event.event_description}
      </div>
      <br/>
      
    </div>
  );
}

export default Event;