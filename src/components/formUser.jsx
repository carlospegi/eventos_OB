import React from 'react'
import { useRef } from 'react'
import { User } from '../models/user.class'
import PropTypes from 'prop-types'
const FormUser = ({add}) => {

    const nameRef = useRef('')
    const profesionRef = useRef('')

    function addUser (e) {
        e.preventDefault()
  const newUser = new User(
    nameRef.current.value,
    profesionRef.current.value,
    false
  )
add(newUser)
    }

  return (
    <form onSubmit={addUser}>
     <input ref={nameRef} type='text' placeholder='nombre'></input> 
     <input ref={profesionRef} type='text' placeholder='profesion'></input> 
     <button type='submit'>ADD</button>
    </form>
  )
}
FormUser.protoTypes = {
    add: PropTypes.func.isRequired
  }
export default FormUser
