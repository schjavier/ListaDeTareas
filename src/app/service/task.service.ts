import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/Task';
import { TASK } from 'src/app/mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  
  constructor(private http:HttpClient) {  }

  getTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)

  }
}
