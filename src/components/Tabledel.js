import React from "react";
import { useEffect,useState } from "react";

const Tabeldel = () => {
    let [data, setData] = useState([]);
  
    const url="http://localhost:5000/user"
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err));
    }, []);

    
    const deleteUser=(id) =>{
        console.log("id is",id)
       
          fetch(url+'/'+ id, {method:"DELETE"})
          .then(res =>res.json())
          .then(data => console.log(data))
          .catch(err =>console.log(err))
        
          
    }
  
    return (
      <>
        <table className="table mt-5" >
          <thead className="thead-dark">
            <tr>
              <th>Reg. No</th>
              <th>Name of the Student</th>
              <th>Gender</th>
              <th>Date Of Birth</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Delete</th>
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
                  <td>
                      <button onClick={()=>deleteUser(userObj.id)}>X</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };
  export default Tabeldel;
  