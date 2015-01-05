# grunt-patch-sourcemap v.0.1.1  
> Patches a sourcemap with the sources.

## Getting started  
This plugin requires Grunt `~0.4.0

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-copy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-copy');
```

I recommend to use [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) to load all grunt tasks without load them separately.

## Patch sourcemap task  
*Run this task with the `grunt patch-sourcemap` command.*

**The sourcemap will be patched inline. So copy your sourcemap before patching to keep it untouched.**

### Usage exmaple  
```js
'patch-sourcemap': {
	main: { src: ['build/main.js.map'] }
}
```

## Release History
  * 2015-01-05   v0.1.1   Initial commit