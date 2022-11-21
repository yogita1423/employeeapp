import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Multiselect from "multiselect-react-dropdown";

// import Demo from "../Component/Demo";
import { postdepturl, geturl } from "./Config";
import Navbar2 from "../Component/Navbar2";
//import EmployeeSkills from "../Component/EmployeeSkills";
//import Emp from "./Emp";

const DeptRegister = () => {
  const [inpval, setINP] = useState({
    EmployeeID: "",
    EmployeeName: "",
    Department: "",
    EndDate: "",
    DateOfJoining: "",
    Status: "",
    //EmployeeSkills: "",
    UserSkills: "",
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

  const addinpdeptdata = async (e) => {
    e.preventDefault();
    const {
      EmployeeID,
      EmployeeName,
      EndDate,
      Department,
      DateOfJoining,
      Status,
      UserSkills,
    } = inpval;
    console.log(inpval);
    //console.log(userinfo);
    // var Department;
    //Department = userinfo;
    // console.log(
    //   JSON.stringify({
    //     EmployeeID,
    //     Department,
    //     EndDate,
    //     DateOfJoining,
    //     Status,
    //   })
    // );
    const res = await fetch(postdepturl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EmployeeID,
        EmployeeName,
        Department,
        EndDate,
        DateOfJoining,
        Status,
        UserSkills,
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

  const [EmployeeSkills] = useState(["Java", "Python", "React"]);

  // EmployeeSkills.map((item) => {
  //   console.warn(item);
  // });
  const handleChange = (e) => {
    //const getSkills = [...EmployeeSkills];
    // EmployeeSkills.map((item) => {
    //   console.warn(item);
    // });
    //console.log("multi -", e);
    let selectedValues = "";
    e.map((x) => {
      selectedValues =
        // selectedValues.substring(1, selectedValues.length) + " , " + x;
        selectedValues.substring(1, selectedValues.length) + "  " + x;
      //selectedValues = selectedValues.substring(0, selectedValues.length - 1);
      console.log(selectedValues);
    });
    //console.log(selectedValues.substring(0, selectedValues.length - 2));
    setINP((preval) => {
      return {
        ...preval,
        UserSkills: selectedValues,
      };
    });
  };

  //     const [UserSkills, setUserSkills] = useState({
  //                   setUserSkills(selectedValues),

  // });

  //setEmployeeSkills(Array.isArray(e) ? e.map((x) => x.EmployeeSkills) : []);
  // setEmployeeSkills(getSkills);

  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <>
      {/* <Navbar />
       */}
      <Navbar2 />
      {/* ---------------------------------------Form---------------------------------------------- */}
      <div className="container">
        <div className="Auth-form-container1">
          <form className="Auth-form1">
            <div className="Auth-form-content1">
              <h1 className="title1">
                New Department User &nbsp;&nbsp;
                <i class="fa-solid fa-building-user"></i>
              </h1>
              <br></br>

              <div className="row">
                <div className="col-lg-6">
                  <label for="ExampleInputID" class=" form=label">
                    EmployeeID
                  </label>
                  {/* <input
                    type="text"
                    className="form-control"
                    id="ExampleInputID"
                    value={inpval.EmployeeID}
                    onChange={setdata}
                    name="EmployeeID"
                  /> */}
                  <select
                    className="empSelect1"
                    value={inpval.EmployeeID}
                    onChange={setdata}
                    name="EmployeeID"
                    class="form-select"
                    aria-label="Disabled select example"
                  >
                    <option selected>Select EmployeeID</option>
                    {getuserdata.map((element, id) => {
                      return (
                        <>
                          <option>{element.EmployeeID}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
                {/* <div className="row">
                <div className="mb-3 col-lg-3 col-md-3 col-12">
                  <label for="ExampleInputPassword1" class=" form=label">
                    Employee Code:
                  </label>

                  <select
                    className="form-control"
                    value={inpval.EmployeeID}
                    onChange={setdata}
                    name="EmployeeCode"
                  >
                    <option selected> select emp code</option>

                    {getuserdata.map((element, id) => {
                      return (
                        <>
                          <option> {element.EmployeeID}</option>
                        </>
                      );
                    })}
                  </select>
                </div> */}

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
                  <label for="ExampleInputDepartment" class=" form=label">
                    Department
                  </label>
                  {/* <select
                    className="form-control"
                    value={inpval.Department}
                    onChange={setdata}
                    name="Department"
                    class="form-select"
                    aria-label="Disabled select example"
                  >
                    <option selected>Select EmployeeID</option>
                    <option>DGTL</option>
                    <option>HR</option>
                    <option>OTG</option>
                  </select> */}
                  <br />
                  <input
                    type="radio"
                    className="radio"
                    value="OTG"
                    onChange={setdata}
                    name="Department"
                    aria-label="Disabled select example"
                  />
                  <span className="form-check-label" htmlFor="flexCheckDefault">
                    OTG
                  </span>
                  <br />
                  <input
                    type="radio"
                    className="radio"
                    value="DGTL"
                    onChange={setdata}
                    name="Department"
                    aria-label="Disabled select example"
                  />
                  <span className="form-check-label" htmlFor="flexCheckDefault">
                    DGTL
                  </span>
                  <br />
                  <input
                    type="radio"
                    className="radio"
                    value="HR"
                    onChange={setdata}
                    name="Department"
                    aria-label="Disabled select example"
                  />
                  <span className="form-check-label" htmlFor="flexCheckDefault">
                    HR
                  </span>
                  {/* <div className="checkBox">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="Department"
                      value="OTG"
                      onChange={(e) => getuserinfo(e)}
                      id="flexCheckDefault"
                    />
                    <span
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      OTG
                    </span>


                    {/*<br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="Department"
                      value="HR"
                      onChange={(e) => getuserinfo(e)}
                      id="flexCheckDefault"
                    />
                    <span
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      HR
                    </span>
                    <br />
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="Department"
                      value="DGTL"
                      onChange={(e) => getuserinfo(e)}
                      id="flexCheckDefault"
                    />
                    <span
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      DGTL
                  </span> */}
                  {/* </div> */}
                </div>
                <div className="col-lg-6">
                  <label for="ExampleInputDateOfJoining" class=" form=label">
                    DateOfJoining
                  </label>
                  <input
                    type="Date"
                    className="form-control"
                    id="ExampleInputDateOfJoining"
                    value={inpval.DateOfJoining}
                    onChange={setdata}
                    name="DateOfJoining"
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
                  />
                </div>
                <div className="col-lg-6">
                  <label for="ExampleInputStatus" class=" form=label">
                    Status
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="ExampleInputName"
                    //placeholder="Please enter valid Address"
                    value={inpval.Status}
                    onChange={setdata}
                    name="Status"
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <label for="ExampleInputStatus" class=" form=label">
                    UserSkills
                  </label>
                  {/* <Multiselect
                    isObject={false}
                    onRemove={(event) => {
                      console.log(event);
                    }}
                    onSelect={(event) => {
                      console.log(event);
                    }}
                    value={this.state.EmployeeSkills}
                    onChange={handleChange}
                    options={EmployeeSkills}
                    showCheckbox
                  /> */}
                  {/* <EmployeeSkills /> */}
                  <Multiselect
                    options={EmployeeSkills}
                    isObject={false}
                    onRemove={(event) => {
                      handleChange(event);
                    }}
                    onSelect={(event) => {
                      handleChange(event);
                    }}
                    //onChange={handleChange}
                    showCheckbox
                    name="Skills"
                    //value={EmployeeSkills.Skills}
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
                <br />
                <div className="col-lg-6" id="sub2">
                  <button
                    type="submit"
                    onClick={addinpdeptdata}
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

export default DeptRegister;
