import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'missions',
    loadChildren: () => import('./missions/missions/missions.module').then( m => m.MissionsPageModule)
  },
  {
    path: 'mission/:id',
    loadChildren: () => import('./missions/mission/mission.module').then( m => m.MissionPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./contact/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'affaire',
    loadChildren: () => import('./contact/affaire/affaire.module').then( m => m.AffairePageModule)
  },
  {
    path: 'techs',
    loadChildren: () => import('./contact/techs/techs.module').then( m => m.TechsPageModule)
  },
  {
    path: 'entreprise',
    loadChildren: () => import('./entreprise/entreprise.module').then( m => m.EntreprisePageModule)
  },
  {
    path: 'outillages',
    loadChildren: () => import('./formulaire/outillages/outillages.module').then( m => m.OutillagesPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'planning',
    loadChildren: () => import('./planning/planning.module').then( m => m.PlanningPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
