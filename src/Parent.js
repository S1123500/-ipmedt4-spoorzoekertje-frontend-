import React, { Component } from "react";
import Overlay from "./components/GameOverlay";
import Login from "./components/Login";

class Parent extends Component {
    constructor() {
        super();
        this.state = {
            in_game: false,
            is_player: false,
            room_code: ''
        }
    }

    toggleInGame = (formData) => {
        this.setState({ in_game: !this.state.in_game });
    };

    formCallback = (formData) =>{
        this.setState({room_code: formData});
        console.log("form data: " + formData);
    }


    render() {
        const { in_game } = this.state, { setInGame } = this;
        if (!in_game) {
            console.log("state data: " + this.state.room_code);
            return (
                <Login in_game={false} onClick={this.toggleInGame} formCallback={this.formCallback}/>
                
            );
        }

        else {
            if (!this.is_player) {
                return (
                    <Overlay playertype="runner" questsleft="69" currentquest="Heel veel zuipen" currentlocation="Lazaru's"/>
                );
            }
            if (this.is_player) {
                return (
                    <Overlay playertype="runner" questsleft="69" currentquest="Heel veel zuipen" currentlocation="Lazaru's"/>
                );
            }
        }
    }
}

export default Parent;