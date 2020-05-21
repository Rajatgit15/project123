
import React, { Component } from 'react';
import data from './data.json'

class Team extends Component {
    render() {
        return (
            <div>
                {data.map((el,i)=>{
                    return (
                        <div key = {i}>
                            <table className = "table">
                                  <tr>
                                  <th>ID</th>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Designation</th>
                                  </tr>

                                <tr>
                                 {el.team.map((dat, i)=>{
                                     return (
                                         <div key = {i}>
                                             
                                             <td >{dat.id}</td>
                                             <td>{dat.name}</td>
                                             <td>{dat.email}</td>
                                             <td>{data.designation}</td>
                                            
                                         </div>
                                     )
                                 })}
                                    
                                  
                                </tr>
                               
                            </table>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Team;