import React from 'react';
import './stylesheet/mission.css';
import lightbulb from '../../assets/lightbulb.png';
import settings from '../../assets/settings.png';
import teamwork from '../../assets/teamwork.png';

const Mission = () => {
  return (
    <div className="missionSection">
        <h1 className="section-title statement">OUR MISSION</h1>
        <div className="flex-container">
            <div className="item">
                <img className="item-img" src={lightbulb} alt="lightbulb img"></img>
                <h3 className="item-word">Innovate</h3>
                <p className="item-text">"Creativity is thinking of new things. Innovation is doing new things." -  Theodore Levitt</p>
            </div>
            <div className="item">
                <img className="item-img" src={settings} alt="settings img"></img>
                <h3 className="item-word">Build</h3>
                <p className="item-text">Short term or long term. Ideas are spawned, they're drawn, and then they come to life when Hackies start building them. Dreams are accomplished, while others realize what their dream is.</p>
            </div>
            <div className="item">
                <img className="item-img" src={teamwork} alt="teamwork img"></img>
                <h3 className="item-word">Connect</h3>
                <p className="item-text">Through this 48 hour event, students of various education levels, from across the world will come together to build, to innovate, and form invaluable connections that will last a lifetime.</p>
            </div>
        </div>
    </div>
  );
};

export default Mission;

