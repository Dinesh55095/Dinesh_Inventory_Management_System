import React, { useState, useEffect } from 'react'
import './ItemDetails.css';


function SupplierDetails(props) {

    const [selectedCountrieList, setSelectedCountrieList] = useState([]);
    const [countriesId, setCountriesId] = useState();
    const [selectedSateList, setSelectedSateList] = useState([]);
    const [stateId, setStateId] = useState();
    const [selectedCityList, setSelectedCityList] = useState([]);
    const [cityId, setCityId] = useState();

    useEffect(() => {
        fetch(`https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList`).then((responce) => {
            responce.json().then((result) => {
                setSelectedCountrieList(result.data.countyList);
            })
        })
    }, [])

    const handleChangeCountry = (event) => {
        setCountriesId(event.target.value);
    };

    useEffect(() => {
        fetch(
            `https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-SateList-By-Country?countryId=${countriesId}`
        ).then((responce) => {
            responce.json().then((result) => {
                console.log("result", result)
                setSelectedSateList(result?.data?.stateList)
            })
        })
    }, [countriesId])

    const handleChangeState = (event) => {
        setStateId(event.target.value);
    };

    useEffect(() => {
        fetch(
            `https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CityList-By-Country-State?countryId=${countriesId}&stateId=${stateId}`
        ).then((responce) => {
            responce.json().then((result) => {
                // console.log("cityList", result.data.cityList)
                setSelectedCityList(result?.data.cityList || [])
            })
        })
    }, [countriesId, stateId]);

    const handleChangeCity = (event) => {
        setCityId(event.target.value);
    };

    return (
        <div className='container main mt-4'>
            <h1 className='main-title'>Supplier Details</h1>
            <form className='main-form mt-4'>
                <div className='row'>
                    <div className='col-md-6 col-sm-6'>
                        <label>Supplier Name</label>
                        <input type='text' value={props.supplierName} onChange={(e) => props.setSupplierName(e.target.value)} placeholder='Enter Supplier Name'></input>
                        <p>Max 50 charactors</p>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                        <label>Company Name</label>
                        <input type='text' placeholder='Enter Company Name'></input>
                        <p>Max 50 charactors</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-sm-6'>
                        <label>Country</label>
                        <select name="country" value={countriesId} onChange={handleChangeCountry}>
                            {selectedCountrieList?.map((country) => (
                                <option key={country.countryId} value={country.countryId}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                        <p>Numeric Value (USD)</p>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                        <label>State</label>
                        <select name="state" value={stateId} onChange={handleChangeState}>
                            {selectedSateList?.map((country) => (
                                <option key={country.stateId} value={country.stateId}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                        <p>Format: MM/DD/YYY</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-sm-6'>
                        <label>City</label>
                        <select name="city" value={cityId} onChange={handleChangeCity}>
                            {selectedCityList?.map((city) => (
                                <option key={city.cityId} value={city.cityId}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                        <p>Max 50 charactors</p>
                    </div>
                    <div className='col-md-6 col-sm-6'>
                        <label>Email Address</label>
                        <input type='text' value={props.email} onChange={(e) => props.setEmail(e.target.value)} placeholder='Enter email address'></input>
                        <p>valid email format</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-sm-6'>
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