import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {

  downloadCV(): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'assets/abdulrahim_resume_sa_de6.pdf');
    link.setAttribute('download', `abdulrahim_shaikh_resume.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  contactInfo(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
