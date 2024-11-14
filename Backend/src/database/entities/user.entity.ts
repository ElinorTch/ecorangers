import { Entity, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Role } from "../enum/role";
import { Housing } from "./housing.entity";
import { Advert } from "./advert.entity";

@Entity()
export class User extends BaseEntity {

    @Column({nullable : false})
    name: string;

    @Column({nullable : false})
    mail: string;

    @Column({nullable : false})
    password: string;

    @Column({nullable : false})
    role: Role;

    @ManyToMany(() => Housing, (housing) => housing.likedByUsers)
    @JoinTable()
    likedHousings: Housing[];

    @ManyToOne(() => Advert, (advert) => advert.ownedBy)
    ownedAdverts: Advert[];

}