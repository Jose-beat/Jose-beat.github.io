import { IAuthRepository } from "../interfaces/IAuthRepository.interface";
import { FirebaseAuth } from "../providers/firebaseAuth.provider";
import { Creator } from "./creator.class";

export class Provider extends Creator {

  constructor (private provider : string){
    super();
  }

  protected override factoryMethod(): IAuthRepository {
    let provider : IAuthRepository;

    switch (this.provider) {
      case "localEmail":
        provider = new FirebaseAuth();
        break;
      case "FirebaseEmail":
        throw Error("Method not implemented");
        break;
      case "FirebaseGoogle":
        throw Error("Method not implemented");
        break;
      default:
        throw Error("Method not implemented");
        break;
    }

    return provider;
  }

}
