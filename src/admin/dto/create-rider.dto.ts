import {
    IsAlpha,
    IsEmail,
    IsNumberString,
    IsPhoneNumber,
    IsString,
    Length,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateRiderDto {
    @IsString()
    @IsAlpha()
    name: string;

    @IsEmail()
    @Matches(/^[^\s@]+@[^\s@]+\.xyz$/)
    email: string;

    @MinLength(6, { message: 'Password Must be atleast 6 char' })
    @MaxLength(8)
    password: string;

    @IsPhoneNumber('BD')
    phone: string;

    @IsNumberString()
    @Length(10, 10)
    nid: string;
}
