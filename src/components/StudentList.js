import React from 'react';

function StudentList ({students, onEdit, onDelete}) {
    return (
        <div className="student-list">
            <h3>Student List</h3>
            <table>
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama Lengkap</th>
                        <th>Jurusan</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length === 0 ? (
                        <tr>
                            <td colSpan="4">No students available.</td>
                        </tr>
                    ): (
                        students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.nim}</td>
                                <td>{student.nama}</td>
                                <td>{student.jurusan}</td>
                                <td className="actions">
                                    <button onClick={() => onEdit(student)}>Edit</button>
                                    <button onClick={() => onDelete(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;
