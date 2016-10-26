# brkstn-gulp-dev

A starter boilerplate for development with gulp.  The node_modules directory can get very big, it's best to ignore that directory in your project repository.

## Usage

This is boilerplate!! You probably don't need to clone the repository, it's got a lot of testing files that are useless to your project so instead use this command to just copy the package.json and gulpfile.js into your project.


__Without the default gulpconfig__
```bash
git archive --remote=git@bitbucket.org:brkstn/brkstn-gulp-dev.git HEAD: package.json gulpfile.js | tar -x
```

__With the default gulpconfig__
```bash
git archive --remote=git@bitbucket.org:brkstn/brkstn-gulp-dev.git HEAD: package.json gulpfile.js gulpconfig.js | tar -x
```

Once you have the package.json you can install the node modules

```
$ npm install
```

## Additional configuration and customizing

#### Gulpconfig

The gulpfile.js can be edited directly, but it's usually better to just add a file named gulpconfig.js and add the paths and src files your project is using.

```js
module.exports = {
    js: {
        entrypoint: 'app.js',
        src: 'resources/assets/js/',
        dest: 'httpdocs/assets/js/'
    },
    css: {
        entrypoint: 'app.css',
        src: 'resources/assets/css/',
        dest: 'httpdocs/assets/css/'
    },
    files: {
        src: [
            'resources/views/**/*.+(php|html|md)',
            'app/**/*.php'
        ]
    },
    copy: [
        {
            src: [
                'resources/assets/img/**/*.+(jpg|jpeg|gif|png|svg)'
            ],
            dest: 'httpdocs/assets/img/'
        }
    ],
    autoprefix: [
        'last 2 versions',
        'ie >= 8',
        'ios > 6',
        'safari >= 5',
        'android >= 4'
    ]
}
```

#### ENV and BROWSERSYNC_PROXY

Browsersync works best if the proxy value is set correctly.  Create a .env file if is it doesn't already exist and add. What's a proxy?  Look it up, just know it should point to your development domain.

```
BROWSERSYNC_PROXY=example.dev
```

#### Adding modules

Use ``npm install {module_name} --save`` to add additional node modules.  Don't edit your package file directly.

## Development

Use gulps watch task to keep an eye on your projects changes during development.

```
$ gulp watch
```

*The default gulp task includes 'watch'*

## Browserify

**I's not recommended that you use this on new projects until you are familiar with the concepts of *requires* and *module.exports*.**

The browserify branch is designed to allow for the use of requires in your JS files.

Currently this is intended to be used in your main JS file in the root of js/src/

example:

```javascript
require(./_lib/lib);
```

*note the file path's need to start with ./ in your requires, and they do not have file extensions.*

You can also use this to require libraries from npm.

Install an npm package

```
npm install classlist-polyfill --save-dev
```

In you JS file:

```javascript
require('classlist-polyfill');
```

## Moving to postcss-cssnext

gulp-cssnext has been deprecated and moved to a postcss plugin.  Very little has changed in terms of workflow.  The same variables and rules will continue to apply.  The main issue is that __``@import``__ statements will need to be first in your files or you will get a warning.  This means including them before your variable's, media queries and mixins.  Seem counter intuitive, yep! Your rules will still apply to those imports, but it recommended that you move your variables, media queries, mixins etc. to a file called ``\_vars.css`` and import it right after your external __``@import``__, node modules and libraries that are independent of those variables.

```css
/*!
 * Stylesheet (css/src/style.css)
 */

/*External Imports*/
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,400italic);

/*Node Modules*/
@import "normalize-css";

/*Libraries*/
@import "./_lib/lib.css";

/*Local*/
@import "./_vars.css";
@import "./_main.css";
```

```css
/*!
 * _vars.css (css/src/_vars.css)
 */

 :root {
   --fontSize: 1rem;
   --mainColor: #12345678;
   --highlightColor: hwb(190, 35%, 20%);
 }

 @custom-media --view-xlarge ( width >= 1400px );
 @custom-media --view-large ( width >= 1100px );


 @custom-media --view-medium ( width <= 960px );
 @custom-media --view-tablet ( width <= 768px );
 @custom-media --view-small ( width <= 699px );
 @custom-media --view-phone ( width <= 599px );
```

### Stylesheets best practices

* The root style.css should only contain comments and ``@import`` statements.

* Color and font variables should be given generic or abstract names (colors are always subject to change to values that don't have any relation to their variable name): ex:  

``` css  

/*Good*/
--primaryColor
--secondaryColor
--altColor
--highlightColor

/*Bad*/
--blueColor
--lightGreenColor
```

The exceptions to the color rule are blacks, whites and greys, which should be reserved for setting defaults or for the purposes of maintaining contrast of text (--nearWhite over background images).  They should be used sparingly.  

``` css  

/*Good*/
--nearBlack
--lightBlack

--nearWhite
--offWhite

--grey
--lightGrey
--darkGrey

/*Bad*/
--black50: /* 50% black */
--grey20: /* 20% alpha black */
```

Fonts:  

``` css  

/*Good*/
--primaryFont
--secondaryFont

/*Bad*/
--paragraphFont
--headerFont
```

* A better use of the ``color()`` method.  When writing abstract stylesheets, the ``color()`` method is better used outside of a variable.  Instead of creating one variable and then another using color(), simply use ``color()`` throughout your stylesheet.  The color function is best reserved as an interface feature in psuedo classes, like :hover, :focus and :action.  As it can often be disastrous when used to generate background colors from a color variable for a large container.  

``` css  

/*Good*/
:root{
    --primaryColor: #830800;
}

a{
    color: var(--primaryColor);
    transition: color 200ms linear;
}

a:hover{
    color: color(var(--primaryColor), alpha(50%));
}

/*Bad*/
:root{
    --primaryColor: #830800;
    --hoverColor: color(var(--primaryColor), alpha(50%));
}

a{
    color: var(--primaryColor);
    transition: color 200ms linear;
}

a:hover{
    color: var(--hoverColor);
}
```