import {Component, Input, OnInit, Pipe, PipeTransform} from '@angular/core';
import {CommEquipment, StoreAttribute} from "../../models/store.model";
import {StoreService} from "../store.service";
import {AuthHandlerService} from "../auth-handler.service";

@Component({
  selector: 'app-store-attributes',
  templateUrl: './store-attributes.component.html',
  styleUrls: ['./store-attributes.component.css']

})
export class StoreAttributesComponent implements OnInit{

  @Input() id: number
  searchText:String
  storeAttributes: StoreAttribute[]
  readonly:boolean
  commInfo:CommEquipment
  groups =['Store IDs', 'Location','Owner/Operator','Fuel Information','WAN','LAN','POS']
  constructor(private StoreService: StoreService,private authService:AuthHandlerService) {

  }

  ngOnInit() {

  }
  sharedData(data: number) {
    console.log("FIRED shared data" + data)

    if (!this.authService.authStatus.readonly)
      this.readonly = true
    this.StoreService.getAttribs(data, (data) => {
      this.storeAttributes = data;
    });
    this.StoreService.getCommEquipment(data,(data)=>{
      this.commInfo = data
      console.log("Comm Info SA:")
      console.log(this.commInfo)
    })
  }

}
