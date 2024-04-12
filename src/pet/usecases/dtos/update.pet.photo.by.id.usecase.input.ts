import UpdatePetByIdUseCaseOutput from "./update.pet.by.id.usecase.output";

export default class UpdatePetPhotoByIdUseCaseInput {
  id: string
  photoPath: string

  constructor(data: Partial<UpdatePetPhotoByIdUseCaseInput>) {
    Object.assign(this, data)
  }
}