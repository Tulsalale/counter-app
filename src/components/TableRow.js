import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
  render =() =>{
    return (
        <tr>
         <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.task}
          </td>
          <td>
            {this.props.obj.status}
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => {this.props.getTodolist(this.props.obj)}}>Edit</button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => {this.props.deleteTodolist(this.props.obj.id)}}>Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;