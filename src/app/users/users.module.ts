import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];

@NgModule({
  declarations: [
    UserComponent,
    UserAddComponent,
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes) // 加入这行
  ]
})
export class UsersModule {}
