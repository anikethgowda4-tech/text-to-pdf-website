import React, { useState } from "react";
import { jsPDF } from "jspdf";
import TextEditor from "./components/TextEditor";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {
  const [text, setText] = useState("");

  const generatePDF = () => {
    const doc = new jsPDF();

    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 10, 10);

    doc.save("my-text.pdf");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <TextEditor text={text} setText={setText} />
        <button className="btn" onClick={generatePDF}>
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default App;
