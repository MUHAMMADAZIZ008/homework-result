import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comments } from '../entities/comment.entity';
import { Model } from 'mongoose';

@Injectable()
export class CommentsRepository {
  constructor(
    @InjectModel(Comments.name) private readonly CommentsModel: Model<Comments>,
  ) {}
  async create(createCommentDto: CreateCommentDto): Promise<Comments> {
    const newComment = await this.CommentsModel.create(createCommentDto);
    return newComment;
  }

  async findAll(): Promise<Comments[]> {
    const allComment = await this.CommentsModel.find();
    return allComment;
  }

  async findOne(id: string): Promise<Comments> {
    const comment = await this.CommentsModel.findById(id);
    return comment;
  }

  async update(
    id: string,
    updateCommetDto: UpdateCommentDto,
  ): Promise<Comments> {
    const updateCommet = await this.CommentsModel.findByIdAndUpdate(
      id,
      updateCommetDto,
      { new: true },
    );
    return updateCommet;
  }

  async remove(id: string): Promise<Comments> {
    const delteComment = await this.CommentsModel.findByIdAndDelete(id);
    return delteComment;
  }
}
