import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders, HttpClientModule} from "@angular/common/http";
import {Store, StoreAttribute, StoreSelector,CommEquipment} from "../models/store.model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {catchError} from "rxjs/operators";
import {observable} from "rxjs/symbol/observable";
//import {AuthHandlerService} from "./auth-handler.service";
import {routes} from "./routes/routes";
import {Router} from "@angular/router";
var baseURL = 'http://localhost:3000';
@Injectable()
export class StoreService {
  activeKey: number
  attributes: StoreAttribute[]
  headers:HttpHeaders

  constructor(private http: HttpClient, private router:Router) {

  }

  getStoreList(token,cb) {

    this.http.get<StoreSelector[]>(baseURL+'/api/stores').subscribe((data) => {
      console.log("Data: " + data)
      if (!data){
        this.router.navigate(['/'])
      }
      var _storeSelector: StoreSelector[] = []
      console.log(data[0])
      data.forEach(function (s:any) {

        _storeSelector.push(new StoreSelector(s.storeKey, s.storeName, s.storeNumber))
      })
      return cb(_storeSelector);
    })
  }

  getAttribs(id, cb) {
    this.http.get<StoreAttribute[]>(baseURL+'/api/stores/' + id + '/attr').subscribe((attributesList) => {
      console.log(attributesList)
      let attributes: StoreAttribute[] = new Array()
      let commEquip = new Object
      attributes = attributesList
      console.log('attribs are:')
      return cb(attributes);
    })
  }
  getCommEquipment(id,cb){
    this.http.get<CommEquipment>(baseURL+'/api/stores/' + id + '/commequip').subscribe((commEquip) => {
      console.log('Got CommEquipment')
      return cb(commEquip);
    })
  }

  updateAttribute(attrib: StoreAttribute, cb) {
    this.http.post(baseURL+'/api/stores/updateattribs',
      {
        attributeKey: attrib.attributeKey,
        attributeValue: ((attrib.Value) ? attrib.Value : "")
      }).subscribe(data=>{

        cb(data)
    })




  }

}

