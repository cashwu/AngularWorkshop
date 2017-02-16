import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

    transform(value: any, type: string): any {
        switch (type) {
            case "Active":
                return value.filter(a => !a.done);
            case "Completed":
                return value.filter(a => a.done);
            default:
                return value;
        }
    }
}
