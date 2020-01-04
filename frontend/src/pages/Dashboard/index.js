import React, {useEffect, useState} from 'react'
import apt from '../../service/api'
import { Link } from 'react-router-dom';

import './style.css'

export default function Dashboard() {

    const [spots, setSpots]= useState([])

    useEffect(() => {
        async function loadSpots(){
            const user_id = localStorage.getItem('user')
            const response = await apt.get('/dashboard', {
                headers: { user_id }
            })
            setSpots(response.data)
        }
        loadSpots()
    }, [])
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}/>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `RS${spot.price}/dia` : 'Gratuito'}</span>
                    </li>
                ))}
            </ul>
        <Link to="/new">
        <button className="btn">Cadastrar novo Spot</button>
        </Link>
    </>
)
}