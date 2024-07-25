import { Builder } from "builder-pattern";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity("dinosaur")
export class DinosaurEntity extends BaseEntity {
  @PrimaryColumn({ type: "uuid" })
  public id = "";
  @Column({ type: "varchar" })
  public name = "";
  @Column({ type: "int", unsigned: true })
  public age = 0;
}
