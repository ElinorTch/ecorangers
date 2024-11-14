import { Housing } from 'src/database/entities/housing.entity';
import { HousingService } from './housing.service';
import { Controller, Get, Param, Post, Put, Query, Body } from '@nestjs/common';

@Controller('housing')
export class HousingController {
    constructor(private housingService: HousingService ) {}

    @Get('all')
    async getAllHousings(): Promise<Housing[]> {
        const allHousing = this.housingService.getAll();
        if (!allHousing) {
            throw new Error('No housing found');
        }
        return allHousing;
    }

    @Get('filter')
    async filterHousing(
        @Query('name') name?: string, 
        @Query('maxPrice') maxPrice?: number, 
        @Query('minPrice') minPrice?: number, 
        @Query('maxArea') maxArea?: number, 
        @Query('minArea') minArea?: number, 
        @Query('isAvailable') isAvailable?: boolean, 
        @Query('isSharedAppartment') isSharedAppartment?: boolean, 
        @Query('typeAppartment') typeAppartment?: string,
    ): Promise<Housing[]> {
        return this.housingService.filterHousing({name, maxPrice, minPrice, maxArea, minArea, isAvailable, isSharedAppartment, typeAppartment});
    }

    @Post('create')
    async createHousing(@Body() housing: Housing): Promise<Housing> {
        return this.housingService.create(housing);
    }

    @Put('update/:id')
    async updateHousing(@Param('id') id: string, housing: Housing): Promise<Housing> {
        return this.housingService.update(id, housing);
    }

    @Get(':id')
    async getHousingById(@Param('id') id: string): Promise<Housing> {
        const dataHousing = this.housingService.getById(id);  
        if (!dataHousing) {
            throw new Error('Housing not found');
        }
        return dataHousing;
    }
    
}
