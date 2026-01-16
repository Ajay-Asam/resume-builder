import { Component, Input } from '@angular/core';
import { Resume } from '../../../core/models/resume';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-one.component.html',
  styleUrl: './template-one.component.css'
})
export class TemplateOneComponent {
  @Input() resume!: Resume;
}
