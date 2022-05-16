import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HkStudentForm = (props) => {

    const [student, setStudent] = useState({})
    const { regno } = props;

    useEffect(() => {
        axios.get(`/api/students/${regno}`)
            .then(student => setStudent(student.data))
    }, [regno])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value })
    }

    return (
        <div>
            HkStudentForm {regno}
            <table>
                <tbody>
                {Object.entries(student).map(([key, value], i) => (
                    <tr key={i}>
                        <th>{key}</th>
                        <td>{key === 'name'
                            ? (<input
                                type="text"
                                name={key}
                                value={value}
                                onChange={handleChange}
                            />)
                            : value}
                        </td>
                    </tr>
                ))}
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={async () => {
                                        const result = await axios.patch(`/api/students/update`, student)
                                        if(result.status === 200){
                                            props.showUpdated(result.data)
                                        }
                                    }}>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pre>{JSON.stringify(student, null, 2)}</pre>
        </div>
    )
}

export default HkStudentForm