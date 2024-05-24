'use client';
import {useState} from 'react';
import './header.css';
import Simulacao from './Simulacao';
import Rede from './Rede';
import Fisica from './Fisica';

export default function Home() {
  /*Código para qual página de parâmetro reinderizar*/ 
  const [currentPage, setCurrentPage]=useState('simulacao')
  const changePage=(page)=>{
    setCurrentPage(page)
  }
  const renderPage=()=>{
    if(currentPage==='simulacao')
      return <Simulacao />
    else if(currentPage==='rede')
      return <Rede />
    else
      return <Fisica />
  }
  /*Código da parte fixa da página*/
  return (
    <main >
      <div className="title">
        <h1>simRoel web</h1>
      </div>
      <div className="parametros">
        <h3>Parameters</h3>
      </div>
      <div className="tab">
      <div className="grid grid-cols-3 gap-4">
        <button className= "tablinks" onClick ={()=>changePage('simulacao')}>Simulation</button>
        <button className= "tablinks" onClick ={()=>changePage('rede')}>Networking</button>
        <button className= "tablinks" onClick ={()=>changePage('fisica')}>Physical</button>
      </div>
      </div>
      {renderPage()}
    </main>
  );
}
