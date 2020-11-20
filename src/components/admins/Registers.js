import React, { useEffect, useState } from "react";
import generatePDF from "./ReportGenerator";
import axios from 'axios';

const Registers = () => {
  
   const [registers, setRegisters] = useState([]);
  

  useEffect(() => {
    const getAllregisters = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3000/Registers");
        setRegisters(response.data.registers);
      } catch (err) {
        console.log("error");
      }
    };
    getAllregisters();
  }, []);

const reportRegisters = registers.filter(register => register.status === "completed");
  
  return (
    <div>
      <div className="container mb-4 mt-4 p-3">
        <div className="row">
          {/* {register.register.role === "user" ? (
            <> </>
          ) : ( */}
            <button
              className="btn btn-primary"
              onClick={() => generatePDF(reportRegisters)}
            >
              Generate monthly report
            </button>
          {/* )} */}
        </div>
      </div>
      <registersComponent registers={registers} />
    </div>
  );
};

export default Registers;