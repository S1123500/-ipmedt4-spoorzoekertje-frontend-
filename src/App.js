import React from "react";
import axios from "axios";
import Searchbar from "./Searchbar";

class App extends React.Component {
    state = { locatie: ""};

    makeApiCall = searchTerm => {
        const BASE_URL = "http://127.0.0.1:8000/api/locatie/";
        axios.get(BASE_URL + searchTerm).then(res=> {
            console.log(res);
        });
    };
    
    render() {
        return (
        <main>

            <Searchbar onSubmit={this.makeApiCall}/>
        
        </main>
        );
    }
}

export default App;