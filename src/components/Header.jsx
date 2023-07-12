import React from 'react'

function Header() {
    return (
        <div className="col-4 header">
            <div className=''>
            <img className="hms" src="/assets/hostel1-removebg-preview.png" alt="HMS Logo" /><span style={{color: 'white', fontSize: '36px', fontWeight: 'bold'}}>Hostel</span>
            </div>
            {/* <img className="pec ml-auto" src="/assets/pec_seal.png" alt="PEC Logo" /> */}
        </div>
    )
}

export default Header;
