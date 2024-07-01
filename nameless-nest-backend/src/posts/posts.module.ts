import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PostCreateRepository } from './repository/create.repository';

@Module({
  imports: [PrismaModule],
  providers: [PostsService, PostCreateRepository],
  controllers: [PostsController],
  exports: [PostCreateRepository],
})
export class PostsModule {}
