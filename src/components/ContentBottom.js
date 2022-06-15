import React from 'react';
import "./Overlay.css";
import PlayerContent from './PlayerContent';
import RunnerContent from './RunnerContent';

const ContentBottom = (props) => {

    let isPlayer = false;

    if (props.playertype === "player") {
        isPlayer = true;
    }

    return isPlayer ? (
            <PlayerContent questsleft={props.questsleft} currentquest={props.currentquest} currentlocation={props.currentlocation}> </PlayerContent>)
        : (
            <RunnerContent questsleft={props.questsleft} currentquest={props.currentquest} currentlocation={props.currentlocation}> </RunnerContent>
        );
}


export default ContentBottom;