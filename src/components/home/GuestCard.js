import React from 'react'
import './stylesheet/guestCard.css';

const GuestCard = ({ member }) => {
    return (
        <div>
            <div className="card-body">
                <img className="card-img" src={member.image} alt={member.name + "'s Profile image"}></img>
                <h4 className="card-title">{member.name}</h4>
                <p className="card-text">{member.role}</p>
            </div>


        </div>
    )
}

export default GuestCard;
