import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'chats',
        loadChildren: () => import('../chats/chats.module').then(m => m.ChatsPageModule)
      },
      {
        path: 'calls',
        loadChildren: () => import('../calls/calls.module').then(m => m.CallsPageModule)
      },
      {
        path: 'stories',
        loadChildren: () => import('../stories/stories.module').then(m => m.StoriesPageModule)
      },
      {
        path: '',
        redirectTo: '/chats',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/chats',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
