import React from 'react'
import { User } from '../models/user.class'
import PropTypes from 'prop-types'

const UserComponent = ({ user, conectado, deleted }) => {



    function userConected() {

        if (user.conectado) {
            return <p style={{ color: 'green' }}>Conectado</p>
        } else {
            return <p style={{ color: 'red' }}>Desconectado</p>
        }
    }



    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2' >{user.name}</span>
            </th>
            <td className='align-middle'>
                <span>{user.profesion}</span>
            </td>
            <td className='align-middle'>

            </td>
            <td className='align-middle'>
              <button onClick={()=>conectado(user)} >estado</button>  {userConected()}
            </td>
           <button onClick={()=>deleted(user)}>DELETE</button>

        </tr>
    )
}




UserComponent.propTypes = {   //class
    user: PropTypes.instanceOf(User).isRequired,  // prop task === class Task  
    conectado: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired
}
export default UserComponent
