'use client';
import {useState} from 'react';
import './header.css';
import Simulation from './Simulation';
import { useForm, FormProvider } from 'react-hook-form';
import Networking from './Networking';
import Physical from './Physical';

export default function Home() {
  /*Código para qual página de parâmetro reinderizar*/ 
  const [currentPage, setCurrentPage]=useState('simulation')
  const changePage=(page)=>{
    setCurrentPage(page)
  }
  const renderPage=()=>{
    if(currentPage==='simulation')
      return <Simulation />
    else if(currentPage==='networking')
      return <Networking />
    else
      return <Physical />
  }
  /*Código de geração de json*/
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
      <div className="parameters">
        <h3>Parameters</h3>
      </div>
      <div className="tab">
        <button className= "tablinks" onClick ={()=>changePage('simulation')}>Simulation</button>
        <button className= "tablinks" onClick ={()=>changePage('networking')}>Networking</button>
        <button className= "tablinks" onClick ={()=>changePage('physical')}>Physical</button>
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

