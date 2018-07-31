import {Component, OnInit} from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {Section} from '../models/section.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(private service: UserServiceClient,
                private courseService: CourseServiceClient,
                private sectionService: SectionServiceClient,
                private router: Router) {
    }

    user: User = new User();
    enrollments = [];
    courses: Course[] = [];
    isLoggedIn = false;
    isAdmin = false;

    ngOnInit() {
        this.service.profile()
            .then(user => {
                if (!user.invalid) {
                    this.user = user;
                    if (this.user.username === 'admin') {
                        this.isAdmin = true;
                    }
                    this.isLoggedIn = true;
                    this.sectionService.findSectionsForStudent()
                        .then((enrollments) => {
                            this.enrollments = enrollments;
                        })
                        .then(() => this.courseService.findAllCourses())
                        .then(courses => this.courses = courses);
                } else {
                    alert('Invalid user or your session has expired. Kindly login.');
                    this.router.navigate(['login']);
                }
            });
    }

    getProfile() {
        this.service
            .profile()
            .then(user =>
                this.user = user);
    }

    getSections() {
        this.sectionService
            .findSectionsForStudent()
            .then(enrollments => this.enrollments = enrollments);
    }

    updateProfile() {
        this.service
            .updateProfile(this.user)
            .then(() => this.getProfile());
    }

    unEnrollSection(enrollment) {
        this.sectionService.unEnrollStudentInSection(enrollment.section._id)
            .then(() => this.getSections());
    }
}
