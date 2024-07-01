import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '@/posts/Dto/post.dto';
import { GetProjectDetailData } from '@/posts/Dto/type';
import { postDetailIncludeQuery } from './query';

@Injectable()
export class PostCreateRepository {
  constructor(private readonly prisma: PrismaService) {}
  async createPost(dto: CreatePostDto): Promise<GetProjectDetailData> {
    // const { postComment, postTags } = dto;
    const data = { ...dto };
    return this.prisma.posts.create({
      data: {
        content: data.content,
      },
      ...postDetailIncludeQuery,
    });
  }
}
