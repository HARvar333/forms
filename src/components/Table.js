import React, { useState, useEffect } from "react";


const Table = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <table className="table mt-5">
        <thead className="thead-dark">
          <tr>
            <th>Reg. No</th>
            <th>Name of the Student</th>
            <th>Gender</th>
            <th>Date Of Birth</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((userObj, ind) => {
            return (
              <tr key={ind}>
                <td> {userObj.id}</td>
                <td>{userObj.firstName} {userObj.lastName} </td>
                <td>{userObj.gender} </td>
                <td>{userObj.dob} </td>
                <td>{userObj.address1} </td>
                <td>{userObj.phoneno} </td>
                <td> {userObj.email}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
