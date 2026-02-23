import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    Query,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) {}

    @Post('createadmin')
    create(@Body() createAdminDto: CreateAdminDto): object {
        return this.adminService.create(createAdminDto);
    }

    @Get('getalladmin')
    getAllAdmin(): object {
        return this.adminService.getAllAdmin();
    }

    @Get('getadmin/:id')
    getAdminById(@Param('id') id: string): object {
        return this.adminService.getAdminById(id);
    }

    @Get('getadminbyemail')
    getAdminByEmail(@Query('email') email: string): object {
        return this.adminService.getAdminByEmail(email);
    }

    @Get('getadminsbyname')
    getAdminByName(@Query('name') name: string): object {
        return this.adminService.getAdminByName(name);
    }

    @Patch('updateadminpassword/:id')
    updateAdminPassword(
        @Param('id') id: string,
        @Body('password') password: string,
    ): object {
        return this.adminService.updateAdminPassword(id, password);
    }

    @Put('updateadmin/:id')
    updateAdmin(
        @Param('id') id: string,
        @Body() updateAdminDto: UpdateAdminDto,
    ): object {
        return this.adminService.updateAdmin(id, updateAdminDto);
    }

    @Delete('deleteadmin/:id')
    deleteAdmin(@Param('id') id: string): object {
        return this.adminService.deleteAdmin(id);
    }
}
