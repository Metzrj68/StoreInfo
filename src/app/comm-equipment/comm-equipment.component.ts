import {Component, Input, OnInit} from '@angular/core';
import {CommEquipment} from "../../models/store.model";

@Component({
  selector: 'app-comm-equipment',
  templateUrl: './comm-equipment.component.html',
  styleUrls: ['./comm-equipment.component.css']
})
export class CommEquipmentComponent implements OnInit {
  @Input() commEquipInput:CommEquipment


  constructor() { }

  ngOnInit() {

  }

}
