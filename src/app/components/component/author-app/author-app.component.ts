import { Component } from '@angular/core';
import { List, AuthorsService } from '../../../service/authors.service';

@Component({
  selector: 'app-author-app',
  templateUrl: './author-app.component.html',
  styleUrls: ['./author-app.component.css']
})
export class AuthorAppComponent {
  list: List[];
  constructor (private authorsService: AuthorsService){
    this.list = this.authorsService.getAllList()
  }
}
