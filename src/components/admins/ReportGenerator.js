// admins/ReportGenerator.js

import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";

// define a generatePDF function that accepts a registers argument
const generatePDF = registers => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["First Name", "Last Name", "Phone", "Status",  "Closed on"];
  // define an empty array of rows
  const tableRows = [];

  // for each register pass all its data into an array
  registers.forEach(register => {
    const registerData = [
      register.firstname,
      register.lastname,
      register.phone,
      register.status,
      // called date-fns to format the date on the register
      format(new Date(register.updated_at), "yyyy-MM-dd")
    ];
    // push each register's info into a row
    tableRows.push(registerData);
  });


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // register title. and margin-top + margin-left
  doc.text("Closed registers within the last one month.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;