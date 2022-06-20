import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialist-info',
  templateUrl: './specialist-info.component.html',
  styleUrls: ['./specialist-info.component.scss'],
})
export class SpecialistInfoComponent implements OnInit {
  @Input() specialist: any = [];

  constructor() {}

  ngOnInit(): void {}
}
