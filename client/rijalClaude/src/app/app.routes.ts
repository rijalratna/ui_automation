// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { SignupComponent } from './signup/signup.component';
// import { ClaudeComponent } from './claude/claude.component';
// import { AutomationComponent } from './automation/automation.component';
// import { AboutComponent } from './about/about.component';
// import { FeatureComponent } from './feature/feature.component';
// import { PersonalFinanceManagerComponent } from './feature/personal-finance-manager/personal-finance-manager.component';
// import { TaskManagerComponent } from './feature/task-manager/task-manager.component';
// import { HealthFitnessTrackerComponent } from './feature/health-fitness-tracker/health-fitness-tracker.component';
// import { SmartHomeManagementComponent } from './feature/smart-home-management/smart-home-management.component';
// import { ELearningComponent } from './feature/e-learning/e-learning.component';
// import { SocialEngagementComponent } from './feature/social-engagement/social-engagement.component';
// import { FileManagementComponent } from './feature/file-management/file-management.component';
// import { HomeSecurityComponent } from './feature/home-security/home-security.component';
// import { TravelPlannerComponent } from './feature/travel-planner/travel-planner.component';
// import { NicheCommunityComponent } from './feature/niche-community/niche-community.component';
// import { AuthGuard } from './guards/auth.guard';

// export const routes: Routes = [
//   { path: 'signup', component: SignupComponent },
//   { path: 'home', component: HomeComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'claude', component: ClaudeComponent },
//   { path: 'automation', component: AutomationComponent, canActivate: [AuthGuard] },
//   { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
//   { path: 'feature', component: FeatureComponent, canActivate: [AuthGuard], children: [
//       { path: 'personal-finance-manager', component: PersonalFinanceManagerComponent },
//       { path: 'task-manager', component: TaskManagerComponent },
//       { path: 'health-fitness-tracker', component: HealthFitnessTrackerComponent },
//       { path: 'smart-home-management', component: SmartHomeManagementComponent },
//       { path: 'e-learning', component: ELearningComponent },
//       { path: 'social-engagement', component: SocialEngagementComponent },
//       { path: 'file-management', component: FileManagementComponent },
//       { path: 'home-security', component: HomeSecurityComponent },
//       { path: 'travel-planner', component: TravelPlannerComponent },
//       { path: 'niche-community', component: NicheCommunityComponent },
//     ]
//   },
//   { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page (optional)
// ];
