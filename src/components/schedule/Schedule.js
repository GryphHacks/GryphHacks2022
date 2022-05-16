import React, { useEffect, useState } from 'react';
import Days from './Days';
import ScheduleRecords from '../../data/schedule.json';
import './schedule.css'

const Schedule = () => {

  const CSS = {
    color: "#000000",
    letterSpacing:"10px",
    textAlign:"center",
  
  }

  return (
    <div class="schedule-wrapper">
        <h1 className="section-title">SCHEDULE</h1>
        <div id="schedule">
            <Days days={ ScheduleRecords }/>
            <p class="subtext">Please note that all times are displayed in Eastern Standard Times (EST).</p>
        </div>
    </div>
  )
}

export default Schedule;
