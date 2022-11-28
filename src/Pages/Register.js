import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { posturl } from "./Config";
import "../App.css";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Navbar2 from "../Component/Navbar2";

const Register = () => {
  const [inpval, setINP] = useState({
    EmployeeID: "",
    EmployeePhoneNo: "",
    EmployeeSalCode: "",
    EmployeeName: "",
    EmployeeAge: "",
    EmployeeAddress: "",
    EndDate: "",
    StartDate: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();
    const {
      EmployeeID,
      EmployeePhoneNo,
      EmployeeSalCode,
      EmployeeName,
      EmployeeAge,
      EmployeeAddress,
      EndDate,
      StartDate,
    } = inpval;
    const res = await fetch(posturl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EmployeeID,
        EmployeePhoneNo,
        EmployeeSalCode,
        EmployeeName,
        EmployeeAge,
        EmployeeAddress,
        EndDate,
        StartDate,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("Data Added Successfully");
    }
  };

  // const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);

  // const getdata = async (e) => {
  //   e.preventDefault();

  //   const res = await fetch("/getdata", {
  //     method: "Get",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await res.json();
  //   console.log(getdata);
  //   if (res.status === 404 || !data) {
  //     console.log("error");
  //   } else {
  //     setUserdata(data);
  //     console.log("getdata");
  //   }
  // };

  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <>
      <Navbar2 />
      {/* ---------------------------------------Form---------------------------------------------- */}
      <div className="container">
        <div className="Auth-form-container1">
          <form className="Auth-form1">
            <div className="Auth-form-content1">
              <h1 className="title1">
                New Employee User &nbsp;
                <i class="fa-sharp fa-solid fa-person-circle-plus"></i>{" "}
              </h1>

              <br></br>
              <div className="row">
                <div className="col-lg-6">
                  <label for="ExampleInputID" class=" form=label">
                    EmployeeID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputID"
                    placeholder="Please enter EmployeeID"
                    value={inpval.EmployeeID}
                    onChange={setdata}
                    name="EmployeeID"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputName" class=" form=label">
                    EmployeeName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputName"
                    placeholder="Please enter EmployeeName"
                    value={inpval.EmployeeName}
                    onChange={setdata}
                    name="EmployeeName"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputAddress" class=" form=label">
                    EmployeeAddress
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputName"
                    placeholder="Please enter valid Address"
                    value={inpval.EmployeeAddress}
                    onChange={setdata}
                    name="EmployeeAddress"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputSalcode" class=" form=label">
                    EmployeeSalCode
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="ExampleInputSalCode"
                    placeholder="Please enter valid SalCode"
                    value={inpval.EmployeeSalCode}
                    onChange={setdata}
                    name="EmployeeSalCode"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputPhoneNo" class=" form=label">
                    EmployeePhoneNo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputPhoneNo"
                    value={inpval.EmployeePhoneNo}
                    onChange={setdata}
                    name="EmployeePhoneNo"
                    maxlength="10"
                    pattern="\d{10}"
                    placeholder="Please enter exactly 10 digits"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputAge" class=" form=label">
                    EmployeeAge
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="ExampleInputAge"
                    value={inpval.EmployeeAge}
                    onChange={setdata}
                    name="EmployeeAge"
                    maxlength="10"
                    pattern="\d{10}"
                    placeholder="Please enter valid age"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputStartDate" class=" form=label">
                    StartDate
                  </label>
                  <input
                    type="Date"
                    className="form-control"
                    id="ExampleInputStartDate"
                    value={inpval.StartDate}
                    onChange={setdata}
                    name="StartDate"
                    required
                  />
                </div>

                <div className="col-lg-6">
                  <label for="ExampleInputEndDate" class=" form=label">
                    EndDate
                  </label>
                  <input
                    type="Date"
                    className="form-control"
                    id="ExampleInputEndDate"
                    value={inpval.EndDate}
                    onChange={setdata}
                    name="EndDate"
                    required
                  />
                </div>

                {/* <div className="col-lg-6">
                  <label for="ExampleInputPassword1" class=" form=label">
                    work
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputGrade"
                    value={inpval.work}
                    onChange={setdata}
                    name="work"
                  />
                </div> */}
                {/* <div className="col-lg-6">
                  <label for="ExampleInputPassword1" class=" form=label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputDepartment"
                    value={inpval.add}
                    onChange={setdata}
                    name="add"
                  />
                </div> */}

                {/* <div className="col-lg-6">
                  <label for="ExampleInputPassword1" class=" form=label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    value={inpval.desc}
                    name="desc"
                    onChange={setdata}
                    id="exampleFormControlTextarea1"
                    rows="4"
                  >
                    {" "}
                  </textarea>
                </div> */}
                {/* <div className='mb-3 col-lg-12 col-md-12 col-12'>
                <label for='ExampleInputPassword1' class=' form=label'>
                  Upload Photo:
                </label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Enter UserName'
                  id='ExampleInputPassword1'
                />
              </div> */}
                <div className="col-lg-6" id="sub">
                  <button
                    type="submit"
                    onClick={addinpdata}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />

      <Footer />
    </>
  );
};

export default Register;
