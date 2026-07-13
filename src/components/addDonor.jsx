import React from 'react'

const addDonor = () => {
    return (
        <div>

            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col col-12">

                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Donor Name</label>
                                <input type="text" className="form-control" name="course_name" value={input.course_name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" name="duration" value={input.duration} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="" id="" className="form-select">
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Others</option>
                                </select>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Blood Group</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">phone</label>
                                <input type="tel" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">E-mail</label>
                                <input type="text" className="form-control" name="mail" placeholder="abc@mail" value={input.phone} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">City</label>
                                <input type="text" className="form-control" name="city" value={input.City} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Weight</label>
                                <input type="text" className="form-control" name="weight" value={input.weight} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Last Donation Date</label>
                                <input type="date" className="form-control" name="donation_date" value={input.phone} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4">

                                <label htmlFor="" className="form-label">Created Date</label>
                                <input type="date" className="form-control" name="trainer" value={input.phone} onChange={inputHandler} />

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

export default addDonor