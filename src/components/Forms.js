import React, { useState, useEffect } from "react";
import "./Forms.css";

const Forms = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    gender: "",
    dob: "",
    phoneno: "",
    email: "",
  });
  let [subButton, setSubButton] = useState(true);
  const [errors, setError] = useState("");

  //    first name error
  const handleNameChange = (e) => {
    setFormState({ ...formState, firstName: e.target.value });

    let reg = /^[a-zA-Z ]*$/g;

    var str = e.target.value;

    if (!str.match(reg)) {
      setError({
        ...errors,
        firstNameletterErr: "Accepts Alphabets and Spaces",
      });
    } else {
      setError({ ...errors, firstNameletterErr: "" });
    }
  };

  const handleNameBlur = (e) => {
    if (e.target.value === "") {
      setError({
        ...errors,
        firstNameRequiredErr: "Please enter the First Name.",
      });
    }
  };

  useEffect(() => {
    if (formState.firstName.length >= 1 && formState.firstName.length <= 4)
      setError({
        ...errors,
        firstNameLengthErr: "Min 5 to Max 30 Characters Accepted",
        firstNameRequiredErr: "",
      });
    else if (formState.firstName.length > 4 || formState.firstName.length < 1) {
      setError({ ...errors, firstNameLengthErr: "" });
    }

    if (
      formState.firstName.length === 0 &&
      errors.firstNameLengthErr !== "" &&
      errors.firstNameRequiredErr === ""
    ) {
      setError({
        ...errors,
        firstNameRequiredErr: "Please enter the First Name.",
        firstNameLengthErr: "",
      });
    }
    if (formState.firstName.length > 30) {
      setError({
        ...errors,
        firstNameLengthErr: "Min 5 to Max 30 Characters Accepted",
      });
    }
  }, [formState.firstName]);

  // Lastname validation

  const handleLastNameChange = (e) => {
    setFormState({ ...formState, lastName: e.target.value });

    let reg = /^[a-zA-Z ]*$/g;

    var str = e.target.value;

    if (!str.match(reg)) {
      setError({
        ...errors,
        LastNameletterErr: "Accepts Alphabets and Spaces",
      });
    } else {
      setError({ ...errors, lastNameletterErr: "" });
    }
  };

  const handleLastNameBlur = (e) => {
    if (e.target.value === "") {
      setError({
        ...errors,
        lastNameRequiredErr: "Please enter the Last Name.",
      });
    }
  };
  useEffect(() => {
    if (formState.lastName.length >= 1 && formState.lastName.length <= 4)
      setError({
        ...errors,
        lastNameLengthErr: "Min 5 to Max 30 Characters Accepted",
        lastNameRequiredErr: "",
      });
    else if (formState.lastName.length > 4 || formState.lastName.length < 1) {
      setError({ ...errors, lastNameLengthErr: "" });
    }

    if (
      formState.lastName.length === 0 &&
      errors.lastNameLengthErr !== "" &&
      errors.lastNameRequiredErr === ""
    ) {
      setError({
        ...errors,
        lastNameRequiredErr: "Please enter the Last Name.",
        lastNameLengthErr: "",
      });
    }
    if (formState.lastName.length > 30) {
      setError({
        ...errors,
        lastNameLengthErr: "Min 5 to Max 30 Characters Accepted",
      });
    }
  }, [formState.lastName]);
  // Address1 validation

  const handleAddress1Blur = (e) => {
    if (e.target.value === "") {
      setError({
        ...errors,
        address1RequiredErr: "Please enter the Address.",
      });
    }
  };

  //Address2 Validation
  const handleAddress2Blur = (e) => {
    if (e.target.value === "") {
      setError({
        ...errors,
        address2RequiredErr: "Please enter the  Address",
      });
    }
  };

  // PhoneNumber Validation
  const handleNumberChange = (e) => {
    setFormState({ ...formState, phoneno: e.target.value });
  };

  const handleNumberBlur = (e) => {
    if (e.target.value === "") {
      setError({
        ...errors,
        phonenoRequiredErr: "Please enter the Mobile Number",
      });
    }
  };

  useEffect(() => {
    if (formState.phoneno.length >= 1 && formState.phoneno.length <= 10)
      setError({
        ...errors,
        phonenoLengthErr: "Max 10 number Accepted  ",
        phonenoRequiredErr: "",
      });
    else if (formState.phoneno.length < 1 || formState.phoneno.length === 10) {
      setError({ ...errors, phonenoLengthErr: "" });
    }

    if (
      formState.phoneno.length === 0 &&
      errors.phonenoLengthErr !== "" &&
      errors.phonenoRequiredErr === ""
    ) {
      setError({
        ...errors,
        phonenoRequiredErr: "Please enter the Phone Number",
        phonenoLengthErr: "",
      });
    }
    if (formState.phoneno.length > 10) {
      setError({
        ...errors,
        phonenoLengthErr: "Max 10 number Accepted",
      });
    }
  }, [formState.phoneno]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(formState)
    

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("user created");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
    
  
  return (
    <>
      <div className="input_reg">
        <label>Registration No:</label>
        <input type="number" className="input" />
      </div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit} novalidate>
          <div className="input_field">
            <label htmlFor="fn">First Name:</label>
            <input
              type="text"
              id="fn"
              className="input"
              autoComplete="off"
              onChange={(e) => handleNameChange(e)}
              onBlur={handleNameBlur}
              required
            />
            {errors.firstNameRequiredErr && (
              <p className="text-danger">{errors.firstNameRequiredErr}</p>
            )}
                        
            {errors.firstNameLengthErr && (
              <p className="text-danger">{errors.firstNameLengthErr}</p>
            )}
                        
            {errors.firstNameletterErr && (
              <p className="text-danger">{errors.firstNameletterErr}</p>
            )}
          </div>
          <div className="input_field">
            <label htmlFor="ln">Last Name:</label>
            <input
              type="text"
              className="input"
              autoComplete="off"
              onChange={(e) => handleLastNameChange(e)}
              onBlur={handleLastNameBlur}
              required
            />
            {errors.lastNameRequiredErr && (
              <p className="text-danger">{errors.lastNameRequiredErr}</p>
            )}
                        
            {errors.lastNameLengthErr && (
              <p className="text-danger">{errors.lastNameLengthErr}</p>
            )}
                        
            {errors.lastNameletterErr && (
              <p className="text-danger">{errors.lastNameletterErr}</p>
            )}
          </div>
          <div className="input_field">
            <label htmlFor="ad1">Address1:</label>
            <input
              type="text"
              id="ad1"
              className="input"
              autoComplete="off"
              onChange={(e) =>
                setFormState({ ...formState, address1: e.target.value })
              }
              onBlur={handleAddress1Blur}
              required
            />
            {errors.address1RequiredErr && (
              <p className="text-danger">{errors.address1RequiredErr}</p>
            )}

            {/* address 2 */}
          </div>
          <div className="input_field">
            <label htmlFor="ad2">Address2:</label>
            <input
              type="text"
              id="ad2"
              className="input"
              autoComplete="off"
              onChange={(e) =>
                setFormState({ ...formState, address2: e.target.value })
              }
              onBlur={handleAddress2Blur}
              required
            />
            {errors.address2RequiredErr && (
              <p className="text-danger"> {errors.address2RequiredErr} </p>
            )}
          </div>
          <div className="input_field">
            <label>Gender</label>

            <input
              type="radio"
              id="m"
              value="male"
              className="input"
              name="radiobutton"
              onClick={(e) =>
                setFormState({ ...formState, gender: e.target.value })
              }
            />

            <label htmlFor="m">Male</label>

            <input
              type="radio"
              id="f"
              value="female"
              className="input"
              name="radiobutton"
              onClick={(e) =>
                setFormState({ ...formState, gender: e.target.value })
              }
            />
            <label htmlFor="f">Female</label>

            <input
              type="radio"
              id="t"
              value="transgender"
              className="input"
              name="radiobutton"
              onClick={(e) =>
                setFormState({ ...formState, gender: e.target.value })
              }
            />
            <label htmlFor="t">Transgender</label>
          </div>

          <div className="input_field">
            <label htmlFor="dob">Date Of Birth:</label>
            <input
              type="date"
              id="dob"
              className="input"
              onChange={(e) =>
                setFormState({ ...formState, dob: e.target.value })
              }
              required
            />
          </div>
          <div className="input_field">
            <label htmlFor="pn">Phone No:</label>
            <input
              id="pn"
              type="number"
              autoComplete="off"
              className="input"
              onChange={(e) => handleNumberChange(e)}
              onBlur={handleNumberBlur}
              required
            />
             
            {errors.phonenoRequiredErr && (
              <p className="text-danger">{errors.phonenoRequiredErr}</p>
            )}
                        
            {errors.phonenoLengthErr && (
              <p className="text-danger">{errors.phonenoLengthErr}</p>
            )}
          </div>
          <div className="input_field">
            <label htmlFor="em">Email:</label>
            <input
              type="mail"
              id="em"
              className="input"
              onChange={(e) =>
                setFormState({ ...formState, email: e.target.value })
              }
              required
            />
          </div>

          <div className="btns">
            <button type="submit" className="btn1">
              Submit
            </button>
            <button type="reset" className="btn2">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Forms;
