import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { CourseListComponent } from './course-list.component';

describe('PU | MCourses - [CourseListComponent]', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule
      ],
      declarations: [ CourseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente MCourses - [CourseListComponent] se creó correctamente.', () => {
    expect(component).toBeTruthy();
  });
});
