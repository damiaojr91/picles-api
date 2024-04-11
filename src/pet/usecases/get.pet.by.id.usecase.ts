import { IUseCase } from "src/domain/iusecase.interface";
import GetPetByIdUseCaseInput from "./dtos/get.pet.by.id.usecase.input";
import GetPetByIdUseCaseOutput from "./dtos/get.pet.by.id.usecase.output";
import IPetRepository from "../interfaces/pet.repository.interface";
import PetTokens from "../pet.tokens";
import { Inject } from "@nestjs/common";
import { Pet } from "../schemas/pet.schema";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";

export default class GetPetByIdUseCase implements IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>{
  constructor(
    @Inject(PetTokens.petRepository)
    private readonly petRepository: IPetRepository
  ){}

  async run(input: GetPetByIdUseCaseInput): Promise<GetPetByIdUseCaseOutput> {
    const pet = await this.getPetById(input.id)

    if (pet === null) {
      throw new PetNotFoundError()
    }

    return new GetPetByIdUseCaseOutput ({
      id: pet._id,
      name: pet.name,
      type: pet.type,
      size: pet.size,
      gender: pet.gender,
      bio: pet.bio,
      photo: null,
      createdAt: pet.createdAt,
      updatedAt: pet.updatedAt
    });
  }

  private async getPetById(id: string): Promise<Pet>{
    try{
      // console.log(id)
      return await this.petRepository.getById(id)
    } catch (error) {
      return null
    }
  }
}