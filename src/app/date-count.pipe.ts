import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): string{
    let dateCount: string= '';
    let today: any= new Date();
    var difference = Math.abs(value - today) / 1000;
    var days = Math.floor(difference/86400);
    if (days > 0){
      dateCount += Math.floor(days) + "days";

    }
    

    return dateCount;
  }
  

}
