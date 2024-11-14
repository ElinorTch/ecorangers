import { Controller, Get, Param, Post, Put, Query, Body } from '@nestjs/common';
import { Advert } from 'src/database/entities/advert.entity';
import { AdvertService } from './advert.service';

@Controller('advert')
export class AdvertController {
    constructor(private advertService: AdvertService) {}

    @Get('all')
    async getAllAdverts(): Promise<Advert[]> {
        return this.advertService.getAll();
    }

    @Get('filter')
    async filterAdvert(
        @Query('title') title?: string,  
        @Query('isAvailable') isAvailable?: boolean,  
        @Query('typeAdvert') typeAdvert?: string,
    ): Promise<Advert[]> {
        return this.advertService.filterAdvert({title, isAvailable, typeAdvert});
    }

    @Post('create')
    async createAdvert(@Body() advert: Advert): Promise<Advert> {
        return this.advertService.create(advert);
    }

    @Get(':id')
    async getAdvertById(@Param('id') id: string): Promise<Advert> {
        return this.advertService.getById(id);
    }

    @Put(':id')
    async updateAdvert(@Param('id') id: string, advert: Advert): Promise<Advert> {
        return this.advertService.update(id, advert);
    }

}
