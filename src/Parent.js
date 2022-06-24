import React, { Component } from "react";
import Overlay from "./components/GameOverlay";
import Login from "./components/Login";


class Parent extends Component {
    constructor() {
        super();
        this.state = {
            is_player: false,
            in_game: false,
            is_correct: false,
            room_code: "1234"
        }
    }

    toggleInGame = (formData) => {
        console.log("goede code")
        if(formData === this.state.room_code){
            this.setState({ in_game: !this.state.in_game, is_player: !this.state.is_player });
        }
    };

    formCallback = (formData) =>{
        if(formData === this.state.room_code){
            console.log('goede code')
            this.setState(previousState => ({
                is_player: !previousState.is_player,
                in_game: !previousState.in_game
            }))}
        else{
            //do nothing
        }
        console.log("form data: " + formData);
        console.log("callback player state: " + this.state.is_player);
    }


    render() {
        const { in_game } = this.state;
        if (!in_game) {
            console.log("state data: " + this.state.room_code);
            return (
                <Login in_game={false} is_correct={false} onClick={this.toggleInGame} formCallback={this.formCallback}/>
                
            );
        }

        else {            
            console.log("state data: " + this.state.room_code);
            console.log("player data: " + this.state.is_player);
            if (!this.state.is_player) {
                return (
                    <Overlay playertype="runner"/>
                );
            }
            if (this.state.is_player) {
                console.log("state data: " + this.state.room_code);
                return (
                    <Overlay playertype="player"/>
                );
            }
        }
    }
}

export default Parent;