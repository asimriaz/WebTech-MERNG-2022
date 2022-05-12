import React, { Component } from 'react'
import axios from 'axios'
import { StudentForm } from './StudentForm';

export class StudentList extends Component {
    state = {
        students: [], 
        regno: null
    }

    getStudents = async () => {
        const students = await axios.get(`/api/students`);
        console.log(students);
        this.setState({ students: students.data })
    }

    showUpdated = (std) => {
        this.setState({ students: this.state.students.map(s => s._id === std._id ? std : s), regno: null })
    }

    componentDidMount() {
        this.getStudents();
    }

    handleClick = (regno) => {
        console.log(regno)
        this.setState({ regno })
    }

    render() {
        let url = '#'
        return (
            <div>
                <div className="col">

                    <table>
                        <thead>
                            <tr>
                                <th>Reg #</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.students.map(std => (
                                <tr key={std._id}>
                                    <td>{std.regno}</td>
                                    <td>
                                        <a href={url} onClick={() => this.handleClick(std.regno)}>
                                            {std.name}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col">
                    {this.state.regno !== null && (
                        <StudentForm regno={this.state.regno} showUpdated={this.showUpdated}/>
                    )}
                </div>
            </div>
        )
    }
}

export default StudentList