import {
    IsAlpha,
    IsEmail,
    IsNotEmpty,
    IsNumberString,
    IsPhoneNumber,
    IsString,
    Length,
    Matches,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateRiderDto {
    @IsNotEmpty({ message: "can't be empty" })
    @IsString()
    @IsAlpha()
    name: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Must be a valid email' })
    @Matches(/^.+@.+\.xyz$/, { message: 'must contain @ and .xyz' })
    email: string;

    @IsNotEmpty()
    @MinLength(6, { message: 'Password must be atleast 6 char' })
    @MaxLength(8, { message: 'Password cannot exceed 8 char' })
    password: string;

    @IsNotEmpty()
    @IsPhoneNumber('BD', { message: 'Must be a valid Bangladeshi Number' })
    phone: string;

    @IsNotEmpty()
    @IsNumberString()
    @Length(10, 10)
    nid: string;
}
