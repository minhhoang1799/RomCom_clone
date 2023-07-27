import React from 'react';
import Select from 'react-select';
 import { useFormikContext} from 'formik';
import PropTypes from 'prop-types';
import './BaseSelect.scss'


function BaseSelect(props) {
 const {defaultValue,isMulti,name,options,placeholder} = props;
 const {setFieldValue} = useFormikContext();
 const handleOnChange = (value) => {
   setFieldValue(name,value)
 }
 return (
  <>
    <Select defaultValue={[]} isMulti={isMulti} onChange={(value) => handleOnChange(value)} name={name} options={options} placeholder={placeholder}/>
  </>
 );
}

BaseSelect.propTypes = {
 defaultValue: PropTypes.array,
 isMulti: PropTypes.bool,
 name: PropTypes.string,
 options: PropTypes.array,
 placeholder: PropTypes.string
};
BaseSelect.defaultProps ={
 defaultValue:[],
 isMulti: false,
 name: '',
 options: [],
 placeholder: 'Select'
}

export default BaseSelect;