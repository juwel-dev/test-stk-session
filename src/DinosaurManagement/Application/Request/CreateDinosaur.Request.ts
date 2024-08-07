import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID} from "class-validator";

export class CreateDinosaurRequest {
  @ApiProperty({ type: "uuid", required: false })
  @IsUUID()
  @IsOptional()
  public id?: string = undefined;

  @ApiProperty({ type: "string" })
  @IsString()
  @IsNotEmpty()
  public name = "";

  @ApiProperty({ type: "number" })
  @IsNumber()
  public age = 0;
}
