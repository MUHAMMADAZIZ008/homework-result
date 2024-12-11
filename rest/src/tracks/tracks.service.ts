import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tracks } from './schema/tracks.schema';
import { Model } from 'mongoose';

@Injectable()
export class TracksService {
  constructor(@InjectModel(Tracks.name) private tarckModel: Model<Tracks>) {}
  async create(createTrackDto: CreateTrackDto): Promise<Tracks> {
    const newTrack = await this.tarckModel.create(createTrackDto);
    return newTrack;
  }

  async findAll(): Promise<Tracks[]> {
    const allTrack = await this.tarckModel.find();
    return allTrack;
  }

  async findOne(id: string): Promise<Tracks> {
    const track = await this.tarckModel.findById(id);
    return track;
  }

  async update(id: string, updateTrackDto: UpdateTrackDto): Promise<Tracks> {
    const updateTrack = await this.tarckModel.findByIdAndUpdate(
      id,
      updateTrackDto,
      { new: true },
    );
    return updateTrack;
  }

  async remove(id: string): Promise<Tracks> {
    const deletedTrack = await this.tarckModel.findByIdAndDelete(id);
    return deletedTrack;
  }
}
