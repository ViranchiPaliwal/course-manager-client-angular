import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

    constructor(private service: UserServiceClient,
                private sectionService: SectionServiceClient,
                private courseService: CourseServiceClient) { }

    user: User = new User();
    isLoggedIn = false;
    enrollments = [];
    coursesEnrolled = [];

    ngOnInit() {
        this.service.profile()
            .then(user => {
                if (!user.invalid) {
                    this.user = user
                    this.isLoggedIn = true
                    this.sectionService.findEnrollments()
                        .then(enrollments => this.enrollments = enrollments)
                        .then(() => {
                            this.enrollments.map(enrollment => (
                                this.courseService.findCourseById(enrollment.section.courseId)
                                    .then(course => this.coursesEnrolled.push(course))
                            ));
                        });
                }

            });
    }
}
