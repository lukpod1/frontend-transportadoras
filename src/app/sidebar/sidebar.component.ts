import { Component, OnInit } from '@angular/core';
import {TransporterService} from "../services/transporter.service";
import {concat} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  transporters: any[] = new Array();
  countTransporters: number;

  ufs: Array<any>;
  citeis: Array<any>;


  uniq = (arrArg) => {
    return arrArg.filter((elem, pos, arr) => {
      return arr.indexOf(elem) == pos;
    });
  };

  constructor(private transporterService: TransporterService) { }

  ngOnInit() {
    this.countResultTransporters();
    this.findUfs();
    this.findCiteis()
    // this.countUfs()
  }

  countResultTransporters() {
    this.transporterService.findAll().subscribe(value => {
      this.transporters.push(value);
      this.countTransporters = Object.keys(value).length;
    })
  }

  findUfs() {
    this.transporterService.findUfs().subscribe(response => {
      this.ufs = this.uniq(response);
    });
  }

  findCiteis() {
    this.transporterService.findCities().subscribe(response => {
      this.citeis = this.uniq(response);
    });
  }
}
