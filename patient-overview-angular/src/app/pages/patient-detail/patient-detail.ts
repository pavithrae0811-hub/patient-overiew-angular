import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-detail',
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './patient-detail.html',
  styleUrl: './patient-detail.css'
})
export class PatientDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly patientService = inject(PatientService);

  readonly patient: Patient | undefined = this.patientService.getPatient(
    Number(this.route.snapshot.paramMap.get('id'))
  );

  backToPatients(): void {
    this.router.navigate(['/patients']);
  }
}