import { DINOSAUR_FIND_ALL_QUERY_TYPE } from "@/DinosaurManagement/Domain/Event/DinosaurFindAllEvent";
import { DinosaurModel } from "@/DinosaurManagement/Domain/Model/Dinosaur.Model";
import { DinosaurRepository } from "@/DinosaurManagement/Infrastructure/Repository/DinosaurRepository";
import { IUseCase } from "@/Framework/Domain/IUseCase";
import { TResponse } from "@/Framework/Domain/TResponse";
import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { Observable, catchError, from, map, of } from "rxjs";

@Injectable()
export class FindAllDinosaursUseCase
  implements IUseCase<void, DinosaurModel[]>
{
  public constructor(
    private readonly dinosaurRepository: DinosaurRepository,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  public execute(): Promise<DinosaurModel[]> {
    this.eventEmitter.emit(DINOSAUR_FIND_ALL_QUERY_TYPE);

    return this.dinosaurRepository.findAll();
  }
}
