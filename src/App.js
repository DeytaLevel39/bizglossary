import React from 'react';
import datatable from './data.json';
import logo from './deytalyticslogo.png';
import { MDBContainer, MDBRow, MDBDataTableV5 } from 'mdbreact';

export default function TopSearch() {
  return <div><MDBContainer><MDBRow><p></p></MDBRow><MDBRow><h5>&nbsp;<img src={logo}></img>  Glossary</h5></MDBRow><MDBRow><MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} searchTop searchBottom={false} /></MDBRow></MDBContainer></div>;
}
