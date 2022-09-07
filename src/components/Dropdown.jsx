import React, {useEffect, useState, useContext} from 'react';
import { getInit } from '../services/challenge';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AppContext from '../context/AppContext';
import Popup from './Popup';

const Dropdown = () => {

  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const [inputValue, setInputValue] = useState('');
  const { setDropValues } = useContext(AppContext);
  const popUp = 'Ingresar elemento';

  useEffect(() => {
    const getInvoices = async () => {
      const recibed = await getInit();
      if (recibed) {
        if (recibed.nombre != popUp) {
          recibed.unshift({ nombre: popUp });
          setData(recibed);
        } 
      }
    }
    getInvoices();
  }, []);

  return (
    <div style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
      <Autocomplete
        value={value ? value : null}
        onChange={(event, newValue) => {
          if (newValue.nombre == popUp) {
            setOpen(true);
          } else {
            setValue(newValue);
            setDropValues(newValue);
          }
        }}
        inputValue={inputValue == popUp ? '' : inputValue }
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          if (newInputValue == '' && inputValue != popUp) {
              setDropValues(null)
          } 
        }}
        getOptionLabel={(option)=>option.nombre ? option.nombre : option}
        options={data}        
        freeSolo
        renderInput={(params) => <TextField {...params} label="Buscar" />}
      />
      <Popup open={open} setOpen={setOpen} />
    </div> 
  )
}

export default Dropdown