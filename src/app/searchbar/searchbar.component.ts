import {Component, OnInit, Output, EventEmitter, SimpleChange, Input, ViewChild} from '@angular/core';
import {StoreService} from "../store.service";
import {Store, StoreSelector} from "../../models/store.model";
import {NgSelectComponent} from "@ng-select/ng-select";
import {AuthHandlerService} from "../auth-handler.service";


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],

})
export class SearchbarComponent implements OnInit {

  stores: StoreSelector[] = []
  selectedStore: number
  @Output() storeSelectedEvent = new EventEmitter<number>()
  @ViewChild('storeSelect') public ngSelect:NgSelectComponent

  constructor(private storeService: StoreService,private authService:AuthHandlerService){
    {
    }
  }
  opened(value:any){
    console.log("In Searchbar: " + this.authService.authStatus.token)

    var activeItem = this.ngSelect.selectedValues
    if (activeItem.length != 0) {
      this.ngSelect.clearItem(activeItem[0])
      console.log(this.ngSelect.selectedItems)
    }
    else{
      console.log("no active Item")
    }



  }
  getStores() {
    this.storeService.getStoreList('', (data) => {
      this.stores = data
    })
  }

  storeSelected() {

    if (this.selectedStore){
      this.storeSelectedEvent.emit(this.selectedStore)
    }

  }

  ngOnInit() {
    this.getStores()
  }

}
