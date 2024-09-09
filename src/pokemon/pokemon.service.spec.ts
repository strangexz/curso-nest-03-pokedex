import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './entities/pokemon.entity';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

describe('PokemonService', () => {
  let service: PokemonService;
  let model: Model<Pokemon>;

  // const pokemons: Pokemon[] = [
  //   {
  //     no: 1,
  //     name: 'bulbasur',
  //   },
  // ];

  const mockPokemonModel = () => ({
    create: jest.fn(),
    find: () => ({ lean: jest.fn().mockResolvedValueOnce([]) }),
    findOne: jest.fn(),
    findById: jest.fn(),
    deleteOne: jest.fn(),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        { provide: getModelToken('Pokemon'), useFactory: mockPokemonModel },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    model = module.get(getModelToken('Pokemon'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // describe('findAll', () => {
  //   it('should get all gets in service', async () => {
  //     const allPokemon = await service.findAll();
  //     expect(allPokemon.length).toStrictEqual(1);
  //   });
  // });
});
