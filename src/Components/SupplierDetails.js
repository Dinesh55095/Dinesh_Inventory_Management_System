import { React, useState, useEffect } from 'react'
import './ItemDetails.css';


function SupplierDetails(props) {

    const [countries, setCountries] = useState([]);
    const [selectedSateList, setSelectedSateList] = useState([]);
    const [countriesId, setCountriesId] = useState();
    console.log('Response:selectedSateList ', selectedSateList);
    useEffect(() => {
        fetch('https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList').then((responce) => {
            responce.json().then((result) => {
                setCountries(result.data.countyList);
            })
        })
    }, [])

    const handleChange = (event) => {
        setCountriesId(event.target.value);
    };

    useEffect(() => {
        fetch('https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-SateList-By-Country?countryId=${countriesId}`)').then((responce) => {
            responce.json().then((result) => {
    console.log('Response:selectedSateList result', result);

                setSelectedSateList(result)
            })
        })
    }, [])

    return (
        <div className='container main mt-4'>
            <h1 className='main-title'>Supplier Details</h1>
            <form className='main-form mt-4'>
                <div className='row'>
                    <div className='col-md-12 col-sm-6'>
                        <label>Supplier Name</label>
                        <input type='text' value={props.supplierName} onChange={(e) => props.setSupplierName(e.target.value)} placeholder='Enter Supplier Name'></input>
                        <p>Max 50 charactors</p>
                    </div>
                    <div className='col-md-12 col-sm-6'>
                        <label>Company Name</label>
                        <input type='text' placeholder='Enter Company Name'></input>
                        <p>Max 50 charactors</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-sm-6'>
                        <label>Country</label>
                        <select value={countriesId} onChange={handleChange}>
                            {countries.map((country) => (
                                <option key={country.countryId} value={country.countryId}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                        <p>Numeric Value (USD)</p>
                    </div>
                    <div className='col-md-12 col-sm-6'>
                        <label>State</label>
                        <select>
                            <option>USA</option>
                            <option>UK</option>
                            <option>INDAI</option>
                        </select>
                        <p>Format: MM/DD/YYY</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-sm-6'>
                        <label>City</label>
                        <input type='text' value={props.cityName} onChange={(e) => props.setCityName(e.target.value)} placeholder='Enter City'></input>
                        <p>Max 50 charactors</p>
                    </div>
                    <div className='col-md-12 col-sm-6'>
                        <label>Email Address</label>
                        <input type='text' value={props.email} onChange={(e) => props.setEmail(e.target.value)} placeholder='Enter email address'></input>
                        <p>valid email format</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 col-sm-6'>
                        <label>Email Address</label>
                        <input type='text' placeholder='Enter email address'></input>
                        <p>valid email format</p>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SupplierDetails;