'use client';

import { Content } from '../public/index'

export default function Components ({item}) {
    const Model = Content[item.model || 'none'];
    
    return (
        <Model />
    )
}