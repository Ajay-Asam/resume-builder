import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume } from '../../core/models/resume';
import { ResumeService } from '../../core/services/resume.service';
import { CommonModule } from '@angular/common';
import { TemplateTwoComponent } from '../templates/template-two/template-two.component';
import { TemplateOneComponent } from '../templates/template-one/template-one.component';
import { PdfService } from '../../core/services/pdf.service';

@Component({
  selector: 'app-builder',
  imports: [CommonModule,TemplateTwoComponent,TemplateOneComponent],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css'
})
export class BuilderComponent {
  resume$: Observable<Resume>;
  template = localStorage.getItem('template') || 'one';

  constructor(private resumeService: ResumeService, private pdfService: PdfService) {
    this.resume$ = this.resumeService.resume$;
  }

  updateName(value: string) {
    this.resumeService.updatePersonal({ name: value });
  }

  downloadPdf() {
    this.pdfService.download('resume-preview');
  }


  onTemplateChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.template = select.value;
  }
}
