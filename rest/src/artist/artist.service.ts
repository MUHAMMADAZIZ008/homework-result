import { Inject, Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { Artist } from './schema/artist.schema';
import { ArtistRepository } from './artist.repasitory';

@Injectable()
export class ArtistService {
  constructor(
    @Inject('artistRepository')
    private readonly artistRepository: ArtistRepository,
  ) {}
  async create(createArtist: CreateArtistDto): Promise<Artist> {
    return this.artistRepository.create(createArtist);
  }

  async findAll(): Promise<Artist[]> {
    return this.artistRepository.findAll();
  }

  async findOne(id: string): Promise<Artist> {
    return this.artistRepository.findOne(id);
  }

  async update(
    id: string,
    updateArtist: UpdateArtistDto,
  ): Promise<UpdateArtistDto> {
    return this.artistRepository.update(id, updateArtist);
  }

  async remove(id: string): Promise<UpdateArtistDto> {
    return this.artistRepository.remove(id);
  }
}
