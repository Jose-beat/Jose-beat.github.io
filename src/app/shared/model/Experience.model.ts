import { TableData } from "../abstract/ITableData.abstract";


export class Experience extends TableData {

  public idUser : string;
  public name : string;
  public description : string;
  public workingNow : boolean;
  public startDate : string;
  public endDate : string;


  constructor(
    id: string ,
    idUser: string,
    name: string,
    description: string,
    startDate : string,
    endDate : string,
    workingNow : boolean,
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
    this.workingNow = workingNow;
    this.startDate = startDate;
    this.endDate = endDate === undefined ? new Date('01-01-1900').toDateString() :  endDate;


  }

}
