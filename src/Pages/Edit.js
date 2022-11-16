import React, { useEffect, useState } from "react";
//import { NavLink, useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { puturl, geturl } from "./Config";

const Edit = () => {
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

  // const { id } = useParams("");
  // console.log(id);

  // const getdata = async () => {
  //   const res = await fetch(`/getuser/${id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await res.json();
  //   console.log(data);

  //   if (res.status === 422 || !data) {
  //     console.log("error ");
  //   } else {
  //     setINP(data);
  //     console.log("get data");
  //   }
  // };

  // useEffect(() => {
  //   getdata();
  // }, []);

  // GETTING EMP id FOR DROPDOWN
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getempdata = async (e) => {
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
      console.log("getempdata");
    }
  };

  useEffect(() => {
    getempdata();
  }, []);

  const updateuser = async (e) => {
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

    const res2 = await fetch(puturl, {
      method: "PUT",
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

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 404 || !data2) {
      alert("fill the data");
    } else {
      alert("Data updated");
    }
  };

  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <header>
      <Navbar />
      {/* ---------------------------------------Form---------------------------------------------- */}
      <div className="container">
        <div className="Auth-form-container1">
          <form className="Auth-form1">
            <div className="Auth-form-content1">
              <h3 className="Auth-form-title1">UPDATE USER</h3>

              {/* <div className='row'>
              <div className='mb-3 col-lg-3 col-md-3 col-12'>
                <label for='ExampleInputPassword' class=' form=label'>
                  EmployeeCode:
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter EMP code'
                  id='ExampleInputPassword'
                  value={inpval.EmployeeCode}
                  onChange={setdata}
                  name='EmployeeCode'
                />
              </div> */}

              <div className="row">
                <div className="col-md-6">
                  <label for="ExampleInputPassword1" class=" form=label">
                    EmployeeID
                  </label>
                  <br />
                  <select
                    className="empSelect"
                    value={inpval.EmployeeID}
                    onChange={setdata}
                    name="EmployeeID"
                  >
                    <option selected>Please enter EmployeeID</option>
                    {getuserdata.map((element, id) => {
                      return (
                        <>
                          <option> {element.EmployeeID}</option>
                        </>
                      );
                    })}
                  </select>
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
                    type="text"
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

                <div className="col-lg-6" id="sub">
                  <button
                    type="submit"
                    onClick={updateuser}
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
    </header>
  );
};

export default Edit;
