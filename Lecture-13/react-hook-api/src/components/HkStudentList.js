import React, {useState, useEffect} from 'react'
import axios from 'axios'
import HkStudentForm from './HkStudentForm'

const HkStudentList = () => {

    const [students, setStudents] = useState([])
    const [regno, setRegNo] = useState(null)

    useEffect(() => {
        getStudents();
    }, [])

    const getStudents = async () => {
        const students = await axios.get(`/api/students`)
        console.log(students);
        setStudents(students.data);
    }

    const handleClick = (regno) => {
        //console.log(regno);
        setRegNo(regno)
    }

    const showUpdated = (std) => {
        setStudents(students.map(s => s._id === std._id ? std : s))
        setRegNo(null);
    }    

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
                        {students.map(s => (
                            <tr key={s._id}>
                                <td>{s.regno}</td>
                                <td>
                                    <a href={url} onClick={() => handleClick(s.regno)}>
                                        {s.name}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="col">
                {regno !== null && (
                    <HkStudentForm regno={regno} showUpdated={showUpdated} />
                )}
            </div>

        </div >)
}

export default HkStudentList