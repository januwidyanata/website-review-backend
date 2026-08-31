import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './post/post.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Membuat .env terbaca otomatis di seluruh module
    }),
    PrismaModule, 
    PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
