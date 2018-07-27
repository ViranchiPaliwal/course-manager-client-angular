export class WidgetServiceClient {
    TOPIC_URL = 'http://localhost:8080/api/topic/TOPIC_ID/widget';
    findWidgetsForTopic(topicId) {
        return fetch(this.TOPIC_URL.replace('TOPIC_ID', topicId))
                    .then(response => response.json());
    }
}
