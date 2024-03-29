import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses$!: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.courses$ = this.coursesService.getCourses();
  }

  navigationRoute(route: string) {
    this.router.navigate([route]);
  }

  delete(id: string) {
    this.coursesService.deleteCourse(id);
  }

  openDialog(course: Course) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '300px',
      data: course
    });
  }
}
