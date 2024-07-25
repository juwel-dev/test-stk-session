import { StrictBuilder } from "builder-pattern";
import {BaseEntity, Column, Entity, PrimaryColumn} from "typeorm";

@Entity("dinosaur")
export class DinosaurEntity extends BaseEntity {
  public static get builder() {
    return StrictBuilder<DinosaurEntity>();
  }

  @PrimaryColumn({ type: "uuid" })
  public id = "";
  @Column({ type: "varchar" })
  public name = "";
  @Column({ type: "int", unsigned: true })
  public age = 0;
}
