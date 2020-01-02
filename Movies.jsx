import React, { Component } from "react";
import DeleteButton from './DeleteButton'

class Movies extends Component {
  state = {
    MyMovies: [
      { Id: 1, Name: "Mission Impossible 1", Status: "Released" },
      { Id: 2, Name: "Mission Impossible 2", Status: "Released" },
      { Id: 3, Name: "Mission Impossible 3", Status: "Released" },
      { Id: 4, Name: "Mission Impossible 4", Status: "Released" },
      { Id: 5, Name: "Mission Impossible 5", Status: "Released" },
      { Id: 6, Name: "Mission Impossible 6", Status: "Comming Soon" }
    ]
  };

  handleDelete=(movie)=>{
    const filteredMovies=this.state.MyMovies.filter(m=>m.Id!==movie.Id);
    this.setState({MyMovies:filteredMovies});
  }
  render() {
    return (
      <div>
        <h2>Movies</h2>
        {this.state.MyMovies.length===0?(<p>No Movies Found</p>):(
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.MyMovies.map(movie => (
              <tr key={movie.Id}>
                <td>{movie.Id}</td>
                <td>{movie.Name}</td>
                <td>{movie.Status}</td>
                <td>
                    {/* <button type="Submit" className="btn btn-danger" onClick={()=>this.handleDelete(movie)}>Delete</button> */}
                    <DeleteButton Movie={movie} onDelete={this.handleDelete}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
       
    );
  }
}

export default Movies;
