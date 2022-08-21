import React, {Component} from 'react';

class CreateItem extends Component {
    constructor(props){
        super(props);
        this.state = {LocatieName: '', LocatieCoordinaten: '', LocatieBeschrijving: ''};
    
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange1(e){
        this.setState({
          locatieName: e.target.value
        })
      }
      handleChange2(e){
        this.setState({
          locatieCoordinaten: e.target.value
        })
      }
      handleChange3(e){
        this.setState({
          locatieBeschrijving: e.target.value
        })
      }
      handleSubmit(e){
        e.preventDefault();
        const products = {
          name: this.state.locatieName,
          coordinaten: this.state.locatieCoordinaten,
          beschrijving: this.state.locatieBeschrijving
        }
        let uri = 'http://localhost:8000/locaties';
        axios.post(uri, products).then((response) => {
          // browserHistory.push('/display-item');
        });
      }
    
    
    render() {
      return (
      <div>
        <h1>Create An Item</h1>
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Item Name:</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Item Price:</label>
                  <input type="text" className="form-control col-md-6" />
                </div>
              </div>
            </div><br />
            <div className="form-group">
              <button className="btn btn-primary">Add Item</button>
            </div>
        </form>
  </div>
      )
    }
}
export default CreateItem;