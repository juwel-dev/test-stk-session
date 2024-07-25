import { DinosaurModel } from "@/DinosaurManagement/Domain/Model/Dinosaur.Model";
import { DinosaurEntity } from "@/DinosaurManagement/Infrastructure/Entity/Dinosaur.Entity";
import { DinosaurEntityMapper } from "@/DinosaurManagement/Infrastructure/Mapper/DinosaurEntityMapper";
import { NotFound } from "@/Framework/Error/NotFound";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DinosaurRepository {
  public async findAll(): Promise<DinosaurModel[]> {
    const collection = await DinosaurEntity.find();
    return collection.map(DinosaurEntityMapper.toDomain);
  }

  public async findById(id: string): Promise<DinosaurModel | null> {
    const entity = await DinosaurEntity.findOne({ where: { id } });
    return entity ? DinosaurEntityMapper.toDomain(entity) : null;
  }

  public async create(model: DinosaurModel): Promise<DinosaurModel> {
    const entity = DinosaurEntityMapper.toEntity(model);
    await entity.save();
    return DinosaurEntityMapper.toDomain(entity);
  }

  public async delete(id: string): Promise<void> {
    await DinosaurEntity.delete({ id });
  }

  public async update(model: DinosaurModel): Promise<DinosaurModel> {
    const entity = await DinosaurEntity.findOne({ where: { id: model.id } });

    if (!entity) {
      throw new NotFound();
    }

    entity.name = model.name;
    entity.age = model.age;
    await entity.save();

    return DinosaurEntityMapper.toDomain(entity);
  }
}
