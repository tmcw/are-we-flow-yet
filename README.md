# are we flow yet

[![Circle CI](https://circleci.com/gh/tmcw/are-we-flow-yet/tree/master.svg?style=shield)](https://circleci.com/gh/tmcw/are-we-flow-yet/tree/master)
[![Greenkeeper badge](https://badges.greenkeeper.io/tmcw/are-we-flow-yet.svg)](https://greenkeeper.io/)

A CLI tool that scans a source directory and gives
statistics and a big list of files that are and
are not flow-annotated.

This works by scanning the first 100 characters of
each file and finding `/* @flow */` or `// @flow` 
comments.

## install

    npm install -g are-we-flow-yet

## usage

    are-we-flow-yet src

## example

```
~/src/app〉../are-we-flow-yet/are-we-flow-yet src
flow files 123
non flow files 200
src/account_components/apps/index.js
src/account_components/tokens/token_modal.js
src/admin_components/index.js
src/admin_components/orders/edit.js
...
```
