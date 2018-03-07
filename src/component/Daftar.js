import React, { Component } from 'react';
import './Daftar.css';


class Daftar extends Component {
  render() {
      
    return (
        <table>
        <tr><th id='header' colspan="2">{this.props.nama}({this.props.posisi})</th></tr>
        <tr><td><img className='playerimg'src={`${this.props.pic}`}/></td><td>{this.props.desc}</td></tr>
        </table>
        // <div className='cols-sm-8 cols-offset-2'>
        // <p>{this.props.nama}({this.props.posisi})</p>
        // <div className="row">
        // <div className='cols-sm-4'>
        //   <img className='playerimg'src={`${this.props.pic}`}/>   
        // </div>
        // <div className='cols-sm-4'>
        // {this.props.desc}   
        // </div>
        // </div>
        
        // </div>
    );
  }
}

export default Daftar;