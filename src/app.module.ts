import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './post/post.module';

@Module({
  imports: [PrismaModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
