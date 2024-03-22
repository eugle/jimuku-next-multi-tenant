'use client';

import {Content} from '../public'

export default function Item ({item}) {
    const Model = Content[item.model || 'none'];
    const data = {}

    return (
       <Model data={data}/>
    )
}