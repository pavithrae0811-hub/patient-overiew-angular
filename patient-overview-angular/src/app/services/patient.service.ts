import { Injectable } from '@angular/core';
import { PATIENTS } from '../data/patients.data';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  readonly totalPatients = PATIENTS.length;

  getPatients(): Patient[] {
    return PATIENTS;
  }

  getPatient(id: number): Patient | undefined {
    return PATIENTS.find(patient => patient.id === id);
  }
}
