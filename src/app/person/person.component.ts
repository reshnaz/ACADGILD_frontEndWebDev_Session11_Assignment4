import { Component, OnInit, Input } from '@angular/core';
import { PersonList } from './../interface/person-model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  /**Get the personDetail app component  */
  @Input() personDetail: PersonList[];

  // String to search with.
  private searchString: string;
  
  constructor() { }

  ngOnInit() {
    this.searchString = '';
  }

}
