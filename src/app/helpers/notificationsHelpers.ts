import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/BIBLIOTECA/shared/notification/notification.service';

const type = {
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
} as const;

const message = {
    GENERIC_ERROR: "Ha ocurrido un error inesperado",
    GENERIC_CREATED_CORRECTLY: "¡Se ha creado correctamente!",
    GENERIC_UPDATED_CORRECTLY: "¡Se ha actualizado correctamente!",
    GENERIC_DELETED_CORRECTLY: "¡Se ha eliminado correctamente!",
    MISSING_MANDATORY_FIELDS: 'No se han completado todos los campos requeridos',
    WRONG_FIELDS: "Los datos ingresados no son correctos."
} as const;

@Injectable({
  providedIn: 'root',
})

export class NotificationsHelper {

    constructor(private notificationService: NotificationService) { }

    notification(messageKey: keyof typeof message | string, messageTypeKey: keyof typeof type | string) {
        const m = message[messageKey as keyof typeof message] || messageKey || message.GENERIC_ERROR;
        const t = type[messageTypeKey as keyof typeof type] || messageTypeKey || type.DANGER;

        this.notificationService.showNotification({
            type: t,
            message: m,
            time: 2,
        });
    }
}

export { message, type };