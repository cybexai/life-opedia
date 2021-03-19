import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Article } from "./Article";

@Entity()
export class Categorie {

    @PrimaryColumn()
    id: string;

    @Column()
    nom: string;

    @Column({ default: true })
    state: boolean;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    creationDate: string;

    @OneToMany(() => Article, article => article._categorie)
    article: Article[];
}