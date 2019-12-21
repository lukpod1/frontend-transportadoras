import { Component, OnInit } from '@angular/core';
import {TransporterService} from "../services/transporter.service";

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  transporters: Array<any>;

  constructor(private transporterService: TransporterService) { }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.transporterService.findAll().subscribe(response => this.transporters = response);

    console.log(this.transporters)
  }

}
