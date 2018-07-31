export class LessonServiceClient {
    URL = 'http://localhost:8080/api/';

    findLessonsForModule(moduleId, courseId) {
        return fetch(this.URL + 'course/' + courseId + '/module/' + moduleId + '/lesson')
            .then(response => response.json());
    }
}
