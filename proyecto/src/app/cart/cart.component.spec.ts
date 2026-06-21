/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Cartcomponent } from './cart.component';

describe('CartComponent', () => {
  let component: Cartcomponent;
  let fixture: ComponentFixture<Cartcomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cartcomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cartcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
