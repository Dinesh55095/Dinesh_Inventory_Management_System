import { React, useState } from 'react';
import './header.css';

function Header(props) {

  return (
    <header>
      <nav className='navbar'>
        <div className='nav-left'>
          <img src="" style={{ width: "40px" }} />
          <span className='nav-heading'>Inventory Management System</span>
        </div>
        <div className='nav-right'>
          <span>Home</span>
        </div>
      </nav>

      <div className='checkbox-wrapper mt-4'>
        <input type='checkbox' checked={props.item} onChange={(e) => props.setItem(e.target.checked)} />
        <label className='label-left'>Item</label>
        <input type='checkbox' checked={props.supplier} onChange={(e) => props.setSupplier(e.target.checked)} />
        <label className='label-right'>Supplier</label>
      </div>
    </header>

  )
}

export default Header