import { Entity, PrimaryColumn, Column, ManyToOne, OneToMany } from "typeorm";


@Entity()
export class Utilisateur {

    @PrimaryColumn()
    id: string;

    @Column()
    nom: string;
    
    @Column({ default: true })
    state: boolean;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    creationDate: string;

}