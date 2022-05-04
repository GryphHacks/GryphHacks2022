import React, {useEffect, useState} from 'react';
import Day from './Day';
import Events from './Events';

const Days = (props) => {
  const [selected, setSelected] = useState(0);

  const handleUpdate = (newDate) => {
    setSelected(newDate);
  }

  return (
    <div style={{padding: "0 50px"}}>
      <div style={{display: "flex", justifyContent: "space-between", margin:"30px 0 30px 0", padding: "0 25px 0 25px"}}>
        {props.days.map((data,id) => {
          return <Day key={id} date={data.date} id={id} selected={selected} handleUpdate={handleUpdate}/>
        })}
      </div>
      <div>
        <Events selected={selected} days={props.days}/>
      </div>
      
    </div>
    
  )
}

export default Days;