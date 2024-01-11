import React, { useState } from 'react';
const EMAILPATTERN =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+[.][a-zA-Z]+([.][a-zA-Z]+)*$/

const Form = () => {
  const initialErrors = {
    pickupEmailId: [],
    pickupPhoneNo: [],
    dropEmailId: [],
    dropPhoneNo: [],
    // Add more input fields as needed
  };

  const [inputValues, setInputValues] = useState({
    pickupEmailId : '',
    pickupPhoneNo : '',
    dropEmailId : '',
    dropPhoneNo : ''
    // Initialize other input fields
  });

  const [errors, setErrors] = useState(initialErrors);

  const validateInput = (fieldName, value) => {
    const newErrors = { ...errors };
    newErrors[fieldName] = [];

    if (value.trim() === '') {
      newErrors[fieldName].push('Input cannot be empty');
    }

    if (fieldName === 'phoneNo' && value.length > 10) {
      newErrors[fieldName].push('Input length cannot exceed 10 characters');
    }

    if(fieldName === 'pickupEmailId'){
        if(value.length >15){
            newErrors[fieldName].push('Input length cannot exceed 15 characters'); 
        }
        if(!EMAILPATTERN.test(value)){
            newErrors[fieldName].push('Please enter correct emailID');
        }
    }

    // Add more validation checks as needed

    setErrors(newErrors);
  };

  const handleInputChange = (fieldName, value) => {
    const newInputValues = { ...inputValues, [fieldName]: value };
    console.log("newInputValues",newInputValues)
    setInputValues(newInputValues);
    validateInput(fieldName, value);
  };

  return (
    <div>
      <label>
        EmailID:
        <input
          type="text"
          value={inputValues.pickupEmailId}
          onChange={(e) => handleInputChange('pickupEmailId', e.target.value)}
        />
        {errors?.pickupEmailId?.length > 0 && (
          <div style={{ color: 'red' }}>
              <div >{errors.pickupEmailId[0]}</div>
          </div>
        )}
      </label>

      <label>
        Phone Number:
        <input
          type="text"
          value={inputValues.pickupPhoneNo}
          onChange={(e) => handleInputChange('pickupPhoneNo', e.target.value)}
        />
        {errors?.pickupPhoneNo.length > 0 && (
          <div style={{ color: 'red' }}>
            {errors.pickupPhoneNo.map((error, index) => (
              <div key={index}>{error}</div>
              ))}
          </div>
        )}
      </label>
      <label>
        Drop EmailID:
        <input
          type="text"
          value={inputValues.dropEmailId}
          onChange={(e) => handleInputChange('dropEmailId', e.target.value)}
        />
        {errors.dropEmailId.length > 0 && (
          <div style={{ color: 'red' }}>
            {errors.dropEmailId.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
      </label>

      <label>
        Drop Phone Number:
        <input
          type="text"
          value={inputValues.dropPhoneNo}
          onChange={(e) => handleInputChange('dropPhoneNo', e.target.value)}
        />
        {errors.dropPhoneNo.length > 0 && (
          <div style={{ color: 'red' }}>
            {errors.dropPhoneNo.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
      </label>

      {/* Add more input fields as needed */}
    </div>
  );
};

export default Form;
