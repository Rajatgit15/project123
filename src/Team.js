
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
                                      <th>Id</th>
                                      <th>title</th>
                                      <th>description</th>
                                      <th >sponsor</th>
                                      <td ></td>
                                      <td ></td>
                                      <td >Metadata</td>
                                  </tr>

                                <tr>
                                    <td>{el.id}</td>
                                    <td>{el.title}</td>
                                    <td>{el.description}</td>
                                    <td>{el.sponsor.id}</td>
                                    <td>{el.sponsor.name}</td>
                                    <td>{el.sponsor.email}</td>
                                    <td>{el.sponsor.designation}</td>
                                    <td>{el.metadata.lastUpdateddate}</td>
                                    <td>{el.metadata.createDate}</td>
                                    {/* {el.team.map((te,i)=>{
                                    return <div key = {i}>
                                        <tr>
                                            <td>{te.id}</td>
                                            <td>{te.name}</td>
                                            <td>{te.email}</td>
                                            <td>{te.designation}</td>
                                        </tr>
                                    </div>
                                })} */}
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