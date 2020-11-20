import React from "react";
import { Link } from "react-router-dom";

const RegistersComponents = ({ registers }) => {

// a function that assigns bootstrap styling classes based on 
// the status of the register
  const assignColorToRegisterStatus = register => {
    if (register.status === "completed") {
      return "p-3 mb-2 bg-success text-white";
    } else if (register.status === "in_progress") {
      return "p-3 mb-2 bg-warning text-dark";
    } else if (register.status === "opened") {
      return "p-3 mb-2 bg-light text-dark";
    }
  };
  return (
    <div className="container">
      {registers.length === 0 ? (
        "You currently have no registers created"
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {registers.map(register => (
              <tr key={register.firstname}>
                <td>{register.firstname}</td>
                <td>{register.lastname}</td>
                <td>{register.phone}</td>
                <td className={assignColorToRegisterStatus(register)}>
                  {register.status}
                </td>
                <td>
                  <Link to={`/register/${register.firstname}`}>See comments</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RegistersComponents;