import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export class AdminEntity {
    @PrimaryGeneratedColumn()
    adminId: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;
}
