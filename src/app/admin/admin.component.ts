import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {User} from '../models/user.model.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {SectionServiceClient} from '../services/section.service.client';
import {Section} from '../models/section.model.client';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    constructor(private service: UserServiceClient, private router: Router, private courseService: CourseServiceClient,
                private sectionService: SectionServiceClient) {
    }

    user: User = new User();
    isLoggedIn = true;
    courses: Course[] = [];
    sections: Section[] = [];
    isSection = false;
    name = '';
    seats;
    isAdd = false;
    isEdit = false;
    courseId;
    sectionId;

    ngOnInit() {
        this.service.profile()
            .then(user => {
                if (!user.invalid) {
                    this.user = user;
                    this.isLoggedIn = true;
                    this.courseService.findAllCourses()
                        .then(courses => this.courses = courses)
                        .then(() => this.sectionService.findAllSections())
                        .then(sections => this.sections = sections);
                } else {
                    alert('Invalid user or your session has expired. Kindly login.');
                    this.router.navigate(['login']);
                }
            });
    }

    edit(section, course) {
        this.isSection = true;
        this.name = section.name;
        this.seats = section.seats;
        this.isEdit = true;
        this.isAdd = false;
        this.courseId = course.id;
        this.sectionId = section._id;
    }

    delete(section) {
        this.sectionService.deleteSection(section._id)
            .then(() => this.sectionService.findAllSections())
            .then(sections => this.sections = sections);
    }

    add(course) {
        this.isAdd = true;
        this.isSection = true;
        this.isEdit = false;
        this.courseId = course.id;
        this.name = course.title + ' Section 1';
        this.seats = '';

    }

    addSection() {
        this.sectionService.createSection(this.courseId, this.name, this.seats)
            .then(() => this.sectionService.findAllSections())
            .then(sections => this.sections = sections);

    }

    update() {
        this.sectionService.updateSection(this.sectionId, this.courseId, this.name, this.seats)
            .then(() => this.sectionService.findAllSections())
            .then(sections => this.sections = sections);

    }

}
