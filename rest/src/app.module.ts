import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistModule } from './artist/artist.module';
import { TracksModule } from './tracks/tracks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/rest'),
    UsersModule,
    ArtistModule,
    TracksModule,
  ],
})
export class AppModule {}
