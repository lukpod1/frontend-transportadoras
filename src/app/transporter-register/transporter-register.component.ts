import { Component, OnInit } from '@angular/core';
import {Transporter} from "../models/transporter/transporter";
import {TransporterService} from "../services/transporter.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-transporter-register',
  templateUrl: './transporter-register.component.html',
  styleUrls: ['./transporter-register.component.css']
})
export class TransporterRegisterComponent implements OnInit {

  transporter: Transporter = new Transporter();
  constructor(private transporterService: TransporterService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('id ', id);
    if (id) {
      this.transporterService.findTransporters(id).subscribe(value => {
        if (value === undefined) {
          this.router.navigate(['/'])
        } else {
          this.transporter = value;
        }
      });
    }
  }

  insert() {
    console.log(this.transporter);

    this.transporterService.insert(this.transporter).subscribe(value => {
      console.log(value);
      this.router.navigate(['/'])
    });

  }

  update() {
    this.transporterService.update(this.transporter, this.transporter.id).subscribe(value => {
      console.log(value);
      this.router.navigate(['/'])
    });
  }

  delete() {
    this.transporterService.delete(this.transporter.id).subscribe(value => {
      console.log(value);
      this.router.navigate(['/'])
    })
  }

}
