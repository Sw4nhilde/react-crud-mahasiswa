import React, { useState, useEffect } from "react";

function StudentForm({ onAdd, onUpdate, onCancel, currentStudent, isEditing }) {
    const [formData, setFormData] = useState({
        nim: "",
        nama: "",
        jurusan: ""
    });

    useEffect(() => {
        if (isEditing && currentStudent) {
            setFormData(currentStudent);
        } else {
            resetForm();
        }
    }, [isEditing, currentStudent]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const resetForm = () => {
        setFormData({
            nim: "",
            nama: "",
            jurusan: ""
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.nim || !formData.nama || !formData.jurusan) {
            alert("Please fill in all fields.");
            return;
        }

        if (isEditing) {
            onUpdate(formData);
        } else {
            onAdd(formData);
        }
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit} className="student-form">
            <h3>{isEditing ? "Edit Student" : "Add New Student"}</h3>

            <input
                type="text"
                name="nim"
                placeholder="NIM"
                value={formData.nim}
                onChange={handleChange}
            />

            <input
                type="text"
                name="nama"
                placeholder="Nama Lengkap"
                value={formData.nama}
                onChange={handleChange}
            />

            <input
                type="text"
                name="jurusan"
                placeholder="Jurusan"
                value={formData.jurusan}
                onChange={handleChange}
            />

            <button type="submit">{isEditing ? "Update" : "Add"}</button>
            {isEditing && (
                <button type="button" onClick={() => { resetForm(); onCancel(); }}>
                    Cancel
                </button>
            )}
        </form>
    );
}

export default StudentForm;