import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Artist, ArtistSchema } from './schema/artist.schema';
import { ArtistRepository } from './artist.repasitory';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Artist.name, schema: ArtistSchema }]),
  ],
  controllers: [ArtistController],
  providers: [
    {
      provide: 'artistRepository',
      useClass: ArtistRepository,
    },
    ArtistService,
  ],
})
export class ArtistModule {}
