import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  events: Object[];
  eds: Object[];
  phoneCopyItems: MenuItem[] | undefined
  emailCopyItems: MenuItem[] | undefined
  jwtLinkItems: MenuItem[] | undefined

  constructor(private messageService: MessageService) {
    this.eds = [
      {
        status: 'MIT World Peace University, Pune',
        date: 'July 2019 to November 2023',
        icon: 'assets/mit.jpeg',
      }
    ];
    this.events = [
      {
        status: 'Software Engineer / Data Analyst',
        company: ' APSLOG Tech - July 2023 to present',
        date: 'July 2023 to present',
        icon: 'assets/apslog.jpeg',
        points: [ ]
      },
      {
        status: 'Project Engineer',
        company: 'Centre for Development of Advanced Computing (C-DAC) - January 2023 to July 2023',
        date: 'January 2023 to July 2023',
        icon: 'assets/cdac.jpeg',
        points: [
          "Designed and developed a web application for predicting traffic intensity and recommending traffic congestion treatment strategies",
          "Mastered Angular, Spring Boot, Python Flask, and Full Stack Development.",
          "Utilized Git for collaborative development and managing codebase changes.",
          "Developed server-side skills including routing, middleware, and authentication.",
          "Employed Highcharts, Echarts, and Tableau for data visualization on the web app.",
          "Acquired project management skills through senior mentorship.",
          "Conducted software testing and managed code effectively during development.",
          "Project Link: https://github.com/sgtPepper109/2023_MIT_PROJECT",
        ]
      },
      {
        status: 'Lead Research and Development Engineer',
        company: 'Centre for Development of Advanced Computing (C-DAC) - July 2022 to January 2023',
        date: 'July 2022 to January 2023',
        icon: 'assets/cdac.jpeg',
        points: [
          "‘Roads extraction from Satellite Images using Deep Learning Techniques on HPC Platform’",
          "Led a project utilizing deep learning and HPC to extract roads from satellite images.",
          "Supervised interns and collaborated with CDAC PARAM supercomputer.",
          "Created a roads dataset and authored a research paper on road extraction algorithms.",
          "Achieved a 97% accuracy rate in road extraction.",
          "Project Link: https://github.com/sgtPepper109/finalProject",
        ]
      },
      {
        status: 'Virtual Intern',
        company: 'JPMorgan Chase & Co.',
        date: 'July 2021 to September 2021',
        icon: 'assets/jpmorganchaseandco.jpeg',
        points: [
          "Interface with stock price data feed and conducted competitor analysis",
          "Display data visually for traders using JPMorgan Chase frameworks and tools",
          "Angular, TypeScript, HTML, CSS, Git, Python, Flask, MongoDB, Data Analysis, etc.",
        ]
      },
    ];
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/abdulrahim_resume_se.pdf');
    link.setAttribute('download', `abdulrahim_shaikh_resume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  ngOnInit(): void {
    this.phoneCopyItems = [
      {
        label: 'Phone Number',
        items: [
          {
            label: '+966594951370',
            icon: 'pi pi-copy',
            command: () => {
              navigator.clipboard.writeText('+966594951370')
              this.messageService.add({ severity: 'success', summary: 'Copied', detail: 'Phone number' });
            }
          }
        ]
      }
    ];
    this.emailCopyItems = [
      {
        label: 'Email Address',
        items: [
          {
            label: 'abdul.rahim.shaikh.sa@gmail.com',
            icon: 'pi pi-copy',
            command: () => {
              navigator.clipboard.writeText('abdul.rahim.shaikh.sa@gmail.com')
              this.messageService.add({ severity: 'success', summary: 'Copied', detail: 'Email Address' });
            }
          }
        ]
      }
    ];
    this.jwtLinkItems = [
      {
        label: 'Angular - Spring Boot JWT',
        items: [
          {
            label: 'https://github.com/sgtPepper109/angular_jwt_auth_ui.git',
            icon: 'pi pi-external-link',
            command: () => {
              window.location.href = 'https://github.com/sgtPepper109/angular_jwt_auth_ui.git'
            }
          },
          {
            label: 'https://github.com/sgtPepper109/spring_auth_server.git',
            icon: 'pi pi-external-link',
            command: () => {
              window.location.href = 'https://github.com/sgtPepper109/spring_auth_server.git'
            }
          }
        ]
      },
      {
        label: 'Angular - ASP .NET Core JWT',
        items: [
          {
            label: 'https://github.com/sgtPepper109/angular_auth_ui.git',
            icon: 'pi pi-external-link',
            command: () => {
              window.location.href = 'https://github.com/sgtPepper109/angular_auth_ui.git'
            }
          },
          {
            label: 'https://github.com/sgtPepper109/aspnet_auth_api.git',
            icon: 'pi pi-external-link',
            command: () => {
              window.location.href = 'https://github.com/sgtPepper109/aspnet_auth_api.git'
            }
          }
        ]
      }
    ]
  }

}
