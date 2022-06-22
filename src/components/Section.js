import React from "react";

import add from "../assets/add.svg"
import placeholder from "../assets/placeholder.svg"
import question from "../assets/question.svg"
import "./front.css"


class Section extends React.Component{

    code = () => {
        document.getElementById("dropdownCode").style.display = "flex";
    }

    howTo = () => {
        document.getElementById("dropdownHT").style.display = "flex";
    }

    createRoom = () => {
        //do shit
    }

    render(){
        return(
            <section>
                <button onClick={this.code}>
                    <h2>Join Game</h2>   
                    <figure>
                        <img src={placeholder} alt=""></img>
                    </figure>
                </button>
                <article id="dropdownCode" className="contentCode">
                    <form action="">
                        <input className="roomCode" type="text" id="roomCode" name="roomCode" maxlength="4" placeholder="Room"/>
                        <input className="submit"type="submit" value="Join" />
                    </form>
                </article>
                <button onClick={this.createRoom}>
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
                    <h2>Get some friend</h2>
                    <h2>Make teams</h2>
                    <h2>Play with 2 phones</h2>
                    <h2>Runners places quest in the city</h2>
                    <h2>Players try to catch Runners</h2>
                    <h2>And complete the quests</h2>
                </article>
            </section>
        )
    }
}

export default Section