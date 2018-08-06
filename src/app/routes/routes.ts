import { Routes} from '@angular/router';
import {LoginFormComponent} from "../login-form/login-form.component";
import {StoreInfoComponent} from "../store-info/store-info.component";

export const routes:Routes = [
  {path: '', component:StoreInfoComponent},
  {path: 'stores',component:StoreInfoComponent}
]
