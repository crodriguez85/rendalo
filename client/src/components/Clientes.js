import React, {Fragment} from 'react'
import ClienteLista from './ClienteLista';

const Clientes = ({clientes}) => {
    return ( 
        <Fragment>
        <h1 className="text-center">
            Clientes
        </h1>
        <ul className="list-group mt-5">    
            {clientes.map(cliente => (
                <ClienteLista
                    cliente={cliente}
                    key={cliente._id}
                />
            ))}

        </ul>
        </Fragment>
     );
}
 
export default Clientes;