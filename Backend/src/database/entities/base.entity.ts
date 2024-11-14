import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')  
    id: string;  

    @Column({ default: false })  
    isDeleted: boolean;  

    @CreateDateColumn() 
    readonly createdAt: Date;  

    @UpdateDateColumn()  
    readonly updatedAt: Date;  

    @DeleteDateColumn()  
    deletedAt: Date; 
}