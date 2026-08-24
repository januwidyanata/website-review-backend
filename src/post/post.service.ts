import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostType } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll(type?: string, categorySlug?: string) {
    const where: any = {};
    if (type) where.type = type as PostType;
    if (categorySlug) where.categorySlug = categorySlug;

    return this.prisma.post.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findBySlug(slug: string) {
    return this.prisma.post.findUnique({
      where: { slug },
    });
  }

  async create(dto: CreatePostDto) {
    return this.prisma.post.create({
      data: {
        title: dto.title,
        slug: dto.slug,
        excerpt: dto.excerpt,
        content: dto.content,
        featuredImage: dto.featuredImage,
        type: dto.type || PostType.review,
        categorySlug: dto.categorySlug,
        productName: dto.productName,
        specs: dto.specs || {},
        pros: dto.pros || [],
        cons: dto.cons || [],
        affiliateLink: dto.affiliateLink,
      },
    });
  }
}