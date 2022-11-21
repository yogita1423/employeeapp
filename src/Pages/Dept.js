import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { getdepturl } from "./Config";
import { CSVLink } from "react-csv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar2 from "../Component/Navbar2";

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
    <>
      <Navbar2 />
      <section>
        <div className="top">
          <h1>DEPARTMENT DETAILS</h1>
        </div>
        <div className="add-btn">
          <Link to="/DeptRegister" class="btn btn-primary">
            ADD DATA &nbsp;
            <i class="fa-solid fa-plus"></i>
          </Link>
        </div>
        <div className="download-btn">
          <CSVLink data={getuserdata} className="btn btn-success mb-3">
            DOWNLOAD IN EXCEL &nbsp; <i class="fa-solid fa-download"></i>
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
                <th scope="col">EmployeeName</th>
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
                      <td>{element.EmployeeName}</td>
                      <td>{element.Department}</td>
                      <td>{element.DateOfJoining}</td>
                      <td>{element.EndDate}</td>
                      <td>{element.Status}</td>
                      <td>{element.UserSkills}</td>

                      <td className="d-flex justify-content-between ">
                        <Link to="/view:id">
                          <button className="btn btn-success">
                            <i class="fa-regular fa-eye"></i>
                            <br />
                            View
                          </button>
                        </Link>

                        <Link to="/DeptEdit">
                          <button className="btn btn-primary" id="updatebtn">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <br />
                            Update
                          </button>
                        </Link>
                        <button className="btn btn-danger">
                          {" "}
                          <i class="fa-solid fa-trash"></i>
                          <br />
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
      <br />

      <Footer />
    </>
  );
};

export default Dept;
