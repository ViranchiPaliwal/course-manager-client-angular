import {Routes, RouterModule} from '@angular/router';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {SectionListComponent} from './section-list/section-list.component';
import {AdminComponent} from './admin/admin.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: WhiteBoardComponent},
    {path: 'course/:courseId', component: CourseViewerComponent},
    {path: 'course/:courseId/module/:moduleId/lesson', component: CourseViewerComponent},
    {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic', component: CourseViewerComponent},
    {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: CourseViewerComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'course/:courseId/section', component: SectionListComponent},
    {path: 'admin', component: AdminComponent},
    {path: '**', component: WhiteBoardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
