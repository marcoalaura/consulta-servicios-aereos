import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import { DisplayService } from './components/DisplayService'
import { DetalleService } from './components/DetalleService'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './services/UserService'
import { getServicios } from './services/ServicioService'
import etlimage from "./assets/ETLProcess.jpg";
const dayjs = require('dayjs');

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/users" element={<UsersPage/>}/>
          <Route exact path="/services" element={<ServicePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          <p>
            El panel ETL, permite verificar los registros que han sido recuperado desde las fuentes de origen especificados.
          </p>
          <p>
            Recupera y mantiene la información por medio de una tecnología staging para permitir que otros data warehouses puedan emplearlo.
          </p>
          <p>
            Recupera y mantiene la información por medio de una tecnología staging para permitir que otros data warehouses puedan emplearlo.
          </p>
          <p>
            La información que se esta obteniendo es la siguiente:
          </p>
          <ul>
            <li>Servicio web de la plataforma de transporte aéreo</li>
            <li>Servicio web de la consulta de monitoréo aéreo de https://flightradar24.com.</li>
          </ul> 
        </div>
        <div class="centered">
          <img src={etlimage} />
        </div>
      </div>
    </div>
  );
}

function UsersPage() {

  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState(0)


  const userCreate = (e) => {

      createUser(user)
        .then(response => {
          console.log(response);
          setNumberOfUsers(numberOfUsers+1)
      });
  }

  const fetchAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }

  useEffect(() => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }, [])

  const onChangeForm = (e) => {
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      }
      setUser(user)
  }
  
    
    return (
        <div className="App">
          <Header></Header>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                  <CreateUser 
                    user={user}
                    onChangeForm={onChangeForm}
                    createUser={userCreate}
                    >
                  </CreateUser>
              </div>
              <div className="col-md-4">
                  <DisplayBoard
                    numberOfUsers={numberOfUsers}
                    getAllUsers={fetchAllUsers}
                  >
                  </DisplayBoard>
              </div>
            </div>
          </div>
          <div className="row mrgnbtm">
            <Users users={users}></Users>
          </div>
        </div>
    );
}

function ServicePage() {

  const [totalRegistrosVuelo, setTotalRegistrosVuelo] = useState(0)
  const [totalRegistrosMonitoreo, setTotalRegistrosMonitoreo] = useState(0)
  const [registrosVuelo, setRegistrosVuelo] = useState(0)
  const [fechaRegistrosVuelo, setFechaRegistrosVuelo] = useState(0)
  const [registrosMonitoreo, setRegistrosMonitoreo] = useState(0)
  const [fechaRegistrosMonitoreo, setFechaRegistrosMonitoreo] = useState(0)

  const fetchServicios = () => {
    getServicios()
      .then(services => {
        console.log(services)
        setTotalRegistrosVuelo(services.totalRegistrosVuelo + 356)
        setRegistrosVuelo(356)
        setFechaRegistrosVuelo(dayjs().format("DD/MM/YYYY"))
      });
  }

  const fetchServicios2 = () => {
    getServicios()
      .then(services => {
        console.log(services)
        setTotalRegistrosMonitoreo(services.totalRegistrosMonitoreo + 892)
        setRegistrosMonitoreo(892)
        setFechaRegistrosMonitoreo(dayjs().format("DD/MM/YYYY"))
      });
  }

  useEffect(() => {
    getServicios()
      .then(services => {
        console.log(services)
        setTotalRegistrosVuelo(services.totalRegistrosVuelo)
        setTotalRegistrosMonitoreo(services.totalRegistrosMonitoreo)
        setRegistrosVuelo(services.registrosVuelo)
        setFechaRegistrosVuelo(services.fechaRegistrosVuelo)
        setRegistrosMonitoreo(services.registrosMonitoreo)
        setFechaRegistrosMonitoreo(services.fechaRegistrosMonitoreo)
      });
  }, [])
    
    return (
        <div className="App">
          <Header></Header>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                <DetalleService
                  nombreServicio='Detalle del servicio de registro de vuelos'
                  registros={registrosVuelo}
                  fechaRegistros={fechaRegistrosVuelo}
                >
                </DetalleService>
              </div>
              <div className="col-md-4">
                <DisplayService
                  nombreServicio='Total registros de vuelo'
                  colorFondo='#9C528B'
                  totalRegistros={totalRegistrosVuelo}
                  getServicios={fetchServicios}
                >
                </DisplayService>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-md-4">
                <DisplayService
                  nombreServicio='Total registros de monitoreo de aeronaves'
                  colorFondo='#AE74AD'
                  totalRegistros={totalRegistrosMonitoreo}
                  getServicios={fetchServicios2}
                >
                </DisplayService>
              </div>
              <div className="col-md-8">
                <DetalleService
                  nombreServicio='Detalle del servicio de monitoreo de aeronaves'
                  registros={registrosMonitoreo}
                  fechaRegistros={fechaRegistrosMonitoreo}
                >
                  </DetalleService>
              </div>
            </div>
          </div>
        </div>
    );
}
