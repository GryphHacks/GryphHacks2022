import React from 'react';
import Event from './Event';

const Events = (props) => {
  return (
    <div>
      {props.days[props.selected].events.map((event, id) => {
        return <Event key={id} event={event} eventId={id} dayId={props.selected}/>
      })}
    </div>
  )
}

export default Events;