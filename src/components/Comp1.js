import React, { useContext } from 'react'
import { FormControl } from 'react-bootstrap'
import AuthContext from '../context/authContext'
import MsgContext from '../context/msgContext'

function Comp1() {
    const { data, setData } = useContext(MsgContext)
    const { authData } = useContext(AuthContext)
    return (
        <>
            <h2>{authData.name}</h2>
            <FormControl value={data} onChange={(e) => setData(e.target.value)} />
        </>
    )
}

export default Comp1