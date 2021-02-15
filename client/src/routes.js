import React from 'react'

import { BrowserRouter, Switch, Route} from 'react-router-dom'

//IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard'

import Pacientes from './pages/admin/pacientes'
import PacientesEditar from './pages/admin/pacientes/pacientes.editar'
import PacientesCadastrar from './pages/admin/pacientes/pacientes.cadastrar'

import Usuarios from './pages/admin/usuarios'
import UsuariosEditar from './pages/admin/usuarios/usuarios.editar'
import UsuariosCadastrar from './pages/admin/usuarios/usuarios.cadastrar'

//IMPORTS CLIENT
import Home from './pages/client/home'
import PacientesDatails from './pages/client/pacientes/pacientes.datails'

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                {/* Rota Cliente */}
                <Route path="/" exact component={Home} />
                <Route path="/pacientes/:idPaciente" exact component={PacientesDatails} />

                {/* Rota Admin */}
                <Route path="/admin" exact component={Dashboard} />
                <Route path="/admin/pacientes" exact component={Pacientes} />
                <Route path="/admin/pacientes/cadastrar" exact component={PacientesCadastrar} />
                <Route path="/admin/pacientes/editar/:idPaciente" exact component={PacientesEditar} />
      
                <Route path="/admin" exact component={Dashboard} />
                <Route path="/admin/usuario" exact component={Usuarios} />
                <Route path="/admin/usuario/cadastrar" exact component={UsuariosCadastrar} />
                <Route path="/admin/usuario/editar/:idUsuario" exact component={UsuariosEditar} />
            </Switch>
        </BrowserRouter>
    )
}