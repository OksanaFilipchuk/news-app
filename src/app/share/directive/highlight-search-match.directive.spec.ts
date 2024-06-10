import { HighlightSearchMatchDirective } from './highlight-search-match.directive';
import { Component, DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<p
    appHighlightSearchMatch
    [appHighlightSearchMatch]="text"
    [searchQuery]="query"
  ></p>`,
})
class TestComponent {
  text = 'Some text for testing';
  query = 'text';
}

fdescribe('HighlightSearchMatchDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let debugEl: DebugElement;
  let directive: HighlightSearchMatchDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightSearchMatchDirective],
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.css('p'));
    directive = debugEl.injector.get(HighlightSearchMatchDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should highlight the search query in the text', () => {
    component.text = 'New text about...';
    component.query = 'New text';
    fixture.detectChanges();
    const innerHTML = debugEl.nativeElement.innerHTML;
    expect(innerHTML).toContain('<span class="highlight">New text</span>');
  });

  it('should not highlight anything if the search query is empty', () => {
    component.query = '';
    component.text = 'New search query';
    fixture.detectChanges();
    const innerHTML = debugEl.nativeElement.innerHTML;
    expect(innerHTML).toBe(component.text);
  });

  it('should not alter the text if the search query is not found', () => {
    component.text = 'testing directive';
    component.query = 'Pipe';
    fixture.detectChanges();
    const innerHTML = debugEl.nativeElement.innerHTML;
    expect(innerHTML).toBe(component.text);
  });
});
