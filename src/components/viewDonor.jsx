import React from 'react'

const viewDonor = () => {
    return (
        <div>

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
                        <th scope="col">Last Donation</th>
                        <th scope="col">Created At</th>

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
                                    <td>{value.mail}</td>
                                    <td>{value.city}</td>
                                    <td>{value.weight}</td>
                                    <td>{value.last_donated}</td>
                                    <td>{value.created_at}</td>

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