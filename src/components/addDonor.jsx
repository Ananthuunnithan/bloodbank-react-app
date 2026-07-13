import React, { useState } from 'react'
import NavBar from './NavBar'

const AddDonor = () => {
    const [input,changeInput]= useState(
        { 
            donor_name: "",  
            age: "" ,  
            gender: "",  
            blood_group: "",  
            phone: "",  
            email: "",  
            city: "",  
            weight_kg: "",  
            last_donation_date: ""
        }
    )
    const inputHandler=(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(input)
        axios.post("https://host-demo-app.onrender.com/api/add-donor",input).then(
            (response)=>{
                console.log(response.data)
                alert("Course added successfully")
            }
        ).catch()
    }
  return (
    <div>
<NavBar/>
<div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col col-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Donor Name</label>
                                <input type="text" className="form-control" name="donor_name" value={input.donor_name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="" id="" className="form-select" name="gender" value={input.gender} onChange={inputHandler}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Blood Group</label>
                                <input type="text" className="form-control" name="blood_group" value={input.blood_group} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">phone</label>
                                <input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">E-mail</label>
                                <input type="text" className="form-control" name="email" placeholder="abc@mail" value={input.email} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">City</label>
                                <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="text" className="form-control" name="weight_kg" value={input.weight_kg} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Last Donation Date</label>
                                <input type="date" className="form-control" name="last_donation_date" value={input.last_donation_date} onChange={inputHandler} />

                            </div>
                         
                            <div className="col col-12">

                                <button className="btn btn-success" onClick={readValue}>Submit</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default AddDonor