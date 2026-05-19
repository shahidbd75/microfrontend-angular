import { Component } from '@angular/core';
import { MatActionList } from '@angular/material/list';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [MatActionList, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
