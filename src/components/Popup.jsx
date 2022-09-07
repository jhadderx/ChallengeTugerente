import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Backdrop, FormControl } from '@mui/material';
import { insertNew } from '../services/challenge';

import CheckIcon from '@mui/icons-material/Check';
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  backgroundColor: '#F9FAFB'
};

const Popup = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);
    const [nombre, setNombre] = useState('Juan Perez Crespo');
    const [load, setLoad] = useState(false);
    const [razonSocial, setRazonSocial] = useState('JuanitoCompany');
    const [nit, setNit] = useState(3655844);
    const [telefono, setTelefono] = useState('(591) 65887745');
    const [codigo, setCodigo] = useState(55448);
    const { setDropValues } = useContext(AppContext);

    const handleNombre = (event) => {
        setNombre(event.target.value);
    };

    const handleRazonSocial = (event) => {
        setRazonSocial(event.target.value);
    };

    const handleNit = (event) => {
        setNit(event.target.value);
    };

    const handleTelefono = (event) => {
        setTelefono(event.target.value);
    };

    const handleCodigo = (event) => {
        setCodigo(event.target.value);
    };

    const handleButton = () => {
        setLoad(true);
        handleClose();
        const values = {
            nombre: nombre,
            razonSocial: razonSocial,
            nit: nit,
            telefono: telefono,
            codigo: codigo
        }
        insertNew(values)
        .then((res) => {
            console.log("res", res);
            setDropValues(null);
            setLoad(false);
        })
    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <TextField id="outlined-basic" label="Nombre" value={nombre} onChange={handleNombre} variant="outlined" size='small' />
                </FormControl>
                <FormControl sx={{ m: 1, width: '46%' }} variant="outlined">
                    <TextField id="outlined-basic" label="Razón social" value={razonSocial} onChange={handleRazonSocial} variant="outlined" size='small' />
                </FormControl>
                <FormControl sx={{ m: 1, width: '46%' }} variant="outlined">
                    <TextField id="outlined-basic" label="Nit" value={nit} onChange={handleNit} variant="outlined" size='small' />
                </FormControl>
                <FormControl sx={{ m: 1, width: '46%' }} variant="outlined">
                    <TextField id="outlined-basic" label="Teléfono" value={telefono} onChange={handleTelefono} variant="outlined" size='small' />
                </FormControl>
                <FormControl sx={{ m: 1, width: '46%' }} variant="outlined">
                    <TextField id="outlined-basic" label="Código" value={codigo} onChange={handleCodigo} variant="outlined" size='small' />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                    <Button sx={{ backgroundColor: '#e53535', '&:hover': { backgroundColor: '#e53535'}}} onClick={handleButton} variant="contained">Ingresar</Button>
                </FormControl>
            </Box>
        </Box>
      </Modal>
      <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent' }}>
            <Box sx={{ m: 1, position: 'relative' }}>
                <Backdrop
                    sx={{ color: '#e53535', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={load}
                    /* onClick={handleClose} */
                >
                    {!load ? <CheckIcon sx={{ bgcolor: "#e53535", color: '#fff', borderRadius: '50%', width: '60px', height: '60px' }} /> : <Typography sx={{ color: '#fff', zIndex: 1, fontSize: '12px' }} >Cargando</Typography>}
                    {load &&
                    <CircularProgress sx={{ position: 'absolute', color: '#e53535' }} size={60} color="primary" />
                    }
                </Backdrop>
            </Box>
        </Box>
    </div>
  )
}

export default Popup