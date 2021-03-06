import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'doc-o-scroll-top',
  styles: [`
    .fake-block { height: 400rem; }
  `],
  template: `
    <docs-wrapper component="Scroll Top">
      <h3>Demo</h3>
      <p>Scroll down this page to see a nice example.</p>
      <h3>Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
      <div class="fake-block"></div>
    </docs-wrapper>
  `
})
export class DocOScrollTopComponent {
  public docContent = require('html-loader!markdown-loader!./o-scroll-top.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/o-scroll-top.component.html')
  };
}
