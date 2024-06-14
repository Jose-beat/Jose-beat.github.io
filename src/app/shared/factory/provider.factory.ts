import { IRepository } from "../interfaces/IRepository.interface";
import { Factory } from "./factory.class"

export class Provider extends Factory{

  constructor(private provider : string){
    super();
  }



  protected override FactoryMethod(): IRepository {
    let provider : IRepository;
    switch (this.provider) {
      case "FB":
        throw Error("Provider Not Implemented");
        break;

      default:
        throw Error("Provider Not Assigned");
        break;
    }

    return provider;
  }

}
