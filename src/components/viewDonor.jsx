import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const viewDonor = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://host-demo-app.onrender.com/api/donors").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(
        () => {
            fetchData()
        }, []
    )
    return (
        <div>
            <NavBar />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Donor Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Phone</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">City</th>
                        <th scope="col">Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (value, index) => {
                            return (
                                <tr>
                                    <th scope="row">{value.donor_name}</th>
                                    <td>{value.age}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.blood_group}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.email}</td>
                                    <td>{value.city}</td>
                                    <td>{value.weight_kg}</td>


                                </tr>
                            )
                        }
                    )}


                </tbody>
            </table>

        </div>
    )
}

export default viewDonor