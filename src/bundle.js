var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t){t.parentNode.removeChild(t)}let u;function a(t){u=t}const l=[],i=[],f=[],d=[],p=Promise.resolve();let $=!1;function h(t){f.push(t)}let g=!1;const m=new Set;function b(){if(!g){g=!0;do{for(let t=0;t<l.length;t+=1){const n=l[t];a(n),y(n.$$)}for(a(null),l.length=0;i.length;)i.pop()();for(let t=0;t<f.length;t+=1){const n=f[t];m.has(n)||(m.add(n),n())}f.length=0}while(l.length);for(;d.length;)d.pop()();$=!1,g=!1,m.clear()}}function y(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(h)}}const x=new Set;function _(t,n){-1===t.$$.dirty[0]&&(l.push(t),$||($=!0,p.then(b)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function v(c,l,i,f,d,p,$,g=[-1]){const m=u;a(c);const y=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:d,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(m?m.$$.context:[])),callbacks:e(),dirty:g,skip_bound:!1,root:l.target||m.$$.root};$&&$(y.root);let v=!1;if(y.ctx=i?i(c,l.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return y.ctx&&d(y.ctx[t],y.ctx[t]=o)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](o),v&&_(c,t)),n})):[],y.update(),v=!0,o(y.before_update),y.fragment=!!f&&f(y.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);y.fragment&&y.fragment.l(t),t.forEach(s)}else y.fragment&&y.fragment.c();l.intro&&((k=c.$$.fragment)&&k.i&&(x.delete(k),k.i(w))),function(t,e,c,s){const{fragment:u,on_mount:a,on_destroy:l,after_update:i}=t.$$;u&&u.m(e,c),s||h((()=>{const e=a.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(h)}(c,l.target,l.anchor,l.customElement),b()}var k,w;a(m)}function k(n){let e;return{c(){var t,n,o,r;t="main",e=document.createElement(t),e.innerHTML='<div class="p-16 flex justify-between"><h1 class="text-3xl font-sans font-bold text-gray-800">Projects based on your profile</h1> \n\t\t<a href="smth" class="text-2xl font-sans font-bold text-gray-800 underline">View all projects</a></div>',n=e,o="class",null==(r="container w-screen")?n.removeAttribute(o):n.getAttribute(o)!==r&&n.setAttribute(o,r)},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n)},p:t,i:t,o:t,d(t){t&&s(e)}}}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),v(this,t,null,k,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
