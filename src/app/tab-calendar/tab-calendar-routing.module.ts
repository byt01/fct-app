import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCalendarEventPage } from '../page-calendar-event/page-calendar-event.page';
import { TabCalendarPage } from './tab-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: TabCalendarPage,
  },
  {
    path: 'filter-modal',
    loadChildren: () =>
      import('./components/filter-modal/filter-modal.module').then(
        (m) => m.FilterModalPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCalendarPageRoutingModule {}
