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
        <h1>India Covid-19 Dashboard</h1>
        </>
    )
}

export default CovidTracker;