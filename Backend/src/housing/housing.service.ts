
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Housing } from 'src/database/entities/housing.entity';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HousingService {
    constructor(
        @InjectRepository(Housing)
        private housingRepository: Repository<Housing>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getAll(): Promise<Housing[]> {
        return await this.housingRepository.find();
    }

    async getById(id: string): Promise<Housing> {
        const housing = await this.housingRepository.findOneBy({id})
        if (!housing) throw new BadRequestException("This housing doesn't exist.");
        return housing ;
    }

    async create(housing: Housing): Promise<Housing> {
        const housin  = await this.housingRepository.save(housing);
        return housin;
    }

    async update(id: string, housing: Housing): Promise<Housing> {
        return await this.housingRepository.save({id, ...housing});
    }

    async filterHousing(
        filters:{ 
            name?: string, 
            maxPrice?: number, minPrice?: number, 
            maxArea?: number, minArea?: number, 
            isAvailable?: boolean, 
            isSharedAppartment?: boolean, 
            typeAppartment?: string }): Promise<Housing[]> {
        const query =  this.housingRepository.createQueryBuilder('housing');

        if(filters.name) {
            query.andWhere(`housing.name LIKE :name`, {name: `%${filters.name}%`});
        }

        if(filters.maxPrice) {
            query.andWhere(`housing.price <= :maxPrice`, {maxPrice: filters.maxPrice});
        }

        if(filters.minPrice) {
            query.andWhere(`housing.price >= :minPrice`, {minPrice: filters.minPrice});
        }

        if(filters.maxArea) {
            query.andWhere(`housing.area <= :maxArea`, {maxArea: filters.maxArea});
        }

        if(filters.minArea) {
            query.andWhere(`housing.area >= :minArea`, {minArea: filters.minArea});
        }

        if(filters.isAvailable) {
            query.andWhere(`housing.isAvailable = :isAvailable`, {isAvailable: filters.isAvailable});
        }

        if(filters.isSharedAppartment) {
            query.andWhere(`housing.isSharedAppartment = :isSharedAppartment`, {isSharedAppartment: filters.isSharedAppartment});
        }

        if(filters.typeAppartment) {
            query.andWhere(`housing.typeAppartment = :typeAppartment`, {typeAppartment: filters.typeAppartment});
        }

        return await query.getMany();
    }

    
}
