import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {ChatEngine} from 'react-chat-engine';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const Chat = () => {

    const [loading, setLoading] = useState(true);

    const {uid,  photoURL, email} = useSelector(state => state.auth);

    useEffect(() => {
        axios.get('https://api.chatengine.io/users/me',{
            headers:{
                "project-id":"bcb32196-ff12-4ffa-8652-f33c53c14a6d",
                "user-name": email,
                "user-secret": uid,
            }
        })
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append('email', email);
            formdata.append('username', email);
            formdata.append('secret', uid);

            

             axios.post('https://api.chatengine.io/users/',
                    formdata,
                    {headers:{"private-key":"3f14f2ab-c538-4b06-887e-3d732949f07f"}}
                )
                .then(() => setLoading(false))
                .catch((error) => console.log(error))
    
        })
    },[])

    if(!uid || loading) return 'loading.....';

    return (
        <>
            <ChatEngine
            height="calc(100vh - 66px)"
            projectID="bcb32196-ff12-4ffa-8652-f33c53c14a6d"
            userName={email}
            userSecret={uid}
            />
        </>
    )
}