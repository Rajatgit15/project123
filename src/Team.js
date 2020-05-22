import React, { Component } from 'react';
import data from './data.json'

class Team extends Component {
    render() {
        return (
            <div>
                {data.map((el,i)=>{
                    console.log(el)
                    return(
                        <div key = {i}>
                            <table className ="table">
                                <tr>{el.title}</tr>
                                {el.team.map((ele,i)=>{
                                    return (
                                        <div key = {i}>
                                            <tr>
                                                <th>id</th>
                                                <th>name</th>
                                                <th>email</th>
                                                <th>designation</th>
                                            </tr>
                                            <tr>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.designation}</td>
                                            </tr>
                                        </div>
                                    )
                                })}
                            </table>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Team;