import React, { useEffect, useState, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import InfiniteScroll from 'react-infinite-scroll-component';
import { getFilter, getInit, getNoPage, getPagination } from '../services/challenge';
import AppContext from '../context/AppContext';

const TablePagination = () => {
    const [data, setData] = useState([]);
    const [after, setAfter] = useState('');
    const { dropValues } = useContext(AppContext);

    useEffect(() => {
        const getInvoices = async () => {
          if (!dropValues) {
            const recibed = await getNoPage();
            if (recibed) {
                setData(recibed);
            }
          } else {
            const filter = await getFilter();
          }
        }
        getInvoices();
      }, [dropValues]);

      console.log("dropdown values", dropValues);

    const handlePagination = () => {
        getPagination(data.length)
        .then((res)=> {
        setData(res);
        setAfter(res[19].after);
        })
    }

    console.log("drop values", dropValues);

  return (
    <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto', backgroundColor: '#F9FAFB' }} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>N°</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Razón social</TableCell>
            <TableCell align="right">Nit</TableCell>
            <TableCell align="right">Teléfono</TableCell>
            <TableCell align="right">Código</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {dropValues != null ?
            <TableRow
                key={dropValues.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="left">{1}</TableCell>
                <TableCell component="th" scope="row">
                {dropValues.nombre}
                </TableCell>
                <TableCell align="right">{dropValues.razonSocial}</TableCell>
                <TableCell align="right">{dropValues.nit}</TableCell>
                <TableCell align="right">{dropValues.telefono}</TableCell>
                <TableCell align="right">{dropValues.codigo}</TableCell>
            </TableRow>
            :
          data.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{index+1}</TableCell>
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.razonSocial}</TableCell>
              <TableCell align="right">{row.nit}</TableCell>
              <TableCell align="right">{row.telefono}</TableCell>
              <TableCell align="right">{row.codigo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <InfiniteScroll
        dataLength={data ? data.length + 20 :0}
        next={handlePagination}
        hasMore={true}
        />
    </TableContainer>
  )
}

export default TablePagination
