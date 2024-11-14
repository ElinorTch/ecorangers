import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Advert } from 'src/database/entities/advert.entity';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdvertService {

    constructor(
        @InjectRepository(Advert)
        private advertRepository: Repository<Advert>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async getAll(): Promise<Advert[]> {
        return await this.advertRepository.find();
    }

    async getById(id: string): Promise<Advert> {
        const advert = await this.advertRepository.findOneBy({id})
        if (!advert) throw new BadRequestException("This advert doesn't exist.");
        return advert ;
    }

    async create(advert: Advert): Promise<Advert> {
        console.log(advert);
        const advertt = await this.advertRepository.save(advert);
        const user =  await this.userRepository.findOneBy({id: advert.ownedBy.id});
        user.ownedAdverts.push(advertt);
        await this.userRepository.save(user);   

        return  advertt;
    }

    async update(id: string, advert: Advert): Promise<Advert> {
        return await this.advertRepository.save({id, ...advert});
    }

    async filterAdvert(
        filters:{ 
            title?: string, 
            isAvailable?: boolean, 
            typeAdvert?: string }): Promise<Advert[]> {
        const query =  this.advertRepository.createQueryBuilder('advert');

        if(filters.title) {
            query.andWhere(`advert.title LIKE :title`, {title: `%${filters.title}%`});
        }

        if(filters.isAvailable) {
            query.andWhere(`advert.isAvailable = :isAvailable`, {isAvailable: filters.isAvailable});
        }

        if(filters.typeAdvert) {
            query.andWhere(`advert.typeAdvert = :typeAdvert`, {typeAdvert: filters.typeAdvert});
        }

        return query.getMany();
    }
}
