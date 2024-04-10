import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications: Notification[] = [];
  private notificationsSubject: Subject<Notification[]> = new Subject();

  notifications$ = this.notificationsSubject.asObservable();

  showNotification(notification: Notification): void {
    this.notifications.push(notification);
    this.notificationsSubject.next(this.notifications);
    notification.position = notification.position || 'top';

    setTimeout(() => {
      this.removeNotification(notification);
    }, notification.time! * 1000 );
  }

public removeNotification(notificationToRemove: Notification): void {
  this.notifications = this.notifications.filter(
    notification => notification !== notificationToRemove
  );
  this.notificationsSubject.next(this.notifications);
}

}

export interface Notification {
  type?: string;
  position?: string;
  message?: string;
  time?: number;
}
