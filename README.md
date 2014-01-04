# gitignore files for your project from gitignore.io
> files for your project from gitignore.io

Just do a `npm install gignore` and then in your code :

```javascript
var gignore = require('gignore');
gignore("~/labs","node");
```
`gignore` take two arguments an optional `path` and `type` and creates a `.gitignore` file for the given path or the current dir, incase of path is not provided and that file will contain the required setting for the given type.

__List of types:__

```
actionscript,android,appceleratortitanium,autotools,bancha,c++,c,cfwheels,cmake,cakephp,clojure,codeigniter,concrete5,compass,coq,dart,delphi,django,eagle,drupal,erlang,finale,expressionengine,forcedotcom,fuelphp,gwt,go,grails,haskell,java,jboss,jekyll,joomla,jython,kohana,latex,leiningen,lemonstand,lilypond,magento,lithium,maven,node,ocaml,objective-c,opa,oracleforms,perl,playframework,plone,python,qooxdoo,qt,r,rails,rhodesrhomobile,ruby,scala,sdcc,seamgen,sketchup,sugarcrm,symfony,symfony2,symphonycms,target3001,tasm,textpattern,turbogears2,typo3,unity,visualstudio,waf,wordpress,yii,zendframework,gcov,nanoc,opencart,cloud9,codekit,dotsettings,dreamweaver,elasticbeanstalk,elixir,ensime,freepascal,gradle,joe,justcode,komodoedit,laravel,lazarus,meteor,openfoam,prestashop,senchatouch,silverstripe,tarmainstallmate,vvvv,vagrant,wakanda,xamarinstudio,basercms,ph7cms,archives,bower,cvs,eclipse,emacs,espresso,flexbuilder,intellij,linux,matlab,mercurial,modelsim,monodevelop,netbeans,osx,phpstorm,pycharm,quartus2,redcar,rubymine,sass,sbt,svn,sublimetext,tags,textmate,virtualenv,xcode,windows,xilinxise,vim
```
