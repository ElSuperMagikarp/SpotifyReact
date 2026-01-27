export interface Playlist {
    id: string;
    userId: string;
    name: string;
    description: string;
    imageUrl: string;
};

export interface CreatePlaylistDTO {
    userId: string;
    name: string;
    description?: string;
    imageUrl?: string;
}