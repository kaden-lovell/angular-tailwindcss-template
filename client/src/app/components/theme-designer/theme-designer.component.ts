import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-designer',
  templateUrl: './theme-designer.component.html',
  styleUrls: ['./theme-designer.component.scss'],
})
export class ThemeDesignerComponent implements OnInit {
  constructor() {}
  theme = 'light';
  updateTheme(value: any) {
    const root = window.document.documentElement;
    root.classList.remove(value === 'dark' ? 'dark' : 'light');
    root.classList.add(value === 'dark' ? 'light' : 'dark');
    this.theme = value === 'dark' ? 'light' : 'dark';
    console.log(root.classList);
  }
  ngOnInit(): void {}
}
