import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { StepsModule } from 'primeng/steps';
import { IntroductionComponent } from './introduction/introduction.component';
import { ExperienceComponent } from './experience/experience.component';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { SkillsComponent } from './skills/skills.component';
import { ChipModule } from 'primeng/chip';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './education/education.component';
import { PublicationsComponent } from './publications/publications.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    PageComponent,
    IntroductionComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    PublicationsComponent,
    ProjectsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    DividerModule,
    StepsModule,
    RippleModule,
    AvatarModule,
    BadgeModule,
    ChipModule,
    RatingModule,
  ],
  exports: [
    PageComponent,
  ]
})
export class PageModule { }
