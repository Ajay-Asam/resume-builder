import { Component, Input } from '@angular/core';
import { Resume } from '../../../core/models/resume';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-two.component.html',
  styleUrl: './template-two.component.css'
})
export class TemplateTwoComponent {
  @Input() resume!: Resume;
}
