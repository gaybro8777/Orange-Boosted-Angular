import { Component } from '@angular/core';

@Component({
  selector: 'doc-o-switch',
  template: `
    <docs-wrapper component="Switch">
      <p class="h6 text-primary">Warning ! : No longer supported, available under version 5.2.0</p>
      <h3>Demo</h3>
      <img src="../../assets/gif/switch.gif" alt="this is a o-switch component gif" width=240/>
      <h3>Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOSwitchComponent {
  public docContent = require('html-loader!markdown-loader!./o-switch.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/o-switch.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/o-switch.component.ts')
  };
}
