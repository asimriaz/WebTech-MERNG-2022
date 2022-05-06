import React, { Component } from 'react'
import axios from 'axios'

class StudentForm extends Component {
    state = {}
    getStudentDetails = async () => {
        const { regno } = this.props
        const student = await axios.get(`/api/students/${regno}`)
        this.setState({ ...student.data })
    }

    componentDidMount(){
        this.getStudentDetails()
    }

    render() {
        return (
            <div>
                StudentForm: {this.props.regno}
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        )
    }
}

export default StudentForm