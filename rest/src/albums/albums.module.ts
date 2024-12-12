import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsController } from './albums.controller';
import { albumRepasitory } from './repasitory';
import { MongooseModule } from '@nestjs/mongoose';
import { Albums, AlbumsSchema } from './schema/albums.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Albums.name, schema: AlbumsSchema }]),
  ],
  controllers: [AlbumsController],
  providers: [albumRepasitory, AlbumsService],
})
export class AlbumsModule {}
