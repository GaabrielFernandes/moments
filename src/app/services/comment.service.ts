import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Comments } from '../Comments';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseApiUrl  =  environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments/comments`

  constructor(private http: HttpClient) { }

  createComment(data: Comments, id: any):Observable<Response<Comments>>{
    this.apiUrl = `${this.baseApiUrl}api/moments/${id}/comments`
    return this.http.post<Response<Comments>>(this.apiUrl, data)
  }
}
