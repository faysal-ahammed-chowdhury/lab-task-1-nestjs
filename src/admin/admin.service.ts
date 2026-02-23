import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
    create(createAdminDto: CreateAdminDto): object {
        let createdAdmin = {
            id: '101',
            ...createAdminDto,
        };
        return {
            success: true,
            data: createdAdmin,
            message: 'Admin Created Successfully',
        };
    }

    getAllAdmin(): object {
        return {
            success: true,
            data: [
                {
                    id: '101',
                    name: 'Faysal',
                    email: 'faysal@gmail.com',
                    password: '1234',
                },
                {
                    id: '102',
                    name: 'Shamin',
                    email: 'shamin@gmail.com',
                    password: '5678',
                },
            ],
        };
    }

    getAdminById(id: string): object {
        let myData: any = null;
        if (id === '101') {
            myData = {
                id: 101,
                name: 'Faysal',
                email: 'faysal@gmail.com',
                password: '1234',
            };
        } else if (id == '102') {
            myData = {
                id: '102',
                name: 'Shamin',
                email: 'shamin@gmail.com',
                password: '5678',
            };
        }

        if (!myData) {
            return {
                success: false,
                message: 'Admin Not Found',
            };
        }

        return {
            success: true,
            data: myData,
        };
    }

    getAdminByEmail(email: string): object {
        let myData: any = null;
        if (email === 'faysal@gmail.com') {
            myData = {
                id: 101,
                name: 'Faysal',
                email: 'faysal@gmail.com',
                password: '1234',
            };
        } else if (email == 'shamin@gmail.com') {
            myData = {
                id: '102',
                name: 'Shamin',
                email: 'shamin@gmail.com',
                password: '5678',
            };
        }

        if (!myData) {
            return {
                success: false,
                message: 'Admin Not Found',
            };
        }

        return {
            success: true,
            data: myData,
        };
    }

    getAdminByName(name: string): object {
        let myData: any = null;
        if (name === 'Faysal') {
            myData = {
                id: 101,
                name: 'Faysal',
                email: 'faysal@gmail.com',
                password: '1234',
            };
            name;
        } else if (name == 'Shamin') {
            myData = {
                id: '102',
                name: 'Shamin',
                email: 'shamin@gmail.com',
                password: '5678',
            };
        }

        if (!myData) {
            return {
                success: false,
                message: 'Admin Not Found',
            };
        }

        return {
            success: true,
            data: myData,
        };
    }

    updateAdminPassword(id: string, password: string): object {
        if (id == '101' || id == '102') {
            return {
                success: true,
                message: `Password Updated to ${password}`,
            };
        }
        return {
            success: false,
            message: 'Failed To Update Password',
        };
    }

    updateAdmin(id: string, updateAdminDto: UpdateAdminDto): object {
        if (!(id == '101' || id == '102')) {
            return {
                success: false,
                message: 'Admin Not Found',
            };
        }
        let updatedAdmin = { ...updateAdminDto };
        return {
            success: true,
            data: updatedAdmin,
        };
    }

    deleteAdmin(id: string): object {
        if (!(id == '101' || id == '102')) {
            return {
                success: false,
                message: 'Admin Not Found',
            };
        }

        return {
            success: true,
            message: `Admin ${id} deleted`,
        };
    }
}
