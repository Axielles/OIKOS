import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../app/services/wordpress.service';
import { IData } from '../app/interfaces/idata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'oikos';
  articles: IData[];

  constructor(private wordpress: WordpressService) { }

  ngOnInit() {
    this.wordpress.getWordpress().subscribe(data => {
      this.articles = data;
      console.log(data);
    });
  }

}
