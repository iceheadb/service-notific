import { Notification } from "../../src/app/entities/notification";
import { NotificationRepository } from "../../src/app/repositories/notification-repository";

export class inMemoryNotificationsRepository implements NotificationRepository {
    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}