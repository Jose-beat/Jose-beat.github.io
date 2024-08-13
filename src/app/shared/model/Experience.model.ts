import { TableData } from "../abstract/ITableData.abstract";
import { ITableData } from "../interfaces/model-interfaces/ITableData.interface";

export class Experience extends TableData {

  public idUser : string;
  public name : string;
  public description : string;


  constructor(
    id: string ,
    idUser: string,
    name: string,
    description: string,
    state : number,
    image? : File | null,
    imagePath? : string | null,
    updateDate?: number,
    createDate?: number,


  ) {
    super(id,state,image, imagePath, createDate, updateDate);
    this.idUser = idUser;
    this.name = name;
    this.description = description;
  }

}
