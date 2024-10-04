import React from 'react'
import './SubmittedData.css';

function SubmittedData(props) {
    return (
        <div className='container mt-4 text-center'>
            <h1 className='main-title'>Submitted Data</h1>
            <p className='mt-4'>The data submitted by users will be displayed below</p>
            <button className='btn btn-primary mt-2' onClick={props.postData} style={{ padding: "12px 50px" }}>Save Change</button>
        </div>
    )
}
export default SubmittedData;