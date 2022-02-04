import React from 'react'
import TeamMember from './TeamMember'

const TeamMemberList = ({data}) => {
    data.map((member) => {
        console.log(member);
    });
    return (
        <div style = {columns}>
            {data.map((member) => (
                <TeamMember key = {member.id} member={member}/>
            ))}
        </div>
    )
}

const columns ={
    position:"relative",
    marginLeft:"10%",
    marginRight:"10%",
    display: "grid",  
    gridTemplateColumns: "25% 25% 25% 25%",
}

export default TeamMemberList
