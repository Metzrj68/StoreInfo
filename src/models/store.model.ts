export class Store
{
  key:any
  name:String
}

export class StoreSelector{
  key:number
  storeName:string
  storeNumber:string
  display:string
  commEquipment:CommEquipment

  constructor(key,storeName,storeNumber){
    console.log("constructor")
    this.key = key
    this.storeName = storeName
    this.storeNumber = storeNumber
    this.display = storeNumber + ' - ' + storeName;
  }
}
export class StoreAttribute{
  storeKey:number
  groupKey:number
  groupName:string
  Attribute:string
  attributeKey:number
  Value:string

}
export class CommEquipment{
  storeID:number
  ipAddress:string;
  commEquipmentID:number;
  userName:string;
  password:string;

}
