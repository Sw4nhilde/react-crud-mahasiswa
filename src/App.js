import React, { useState } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

function App() {
  const [students, setStudents] = useState([
    { id: 1, nim: "101", nama: "Alice", jurusan: "Computer Science" },
    { id: 2, nim: "102", nama: "Bob", jurusan: "Mechanical Engineering" },
    { id: 3, nim: "103", nama: "Charlie", jurusan: "Electrical Engineering" },
    { id: 4, nim: "104", nama: "Diana", jurusan: "Civil Engineering" },
    { id: 5, nim: "105", nama: "Ethan", jurusan: "Mathematics" }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const addStudent = (student) => {
    const newStudent = { ...student, id: new Date().getTime() };
    setStudents(prev => [...prev, newStudent]);
  };

  const editStudent = (student) => {
    setIsEditing(true);
    setCurrentStudent(student);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentStudent(null);
  };

  const updateStudent = (updatedData) => {
    setStudents(prev =>
      prev.map(student => (student.id === updatedData.id ? updatedData : student))
    );
    cancelEdit();
  };

  const deleteStudent = (id) => {
    setStudents(prev => prev.filter(student => student.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>Student Management System</h1>
      </header>
      <main>
        <StudentForm
          onAdd={addStudent}
          onUpdate={updateStudent}
          onCancel={cancelEdit}
          currentStudent={currentStudent}
          isEditing={isEditing}
        />

        <StudentList
          students={students}
          onEdit={editStudent}
          onDelete={deleteStudent}
        />
      </main>
    </div>
  );
}

export default App;
