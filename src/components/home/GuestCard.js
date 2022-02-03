import React from 'react'
import './stylesheet/guestCard.css';

const GuestCard = ({ member }) => {
    return (
        <div>
            <div className="card-body">
                <img className="card-img" src={member.image}></img>
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
            </div>


        </div>
    )
}

export default GuestCard;
