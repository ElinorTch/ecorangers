import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HousingModule } from 'src/housing/housing.module';
import { AdvertModule } from 'src/advert/advert.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Housing } from 'src/database/entities/housing.entity';
import { Advert } from 'src/database/entities/advert.entity';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [
    forwardRef(() => HousingModule), 
    forwardRef(() => AdvertModule),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Housing]),
    TypeOrmModule.forFeature([Advert]),]
})
export class UserModule {}
