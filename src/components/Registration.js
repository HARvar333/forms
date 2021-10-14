import React from "react";
import { useForm } from "react-hook-form";
import './Forms.css'

const Registration = () =>{
    const {register,handleSubmit,formState:{errors}}=useForm()

    const formData =(userObj) =>{

        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj),
          })
            .then((response) => response.json())
            .then((data) => {
              alert("user created");
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        console.log(userObj)
    }
    return(
        <>
          <div className="container">
        <div className="title">Registration Form</div>
        <form className="form" onSubmit={handleSubmit(formData)}>
            
            <div className="input_field">
                <label for="fn">First Name:</label>
                <input type="text" id="fn" className="input" {...register('firstName',{required:true,minLength:4,maxLength:15})}/>
                
                {errors.firstName?.type ==='required'&& <span>First name required</span>}
                {errors.firstName?.type ==='minLength'&& <span>min length 4</span>}
                {errors.firstName?.type ==='maxLength'&& <span>max length 15</span>}

            </div>
            <div className="input_field">
                <label for="ln">Last Name:</label>
                <input type="text" className="input" {...register('lastName',{required:true})}/>

                {errors.lastName?.type ==='required' && <span>*Required</span>}
            </div>
            <div className="input_field">
                <label for="ad1">Address1:</label>
                <input type="text" id="ad1" className="input"  {...register('address1',{required:true})}/>

                {errors.address1?.type ==='required' && <span>*Required</span>}
            </div>
            <div className="input_field">
                <label for="ad2">Address2:</label>
                <input type="text" id="ad2" className="input"{...register('address2',{required:true})}/>

                {errors.address2?.type ==='required' && <span>*Required</span>}
            </div>
            <div className="input_field">
            <label>Gender</label>
            <input type="radio" id="m" className="input" value="male" {...register('gender',{required:true})} />
            <label for="m">male</label>
            <input type="radio" id="f" className="input" value="female" {...register('gender',{required:true})} />
            <label for="f">female</label>

            <input type="radio" id="t" className="input" value="transgender" {...register('gender',{required:true})}  />
            <label for="t">transgender</label>

            {errors.gender?.type ==='required' && <span> Atleast one selected</span>}
            
        </div>
           
            <div className="input_field">
                 <label>Date Of Birth:</label>
                 <input type="date" className="input" {...register('dob',{required:true})}/>

                 {errors.dob?.type ==='required' && <span>*Required</span>}
            </div>
            <div className="input_field">
                <label>Phone No:</label>
                <input type="text" className="input" {...register('phoneno',{required:true,maxLength:10})}/>

                {errors.phoneno?.type ==='required' && <span>*Required</span>}
                {errors.phoneno?.type ==='maxLength' && <span>*max 10 num</span>}
            </div>
            <div className="input_field">
                <label>Email:</label>
                <input type="mail" className="input"{...register('email',{required:true})}/>

                {errors.email?.type ==='required' && <span>*Required</span>}
            </div>
           
            
       
        
        <div className="btns">
        <button type="submit" className="btn1">Submit</button>
        <button type="reset" className="btn2">Reset</button>
    </div>
    </form>
</div>
        </>
    )
}

export default Registration;