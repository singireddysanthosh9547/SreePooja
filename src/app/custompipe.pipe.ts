import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value) {
  if(value.length>10)
  {
    return value.substr(0,50)+"...";
}
else{
  return value;

}
  }
}
