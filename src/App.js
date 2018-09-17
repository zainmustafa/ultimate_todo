import React, { Component } from 'react';
import './App.css';
import logo from './logo.png'


class App extends Component {

  constructor(props) {
    super()

    this.state = {

    }

    this.navabar = this.navabar.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.todoTextbox=this.todoTextbox.bind(this)

  }


  handleChange(evt) {


    this.setState({ [evt.target.name]: evt.target.value });


  }






  render() {

    return (
      <div>

        {/* Navbar */}
        <this.navabar />
        {/* Navbar End */}
        <br></br>

        {/* Todo Text Box */}
        <this.todoTextbox/>
      {/* Todo text Box End */}




      </div>
    );
  }










  /* Navbar Function */
  navabar() {
    return (
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="">
          </img>
          Todo List
          </a>
      </nav>

    )

  }
  /* Navbar End */


  /* Todo text Box */
  todoTextbox() {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card card-body">
            <h3 className="text-center">Add Todo</h3>
            <div className="form-group">
              <label for="todo">Todo</label>
              <input type="text" name="todo" className="form-control" required onChange={this.handleChange}></input>
            </div>
            <button className="btn btn-info">Add</button>
          </div>
        </div>
      </div>

    )

  }

  /* Todo Text Box End */








}

export default App;
