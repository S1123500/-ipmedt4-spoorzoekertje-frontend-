import React from "react";
import axios from "axios";
import Searchbar from "./Searchbar";

class App extends React.Component {
    state = { locatie: ""};

    something = false;

    makeApiCall = searchTerm => {
        const BASE_URL = "http://127.0.0.1:8000/api/";
        axios.get(BASE_URL + 'locaties').then(res=> {
            console.log(res.data);
            // get id lala en maak dit res

            
            document.getElementById('Title--locatie').innerHTML = res.data[0]['name']
            
            
            
        });
    };

    componentDidMount(){
        this.makeApiCall()
    }
    
    render() {
        return (
        <main>

            {/* <Searchbar onSubmit={this.makeApiCall}/> */}
            <p id="Title--locatie"></p>
            
        </main>
        );
    }
}

export default App;