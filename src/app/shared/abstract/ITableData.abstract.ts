import { Utilities } from "../utilities/table.utilities";

export abstract class TableData {
  id : string;
  image? : File | null;
  imagePath? : string | null;
  createDate? : number;
  updateDate? : number;
  state : number;

  constructor(
    id: string,
    state : number,
    image? : File | null,
    imagePath? : string | null,
    createDate? : number,
    updateDate? : number,

  ){
    this.id = Utilities.generateId(id);
    this.state = state;
    this.image = image;
    this.imagePath = imagePath;
    this.createDate =  Utilities.createDate(createDate);
    this.updateDate =  Utilities.createDate(updateDate);


  }
}
