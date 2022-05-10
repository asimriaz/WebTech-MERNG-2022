import React, { Component } from 'react'
import axios from 'axios'

export class StudentForm extends Component {
    state = {}
    getStudentDetails = async () => {
        const { regno } = this.props
        const student = await axios.get(`/api/students/${regno}`)
        this.setState({ ...student.data })
    }
    componentDidMount() {
        this.getStudentDetails()
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div>
                {Object.entries(this.state).length !== 0 && (

                    <table>
                        <tbody>
                            <tr>
                                <th>Id :</th>
                                <td>
                                    {this.state._id}
                                </td>
                            </tr>
                            <tr>
                                <th>RegNo:</th>
                                <td>
                                    {this.state.regno}
                                </td>
                            </tr>
                            <tr>
                                <th>Name : </th>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>
                                    <button onClick={async () => {
                                        const result = await axios.patch(`/api/students/update`, this.state)
                                        if(result.status === 200){
                                            this.props.showUpdated(result.data)
                                        }
                                    }}>Save</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
                <pre style={{ textAlign: 'left' }}>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        )
    }
}

export default StudentForm