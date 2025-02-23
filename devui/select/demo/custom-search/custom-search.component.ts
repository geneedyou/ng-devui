import { Component, ViewChild } from '@angular/core';
import { SelectComponent } from 'ng-devui/select';
import { of } from 'rxjs';

@Component({
  selector: 'd-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css']
})
export class CustomSearchComponent {
  @ViewChild('networkSearchSelect') selectComponent: SelectComponent;
  timer: any;
  currentOption1 = '';
  currentOption2 = [];
  currentOption3 = '';
  options1 = [{
    name: 'option 1',
    value: 1
  }, {
    name: 'option 2',
    value: 2
  }, {
    name: 'option 3',
    value: 3
  }, {
    name: 'option 4',
    value: 4
  }];
  options2 = [{
    name: 'option1',
    value: 1
  }, {
    name: 'option2',
    value: 2
  }, {
    name: 'option3',
    value: 3
  }, {
    name: 'option4',
    value: 4
  }, {
    name: 'option5',
    value: 5
  }, {
    name: 'option6',
    value: 6
  }, {
    name: 'option7',
    value: 7
  }, {
    name: 'option8',
    value: 8
  }, {
    name: 'option9',
    value: 9
  }, {
    name: 'option10',
    value: 10
  }];
  constructor() {}
  onSelectObject = (term) => {
    return of(
      this.options2
        .map((option, index) => ({ id: index, option: option }))
        .filter(item => item.option.name.toLowerCase().indexOf(term.toLowerCase()) !== -1)
    );
  };
}
