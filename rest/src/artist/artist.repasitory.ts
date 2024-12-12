import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Artist } from './schema/artist.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArtistRepository {
  constructor(@InjectModel(Artist.name) private artistModel: Model<Artist>) {}
  async create(createArtist: CreateArtistDto): Promise<Artist> {
    const newArtist = await this.artistModel.create(createArtist);
    await newArtist.save();
    return newArtist;
  }

  async findAll(): Promise<Artist[]> {
    const allArtist = await this.artistModel.find();
    return allArtist;
  }

  async findOne(id: string): Promise<Artist> {
    const artist = await this.artistModel.findById(id);
    return artist;
  }

  async update(
    id: string,
    updateArtist: UpdateArtistDto,
  ): Promise<UpdateArtistDto> {
    const updatedArtist = await this.artistModel.findByIdAndUpdate(
      id,
      updateArtist,
      { new: true },
    );
    return updatedArtist;
  }

  async remove(id: string): Promise<UpdateArtistDto> {
    const deleteUser = await this.artistModel.findByIdAndDelete(id);
    return deleteUser;
  }
}
