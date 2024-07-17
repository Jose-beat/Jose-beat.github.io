import { FormGroup } from "@angular/forms";
import { ITableData } from "../interfaces/model-interfaces/ITableData.interface";
import { Utilities } from "../utilities/table.utilities";


export class User implements ITableData{
  public Id : string;
  public Name : string;
  public LastName : string;
  public Email : string;
  public Username : string;
  public Password : string;
  public Image? : File;
  public CreateDate?: number;
  public UpdateDate?: number;
  public State : number;

  constructor(
    //Interface TableData attributes
    Name : string,
    LastName : string,
    Email : string,
    Username : string,
    Password : string,
    Id? : string,
    Image? : File,
    CreateDate? : number,
    UpdateDate?: number,
    State? : number

  ){
    this.Id = Utilities.generateId(Id);
    this.Name = Name;
    this.LastName = LastName;
    this.Email = Email;
    this.Password = Password;
    this.Username = Username;
    this.Image = Image;
    this.CreateDate = Utilities.createDate(CreateDate);
    this.UpdateDate = Utilities.updateDate(UpdateDate);
    this.State =  State === null || State === undefined ? 1 : 0;
  }

  update(data: Partial<User>) {
    Object.assign(this, data);
  }
  //TODO : Ver forma de incluir cada formulario de que cada modelo en la clas


}
