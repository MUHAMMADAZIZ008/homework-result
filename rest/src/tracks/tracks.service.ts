import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { Tracks } from './schema/tracks.schema';
import { TracksRepository } from './track.repasitory';

@Injectable()
export class TracksService {
  constructor(private readonly trackRepasitory: TracksRepository) {}
  async create(createTrackDto: CreateTrackDto): Promise<Tracks> {
    return this.trackRepasitory.create(createTrackDto);
  }

  async findAll(): Promise<Tracks[]> {
    return this.trackRepasitory.findAll();
  }

  async findOne(id: string): Promise<Tracks> {
    return this.trackRepasitory.findOne(id);
  }

  async update(id: string, updateTrackDto: UpdateTrackDto): Promise<Tracks> {
    return this.trackRepasitory.update(id, updateTrackDto);
  }

  async remove(id: string): Promise<Tracks> {
    return this.trackRepasitory.remove(id);
  }
}
