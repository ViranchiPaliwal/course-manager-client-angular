export class SectionServiceClient {

    SECTION_URL = 'https://webdev-server-node.herokuapp.com/api/course/COURSEID/section';
    URL = 'https://webdev-server-node.herokuapp.com/api/';

    findSectionsForStudent() {
        const url = this.URL + 'student/section';
        return fetch(url, {
            credentials: 'include'
        })
            .then(response => response.json());
    }

    enrollStudentInSection(sectionId) {
        const url = this.URL + 'student/section/' + sectionId;
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    }

    unEnrollStudentInSection(sectionId) {
        const url = this.URL + 'student/section/' + sectionId;
        return fetch(url, {
            method: 'delete',
            credentials: 'include'
        });
    }

    findSectionsForCourse(courseId) {
        return fetch(this.SECTION_URL.replace('COURSEID', courseId))
            .then(response => response.json());
    }

    createSection(courseId, name, seats) {
        const section = {
            name: name,
            courseId: courseId,
            seats: seats
        };
        return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    findAllSections() {
        return fetch(this.URL + '/section')
            .then(response => response.json());
    }

    deleteSection(sectionId) {
        return fetch(this.URL + 'section/' + sectionId, {
            method: 'delete'
        }).then(response => response.json());
    }

    updateSection(sectionId, courseId, name, seats) {
        const section = {
            name: name,
            courseId: courseId,
            seats: seats
        };
        return fetch(this.URL + '/section/' + sectionId, {
            method: 'put',
            body: JSON.stringify(section),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json());
    }
}
