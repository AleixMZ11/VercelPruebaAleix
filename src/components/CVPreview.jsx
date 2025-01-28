import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';

const CVPreview = () => {
    // Estado para almacenar los datos del CV
    const [cvData, setCV] = useState(null);

    
    useEffect(() => {
        fetch("http://images.mon-lab.shop/api.php")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Error al obtener los datos del CV");
                }
                return res.json();
            })
            .then((data) => {
                setCV(data); // Guarda los datos en el estado
            })
            .catch((error) => {
                console.error("Error fetching CV data:", error);
            });
    }, []); // El array vac�o [] asegura que esto solo se ejecute una vez al montar el componente

    // Funci�n para generar el PDF
    const generatePDF = () => {
        if (!cvData) return; // Si no hay datos, no hacer nada

        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Curriculum Vitae", 10, 10);
        doc.setFontSize(12);
        doc.text(`Nombre: ${cvData.name}`, 10, 20);
        doc.text(`Profesi�n: ${cvData.profession}`, 10, 30);
        doc.text(`Experiencia: ${cvData.experience}`, 10, 40);
        doc.text(`Email: ${cvData.email}`, 10, 50);
        doc.save("cv.pdf"); // Guarda el PDF con el nombre "cv.pdf"
    };

    // Si los datos a�n no se han cargado, muestra un mensaje de carga
    if (!cvData) {
        return <div>Cargando...</div>;
    }

    // Renderiza la informaci�n del CV
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">{cvData.name}</h1>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Profesi�n:</span> {cvData.profession}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Experiencia:</span> {cvData.experience}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-semibold">Email:</span> {cvData.email}
            </p>
            <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                onClick={() => window.print()}
            >
                Imprimir CV
            </button>
            <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                onClick={generatePDF}
            >
                Descargar PDF
            </button>
        </div>
    );
};

export default CVPreview;
