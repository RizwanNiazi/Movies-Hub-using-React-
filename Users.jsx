import React, { Component } from 'react';
import axios from "axios";


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          age: null,
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

      handleSubmit = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if (!Number(age)) {
        alert("Your age must be a number");
    }
      }

      handlePost = event => {
        event.preventDefault();
    
        const user = {
          name: "Ali"
        };
    
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          });
      }
      render() {
        return (
          <form className="text-center border border-light p-5">
              <div className="row">
              <p className="h4 mb-4">Hello {this.state.username} {this.state.age}</p>
              </div>
          <div className="row">
              <div className="col-5">
          <p>Enter your name:</p>
          <input  className="form-control mb-4"
            type='text'
            name='username'
            onChange={this.myChangeHandler}
          />
          <p>Enter your age:</p>
          <input className="form-control mb-4"
            type='text'
            name='age'
            onChange={this.myChangeHandler}
          />
          
          <button className="btn btn-primary" onClick={this.handleSubmit}>submit</button>
          <button className="btn btn-primary" onClick={this.handlePost}>Post User</button>
          </div>
          </div>
          </form>


        );
      }
}
 
export default Users;