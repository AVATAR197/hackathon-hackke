import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        //fetch the user data using this id
    }, [id]);

    return <div>User id: {id}</div>;
};

export default UserDetails;
