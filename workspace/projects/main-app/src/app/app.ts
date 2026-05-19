import { Component, signal } from '@angular/core';
import { MatGridList, MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatGridList, MatGridTile, MatGridListModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('main-app');
}
