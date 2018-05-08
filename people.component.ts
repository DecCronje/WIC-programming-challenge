import { Component, OnInit } from '@angular/core';
import { people } from '../people';
import { PeopleService } from '../people.service';

@Component
({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit 
{	

	selectedPerson: People;

	PEOPLE_LIST: people[];
	
	constructor(private peopleService: PeopleService) 
	{ }
	
	ngOnInit() 
	{
		this.getPeople();
	}

	onSelect(people: People): void 
	{
		this.selectedPerson = people;
	}
	
	getPeople(): void 
	{
		this.peopleService.getPeople().subscribe(people_list => this.people_list = people_list);
	}	

}
