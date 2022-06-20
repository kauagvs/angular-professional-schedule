import { Component, OnInit } from '@angular/core';
import { SpecialistsService } from 'src/app/core/services/specialists/specialists.service';

@Component({
  selector: 'app-specialist-list',
  templateUrl: './specialist-list.component.html',
  styleUrls: ['./specialist-list.component.scss'],
})
export class SpecialistListComponent implements OnInit {
  specialists: any = [];
  allSpecialists: any = [];
  page: number = 0;
  specialistsPerPage: number = 2;
  noMorePosts: boolean = false;

  constructor(private specialistsService: SpecialistsService) {}

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(): void {
    this.specialistsService.getAllSpecialist().subscribe((specialists) => {
      this.allSpecialists = specialists;
      this.specialists = specialists.slice(this.page, this.specialistsPerPage);
    });
  }

  loadMoreSpecialists() {
    const nextPage = this.page + this.specialistsPerPage;

    const nextSpecialists = this.allSpecialists.slice(
      nextPage,
      nextPage + this.specialistsPerPage
    );

    this.page = nextPage;

    this.noMorePosts =
      this.page + this.specialistsPerPage >= this.allSpecialists.length;

    this.specialists.push(...nextSpecialists);
  }
}
