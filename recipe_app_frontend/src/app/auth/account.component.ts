import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  template: `
    <section>
      <h2>Account</h2>
      <p>Sign in or manage your account.</p>
      <div class="placeholder-card">
        <em>User authentication module will be available here.</em>
      </div>
    </section>
  `,
  styles: [`
    h2 {
      color: var(--accent);
      font-size: 2rem;
      margin-bottom: .2rem;
    }
    .placeholder-card {
      padding: 2.5rem 1.5rem;
      margin: 2rem 0 0 0;
      background: var(--active-bg);
      border: 1px solid var(--sidebar-border);
      border-radius: 0.9rem;
      color: var(--accent);
      font-size: 1.12rem;
    }
  `]
})
export class AccountComponent {}
