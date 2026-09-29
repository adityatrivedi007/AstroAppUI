import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintpageComponent } from './printpage.component';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms';

describe('PrintpageComponent', () => {
  let component: PrintpageComponent;
  let fixture: ComponentFixture<PrintpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintpageComponent, HomeComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PrintpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
