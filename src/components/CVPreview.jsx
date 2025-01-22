import React from "react";
import { jsPDF } from "jspdf";

const CVPreview = ({ data }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Curriculum Vitae", 10, 10);
    doc.text(`Name: ${data.name}`, 10, 20);
    doc.text(`Email: ${data.email}`, 10, 30);
    doc.text(`Phone: ${data.phone}`, 10, 40);
    doc.text("Education:", 10, 50);
    doc.text(data.education, 10, 60);
    doc.text("Experience:", 10, 80);
    doc.text(data.experience, 10, 90);
    doc.save("cv.pdf");
  };

  //wewqewqeqwe

  return (
    <div className="p-4 bg-gray-100 shadow rounded">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p className="text-sm text-gray-700">{data.email}</p>
      <p className="text-sm text-yellow-700">{data.phone}</p>
      <h2 className="text-xl font-bold mt-9">Education</h2>
      <p>{data.education}</p>
      <h2 className="text-xl font-bold mt-8">Experience</h2>
      <p>{data.experience}</p>
      <button
        onClick={generatePDF}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Download PDF
      </button>
    </div>
  );
};

export default CVPreview;