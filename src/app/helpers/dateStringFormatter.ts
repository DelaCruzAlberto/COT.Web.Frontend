import { Injectable } from '@angular/core';

export enum Separator {
    SLASH = '/',
    DASH = '-',
}

export enum DateFormat {
    DDMMYYYY = 'DD/MM/AAAA',
    MMDDYYYY = 'MM/DD/AAAA',
}

@Injectable({
    providedIn: 'root',
})
export class DateStringFormatter {
    private formatFunctions = {
        [DateFormat.DDMMYYYY]: this.formatDateToDMAformat,
        [DateFormat.MMDDYYYY]: this.formatDateToMDAformat,
    };

    formatDate(dateString: string, dateFormat: DateFormat, separator: Separator): string {
        if (dateString === '' || !dateString) {
            return '';
        }
        
        const formatFunction = this.formatFunctions[dateFormat];
        return formatFunction ? formatFunction.call(this, dateString, separator) : dateString;
    }

    private formatDateToDMAformat(date: string, separator: Separator): string {
        return date.slice(0, 10).replace(/-/g, '-').split('-').reverse().join(separator);
    }

    private formatDateToMDAformat(date: string, separator: Separator): string {
        const [month, day, year] = date.slice(0, 10).split('-');
        return `${day}${separator}${month}${separator}${year}`;
    }
}
