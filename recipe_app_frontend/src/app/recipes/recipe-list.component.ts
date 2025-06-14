import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  template: `
    <section>
      <h2>Recipes</h2>
      <p>Browse all recipes and manage your collection.</p>
      <div class="placeholder-card">
        <em>Recipe browsing and management functionality will appear here.</em>
      </div>
    </section>
  `,
  styles: [`
    h2 {
      color: var(--primary);
      font-size: 2rem;
      margin-bottom: .2rem;
    }
    .placeholder-card {
      padding: 2.5rem 1.5rem;
      margin: 2rem 0 0 0;
      background: var(--active-bg);
      border: 1px solid var(--sidebar-border);
      border-radius: 0.9rem;
      color: var(--primary);
      font-size: 1.12rem;
    }
  `]
})
export class RecipeListComponent {}
