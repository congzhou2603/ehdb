
export interface GalleryModel {
    gid: number;
    token: string;
    archiver_key: string;
    title: string;
    title_jpn: string;
    category: string;
    thumb: string;
    uploader: string;
    posted: string;
    filecount: string;
    filesize: number;
    expunged: boolean;
    rating: string;
    torrentcount: string;
    tags: string[];
}
