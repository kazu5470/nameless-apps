import { Injectable } from '@nestjs/common';
import { PostCreateRepository } from './repository/create.repository';
import { PrismaService } from '@/prisma/prisma.service';
import { CreatePostDto } from './Dto/post.dto';

@Injectable()
export class PostsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly postCreateRepository: PostCreateRepository,
  ) {}

  async createPost(dto: CreatePostDto) {
    const post = await this.postCreateRepository.createPost(dto);
    return post;
  }
}
