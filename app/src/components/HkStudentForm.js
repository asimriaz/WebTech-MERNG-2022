import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentByRegNo, setStudent, updateStudent } from '../store/student'

const HkStudentForm = (props) => {

    const dispatch = useDispatch();
    const { regno } = props;
    const student = useSelector(state => state.student.student)

    useEffect(() => {
        dispatch(getStudentByRegNo(regno))
        // eslint-disable-next-line
    }, [regno])

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setStudent({ name, value }))
    }


    return (
        <div>
            HkStudentForm {props.regno}
            <table>
                <tbody>
                    {Object.entries(student).map(([key, value], i) => (
                        <tr key={i}>
                            <th>{key}</th>
                            <td>{key === 'name' ? (
                                <textarea rows={3} cols={30}
                                    type="text"
                                    name={key}
                                    value={value}
                                    onChange={handleChange}
                                />
                            ) : value}</td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td>
                            <button onClick={() => dispatch(updateStudent(student))}>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pre style={{ textAlign: 'left' }}>{JSON.stringify(student, null, 2)}</pre>
        </div>
    )
}

export default HkStudentForm