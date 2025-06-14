import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  standalone: true,
  template: `
    <section>
      <h2>Categories</h2>
      <p>Manage your recipe categories.</p>
      <div class="placeholder-card">
        <em>Category management feature will appear here.</em>
      </div>
    </section>
  `,
  styles: [`
    h2 {
      color: var(--secondary);
      font-size: 2rem;
      margin-bottom: .2rem;
    }
    .placeholder-card {
      padding: 2.5rem 1.5rem;
      margin: 2rem 0 0 0;
      background: var(--active-bg);
      border: 1px solid var(--sidebar-border);
      border-radius: 0.9rem;
      color: var(--secondary);
      font-size: 1.12rem;
    }
  `]
})
export class CategoryListComponent {}
