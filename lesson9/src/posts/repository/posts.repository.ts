import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Posts } from '../entities/post.entity';
import { Model } from 'mongoose';

@Injectable()
export class PostsRepository {
  constructor(
    @InjectModel(Posts.name) private readonly PostsModel: Model<Posts>,
  ) {}
  async create(createPostDto: CreatePostDto): Promise<Posts> {
    const newPost = await this.PostsModel.create(createPostDto);
    return newPost;
  }

  async findAll(): Promise<Posts[]> {
    const allPost = await this.PostsModel.find();
    return allPost;
  }

  async findOne(id: string): Promise<Posts> {
    const post = await this.PostsModel.findById(id);
    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<Posts> {
    const updatePost = await this.PostsModel.findByIdAndUpdate(
      id,
      updatePostDto,
      { new: true },
    );
    return updatePost;
  }

  async remove(id: string): Promise<Posts> {
    const deltePost = await this.PostsModel.findByIdAndDelete(id);
    return deltePost;
  }
}
