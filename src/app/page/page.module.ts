import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { TagModule } from 'primeng/tag';
import { SkillsComponent } from './skills/skills.component';
import { DropdownModule } from 'primeng/dropdown';
import { ProjectsComponent } from './projects/projects.component';
import { PublicationsComponent } from './publications/publications.component';
import { CarouselModule } from 'primeng/carousel';
import { ContactComponent } from './contact/contact.component';
import { InputTextModule } from 'primeng/inputtext';
import {DialogModule} from "primeng/dialog";
import {AvatarModule} from "primeng/avatar";

@NgModule({
  declarations: [
    PageComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    PublicationsComponent,
    ContactComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonModule,
    DividerModule,
    RippleModule,
    SidebarModule,
    AnimateOnScrollModule,
    TagModule,
    DropdownModule,
    CarouselModule,
    InputTextModule,
    DialogModule,
    AvatarModule
  ],
  exports: [
    PageComponent,
  ]
})
export class PageModule { }
