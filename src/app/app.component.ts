import {afterRender, AfterRenderOptions, Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'ssr-rnd';

  constructor() {
    afterRender(() =>  {
      console.log(window)
      console.log(document)
    })
  }

  ngOnInit() {
  }
}
