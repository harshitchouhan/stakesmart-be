import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.development.env',
  }),
  MongooseModule.forRoot('mongodb+srv://ankittechgrit:Wpadmin123@app.akar0.mongodb.net/'),
  AdminModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
