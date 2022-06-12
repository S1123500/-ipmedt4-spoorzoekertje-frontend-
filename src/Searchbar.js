import React from "react";

class Searchbar extends React.Component{
    
    state = {searhTerm: ""};

    
    onSearch = event => {
        this.setState({searchTerm: event.target.value});
    };

    onCheck = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchTerm);
    };

   
    
    render(){
        console.log(this.state.searhTerm);
        return (
        <section>
            <form onSubmit={this.onCheck}>
                <input
                className="searchbar"
                type="text"
                placeholder="zoek hier je locatie op"
                onChange={this.onSearch}
                
                />
            </form>
        </section>
        );
    }
}

export default Searchbar;