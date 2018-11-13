import { Component, OnInit } from '@angular/core';
import {ContactService} from "../service/contact.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any = [
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
    {key: 'abcc', value: 1},
  ];
  constructor(private _CS: ContactService) { }

  ngOnInit() {
    /*this._CS.getContact().subscribe( contact => {
      this.contacts = contact;
    });*/
  }

}
