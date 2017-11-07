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
    console.log(this.inputPaths);

    var appCSS = fs.readFileSync(path.join(this.inputPaths[0], `${this.name}.css`), 'utf8');
    // var vendorCSS = fs.readFileSync(path.join(this.inputPaths[0], 'vendor.css'), 'utf8');
    // console.log(appCSS);
    // console.log(vendorCSS);
    // var outputBuffer = someCompiler(inputBuffer);
    // // Write to 'bar.txt' in this node's output
    // fs.writeFileSync(path.join(this.outputPath, 'bar.txt'), outputBuffer);

    const testHtml = '<div class="foo">Foo</div><div class="bar">Bar</div>';

    console.log(purify(testHtml, appCSS));

    // return mergeTrees([
    //     tree,
    //     new PurifyCSS(tree, name)
    //   ],
    //   {
    //     overwrite: true
    //   });
  }
}


module.exports = PurifyCSS;
