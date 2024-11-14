import { Module, forwardRef } from '@nestjs/common';
import { AdvertController } from './advert.controller';
import { AdvertService } from './advert.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Advert } from 'src/database/entities/advert.entity';

@Module({
  controllers: [AdvertController],
  providers: [AdvertService],
  imports: [
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Advert]),
  ],
  
})
export class AdvertModule {}
