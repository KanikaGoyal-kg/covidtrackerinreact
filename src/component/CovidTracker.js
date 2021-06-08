import React, { useEffect, useState } from 'react';

const CovidTracker = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
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
                    <tbody>
                    {data.map((curElm, index) => {
                        return (
                            <tr key={index}>
                            <th>{curElm.state} </th>
                            <th> {curElm.confirmed} </th>
                            <th> {curElm.recovered} </th>
                            <th> {curElm.deaths} </th>
                            <th> {curElm.active} </th>
                            <th> {curElm.lastupdatedtime} </th>
                        </tr>
                        )
                    })}
                   
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default CovidTracker;