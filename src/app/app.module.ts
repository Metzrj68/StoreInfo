import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { AppComponent } from './app.component';
import { StoreAttributeLineComponent } from './store-attribute-line/store-attribute-line.component';
import {HttpClientModule} from "@angular/common/http";
import {StoreService} from "./store.service";
import { SearchbarComponent } from './searchbar/searchbar.component';
import { StoreAttributesComponent } from './store-attributes/store-attributes.component';
import { FormsModule} from "@angular/forms";
import { StoreIdPipe } from './store-id.pipe';
import { AttribFilterPipe } from './attrib-filter.pipe';
import {NgSelectModule} from "@ng-select/ng-select";
import { LoginFormComponent } from './login-form/login-form.component';
import {Routes,Router, RouterModule} from "@angular/router";
import { StoreInfoComponent } from './store-info/store-info.component';
import { routes} from './routes/routes'
import {AuthHandlerService} from "./auth-handler.service";
import { CommEquipmentComponent } from './comm-equipment/comm-equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreAttributeLineComponent,
    SearchbarComponent,
    StoreAttributesComponent,
    StoreIdPipe,
    AttribFilterPipe,
    StoreInfoComponent,
    CommEquipmentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgSelectModule,
    RouterModule.forRoot(routes)

  ],
  providers: [StoreService,AuthHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule{}
