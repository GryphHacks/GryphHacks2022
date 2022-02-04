import React from 'react'
import TeamMember from './TeamMember'

const TeamMemberList = ({data}) => {
    data.map((member) => {
        console.log(member);
    });
    return (
        <div className='team-member-grid'>
            {data.map((member) => (
                <TeamMember key = {member.id} member={member}/>
            ))}
        </div>
    )
}

export default TeamMemberList
