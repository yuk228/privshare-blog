import { BaseDto } from '..'
import { Role } from '@/app/generated/prisma'

export interface UserDto extends BaseDto {
    uuid: string
    name: string
    avatarUrl: string
    role: Role
}

export interface CreateUserDto {
    name: string
    email: string
    avatarUrl: string
}
