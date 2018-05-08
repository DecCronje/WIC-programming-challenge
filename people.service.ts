import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { People } from './people';
import { PEOPLE_LIST } from './Mock-people';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable
({
  providedIn: 'root'
})
export class PeopleService 
{

	private peopleUrl = 'https://campusconnect.mywic.ca/api/test/studenttest';

	constructor(private http: HttpClient) { }

	getPeople():  Observable<People[]> 
	{
		return this.http.get<People[]>(this.peopleUrl)
	}
  
}
