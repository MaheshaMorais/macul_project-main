import React, { useState } from 'react';
import CommandButton from './components/CommandButton';
import MainTopic from './components/MainTopic';
import './Editaddress.css';

const EditAddress = () => {
  const [fullName, setFullName] = useState('Enter Name');
  const [mobileNumber, setMobileNumber] = useState('Enter Tel-No');
  const [province, setProvince] = useState('Select a province');
  const [city, setCity] = useState('Select a city');
  const [address, setAddress] = useState('Add address');
  const [code, setcode] = useState('Add Postal code');

  const handleFormChange = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <div className='Editaddressformcontainer'>
        <hr className='customerhr'/>
        <div>
        <MainTopic title="Edit Address" />
        </div>
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <br/>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(event) => handleFormChange(event, setFullName)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <br/>
        <input
          type="tel"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(event) => handleFormChange(event, setMobileNumber)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="province">Province:</label>
        <br/>
        <select
          id="province"
          value={province}
          onChange={(event) => handleFormChange(event, setProvince)}
        >
          <option disabled value="Select a province">
            Select a province
            <br/>
          </option>
          <option value="AB">Northern</option>
          <option value="BC">North Western</option>
          <option value="MB">Western</option>
          <option value="NB">North Central</option>
          <option value="NL">Central</option>
          <option value="NS">Sabaragamuwa</option>
          <option value="NT">Eastern</option>
          <option value="NU">Uva</option>
          <option value="ON">Southern</option>
          
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="city">City:</label>
        <br/>
        <select
          id="District"
          value={city}
          onChange={(event) => handleFormChange(event, setCity)}
        >
          <option disabled value="Select a city">
            Select a District
          </option>
          <option value="Calgary">Anuradhapura</option>
          <option value="Edmonton">Polonnaruwa</option>
          <option value="Vancouver">Matale</option>
          <option value="Toronto">Kandy</option>
          <option value="Montreal">Nuwara Eliya</option>
          <option value="Calgary">Kegalle</option>
          <option value="Edmonton">Ratnapura</option>
          <option value="Vancouver">Jaffna</option>
          <option value="Toronto">Kilinochchi</option>
          <option value="Montreal">Mannar</option>
          <option value="Calgary">Mullaitivu	</option>
          <option value="Edmonton">Vavuniya</option>
          <option value="Vancouver">Puttalam</option>
          <option value="Toronto">Kurunegala</option>
          <option value="Montreal">Gampaha</option>
          <option value="Calgary">Colombo</option>
          <option value="Edmonton">Kalutara</option>
          <option value="Vancouver">Trincomalee</option>
          <option value="Toronto">Batticaloa</option>
          <option value="Montreal">Ampara</option>
          <option value="Calgary">Badulla</option>
          <option value="Edmonton">Monaragala</option>
          <option value="Vancouver">Hambantota</option>
          <option value="Toronto">Matara</option>
          <option value="Toronto">Galle</option>
          
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="code">Postal Code:</label>
        <br/>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(event) => handleFormChange(event,setcode)}></input> 
           </div>


      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <br/>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(event) => handleFormChange(event,setAddress)}></input> 
           </div>
           
           </div>
           <div>
           <CommandButton text="Submit" className="custom-button" />
           </div>
           </div>
           )
        }

        export default EditAddress;