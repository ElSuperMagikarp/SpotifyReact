import { api } from "./axios";

import { CreatePlaylistDTO, Playlist } from "@/interfaces/playlist.interface";
import { Song } from "@/interfaces/song.interface";

export const createPlaylist = async (
    data: CreatePlaylistDTO
): Promise<Playlist> => {
    const res = await api.post(`/playlists`, data);
    return res.data;
};

export const postPlaylists = async (): Promise<Playlist[]> => {
    const res = await api.post(`/playlists`);
    return res.data;
};

export const getPlaylists = async (): Promise<Playlist[]> => {
    const res = await api.get(`/playlists`);
    return res.data;
};

export const getPlaylistById = async (id: string): Promise<Playlist> => {
    const res = await api.get(`/playlists/${id}`);
    return res.data;
};

export const deletePlaylist = async (id: string): Promise<number> => {
    const res = await api.delete(`/playlists/${id}`);
    return res.status;
};

export const getPlaylistSongs = async (id: string): Promise<Song[]> => {
    const res = await api.get(`/playlists/${id}/songs`);
    return res.data;
};