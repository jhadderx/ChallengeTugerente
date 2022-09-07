import React from 'react'
import Dropdown from '../components/Dropdown'
import Headder from '../components/Headder'
import TablePagination from '../components/TablePagination'

const Home = () => {
  return (
    <div>
      <Headder />
      <Dropdown />
      <TablePagination />
    </div>
  )
}

export default Home