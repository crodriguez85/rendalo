import React from 'react'

const ClienteLista = ({cliente}) => {
    return ( 
        <div className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                {cliente.nombre} {' '}
                <span className="font-weight-bold">-</span>{' '}
                {cliente.email} {' '}
                <span className="font-weight-bold">-</span>{' '}
                {cliente.telefono} {' '}
                <span className="font-weight-bold">- Creado</span>{' '}
                {cliente.createdAt} {' '}
            </p>
        </div>
     );
}
 
export default ClienteLista;