import React, {useState} from 'react';
import Error from './Error';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

const AgregarCliente = ({history, setRecarga}) => {

    const [nombre, setNombre ] = useState('');
    const [email, setEmail ] = useState('');
    const [telefono, setTelefono ] = useState('');
    const [error, setError ] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        if(nombre === '' || email === '' || telefono === ''){
            setError(true);
            return;
        }
        setError(false);

        try {
            const resultado = await axios.post('http://localhost:8000/api/registro/add',{
                nombre,
                email,
                telefono
            })
            console.log(resultado)
        } catch(error) {
            console.log(error)
        }
        // Recargar Pagina de Clientes
        setRecarga(true);
        // Redirecciono a Pagina Principal
        history.push('/')

    }


    return ( 
        <div className="col-md-8 mx-auto ">
        <h1 className="text-center">Agregar Nuevo Cliente</h1>
        {(error) ? <Error mensaje="Todos los Campos son Obligatorios"/>: null}

        <form
            onSubmit={handleSubmit}
            className="mt-5"
        >
            <div className="form-group">
                <label>Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="nombre" 
                    placeholder="Nombre Cliente"
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Email Cliente</label>
                <input 
                    type="email" 
                    className="form-control" 
                    name="email"
                    placeholder="Email Cliente"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Teléfono Cliente</label>
                <input 
                    type="number" 
                    className="form-control" 
                    name="telefono"
                    placeholder="Teléfono Cliente"
                    onChange={e => setTelefono(e.target.value)}
                />
            </div>

            <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Cliente" />
        </form>
    </div>
     );
}
 
export default withRouter(AgregarCliente);