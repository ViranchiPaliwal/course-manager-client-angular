export class LessonServiceClient {
    URL = 'https://web-dev-summer-online-2018.herokuapp.com/api/';

    findLessonsForModule(moduleId, courseId) {
        return fetch(this.URL + 'course/' + courseId + '/module/' + moduleId + '/lesson')
            .then(response => response.json());
    }
}
