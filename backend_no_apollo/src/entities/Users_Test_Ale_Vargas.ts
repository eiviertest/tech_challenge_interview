import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users_Test_Ale_Vargas extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    second_name: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column("date")
    date_birthday: string;

    @Column("text")
    email: string;

    @Column("double")
    phone: number;
}