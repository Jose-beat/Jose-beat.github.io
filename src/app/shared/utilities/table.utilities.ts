export class Utilities {

  public static generateId(id? : string): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const length = 10;
    let result = '';

    if(id === undefined || id === null){
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
      }
      console.log("Respuesta", result);
    }else{
      result = id;
    }
    return result;

  }


  public static createDate( date?: number) : number {
    console.log('El dia que llego' + date );
    return date === undefined || date === null ?  Date.now() : date;


  }

  public static updateDate(date? : number) : number{
    return date === undefined || date === null ? new Date('01-01-1900').getTime() : date;
  }
}
