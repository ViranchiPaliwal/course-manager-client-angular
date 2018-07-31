export class WidgetServiceClient {
    TOPIC_URL = 'https://web-dev-summer-online-2018.herokuapp.com/api/topic/TOPIC_ID/widget';

    findWidgetsForTopic(topicId) {
        return fetch(this.TOPIC_URL.replace('TOPIC_ID', topicId))
            .then(response => response.json());
    }
}
