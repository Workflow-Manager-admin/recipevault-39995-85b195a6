import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'RecipeVault';

  isDarkTheme = false;
  private isBrowser: boolean;

  constructor() {
    // Check if running in browser context
    this.isBrowser = typeof globalThis !== 'undefined' && !!globalThis.window && !!globalThis.document;
  }

  // PUBLIC_INTERFACE
  ngOnInit(): void {
    if (this.isBrowser) {
      // Try to read theme preference from localStorage or match system preference
      const storedTheme = globalThis.localStorage?.getItem('theme');
      if (storedTheme) {
        this.isDarkTheme = storedTheme === 'dark';
      } else {
        this.isDarkTheme = (globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false);
      }
      this.applyTheme();
    }
  }

  // PUBLIC_INTERFACE
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isBrowser) {
      globalThis.localStorage?.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
      this.applyTheme();
    }
  }

  /** PUBLIC_INTERFACE
   * Applies the theme by setting or removing the 'dark-theme' class on body and :root.
   */
  private applyTheme(): void {
    if (!this.isBrowser) return;
    const cl = globalThis.document.body.classList;
    const rootCl = globalThis.document.documentElement.classList;
    if (this.isDarkTheme) {
      cl.add('dark-theme');
      rootCl.add('dark-theme');
    } else {
      cl.remove('dark-theme');
      rootCl.remove('dark-theme');
    }
  }
}
