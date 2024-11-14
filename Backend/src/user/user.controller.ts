import { Controller, Get , Query, Post} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService : UserService) {}

    @Post('likeHousing')
    async likeHousing(
        @Query('userId') userId: string, 
        @Query('housingId') housingId: string) {
        return this.userService.likeHousing(userId, housingId);
    }

    @Get(':id')
    async getUserById(id: string) {
        return this.userService.getById(id);
    }
}
