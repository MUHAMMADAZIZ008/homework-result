import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repository/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postRepository: PostsRepository) {}
  async create(createPostDto: CreatePostDto) {
    return await this.postRepository.create(createPostDto);
  }

  async findAll() {
    return await this.findAll();
  }

  async findOne(id: string) {
    return this.postRepository.findOne(id);
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.update(id, updatePostDto);
  }

  remove(id: string) {
    return this.postRepository.remove(id);
  }
}
