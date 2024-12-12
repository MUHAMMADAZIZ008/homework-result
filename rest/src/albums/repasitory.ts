import { Injectable } from '@nestjs/common';
import { Albums } from './schema/albums.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Injectable()
export class albumRepasitory {
  constructor(
    @InjectModel(Albums.name) private readonly albumModel: Model<Albums>,
  ) {}

  async findAll(): Promise<Albums[]> {
    const allAlbum = await this.albumModel.find();
    return allAlbum;
  }

  async findByIdAlbum(id: string): Promise<Albums> {
    const albums = await this.albumModel.findById(id);
    return albums;
  }

  async createAlbus(albums: Albums): Promise<Albums> {
    const newAlbum = await this.albumModel.create(albums);
    await newAlbum.save();
    return newAlbum;
  }

  async updateAlbums(
    id: string,
    updatAlbumDto: UpdateAlbumDto,
  ): Promise<Albums> {
    const updatedAlbum = await this.albumModel.findByIdAndUpdate(
      id,
      updatAlbumDto,
      { new: true },
    );
    return updatedAlbum;
  }

  async deleteAlbum(id: string): Promise<Albums> {
    const deletedAlbum = await this.albumModel.findByIdAndDelete(id);
    return deletedAlbum;
  }
}
