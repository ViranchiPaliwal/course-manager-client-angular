export class TopicServiceClient {
    TOPIC_URL = 'https://web-dev-summer-online-2018.herokuapp.com/api/course/COURSE_ID/module/MODULE_ID/lesson/LESSON_ID/topic';

    findAllTopics(courseId, moduleId, lessonId) {
        return fetch(this.TOPIC_URL.replace('COURSE_ID', courseId)
            .replace('MODULE_ID', moduleId).replace('LESSON_ID', lessonId))
            .then(response => response.json());
    }
}
