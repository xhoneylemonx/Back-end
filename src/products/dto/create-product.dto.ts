import { IsString, IsNumber, Min, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @Type(() => Number)        // ⭐ สำคัญมาก
  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsOptional()
  description?:string;
}