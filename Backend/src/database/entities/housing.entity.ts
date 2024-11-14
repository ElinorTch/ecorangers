import { BaseEntity } from "./base.entity";
import { Entity, Column, ManyToMany, ManyToOne } from "typeorm";
import { TypeAppartment } from "../enum/typeappartement";
import { User } from "./user.entity";

@Entity()
export class Housing extends BaseEntity {

    @Column({nullable : false})
    name: string;

    @Column({nullable : false})
    address: string;

    @Column({nullable : false})
    description: string;

    @Column({nullable : false})
    price: number;

    @Column({nullable : false})
    area: number;

    @Column('json', {nullable : false})
    image: string[];

    @Column({nullable : false})
    isVerified: boolean;

    @Column({nullable : false})
    isAvailable: boolean;

    @Column({nullable : false})
    isSharedAppartment: boolean;

    @Column({nullable : false})
    typeAppartment: TypeAppartment;

    @ManyToMany(() => User, (user) => user.likedHousings)
    likedByUsers: User[];

}