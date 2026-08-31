import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { PostsService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(
    @Query('type') type?: string,
    @Query('category') categorySlug?: string,
  ) {
    return this.postsService.findAll(type, categorySlug);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.postsService.findBySlug(slug);
  }

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    //return this.postsService.create(createPostDto);
    const data_post = await this.postsService.create(createPostDto);
    return {
      statusCode: 201,
      message: "ok",
      data: data_post
    }
  }
}