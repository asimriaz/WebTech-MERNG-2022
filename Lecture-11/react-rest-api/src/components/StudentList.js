import React, { Component, Fragment } from 'react'
import axios from 'axios'
import StudentForm from './StudentForm';


export class StudentList extends Component {
    state = {
        regno: null,
        students: []
    }
    getStudents = async () => {
        const students = await axios.get(`/api/students`);
        //console.log(students)
        this.setState({ students: students.data })

    }

    componentDidMount() {
        this.getStudents()
    }

    handleClick = (regno) => {
        //console.log(regno)
        this.setState({ regno })
    }

    render() {
        return (
            this.state.students.length !== 0 &&
            <Fragment>
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
                                        <a href="#" onClick={()=>this.handleClick(std.regno)}>
                                            {std.name}
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
                <pre style={{textAlign: 'left'}}>{JSON.stringify(this.state, null, 2)}</pre>
            </Fragment>
        )
    }
}

export default StudentList