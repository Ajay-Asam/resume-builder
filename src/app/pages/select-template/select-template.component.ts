import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResumeService } from '../../core/services/resume.service';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-select-template',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './select-template.component.html',
  styleUrl: './select-template.component.css'
})
export class SelectTemplateComponent {

  resumeForm: FormGroup;
  fieldcheck!:boolean;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private resumeService: ResumeService
  ) {
    this.resumeForm = this.fb.group({
      template: ['one'],

      personal: this.fb.group({
        name: ['', Validators.required,Validators.minLength(3)],
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
        summary: ['']
      }),

      experience: this.fb.array([
        this.fb.group({
          company: ['', Validators.required],
          role: ['', Validators.required],
          duration: [''],
          description: ['']
        })
      ]),

      education: this.fb.array([
        this.fb.group({
          institute: ['', Validators.required],
          degree: [''],
          year: ['']
        })
      ]),

      skills: this.fb.array([]),
      skillInput: ['']
    });
  }


  get skills(): FormArray {
    return this.resumeForm.get('skills') as FormArray;
  }


  addSkill() {
    const value = this.resumeForm.get('skillInput')?.value;
    if (value?.trim()) {
      this.skills.push(this.fb.control(value.trim()));
      this.resumeForm.get('skillInput')?.reset();
    }
  }

  isInvalid(path: string) {
    const control = this.resumeForm.get(path);
    return control?.invalid && (control?.touched || control?.dirty);
  }

  submit() {

    if(this.resumeForm.invalid){
        this.fieldcheck = true;
    }
    if (this.resumeForm.invalid) return;

    const formValue = this.resumeForm.value;

    localStorage.setItem('template', formValue.template);

    this.resumeService.setResume({
      personal: formValue.personal,
      experience: formValue.experience,
      education: formValue.education,
      skills: formValue.skills
    });

    this.router.navigate(['/builder']);
  }



}
