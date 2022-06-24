import React from "react";

import add from "../assets/add.svg"
import placeholder from "../assets/placeholder.svg"
import question from "../assets/question.svg"

import ApiGET from "../hooks/ApiGET";

import "../css/Login.css";
import Header from "./Header";
import ApiROOM from "../hooks/ApiROOM";


class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            input_code: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        console.log(document.getElementById('roomCode').value);
        this.input_code = document.getElementById('roomCode').value;
    }

    code = () => {
        document.getElementById("dropdownCode").style.display = "flex";
    }
    
    howTo = () => {
        document.getElementById("dropdownHT").style.display = "flex";
    }
    
    onInput = (e) => {
        //let code = room_code;
        this.props.formCallback(this.input_code);
        e.preventDefault();
    }

    makeRoom = () => {
        let gameData = ApiGET();
        let generated = this.getCode();
        for (let i = 0; i < gameData.length; i++) {
            if (gameData[i].code === generated) {
                alert("Room already exists");
                return;
            }
            else {
                ApiROOM(generated);
                return;
            }
        }
    }

    getCode = () => {
        //generate random 4 digit code
        let code = [];
        for (let i = 0; i < 4; i++) {
            code[i] = Math.floor(Math.random() * 10);
        }
        alert("De code is 1234")
        return code.join("");
    }

    makeGame = () => {
        this.getCode();
    }

    render() {
        return (
            <section>
                <Header />

                <button onClick={this.code}>
                    <h2>Join Game</h2>
                    <figure>
                        <img src={placeholder} alt=""></img>
                    </figure>
                </button>
                <article id="dropdownCode" className="contentCode">
                    <form action="" onSubmit={this.onInput}>
                        <input className="roomCode" type="text" id="roomCode" name="roomCode" placeholder="Code" maxLength= "4" onChange={this.handleChange} />
                        <input className="submit" type="submit" value="Join" />
                    </form>
                </article>
                <button onClick={this.makeGame}>
                    <h2>Create Room </h2>
                    <figure>
                        <img src={add} alt=""></img>
                    </figure>
                </button>
                <button onClick={this.howTo}>
                    <h2>How To</h2>
                    <figure>
                        <img src={question} alt=""></img>
                    </figure>
                </button>
                <article id="dropdownHT" className="contentHT">
                    <h2>Get some friends</h2>
                    <h2>Make two teams</h2>
                    <h2>Play with 2 phones</h2>
                    <h2>Runners place tasks throughout the city</h2>
                    <h2>Players try to catch Runners by unlocking and completing tasks</h2>
                </article>
            </section>
        )
    }
}

export default Login;