import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summery'
})

export class SummeryPipe implements PipeTransform {
    transform(value: string,args?: number){
        console.log(args)
        let actualLength = args?args:100;
        return value.substr(0,actualLength);
    }
}
