/* eslint-env node */
'use strict';

const BroccoliDebug = require('broccoli-debug');
const Funnel = require('broccoli-funnel');
const PurifyCSS = require('./lib/purify');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-purifycss',
  postprocessTree(type, tree) {
    if (type !== 'all') {
      return tree;
    }

    const { name } = this._findHost();
    const cssTree = new Funnel(tree, {
      srcDir: 'assets',
      include: [`${name}.css`, 'vendor.css']
    });

    return new BroccoliDebug(new mergeTrees([
        tree,
        new PurifyCSS(cssTree, name)
      ],
      {
        overwrite: true
      }), `ember-cli-purifycss`);
  }
};
