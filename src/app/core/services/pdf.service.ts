import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Injectable({ providedIn: 'root' })
export class PdfService {
  async download(elementId: string) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const img = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const width = 210;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(img, 'PNG', 0, 0, width, height);
    pdf.save('resume.pdf');
  }
}
