import React from 'react';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';

export const AllPicture = () => {

    const getData = async () => {
        const url = ''
        const response = await fetch(url)
        const {data} = await response.json
    }

    useEffect(() => {
       getData()
    }, [getData]);

    return (
        <div>
            <Card>
                <div className=''>
                    <h1>title</h1>
                </div>
                <img src="" alt="" />
                <p>description</p>
                <span>fecha: </span>
            </Card>
        </div>
    )
}
