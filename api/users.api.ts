import { api } from "./axios";

import { User } from "@/interfaces/user.interface";
import { Playlist } from "@/interfaces/playlist.interface";

export const getUsers = async (): Promise<User[]> => {
    const res = await api.get(`/users`);
    return res.data;
};

export const getUserById = async (id: string): Promise<User> => {
    const res = await api.get(`/users/${id}`);
    return res.data;
};

export const getUserPlaylists = async (id: string): Promise<Playlist[]> => {
    const res = await api.get(`/users/${id}/playlists`);
    return res.data;
};