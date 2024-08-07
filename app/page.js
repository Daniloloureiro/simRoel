'use client';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link,useNavigate } from 'react-router-dom';
import './header.css';
import Simulation from './Simulation';
import Networking from './Networking';
import Physical from './Physical';
import { useForm, FormProvider } from 'react-hook-form';
import Result from './Result';

//Pagina inicial com parametros
 function Home() {
  const navigate=useNavigate(); //Navegar entre paginas
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
  /*Código de geração de json e mudança para pagian de resultados*/
    const methods=useForm();
    const onSubmit=(data)=>{
      const jsonData=JSON.stringify(data,null,2);
      console.log(jsonData);
      navigate('/result');
  };
  return (
    <main >
      <div className="title">
        <h1>SimRoel Web</h1>
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

//Função principal
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/"></Link>
          <Link to="/result"></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}