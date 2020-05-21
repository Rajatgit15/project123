
import React, { Component } from 'react';
import data from './data.json'

class Team extends Component {
    render() {
        return (
            <div>
                {data.map((ele, i)=>{
                    return(
                        <div key = {i}>
                            <table className= "table">
                               
                                {
                                    ele.team.map((el,i)=>{
                                        return(
                                            <div>
                                                <tr>
                                                    <th>
                                                        id
                                                    </th>
                                                    <th>name</th>
                                                    <th>email</th>
                                                    <th>designation</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        {el.id}
                                                    </td>
                                                    <td>{el.name}</td>
                                                    <td>{el.email}</td>
                                                    <td>{el.designation}</td>
                                                </tr>
                                            </div>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Team;