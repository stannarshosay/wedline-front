import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FullProfileComponent } from './components/full-profile/full-profile.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileSettingComponent } from './components/profile-setting/profile-setting.component';
import { MyInterestComponent } from './components/my-interest/my-interest.component';
import { MyShortlistComponent } from './components/my-shortlist/my-shortlist.component';
import { ChatComponent } from './components/chat/chat.component';
import { IgnoredListComponent } from './components/ignored-list/ignored-list.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { ProfileStarterComponent } from './components/profile-starter/profile-starter.component';
import { PlansComponent } from './components/plans/plans.component';
import { PublicViewComponent } from './components/public-view/public-view.component';
import { SearchComponent } from './components/search/search.component';
import { MyLikesComponent } from './components/my-likes/my-likes.component';
import { PrivacySettingsComponent } from './components/privacy-settings/privacy-settings.component';
import { SuccessStoriesComponent } from './components/success-stories/success-stories.component';
import { SuccessStoryComponent } from './components/success-story/success-story.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostSuccessStoryComponent } from './components/post-success-story/post-success-story.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ServicesComponent } from './components/services/services.component';
import { FreeMembershipComponent } from './components/free-membership/free-membership.component';
import { ReferenceOrBackupNotForProductionComponent } from './components/reference-or-backup-not-for-production/reference-or-backup-not-for-production.component';
import { PaidPlanComponent } from './components/paid-plan/paid-plan.component';
import { PersonalizedPlanComponent } from './components/personalized-plan/personalized-plan.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { FaqComponent } from './components/faq/faq.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

const routes: Routes = [
  //{path:"ref",component: ReferenceOrBackupNotForProductionComponent}, //not needed remove this routing
  {path:"home",component: HomeComponent},
  {path:"",redirectTo: "home", pathMatch:"full"},
  {path:"about",component: AboutComponent},
  {path:"register",component: RegisterComponent,canActivate:[LoginGuard]},
  {path:"login",component: LoginComponent,canActivate:[LoginGuard]},
  {path:"full-profile/:memberId",component: FullProfileComponent,canActivate:[AuthGuard]},
  {path:"public-view",component: PublicViewComponent,canActivate:[AuthGuard]},
  {path:"search",component: SearchComponent,canActivate:[AuthGuard]},
  {path:"success-stories",component: SuccessStoriesComponent},
  {path:"success-story/:id",component: SuccessStoryComponent},
  {path:"services",component: ServicesComponent},
  {path:"post-success-story",component: PostSuccessStoryComponent,canActivate:[AuthGuard]},
  {path:"change-password",component: ChangePasswordComponent,canActivate:[AuthGuard]},
  {path:"contact",component: ContactComponent},
  {path:"dashboard",component: DashboardComponent,canActivate:[AuthGuard]},
  {path:"profile-setting",component: ProfileSettingComponent,canActivate:[AuthGuard]},
  {path:"my-interest",component: MyInterestComponent,canActivate:[AuthGuard]},
  {path:"profile-starter",component: ProfileStarterComponent,canActivate:[AuthGuard]},
  {path:"plans",component: PlansComponent},
  {path:"free-plan",component: FreeMembershipComponent},
  {path:"paid-plan",component: PaidPlanComponent},
  {path:"privacy-policy",component:PrivacyPolicyComponent},
  {path:"terms-and-conditions",component: TermsConditionsComponent},
  {path:"faq",component: FaqComponent},
  {path:"personalized-plan",component: PersonalizedPlanComponent},
  {path:"my-shortlist",component: MyShortlistComponent,canActivate:[AuthGuard]},
  {path:"my-likes",component: MyLikesComponent,canActivate:[AuthGuard]},
  {path:"chat",component: ChatComponent,canActivate:[AuthGuard]},
  {path:"notifications",component: NotificationsComponent,canActivate:[AuthGuard]},
  {path:"ignored-list",component: IgnoredListComponent,canActivate:[AuthGuard]},
  {path:"privacy-settings",component: PrivacySettingsComponent,canActivate:[AuthGuard]},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
