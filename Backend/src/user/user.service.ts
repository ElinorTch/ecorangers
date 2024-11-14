import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Housing } from 'src/database/entities/housing.entity';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Housing)
        private housingRepository: Repository<Housing>,
    ){}

    async likeHousing(userId: string, housingId: string): Promise<User> {
        const user: User = await this.userRepository.findOne({
            where: { id: userId },
            relations: ['likedHousings'],
        });
        const housing: Housing = await this.housingRepository.findOne({
            where: { id: housingId },
            relations: ['likedByUsers'],
        });
    
        if (!user || !housing) {
            throw new Error('User or Housing not found');
        }
    
        if (!user.likedHousings) {
            user.likedHousings = [];
        }
        if (!housing.likedByUsers) {
            housing.likedByUsers = [];
        }
    
        user.likedHousings.push(housing);
        housing.likedByUsers.push(user);
    
        await this.housingRepository.save(housing);
        await this.userRepository.save(user);
    
        return user;
    }

    async unlikeHousing(userId: string, housingId: string): Promise<User> {
        const user = await this.userRepository.findOneBy({id: userId});
        const housing = await this.housingRepository.findOneBy({id:  housingId});

        user.likedHousings = user.likedHousings.filter(h => h.id !== housing.id);
        housing.likedByUsers = housing.likedByUsers.filter(u => u.id !== user.id);

        await this.housingRepository.save(housing);
        await this.userRepository.save(user);

        return user;    
    }

    async getById(id: string): Promise<User> {
        const user = this.userRepository.findOneBy({id})
        if (!user) throw new BadRequestException("This user doesn't exist.");
        return user ;
    }

    async updateUserInfo(id: string, user: User): Promise<User> {
        return await this.userRepository.save({id, ...user});
    }
    
}
