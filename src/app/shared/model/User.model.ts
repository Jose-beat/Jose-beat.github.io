import { FormGroup } from "@angular/forms";
import { ITableData } from "../interfaces/model-interfaces/ITableData.interface";
import { Utilities } from "../utilities/table.utilities";
import { TableData } from "../abstract/ITableData.abstract";


export class User extends TableData{

  public Name : string;
  public LastName : string;
  public Email : string;
  public Username : string;
  public Password : string;
  public Image? : File | null;
  public ImagePath?: string | null;
  public CreateDate?: number;
  public UpdateDate?: number;


  constructor(

    Name : string,
    LastName : string,
    Email : string,
    Username : string,
    Password : string,
    Id : string,
    State : number,
    Image? : File | null,
    ImagePath?: string | null,
    CreateDate? : number,
    UpdateDate?: number,


  ){
    super(Id,State,Image, ImagePath, CreateDate, UpdateDate);

    this.Name = Name;
    this.LastName = LastName;
    this.Email = Email;
    this.Password = Password;
    this.Username = Username;

  }

  update(data: Partial<User>) {
    Object.assign(this, data);
  }
  //TODO : Ver forma de incluir cada formulario de que cada modelo en la clas


}
