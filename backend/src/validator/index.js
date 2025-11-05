import {
	IsInt,
	Length,
	IsUrl,
	IsDate,
	Min,
	Max,
	IsNotEmpty,
	IsOptional,
	IsNumber,
  MinLength,
} from "class-validator";

import Task from "../models/Task";

export class Post {
  @MinLength(10),
  title: String;
}