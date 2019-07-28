import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Tag } from "./Tag";

@Entity()
export class Gallery {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    gid: number;
    
    @Column()
    token: string;
    
    @Column()
    archiver_key: string;
    
    @Column()
    title: string;
    
    @Column()
    title_jpn: string;
    
    @Column()
    category: string;
    
    @Column()
    thumb: string;
    
    @Column()
    uploader: string;
    
    @Column()
    posted: string;
    
    @Column()
    filecount: string;
    
    @Column()
    filesize: number;
    
    @Column()
    expunged: boolean;
    
    @Column()
    rating: string;
    
    @Column()
    torrentcount: string;

    @ManyToMany(type => Tag, tag => tag.gallery)
    @JoinTable()
    tags: Tag[];
}
