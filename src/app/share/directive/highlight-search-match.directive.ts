import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlightSearchMatch]',
})
export class HighlightSearchMatchDirective {
  @Input() appHighlightSearchMatch: string = '';
  @Input() searchQuery = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appHighlightSearchMatch'] && changes['searchQuery']) {
      this.highlightText();
    }
  }

  private highlightText(): void {
    let textToApply;
    if (this.searchQuery) {
      const regex = new RegExp(`(${this.searchQuery})`, 'gi');
      textToApply = this.appHighlightSearchMatch.replace(
        regex,
        `<span class="highlight">$1</span>`
      );
    }

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      this.searchQuery ? textToApply : this.appHighlightSearchMatch
    );
  }
}
