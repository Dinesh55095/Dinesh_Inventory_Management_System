import { React, useState } from 'react';
import './App.css';
import Header from './Components/header';
import ItemDetails from './Components/ItemDetails';
import SupplierDetails from './Components/SupplierDetails';
import SubmittedData from './Components/SubmittedData';
import GetDataTable from './Components/getDataTable';


function App() {
  const [item, setItem] = useState(true);
  const [supplier, setSupplier] = useState(false);
  const [itemName, setInemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [dateSubmit, setDateSubmit] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [email, setEmail] = useState("");
  const [cityName, setCityName] = useState("");


  return (
    <div className="App">
      <Header
        item={item}
        setItem={setItem}
        supplier={supplier}
        setSupplier={setSupplier}
      />
      {item &&
        <ItemDetails
          itemName={itemName}
          setInemName={setInemName}
          quantity={quantity}
          setQuantity={setQuantity}
          unitPrice={unitPrice}
          setUnitPrice={setUnitPrice}
          dateSubmit={dateSubmit}
          setDateSubmit={setDateSubmit}
        />}
      {supplier &&
        <SupplierDetails
          supplierName={supplierName}
          setSupplierName={setSupplierName}
          email={email}
          setEmail={setEmail}
          cityName={cityName}
          setCityName={setCityName}
        />
      }
      <SubmittedData />
      <GetDataTable
        itemName={itemName}
        setInemName={setInemName}
        quantity={quantity}
        setQuantity={setQuantity}
        unitPrice={unitPrice}
        setUnitPrice={setUnitPrice}
        dateSubmit={dateSubmit}
        setDateSubmit={setDateSubmit}
        supplierName={supplierName}
        setSupplierName={setSupplierName}
        email={email}
        setEmail={setEmail}
        cityName={cityName}
        setCityName={setCityName}
      />
    </div>
  );
}

export default App;
