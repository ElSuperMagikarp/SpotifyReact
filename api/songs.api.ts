import { api } from "./axios";

import { Song } from "@/interfaces/song.interface";

export const getSongs = async (): Promise<Song[]> => {
    const res = await api.get(`/songs`);
    return res.data;
};