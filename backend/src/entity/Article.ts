import { Entity, Column, PrimaryColumn, OneToMany, ManyToOne } from 'typeorm';
import { Categorie } from './Categorie';


@Entity()
export class Article {

    @PrimaryColumn()
    id: string;

    @Column()
    titre: string;

    @Column()
    contenu: string;

    @Column()
    image: string;
    
    @Column({ default: true })
    state: boolean;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    creationDate: string;

    @ManyToOne(() => Categorie, _categorie => _categorie.article)
    _categorie: Categorie;
   
}