import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ClaudeComponent } from './claude/claude.component';
import { AutomationComponent } from './automation/automation.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { PersonalFinanceManagerComponent } from './feature/personal-finance-manager/personal-finance-manager.component';
import { TaskManagerComponent } from './feature/task-manager/task-manager.component';
import { HealthFitnessTrackerComponent } from './feature/health-fitness-tracker/health-fitness-tracker.component';
import { SmartHomeManagementComponent } from './feature/smart-home-management/smart-home-management.component';
import { ELearningComponent } from './feature/e-learning/e-learning.component';
import { SocialEngagementComponent } from './feature/social-engagement/social-engagement.component';
import { FileManagementComponent } from './feature/file-management/file-management.component';
import { HomeSecurityComponent } from './feature/home-security/home-security.component';
import { TravelPlannerComponent } from './feature/travel-planner/travel-planner.component';
import { NicheCommunityComponent } from './feature/niche-community/niche-community.component';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app.routing';
import { ApiService } from './app-service.service';
import { SessionService } from './session.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    ClaudeComponent,
    AutomationComponent,
    AboutComponent,
    FeatureComponent,
    PersonalFinanceManagerComponent,
    TaskManagerComponent,
    HealthFitnessTrackerComponent,
    SmartHomeManagementComponent,
    ELearningComponent,
    SocialEngagementComponent,
    FileManagementComponent,
    HomeSecurityComponent,
    TravelPlannerComponent,
    NicheCommunityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    ApiService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
