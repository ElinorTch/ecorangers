import { TypeAdvert } from "../enum/typeAdvert";
import { BaseEntity } from "./base.entity";
import { Entity, Column, OneToMany } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Advert extends BaseEntity {

    @Column({nullable : false})
    title: string;

    @Column({nullable : false})
    description: string;

    @Column('json', {nullable : false})
    image: string[];

    @Column({nullable : false})
    isVerified: boolean;

    @Column({nullable : false})
    isAvailable: boolean;

    @Column({nullable : false})
    typeAdvert: TypeAdvert;

    @OneToMany(() => User, (user) => user.ownedAdverts)
    ownedBy: User;
}