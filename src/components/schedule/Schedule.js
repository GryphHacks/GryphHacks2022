import React, { useEffect, useState } from 'react';
import Days from './Days';
import days from '../../data/schedule.json';
import './schedule.css'

const Schedule = () => {

  const CSS = {
    color: "#000000",
    letterSpacing:"10px",
    textAlign:"center",
  
  }

  return (
    <div>
      <h1 style={CSS}>Schedule</h1>
      <Days days={days}/>
      <p><center>Please note that all times are displayed in Eastern Standard Times (EST).</center></p>
    </div>
  )
}

export default Schedule;
