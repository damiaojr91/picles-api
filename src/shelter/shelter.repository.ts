import { InjectModel } from '@nestjs/mongoose';
import { Shelter } from './schemas/shelter.schema';
import { Model } from 'mongoose';
import IShelterRepository from './interfaces/shelter.repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class ShelterRepository implements IShelterRepository {
  constructor(
    @InjectModel(Shelter.name)
    private readonly shelterModel: Model<Shelter>,
  ){}

  async update(data: Partial<Shelter>): Promise<void> {
    await this.shelterModel.updateOne(null, {
      ...data,
      updatedAt: new Date()
    })
  }

  async get(): Promise<Shelter> {
    return await this.shelterModel.findOne();
  }
}
