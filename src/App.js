import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Daftar from './component/Daftar';

class App extends Component {
  constructor(){
    super();
    this.state = {text:'', TeamName:[], linkapi:"https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t="};
  }
UbahNama(){
``
this.setState({text: this.refs.namatim.value});
}
CariTeam(){
var NamaTeam= `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${this.state.text}`;
this.setState({linkapi: NamaTeam})
axios.get(this.state.linkapi).then((ambilData)=>{
  this.setState({
    TeamName: ambilData.data.player

  });

});

}

  render() {
    const data = this.state.TeamName.map((item, index)=>{
      var keys = [index]
      var playername = [item.strPlayer]
      var playerposition = [item.strPosition]
      var playerpic = [item.strThumb]
      var playerdesc = [item.strDescriptionEN]
    return (
      <Daftar key={index} nama={playername} posisi={playerposition} pic={playerpic} desc={playerdesc} />
    // <div key={index} className='cols-sm-8 cols-offset-2'>
    // <p>{playername}({playerposition})</p>
    // <div className='cols-sm-4'>
    //   <img className='playerimg'src={`${playerpic}`}/>
    // </div>
    // </div>
    );
    })
    console.log(this.state.text)
    console.log(this.state.linkapi)
    console.log(this.state.TeamName)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Nama Tim {this.state.text}</h1>
          <input type="text" ref="namatim" onInput={()=>{this.UbahNama();}}/>
          <button onClick={()=>{this.CariTeam()}}>Submit</button> Click Twice!   
        </header>
        {/* {this.state.TeamName.player} */}
        <div className='container-fluid'>
          <div className="row">
          {data}
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
