import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { geturl } from "./Config";

import { CSVLink } from "react-csv";

//import { deleteurl } from "./Config";
//import { puturl } from "./Config";

const Emp = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch(geturl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("getdata");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (EmployeeID) => {
    const res2 = await fetch(`http://localhost:5001/employee/${EmployeeID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      console.log("error");
    } else {
      console.log("user deleted");
      getdata();
    }
  };

  return (
    <header>
      <Navbar />
      <section>
        <div className="top">
          <h1>EMPLOYEES DETAILS</h1>
        </div>
        <div className="add-btn">
          <Link to="/register" class="btn btn-primary">
            ADD DATA
          </Link>
        </div>
        <div className="download-btn">
          <CSVLink data={getuserdata} className="btn btn-success mb-3">
            DOWNLOAD IN EXCEL
          </CSVLink>
        </div>
      </section>
      <div className="Table">
        <div className="container-fluid ">
          <table class="table table-dark table-striped">
            <thead>
              <tr className="Emptable">
                <th scope="col">Sr No</th>
                <th scope="col">EmployeeID</th>

                <th scope="col">EmployeeName</th>
                <th scope="col">EmployeeAge</th>
                <th scope="col">EmployeeAddress</th>
                <th scope="col">EmployeeSalCode</th>
                <th scope="col">EmployeePhoneNo</th>
                <th scope="col">StartDate</th>
                <th scope="col">EndDate</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr className="Emptable">
                      <th scope="row">{id + 1}</th>
                      <td>{element.EmployeeID}</td>
                      <td>{element.EmployeeName}</td>
                      <td>{element.EmployeeAge}</td>
                      <td>{element.EmployeeAddress}</td>
                      <td>{element.EmployeeSalCode}</td>
                      <td>{element.EmployeePhoneNo}</td>
                      <td>{element.StartDate}</td>
                      <td>{element.EndDate}</td>

                      <td className="d-flex justify-content-between ">
                        <button className="btn btn-success">Read</button>
                        <Link to={`/Edit/`} className="btn">
                          <button className="btn btn-primary">Update</button>
                        </Link>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteuser(element.EmployeeID)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </header>
  );
};

export default Emp;
