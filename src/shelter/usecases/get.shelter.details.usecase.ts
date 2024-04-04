import { IUseCase } from 'src/domain/iusecase.interface';
import GetShelterDetailsUseCaseOutput from './dtos/get.shelter.details.usecase.output';

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput>
{
  run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
    // throw new Error("Method not implemented.");
    return Promise.resolve(
      new GetShelterDetailsUseCaseOutput({
        shelterName: 'DataPet',
        shelterEmail: 'datapet@datapet.com',
        shelterPhone: '1912345678',
        shelterWhatsApp: '19123456789',
        createdAt: new Date(),
        updateAt: new Date(),
      }),
    );
  }
}
