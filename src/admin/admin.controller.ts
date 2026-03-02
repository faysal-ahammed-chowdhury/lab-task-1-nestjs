import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    Patch,
    Post,
    Put,
    Query,
    Res,
    UploadedFile,
    UseInterceptors,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { RiderService } from './rider.service';
import { CreateRiderDto } from './dto/create-rider.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, MulterError } from 'multer';

@Controller('admin')
export class AdminController {
    constructor(
        private readonly adminService: AdminService,
        private readonly riderService: RiderService,
    ) {}

    // Admin Management
    @Post('create-admin')
    create(@Body() createAdminDto: CreateAdminDto): object {
        return this.adminService.create(createAdminDto);
    }

    @Get('get-all-admin')
    getAllAdmin(): object {
        return this.adminService.getAllAdmin();
    }

    @Get('get-admin/:id')
    getAdminById(@Param('id') id: string): object {
        return this.adminService.getAdminById(id);
    }

    @Get('get-admin-by-email')
    getAdminByEmail(@Query('email') email: string): object {
        return this.adminService.getAdminByEmail(email);
    }

    @Get('get-admins-by-name')
    getAdminByName(@Query('name') name: string): object {
        return this.adminService.getAdminByName(name);
    }

    @Patch('update-admin-password/:id')
    updateAdminPassword(
        @Param('id') id: string,
        @Body('password') password: string,
    ): object {
        return this.adminService.updateAdminPassword(id, password);
    }

    @Put('update-admin/:id')
    updateAdmin(
        @Param('id') id: string,
        @Body() updateAdminDto: UpdateAdminDto,
    ): object {
        return this.adminService.updateAdmin(id, updateAdminDto);
    }

    @Delete('delete-admin/:id')
    deleteAdmin(@Param('id') id: string): object {
        return this.adminService.deleteAdmin(id);
    }

    // Rider Management
    @Post('create-rider')
    @UsePipes(new ValidationPipe({}))
    createRider(@Body() createRiderDto: CreateRiderDto): object {
        return this.riderService.createRider(createRiderDto);
    }

    @Post('upload-rider-nid')
    @UseInterceptors(
        FileInterceptor('nid_img', {
            fileFilter: (req, file, cb) => {
                if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/)) {
                    cb(null, true);
                } else {
                    cb(new HttpException('Unexpected file', 400), false);
                }
            },
            // limits: { fileSize: 2 * 1024 },
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    cb(null, Date.now() + file.originalname);
                },
            }),
        }),
    )
    uploadRiderNid(@UploadedFile() file: Express.Multer.File): object {
        // console.log(file);
        // {
        //     fieldname: 'nid_img',
        //     originalname: 'logo.jpeg',
        //     encoding: '7bit',
        //     mimetype: 'image/jpeg',
        //     destination: './uploads',
        //     filename: '1772382419883logo.jpeg',
        //     path: 'uploads\\1772382419883logo.jpeg',
        //     size: 8884
        // }

        return {
            success: true,
            filenname: file.filename,
            message: 'NID Uploaded Successfully',
        };
    }

    // 1772480055697logo.jpeg
    @Get('get-rider-nid/:name')
    getRiderNid(@Param('name') filename: string, @Res() res) {
        res.sendFile(filename, { root: './uploads' });
    }
}
