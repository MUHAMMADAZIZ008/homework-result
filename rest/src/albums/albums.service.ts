import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { albumRepasitory } from './repasitory';

@Injectable()
export class AlbumsService {
  constructor(private readonly albumRepasitory: albumRepasitory) {}
  create(createAlbumDto: CreateAlbumDto) {
    return this.albumRepasitory.createAlbus(createAlbumDto);
  }

  findAll() {
    return this.albumRepasitory.findAll();
  }

  findOne(id: string) {
    return this.albumRepasitory.findByIdAlbum(id);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return this.albumRepasitory.updateAlbums(id, updateAlbumDto);
  }

  remove(id: string) {
    return this.albumRepasitory.deleteAlbum(id);
  }
}
