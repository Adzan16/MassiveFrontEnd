import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function SetNav({ children }) {
    const location = useLocation();

    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        if (location.pathname === '/Login' || location.pathname === '/Register') {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    }, [location])

    return (
        <div>{showNav && children}</div>
    )
}
