import { IRepository } from "../interfaces/model-interfaces/IRepository.interface";
import { Factory } from "./factory.class"
import { FirebaseDB } from "./providers/firebaseDb.provider";

export class Provider extends Factory{

  constructor(private provider : string){
    super();
  }



  protected override FactoryMethod(): IRepository {
    let provider : IRepository;
    switch (this.provider) {
      case "FB":
        provider = new FirebaseDB();
        break;

      default:
        throw Error("Provider Not Assigned");
        break;
    }

    return provider;
  }

}
