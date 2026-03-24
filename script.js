async function generatePDF() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    const text = document.getElementById("text-input").value;

    const lines = doc.splitTextToSize(text, 180);
    doc.text(lines, 10, 10);

    doc.save("text.pdf");
}
