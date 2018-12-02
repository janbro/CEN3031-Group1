import { Pipe, PipeTransform } from '@angular/core';
/*
 * Takes a time in military format and converts it to AM/PM
 * Usage:
 *   value | time
 * Example:
 *   {{ 07:30 | time }}
 *   formats to: 7:30 AM
*/
@Pipe({name: 'time'})
export class TimePipe implements PipeTransform {
    transform(value: string): string {
        let result = '';
        const time = value.split(':');
        const hour = parseInt(time[0], 10);
        const minutes = parseInt(time[1], 10);
        const AM = hour <= 12;
        result += AM ? hour : (hour - 12);
        result += ':' + minutes;
        result += ' ';
        result += AM ? 'AM' : 'PM';
        return result;
    }
}