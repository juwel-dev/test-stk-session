import { TResponse } from "@/Framework/Domain/TResponse";

export interface IUseCase<Req = void, Res = void> {
  execute(request: Req extends void ? never : Req): Promise<Res>;
}
