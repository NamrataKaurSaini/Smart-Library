import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../Member Plan/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RegisterComponent } from 'app/signUp/register/register.component';
import { LoginComponent } from 'app/signUp/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'Books',          component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'MemberPlan',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'login',          component: LoginComponent },
];
