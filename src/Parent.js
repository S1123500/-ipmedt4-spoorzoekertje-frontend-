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

    toggleInGame = () => {
        this.setState({ in_game: !this.state.in_game });
    };



    
    formCallback = (formData) =>{
        console.log("form data: " + formData)
        this.setState({room_code: formData});
        console.log("state data: " + this.state.room_code);
    }


    render() {
        const { in_game } = this.state, { setInGame } = this;
        if (!in_game) {
            return (
                <Login in_game={false} onClick={this.toggleInGame} formCallback={this.formCallback}/>
            );
        }

        else {
            if (!this.is_player) {
                return (
<<<<<<< HEAD
                    <Overlay playertype="runner" questsleft="4" currentquest="Vind de volgende Kroeg" currentlocation="Centraal" />
                );
            }
            if (this.is_player) {
                return ( 
                    <Overlay  />
                    
=======
                    <Overlay playertype="runner" questsleft="69" currentquest="Heel veel zuipen" currentlocation="Lazaru's"/>
                );
            }
            if (this.is_player) {
                return (
                    <Overlay playertype="runner" questsleft="69" currentquest="Heel veel zuipen" currentlocation="Lazaru's"/>
>>>>>>> f982823a6f9ca1a556679317e641518aea4b96f9
                );
            }
        }
    }
}

export default Parent;