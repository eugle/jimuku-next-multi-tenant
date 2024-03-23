'use client'

export default function Error({error}){

    return (
        <div className='text-sm flex justify-center p-4'>
            {error.message}
        </div>
    )
}