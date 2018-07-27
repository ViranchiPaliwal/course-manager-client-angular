import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { CourseServiceClient } from './services/course.service.client';
import { ModuleServiceClient} from './services/module.service.client';

import { CourseGridComponent } from './course-grid/course-grid.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/lesson.service.client';
import { TopicTabsComponent } from './topic-tabs/topic-tabs.component';
import {TopicServiceClient} from './services/topic.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {WidgetServiceClient} from './services/widget.service.client';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicTabsComponent,
    WidgetListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
      CourseServiceClient,
      ModuleServiceClient,
      LessonServiceClient,
      TopicServiceClient,
      WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
