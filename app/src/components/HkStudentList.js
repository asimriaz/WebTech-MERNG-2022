import React, { useEffect } from 'react'
import HkStudentForm from './HkStudentForm'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStudents, setRegNo } from '../store/student'

const HkStudentList = () => {

    const dispatch = useDispatch();
    const { loading, error, students } = useSelector((state) => state.student);
    const regno = useSelector(state => state.student.regno)

    useEffect(() => {
        dispatch(fetchStudents());
        // eslint-disable-next-line
    }, [])


    const handleClick = (regno) => {
        console.log(regno)
        dispatch(setRegNo(regno))
    }

    let url = '#'
    if (loading) {
        return <div>loading...</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }
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
                        {students.map(std => (
                            <tr key={std._id}>
                                <td>{std.regno}</td>
                                <td>
                                    <a href={url} onClick={() => handleClick(std.regno)}>
                                        {std.name}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="col">
                {regno !== null && (
                    <HkStudentForm regno={regno} />
                )}
            </div>
        </div>
    )

}

export default HkStudentList