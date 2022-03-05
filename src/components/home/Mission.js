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
                <h3 className="item-word">Word 1</h3>
                <p className="item-text">Nulla aute culpa occaecat anim eu est laborum deserunt eiusmod aliquip exercitation qui. Consectetur eiusmod ut non ex officia ut. Minim ut amet non duis eu officia consectetur ad anim ad cillum magna ad.</p>
            </div>
            <div className="item">
                <img className="item-img" src={settings} alt="settings img"></img>
                <h3 className="item-word">Word 2</h3>
                <p className="item-text">Irure eu deserunt officia anim ipsum culpa qui eu occaecat ea sit id consectetur. Mollit laboris dolor fugiat elit eu pariatur officia mollit ut ut enim mollit voluptate. Enim eiusmod Lorem aliquip officia nisi.</p>
            </div>
            <div className="item">
                <img className="item-img" src={teamwork} alt="teamwork img"></img>
                <h3 className="item-word">Word 3</h3>
                <p className="item-text">Ex reprehenderit exercitation laboris nostrud officia amet ad ut. Esse aute deserunt ea nisi do ad aute id aute. Sunt incididunt et non aliqua commodo id. Do aute voluptate do aliquip qui excepteur laboris duis. </p>
            </div>
        </div>
    </div>
  );
};

export default Mission;

