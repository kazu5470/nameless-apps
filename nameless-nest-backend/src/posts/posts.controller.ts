import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreatePostDto } from '@/posts/Dto/post.dto';
import { CreateResponse } from 'src/shared/type';
import { PostsService } from '@/posts/posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}
  @Post('new')
  async createPost(
    // @Req() request: Request,
    @Body() dto: CreatePostDto,
  ): Promise<CreateResponse> {
    const { id } = await this.postService.createPost(dto);
    return { id };
  }
}
