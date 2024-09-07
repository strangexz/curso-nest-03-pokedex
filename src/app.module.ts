import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    MongooseModule.forRoot(
      'mongodb+srv://jafigueroa:H1McmZ9tONwJO2B8@cluster0.8dojn.mongodb.net/',
    ),
    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
