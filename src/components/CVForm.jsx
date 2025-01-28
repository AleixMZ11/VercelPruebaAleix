import React, { useState } from "react";

const CVForm = ({ onUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar los datos del formulario a la API
      const response = await fetch("http://172.17.22.135/api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar los datos");
      }

      const result = await response.json();

      // Si la API devuelve un �xito, llamar a la funci�n onUpdate
      if (result.success) {
        onUpdate(formData); // Actualizar el estado en el componente padre (si es necesario)
        alert("CV actualizado correctamente");
      } else {
        throw new Error(result.error || "Error desconocido");
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Hubo un error al actualizar el CV. Por favor, int�ntalo de nuevo.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Education:</label>
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Experience:</label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Update CV
      </button>
    </form>
  );
};

export default CVForm;