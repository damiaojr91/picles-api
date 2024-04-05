import { InjectModel } from '@nestjs/mongoose';
import { Shelter } from './schemas/shelter.schema';
import { Model } from 'mongoose';

export class ShelterRepository {
  constructor(
    @InjectModel(Shelter.name)
    private readonly shelterModel: Model<Shelter>,
  ){}

  async get(): Promise<Shelter> {
    return await this.shelterModel.findOne();
  }
}
