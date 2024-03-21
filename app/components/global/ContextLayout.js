'use client'

import {useEffect} from 'react'
import {useDispatchGlobalContext} from './Context'

export default function ContextLayout({children, bootstrap}) {
    const dispatch = useDispatchGlobalContext();

    const handleIncrease = BOOTSTRAP => {
        dispatch({
            type: 'Created Global Context',
            content: BOOTSTRAP
        })
    }

    useEffect(() => {
        if (bootstrap) {
            const BOOTSTRAP = JSON.parse(JSON.stringify(bootstrap));
            handleIncrease(BOOTSTRAP);
        }
    }, [bootstrap])

    return (
        <>
            {children}
        </>
    )
}