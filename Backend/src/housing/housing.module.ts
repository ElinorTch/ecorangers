import { Module, forwardRef } from '@nestjs/common';
import { HousingController } from './housing.controller';
import { HousingService } from './housing.service';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Housing } from 'src/database/entities/housing.entity';
import { User } from 'src/database/entities/user.entity';

@Module({
  controllers: [HousingController],
  providers: [HousingService],
  imports: [
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([Housing]),
    TypeOrmModule.forFeature([User]),
  ]
})
export class HousingModule {}
