import React, { useState } from 'react'
import { User } from '../models/user.class'
import FormUser from './formUser'
import UserComponent from './user'


const ListContact = () => {

  const user1 = new User('pepe', 'developer', true)
  const user2 = new User('juan', 'designer', false)
  const user3 = new User('maria', 'developer', true)

const [users, setUsers] = useState([user1, user2, user3]);


function addUser (newTask) {
const temp = [...users]
temp.push(newTask)
setUsers(temp)
}
function deleteUser (user) {
const index = users.indexOf(user)
const temp = [...users]
temp.splice(index,1)

setUsers(temp)
}

function setConect (user) {
  const index = users.indexOf(user)
const temp = [...users]
temp[index].conectado =!temp[index].conectado 
setUsers(temp)
}
  return (
    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }} >
<table>
  <thead>
    <tr>
      <th>Usuario</th>
      <th>Profesion</th>
      <th>Estado</th>

    </tr>
  </thead>
  <tbody>
{
  users.map((user, index)=>{
    return (

<UserComponent
key={index}
user={user}
deleted={deleteUser}
conectado={setConect}

>


</UserComponent>
    )
  })
}
  </tbody>
</table>

<FormUser
add={addUser}
></FormUser>
</div>
  )
}


export default ListContact
