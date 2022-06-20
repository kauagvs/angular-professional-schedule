import { Component, OnInit } from '@angular/core';
import { SpecialistsService } from 'src/app/core/services/specialists/specialists.service';

@Component({
  selector: 'app-specialist-list',
  templateUrl: './specialist-list.component.html',
  styleUrls: ['./specialist-list.component.scss'],
})
export class SpecialistListComponent implements OnInit {
  specialists: any = [];

  constructor(private specialistsService: SpecialistsService) {}

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(): void {
    this.specialistsService.getAllSpecialist().subscribe((specialists) => {
      this.specialists = specialists || [];
    });
  }
}
