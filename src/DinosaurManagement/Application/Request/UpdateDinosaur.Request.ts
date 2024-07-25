import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class UpdateDinosaurRequest {
  @ApiProperty({ type: "uuid" })
  @IsUUID()
  public id = "";

  @ApiProperty({ type: "string" })
  @IsString()
  @IsNotEmpty()
  public name = "";

  @ApiProperty({ type: "number" })
  @IsNumber()
  public age = 0;
}
