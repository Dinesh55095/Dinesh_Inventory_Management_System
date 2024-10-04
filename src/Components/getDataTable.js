import { React, useState, useEffect } from 'react';
import './getDataTable.css';
const GetDataTable = (props) => {
    // const [data, setData] = useState([]);
    const [responseData, setResponseData] = useState([]);
    const [supplierData, setSupplierData] = useState([]);
    const payload = {
        itemDetails: {
            itemName: props?.itemName,
            quantity: props?.quantity,
            unitPrice: "5000",
            currency: "$",
            submissionDate: "2021-07-27"
        },
        supplier: {
            supplierName:  props?.supplierName,
            companyName: "AppleB",
            email: props.email,
            phoneCode: "+91",
            phoneNumber: "7007407898",
            countryId: "1",
            stateId: "1",
            cityId: "2",
            cityName: props?.cityName
        },
    };
    
    // Function to post data
    const postData = async () => {
        try {
            const response = await fetch(
                "https://apis-technical-test.conqt.com/Api/Item-Supplier/Save-Items-Suppliers",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );
            const ResponseData = await response.json();
            setResponseData(ResponseData.data.itemDetails);
            setSupplierData(ResponseData.data.supplier);
            console.log('Response:', ResponseData.data);
        } catch (error) {
            console?.error("Error posting data", error);
        }
    };

    useEffect(() => {
        fetch('https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList').then((responce) => {
            responce.json().then((result) => {
                // console.log('result= ', result)
                // setData(result.data.data);
            })
        })
    }, [])


    return (
        <>
            <div className="container mt-5">
            <div className='table-main'>
            <div className='table-header'>
                <h2 className="mb-4 get-data-table-heading">Uploaded Data</h2>
                <button className='btn btn-outline-secondary btn-sm'>Clear All</button>
                </div>
                <div className="table-responsive mt-4">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th className="col"><input type='checkbox' /></th>
                                <th className="col">Supplier Name</th>
                                <th className="col">Item Name</th>
                                <th className="col">Quantity</th>
                                <th className="col">city</th>
                                <th className="col">country</th>
                                <th className="col">Email</th>
                                <th className="col">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>{supplierData.supplierName}</td>
                                <td>{responseData.itemName}</td>
                                <td>{responseData.quantity}</td>
                                <td>{supplierData.cityName}</td>
                                <td>{supplierData.countryName}</td>
                                <td>{supplierData.email}</td>
                                <td>{supplierData.phoneNumber}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            <button onClick={postData} >Click</button>
            <div className='mt-4'></div>
        </>
    )
}

export default GetDataTable

