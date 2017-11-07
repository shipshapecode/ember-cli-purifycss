const BroccoliDebug = require('broccoli-debug');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const Plugin = require('broccoli-plugin');
const fs = require('fs');
const path = require('path');
const purify = require('purify-css');

class PurifyCSS extends Plugin {
  constructor(cssTree, name) {
    super([cssTree], { name: 'ember-cli-purifycss', needsCache: false });
    this.name = name;
  }

  async build() {
    const appCSS = fs.readFileSync(path.join(this.inputPaths[0], `${this.name}.css`), 'utf8');

    const testHtml = '<div class="foo">Foo</div><div class="bar">Bar</div>';

    // This works, but unfortunately just on a test html string
    console.log(purify(testHtml, appCSS));

    //TODO: prerender site, instead of using this testHtml
  }
}


module.exports = PurifyCSS;
