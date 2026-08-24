import { PostType } from '@prisma/client';

export class CreatePostDto {
  title!: string;
  slug!: string;
  excerpt?: string;
  content!: string;
  featuredImage?: string;
  type?: PostType;
  categorySlug?: string;
  productName?: string;
  specs?: Record<string, any>;
  pros?: string[];
  cons?: string[];
  affiliateLink?: string;
}