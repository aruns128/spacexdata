import React from 'react'

const DataTable = ({ tableData, loading }) => {
    console.log(tableData)
    return (
        <React.Fragment>
            {loading ? (<h2>Loading...</h2>) : (<React.Fragment>
                {tableData.length > 1 &&
                    (<table className="table table-hover text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Payload id</th>
                                <th scope="col">Manufacturer</th>
                                <th scope="col">Payload type</th>
                                <th scope="col">Orbit</th>
                                <th scope="col">Customers</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Reused</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map(data => (
                                <tr key={data.payload_id}>
                                    <td>{data.payload_id}</td>
                                    <td>{data.manufacturer}</td>
                                    <td>{data.payload_type}</td>
                                    <td>{data.orbit}</td>
                                    <td>{data.customers.length}</td>
                                    <td>{`kg:${data.payload_mass_kg} lbs:${data.payload_mass_lbs}`}</td>
                                    <td className={`${data.reused ? 'text-success' : 'text-danger'}`}>{data.reused ? 'YES' : 'NO'}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>)
                }
            </React.Fragment>)}
        </React.Fragment>
    )
}

export default DataTable
