import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strategyFilter',
  pure:false
})
export class StrategyFilterPipe implements PipeTransform {

  transform(toolsObject: any[], filter: String): any {
    if (!toolsObject || !filter) {
      return toolsObject;
    }
    return toolsObject.filter(item => item.pedagogicStrategy.indexOf(filter) !== -1);
  }

}
