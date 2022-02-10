import React from 'react';
import './stylesheet/mission.css';
import lightbulb from '../../assets/lightbulb.png';
import settings from '../../assets/settings.png';
import teamwork from '../../assets/teamwork.png';

const Mission = () => {
  return (
    <div class="missionSection">
        <h1 class="statement">3 WORD MISSION STATEMENT</h1>
        <div class="flex-container">
            <div class="item">
                <img class="item-img" src={lightbulb}></img>
                <h3 class="item-word">Word 1</h3>
                <p class="item-text">Nulla aute culpa occaecat anim eu est laborum deserunt eiusmod aliquip exercitation qui. Consectetur eiusmod ut non ex officia ut. Minim ut amet non duis eu officia consectetur ad anim ad cillum magna ad.</p>
            </div>
            <div class="item">
                <img class="item-img" src={settings}></img>
                <h3 class="item-word">Word 2</h3>
                <p class="item-text">Irure eu deserunt officia anim ipsum culpa qui eu occaecat ea sit id consectetur. Mollit laboris dolor fugiat elit eu pariatur officia mollit ut ut enim mollit voluptate. Enim eiusmod Lorem aliquip officia nisi.</p>
            </div>
            <div class="item">
                <img class="item-img" src={teamwork}></img>
                <h3 class="item-word">Word 3</h3>
                <p class="item-text">Ex reprehenderit exercitation laboris nostrud officia amet ad ut. Esse aute deserunt ea nisi do ad aute id aute. Sunt incididunt et non aliqua commodo id. Do aute voluptate do aliquip qui excepteur laboris duis. </p>
            </div>
        </div>
    </div>
  );
};

export default Mission;

