import React, { useEffect } from 'react';

const CovidTracker = () => {

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise)
    }

    useEffect(() => {
        // getCovidData();
    },[])

    return (
        <>
        <div className="container-fluid mt-5">
            <div className="main-heading">
                <h1 className="mb-5"><span className="font-weight-bold"> India </span>Covid-19 Dashboard</h1>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th> State </th>
                            <th> Confirmed </th>
                            <th> recovered </th>
                            <th> deaths </th>
                            <th> active </th>
                            <th> update </th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
        </>
    )
}

export default CovidTracker;