import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "recipes"
  },
  {
    path: "recipes",
    loadComponent: () =>
      import("./recipes/recipe-list.component").then((m) => m.RecipeListComponent),
  },
  {
    path: "categories",
    loadComponent: () =>
      import("./categories/category-list.component").then((m) => m.CategoryListComponent),
  },
  {
    path: "account",
    loadComponent: () =>
      import("./auth/account.component").then((m) => m.AccountComponent),
  },
  { path: "**", redirectTo: "recipes" }
];
