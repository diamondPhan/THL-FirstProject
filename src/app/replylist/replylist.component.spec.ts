import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplylistComponent } from './replylist.component';

describe('ReplylistComponent', () => {
  let component: ReplylistComponent;
  let fixture: ComponentFixture<ReplylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
