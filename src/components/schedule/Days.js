import React, { useState } from 'react';
import Day from './Day';
import Events from './Events';

const Days = (props) => {

    const [selected, setSelected] = useState(0);
    const handleUpdate = (newDate) => {
        setSelected(newDate);
    }

    return (
        <div>
            <div class="schedule-buttons">
                { props.days.map( (data,id) => {
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