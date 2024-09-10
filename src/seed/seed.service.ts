import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  private readonly httpService: HttpService;
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});
    const { data } = await this.axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert: { name: string; no: number }[] = [];

    // const insertPromisesArray: any[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      console.log({ name, no });
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
