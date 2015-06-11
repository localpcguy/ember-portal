define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,r,n){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),r["default"](d,n["default"].modulePrefix),e["default"]=d}),define("dummy/components/ember-wormhole",["exports","ember-wormhole/components/ember-wormhole"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/portal-content",["exports","ember-portal/components/portal-content"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/portal-for",["exports","ember-portal/components/portal-for"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/application",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({showingHeader:!0,showingFooter:!0,actions:{toggleHeader:function(){this.toggleProperty("showingHeader")},toggleFooter:function(){this.toggleProperty("showingFooter")}}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/example",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller.extend({actions:{clicked:function(){window.alert("clicked")}}})}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var r=a["default"].String.classify,n=!1;e["default"]={name:"App Version",initialize:function(e,d){if(!n){var i=r(d.toString());a["default"].libraries.register(i,t["default"].APP.version),n=!0}}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function r(e,r){var n=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[n]&&(window[n]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var r=t["default"].Router.extend({location:a["default"].locationType});r.map(function(){this.route("example",{path:"/"},function(){this.route("foo"),this.route("bar",function(){this.route("baz")})})}),e["default"]=r}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","portal-wrapper");var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","portal-name");var n=e.createTextNode("header portal");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,d=n.inline;r.detectNamespace(a);var i;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(i=this.build(r),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=r.cloneNode(this.cachedFragment,!0))):i=this.build(r);var c=r.createMorphAt(r.childAt(i,[1]),3,3);return d(t,c,e,"portal-for",[],{name:"header","portal-class":"header-portal"}),i}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","portal-wrapper");var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","portal-name");var n=e.createTextNode("footer portal");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,d=n.inline;r.detectNamespace(a);var i;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(i=this.build(r),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=r.cloneNode(this.cachedFragment,!0))):i=this.build(r);var c=r.createMorphAt(r.childAt(i,[1]),3,3);return d(t,c,e,"portal-for",[],{name:"footer","portal-class":"footer-portal"}),i}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","section");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","template-name");var n=e.createTextNode("application.hbs");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r);var r=e.createElement("h2");e.setAttribute(r,"id","title");var n=e.createTextNode("ember-portal");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","info");var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("p"),d=e.createTextNode("Render content to portals on the page & override them in child templates.");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("p"),d=e.createTextNode("Greate for dynamic headers / footers / contextual navigations & tools etc...");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","tools");var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("button"),d=e.createTextNode("Toggle header");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("button"),d=e.createTextNode("Toggle footer");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(a,r,n){var d=r.dom,i=r.hooks,c=i.get,o=i.block,l=i.content,h=i.element;d.detectNamespace(n);var s;r.useFragmentCache&&d.canClone?(null===this.cachedFragment&&(s=this.build(d),this.hasRendered?this.cachedFragment=s:this.hasRendered=!0),this.cachedFragment&&(s=d.cloneNode(this.cachedFragment,!0))):s=this.build(d);var p=d.childAt(s,[0]),m=d.childAt(p,[13]),u=d.childAt(m,[1]),v=d.childAt(m,[3]),C=d.createMorphAt(p,7,7),f=d.createMorphAt(p,9,9),b=d.createMorphAt(p,11,11);return o(r,C,a,"if",[c(r,a,"showingHeader")],{},e,null),l(r,f,a,"outlet"),o(r,b,a,"if",[c(r,a,"showingFooter")],{},t,null),h(r,u,a,"action",["toggleHeader"],{}),h(r,v,a,"action",["toggleFooter"],{}),s}}}())}),define("dummy/templates/components/portal-content",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,d=n.content;r.detectNamespace(a);var i;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(i=this.build(r),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=r.cloneNode(this.cachedFragment,!0))):i=this.build(r);var c=r.createMorphAt(i,1,1,a);return d(t,c,e,"yield"),i}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,d=a.hooks,i=d.get,c=d.block;n.detectNamespace(r);var o;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var l=n.createMorphAt(o,0,0,r);return n.insertBoundary(o,null),n.insertBoundary(o,0),c(a,l,t,"ember-wormhole",[],{to:i(a,t,"wormholeName")},e,null),o}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,d=a.hooks,i=d.get,c=d.block;n.detectNamespace(r);var o;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var l=n.createMorphAt(o,0,0,r);return n.insertBoundary(o,null),n.insertBoundary(o,0),c(a,l,t,"if",[i(a,t,"showingPortalItem")],{},e,null),o}}}())}),define("dummy/templates/example",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","examples-header"),e.setAttribute(a,"class","header");var r=e.createTextNode("\n      Examples Header - defined in example.hbs\n    ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom;r.detectNamespace(a);var n;return t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(n=this.build(r),this.hasRendered?this.cachedFragment=n:this.hasRendered=!0),this.cachedFragment&&(n=r.cloneNode(this.cachedFragment,!0))):n=this.build(r),n}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","examples-footer"),e.setAttribute(a,"class","footer");var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("p"),n=e.createTextNode("\n        Examples Footer - defined in example.hbs\n      ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r);var r=e.createElement("p"),n=e.createTextNode("\n        ");e.appendChild(r,n);var n=e.createElement("button"),d=e.createTextNode("click me");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode(" - actions work as expected.\n      ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,d=n.element;r.detectNamespace(a);var i;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(i=this.build(r),this.hasRendered?this.cachedFragment=i:this.hasRendered=!0),this.cachedFragment&&(i=r.cloneNode(this.cachedFragment,!0))):i=this.build(r);var c=r.childAt(i,[1,3,1]);return d(t,c,e,"action",["clicked"],{}),i}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","section");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","template-name");var n=e.createTextNode("example.hbs");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("p"),n=e.createTextNode("\n    This sets an example header and footer. Navigate around to see the portal content contextually change.\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r);var r=e.createElement("ul");e.setAttribute(r,"class","nav");var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("li"),d=e.createComment("");e.appendChild(n,d);var d=e.createTextNode("\n      ");e.appendChild(n,d);var d=e.createElement("ul"),i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("li"),c=e.createComment("");e.appendChild(i,c),e.appendChild(d,i);var i=e.createTextNode("\n        ");e.appendChild(d,i);var i=e.createElement("li"),c=e.createComment("");e.appendChild(i,c);var c=e.createTextNode("\n          ");e.appendChild(i,c);var c=e.createElement("ul"),o=e.createTextNode("\n            ");e.appendChild(c,o);var o=e.createElement("li"),l=e.createComment("");e.appendChild(o,l),e.appendChild(c,o);var o=e.createTextNode("\n          ");e.appendChild(c,o),e.appendChild(i,c);var c=e.createTextNode("\n        ");e.appendChild(i,c),e.appendChild(d,i);var i=e.createTextNode("\n      ");e.appendChild(d,i),e.appendChild(n,d);var d=e.createTextNode("\n    ");e.appendChild(n,d),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(a,r,n){var d=r.dom,i=r.hooks,c=i.block,o=i.inline,l=i.content;d.detectNamespace(n);var h;r.useFragmentCache&&d.canClone?(null===this.cachedFragment&&(h=this.build(d),this.hasRendered?this.cachedFragment=h:this.hasRendered=!0),this.cachedFragment&&(h=d.cloneNode(this.cachedFragment,!0))):h=this.build(d);var s=d.childAt(h,[0]),p=d.childAt(s,[9,1]),m=d.childAt(p,[2]),u=d.childAt(m,[3]),v=d.createMorphAt(s,3,3),C=d.createMorphAt(s,5,5),f=d.createMorphAt(p,0,0),b=d.createMorphAt(d.childAt(m,[1]),0,0),g=d.createMorphAt(u,0,0),x=d.createMorphAt(d.childAt(u,[2,1]),0,0),N=d.createMorphAt(s,11,11);return c(r,v,a,"portal-content",[],{"for":"header"},e,null),c(r,C,a,"portal-content",[],{"for":"footer"},t,null),o(r,f,a,"link-to",["Home","example"],{}),o(r,b,a,"link-to",["Foo","example.foo"],{}),o(r,g,a,"link-to",["Bar","example.bar"],{}),o(r,x,a,"link-to",["Baz","example.bar.baz"],{}),l(r,N,a,"outlet"),h}}}())}),define("dummy/templates/example/bar",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","bar-footer"),e.setAttribute(a,"class","footer");var r=e.createTextNode("\n      Bar Footer - defined in example/bar.hbs\n    ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom;r.detectNamespace(a);var n;return t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(n=this.build(r),this.hasRendered?this.cachedFragment=n:this.hasRendered=!0),this.cachedFragment&&(n=r.cloneNode(this.cachedFragment,!0))):n=this.build(r),n}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","section");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","template-name");var n=e.createTextNode("example/bar.hbs");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("p"),n=e.createTextNode('\n    This page only sets a custom footer, which overrides its parent\n    so the page now has the "Examples Header" and "Bar Footer".\n  ');e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,d=a.hooks,i=d.block,c=d.content;n.detectNamespace(r);var o;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(o=this.build(n),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=n.cloneNode(this.cachedFragment,!0))):o=this.build(n);var l=n.childAt(o,[0]),h=n.createMorphAt(l,3,3),s=n.createMorphAt(l,7,7);return i(a,h,t,"portal-content",[],{"for":"footer"},e,null),c(a,s,t,"outlet"),o}}}())}),define("dummy/templates/example/bar/baz",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","baz-header"),e.setAttribute(a,"class","header");var r=e.createTextNode("\n      Baz Header - defined in example/bar/baz.hbs\n    ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom;r.detectNamespace(a);var n;return t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(n=this.build(r),this.hasRendered?this.cachedFragment=n:this.hasRendered=!0),this.cachedFragment&&(n=r.cloneNode(this.cachedFragment,!0))):n=this.build(r),n}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","baz-footer"),e.setAttribute(a,"class","footer");var r=e.createTextNode("\n      Baz Footer - defined in example/bar/baz.hbs\n    ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom;r.detectNamespace(a);var n;return t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(n=this.build(r),this.hasRendered?this.cachedFragment=n:this.hasRendered=!0),this.cachedFragment&&(n=r.cloneNode(this.cachedFragment,!0))):n=this.build(r),n}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","section");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","template-name");var n=e.createTextNode("example/bar/baz.hbs");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("p"),n=e.createTextNode('\n    This sets both portals, so overrides its parents\n    and shows the "Baz Header" and "Baz Footer".\n  ');e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(a,r,n){var d=r.dom,i=r.hooks,c=i.block;d.detectNamespace(n);var o;r.useFragmentCache&&d.canClone?(null===this.cachedFragment&&(o=this.build(d),this.hasRendered?this.cachedFragment=o:this.hasRendered=!0),this.cachedFragment&&(o=d.cloneNode(this.cachedFragment,!0))):o=this.build(d);var l=d.childAt(o,[0]),h=d.createMorphAt(l,3,3),s=d.createMorphAt(l,5,5);return c(r,h,a,"portal-content",[],{"for":"header"},e,null),c(r,s,a,"portal-content",[],{"for":"footer"},t,null),o}}}())}),define("dummy/templates/example/foo",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("    ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"id","foo-header"),e.setAttribute(a,"class","header");var r=e.createTextNode("\n      Foo Header - defined in example/foo.hbs\n    ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom;r.detectNamespace(a);var n;return t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(n=this.build(r),this.hasRendered?this.cachedFragment=n:this.hasRendered=!0),this.cachedFragment&&(n=r.cloneNode(this.cachedFragment,!0))):n=this.build(r),n}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","section");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","template-name");var n=e.createTextNode("example/foo.hbs");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("p"),n=e.createTextNode('\n    This page only sets a custom header, so should have the "Foo Header" and "Examples Footer".\n  ');e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n");return e.appendChild(a,r),e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,d=a.hooks,i=d.block;n.detectNamespace(r);var c;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(c=this.build(n),this.hasRendered?this.cachedFragment=c:this.hasRendered=!0),this.cachedFragment&&(c=n.cloneNode(this.cachedFragment,!0))):c=this.build(n);var o=n.createMorphAt(n.childAt(c,[0]),3,3);return i(a,o,t,"portal-content",[],{"for":"header"},e,null),c}}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",r=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-portal",version:"0.0.3.21a7c0a3"});