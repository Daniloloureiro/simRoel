'use client';
import {createContext,useState} from 'react';
import './header.css';
import Simulacao from './Simulacao';
import { useForm, FormProvider } from 'react-hook-form';
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
  /*Código de geeração de json*/
  const methods=useForm();
  const onSubmit=(data)=>{
    const jsonData=JSON.stringify(data,null,2);
    console.log(jsonData);
};
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
        <button className= "tablinks" onClick ={()=>changePage('simulacao')}>Simulation</button>
        <button className= "tablinks" onClick ={()=>changePage('rede')}>Networking</button>
        <button className= "tablinks" onClick ={()=>changePage('fisica')}>Physical</button>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
      {renderPage()}
      <div>
      <button className="Button" type="submit">Simulate</button>
      </div>
      </form>
      </FormProvider>
    </main>
  );
}

