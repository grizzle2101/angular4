/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodosComponent } from './todos.component';
//Add Imports
import {TodoService} from './todo.service';
import {HttpModule} from '@angular/http';
import { Observable } from 'rxjs';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  //Task 1 - Add Dependency:
  //Task 2 - Import Http Module:
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ TodosComponent ],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Task 2 - Modify Tests:
  //Integration Test 1 - ngOnInit populated the component properly.
  it('Should load todos from the server', fakeAsync(() => {
    let todoList = [1, 2, 3];
    let service = TestBed.get(TodoService);

    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve(todoList));
    fixture.detectChanges();

    tick();
    expect(component.todos).toBe(todoList);
  }));
});
