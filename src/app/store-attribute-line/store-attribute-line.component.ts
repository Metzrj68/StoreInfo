import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {StoreService} from "../store.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Store, StoreAttribute} from "../../models/store.model";
import {Input} from "@angular/core";
import {Renderer2} from "@angular/core";
import {Form} from "@angular/forms";
import {AuthHandlerService} from "../auth-handler.service";

@Component({
  selector: 'app-store-attribute-line',
  templateUrl: './store-attribute-line.component.html',
  styleUrls: ['./store-attribute-line.component.css'],


})
@Injectable()
export class StoreAttributeLineComponent implements OnInit {
  newValue: string
  successClass = ""
  buttonText:string
  readonly:Boolean
  @Input() attrib: StoreAttribute
  constructor(private storeService: StoreService, private http: HttpClient, private renderer: Renderer2, private authService:AuthHandlerService) {
    {
      this.buttonText="Change"
    }
  }

  onSubmit() {
    console.log("attrib: ")
    console.log(this.attrib)
    this.storeService.updateAttribute(this.attrib, value => {

      if (value) {
          this.buttonText="Saved"
          setTimeout(()=>{
            this.buttonText="Change"},1000)
           }
      else {
      }
    })
  }

  ngOnInit() {
    if (!this.authService.authStatus.readonly)
      this.readonly =true

  }


}


