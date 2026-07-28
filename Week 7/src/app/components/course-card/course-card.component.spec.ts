import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';

// Hands-On 10, Task 1: component tests covering creation, @Input rendering,
// @Output events, and ngOnChanges.
describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  let store: MockStore;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [
        provideMockStore({
          initialState: { enrollment: { enrolledCourseIds: [] } }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the course name from @Input', () => {
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement as HTMLElement;
    expect(h3.textContent).toContain('Data Structures');
  });

  it('should emit enrollRequested with the course id when Enroll is clicked', () => {
    spyOn(component.enrollRequested, 'emit');
    const enrollButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement as HTMLButtonElement;
    enrollButton.click();
    fixture.detectChanges();
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  it('should dispatch enrollInCourse when not yet enrolled', () => {
    spyOn(store, 'dispatch');
    const enrollButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement as HTMLButtonElement;
    enrollButton.click();
    expect(store.dispatch).toHaveBeenCalled();
  });

  it('should log on ngOnChanges', () => {
    spyOn(console, 'log');
    component.ngOnChanges({
      course: {
        previousValue: mockCourse,
        currentValue: { ...mockCourse, name: 'Algorithms' },
        firstChange: false,
        isFirstChange: () => false
      }
    });
    expect(console.log).toHaveBeenCalled();
  });
});
