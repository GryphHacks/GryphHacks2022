import React, {useState, useEffect} from 'react';

var DAYS = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

const Day = (props) => {
  const [isSelected, setIsSelected] = useState(false);
  let date = new Date(props.date);

  const handleClick = (e) => {
    e.preventDefault();
    props.handleUpdate(props.id);
  }

  useEffect(() => {
    if(props.selected == props.id) {
      setIsSelected(true)
    } else {
      setIsSelected(false)
    }
  }, [props.selected])

  return (
    <button className={`day-button ${isSelected ? 'show' : ''}`} onClick={handleClick}>
    {`${DAYS[date.getDay()]} ${date.toLocaleString('en-us', { month: 'short' })}, ${date.getDate()} ${date.getUTCFullYear()}`}
    </button>
  )
}

export default Day;