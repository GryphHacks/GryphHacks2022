import React from 'react'

const GuestCard = ({ member }) => {
    return (
        <div>
            <img width="200" height="200" alt={member.name + "'s image"} src={member.image}/>
            <h4>
                {member.name}    
            </h4>
            <p>
                {member.role}
            </p>
        </div>
    )
}

export default GuestCard;
