import React, { useEffect, useState } from 'react';

const useGetUsers = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        getAllUser()
    }, [])

    const getAllUser = async () => {
        try {
            setLoading(true)
            const res = await fetch(`http://localhost:5000/users`)
            const data = await res.json()
            if (data) setUsers(data);
        }
        catch (error) {

        }
        finally {
            setLoading(false)
        }

    }

    return { users, isLoading }
};

export default useGetUsers;