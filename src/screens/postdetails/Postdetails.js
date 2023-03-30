import React from 'react'
import { useLocation } from 'react-router-dom'
import './Postdetails.css'

function Postdetails() {

    const location = useLocation()
    const { state } = location
    console.log(state);


    return (
        <div className="card outer">
            <div>
            <h5 className="card-header">{state.title}</h5>
            <div className="card-body">{state.body}</div>
        </div>
        <div className='float-end'>
        <button type="button" className="btn btn-info">Edit</button>
        </div>
        <div className='float-end'>
        <button type="button" className="btn btn-info">Delete</button>
        </div>
        </div>

    )
}

export default Postdetails