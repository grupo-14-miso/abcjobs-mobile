import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Candidate,Company,Oferta } from 'src/app/internoabc/model/preentrevista';


@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  private apiUrl: string = environment.baseUrl + 'interviews';


  constructor(private http: HttpClient) { }

  getInterviews(): Observable<Interview[]> {
    return this.http.get<Interview[]>(environment.urlEntrevistas).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  savePreCandidate(preCandidate: InterviewPreCandidate): Observable<Notification> {
    return this.http.post<Notification>(environment.urlEntrevistas+'/pre-candidate', preCandidate).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getCandidatesByOffer(offer_id: number){
    return this.http.get<SelectCandidate[]>(environment.urlEntrevistas+"/offer/"+offer_id+"/pre").pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  createInterview(interview: any): Observable<Notification> {
    return this.http.post<Notification>(environment.urlEntrevistas, interview).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getInterviewsByCompany(company_id: number): Observable<Interview[]> {
    return this.http.get<Interview[]>(environment.urlEntrevistas+"?company="+company_id).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

  getInterviewsByCandidate(candidate_id: number): Observable<Interview[]> {
    return this.http.get<Interview[]>(environment.urlEntrevistas+"?candidate="+candidate_id).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }


  postInterviewsResult(interview_id: number, resultado: Result)  {
    return this.http.post(environment.urlEntrevistas+"/"+interview_id,resultado).pipe(
      catchError(err=> throwError(() => new Error('error en el servicio')))
    )
  }

}


export interface Result {
  result: string
}

export interface SelectCandidate {
 key: Key,
    candidate: Candidate,
     pre_interview: InterviewPreCandidate,

}

export interface Key {
   kind: string,
   id: number,

}


export interface InterviewPreCandidate {
  id_company: string;
  id_offer: string;
  id_candidate: string;


}


export interface Interview {
  id: number;
  id_company: string;
  id_offer: string;
  date: string;
  description: string;
  link: string;
  result: string;
  candidates: string[];
  candidates_details: CandidateDetails[];


}

export interface CandidateDetails {
  candidate: Candidate;
  company: Company;
  offer: Oferta;


}
