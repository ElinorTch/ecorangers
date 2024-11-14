import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './database/entities/user.entity';
import { Housing } from './database/entities/housing.entity';
import { Advert } from './database/entities/advert.entity';
import { HousingModule } from './housing/housing.module';
import { AdvertService } from './advert/advert.service';
import { AdvertModule } from './advert/advert.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root@Mysql_1234',
      database: 'ecorangers',
      entities: [User, Housing, Advert],
      synchronize: true,
    }),
    HousingModule,
    AdvertModule,
    UserModule,
    TypeOrmModule.forFeature([Advert]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Housing]),
  ],
  controllers: [AppController],
  providers: [AppService, AdvertService],

})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
