import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { getdepturl } from "./Config";
import { CSVLink } from "react-csv";

const Dept = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch(getdepturl, {
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

  //  const deleteuser = async (id) => {
  //    const res2 = await fetch(`/deleteuser/${id}`, {
  //      method: "DELETE",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //    });

  //    const deletedata = await res2.json();
  //    console.log(deletedata);

  //    if (res2.status === 422 || !deletedata) {
  //      console.log("error");
  //    } else {
  //      console.log("user deleted");
  //      getdata();
  //    }
  //  };

  return (
    <header>
      <Navbar />
      <section>
        <div className="top">
          <h1>DEPARTMENT DETAILS</h1>
        </div>
        <div className="add-btn">
          <Link to="/DeptRegister" class="btn btn-primary">
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
        <div className="container-fluid">
          <table class="table table-dark table-striped">
            <thead>
              <tr className="deptTable">
                <th scope="col">Sr No</th>
                <th scope="col">EmployeeID</th>
                <th scope="col">Department</th>
                <th scope="col">DateOfJoining</th>
                <th scope="col">EndDate</th>
                <th scope="col">Status</th>
                <th scope="col">UserSkills</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {getuserdata.map((element, id) => {
                return (
                  <>
                    <tr className="deptTable">
                      <th scope="row">{id + 1}</th>
                      <td>{element.EmployeeID}</td>
                      {/* <td>
                        {
                        if (element.Department !== null)
                        {element.Department.map((item, index) => {
                          <>
                            <div>{item.Department}</div>
                          </>;
                        })}
                        }
                      </td> */}
                      <td>{element.Department}</td>
                      <td>{element.DateOfJoining}</td>
                      <td>{element.EndDate}</td>
                      <td>{element.Status}</td>
                      <td>{element.UserSkills}</td>

                      <td className="d-flex justify-content-between ">
                        <button className="btn btn-success">Read</button>

                        <button className="btn btn-primary">Update</button>

                        <button className="btn btn-danger">Delete</button>
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

export default Dept;
