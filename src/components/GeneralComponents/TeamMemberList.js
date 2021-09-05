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
    display: "grid",
    gridTemplateColumns: "20% 20% 20% 20% 20%",
}

export default TeamMemberList
