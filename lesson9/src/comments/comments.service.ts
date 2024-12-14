import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsRepository } from './repository/comments.repository';

@Injectable()
export class CommentsService {
  constructor(private readonly commetRepository: CommentsRepository) {}
  async create(createCommentDto: CreateCommentDto) {
    return await this.commetRepository.create(createCommentDto);
  }

  async findAll() {
    return await this.findAll();
  }

  async findOne(id: string) {
    return await this.findOne(id);
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    return await this.commetRepository.update(id, updateCommentDto);
  }

  async remove(id: string) {
    return this.commetRepository.remove(id);
  }
}
