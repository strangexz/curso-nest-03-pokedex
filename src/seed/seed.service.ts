import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert: { name: string; no: number }[] = [];

    // const insertPromisesArray: any[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      // await this.pokemonModel.create({ name, no });
      // insertPromisesArray.push(this.pokemonModel.create({ name, no }));
      pokemonToInsert.push({ name, no });

      // pokemonService.
    });

    // await Promise.all(insertPromisesArray);
    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'SEED EXECUTED!';
  }
}
