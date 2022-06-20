import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecialistsService } from 'src/app/core/services/specialists/specialists.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-specialist-detail',
  templateUrl: './specialist-detail.component.html',
  styleUrls: ['./specialist-detail.component.scss'],
})
export class SpecialistDetailComponent implements OnInit {
  specialist: any;
  constructor(
    private specialistsService: SpecialistsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getSpecialistDetail();
  }

  private getSpecialistDetail(): void {
    const { id } = this.route.snapshot.params;

    this.specialistsService.getSpecialistDetails(id).subscribe((specialist) => {
      this.specialist = specialist || [];
    });
  }
}
