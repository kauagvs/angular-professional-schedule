import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SpecialistsService } from 'src/app/core/services/specialists/specialists.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.scss'],
})
export class SpecialistsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
