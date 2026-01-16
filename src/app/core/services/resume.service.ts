import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Resume } from '../models/resume';


const initialResume: Resume = {
    personal: {
        name: '',
        email: '',
        phone: '',
        summary: ''
    },
    experience: [],
    education: [],
    skills: []
};

@Injectable({ providedIn: 'root' })
export class ResumeService {

    // BehaviorSubject holds the CURRENT resume state
    // It needs an initial value
    // Anyone subscribing will immediately get this value
    private resumeSubject = new BehaviorSubject<Resume>(initialResume);
  
    // Expose resume as an Observable (read-only for components)
    // Components can subscribe but CANNOT modify it directly
    resume$ = this.resumeSubject.asObservable();
  
    //  Update ONLY the personal section of resume
    updatePersonal(data: Partial<Resume['personal']>) {
  
      //  Get the current resume value from BehaviorSubject
      const current = this.resumeSubject.value;
  
      //  Emit a NEW resume object (immutably)
      this.resumeSubject.next({
        ...current, // keep experience & education unchanged
  
        //  Update personal by merging old + new values
        personal: {
          ...current.personal, // existing personal data
          ...data              // overwrite only fields passed
        }
      });
    }
    setResume(resume: Resume) {
        this.resumeSubject.next(resume);
      }
    //Get current resume snapshot (without subscribing)
    getResume() {
      return this.resumeSubject.value;
    }
  }
  


// NgZone
// changedetection
// meerge map / concatmap function rxjs concepts
// onpush
// reactive forms
// routing /guards /lazy loading

// ngif deprec