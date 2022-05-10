import React, { Component } from 'react'
import axios from 'axios'
import StudentForm from './StudentForm';
export class StudentList extends Component {

    state = {
        students: [],
        regno: null
    }

    getStudents = async () => {
        const students = await axios.get(`/api/students`);
        //console.log(students);
        this.setState({ students: students.data })
    }

    componentDidMount() {
        this.getStudents();
    }

    handleClick = (regno) => {
        console.log(regno)
        this.setState({ regno})
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
                            {this.state.students.map(s => (
                                <tr key={s._id}>
                                    <td>{s.regno}</td>
                                    <td>
                                        <a href={url} onClick={() => this.handleClick(s.regno)}>
                                            {s.name}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col">
                    {this.state.regno !== null && <StudentForm regno={this.state.regno}/>}
                </div>
            </div>
        )
    }
}

export default StudentList