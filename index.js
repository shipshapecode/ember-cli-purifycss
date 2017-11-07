/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const purify = require('purify-css');
var BroccoliDebug = require('broccoli-debug');

module.exports = {
  name: 'ember-cli-purifycss',
  postprocessTree(type, tree) {
    if (type !== 'all') {
      return tree;
    }

    const { name } = this._findHost();

    return new BroccoliDebug(new Funnel(tree, {
      srcDir: 'assets',
      include: [`${name}.css`]
    }), `ember-cli-purifycss`);


    // return mergeTrees([
    //     tree,
    //     purify(/*css and template tree output needed here*/)
    //   ],
    //   {
    //     overwrite: true
    //   });
  }
};
