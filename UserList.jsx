import React, { Component } from "react";
import axios from "axios";

class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Users: []
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      const users = response.data;
      this.setState({ Users: users });
      console.log(this.state.Users);
    });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <h2>User List</h2>
          {this.state.Users.length === 0 ? (
            <p>No Users Found</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.Users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default UserList;
