import { Component, OnInit } from '@angular/core';
import { NotificationService, Notification } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = []; 

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notifications$.subscribe((notifications: Notification[]) => {
      this.notifications = notifications;
    });
    
  }

closeNotification(notification: Notification): void {
  this.notificationService.removeNotification(notification);
}

}
