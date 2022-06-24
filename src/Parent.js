import React, { Component } from "react";
import Overlay from "./components/GameOverlay";
import Login from "./components/Login";


class Parent extends Component {
    constructor() {
        super();
        this.state = {
            in_game: false,
            is_player: false,
            is_correct: false,
            room_code: "1234"

        }
    }

    toggleInGame = (formData) => {
        console.log("goede code")
        if(formData == this.state.room_code){
            this.setState({ in_game: !this.state.in_game });
        }
    };

    formCallback = (formData) =>{
        if(formData == this.state.room_code){
            console.log('goede code')
            this.setState({ in_game: !this.state.in_game });}
        else{
            
        }
        console.log("form data: " + formData);
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
            if (!this.is_player) {
                console.log("state data: " + this.state.room_code);
                return (
                    <Overlay playertype="runner" questsleft="69" currentquest="Heel veel zuipen" currentlocation="Lazaru's"/>
                );
            }
            if (this.is_player) {
                console.log("state data: " + this.state.room_code);
                return (
                    <Overlay playertype="player" questsleft="69" currentquest="Heel veel zuipen" currentlocation="Lazaru's"/>
                );
            }
        }
    }
}

export default Parent;