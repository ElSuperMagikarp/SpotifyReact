import { useEffect, useState } from "react";

import { User } from "@/interfaces/user.interface";

import { getUsers } from "@/api/users.api";

export const useUsers = () => {
    const [users, setUsers] = useState<User[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getUsers().then(setUsers).catch(() => setError("User Error"));
    }, []);

    return { users, error };
};