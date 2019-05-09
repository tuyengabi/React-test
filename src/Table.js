import React, { Component } from 'react'
import TableHeader from './TableHeader.js'
import TableBody from './TableBody.js'

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}

export default Table
