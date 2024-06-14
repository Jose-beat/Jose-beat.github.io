import { Utilities } from "../utilities/table.utilities";
import { ITableData } from "./global/ITableData.interface";

export class User implements ITableData{
  public Id : string;
  public Name : string;
  public LastName : string;
  public Email : string;
  public Username : string;
  public Password : string;
  public Icon? : string;
  public CreateDate?: number;
  public UpdateDate?: number;
  public Active : boolean;

  constructor(
    //Interface TableData attributes
    Name : string,
    LastName : string,
    Email : string,
    Username : string,
    Password : string,
    Icon? : string,
    UpdateDate?: number,

  ){
    this.Id = Utilities.generateId();
    this.Name = Name;
    this.LastName = LastName;
    this.Email = Email;
    this.Password = Password;
    this.Username = Username;
    this.Icon = Icon;
    this.CreateDate = Utilities.createDate(this.CreateDate);
    this.UpdateDate = Utilities.updateDate(UpdateDate);
    this.Active = true;
  }



}
