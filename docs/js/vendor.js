!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AOS=t()}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /*!
   * ScrollSmoother 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var gsap,
      _coreInitted,
      _win,
      _doc,
      _docEl,
      _body,
      _toArray,
      _clamp,
      ScrollTrigger,
      _mainInstance,
      _expo,
      _getVelocityProp,
      _inputObserver,
      _context,
      _onResizeDelayedCall,
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  },
      _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _autoDistance = function _autoDistance(el, progress) {
    var parent = el.parentNode || _docEl,
        b1 = el.getBoundingClientRect(),
        b2 = parent.getBoundingClientRect(),
        gapTop = b2.top - b1.top,
        gapBottom = b2.bottom - b1.bottom,
        change = (Math.abs(gapTop) > Math.abs(gapBottom) ? gapTop : gapBottom) / (1 - progress),
        offset = -change * progress,
        ratio,
        extraChange;

    if (change > 0) {
      ratio = b2.height / (_win.innerHeight + b2.height);
      extraChange = ratio === 0.5 ? b2.height * 2 : Math.min(b2.height, -change * ratio / (2 * ratio - 1)) * 2 * (progress || 1);
      offset += progress ? -extraChange * progress : -extraChange / 2;
      change += extraChange;
    }

    return {
      change: change,
      offset: offset
    };
  },
      _wrap = function _wrap(el) {
    var wrapper = _doc.querySelector(".ScrollSmoother-wrapper");

    if (!wrapper) {
      wrapper = _doc.createElement("div");
      wrapper.classList.add("ScrollSmoother-wrapper");
      el.parentNode.insertBefore(wrapper, el);
      wrapper.appendChild(el);
    }

    return wrapper;
  };

  var ScrollSmoother = function () {
    function ScrollSmoother(vars) {
      var _this = this;

      _coreInitted || ScrollSmoother.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollSmoother)");
      vars = this.vars = vars || {};
      _mainInstance && _mainInstance.kill();
      _mainInstance = this;

      _context(this);

      var _vars = vars,
          smoothTouch = _vars.smoothTouch,
          _onUpdate = _vars.onUpdate,
          onStop = _vars.onStop,
          smooth = _vars.smooth,
          onFocusIn = _vars.onFocusIn,
          normalizeScroll = _vars.normalizeScroll,
          content,
          wrapper,
          height,
          mainST,
          effects,
          sections,
          intervalID,
          wrapperCSS,
          contentCSS,
          paused,
          pausedNormalizer,
          recordedRefreshScroll,
          recordedRefreshScrub,
          self = this,
          resizeObserver = typeof ResizeObserver !== "undefined" && vars.autoResize !== false && new ResizeObserver(function () {
        return ScrollTrigger.isRefreshing || _onResizeDelayedCall.restart(true);
      }),
          effectsPrefix = vars.effectsPrefix || "",
          scrollFunc = ScrollTrigger.getScrollFunc(_win),
          smoothDuration = ScrollTrigger.isTouch === 1 ? smoothTouch === true ? 0.8 : parseFloat(smoothTouch) || 0 : smooth === 0 || smooth === false ? 0 : parseFloat(smooth) || 0.8,
          currentY = 0,
          delta = 0,
          startupPhase = 1,
          tracker = _getVelocityProp(0),
          updateVelocity = function updateVelocity() {
        return tracker.update(-currentY);
      },
          scroll = {
        y: 0
      },
          removeScroll = function removeScroll() {
        return content.style.overflow = "visible";
      },
          isProxyScrolling,
          killScrub = function killScrub(trigger) {
        trigger.update();
        var scrub = trigger.getTween();

        if (scrub) {
          scrub.pause();
          scrub._time = scrub._dur;
          scrub._tTime = scrub._tDur;
        }

        isProxyScrolling = false;
        trigger.animation.progress(trigger.progress, true);
      },
          render = function render(y, force) {
        if (y !== currentY && !paused || force) {
          if (smoothDuration) {
            content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
            content._gsap.y = y + "px";
          }

          delta = y - currentY;
          currentY = y;
          ScrollTrigger.isUpdating || ScrollTrigger.update();
        }
      },
          scrollTop = function scrollTop(value) {
        if (arguments.length) {
          value < 0 && (value = 0);
          scroll.y = -value;
          isProxyScrolling = true;
          paused ? currentY = -value : render(-value);
          ScrollTrigger.isRefreshing ? mainST.update() : scrollFunc(value);
          return this;
        }

        return -currentY;
      },
          lastFocusElement,
          _onFocusIn = function _onFocusIn(e) {
        wrapper.scrollTop = 0;

        if (e.target.contains && e.target.contains(wrapper) || onFocusIn && onFocusIn(_this, e) === false) {
          return;
        }

        ScrollTrigger.isInViewport(e.target) || e.target === lastFocusElement || _this.scrollTo(e.target, false, "center center");
        lastFocusElement = e.target;
      },
          adjustParallaxPosition = function adjustParallaxPosition(triggers, createdAfterEffectWasApplied) {
        var pins, start, dif, markers;
        effects.forEach(function (st) {
          pins = st.pins;
          markers = st.markers;
          triggers.forEach(function (trig) {
            if (st.trigger && trig.trigger && st !== trig && (trig.trigger === st.trigger || trig.pinnedContainer === st.trigger || st.trigger.contains(trig.trigger))) {
              start = trig.start;
              dif = (start - st.start - st.offset) / st.ratio - (start - st.start);
              pins.forEach(function (p) {
                return dif -= p.distance / st.ratio - p.distance;
              });
              trig.setPositions(start + dif, trig.end + dif);
              trig.markerStart && markers.push(gsap.quickSetter([trig.markerStart, trig.markerEnd], "y", "px"));

              if (trig.pin && trig.end > 0) {
                dif = trig.end - trig.start;
                pins.push({
                  start: trig.start,
                  end: trig.end,
                  distance: dif,
                  trig: trig
                });
                st.setPositions(st.start, st.end + dif);
                st.vars.onRefresh(st);
              }
            }
          });
        });
      },
          onRefresh = function onRefresh() {
        removeScroll();
        requestAnimationFrame(removeScroll);

        if (effects) {
          effects.forEach(function (st) {
            var start = st.start,
                end = st.auto ? Math.min(ScrollTrigger.maxScroll(st.scroller), st.end) : start + (st.end - start) / st.ratio,
                offset = (end - st.end) / 2;
            start -= offset;
            end -= offset;
            st.offset = offset || 0.0001;
            st.pins.length = 0;
            st.setPositions(Math.min(start, end), Math.max(start, end));
            st.vars.onRefresh(st);
          });
          adjustParallaxPosition(ScrollTrigger.sort());
        }

        tracker.reset();
      },
          addOnRefresh = function addOnRefresh() {
        return ScrollTrigger.addEventListener("refresh", onRefresh);
      },
          restoreEffects = function restoreEffects() {
        return effects && effects.forEach(function (st) {
          return st.vars.onRefresh(st);
        });
      },
          revertEffects = function revertEffects() {
        effects && effects.forEach(function (st) {
          return st.vars.onRefreshInit(st);
        });
        return restoreEffects;
      },
          effectValueGetter = function effectValueGetter(name, value, index, el) {
        return function () {
          var v = typeof value === "function" ? value(index, el) : value;
          v || v === 0 || (v = el.getAttribute("data-" + effectsPrefix + name) || (name === "speed" ? 1 : 0));
          el.setAttribute("data-" + effectsPrefix + name, v);
          return v === "auto" ? v : parseFloat(v);
        };
      },
          createEffect = function createEffect(el, speed, lag, index) {
        var getSpeed = effectValueGetter("speed", speed, index, el),
            getLag = effectValueGetter("lag", lag, index, el),
            startY = gsap.getProperty(el, "y"),
            cache = el._gsap,
            ratio,
            st,
            autoSpeed,
            scrub,
            progressOffset,
            yOffset,
            initDynamicValues = function initDynamicValues() {
          speed = getSpeed();
          lag = getLag();
          ratio = parseFloat(speed) || 1;
          autoSpeed = speed === "auto";
          progressOffset = autoSpeed ? 0 : 0.5;
          scrub && scrub.kill();
          scrub = lag && gsap.to(el, {
            ease: _expo,
            overwrite: false,
            y: "+=0",
            duration: lag
          });

          if (st) {
            st.ratio = ratio;
            st.autoSpeed = autoSpeed;
          }
        },
            revert = function revert() {
          cache.y = startY + "px";
          cache.renderTransform(1);
          initDynamicValues();
        },
            pins = [],
            markers = [],
            change = 0,
            updateChange = function updateChange(self) {
          if (autoSpeed) {
            revert();

            var auto = _autoDistance(el, _clamp(0, 1, -self.start / (self.end - self.start)));

            change = auto.change;
            yOffset = auto.offset;
          } else {
            change = (self.end - self.start) * (1 - ratio);
            yOffset = 0;
          }

          pins.forEach(function (p) {
            return change -= p.distance * (1 - ratio);
          });
          self.vars.onUpdate(self);
          scrub && scrub.progress(1);
        };

        initDynamicValues();

        if (ratio !== 1 || autoSpeed || scrub) {
          st = ScrollTrigger.create({
            trigger: autoSpeed ? el.parentNode : el,
            scroller: wrapper,
            scrub: true,
            refreshPriority: -999,
            onRefreshInit: revert,
            onRefresh: updateChange,
            onKill: function onKill(self) {
              var i = effects.indexOf(self);
              i >= 0 && effects.splice(i, 1);
              revert();
            },
            onUpdate: function onUpdate(self) {
              var y = startY + change * (self.progress - progressOffset),
                  i = pins.length,
                  extraY = 0,
                  pin,
                  scrollY,
                  end;

              if (self.offset) {
                if (i) {
                  scrollY = -currentY;
                  end = self.end;

                  while (i--) {
                    pin = pins[i];

                    if (pin.trig.isActive || scrollY >= pin.start && scrollY <= pin.end) {
                      if (scrub) {
                        pin.trig.progress += pin.trig.direction < 0 ? 0.001 : -0.001;
                        pin.trig.update(0, 0, 1);
                        scrub.resetTo("y", parseFloat(cache.y), -delta, true);
                        startupPhase && scrub.progress(1);
                      }

                      return;
                    }

                    scrollY > pin.end && (extraY += pin.distance);
                    end -= pin.distance;
                  }

                  y = startY + extraY + change * ((gsap.utils.clamp(self.start, self.end, scrollY) - self.start - extraY) / (end - self.start) - progressOffset);
                }

                y = _round(y + yOffset);
                markers.length && !autoSpeed && markers.forEach(function (setter) {
                  return setter(y - extraY);
                });

                if (scrub) {
                  scrub.resetTo("y", y, -delta, true);
                  startupPhase && scrub.progress(1);
                } else {
                  cache.y = y + "px";
                  cache.renderTransform(1);
                }
              }
            }
          });
          updateChange(st);
          gsap.core.getCache(st.trigger).stRevert = revertEffects;
          st.startY = startY;
          st.pins = pins;
          st.markers = markers;
          st.ratio = ratio;
          st.autoSpeed = autoSpeed;
          el.style.willChange = "transform";
        }

        return st;
      };

      addOnRefresh();
      ScrollTrigger.addEventListener("killAll", addOnRefresh);
      gsap.delayedCall(0.5, function () {
        return startupPhase = 0;
      });
      this.scrollTop = scrollTop;

      this.scrollTo = function (target, smooth, position) {
        var p = gsap.utils.clamp(0, ScrollTrigger.maxScroll(_win), isNaN(target) ? _this.offset(target, position) : +target);
        !smooth ? scrollTop(p) : paused ? gsap.to(_this, {
          duration: smoothDuration,
          scrollTop: p,
          overwrite: "auto",
          ease: _expo
        }) : scrollFunc(p);
      };

      this.offset = function (target, position) {
        target = _toArray(target)[0];
        var cssText = target.style.cssText,
            st = ScrollTrigger.create({
          trigger: target,
          start: position || "top top"
        }),
            y;
        effects && adjustParallaxPosition([st]);
        y = st.start;
        st.kill(false);
        target.style.cssText = cssText;
        gsap.core.getCache(target).uncache = 1;
        return y;
      };

      function refreshHeight() {
        height = content.clientHeight;
        content.style.overflow = "visible";
        _body.style.height = height + "px";
        return height - _win.innerHeight;
      }

      this.content = function (element) {
        if (arguments.length) {
          var newContent = _toArray(element || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || _body.children[0];

          if (newContent !== content) {
            content = newContent;
            contentCSS = content.getAttribute("style") || "";
            resizeObserver && resizeObserver.observe(content);
            gsap.set(content, {
              overflow: "visible",
              width: "100%",
              boxSizing: "border-box",
              y: "+=0"
            });
            smoothDuration || gsap.set(content, {
              clearProps: "transform"
            });
          }

          return this;
        }

        return content;
      };

      this.wrapper = function (element) {
        if (arguments.length) {
          wrapper = _toArray(element || "#smooth-wrapper")[0] || _wrap(content);
          wrapperCSS = wrapper.getAttribute("style") || "";
          refreshHeight();
          gsap.set(wrapper, smoothDuration ? {
            overflow: "hidden",
            position: "fixed",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          } : {
            overflow: "visible",
            position: "relative",
            width: "100%",
            height: "auto",
            top: "auto",
            bottom: "auto",
            left: "auto",
            right: "auto"
          });
          return this;
        }

        return wrapper;
      };

      this.effects = function (targets, config) {
        var _effects;

        effects || (effects = []);

        if (!targets) {
          return effects.slice(0);
        }

        targets = _toArray(targets);
        targets.forEach(function (target) {
          var i = effects.length;

          while (i--) {
            effects[i].trigger === target && effects[i].kill();
          }
        });
        config = config || {};
        var _config = config,
            speed = _config.speed,
            lag = _config.lag,
            effectsToAdd = [],
            i,
            st;

        for (i = 0; i < targets.length; i++) {
          st = createEffect(targets[i], speed, lag, i);
          st && effectsToAdd.push(st);
        }

        (_effects = effects).push.apply(_effects, effectsToAdd);

        return effectsToAdd;
      };

      this.sections = function (targets, config) {
        var _sections;

        sections || (sections = []);

        if (!targets) {
          return sections.slice(0);
        }

        var newSections = _toArray(targets).map(function (el) {
          return ScrollTrigger.create({
            trigger: el,
            start: "top 120%",
            end: "bottom -20%",
            onToggle: function onToggle(self) {
              el.style.opacity = self.isActive ? "1" : "0";
              el.style.pointerEvents = self.isActive ? "all" : "none";
            }
          });
        });

        config && config.add ? (_sections = sections).push.apply(_sections, newSections) : sections = newSections.slice(0);
        return newSections;
      };

      this.content(vars.content);
      this.wrapper(vars.wrapper);

      this.render = function (y) {
        return render(y || y === 0 ? y : currentY);
      };

      this.getVelocity = function () {
        return tracker.getVelocity(-currentY);
      };

      ScrollTrigger.scrollerProxy(wrapper, {
        scrollTop: scrollTop,
        scrollHeight: function scrollHeight() {
          return refreshHeight() && _body.scrollHeight;
        },
        fixedMarkers: vars.fixedMarkers !== false && !!smoothDuration,
        content: content,
        getBoundingClientRect: function getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: _win.innerWidth,
            height: _win.innerHeight
          };
        }
      });
      ScrollTrigger.defaults({
        scroller: wrapper
      });
      var existingScrollTriggers = ScrollTrigger.getAll().filter(function (st) {
        return st.scroller === _win || st.scroller === wrapper;
      });
      existingScrollTriggers.forEach(function (st) {
        return st.revert(true);
      });
      mainST = ScrollTrigger.create({
        animation: gsap.fromTo(scroll, {
          y: 0
        }, {
          y: function y() {
            return -refreshHeight();
          },
          immediateRender: false,
          ease: "none",
          data: "ScrollSmoother",
          duration: 100,
          onUpdate: function onUpdate() {
            if (this._dur) {
              var force = isProxyScrolling;

              if (force) {
                killScrub(mainST);
                scroll.y = currentY;
              }

              render(scroll.y, force);
              updateVelocity();
              _onUpdate && !paused && _onUpdate(self);
            }
          }
        }),
        onRefreshInit: function onRefreshInit(self) {
          if (effects) {
            var pins = ScrollTrigger.getAll().filter(function (st) {
              return !!st.pin;
            });
            effects.forEach(function (st) {
              if (!st.vars.pinnedContainer) {
                pins.forEach(function (pinST) {
                  if (pinST.pin.contains(st.trigger)) {
                    var v = st.vars;
                    v.pinnedContainer = pinST.pin;
                    st.vars = null;
                    st.init(v, st.animation);
                  }
                });
              }
            });
          }

          var scrub = self.getTween();
          recordedRefreshScrub = scrub && scrub._end > scrub._dp._time;
          recordedRefreshScroll = currentY;
          scroll.y = 0;

          if (smoothDuration) {
            wrapper.style.pointerEvents = "none";
            wrapper.scrollTop = 0;
            setTimeout(function () {
              return wrapper.style.removeProperty("pointer-events");
            }, 50);
          }
        },
        onRefresh: function onRefresh(self) {
          self.animation.invalidate();
          self.setPositions(self.start, refreshHeight());
          recordedRefreshScrub || killScrub(self);
          scroll.y = -scrollFunc();
          render(scroll.y);
          startupPhase || self.animation.progress(gsap.utils.clamp(0, 1, recordedRefreshScroll / -self.end));

          if (recordedRefreshScrub) {
            self.progress -= 0.001;
            self.update();
          }
        },
        id: "ScrollSmoother",
        scroller: _win,
        invalidateOnRefresh: true,
        start: 0,
        refreshPriority: -9999,
        end: refreshHeight,
        onScrubComplete: function onScrubComplete() {
          tracker.reset();
          onStop && onStop(_this);
        },
        scrub: smoothDuration || true
      });

      this.smooth = function (value) {
        arguments.length && (smoothDuration = value || 0);
        return arguments.length ? mainST.scrubDuration(value) : mainST.getTween() ? mainST.getTween().duration() : 0;
      };

      mainST.getTween() && (mainST.getTween().vars.ease = vars.ease || _expo);
      this.scrollTrigger = mainST;
      vars.effects && this.effects(vars.effects === true ? "[data-" + effectsPrefix + "speed], [data-" + effectsPrefix + "lag]" : vars.effects, {});
      vars.sections && this.sections(vars.sections === true ? "[data-section]" : vars.sections);
      existingScrollTriggers.forEach(function (st) {
        st.vars.scroller = wrapper;
        st.init(st.vars, st.animation);
      });

      this.paused = function (value, allowNestedScroll) {
        if (arguments.length) {
          if (!!paused !== value) {
            if (value) {
              mainST.getTween() && mainST.getTween().pause();
              scrollFunc(-currentY);
              tracker.reset();
              pausedNormalizer = ScrollTrigger.normalizeScroll();
              pausedNormalizer && pausedNormalizer.disable();
              paused = ScrollTrigger.observe({
                preventDefault: true,
                type: "wheel,touch,scroll",
                debounce: false,
                allowClicks: true,
                onChangeY: function onChangeY() {
                  return scrollTop(-currentY);
                }
              });
              paused.nested = _inputObserver(_docEl, "wheel,touch,scroll", true, allowNestedScroll !== false);
            } else {
              paused.nested.kill();
              paused.kill();
              paused = 0;
              pausedNormalizer && pausedNormalizer.enable();
              mainST.progress = (-currentY - mainST.start) / (mainST.end - mainST.start);
              killScrub(mainST);
            }
          }

          return this;
        }

        return !!paused;
      };

      this.kill = this.revert = function () {
        _this.paused(false);

        killScrub(mainST);
        mainST.kill();
        var triggers = (effects || []).concat(sections || []),
            i = triggers.length;

        while (i--) {
          triggers[i].kill();
        }

        ScrollTrigger.scrollerProxy(wrapper);
        ScrollTrigger.removeEventListener("killAll", addOnRefresh);
        ScrollTrigger.removeEventListener("refresh", onRefresh);
        wrapper.style.cssText = wrapperCSS;
        content.style.cssText = contentCSS;
        var defaults = ScrollTrigger.defaults({});
        defaults && defaults.scroller === wrapper && ScrollTrigger.defaults({
          scroller: _win
        });
        _this.normalizer && ScrollTrigger.normalizeScroll(false);
        clearInterval(intervalID);
        _mainInstance = null;
        resizeObserver && resizeObserver.disconnect();

        _body.style.removeProperty("height");

        _win.removeEventListener("focusin", _onFocusIn);
      };

      this.refresh = function (soft, force) {
        return mainST.refresh(soft, force);
      };

      if (normalizeScroll) {
        this.normalizer = ScrollTrigger.normalizeScroll(normalizeScroll === true ? {
          debounce: true,
          content: !smoothDuration && content
        } : normalizeScroll);
      }

      ScrollTrigger.config(vars);
      "overscrollBehavior" in _win.getComputedStyle(_body) && gsap.set([_body, _docEl], {
        overscrollBehavior: "none"
      });
      "scrollBehavior" in _win.getComputedStyle(_body) && gsap.set([_body, _docEl], {
        scrollBehavior: "auto"
      });

      _win.addEventListener("focusin", _onFocusIn);

      intervalID = setInterval(updateVelocity, 250);
      _doc.readyState === "loading" || requestAnimationFrame(function () {
        return ScrollTrigger.refresh();
      });
    }

    ScrollSmoother.register = function register(core) {
      if (!_coreInitted) {
        gsap = core || _getGSAP();

        if (_windowExists() && window.document) {
          _win = window;
          _doc = document;
          _docEl = _doc.documentElement;
          _body = _doc.body;
        }

        if (gsap) {
          _toArray = gsap.utils.toArray;
          _clamp = gsap.utils.clamp;
          _expo = gsap.parseEase("expo");

          _context = gsap.core.context || function () {};

          _onResizeDelayedCall = gsap.delayedCall(0.2, function () {
            return ScrollTrigger.isRefreshing || _mainInstance && _mainInstance.refresh();
          }).pause();
          ScrollTrigger = gsap.core.globals().ScrollTrigger;
          gsap.core.globals("ScrollSmoother", ScrollSmoother);

          if (_body && ScrollTrigger) {
            _getVelocityProp = ScrollTrigger.core._getVelocityProp;
            _inputObserver = ScrollTrigger.core._inputObserver;
            ScrollSmoother.refresh = ScrollTrigger.refresh;
            _coreInitted = 1;
          }
        }
      }

      return _coreInitted;
    };

    _createClass(ScrollSmoother, [{
      key: "progress",
      get: function get() {
        return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
      }
    }]);

    return ScrollSmoother;
  }();
  ScrollSmoother.version = "3.11.3";

  ScrollSmoother.create = function (vars) {
    return _mainInstance && vars && _mainInstance.content() === _toArray(vars.content)[0] ? _mainInstance : new ScrollSmoother(vars);
  };

  ScrollSmoother.get = function () {
    return _mainInstance;
  };

  _getGSAP() && gsap.registerPlugin(ScrollSmoother);

  exports.ScrollSmoother = ScrollSmoother;
  exports.default = ScrollSmoother;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /*!
   * Observer 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var gsap,
      _coreInitted,
      _clamp,
      _win,
      _doc,
      _docEl,
      _body,
      _isTouch,
      _pointerType,
      ScrollTrigger,
      _root,
      _normalizer,
      _eventTypes,
      _getGSAP = function _getGSAP() {
    return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
  },
      _startup = 1,
      _observers = [],
      _scrollers = [],
      _proxies = [],
      _getTime = Date.now,
      _bridge = function _bridge(name, value) {
    return value;
  },
      _integrate = function _integrate() {
    var core = ScrollTrigger.core,
        data = core.bridge || {},
        scrollers = core._scrollers,
        proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;

    _bridge = function _bridge(name, value) {
      return data[name](value);
    };
  },
      _getProxyProp = function _getProxyProp(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  },
      _isViewport = function _isViewport(el) {
    return !!~_root.indexOf(el);
  },
      _addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  },
      _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  },
      _scrollLeft = "scrollLeft",
      _scrollTop = "scrollTop",
      _onScroll = function _onScroll() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  },
      _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
    var cachingFunc = function cachingFunc(value) {
      if (value || value === 0) {
        _startup && (_win.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f(value);
        cachingFunc.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
        cachingFunc.cacheID = _scrollers.cache;
        cachingFunc.v = f();
      }

      return cachingFunc.v + cachingFunc.offset;
    };

    cachingFunc.offset = 0;
    return f && cachingFunc;
  },
      _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function (value) {
      return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
  },
      _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function (value) {
      return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
  },
      _getTarget = function _getTarget(t) {
    return gsap.utils.toArray(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
  },
      _getScrollFunc = function _getScrollFunc(element, _ref) {
    var s = _ref.s,
        sc = _ref.sc;
    _isViewport(element) && (element = _doc.scrollingElement || _docEl);

    var i = _scrollers.indexOf(element),
        offset = sc === _vertical.sc ? 1 : 2;

    !~i && (i = _scrollers.push(element) - 1);
    _scrollers[i + offset] || element.addEventListener("scroll", _onScroll);
    var prev = _scrollers[i + offset],
        func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function (value) {
      return arguments.length ? element[s] = value : element[s];
    })));
    func.target = element;
    prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  },
      _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
    var v1 = value,
        v2 = value,
        t1 = _getTime(),
        t2 = t1,
        min = minTimeRefresh || 50,
        dropToZeroTime = Math.max(500, min * 3),
        update = function update(value, force) {
      var t = _getTime();

      if (force || t - t1 > min) {
        v2 = v1;
        v1 = value;
        t2 = t1;
        t1 = t;
      } else if (useDelta) {
        v1 += value;
      } else {
        v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
      }
    },
        reset = function reset() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    },
        getVelocity = function getVelocity(latestValue) {
      var tOld = t2,
          vOld = v2,
          t = _getTime();

      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
    };

    return {
      update: update,
      reset: reset,
      getVelocity: getVelocity
    };
  },
      _getEvent = function _getEvent(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
  },
      _getAbsoluteMax = function _getAbsoluteMax(a) {
    var max = Math.max.apply(Math, a),
        min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  },
      _setScrollTrigger = function _setScrollTrigger() {
    ScrollTrigger = gsap.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  },
      _initCore = function _initCore(core) {
    gsap = core || _getGSAP();

    if (gsap && typeof document !== "undefined" && document.body) {
      _win = window;
      _doc = document;
      _docEl = _doc.documentElement;
      _body = _doc.body;
      _root = [_win, _doc, _docEl, _body];
      _clamp = gsap.utils.clamp;
      _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function () {
        return _startup = 0;
      }, 500);

      _setScrollTrigger();

      _coreInitted = 1;
    }

    return _coreInitted;
  };

  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = function () {
    function Observer(vars) {
      this.init(vars);
    }

    var _proto = Observer.prototype;

    _proto.init = function init(vars) {
      _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance,
          dragMinimum = vars.dragMinimum,
          type = vars.type,
          target = vars.target,
          lineHeight = vars.lineHeight,
          debounce = vars.debounce,
          preventDefault = vars.preventDefault,
          onStop = vars.onStop,
          onStopDelay = vars.onStopDelay,
          ignore = vars.ignore,
          wheelSpeed = vars.wheelSpeed,
          event = vars.event,
          onDragStart = vars.onDragStart,
          onDragEnd = vars.onDragEnd,
          onDrag = vars.onDrag,
          onPress = vars.onPress,
          onRelease = vars.onRelease,
          onRight = vars.onRight,
          onLeft = vars.onLeft,
          onUp = vars.onUp,
          onDown = vars.onDown,
          onChangeX = vars.onChangeX,
          onChangeY = vars.onChangeY,
          onChange = vars.onChange,
          onToggleX = vars.onToggleX,
          onToggleY = vars.onToggleY,
          onHover = vars.onHover,
          onHoverEnd = vars.onHoverEnd,
          onMove = vars.onMove,
          ignoreCheck = vars.ignoreCheck,
          isNormalizer = vars.isNormalizer,
          onGestureStart = vars.onGestureStart,
          onGestureEnd = vars.onGestureEnd,
          onWheel = vars.onWheel,
          onEnable = vars.onEnable,
          onDisable = vars.onDisable,
          onClick = vars.onClick,
          scrollSpeed = vars.scrollSpeed,
          capture = vars.capture,
          allowClicks = vars.allowClicks,
          lockAxis = vars.lockAxis,
          onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce = debounce !== false;
      lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);

      var id,
          onStopDelayedCall,
          dragged,
          moved,
          wheeled,
          locked,
          axis,
          self = this,
          prevDeltaX = 0,
          prevDeltaY = 0,
          scrollFuncX = _getScrollFunc(target, _horizontal),
          scrollFuncY = _getScrollFunc(target, _vertical),
          scrollX = scrollFuncX(),
          scrollY = scrollFuncY(),
          limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
          isViewport = _isViewport(target),
          ownerDoc = target.ownerDocument || _doc,
          deltaX = [0, 0, 0],
          deltaY = [0, 0, 0],
          onClickTime = 0,
          clickCapture = function clickCapture() {
        return onClickTime = _getTime();
      },
          _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
        return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
      },
          onStopFunc = function onStopFunc() {
        self._vx.reset();

        self._vy.reset();

        onStopDelayedCall.pause();
        onStop && onStop(self);
      },
          update = function update() {
        var dx = self.deltaX = _getAbsoluteMax(deltaX),
            dy = self.deltaY = _getAbsoluteMax(deltaY),
            changedX = Math.abs(dx) >= tolerance,
            changedY = Math.abs(dy) >= tolerance;

        onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);

        if (changedX) {
          onRight && self.deltaX > 0 && onRight(self);
          onLeft && self.deltaX < 0 && onLeft(self);
          onChangeX && onChangeX(self);
          onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
          prevDeltaX = self.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }

        if (changedY) {
          onDown && self.deltaY > 0 && onDown(self);
          onUp && self.deltaY < 0 && onUp(self);
          onChangeY && onChangeY(self);
          onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
          prevDeltaY = self.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }

        if (moved || dragged) {
          onMove && onMove(self);

          if (dragged) {
            onDrag(self);
            dragged = false;
          }

          moved = false;
        }

        locked && !(locked = false) && onLockAxis && onLockAxis(self);

        if (wheeled) {
          onWheel(self);
          wheeled = false;
        }

        id = 0;
      },
          onDelta = function onDelta(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;

        self._vx.update(x);

        self._vy.update(y);

        debounce ? id || (id = requestAnimationFrame(update)) : update();
      },
          onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
        if (lockAxis && !axis) {
          self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }

        if (axis !== "y") {
          deltaX[2] += x;

          self._vx.update(x, true);
        }

        if (axis !== "x") {
          deltaY[2] += y;

          self._vy.update(y, true);
        }

        debounce ? id || (id = requestAnimationFrame(update)) : update();
      },
          _onDrag = function _onDrag(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }

        e = _getEvent(e, preventDefault);
        var x = e.clientX,
            y = e.clientY,
            dx = x - self.x,
            dy = y - self.y,
            isDragging = self.isDragging;
        self.x = x;
        self.y = y;

        if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self);
        }
      },
          _onPress = self.onPress = function (e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }

        self.axis = axis = null;
        onStopDelayedCall.pause();
        self.isPressed = true;
        e = _getEvent(e);
        prevDeltaX = prevDeltaY = 0;
        self.startX = self.x = e.clientX;
        self.startY = self.y = e.clientY;

        self._vx.reset();

        self._vy.reset();

        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);

        self.deltaX = self.deltaY = 0;
        onPress && onPress(self);
      },
          _onRelease = function _onRelease(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }

        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);

        var wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
            eventData = _getEvent(e);

        if (!wasDragging) {
          self._vx.reset();

          self._vy.reset();

          if (preventDefault && allowClicks) {
            gsap.delayedCall(0.08, function () {
              if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                if (e.target.click) {
                  e.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }

        self.isDragging = self.isGesturing = self.isPressed = false;
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self);
        onRelease && onRelease(self, wasDragging);
      },
          _onGestureStart = function _onGestureStart(e) {
        return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
      },
          _onGestureEnd = function _onGestureEnd() {
        return (self.isGesturing = false) || onGestureEnd(self);
      },
          onScroll = function onScroll(e) {
        if (_ignoreCheck(e)) {
          return;
        }

        var x = scrollFuncX(),
            y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      },
          _onWheel = function _onWheel(e) {
        if (_ignoreCheck(e)) {
          return;
        }

        e = _getEvent(e, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
        onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      },
          _onMove = function _onMove(e) {
        if (_ignoreCheck(e)) {
          return;
        }

        var x = e.clientX,
            y = e.clientY,
            dx = x - self.x,
            dy = y - self.y;
        self.x = x;
        self.y = y;
        moved = true;
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      },
          _onHover = function _onHover(e) {
        self.event = e;
        onHover(self);
      },
          _onHoverEnd = function _onHoverEnd(e) {
        self.event = e;
        onHoverEnd(self);
      },
          _onClick = function _onClick(e) {
        return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
      };

      onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self.deltaX = self.deltaY = 0;
      self._vx = _getVelocityProp(0, 50, true);
      self._vy = _getVelocityProp(0, 50, true);
      self.scrollX = scrollFuncX;
      self.scrollY = scrollFuncY;
      self.isDragging = self.isGesturing = self.isPressed = false;

      self.enable = function (e) {
        if (!self.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);

          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);

            _addListener(ownerDoc, _eventTypes[2], _onRelease);

            _addListener(ownerDoc, _eventTypes[3], _onRelease);

            allowClicks && _addListener(target, "click", clickCapture, false, true);
            onClick && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }

          self.isEnabled = true;
          e && e.type && _onPress(e);
          onEnable && onEnable(self);
        }

        return self;
      };

      self.disable = function () {
        if (self.isEnabled) {
          _observers.filter(function (o) {
            return o !== self && _isViewport(o.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

          if (self.isPressed) {
            self._vx.reset();

            self._vy.reset();

            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }

          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);

          _removeListener(target, "wheel", _onWheel, capture);

          _removeListener(target, _eventTypes[0], _onPress, capture);

          _removeListener(ownerDoc, _eventTypes[2], _onRelease);

          _removeListener(ownerDoc, _eventTypes[3], _onRelease);

          _removeListener(target, "click", clickCapture, true);

          _removeListener(target, "click", _onClick);

          _removeListener(ownerDoc, "gesturestart", _onGestureStart);

          _removeListener(ownerDoc, "gestureend", _onGestureEnd);

          _removeListener(target, _pointerType + "enter", _onHover);

          _removeListener(target, _pointerType + "leave", _onHoverEnd);

          _removeListener(target, _pointerType + "move", _onMove);

          self.isEnabled = self.isPressed = self.isDragging = false;
          onDisable && onDisable(self);
        }
      };

      self.kill = function () {
        self.disable();

        var i = _observers.indexOf(self);

        i >= 0 && _observers.splice(i, 1);
        _normalizer === self && (_normalizer = 0);
      };

      _observers.push(self);

      isNormalizer && _isViewport(target) && (_normalizer = self);
      self.enable(event);
    };

    _createClass(Observer, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);

    return Observer;
  }();
  Observer.version = "3.11.3";

  Observer.create = function (vars) {
    return new Observer(vars);
  };

  Observer.register = _initCore;

  Observer.getAll = function () {
    return _observers.slice();
  };

  Observer.getById = function (id) {
    return _observers.filter(function (o) {
      return o.vars.id === id;
    })[0];
  };

  _getGSAP() && gsap.registerPlugin(Observer);

  /*!
   * ScrollTrigger 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */

  var gsap$1,
      _coreInitted$1,
      _win$1,
      _doc$1,
      _docEl$1,
      _body$1,
      _root$1,
      _resizeDelay,
      _toArray,
      _clamp$1,
      _time2,
      _syncInterval,
      _refreshing,
      _pointerIsDown,
      _transformProp,
      _i,
      _prevWidth,
      _prevHeight,
      _autoRefresh,
      _sort,
      _suppressOverwrites,
      _ignoreResize,
      _normalizer$1,
      _ignoreMobileResize,
      _baseScreenHeight,
      _baseScreenWidth,
      _fixIOSBug,
      _context,
      _scrollRestoration,
      _limitCallbacks,
      _startup$1 = 1,
      _getTime$1 = Date.now,
      _time1 = _getTime$1(),
      _lastScrollTime = 0,
      _enabled = 0,
      _pointerDownHandler = function _pointerDownHandler() {
    return _pointerIsDown = 1;
  },
      _pointerUpHandler = function _pointerUpHandler() {
    return _pointerIsDown = 0;
  },
      _passThrough = function _passThrough(v) {
    return v;
  },
      _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP$1 = function _getGSAP() {
    return gsap$1 || _windowExists() && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
  },
      _isViewport$1 = function _isViewport(e) {
    return !!~_root$1.indexOf(e);
  },
      _getBoundsFunc = function _getBoundsFunc(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport$1(element) ? function () {
      _winOffsets.width = _win$1.innerWidth;
      _winOffsets.height = _win$1.innerHeight;
      return _winOffsets;
    } : function () {
      return _getBounds(element);
    });
  },
      _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
    var d = _ref.d,
        d2 = _ref.d2,
        a = _ref.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
      return a()[d];
    } : function () {
      return (isViewport ? _win$1["inner" + d2] : scroller["client" + d2]) || 0;
    };
  },
      _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
      return _winOffsets;
    };
  },
      _maxScroll = function _maxScroll(element, _ref2) {
    var s = _ref2.s,
        d2 = _ref2.d2,
        d = _ref2.d,
        a = _ref2.a;
    return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport$1(element) ? (_docEl$1[s] || _body$1[s]) - (_win$1["inner" + d2] || _docEl$1["client" + d2] || _body$1["client" + d2]) : element[s] - element["offset" + d2];
  },
      _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  },
      _isString = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _endAnimation = function _endAnimation(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  },
      _callback = function _callback(self, func) {
    if (self.enabled) {
      var result = func(self);
      result && result.totalTime && (self.callbackAnimation = result);
    }
  },
      _abs = Math.abs,
      _left = "left",
      _top = "top",
      _right = "right",
      _bottom = "bottom",
      _width = "width",
      _height = "height",
      _Right = "Right",
      _Left = "Left",
      _Top = "Top",
      _Bottom = "Bottom",
      _padding = "padding",
      _margin = "margin",
      _Width = "Width",
      _Height = "Height",
      _px = "px",
      _getComputedStyle = function _getComputedStyle(element) {
    return _win$1.getComputedStyle(element);
  },
      _makePositionable = function _makePositionable(element) {
    var position = _getComputedStyle(element).position;

    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }

    return obj;
  },
      _getBounds = function _getBounds(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap$1.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1),
        bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  },
      _getSize = function _getSize(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  },
      _getLabelRatioArray = function _getLabelRatioArray(timeline) {
    var a = [],
        labels = timeline.labels,
        duration = timeline.duration(),
        p;

    for (p in labels) {
      a.push(labels[p] / duration);
    }

    return a;
  },
      _getClosestLabel = function _getClosestLabel(animation) {
    return function (value) {
      return gsap$1.utils.snap(_getLabelRatioArray(animation), value);
    };
  },
      _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
    var snap = gsap$1.utils.snap(snapIncrementOrArray),
        a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
      return a - b;
    });
    return a ? function (value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }

      var i;

      if (!direction) {
        return snap(value);
      }

      if (direction > 0) {
        value -= threshold;

        for (i = 0; i < a.length; i++) {
          if (a[i] >= value) {
            return a[i];
          }
        }

        return a[i - 1];
      } else {
        i = a.length;
        value += threshold;

        while (i--) {
          if (a[i] <= value) {
            return a[i];
          }
        }
      }

      return a[0];
    } : function (value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }

      var snapped = snap(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  },
      _getLabelAtDirection = function _getLabelAtDirection(timeline) {
    return function (value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
    };
  },
      _multiListener = function _multiListener(func, element, types, callback) {
    return types.split(",").forEach(function (type) {
      return func(element, type, callback);
    });
  },
      _addListener$1 = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  },
      _removeListener$1 = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  },
      _wheelListener = function _wheelListener(func, el, scrollFunc) {
    return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
  },
      _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
      _defaults = {
    toggleActions: "play",
    anticipatePin: 0
  },
      _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  },
      _offsetToPx = function _offsetToPx(value, size) {
    if (_isString(value)) {
      var eqIndex = value.indexOf("="),
          relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }

      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }

    return value;
  },
      _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor,
        endColor = _ref4.endColor,
        fontSize = _ref4.fontSize,
        indent = _ref4.indent,
        fontWeight = _ref4.fontWeight;

    var e = _doc$1.createElement("div"),
        useFixedPosition = _isViewport$1(container) || _getProxyProp(container, "pinType") === "fixed",
        isScroller = type.indexOf("scroller") !== -1,
        parent = useFixedPosition ? _body$1 : container,
        isStart = type.indexOf("start") !== -1,
        color = isStart ? startColor : endColor,
        css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];

    _positionMarker(e, 0, direction, isStart);

    return e;
  },
      _positionMarker = function _positionMarker(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    },
        side = direction[flipped ? "os2" : "p2"],
        oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap$1.set(marker, vars);
  },
      _triggers = [],
      _ids = {},
      _rafID,
      _sync = function _sync() {
    return _getTime$1() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  },
      _onScroll$1 = function _onScroll() {
    if (!_normalizer$1 || !_normalizer$1.isPressed || _normalizer$1.startX > _body$1.clientWidth) {
      _scrollers.cache++;

      if (_normalizer$1) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }

      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime$1();
    }
  },
      _setBaseDimensions = function _setBaseDimensions() {
    _baseScreenWidth = _win$1.innerWidth;
    _baseScreenHeight = _win$1.innerHeight;
  },
      _onResize = function _onResize() {
    _scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc$1.fullscreenElement && !_doc$1.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win$1.innerWidth || Math.abs(_win$1.innerHeight - _baseScreenHeight) > _win$1.innerHeight * 0.25) && _resizeDelay.restart(true);
  },
      _listeners = {},
      _emptyArray = [],
      _softRefresh = function _softRefresh() {
    return _removeListener$1(ScrollTrigger$1, "scrollEnd", _softRefresh) || _refreshAll(true);
  },
      _dispatch = function _dispatch(type) {
    return _listeners[type] && _listeners[type].map(function (f) {
      return f();
    }) || _emptyArray;
  },
      _savedStyles = [],
      _revertRecorded = function _revertRecorded(media) {
    for (var i = 0; i < _savedStyles.length; i += 5) {
      if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
      }
    }
  },
      _revertAll = function _revertAll(kill, media) {
    var trigger;

    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];

      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }

    media && _revertRecorded(media);
    media || _dispatch("revert");
  },
      _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function (obj) {
      return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString(scrollRestoration) && (_win$1.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  },
      _refreshingAll,
      _refreshID = 0,
      _queueRefreshID,
      _queueRefreshAll = function _queueRefreshAll() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function () {
        return id === _refreshID && _refreshAll(true);
      });
    }
  },
      _refreshAll = function _refreshAll(force, skipRevert) {
    if (_lastScrollTime && !force) {
      _addListener$1(ScrollTrigger$1, "scrollEnd", _softRefresh);

      return;
    }

    _refreshingAll = ScrollTrigger$1.isRefreshing = true;

    _scrollers.forEach(function (obj) {
      return _isFunction(obj) && obj.cacheID++ && (obj.rec = obj());
    });

    var refreshInits = _dispatch("refreshInit");

    _sort && ScrollTrigger$1.sort();
    skipRevert || _revertAll();

    _scrollers.forEach(function (obj) {
      if (_isFunction(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });

    _triggers.slice(0).forEach(function (t) {
      return t.refresh();
    });

    _triggers.forEach(function (t, i) {
      if (t._subPinOffset && t.pin) {
        var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
            original = t.pin[prop];
        t.revert(true, 1);
        t.adjustPinSpacing(t.pin[prop] - original);
        t.revert(false, 1);
      }
    });

    _triggers.forEach(function (t) {
      return t.vars.end === "max" && t.setPositions(t.start, Math.max(t.start + 1, _maxScroll(t.scroller, t._dir)));
    });

    refreshInits.forEach(function (result) {
      return result && result.render && result.render(-1);
    });

    _scrollers.forEach(function (obj) {
      if (_isFunction(obj)) {
        obj.smooth && requestAnimationFrame(function () {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });

    _clearScrollMemory(_scrollRestoration, 1);

    _resizeDelay.pause();

    _refreshID++;

    _updateAll(2);

    _triggers.forEach(function (t) {
      return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
    });

    _refreshingAll = ScrollTrigger$1.isRefreshing = false;

    _dispatch("refresh");
  },
      _lastScroll = 0,
      _direction = 1,
      _primary,
      _updateAll = function _updateAll(force) {
    if (!_refreshingAll || force === 2) {
      ScrollTrigger$1.isUpdating = true;
      _primary && _primary.update(0);

      var l = _triggers.length,
          time = _getTime$1(),
          recordVelocity = time - _time1 >= 50,
          scroll = l && _triggers[0].scroll();

      _direction = _lastScroll > scroll ? -1 : 1;
      _lastScroll = scroll;

      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;

          _dispatch("scrollEnd");
        }

        _time2 = _time1;
        _time1 = time;
      }

      if (_direction < 0) {
        _i = l;

        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }

        _direction = 1;
      } else {
        for (_i = 0; _i < l; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }

      ScrollTrigger$1.isUpdating = false;
    }

    _rafID = 0;
  },
      _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
      _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
      _swapPinOut = function _swapPinOut(pin, spacer, state) {
    _setState(state);

    var cache = pin._gsap;

    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;

      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }

    pin._gsap.swappedIn = false;
  },
      _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i = _propNamesToCopy.length,
          spacerStyle = spacer.style,
          pinStyle = pin.style,
          p;

      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }

      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

      _setState(spacerState);

      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];

      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }

      pin._gsap.swappedIn = true;
    }
  },
      _capsExp = /([A-Z])/g,
      _setState = function _setState(state) {
    if (state) {
      var style = state.t.style,
          l = state.length,
          i = 0,
          p,
          value;
      (state.t._gsap || gsap$1.core.getCache(state.t)).uncache = 1;

      for (; i < l; i += 2) {
        value = state[i + 1];
        p = state[i];

        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
        }
      }
    }
  },
      _getState = function _getState(element) {
    var l = _stateProps.length,
        style = element.style,
        state = [],
        i = 0;

    for (; i < l; i++) {
      state.push(_stateProps[i], style[_stateProps[i]]);
    }

    state.t = element;
    return state;
  },
      _copyState = function _copyState(state, override, omitOffsets) {
    var result = [],
        l = state.length,
        i = omitOffsets ? 8 : 0,
        p;

    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, p in override ? override[p] : state[i + 1]);
    }

    result.t = state.t;
    return result;
  },
      _winOffsets = {
    left: 0,
    top: 0
  },
      _parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
    _isFunction(value) && (value = value(self));

    if (_isString(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }

    var time = containerAnimation ? containerAnimation.time() : 0,
        p1,
        p2,
        element;
    containerAnimation && containerAnimation.seek(0);

    if (!_isNumber(value)) {
      _isFunction(trigger) && (trigger = trigger(self));
      var offsets = (value || "0").split(" "),
          bounds,
          localOffset,
          globalOffset,
          display;
      element = _getTarget(trigger) || _body$1;
      bounds = _getBounds(element) || {};

      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }

      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else if (markerScroller) {
      _positionMarker(markerScroller, scrollerSize, direction, true);
    }

    if (marker) {
      var position = value + scrollerSize,
          isStart = marker._isStart;
      p1 = "scroll" + direction.d2;

      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body$1[p1], _docEl$1[p1]) : marker.parentNode[p1]) <= position + 1);

      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }

    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }

    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  },
      _prefixExp = /(webkit|moz|length|cssText|inset)/i,
      _reparent = function _reparent(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style,
          p,
          cs;

      if (parent === _body$1) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle(element);

        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }

        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }

      gsap$1.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  },
      _getTweenCreator = function _getTweenCreator(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction),
        prop = "_scroll" + direction.p2,
        lastScroll1,
        lastScroll2,
        getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween.tween,
          onComplete = vars.onComplete,
          modifiers = {};
      initialValue = initialValue || getScroll();
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      lastScroll1 = Math.round(initialValue);
      vars[prop] = scrollTo;
      vars.modifiers = modifiers;

      modifiers[prop] = function (value) {
        value = Math.round(getScroll());

        if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 3 && Math.abs(value - lastScroll2) > 3) {
          tween.kill();
          getTween.tween = 0;
        } else {
          value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
        }

        lastScroll2 = lastScroll1;
        return lastScroll1 = Math.round(value);
      };

      vars.onComplete = function () {
        getTween.tween = 0;
        onComplete && onComplete.call(tween);
      };

      tween = getTween.tween = gsap$1.to(scroller, vars);
      return tween;
    };

    scroller[prop] = getScroll;

    getScroll.wheelHandler = function () {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };

    _addListener$1(scroller, "wheel", getScroll.wheelHandler);

    return getTween;
  };

  var ScrollTrigger$1 = function () {
    function ScrollTrigger(vars, animation) {
      _coreInitted$1 || ScrollTrigger.register(gsap$1) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      this.init(vars, animation);
    }

    var _proto = ScrollTrigger.prototype;

    _proto.init = function init(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);

      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough;
        return;
      }

      vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults);

      var _vars = vars,
          onUpdate = _vars.onUpdate,
          toggleClass = _vars.toggleClass,
          id = _vars.id,
          onToggle = _vars.onToggle,
          onRefresh = _vars.onRefresh,
          scrub = _vars.scrub,
          trigger = _vars.trigger,
          pin = _vars.pin,
          pinSpacing = _vars.pinSpacing,
          invalidateOnRefresh = _vars.invalidateOnRefresh,
          anticipatePin = _vars.anticipatePin,
          onScrubComplete = _vars.onScrubComplete,
          onSnapComplete = _vars.onSnapComplete,
          once = _vars.once,
          snap = _vars.snap,
          pinReparent = _vars.pinReparent,
          pinSpacer = _vars.pinSpacer,
          containerAnimation = _vars.containerAnimation,
          fastScrollEnd = _vars.fastScrollEnd,
          preventOverlaps = _vars.preventOverlaps,
          direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical,
          isToggle = !scrub && scrub !== 0,
          scroller = _getTarget(vars.scroller || _win$1),
          scrollerCache = gsap$1.core.getCache(scroller),
          isViewport = _isViewport$1(scroller),
          useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed",
          callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
          toggleActions = isToggle && vars.toggleActions.split(" "),
          markers = "markers" in vars ? vars.markers : _defaults.markers,
          borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
          self = this,
          onRefreshInit = vars.onRefreshInit && function () {
        return vars.onRefreshInit(self);
      },
          getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
          getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
          lastSnap = 0,
          lastRefresh = 0,
          scrollFunc = _getScrollFunc(scroller, direction),
          tweenTo,
          pinCache,
          snapFunc,
          scroll1,
          scroll2,
          start,
          end,
          markerStart,
          markerEnd,
          markerStartTrigger,
          markerEndTrigger,
          markerVars,
          change,
          pinOriginalState,
          pinActiveState,
          pinState,
          spacer,
          offset,
          pinGetter,
          pinSetter,
          pinStart,
          pinChange,
          spacingStart,
          spacerState,
          markerStartSetter,
          markerEndSetter,
          cs,
          snap1,
          snap2,
          scrubTween,
          scrubSmooth,
          snapDurClamp,
          snapDelayedCall,
          prevProgress,
          prevScroll,
          prevAnimProgress,
          caMarkerSetter,
          customRevertReturn;

      _context(self);

      self._dir = direction;
      anticipatePin *= 45;
      self.scroller = scroller;
      self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self.vars = vars;
      animation = animation || vars.animation;

      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self);
      }

      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

      self.scrubDuration = function (value) {
        scrubSmooth = _isNumber(value) && value;

        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap$1.to(animation, {
            ease: "expo",
            totalProgress: "+=0.001",
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self);
            }
          });
        }
      };

      if (animation) {
        animation.vars.lazy = false;
        animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self.animation = animation.pause();
        animation.scrollTrigger = self;
        self.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }

      _triggers.push(self);

      if (snap) {
        if (!_isObject(snap) || snap.push) {
          snap = {
            snapTo: snap
          };
        }

        "scrollBehavior" in _body$1.style && gsap$1.set(isViewport ? [_body$1, _docEl$1] : scroller, {
          scrollBehavior: "auto"
        });

        _scrollers.forEach(function (o) {
          return _isFunction(o) && o.target === (isViewport ? _doc$1.scrollingElement || _docEl$1 : scroller) && (o.smooth = false);
        });

        snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
          return _snapDirectional(snap.snapTo)(value, _getTime$1() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap$1.utils.snap(snap.snapTo);
        snapDurClamp = snap.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject(snapDurClamp) ? _clamp$1(snapDurClamp.min, snapDurClamp.max) : _clamp$1(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap$1.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
          var scroll = scrollFunc(),
              refreshedRecently = _getTime$1() - lastRefresh < 500,
              tween = tweenTo.tween;

          if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change,
                totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
                velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime$1() - _time2) * 1000 || 0,
                change1 = gsap$1.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
                naturalEnd = progress + (snap.inertia === false ? 0 : change1),
                endValue = _clamp$1(0, 1, snapFunc(naturalEnd, self)),
                endScroll = Math.round(start + endValue * change),
                _snap = snap,
                onStart = _snap.onStart,
                _onInterrupt = _snap.onInterrupt,
                _onComplete = _snap.onComplete;

            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                return;
              }

              if (snap.inertia === false) {
                change1 = endValue - progress;
              }

              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap.ease || "power3",
                data: _abs(endScroll - scroll),
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                },
                onComplete: function onComplete() {
                  self.update();
                  lastSnap = scrollFunc();
                  snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                  onSnapComplete && onSnapComplete(self);
                  _onComplete && _onComplete(self);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self, tweenTo.tween);
            }
          } else if (self.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }

      id && (_ids[id] = self);
      trigger = self.trigger = _getTarget(trigger || pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });

      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self.pin = pin;
        pinCache = gsap$1.core.getCache(pin);

        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }

          pinCache.spacer = spacer = pinSpacer || _doc$1.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }

        vars.force3D !== false && gsap$1.set(pin, {
          force3D: true
        });
        self.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap$1.getProperty(pin);
        pinSetter = gsap$1.quickSetter(pin, direction.a, _px);

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin);
      }

      if (markers) {
        markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];

        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);

        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap$1.quickSetter([markerStart, markerEnd], direction.a, _px));

        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body$1 : scroller);

          gsap$1.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap$1.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap$1.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }

      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate,
            oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function () {
          self.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(oldParams || []);
        });
      }

      self.previous = function () {
        return _triggers[_triggers.indexOf(self) - 1];
      };

      self.next = function () {
        return _triggers[_triggers.indexOf(self) + 1];
      };

      self.revert = function (revert, temp) {
        if (!temp) {
          return self.kill(true);
        }

        var r = revert !== false || !self.enabled,
            prevRefreshing = _refreshing;

        if (r !== self.isReverted) {
          if (r) {
            prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
            prevProgress = self.progress;
            prevAnimProgress = animation && animation.progress();
          }

          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
            return m.style.display = r ? "none" : "block";
          });

          if (r) {
            _refreshing = 1;
            self.update(r);
          }

          if (pin) {
            if (r) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
            }
          }

          r || self.update(r);
          _refreshing = prevRefreshing;
          self.isReverted = r;
        }
      };

      self.refresh = function (soft, force) {
        if ((_refreshing || !self.enabled) && !force) {
          return;
        }

        if (pin && soft && _lastScrollTime) {
          _addListener$1(ScrollTrigger, "scrollEnd", _softRefresh);

          return;
        }

        !_refreshingAll && onRefreshInit && onRefreshInit(self);
        _refreshing = 1;
        lastRefresh = _getTime$1();

        if (tweenTo.tween) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }

        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.revert({
          kill: false
        }).invalidate();
        self.isReverted || self.revert(true, true);
        self._subPinOffset = false;

        var size = getScrollerSize(),
            scrollerBounds = getScrollerOffsets(),
            max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
            offset = 0,
            otherPinOffset = 0,
            parsedEnd = vars.end,
            parsedEndTrigger = vars.endTrigger || trigger,
            parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
            pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer),
            triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
            i = triggerIndex,
            cs,
            bounds,
            scroll,
            isVertical,
            override,
            curTrigger,
            curPin,
            oppositeScroll,
            initted,
            revertedPins;

        while (i--) {
          curTrigger = _triggers[i];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
          curPin = curTrigger.pin;

          if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }

          if (curTrigger !== _triggers[i]) {
            triggerIndex--;
            i--;
          }
        }

        _isFunction(parsedStart) && (parsedStart = parsedStart(self));
        start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -0.001 : 0);
        _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

        if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString(parsedStart) ? parsedStart : start + offset;
            parsedEndTrigger = trigger;
          }
        }

        end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -0.001;
        change = end - start || (start -= 0.01) && 0.001;
        offset = 0;
        i = triggerIndex;

        while (i--) {
          curTrigger = _triggers[i];
          curPin = curTrigger.pin;

          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs = curTrigger.end - curTrigger.start;

            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && !_isNumber(parsedStart)) {
              offset += cs * (1 - curTrigger.progress);
            }

            curPin === pin && (otherPinOffset += cs);
          }
        }

        start += offset;
        end += offset;
        self._pinPush = otherPinOffset;

        if (markerStart && offset) {
          cs = {};
          cs[direction.a] = "+=" + offset;
          pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
          gsap$1.set([markerStart, markerEnd], cs);
        }

        if (pin) {
          cs = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          !max && end > 1 && ((isViewport ? _body$1 : scroller).style["overflow-" + direction.a] = "scroll");

          _swapPinIn(pin, spacer, cs);

          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            i && spacerState.push(direction.d, i + _px);

            _setState(spacerState);

            if (pinnedContainer) {
              _triggers.forEach(function (t) {
                if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                  t._subPinOffset = true;
                }
              });
            }

            useFixedPosition && scrollFunc(prevScroll);
          }

          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs[_padding];
            override[_padding + _Top] = cs[_padding + _Top];
            override[_padding + _Right] = cs[_padding + _Right];
            override[_padding + _Bottom] = cs[_padding + _Bottom];
            override[_padding + _Left] = cs[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }

          if (animation) {
            initted = animation._initted;

            _suppressOverwrites(1);

            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            change !== pinChange && useFixedPosition && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());

            _suppressOverwrites(0);
          } else {
            pinChange = change;
          }
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;

          while (bounds && bounds !== _body$1) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }

            bounds = bounds.parentNode;
          }
        }

        revertedPins && revertedPins.forEach(function (t) {
          return t.revert(false, true);
        });
        self.start = start;
        self.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();

        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self.scroll.rec = 0;
        }

        self.revert(false, true);

        if (snapDelayedCall) {
          lastSnap = -1;
          self.isActive && scrollFunc(start + change * prevProgress);
          snapDelayedCall.restart(true);
        }

        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);

        if (prevProgress !== self.progress || containerAnimation) {
          animation && !isToggle && animation.totalProgress(prevProgress, true);
          self.progress = (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }

        pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
        onRefresh && !_refreshingAll && onRefresh(self);
      };

      self.getVelocity = function () {
        return (scrollFunc() - scroll2) / (_getTime$1() - _time2) * 1000 || 0;
      };

      self.endAnimation = function () {
        _endAnimation(self.callbackAnimation);

        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
        }
      };

      self.labelToScroll = function (label) {
        return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };

      self.getTrailing = function (name) {
        var i = _triggers.indexOf(self),
            a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

        return (_isString(name) ? a.filter(function (t) {
          return t.vars.preventOverlaps === name;
        }) : a).filter(function (t) {
          return self.direction > 0 ? t.end <= start : t.start >= end;
        });
      };

      self.update = function (reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }

        var scroll = _refreshingAll ? prevScroll : self.scroll(),
            p = reset ? 0 : (scroll - start) / change,
            clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
            prevProgress = self.progress,
            isActive,
            wasActive,
            toggleState,
            action,
            stateChanged,
            toggled,
            isAtMax,
            isTakingAction;

        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;

          if (snap) {
            snap2 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }

        anticipatePin && !clipped && pin && !_refreshing && !_startup$1 && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime$1() - _time2) * anticipatePin && (clipped = 0.0001);

        if (clipped !== prevProgress && self.enabled) {
          isActive = self.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress && prevProgress < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress;
          self.direction = clipped > prevProgress ? 1 : -1;
          self.progress = clipped;

          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;

            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }

          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
            return t.endAnimation();
          }));

          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup$1) {
              (containerAnimation || _primary && _primary !== self) && scrubTween.render(scrubTween._dp._time - scrubTween._start);

              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!_refreshing);
            }
          }

          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

            if (!useFixedPosition) {
              pinSetter(_round(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);

              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, true),
                      _offset = scroll - start;

                  _reparent(pin, _body$1, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }

              _setState(isActive || isAtMax ? pinActiveState : pinState);

              pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }

          snap && !tweenTo.tween && !_refreshing && !_startup$1 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self);

          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }

              onUpdate && onUpdate(self);
            }

            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback(self, onToggle);
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
              once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);

              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback(self, callbacks[toggleState]);
              }
            }

            if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self.callbackAnimation);

              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self);
          }
        }

        if (markerEndSetter) {
          var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n);
        }

        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };

      self.enable = function (reset, refresh) {
        if (!self.enabled) {
          self.enabled = true;

          _addListener$1(scroller, "resize", _onResize);

          _addListener$1(isViewport ? _doc$1 : scroller, "scroll", _onScroll$1);

          onRefreshInit && _addListener$1(ScrollTrigger, "refreshInit", onRefreshInit);

          if (reset !== false) {
            self.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }

          refresh !== false && self.refresh();
        }
      };

      self.getTween = function (snap) {
        return snap && tweenTo ? tweenTo.tween : scrubTween;
      };

      self.setPositions = function (newStart, newEnd) {
        if (pin) {
          pinStart += newStart - start;
          pinChange += newEnd - newStart - change;
          pinSpacing === _padding && self.adjustPinSpacing(newEnd - newStart - change);
        }

        self.start = start = newStart;
        self.end = end = newEnd;
        change = newEnd - newStart;
        self.update();
      };

      self.adjustPinSpacing = function (amount) {
        if (spacerState) {
          var i = spacerState.indexOf(direction.d) + 1;
          spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;

          _setState(spacerState);
        }
      };

      self.disable = function (reset, allowAnimation) {
        if (self.enabled) {
          reset !== false && self.revert(true, true);
          self.enabled = self.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener$1(ScrollTrigger, "refreshInit", onRefreshInit);

          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }

          if (!isViewport) {
            var i = _triggers.length;

            while (i--) {
              if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                return;
              }
            }

            _removeListener$1(scroller, "resize", _onResize);

            _removeListener$1(scroller, "scroll", _onScroll$1);
          }
        }
      };

      self.kill = function (revert, allowAnimation) {
        self.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];

        var i = _triggers.indexOf(self);

        i >= 0 && _triggers.splice(i, 1);
        i === _i && _direction > 0 && _i--;
        i = 0;

        _triggers.forEach(function (t) {
          return t.scroller === self.scroller && (i = 1);
        });

        i || _refreshingAll || (self.scroll.rec = 0);

        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        _primary === self && (_primary = 0);

        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i = 0;

          _triggers.forEach(function (t) {
            return t.pin === pin && i++;
          });

          i || (pinCache.spacer = 0);
        }

        vars.onKill && vars.onKill(self);
      };

      self.enable(false, false);
      customRevertReturn && customRevertReturn(self);
      !animation || !animation.add || change ? self.refresh() : gsap$1.delayedCall(0.01, function () {
        return start || end || self.refresh();
      }) && (change = 0.01) && (start = end = 0);
      pin && _queueRefreshAll();
    };

    ScrollTrigger.register = function register(core) {
      if (!_coreInitted$1) {
        gsap$1 = core || _getGSAP$1();
        _windowExists() && window.document && ScrollTrigger.enable();
        _coreInitted$1 = _enabled;
      }

      return _coreInitted$1;
    };

    ScrollTrigger.defaults = function defaults(config) {
      if (config) {
        for (var p in config) {
          _defaults[p] = config[p];
        }
      }

      return _defaults;
    };

    ScrollTrigger.disable = function disable(reset, kill) {
      _enabled = 0;

      _triggers.forEach(function (trigger) {
        return trigger[kill ? "kill" : "disable"](reset);
      });

      _removeListener$1(_win$1, "wheel", _onScroll$1);

      _removeListener$1(_doc$1, "scroll", _onScroll$1);

      clearInterval(_syncInterval);

      _removeListener$1(_doc$1, "touchcancel", _passThrough);

      _removeListener$1(_body$1, "touchstart", _passThrough);

      _multiListener(_removeListener$1, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);

      _multiListener(_removeListener$1, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);

      _resizeDelay.kill();

      _iterateAutoRefresh(_removeListener$1);

      for (var i = 0; i < _scrollers.length; i += 3) {
        _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 1]);

        _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 2]);
      }
    };

    ScrollTrigger.enable = function enable() {
      _win$1 = window;
      _doc$1 = document;
      _docEl$1 = _doc$1.documentElement;
      _body$1 = _doc$1.body;

      if (gsap$1) {
        _toArray = gsap$1.utils.toArray;
        _clamp$1 = gsap$1.utils.clamp;
        _context = gsap$1.core.context || _passThrough;
        _suppressOverwrites = gsap$1.core.suppressOverwrites || _passThrough;
        _scrollRestoration = _win$1.history.scrollRestoration || "auto";
        gsap$1.core.globals("ScrollTrigger", ScrollTrigger);

        if (_body$1) {
          _enabled = 1;
          Observer.register(gsap$1);
          ScrollTrigger.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);

          _addListener$1(_win$1, "wheel", _onScroll$1);

          _root$1 = [_win$1, _doc$1, _docEl$1, _body$1];

          if (gsap$1.matchMedia) {
            ScrollTrigger.matchMedia = function (vars) {
              var mm = gsap$1.matchMedia(),
                  p;

              for (p in vars) {
                mm.add(p, vars[p]);
              }

              return mm;
            };

            gsap$1.addEventListener("matchMediaInit", function () {
              return _revertAll();
            });
            gsap$1.addEventListener("matchMediaRevert", function () {
              return _revertRecorded();
            });
            gsap$1.addEventListener("matchMedia", function () {
              _refreshAll(0, 1);

              _dispatch("matchMedia");
            });
            gsap$1.matchMedia("(orientation: portrait)", function () {
              _setBaseDimensions();

              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }

          _setBaseDimensions();

          _addListener$1(_doc$1, "scroll", _onScroll$1);

          var bodyStyle = _body$1.style,
              border = bodyStyle.borderTopStyle,
              AnimationProto = gsap$1.core.Animation.prototype,
              bounds,
              i;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds(_body$1);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap$1.delayedCall(0.5, function () {
            return _startup$1 = 0;
          });

          _addListener$1(_doc$1, "touchcancel", _passThrough);

          _addListener$1(_body$1, "touchstart", _passThrough);

          _multiListener(_addListener$1, _doc$1, "pointerdown,touchstart,mousedown", _pointerDownHandler);

          _multiListener(_addListener$1, _doc$1, "pointerup,touchend,mouseup", _pointerUpHandler);

          _transformProp = gsap$1.utils.checkPrefix("transform");

          _stateProps.push(_transformProp);

          _coreInitted$1 = _getTime$1();
          _resizeDelay = gsap$1.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc$1, "visibilitychange", function () {
            var w = _win$1.innerWidth,
                h = _win$1.innerHeight;

            if (_doc$1.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc$1, "DOMContentLoaded", _refreshAll, _win$1, "load", _refreshAll, _win$1, "resize", _onResize];

          _iterateAutoRefresh(_addListener$1);

          _triggers.forEach(function (trigger) {
            return trigger.enable(0, 1);
          });

          for (i = 0; i < _scrollers.length; i += 3) {
            _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 1]);

            _wheelListener(_removeListener$1, _scrollers[i], _scrollers[i + 2]);
          }
        }
      }
    };

    ScrollTrigger.config = function config(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);

      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener$1) || _iterateAutoRefresh(_addListener$1, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };

    ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
      var t = _getTarget(target),
          i = _scrollers.indexOf(t),
          isViewport = _isViewport$1(t);

      if (~i) {
        _scrollers.splice(i, isViewport ? 6 : 2);
      }

      if (vars) {
        isViewport ? _proxies.unshift(_win$1, vars, _body$1, vars, _docEl$1, vars) : _proxies.unshift(t, vars);
      }
    };

    ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function (t) {
        return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
      });
    };

    ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(),
          offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win$1.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win$1.innerHeight;
    };

    ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(),
          size = bounds[horizontal ? _width : _height],
          offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win$1.innerWidth : (bounds.top + offset) / _win$1.innerHeight;
    };

    ScrollTrigger.killAll = function killAll(allowListeners) {
      _triggers.forEach(function (t) {
        return t.vars.id !== "ScrollSmoother" && t.kill();
      });

      if (allowListeners !== true) {
        var listeners = _listeners.killAll || [];
        _listeners = {};
        listeners.forEach(function (f) {
          return f();
        });
      }
    };

    return ScrollTrigger;
  }();
  ScrollTrigger$1.version = "3.11.3";

  ScrollTrigger$1.saveStyles = function (targets) {
    return targets ? _toArray(targets).forEach(function (target) {
      if (target && target.style) {
        var i = _savedStyles.indexOf(target);

        i >= 0 && _savedStyles.splice(i, 5);

        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap$1.core.getCache(target), _context());
      }
    }) : _savedStyles;
  };

  ScrollTrigger$1.revert = function (soft, media) {
    return _revertAll(!soft, media);
  };

  ScrollTrigger$1.create = function (vars, animation) {
    return new ScrollTrigger$1(vars, animation);
  };

  ScrollTrigger$1.refresh = function (safe) {
    return safe ? _onResize() : (_coreInitted$1 || ScrollTrigger$1.register()) && _refreshAll(true);
  };

  ScrollTrigger$1.update = _updateAll;
  ScrollTrigger$1.clearScrollMemory = _clearScrollMemory;

  ScrollTrigger$1.maxScroll = function (element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };

  ScrollTrigger$1.getScrollFunc = function (element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };

  ScrollTrigger$1.getById = function (id) {
    return _ids[id];
  };

  ScrollTrigger$1.getAll = function () {
    return _triggers.filter(function (t) {
      return t.vars.id !== "ScrollSmoother";
    });
  };

  ScrollTrigger$1.isScrolling = function () {
    return !!_lastScrollTime;
  };

  ScrollTrigger$1.snapDirectional = _snapDirectional;

  ScrollTrigger$1.addEventListener = function (type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };

  ScrollTrigger$1.removeEventListener = function (type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  };

  ScrollTrigger$1.batch = function (targets, vars) {
    var result = [],
        varsCopy = {},
        interval = vars.interval || 0.016,
        batchMax = vars.batchMax || 1e9,
        proxyCallback = function proxyCallback(type, callback) {
      var elements = [],
          triggers = [],
          delay = gsap$1.delayedCall(interval, function () {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function (self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    },
        p;

    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }

    if (_isFunction(batchMax)) {
      batchMax = batchMax();

      _addListener$1(ScrollTrigger$1, "refresh", function () {
        return batchMax = vars.batchMax();
      });
    }

    _toArray(targets).forEach(function (target) {
      var config = {};

      for (p in varsCopy) {
        config[p] = varsCopy[p];
      }

      config.trigger = target;
      result.push(ScrollTrigger$1.create(config));
    });

    return result;
  };

  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  },
      _allowNativePanning = function _allowNativePanning(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }

    target === _docEl$1 && _allowNativePanning(_body$1, direction);
  },
      _overflow = {
    auto: 1,
    scroll: 1
  },
      _nestedScroll = function _nestedScroll(_ref5) {
    var event = _ref5.event,
        target = _ref5.target,
        axis = _ref5.axis;

    var node = (event.changedTouches ? event.changedTouches[0] : event).target,
        cache = node._gsap || gsap$1.core.getCache(node),
        time = _getTime$1(),
        cs;

    if (!cache._isScrollT || time - cache._isScrollT > 2000) {
      while (node && node.scrollHeight <= node.clientHeight) {
        node = node.parentNode;
      }

      cache._isScroll = node && !_isViewport$1(node) && node !== target && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }

    if (cache._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  },
      _inputObserver = function _inputObserver(target, type, inputs, nested) {
    return Observer.create({
      target: target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type: type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener$1(_doc$1, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener$1(_doc$1, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  },
      _inputExp = /(input|label|select|textarea)/i,
      _inputIsFocused,
      _captureInputs = function _captureInputs(e) {
    var isInput = _inputExp.test(e.target.tagName);

    if (isInput || _inputIsFocused) {
      e._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  },
      _getScrollNormalizer = function _getScrollNormalizer(vars) {
    _isObject(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";

    var _vars2 = vars,
        normalizeScrollX = _vars2.normalizeScrollX,
        momentum = _vars2.momentum,
        allowNestedScroll = _vars2.allowNestedScroll,
        self,
        maxY,
        target = _getTarget(vars.target) || _docEl$1,
        smoother = gsap$1.core.globals().ScrollSmoother,
        smootherInstance = smoother && smoother.get(),
        content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()),
        scrollFuncY = _getScrollFunc(target, _vertical),
        scrollFuncX = _getScrollFunc(target, _horizontal),
        scale = 1,
        initialScale = (Observer.isTouch && _win$1.visualViewport ? _win$1.visualViewport.scale * _win$1.visualViewport.width : _win$1.outerWidth) / _win$1.innerWidth,
        wheelRefresh = 0,
        resolveMomentumDuration = _isFunction(momentum) ? function () {
      return momentum(self);
    } : function () {
      return momentum || 2.8;
    },
        lastRefreshID,
        skipTouchMove,
        inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
        resumeTouchMove = function resumeTouchMove() {
      return skipTouchMove = false;
    },
        scrollClampX = _passThrough,
        scrollClampY = _passThrough,
        updateClamps = function updateClamps() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp$1(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp$1(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    },
        removeContentOffset = function removeContentOffset() {
      content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    },
        ignoreDrag = function ignoreDrag() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);

        var offset = _round(self.deltaY / 2),
            scroll = scrollClampY(scrollFuncY.v - offset);

        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;

          var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);

          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
          content._gsap.y = y + "px";
          scrollFuncY.cacheID = _scrollers.cache;

          _updateAll();
        }

        return true;
      }

      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    },
        tween,
        startScrollX,
        startScrollY,
        onStopDelayedCall,
        onResize = function onResize() {
      updateClamps();

      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };

    content && gsap$1.set(content, {
      y: "+=0"
    });

    vars.ignoreCheck = function (e) {
      return _fixIOSBug && e.type === "touchmove" && ignoreDrag() || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };

    vars.onPress = function () {
      var prevScale = scale;
      scale = _round((_win$1.visualViewport && _win$1.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };

    vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
      scrollFuncY.offset && removeContentOffset();

      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(),
            currentScroll,
            endScroll;

        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }

        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);

        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap$1.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }
    };

    vars.onWheel = function () {
      tween._ts && tween.pause();

      if (_getTime$1() - wheelRefresh > 1000) {
        lastRefreshID = 0;
        wheelRefresh = _getTime$1();
      }
    };

    vars.onChange = function (self, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1]));

      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy,
            y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1],
            yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }

      (dy || dx) && _updateAll();
    };

    vars.onEnable = function () {
      _allowNativePanning(target, normalizeScrollX ? false : "x");

      ScrollTrigger$1.addEventListener("refresh", onResize);

      _addListener$1(_win$1, "resize", onResize);

      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }

      inputObserver.enable();
    };

    vars.onDisable = function () {
      _allowNativePanning(target, true);

      _removeListener$1(_win$1, "resize", onResize);

      ScrollTrigger$1.removeEventListener("refresh", onResize);
      inputObserver.kill();
    };

    vars.lockAxis = vars.lockAxis !== false;
    self = new Observer(vars);
    self.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap$1.ticker.add(_passThrough);
    onStopDelayedCall = self._dc;
    tween = gsap$1.to(self, {
      ease: "power4",
      paused: true,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self;
  };

  ScrollTrigger$1.sort = function (func) {
    return _triggers.sort(func || function (a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };

  ScrollTrigger$1.observe = function (vars) {
    return new Observer(vars);
  };

  ScrollTrigger$1.normalizeScroll = function (vars) {
    if (typeof vars === "undefined") {
      return _normalizer$1;
    }

    if (vars === true && _normalizer$1) {
      return _normalizer$1.enable();
    }

    if (vars === false) {
      return _normalizer$1 && _normalizer$1.kill();
    }

    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer$1 && _normalizer$1.target === normalizer.target && _normalizer$1.kill();
    _isViewport$1(normalizer.target) && (_normalizer$1 = normalizer);
    return normalizer;
  };

  ScrollTrigger$1.core = {
    _getVelocityProp: _getVelocityProp,
    _inputObserver: _inputObserver,
    _scrollers: _scrollers,
    _proxies: _proxies,
    bridge: {
      ss: function ss() {
        _lastScrollTime || _dispatch("scrollStart");
        _lastScrollTime = _getTime$1();
      },
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP$1() && gsap$1.registerPlugin(ScrollTrigger$1);

  exports.ScrollTrigger = ScrollTrigger$1;
  exports.default = ScrollTrigger$1;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /*!
   * GSAP 3.11.3
   * https://greensock.com
   *
   * @license Copyright 2008-2022, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  },
      _suppressOverwrites,
      _reverting,
      _context,
      _bigNum = 1e8,
      _tinyNum = 1 / _bigNum,
      _2PI = Math.PI * 2,
      _HALF_PI = _2PI / 4,
      _gsID = 0,
      _sqrt = Math.sqrt,
      _cos = Math.cos,
      _sin = Math.sin,
      _isString = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
      _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  },
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  },
      _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
      _isArray = Array.isArray,
      _strictNumExp = /(?:-?\.?\d|\.)+/gi,
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      _relExp = /[+-]=-?[.\d]+/,
      _delimitedValueExp = /[^,'"\[\]\s]+/gi,
      _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      _globalTimeline,
      _win,
      _coreInitted,
      _doc,
      _globals = {},
      _installScope = {},
      _coreReady,
      _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  },
      _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  },
      _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  },
      _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  },
      _emptyFunc = function _emptyFunc() {
    return 0;
  },
      _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  },
      _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  },
      _revertConfig = {
    suppressEvents: true
  },
      _reservedProps = {},
      _lazyTweens = [],
      _lazyLookup = {},
      _lastRenderedFrame,
      _plugins = {},
      _effects = {},
      _nextGCFrame = 30,
      _harnessPlugins = [],
      _callbackNames = "",
      _harness = function _harness(targets) {
    var target = targets[0],
        harnessPlugin,
        i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);

    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;

      while (i-- && !_harnessPlugins[i].targetTest(target)) {}

      harnessPlugin = _harnessPlugins[i];
    }

    i = targets.length;

    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }

    return targets;
  },
      _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  },
      _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  },
      _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  },
      _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
  },
      _parseRelative = function _parseRelative(start, value) {
    var operator = value.charAt(0),
        end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  },
      _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    var l = toFind.length,
        i = 0;

    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

    return i < l;
  },
      _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length,
        a = _lazyTweens.slice(0),
        i,
        tween;

    _lazyLookup = {};
    _lazyTweens.length = 0;

    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  },
      _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && _lazyRender();
  },
      _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  },
      _passThrough = function _passThrough(p) {
    return p;
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }

    return obj;
  },
      _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function (obj, defaults) {
      for (var p in defaults) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
      }
    };
  },
      _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }

    return base;
  },
      _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }

    return base;
  },
      _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {},
        p;

    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }

    return copy;
  },
      _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline,
        func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }

    return vars;
  },
      _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length,
        match = i === a2.length;

    while (match && i-- && a1[i] === a2[i]) {}

    return i < 0;
  },
      _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = parent[lastProp],
        t;

    if (sortBy) {
      t = child[sortBy];

      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }

    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }

    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }

    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  },
      _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = child._prev,
        next = child._next;

    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }

    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }

    child._next = child._prev = child.parent = null;
  },
      _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
  },
      _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;

      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }

    return animation;
  },
      _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;

    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }

    return animation;
  },
      _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  },
      _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  },
      _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  },
      _animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  },
      _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  },
      _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  },
      _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    var parent = animation._dp;

    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

      _setEnd(animation);

      parent._dirty || _uncache(parent, animation);
    }

    return animation;
  },
      _postAddChecks = function _postAddChecks(timeline, child) {
    var t;

    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline.rawTime(), child);

      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }

    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      if (timeline._dur < timeline.duration()) {
        t = timeline;

        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }

      timeline._zTime = -_tinyNum;
    }
  },
      _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
    return timeline;
  },
      _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  },
      _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);

    if (!tween._initted) {
      return 1;
    }

    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);

      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  },
      _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
  },
      _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  },
      _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio,
        ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
        repeatDelay = tween._rDelay,
        tTime = 0,
        pt,
        iteration,
        prevIteration;

    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }

    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }

      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);

        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  },
      _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;

    if (time > prevTime) {
      child = animation._first;

      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }

        child = child._next;
      }
    } else {
      child = animation._last;

      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }

        child = child._prev;
      }
    }
  },
      _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat,
        dur = _roundPrecise(duration) || 0,
        totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  },
      _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  },
      _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  },
      _parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels,
        recent = animation._recent || _zeroPosition,
        clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
        i,
        offset,
        isPercent;

    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");

      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }

      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }

      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }

      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }

    return position == null ? clippedDuration : +position;
  },
      _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]),
        varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
        vars = params[varsIndex],
        irVars,
        parent;

    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;

    if (type) {
      irVars = vars;
      parent = timeline;

      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }

      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }

    return new Tween(params[0], vars, params[varsIndex + 1]);
  },
      _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  },
      _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  },
      getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  },
      clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  },
      _slice = [].slice,
      _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  },
      _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }

    return ar.forEach(function (value) {
      var _accumulator;

      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  },
      toArray = function toArray(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  },
      selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function (v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  },
      shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  },
      distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }

    var vars = _isObject(v) ? v : {
      each: v
    },
        ease = _parseEase(vars.ease),
        from = vars.from || 0,
        base = parseFloat(vars.base) || 0,
        cache = {},
        isDecimal = from > 0 && from < 1,
        ratios = isNaN(from) || isDecimal,
        axis = vars.axis,
        ratioX = from,
        ratioY = from;

    if (_isString(from)) {
      ratioX = ratioY = {
        center: .5,
        edges: .5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }

    return function (i, target, a) {
      var l = (a || vars).length,
          distances = cache[l],
          originX,
          originY,
          x,
          y,
          d,
          j,
          max,
          min,
          wrapAt;

      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

        if (!wrapAt) {
          max = -_bigNum;

          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

          wrapAt--;
        }

        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;

        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }

        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }

      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  },
      _roundModifier = function _roundModifier(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function (raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  },
      snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo),
        radius,
        is2D;

    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;

      if (snapTo.values) {
        snapTo = toArray(snapTo.values);

        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }

    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw),
          y = parseFloat(is2D ? raw.y : 0),
          min = _bigNum,
          closest = 0,
          i = snapTo.length,
          dx,
          dy;

      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }

        if (dx < min) {
          min = dx;
          closest = i;
        }
      }

      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  },
      random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  },
      pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }

    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  },
      unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  },
      normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  },
      _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  },
      wrap = function wrap(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  },
      wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min,
        total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  },
      _replaceRandom = function _replaceRandom(value) {
    var prev = 0,
        s = "",
        i,
        nums,
        end,
        isArray;

    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }

    return s + value.substr(prev, value.length - prev);
  },
      mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin,
        outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  },
      interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };

    if (!func) {
      var isString = _isString(start),
          master = {},
          p,
          i,
          interpolators,
          l,
          il;

      progress === true && (mutate = 1) && (progress = null);

      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;

        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i]));
        }

        l--;

        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };

        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }

      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }

        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }

    return _conditionalReturn(progress, func);
  },
      _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    var labels = timeline.labels,
        min = _bigNum,
        p,
        distance,
        label;

    for (p in labels) {
      distance = labels[p] - fromTime;

      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }

    return label;
  },
      _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars,
        callback = v[type],
        prevContext = _context,
        context = animation._ctx,
        params,
        scope,
        result;

    if (!callback) {
      return;
    }

    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context && (_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  },
      _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);

    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  },
      _quickTween,
      _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config;

    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));

      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));

      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  },
      _255 = 255,
      _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  },
      _hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  },
      splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
        r,
        g,
        b,
        h,
        s,
        l,
        max,
        min,
        d,
        wasHSL;

    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }

      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }

        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }

        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);

        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }

      a = a.map(Number);
    }

    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }

      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }

    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  },
      _colorOrderData = function _colorOrderData(v) {
    var values = [],
        c = [],
        i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  },
      _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "",
        colors = (s + result).match(_colorExp),
        type = toHSL ? "hsla(" : "rgba(",
        i = 0,
        c,
        shell,
        d,
        l;

    if (!colors) {
      return s;
    }

    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });

    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;

      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;

        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }

    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }

    return result + shell[l];
  },
      _colorExp = function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        p;

    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }

    return new RegExp(s + ")", "gi");
  }(),
      _hslExp = /hsl[a]?\(/,
      _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "),
        toHSL;
    _colorExp.lastIndex = 0;

    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  },
      _tickerActive,
      _ticker = function () {
    var _getTime = Date.now,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _startTime = _getTime(),
        _lastUpdate = _startTime,
        _gap = 1000 / 240,
        _nextTime = _gap,
        _listeners = [],
        _id,
        _req,
        _raf,
        _self,
        _delta,
        _i,
        _tick = function _tick(v) {
      var elapsed = _getTime() - _lastUpdate,
          manual = v === true,
          overlap,
          dispatch,
          time,
          frame;

      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;

      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1000;
        _self.time = time = time / 1000;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }

      manual || (_id = _req(_tick));

      if (dispatch) {
        for (_i = 0; _i < _listeners.length; _i++) {
          _listeners[_i](time, _delta, frame, v);
        }
      }
    };

    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1000 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

            _raf = _win.requestAnimationFrame;
          }

          _id && _self.sleep();

          _req = _raf || function (f) {
            return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
          };

          _tickerActive = 1;

          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || 1 / _tinyNum;
        _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
      },
      fps: function fps(_fps) {
        _gap = 1000 / (_fps || 240);
        _nextTime = _self.time * 1000 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function (t, d, f, v) {
          callback(t, d, f, v);

          _self.remove(func);
        } : callback;

        _self.remove(callback);

        _listeners[prioritize ? "unshift" : "push"](func);

        _wake();

        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners
    };
    return _self;
  }(),
      _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  },
      _easeMap = {},
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
      _quotesExp = /["']/g,
      _parseObjectInString = function _parseObjectInString(value) {
    var obj = {},
        split = value.substr(1, value.length - 3).split(":"),
        key = split[0],
        i = 1,
        l = split.length,
        index,
        val,
        parsedVal;

    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }

    return obj;
  },
      _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1,
        close = value.indexOf(")"),
        nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  },
      _configEaseFromString = function _configEaseFromString(name) {
    var split = (name + "").split("("),
        ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  },
      _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  },
      _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first,
        ease;

    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }

      child = child._next;
    }
  },
      _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  },
      _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }

    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }

    var ease = {
      easeIn: easeIn,
      easeOut: easeOut,
      easeInOut: easeInOut
    },
        lowercaseName;

    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });

    return ease;
  },
      _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  },
      _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1,
        p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
        p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
        easeOut = function easeOut(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    p2 = _2PI / p2;

    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };

    return ease;
  },
      _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }

    var easeOut = function easeOut(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };

    return ease;
  };

  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
    var power = i < 5 ? i + 1 : i;

    _insertEase(name + ",Power" + (power - 1), i ? function (p) {
      return Math.pow(p, power);
    } : function (p) {
      return p;
    }, function (p) {
      return 1 - Math.pow(1 - p, power);
    }, function (p) {
      return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });

  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

  (function (n, c) {
    var n1 = 1 / c,
        n2 = 2 * n1,
        n3 = 2.5 * n1,
        easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };

    _insertEase("Bounce", function (p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);

  _insertEase("Expo", function (p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });

  _insertEase("Circ", function (p) {
    return -(_sqrt(1 - p * p) - 1);
  });

  _insertEase("Sine", function (p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });

  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }

      var p1 = 1 / steps,
          p2 = steps + (immediateStart ? 0 : 1),
          p3 = immediateStart ? 1 : 0,
          max = 1 - _tinyNum;
      return function (p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];

  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
    return _callbackNames += name + "," + name + "Params,";
  });

  var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = function () {
    function Animation(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;

      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }

      this._ts = 1;

      _setDuration(this, +vars.duration, 1, 1);

      this.data = vars.data;

      if (_context) {
        this._ctx = _context;

        _context.data.push(this);
      }

      _tickerActive || _ticker.wake();
    }

    var _proto = Animation.prototype;

    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }

      return this._delay;
    };

    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };

    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }

      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };

    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();

      if (!arguments.length) {
        return this._tTime;
      }

      var parent = this._dp;

      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);

        !parent._dp || parent.parent || _postAddChecks(parent, this);

        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }

          parent = parent.parent;
        }

        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }

      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);

        _lazySafeRender(this, _totalTime, suppressEvents);
      }

      return this;
    };

    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };

    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };

    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };

    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;

      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };

    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }

      if (this._rts === value) {
        return this;
      }

      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);

      _setEnd(this);

      return _recacheAncestors(this);
    };

    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }

      if (this._ps !== value) {
        this._ps = value;

        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();

          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }

      return this;
    };

    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }

      return this._start;
    };

    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };

    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };

    _proto.revert = function revert(config) {
      if (config === void 0) {
        config = _revertConfig;
      }

      var prevIsReverting = _reverting;
      _reverting = config;

      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config);
        this.totalTime(-0.01, config.suppressEvents);
      }

      this.data !== "nested" && config.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };

    _proto.globalTime = function globalTime(rawTime) {
      var animation = this,
          time = arguments.length ? rawTime : animation.rawTime();

      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }

      return !this.parent && this.vars.immediateRender ? -1 : time;
    };

    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }

      return this._repeat === -2 ? Infinity : this._repeat;
    };

    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;

        _onUpdateTotalDuration(this);

        return time ? this.time(time) : this;
      }

      return this._rDelay;
    };

    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }

      return this._yoyo;
    };

    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };

    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };

    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };

    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };

    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };

    _proto.resume = function resume() {
      return this.paused(false);
    };

    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }

      return this._rts < 0;
    };

    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };

    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp,
          start = this._start,
          rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };

    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;

      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }

        return this;
      }

      return vars[type];
    };

    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function (resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
            _resolve = function _resolve() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };

        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };

    _proto.kill = function kill() {
      _interrupt(this);
    };

    return Animation;
  }();

  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });

  var Timeline = function (_Animation) {
    _inheritsLoose(Timeline, _Animation);

    function Timeline(vars, position) {
      var _this;

      if (vars === void 0) {
        vars = {};
      }

      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }

    var _proto2 = Timeline.prototype;

    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);

      return this;
    };

    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);

      return this;
    };

    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);

      return this;
    };

    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };

    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };

    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };

    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._dirty ? this.totalDuration() : this._tDur,
          dur = this._dur,
          tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
          crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
          time,
          child,
          next,
          iteration,
          cycleDuration,
          prevPaused,
          pauseTween,
          timeScale,
          prevStart,
          prevIteration,
          yoyo,
          isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }

        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;

        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }

        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _roundPrecise(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);

          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }

          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1,
                doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }

            dur = this._dur;
            tDur = this._tDur;

            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -0.0001;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }

            this._lock = 0;

            if (!this._ts && !prevPaused) {
              return this;
            }

            _propagateYoyoEase(this, isYoyo);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }

        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;

        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }

        if (!prevTime && time && !suppressEvents) {
          _callback(this, "onStart");

          if (this._tTime !== tTime) {
            return this;
          }
        }

        if (time >= prevTime && totalTime >= 0) {
          child = this._first;

          while (child) {
            next = child._next;

            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }

            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;

          while (child) {
            next = child._prev;

            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }

            child = next;
          }
        }

        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

          if (this._ts) {
            this._start = prevStart;

            _setEnd(this);

            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
          (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto2.add = function add(child, position) {
      var _this2 = this;

      _isNumber(position) || (position = _parsePosition(this, position, child));

      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function (obj) {
            return _this2.add(obj, position);
          });
          return this;
        }

        if (_isString(child)) {
          return this.addLabel(child, position);
        }

        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }

      return this !== child ? _addToTimeline(this, child, position) : this;
    };

    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }

      if (tweens === void 0) {
        tweens = true;
      }

      if (timelines === void 0) {
        timelines = true;
      }

      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }

      var a = [],
          child = this._first;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }

        child = child._next;
      }

      return a;
    };

    _proto2.getById = function getById(id) {
      var animations = this.getChildren(1, 1, 1),
          i = animations.length;

      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };

    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }

      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }

      _removeLinkedListItem(this, child);

      if (child === this._recent) {
        this._recent = this._last;
      }

      return _uncache(this);
    };

    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }

      this._forcing = 1;

      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }

      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

      this._forcing = 0;
      return this;
    };

    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };

    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };

    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };

    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);

      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }

        child = child._next;
      }
    };

    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive),
          i = tweens.length;

      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }

      return this;
    };

    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [],
          parsedTargets = toArray(targets),
          child = this._first,
          isGlobalTime = _isNumber(onlyActive),
          children;

      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }

        child = child._next;
      }

      return a;
    };

    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};

      var tl = this,
          endTime = _parsePosition(tl, position),
          _vars = vars,
          startAt = _vars.startAt,
          _onStart = _vars.onStart,
          onStartParams = _vars.onStartParams,
          immediateRender = _vars.immediateRender,
          initted,
          tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();

          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }

          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));

      return immediateRender ? tween.render(0) : tween;
    };

    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };

    _proto2.recent = function recent() {
      return this._recent;
    };

    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };

    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };

    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };

    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }

      var child = this._first,
          labels = this.labels,
          p;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }

        child = child._next;
      }

      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }

      return _uncache(this);
    };

    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;

      while (child) {
        child.invalidate(soft);
        child = child._next;
      }

      return _Animation.prototype.invalidate.call(this, soft);
    };

    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }

      var child = this._first,
          next;

      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }

      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };

    _proto2.totalDuration = function totalDuration(value) {
      var max = 0,
          self = this,
          child = self._last,
          prevStart = _bigNum,
          prev,
          start,
          parent;

      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }

      if (self._dirty) {
        parent = self.parent;

        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;

          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }

          if (start < 0 && child._ts) {
            max -= start;

            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }

            self.shiftChildren(-start, false, -1e999);
            prevStart = 0;
          }

          child._end > max && child._ts && (max = child._end);
          child = prev;
        }

        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

        self._dirty = 0;
      }

      return self._tDur;
    };

    Timeline.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

        _lastRenderedFrame = _ticker.frame;
      }

      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }

          child || _ticker.sleep();
        }
      }
    };

    return Timeline;
  }(Animation);

  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
        index = 0,
        matchIndex = 0,
        result,
        startNums,
        color,
        endNum,
        chunk,
        startNum,
        hasRandom,
        a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }

    startNums = start.match(_complexStringNumExp) || [];

    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }

      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;

    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }

    this._pt = pt;
    return pt;
  },
      _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop],
        parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
        setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
        pt;

    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }

      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

        if (pt || pt === 0) {
          end = pt;
        }
      }
    }

    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }

      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  },
      _processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }

    var copy = {},
        p;

    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }

    return copy;
  },
      _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;

    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;

        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }

    return plugin;
  },
      _overwritingTween,
      _forceAllPropTweens,
      _initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars,
        ease = vars.ease,
        startAt = vars.startAt,
        immediateRender = vars.immediateRender,
        lazy = vars.lazy,
        onUpdate = vars.onUpdate,
        onUpdateParams = vars.onUpdateParams,
        callbackScope = vars.callbackScope,
        runBackwards = vars.runBackwards,
        yoyoEase = vars.yoyoEase,
        keyframes = vars.keyframes,
        autoRevert = vars.autoRevert,
        dur = tween._dur,
        prevStartAt = tween._startAt,
        targets = tween._targets,
        parent = tween.parent,
        fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
        autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
        tl = tween.timeline,
        cleanVars,
        i,
        p,
        pt,
        target,
        hasPriority,
        gsData,
        harness,
        plugin,
        ptLookup,
        index,
        harnessVars,
        overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }

    tween._from = !tl && !!vars.runBackwards;

    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);

      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }

      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt)));

        tween._startAt._dp = 0;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);

        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender: immediateRender,
            stagger: 0,
            parent: parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);

          _removeFromParent(tween._startAt = Tween.set(targets, p));

          tween._startAt._dp = 0;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;

          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }

      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;

      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);

        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });

          plugin.priority && (hasPriority = 1);
        }

        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }

        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;

          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));

          overwritten = !tween.parent;
          _overwritingTween = 0;
        }

        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }

      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }

    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  },
      _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
        pt,
        rootPT,
        lookup,
        i;

    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;

      while (i--) {
        pt = lookup[i][property];

        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;

          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }

        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";

          _initTween(tween, time);

          _forceAllPropTweens = 0;
          return 1;
        }

        ptCache.push(pt);
      }
    }

    i = ptCache.length;

    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  },
      _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0,
        propertyAliases = harness && harness.aliases,
        copy,
        p,
        i,
        aliases;

    if (!propertyAliases) {
      return vars;
    }

    copy = _merge({}, vars);

    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;

        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }

    return copy;
  },
      _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut",
        p,
        a;

    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function (value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  },
      _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  },
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      _staggerPropsToSkip = {};

  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
    return _staggerPropsToSkip[name] = 1;
  });

  var Tween = function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);

    function Tween(targets, vars, position, skipInherit) {
      var _this3;

      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }

      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars,
          duration = _this3$vars.duration,
          delay = _this3$vars.delay,
          immediateRender = _this3$vars.immediateRender,
          stagger = _this3$vars.stagger,
          overwrite = _this3$vars.overwrite,
          keyframes = _this3$vars.keyframes,
          defaults = _this3$vars.defaults,
          scrollTrigger = _this3$vars.scrollTrigger,
          yoyoEase = _this3$vars.yoyoEase,
          parent = vars.parent || _globalTimeline,
          parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
          tl,
          i,
          copy,
          l,
          p,
          curTarget,
          staggerFunc,
          staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;

      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;

        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);

          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }

          for (i = 0; i < l; i++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }

            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }

          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));

          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0,
              a,
              kf,
              v;

          if (_isArray(keyframes)) {
            keyframes.forEach(function (frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};

            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }

            for (p in copy) {
              a = copy[p].sort(function (a, b) {
                return a.t - b.t;
              });
              time = 0;

              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }

            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }

        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }

      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);

        _globalTimeline.killTweensOf(parsedTargets);

        _overwritingTween = 0;
      }

      _addToTimeline(parent, _assertThisInitialized(_this3), position);

      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);

      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;

        _this3.render(Math.max(0, -delay) || 0);
      }

      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }

    var _proto3 = Tween.prototype;

    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._tDur,
          dur = this._dur,
          isNegative = totalTime < 0,
          tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          time,
          pt,
          iteration,
          cycleDuration,
          prevIteration,
          isYoyo,
          ratio,
          timeline,
          yoyoEase;

      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline = this.timeline;

        if (this._repeat) {
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _roundPrecise(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          isYoyo = this._yoyo && iteration & 1;

          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);

          if (time === prevTime && !force && this._initted) {
            this._tTime = tTime;
            return this;
          }

          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);

            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }

        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }

          if (prevTime !== this._time) {
            return this;
          }

          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._tTime = tTime;
        this._time = time;

        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }

        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }

        if (time && !prevTime && !suppressEvents) {
          _callback(this, "onStart");

          if (this._tTime !== tTime) {
            return this;
          }
        }

        pt = this._pt;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }

        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);

          _callback(this, "onUpdate");
        }

        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto3.targets = function targets() {
      return this._targets;
    };

    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };

    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);

      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
        return this.resetTo(property, value, start, startIsRelative);
      }

      _alignPlayhead(this, 0);

      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };

    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }

      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }

      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }

      var parsedTargets = this._targets,
          killingTargets = targets ? toArray(targets) : parsedTargets,
          propTweenLookup = this._ptLookup,
          firstPT = this._pt,
          overwrittenProps,
          curLookup,
          curOverwriteProps,
          props,
          p,
          pt,
          i;

      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }

      overwrittenProps = this._op = this._op || [];

      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};

          _forEachName(vars, function (name) {
            return p[name] = 1;
          });

          vars = p;
        }

        vars = _addAliasesToVars(parsedTargets, vars);
      }

      i = parsedTargets.length;

      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];

          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }

          for (p in props) {
            pt = curLookup && curLookup[p];

            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }

              delete curLookup[p];
            }

            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }

      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };

    Tween.to = function to(targets, vars) {
      return new Tween(targets, vars, arguments[2]);
    };

    Tween.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };

    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };

    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };

    Tween.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween(targets, vars);
    };

    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };

    return Tween;
  }(Animation);

  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });

  _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
      var tl = new Timeline(),
          params = _slice.call(arguments, 0);

      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });

  var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  },
      _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  },
      _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  },
      _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
      _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  },
      _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
  },
      _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  },
      _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt,
        s = "";

    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
        pt = pt._next;
      }

      s += data.c;
    }

    data.set(data.t, data.p, s, data);
  },
      _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  },
      _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt,
        next;

    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  },
      _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt,
        hasNonDependentRemaining,
        next;

    while (pt) {
      next = pt._next;

      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }

      pt = next;
    }

    return !hasNonDependentRemaining;
  },
      _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  },
      _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt,
        next,
        pt2,
        first,
        last;

    while (pt) {
      next = pt._next;
      pt2 = first;

      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }

      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }

      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }

      pt = next;
    }

    parent._pt = first;
  };

  var PropTween = function () {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;

      if (next) {
        next._prev = this;
      }
    }

    var _proto4 = PropTween.prototype;

    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };

    return PropTween;
  }();

  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
    return _reservedProps[name] = 1;
  });

  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;

  var _media = [],
      _listeners = {},
      _emptyArray = [],
      _lastMediaTime = 0,
      _dispatch = function _dispatch(type) {
    return (_listeners[type] || _emptyArray).map(function (f) {
      return f();
    });
  },
      _onMediaChange = function _onMediaChange() {
    var time = Date.now(),
        matches = [];

    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");

      _media.forEach(function (c) {
        var queries = c.queries,
            conditions = c.conditions,
            match,
            p,
            anyMatch,
            toggled;

        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);

          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }

        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });

      _dispatch("matchMediaRevert");

      matches.forEach(function (c) {
        return c.onMatch(c);
      });
      _lastMediaTime = time;

      _dispatch("matchMedia");
    }
  };

  var Context = function () {
    function Context(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      func && this.add(func);
    }

    var _proto5 = Context.prototype;

    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }

      var self = this,
          f = function f() {
        var prev = _context,
            prevSelector = self.selector,
            result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };

      self.last = f;
      return name === _isFunction ? f(self) : name ? self[name] = f : f;
    };

    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };

    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function (e) {
        return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
      });
      return a;
    };

    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };

    _proto5.kill = function kill(revert, matchMedia) {
      var _this4 = this;

      if (revert) {
        var tweens = this.getTweens();
        this.data.forEach(function (t) {
          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function (tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        });
        tweens.map(function (t) {
          return {
            g: t.globalTime(0),
            t: t
          };
        }).sort(function (a, b) {
          return b.g - a.g || -1;
        }).forEach(function (o) {
          return o.t.revert(revert);
        });
        this.data.forEach(function (e) {
          return !(e instanceof Animation) && e.revert && e.revert(revert);
        });

        this._r.forEach(function (f) {
          return f(revert, _this4);
        });

        this.isReverted = true;
      } else {
        this.data.forEach(function (e) {
          return e.kill && e.kill();
        });
      }

      this.clear();

      if (matchMedia) {
        var i = _media.indexOf(this);

        !!~i && _media.splice(i, 1);
      }
    };

    _proto5.revert = function revert(config) {
      this.kill(config || {});
    };

    return Context;
  }();

  var MatchMedia = function () {
    function MatchMedia(scope) {
      this.contexts = [];
      this.scope = scope;
    }

    var _proto6 = MatchMedia.prototype;

    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context = new Context(0, scope || this.scope),
          cond = context.conditions = {},
          mq,
          p,
          active;
      this.contexts.push(context);
      func = context.add("onMatch", func);
      context.queries = conditions;

      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);

          if (mq) {
            _media.indexOf(context) < 0 && _media.push(context);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }

      active && func(context);
      return this;
    };

    _proto6.revert = function revert(config) {
      this.kill(config || {});
    };

    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function (c) {
        return c.kill(revert, true);
      });
    };

    return MatchMedia;
  }();

  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.forEach(function (config) {
        return _createPlugin(config);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);

      var getter = _getCache(target || {}).get,
          format = unit ? _passThrough : _numericIfPossible;

      unit === "native" && (unit = "");
      return !target ? target : !property ? function (property, unit, uncache) {
        return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);

      if (target.length > 1) {
        var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }),
            l = setters.length;
        return function (value) {
          var i = l;

          while (i--) {
            setters[i](value);
          }
        };
      }

      target = target[0] || {};

      var Plugin = _plugins[property],
          cache = _getCache(target),
          p = cache.harness && (cache.harness.aliases || {})[property] || property,
          setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);

      return Plugin ? setter : function (value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge2;

      var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
          func = function func(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };

      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name,
          effect = _ref3.effect,
          plugins = _ref3.plugins,
          defaults = _ref3.defaults,
          extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function (pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });

      _effects[name] = function (targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
      };

      if (extendTimeline) {
        Timeline.prototype[name] = function (targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }

      var tl = new Timeline(vars),
          child,
          next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

      _globalTimeline.remove(tl);

      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;

      while (child) {
        next = child._next;

        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }

        child = next;
      }

      _addToTimeline(_globalTimeline, tl, 0);

      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function (c) {
        var cond = c.conditions,
            found,
            p;

        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }

        found && c.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type],
          i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    },
    utils: {
      wrap: wrap,
      wrapYoyo: wrapYoyo,
      distribute: distribute,
      random: random,
      snap: snap,
      normalize: normalize,
      getUnit: getUnit,
      clamp: clamp,
      splitColor: splitColor,
      toArray: toArray,
      selector: selector,
      mapRange: mapRange,
      pipe: pipe,
      unitize: unitize,
      interpolate: interpolate,
      shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween: PropTween,
      globals: _addGlobal,
      Tween: Tween,
      Timeline: Timeline,
      Animation: Animation,
      getCache: _getCache,
      _removeLinkedListItem: _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);

          toAdd._ctx = _context;
        }

        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };

  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
    return _gsap[name] = Tween[name];
  });

  _ticker.add(Timeline.updateRoot);

  _quickTween = _gsap.to({}, {
    duration: 0
  });

  var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;

    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }

    return pt;
  },
      _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets,
        p,
        i,
        pt;

    for (p in modifiers) {
      i = targets.length;

      while (i--) {
        pt = tween._ptLookup[i][p];

        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }

          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  },
      _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;

          if (_isString(vars)) {
            temp = {};

            _forEachName(vars, function (name) {
              return temp[name] = 1;
            });

            vars = temp;
          }

          if (modifier) {
            temp = {};

            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }

            vars = temp;
          }

          _addModifiers(tween, vars);
        };
      }
    };
  };

  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;

      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;

        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;

      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    init: function init(target, value) {
      var i = value.length;

      while (i--) {
        this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.11.3";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0,
      Power1 = _easeMap.Power1,
      Power2 = _easeMap.Power2,
      Power3 = _easeMap.Power3,
      Power4 = _easeMap.Power4,
      Linear = _easeMap.Linear,
      Quad = _easeMap.Quad,
      Cubic = _easeMap.Cubic,
      Quart = _easeMap.Quart,
      Quint = _easeMap.Quint,
      Strong = _easeMap.Strong,
      Elastic = _easeMap.Elastic,
      Back = _easeMap.Back,
      SteppedEase = _easeMap.SteppedEase,
      Bounce = _easeMap.Bounce,
      Sine = _easeMap.Sine,
      Expo = _easeMap.Expo,
      Circ = _easeMap.Circ;

  var _win$1,
      _doc$1,
      _docElement,
      _pluginInitted,
      _tempDiv,
      _tempDivStyler,
      _recentSetterPlugin,
      _reverting$1,
      _windowExists$1 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _transformProps = {},
      _RAD2DEG = 180 / Math.PI,
      _DEG2RAD = Math.PI / 180,
      _atan2 = Math.atan2,
      _bigNum$1 = 1e8,
      _capsExp = /([A-Z])/g,
      _horizontalExp = /(left|right|width|margin|padding|x)/i,
      _complexExp = /[\s,\(]\S/,
      _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  },
      _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  },
      _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  },
      _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  },
      _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  },
      _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  },
      _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  },
      _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  },
      _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  },
      _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  },
      _transformProp = "transform",
      _transformOriginProp = _transformProp + "Origin",
      _saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;

    var target = this.target,
        style = target.style;

    if (property in _transformProps) {
      this.tfm = this.tfm || {};

      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function (a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
      }

      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }

      if (target._gsap.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }

      property = _transformProp;
    }

    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  },
      _removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  },
      _revertStyle = function _revertStyle() {
    var props = this.props,
        target = this.target,
        style = target.style,
        cache = target._gsap,
        i,
        p;

    for (i = 0; i < props.length; i += 3) {
      props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].replace(_capsExp, "-$1").toLowerCase());
    }

    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }

      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }

      i = _reverting$1();

      if (i && !i.isStart && !style[_transformProp]) {
        _removeIndependentTransforms(style);

        cache.uncache = 1;
      }
    }
  },
      _getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
      target: target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    properties && properties.split(",").forEach(function (p) {
      return saver.save(p);
    });
    return saver;
  },
      _supports3D,
      _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  },
      _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
  },
      _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
      _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv,
        s = e.style,
        i = 5;

    if (property in s && !preferPrefix) {
      return property;
    }

    property = property.charAt(0).toUpperCase() + property.substr(1);

    while (i-- && !(_prefixes[i] + property in s)) {}

    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  },
      _initCore = function _initCore() {
    if (_windowExists$1() && window.document) {
      _win$1 = window;
      _doc$1 = _win$1.document;
      _docElement = _doc$1.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting$1 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  },
      _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        oldParent = this.parentNode,
        oldSibling = this.nextSibling,
        oldCSS = this.style.cssText,
        bbox;

    _docElement.appendChild(svg);

    svg.appendChild(this);
    this.style.display = "block";

    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }

    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }

    _docElement.removeChild(svg);

    this.style.cssText = oldCSS;
    return bbox;
  },
      _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;

    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  },
      _getBBox = function _getBBox(target) {
    var bounds;

    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }

    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  },
      _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
      _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;

      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }

      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }

        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  },
      _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;

    plugin._props.push(property);

    return pt;
  },
      _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      _nonStandardLayouts = {
    grid: 1,
    flex: 1
  },
      _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
        curUnit = (value + "").trim().substr((curValue + "").length) || "px",
        style = _tempDiv.style,
        horizontal = _horizontalExp.test(property),
        isRootSVG = target.tagName.toLowerCase() === "svg",
        measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
        amount = 100,
        toPixels = unit === "px",
        toPercent = unit === "%",
        px,
        parent,
        cache,
        isSVG;

    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }

    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);

    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }

    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }

    if (!parent || parent === _doc$1 || !parent.appendChild) {
      parent = _doc$1.body;
    }

    cache = parent._gsap;

    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";

      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }

    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
      _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();

    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];

      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }

    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];

      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }

    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  },
      _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1),
          s = p && _getComputedProperty(target, p, 1);

      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }

    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
        index = 0,
        matchIndex = 0,
        a,
        result,
        startValues,
        startNum,
        color,
        startValue,
        endValue,
        endNum,
        chunk,
        endUnit,
        startUnit,
        endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }

    a = [start, end];

    _colorStringFilter(a);

    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];

    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);

        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }

        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;

          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;

            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }

          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }

          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }

      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }

    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  },
      _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "),
        x = split[0],
        y = split[1] || "50%";

    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }

    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  },
      _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t,
          style = target.style,
          props = data.u,
          cache = target._gsap,
          prop,
          clearTransforms,
          i;

      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;

        while (--i > -1) {
          prop = props[i];

          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }

          _removeProperty(target, prop);
        }
      }

      if (clearTransforms) {
        _removeProperty(target, _transformProp);

        if (cache) {
          cache.svg && target.removeAttribute("transform");

          _parseTransform(target, 1);

          cache.uncache = 1;

          _removeIndependentTransforms(style);
        }
      }
    }
  },
      _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;

        plugin._props.push(property);

        return 1;
      }
    }
  },
      _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _rotationalProperties = {},
      _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  },
      _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);

    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  },
      _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _getCache(target),
        style = target.style,
        matrix = _getComputedTransformMatrixAsArray(target),
        parent,
        nextSibling,
        temp,
        addedToDOM;

    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;

      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;

        _docElement.appendChild(target);
      }

      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");

      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }

    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  },
      _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap,
        matrix = matrixArray || _getMatrix(target, true),
        xOriginOld = cache.xOrigin || 0,
        yOriginOld = cache.yOrigin || 0,
        xOffsetOld = cache.xOffset || 0,
        yOffsetOld = cache.yOffset || 0,
        a = matrix[0],
        b = matrix[1],
        c = matrix[2],
        d = matrix[3],
        tx = matrix[4],
        ty = matrix[5],
        originSplit = origin.split(" "),
        xOrigin = parseFloat(originSplit[0]) || 0,
        yOrigin = parseFloat(originSplit[1]) || 0,
        bounds,
        determinant,
        x,
        y;

    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }

    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }

    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";

    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }

    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  },
      _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new GSCache(target);

    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }

    var style = target.style,
        invertedScaleX = cache.scaleX < 0,
        px = "px",
        deg = "deg",
        cs = getComputedStyle(target),
        origin = _getComputedProperty(target, _transformOriginProp) || "0",
        x,
        y,
        z,
        scaleX,
        scaleY,
        rotation,
        rotationX,
        rotationY,
        skewX,
        skewY,
        perspective,
        xOrigin,
        yOrigin,
        matrix,
        angle,
        cos,
        sin,
        a,
        b,
        c,
        d,
        a12,
        a22,
        t1,
        t2,
        t3,
        a13,
        a23,
        a33,
        a42,
        a43,
        a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));

    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }

      style.scale = style.rotate = style.translate = "none";
    }

    matrix = _getMatrix(target, cache.svg);

    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }

      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }

    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;

    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];

      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }

        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }

        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }

        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }

        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }

      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }

    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }

    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;

    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }

    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
      _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  },
      _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  },
      _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;

    _renderCSSTransforms(ratio, cache);
  },
      _zeroDeg = "0deg",
      _zeroPx = "0px",
      _endParenthesis = ") ",
      _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this,
        xPercent = _ref.xPercent,
        yPercent = _ref.yPercent,
        x = _ref.x,
        y = _ref.y,
        z = _ref.z,
        rotation = _ref.rotation,
        rotationY = _ref.rotationY,
        rotationX = _ref.rotationX,
        skewX = _ref.skewX,
        skewY = _ref.skewY,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        transformPerspective = _ref.transformPerspective,
        force3D = _ref.force3D,
        target = _ref.target,
        zOrigin = _ref.zOrigin,
        transforms = "",
        use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;

    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD,
          a13 = Math.sin(angle),
          a33 = Math.cos(angle),
          cos;

      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }

    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }

    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }

    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }

    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }

    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }

    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }

    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }

    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }

    target.style[_transformProp] = transforms || "translate(0, 0)";
  },
      _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this,
        xPercent = _ref2.xPercent,
        yPercent = _ref2.yPercent,
        x = _ref2.x,
        y = _ref2.y,
        rotation = _ref2.rotation,
        skewX = _ref2.skewX,
        skewY = _ref2.skewY,
        scaleX = _ref2.scaleX,
        scaleY = _ref2.scaleY,
        target = _ref2.target,
        xOrigin = _ref2.xOrigin,
        yOrigin = _ref2.yOrigin,
        xOffset = _ref2.xOffset,
        yOffset = _ref2.yOffset,
        forceCSS = _ref2.forceCSS,
        tx = parseFloat(x),
        ty = parseFloat(y),
        a11,
        a21,
        a12,
        a22,
        temp;

    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);

    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }

    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;

      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;

        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }

      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }

    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }

    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }

    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }

    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  },
      _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360,
        isString = _isString(endValue),
        endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
        change = endNum - startNum,
        finalValue = startNum + change + "deg",
        direction,
        pt;

    if (isString) {
      direction = endValue.split("_")[1];

      if (direction === "short") {
        change %= cap;

        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }

      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      }
    }

    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";

    plugin._props.push(property);

    return pt;
  },
      _assign = function _assign(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }

    return target;
  },
      _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap),
        exclude = "perspective,force3D,transformOrigin,svgOrigin",
        style = target.style,
        endCache,
        p,
        startValue,
        endValue,
        startNum,
        endNum,
        startUnit,
        endUnit;

    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);

      _removeProperty(target, _transformProp);

      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }

    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];

      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;

        plugin._props.push(p);
      }
    }

    _assign(endCache, startCache);
  };

  _forEachName("padding,margin,Width,Radius", function (name, index) {
    var t = "Top",
        r = "Right",
        b = "Bottom",
        l = "Left",
        props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });

    _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
      var a, vars;

      if (arguments.length < 4) {
        a = props.map(function (prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }

      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function (prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });

  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
      var props = this._props,
          style = target.style,
          startAt = tween.vars.startAt,
          startValue,
          endValue,
          endNum,
          startNum,
          type,
          specialProp,
          p,
          startUnit,
          endUnit,
          relative,
          isTransformRelated,
          transformPropTween,
          cache,
          smooth,
          hasPriority,
          inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;

      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }

        endValue = vars[p];

        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }

        type = typeof endValue;
        specialProp = _specialProps[p];

        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }

        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }

        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;

          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }

          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }

          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);

          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }

              inlineProps.push("visibility", 0, style.visibility);

              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }

            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }

          isTransformRelated = p in _transformProps;

          if (isTransformRelated) {
            this.styles.save(p);

            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }

            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);

              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }

              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);

              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);

              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);

              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }

          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;

            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else {
              _missingPlugin(p, endValue);

              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }

          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }

      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render(ratio, data) {
      if (data.tween._time || !_reverting$1()) {
        var pt = data._pt;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty: _removeProperty,
      _getMatrix: _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;

  (function (positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
      _transformProps[name] = 1;
    });

    _forEachName(rotation, function (name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });

    _propertyAliases[all[13]] = positionAndScale + "," + rotation;

    _forEachName(aliases, function (name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
    _config.units[name] = "px";
  });

  gsap.registerPlugin(CSSPlugin);

  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
      TweenMaxWithCSS = gsapWithCSS.core.Tween;

  exports.Back = Back;
  exports.Bounce = Bounce;
  exports.CSSPlugin = CSSPlugin;
  exports.Circ = Circ;
  exports.Cubic = Cubic;
  exports.Elastic = Elastic;
  exports.Expo = Expo;
  exports.Linear = Linear;
  exports.Power0 = Power0;
  exports.Power1 = Power1;
  exports.Power2 = Power2;
  exports.Power3 = Power3;
  exports.Power4 = Power4;
  exports.Quad = Quad;
  exports.Quart = Quart;
  exports.Quint = Quint;
  exports.Sine = Sine;
  exports.SteppedEase = SteppedEase;
  exports.Strong = Strong;
  exports.TimelineLite = Timeline;
  exports.TimelineMax = Timeline;
  exports.TweenLite = Tween;
  exports.TweenMax = TweenMaxWithCSS;
  exports.default = gsapWithCSS;
  exports.gsap = gsapWithCSS;

  if (typeof(window) === 'undefined' || window !== exports) {Object.defineProperty(exports, '__esModule', { value: true });} else {delete window.default;}

})));

/*!
 * dist/jquery.inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2022 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.8-beta.25
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],t);else{var i="object"==typeof exports?t(require("jquery")):t(e.jQuery);for(var a in i)("object"==typeof exports?exports:e)[a]=i[a]}}(self||this,(function(e){return function(){"use strict";var t={3046:function(e,t,i){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i(3851),i(219),i(207),i(5296);var n=((a=i(2394))&&a.__esModule?a:{default:a}).default;t.default=n},8741:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=i},3976:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=i(5581))&&a.__esModule?a:{default:a};var r={_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:function(){},onincomplete:function(){},oncleared:function(){},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:function(){},onBeforeMask:null,onBeforePaste:function(e,t){return"function"==typeof t.onBeforeMask?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:function(){},skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[n.default.BACKSPACE,n.default.TAB,n.default["PAUSE/BREAK"],n.default.ESCAPE,n.default.PAGE_UP,n.default.PAGE_DOWN,n.default.END,n.default.HOME,n.default.LEFT,n.default.UP,n.default.RIGHT,n.default.DOWN,n.default.INSERT,n.default.DELETE,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3,substitutes:{}};t.default=r},7392:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}}},3287:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,n=(a=i(7957))&&a.__esModule?a:{default:a};if(void 0===n.default)throw"jQuery not loaded!";var r=n.default;t.default=r},9845:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mobile=t.iphone=t.iemobile=t.ie=void 0;var a,n=(a=i(9380))&&a.__esModule?a:{default:a};var r=n.default.navigator&&n.default.navigator.userAgent||"",o=r.indexOf("MSIE ")>0||r.indexOf("Trident/")>0,s=n.default.navigator&&n.default.navigator.maxTouchPoints||"ontouchstart"in n.default,l=/iemobile/i.test(r),u=/iphone/i.test(r)&&!l;t.iphone=u,t.iemobile=l,t.mobile=s,t.ie=o},7184:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(i,"\\$1")};var i=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim")},6030:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var a,n=i(8711),r=(a=i(5581))&&a.__esModule?a:{default:a},o=i(9845),s=i(7215),l=i(7760),u=i(4713);function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw r}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}var d={keydownEvent:function(e){var t=this.inputmask,i=t.opts,a=t.dependencyLib,c=t.maskset,f=this,d=a(f),p=e.keyCode,h=n.caret.call(t,f),v=i.onKeyDown.call(this,e,n.getBuffer.call(t),h,i);if(void 0!==v)return v;if(p===r.default.BACKSPACE||p===r.default.DELETE||o.iphone&&p===r.default.BACKSPACE_SAFARI||e.ctrlKey&&p===r.default.X&&!("oncut"in f))e.preventDefault(),s.handleRemove.call(t,f,p,h),(0,l.writeBuffer)(f,n.getBuffer.call(t,!0),c.p,e,f.inputmask._valueGet()!==n.getBuffer.call(t).join(""));else if(p===r.default.END||p===r.default.PAGE_DOWN){e.preventDefault();var m=n.seekNext.call(t,n.getLastValidPosition.call(t));n.caret.call(t,f,e.shiftKey?h.begin:m,m,!0)}else p===r.default.HOME&&!e.shiftKey||p===r.default.PAGE_UP?(e.preventDefault(),n.caret.call(t,f,0,e.shiftKey?h.begin:0,!0)):i.undoOnEscape&&p===r.default.ESCAPE&&!0!==e.altKey?((0,l.checkVal)(f,!0,!1,t.undoValue.split("")),d.trigger("click")):p!==r.default.INSERT||e.shiftKey||e.ctrlKey||void 0!==t.userOptions.insertMode?!0===i.tabThrough&&p===r.default.TAB?!0===e.shiftKey?(h.end=n.seekPrevious.call(t,h.end,!0),!0===u.getTest.call(t,h.end-1).match.static&&h.end--,h.begin=n.seekPrevious.call(t,h.end,!0),h.begin>=0&&h.end>0&&(e.preventDefault(),n.caret.call(t,f,h.begin,h.end))):(h.begin=n.seekNext.call(t,h.begin,!0),h.end=n.seekNext.call(t,h.begin,!0),h.end<c.maskLength&&h.end--,h.begin<=c.maskLength&&(e.preventDefault(),n.caret.call(t,f,h.begin,h.end))):e.shiftKey||i.insertModeVisual&&!1===i.insertMode&&(p===r.default.RIGHT?setTimeout((function(){var e=n.caret.call(t,f);n.caret.call(t,f,e.begin)}),0):p===r.default.LEFT&&setTimeout((function(){var e=n.translatePosition.call(t,f.inputmask.caretPos.begin);n.translatePosition.call(t,f.inputmask.caretPos.end);t.isRTL?n.caret.call(t,f,e+(e===c.maskLength?0:1)):n.caret.call(t,f,e-(0===e?0:1))}),0)):s.isSelection.call(t,h)?i.insertMode=!i.insertMode:(i.insertMode=!i.insertMode,n.caret.call(t,f,h.begin,h.begin));t.ignorable=i.ignorables.includes(p)},keypressEvent:function(e,t,i,a,o){var u=this.inputmask||this,c=u.opts,f=u.dependencyLib,d=u.maskset,p=u.el,h=f(p),v=e.keyCode;if(!(!0===t||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||u.ignorable))return v===r.default.ENTER&&u.undoValue!==u._valueGet(!0)&&(u.undoValue=u._valueGet(!0),setTimeout((function(){h.trigger("change")}),0)),u.skipInputEvent=!0,!0;if(v){44!==v&&46!==v||3!==e.location||""===c.radixPoint||(v=c.radixPoint.charCodeAt(0));var m,g=t?{begin:o,end:o}:n.caret.call(u,p),k=String.fromCharCode(v);k=c.substitutes[k]||k,d.writeOutBuffer=!0;var y=s.isValid.call(u,g,k,a,void 0,void 0,void 0,t);if(!1!==y&&(n.resetMaskSet.call(u,!0),m=void 0!==y.caret?y.caret:n.seekNext.call(u,y.pos.begin?y.pos.begin:y.pos),d.p=m),m=c.numericInput&&void 0===y.caret?n.seekPrevious.call(u,m):m,!1!==i&&(setTimeout((function(){c.onKeyValidation.call(p,v,y)}),0),d.writeOutBuffer&&!1!==y)){var b=n.getBuffer.call(u);(0,l.writeBuffer)(p,b,m,e,!0!==t)}if(e.preventDefault(),t)return!1!==y&&(y.forwardPosition=m),y}},keyupEvent:function(e){var t=this.inputmask;t.isComposing&&(e.keyCode!==r.default.KEY_229&&e.keyCode!==r.default.ENTER||t.$el.trigger("input"))},pasteEvent:function(e){var t,i=this.inputmask,a=i.opts,r=i._valueGet(!0),o=n.caret.call(i,this);i.isRTL&&(t=o.end,o.end=n.translatePosition.call(i,o.begin),o.begin=n.translatePosition.call(i,t));var s=r.substr(0,o.begin),u=r.substr(o.end,r.length);if(s==(i.isRTL?n.getBufferTemplate.call(i).slice().reverse():n.getBufferTemplate.call(i)).slice(0,o.begin).join("")&&(s=""),u==(i.isRTL?n.getBufferTemplate.call(i).slice().reverse():n.getBufferTemplate.call(i)).slice(o.end).join("")&&(u=""),window.clipboardData&&window.clipboardData.getData)r=s+window.clipboardData.getData("Text")+u;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;r=s+e.clipboardData.getData("text/plain")+u}var f=r;if(i.isRTL){f=f.split("");var d,p=c(n.getBufferTemplate.call(i));try{for(p.s();!(d=p.n()).done;){var h=d.value;f[0]===h&&f.shift()}}catch(e){p.e(e)}finally{p.f()}f=f.join("")}if("function"==typeof a.onBeforePaste){if(!1===(f=a.onBeforePaste.call(i,f,a)))return!1;f||(f=r)}(0,l.checkVal)(this,!0,!1,f.toString().split(""),e),e.preventDefault()},inputFallBackEvent:function(e){var t=this.inputmask,i=t.opts,a=t.dependencyLib;var s=this,c=s.inputmask._valueGet(!0),f=(t.isRTL?n.getBuffer.call(t).slice().reverse():n.getBuffer.call(t)).join(""),p=n.caret.call(t,s,void 0,void 0,!0);if(f!==c){c=function(e,i,a){if(o.iemobile){var r=i.replace(n.getBuffer.call(t).join(""),"");if(1===r.length){var s=i.split("");s.splice(a.begin,0,r),i=s.join("")}}return i}(0,c,p);var h=function(e,a,r){for(var o,s,l,c=e.substr(0,r.begin).split(""),f=e.substr(r.begin).split(""),d=a.substr(0,r.begin).split(""),p=a.substr(r.begin).split(""),h=c.length>=d.length?c.length:d.length,v=f.length>=p.length?f.length:p.length,m="",g=[],k="~";c.length<h;)c.push(k);for(;d.length<h;)d.push(k);for(;f.length<v;)f.unshift(k);for(;p.length<v;)p.unshift(k);var y=c.concat(f),b=d.concat(p);for(s=0,o=y.length;s<o;s++)switch(l=u.getPlaceholder.call(t,n.translatePosition.call(t,s)),m){case"insertText":b[s-1]===y[s]&&r.begin==y.length-1&&g.push(y[s]),s=o;break;case"insertReplacementText":case"deleteContentBackward":y[s]===k?r.end++:s=o;break;default:y[s]!==b[s]&&(y[s+1]!==k&&y[s+1]!==l&&void 0!==y[s+1]||(b[s]!==l||b[s+1]!==k)&&b[s]!==k?b[s+1]===k&&b[s]===y[s+1]?(m="insertText",g.push(y[s]),r.begin--,r.end--):y[s]!==l&&y[s]!==k&&(y[s+1]===k||b[s]!==y[s]&&b[s+1]===y[s+1])?(m="insertReplacementText",g.push(y[s]),r.begin--):y[s]===k?(m="deleteContentBackward",(n.isMask.call(t,n.translatePosition.call(t,s),!0)||b[s]===i.radixPoint)&&r.end++):s=o:(m="insertText",g.push(y[s]),r.begin--,r.end--))}return{action:m,data:g,caret:r}}(c,f,p);switch((s.inputmask.shadowRoot||s.ownerDocument).activeElement!==s&&s.focus(),(0,l.writeBuffer)(s,n.getBuffer.call(t)),n.caret.call(t,s,p.begin,p.end,!0),h.action){case"insertText":case"insertReplacementText":h.data.forEach((function(e,i){var n=new a.Event("keypress");n.keyCode=e.charCodeAt(0),t.ignorable=!1,d.keypressEvent.call(s,n)})),setTimeout((function(){t.$el.trigger("keyup")}),0);break;case"deleteContentBackward":var v=new a.Event("keydown");v.keyCode=r.default.BACKSPACE,d.keydownEvent.call(s,v);break;default:(0,l.applyInputValue)(s,c)}e.preventDefault()}},compositionendEvent:function(e){var t=this.inputmask;t.isComposing=!1,t.$el.trigger("input")},setValueEvent:function(e){var t=this.inputmask,i=this,a=e&&e.detail?e.detail[0]:arguments[1];void 0===a&&(a=i.inputmask._valueGet(!0)),(0,l.applyInputValue)(i,a),(e.detail&&void 0!==e.detail[1]||void 0!==arguments[2])&&n.caret.call(t,i,e.detail?e.detail[1]:arguments[2])},focusEvent:function(e){var t=this.inputmask,i=t.opts,a=this,r=a.inputmask._valueGet();i.showMaskOnFocus&&r!==n.getBuffer.call(t).join("")&&(0,l.writeBuffer)(a,n.getBuffer.call(t),n.seekNext.call(t,n.getLastValidPosition.call(t))),!0!==i.positionCaretOnTab||!1!==t.mouseEnter||s.isComplete.call(t,n.getBuffer.call(t))&&-1!==n.getLastValidPosition.call(t)||d.clickEvent.apply(a,[e,!0]),t.undoValue=t._valueGet(!0)},invalidEvent:function(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function(){var e=this.inputmask,t=e.opts,i=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&(i.inputmask.shadowRoot||i.ownerDocument).activeElement!==i&&(0,l.HandleNativePlaceholder)(i,e.originalPlaceholder)},clickEvent:function(e,t){var i=this.inputmask,a=this;if((a.inputmask.shadowRoot||a.ownerDocument).activeElement===a){var r=n.determineNewCaretPosition.call(i,n.caret.call(i,a),t);void 0!==r&&n.caret.call(i,a,r)}},cutEvent:function(e){var t=this.inputmask,i=t.maskset,a=this,o=n.caret.call(t,a),u=t.isRTL?n.getBuffer.call(t).slice(o.end,o.begin):n.getBuffer.call(t).slice(o.begin,o.end),c=t.isRTL?u.reverse().join(""):u.join("");window.navigator.clipboard?window.navigator.clipboard.writeText(c):window.clipboardData&&window.clipboardData.getData&&window.clipboardData.setData("Text",c),s.handleRemove.call(t,a,r.default.DELETE,o),(0,l.writeBuffer)(a,n.getBuffer.call(t),i.p,e,t.undoValue!==t._valueGet(!0))},blurEvent:function(e){var t=this.inputmask,i=t.opts,a=(0,t.dependencyLib)(this),r=this;if(r.inputmask){(0,l.HandleNativePlaceholder)(r,t.originalPlaceholder);var o=r.inputmask._valueGet(),u=n.getBuffer.call(t).slice();""!==o&&(i.clearMaskOnLostFocus&&(-1===n.getLastValidPosition.call(t)&&o===n.getBufferTemplate.call(t).join("")?u=[]:l.clearOptionalTail.call(t,u)),!1===s.isComplete.call(t,u)&&(setTimeout((function(){a.trigger("incomplete")}),0),i.clearIncomplete&&(n.resetMaskSet.call(t),u=i.clearMaskOnLostFocus?[]:n.getBufferTemplate.call(t).slice())),(0,l.writeBuffer)(r,u,void 0,e)),t.undoValue!==t._valueGet(!0)&&(t.undoValue=t._valueGet(!0),a.trigger("change"))}},mouseenterEvent:function(){var e=this.inputmask,t=e.opts,i=this;if(e.mouseEnter=!0,(i.inputmask.shadowRoot||i.ownerDocument).activeElement!==i){var a=(e.isRTL?n.getBufferTemplate.call(e).slice().reverse():n.getBufferTemplate.call(e)).join("");e.placeholder!==a&&i.placeholder!==e.originalPlaceholder&&(e.originalPlaceholder=i.placeholder),t.showMaskOnHover&&(0,l.HandleNativePlaceholder)(i,a)}},submitEvent:function(){var e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger("change"),-1===n.getLastValidPosition.call(e)&&e._valueGet&&e._valueGet()===n.getBufferTemplate.call(e).join("")&&e._valueSet(""),t.clearIncomplete&&!1===s.isComplete.call(e,n.getBuffer.call(e))&&e._valueSet(""),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout((function(){(0,l.writeBuffer)(e.el,n.getBuffer.call(e))}),0))},resetEvent:function(){var e=this.inputmask;e.refreshValue=!0,setTimeout((function(){(0,l.applyInputValue)(e.el,e._valueGet(!0))}),0)}};t.EventHandlers=d},9716:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var a=s(i(2394)),n=s(i(5581)),r=i(8711),o=i(7760);function s(e){return e&&e.__esModule?e:{default:e}}var l={on:function(e,t,i){var s=e.inputmask.dependencyLib,l=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);var l,u=this,c=u.inputmask,f=c?c.opts:void 0;if(void 0===c&&"FORM"!==this.nodeName){var d=s.data(u,"_inputmask_opts");s(u).off(),d&&new a.default(d).mask(u)}else{if(["submit","reset","setvalue"].includes(t.type)||"FORM"===this.nodeName||!(u.disabled||u.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===f.tabThrough&&t.keyCode===n.default.TAB))){switch(t.type){case"input":if(!0===c.skipInputEvent||t.inputType&&"insertCompositionText"===t.inputType)return c.skipInputEvent=!1,t.preventDefault();break;case"keydown":c.skipKeyPressEvent=!1,c.skipInputEvent=c.isComposing=t.keyCode===n.default.KEY_229;break;case"keyup":case"compositionend":c.isComposing&&(c.skipInputEvent=!1);break;case"keypress":if(!0===c.skipKeyPressEvent)return t.preventDefault();c.skipKeyPressEvent=!0;break;case"click":case"focus":return c.validationEvent?(c.validationEvent=!1,e.blur(),(0,o.HandleNativePlaceholder)(e,(c.isRTL?r.getBufferTemplate.call(c).slice().reverse():r.getBufferTemplate.call(c)).join("")),setTimeout((function(){e.focus()}),f.validationEventTimeOut),!1):(l=arguments,void setTimeout((function(){e.inputmask&&i.apply(u,l)}),0))}var p=i.apply(u,arguments);return!1===p&&(t.preventDefault(),t.stopPropagation()),p}t.preventDefault()}};["submit","reset"].includes(t)?(l=l.bind(e),null!==e.form&&s(e.form).on(t,l)):s(e).on(t,l),e.inputmask.events[t]=e.inputmask.events[t]||[],e.inputmask.events[t].push(l)},off:function(e,t){if(e.inputmask&&e.inputmask.events){var i=e.inputmask.dependencyLib,a=e.inputmask.events;for(var n in t&&((a=[])[t]=e.inputmask.events[t]),a){for(var r=a[n];r.length>0;){var o=r.pop();["submit","reset"].includes(n)?null!==e.form&&i(e.form).off(n,o):i(e).off(n,o)}delete e.inputmask.events[n]}}}};t.EventRuler=l},219:function(e,t,i){var a=d(i(2394)),n=d(i(5581)),r=d(i(7184)),o=i(8711),s=i(4713);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==i)return;var a,n,r=[],o=!0,s=!1;try{for(i=i.call(e);!(o=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);o=!0);}catch(e){s=!0,n=e}finally{try{o||null==i.return||i.return()}finally{if(s)throw n}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function f(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return e&&e.__esModule?e:{default:e}}var p=a.default.dependencyLib,h=function(){function e(t,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mask=t,this.format=i,this.opts=a,this._date=new Date(1,0,1),this.initDateObject(t,this.opts)}var t,i,a;return t=e,(i=[{key:"date",get:function(){return void 0===this._date&&(this._date=new Date(1,0,1),this.initDateObject(void 0,this.opts)),this._date}},{key:"initDateObject",value:function(e,t){var i;for(P(t).lastIndex=0;i=P(t).exec(this.format);){var a=new RegExp("\\d+$").exec(i[0]),n=a?i[0][0]+"x":i[0],r=void 0;if(void 0!==e){if(a){var o=P(t).lastIndex,s=O(i.index,t);P(t).lastIndex=o,r=e.slice(0,e.indexOf(s.nextMatch[0]))}else r=e.slice(0,g[n]&&g[n][4]||n.length);e=e.slice(r.length)}Object.prototype.hasOwnProperty.call(g,n)&&this.setValue(this,r,n,g[n][2],g[n][1])}}},{key:"setValue",value:function(e,t,i,a,n){if(void 0!==t&&(e[a]="ampm"===a?t:t.replace(/[^0-9]/g,"0"),e["raw"+a]=t.replace(/\s/g,"_")),void 0!==n){var r=e[a];("day"===a&&29===parseInt(r)||"month"===a&&2===parseInt(r))&&(29!==parseInt(e.day)||2!==parseInt(e.month)||""!==e.year&&void 0!==e.year||e._date.setFullYear(2012,1,29)),"day"===a&&(m=!0,0===parseInt(r)&&(r=1)),"month"===a&&(m=!0),"year"===a&&(m=!0,r.length<4&&(r=w(r,4,!0))),""===r||isNaN(r)||n.call(e._date,r),"ampm"===a&&n.call(e._date,r)}}},{key:"reset",value:function(){this._date=new Date(1,0,1)}},{key:"reInit",value:function(){this._date=void 0,this.date}}])&&f(t.prototype,i),a&&f(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),v=(new Date).getFullYear(),m=!1,g={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return w(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",function(e){var t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",function(e){var t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},"month",function(){return w(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return w(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return w(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return w(Date.prototype.getHours.call(this),2)}],hx:[function(e){return"[0-9]{".concat(e,"}")},Date.prototype.setHours,"hours",function(e){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return w(Date.prototype.getHours.call(this),2)}],Hx:[function(e){return"[0-9]{".concat(e,"}")},Date.prototype.setHours,"hours",function(e){return function(){return w(Date.prototype.getHours.call(this),e)}}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return w(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return w(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return w(Date.prototype.getMilliseconds.call(this),3)},3],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return w(Date.prototype.getMilliseconds.call(this),2)},2],t:["[ap]",y,"ampm",b,1],tt:["[ap]m",y,"ampm",b,2],T:["[AP]",y,"ampm",b,1],TT:["[AP]M",y,"ampm",b,2],Z:[".*",void 0,"Z",function(){var e=this.toString().match(/\((.+)\)/)[1];e.includes(" ")&&(e=(e=e.replace("-"," ").toUpperCase()).split(" ").map((function(e){return u(e,1)[0]})).join(""));return e}],o:[""],S:[""]},k={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function y(e){var t=this.getHours();e.toLowerCase().includes("p")?this.setHours(t+12):e.toLowerCase().includes("a")&&t>=12&&this.setHours(t-12)}function b(){var e=this.getHours();return(e=e||12)>=12?"PM":"AM"}function x(e){var t=new RegExp("\\d+$").exec(e[0]);if(t&&void 0!==t[0]){var i=g[e[0][0]+"x"].slice("");return i[0]=i[0](t[0]),i[3]=i[3](t[0]),i}if(g[e[0]])return g[e[0]]}function P(e){if(!e.tokenizer){var t=[],i=[];for(var a in g)if(/\.*x$/.test(a)){var n=a[0]+"\\d+";-1===i.indexOf(n)&&i.push(n)}else-1===t.indexOf(a[0])&&t.push(a[0]);e.tokenizer="("+(i.length>0?i.join("|")+"|":"")+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function E(e,t,i){if(!m)return!0;if(void 0===e.rawday||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||"29"==e.day&&(!isFinite(e.rawyear)||void 0===e.rawyear||""===e.rawyear)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if("29"==e.day){var a=O(t.pos,i);if("yyyy"===a.targetMatch[0]&&t.pos-a.targetMatchIndex==2)return t.remove=t.pos+1,t}else if("02"==e.month&&"30"==e.day&&void 0!==t.c)return e.day="03",e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:"0"},{pos:t.pos+1,c:t.c}],t.caret=o.seekNext.call(this,t.pos+1),t;return!1}function S(e,t,i,a){var n,o,s="";for(P(i).lastIndex=0;n=P(i).exec(e);){if(void 0===t)if(o=x(n))s+="("+o[0]+")";else switch(n[0]){case"[":s+="(";break;case"]":s+=")?";break;default:s+=(0,r.default)(n[0])}else if(o=x(n))if(!0!==a&&o[3])s+=o[3].call(t.date);else o[2]?s+=t["raw"+o[2]]:s+=n[0];else s+=n[0]}return s}function w(e,t,i){for(e=String(e),t=t||2;e.length<t;)e=i?e+"0":"0"+e;return e}function _(e,t,i){return"string"==typeof e?new h(e,t,i):e&&"object"===l(e)&&Object.prototype.hasOwnProperty.call(e,"date")?e:void 0}function M(e,t){return S(t.inputFormat,{date:e},t)}function O(e,t){var i,a,n=0,r=0;for(P(t).lastIndex=0;a=P(t).exec(t.inputFormat);){var o=new RegExp("\\d+$").exec(a[0]);if((n+=r=o?parseInt(o[0]):a[0].length)>=e+1){i=a,a=P(t).exec(t.inputFormat);break}}return{targetMatchIndex:n-r,nextMatch:a,targetMatch:i}}a.default.extendAliases({datetime:{mask:function(e){return e.numericInput=!1,g.S=e.i18n.ordinalSuffix.join("|"),e.inputFormat=k[e.inputFormat]||e.inputFormat,e.displayFormat=k[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=k[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=""!==e.placeholder?e.placeholder:e.inputFormat.replace(/[[\]]/,""),e.regex=S(e.inputFormat,void 0,e),e.min=_(e.min,e.inputFormat,e),e.max=_(e.max,e.inputFormat,e),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:null,outputFormat:null,min:null,max:null,skipOptionalPartCharacter:"",i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},preValidation:function(e,t,i,a,n,r,o,s){if(s)return!0;if(isNaN(i)&&e[t]!==i){var l=O(t,n);if(l.nextMatch&&l.nextMatch[0]===i&&l.targetMatch[0].length>1){var u=g[l.targetMatch[0]][0];if(new RegExp(u).test("0"+e[t-1]))return e[t]=e[t-1],e[t-1]="0",{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1}}}return!0},postValidation:function(e,t,i,a,n,r,o,l){var u,c;if(o)return!0;if(!1===a&&(((u=O(t+1,n)).targetMatch&&u.targetMatchIndex===t&&u.targetMatch[0].length>1&&void 0!==g[u.targetMatch[0]]||(u=O(t+2,n)).targetMatch&&u.targetMatchIndex===t+1&&u.targetMatch[0].length>1&&void 0!==g[u.targetMatch[0]])&&(c=g[u.targetMatch[0]][0]),void 0!==c&&(void 0!==r.validPositions[t+1]&&new RegExp(c).test(i+"0")?(e[t]=i,e[t+1]="0",a={pos:t+2,caret:t}):new RegExp(c).test("0"+i)&&(e[t]="0",e[t+1]=i,a={pos:t+2})),!1===a))return a;if(a.fuzzy&&(e=a.buffer,t=a.pos),(u=O(t,n)).targetMatch&&u.targetMatch[0]&&void 0!==g[u.targetMatch[0]]){var f=g[u.targetMatch[0]];c=f[0];var d=e.slice(u.targetMatchIndex,u.targetMatchIndex+u.targetMatch[0].length);if(!1===new RegExp(c).test(d.join(""))&&2===u.targetMatch[0].length&&r.validPositions[u.targetMatchIndex]&&r.validPositions[u.targetMatchIndex+1]&&(r.validPositions[u.targetMatchIndex+1].input="0"),"year"==f[2])for(var p=s.getMaskTemplate.call(this,!1,1,void 0,!0),h=t+1;h<e.length;h++)e[h]=p[h],delete r.validPositions[h]}var m=a,k=_(e.join(""),n.inputFormat,n);return m&&!isNaN(k.date.getTime())&&(n.prefillYear&&(m=function(e,t,i){if(e.year!==e.rawyear){var a=v.toString(),n=e.rawyear.replace(/[^0-9]/g,""),r=a.slice(0,n.length),o=a.slice(n.length);if(2===n.length&&n===r){var s=new Date(v,e.month-1,e.day);e.day==s.getDate()&&(!i.max||i.max.date.getTime()>=s.getTime())&&(e.date.setFullYear(v),e.year=a,t.insert=[{pos:t.pos+1,c:o[0]},{pos:t.pos+2,c:o[1]}])}}return t}(k,m,n)),m=function(e,t,i,a,n){if(!t)return t;if(t&&i.min&&!isNaN(i.min.date.getTime())){var r;for(e.reset(),P(i).lastIndex=0;r=P(i).exec(i.inputFormat);){var o;if((o=x(r))&&o[3]){for(var s=o[1],l=e[o[2]],u=i.min[o[2]],c=i.max?i.max[o[2]]:u,f=[],d=!1,p=0;p<u.length;p++)void 0!==a.validPositions[p+r.index]||d?(f[p]=l[p],d=d||l[p]>u[p]):(f[p]=u[p],"year"===o[2]&&l.length-1==p&&u!=c&&(f=(parseInt(f.join(""))+1).toString().split("")),"ampm"===o[2]&&u!=c&&i.min.date.getTime()>e.date.getTime()&&(f[p]=c[p]));s.call(e._date,f.join(""))}}t=i.min.date.getTime()<=e.date.getTime(),e.reInit()}return t&&i.max&&(isNaN(i.max.date.getTime())||(t=i.max.date.getTime()>=e.date.getTime())),t}(k,m=E.call(this,k,m,n),n,r)),void 0!==t&&m&&a.pos!==t?{buffer:S(n.inputFormat,k,n).split(""),refreshFromBuffer:{start:t,end:a.pos},pos:a.caret||a.pos}:m},onKeyDown:function(e,t,i,a){e.ctrlKey&&e.keyCode===n.default.RIGHT&&(this.inputmask._valueSet(M(new Date,a)),p(this).trigger("setvalue"))},onUnMask:function(e,t,i){return t?S(i.outputFormat,_(e,i.inputFormat,i),i,!0):t},casing:function(e,t,i,a){return 0==t.nativeDef.indexOf("[ap]")?e.toLowerCase():0==t.nativeDef.indexOf("[AP]")?e.toUpperCase():e},onBeforeMask:function(e,t){return"[object Date]"===Object.prototype.toString.call(e)&&(e=M(e,t)),e},insertMode:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric",prefillYear:!0}})},3851:function(e,t,i){var a,n=(a=i(2394))&&a.__esModule?a:{default:a},r=i(8711),o=i(4713);n.default.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var s=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function l(e,t,i,a,n){return i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,s.test(e)}n.default.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)://.*",autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:"i{1,3}.j{1,3}.k{1,3}.l{1,3}",definitions:{i:{validator:l},j:{validator:l},k:{validator:l},l:{validator:l}},onUnMask:function(e,t,i){return e},inputmode:"decimal",substitutes:{",":"."}},email:{mask:function(e){var t="*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",i=t;if(e.separator)for(var a=0;a<e.quantifier;a++)i+="[".concat(e.separator).concat(t,"]");return i},greedy:!1,casing:"lower",separator:null,quantifier:5,skipOptionalPartCharacter:"",onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function(e,t,i){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function(e,t,i,a,n,s,l){var u=o.getMaskTemplate.call(this,!0,r.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""))}}})},207:function(e,t,i){var a=s(i(2394)),n=s(i(5581)),r=s(i(7184)),o=i(8711);function s(e){return e&&e.__esModule?e:{default:e}}var l=a.default.dependencyLib;function u(e,t){for(var i="",n=0;n<e.length;n++)a.default.prototype.definitions[e.charAt(n)]||t.definitions[e.charAt(n)]||t.optionalmarker[0]===e.charAt(n)||t.optionalmarker[1]===e.charAt(n)||t.quantifiermarker[0]===e.charAt(n)||t.quantifiermarker[1]===e.charAt(n)||t.groupmarker[0]===e.charAt(n)||t.groupmarker[1]===e.charAt(n)||t.alternatormarker===e.charAt(n)?i+="\\"+e.charAt(n):i+=e.charAt(n);return i}function c(e,t,i,a){if(e.length>0&&t>0&&(!i.digitsOptional||a)){var n=e.indexOf(i.radixPoint),r=!1;i.negationSymbol.back===e[e.length-1]&&(r=!0,e.length--),-1===n&&(e.push(i.radixPoint),n=e.length-1);for(var o=1;o<=t;o++)isFinite(e[n+o])||(e[n+o]="0")}return r&&e.push(i.negationSymbol.back),e}function f(e,t){var i=0;for(var a in"+"===e&&(i=o.seekNext.call(this,t.validPositions.length-1)),t.tests)if((a=parseInt(a))>=i)for(var n=0,r=t.tests[a].length;n<r;n++)if((void 0===t.validPositions[a]||"-"===e)&&t.tests[a][n].match.def===e)return a+(void 0!==t.validPositions[a]&&"-"!==e?1:0);return i}function d(e,t){for(var i=-1,a=0,n=t.validPositions.length;a<n;a++){var r=t.validPositions[a];if(r&&r.match.def===e){i=a;break}}return i}function p(e,t,i,a,n){var r=t.buffer?t.buffer.indexOf(n.radixPoint):-1,o=(-1!==r||a&&n.jitMasking)&&new RegExp(n.definitions[9].validator).test(e);return n._radixDance&&-1!==r&&o&&null==t.validPositions[r]?{insert:{pos:r===i?r+1:r,c:n.radixPoint},pos:i}:o}a.default.extendAliases({numeric:{mask:function(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&(e.positionCaretOnClick="lvp");var t="0",i=e.radixPoint;!0===e.numericInput&&void 0===e.__financeInput?(t="1",e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e._radixDance=!1,i=","===e.radixPoint?"?":"!",""!==e.radixPoint&&void 0===e.definitions[i]&&(e.definitions[i]={},e.definitions[i].validator="["+e.radixPoint+"]",e.definitions[i].placeholder=e.radixPoint,e.definitions[i].static=!0,e.definitions[i].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);var a,n="[+]";if(n+=u(e.prefix,e),""!==e.groupSeparator?(void 0===e.definitions[e.groupSeparator]&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator="["+e.groupSeparator+"]",e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),n+=e._mask(e)):n+="9{+}",void 0!==e.digits&&0!==e.digits){var o=e.digits.toString().split(",");isFinite(o[0])&&o[1]&&isFinite(o[1])?n+=i+t+"{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(a=n+i+t+"{0,"+e.digits+"}",e.keepStatic=!0):n+=i+t+"{"+e.digits+"}")}else e.inputmode="numeric";return n+=u(e.suffix,e),n+="[-]",a&&(n=[a+u(e.suffix,e)+"[-]",n]),e.greedy=!1,function(e){void 0===e.parseMinMaxOptions&&(null!==e.min&&(e.min=e.min.toString().replace(new RegExp((0,r.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,".")),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),null!==e.max&&(e.max=e.max.toString().replace(new RegExp((0,r.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,".")),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions="done")}(e),""!==e.radixPoint&&e.substituteRadixPoint&&(e.substitutes["."==e.radixPoint?",":"."]=e.radixPoint),n},_mask:function(e){return"("+e.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"decimal",shortcuts:{k:"1000",m:"1000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",usePrototypeDefinitions:!1,stripLeadingZeroes:!0,substituteRadixPoint:!0,definitions:{0:{validator:p},1:{validator:p,definitionSymbol:"9"},9:{validator:"[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",definitionSymbol:"*"},"+":{validator:function(e,t,i,a,n){return n.allowMinus&&("-"===e||e===n.negationSymbol.front)}},"-":{validator:function(e,t,i,a,n){return n.allowMinus&&e===n.negationSymbol.back}}},preValidation:function(e,t,i,a,n,r,o,s){if(!1!==n.__financeInput&&i===n.radixPoint)return!1;var l=e.indexOf(n.radixPoint),u=t;if(t=function(e,t,i,a,n){return n._radixDance&&n.numericInput&&t!==n.negationSymbol.back&&e<=i&&(i>0||t==n.radixPoint)&&(void 0===a.validPositions[e-1]||a.validPositions[e-1].input!==n.negationSymbol.back)&&(e-=1),e}(t,i,l,r,n),"-"===i||i===n.negationSymbol.front){if(!0!==n.allowMinus)return!1;var c=!1,p=d("+",r),h=d("-",r);return-1!==p&&(c=[p,h]),!1!==c?{remove:c,caret:u-n.negationSymbol.back.length}:{insert:[{pos:f.call(this,"+",r),c:n.negationSymbol.front,fromIsValid:!0},{pos:f.call(this,"-",r),c:n.negationSymbol.back,fromIsValid:void 0}],caret:u+n.negationSymbol.back.length}}if(i===n.groupSeparator)return{caret:u};if(s)return!0;if(-1!==l&&!0===n._radixDance&&!1===a&&i===n.radixPoint&&void 0!==n.digits&&(isNaN(n.digits)||parseInt(n.digits)>0)&&l!==t)return{caret:n._radixDance&&t===l-1?l+1:l};if(!1===n.__financeInput)if(a){if(n.digitsOptional)return{rewritePosition:o.end};if(!n.digitsOptional){if(o.begin>l&&o.end<=l)return i===n.radixPoint?{insert:{pos:l+1,c:"0",fromIsValid:!0},rewritePosition:l}:{rewritePosition:l+1};if(o.begin<l)return{rewritePosition:o.begin-1}}}else if(!n.showMaskOnHover&&!n.showMaskOnFocus&&!n.digitsOptional&&n.digits>0&&""===this.__valueGet.call(this.el))return{rewritePosition:l};return{rewritePosition:t}},postValidation:function(e,t,i,a,n,r,o){if(!1===a)return a;if(o)return!0;if(null!==n.min||null!==n.max){var s=n.onUnMask(e.slice().reverse().join(""),void 0,l.extend({},n,{unmaskAsNumber:!0}));if(null!==n.min&&s<n.min&&(s.toString().length>n.min.toString().length||s<0))return!1;if(null!==n.max&&s>n.max)return!!n.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:c(n.max.toString().replace(".",n.radixPoint).split(""),n.digits,n).reverse()}}return a},onUnMask:function(e,t,i){if(""===t&&!0===i.nullable)return t;var a=e.replace(i.prefix,"");return a=(a=a.replace(i.suffix,"")).replace(new RegExp((0,r.default)(i.groupSeparator),"g"),""),""!==i.placeholder.charAt(0)&&(a=a.replace(new RegExp(i.placeholder.charAt(0),"g"),"0")),i.unmaskAsNumber?(""!==i.radixPoint&&-1!==a.indexOf(i.radixPoint)&&(a=a.replace(r.default.call(this,i.radixPoint),".")),a=(a=a.replace(new RegExp("^"+(0,r.default)(i.negationSymbol.front)),"-")).replace(new RegExp((0,r.default)(i.negationSymbol.back)+"$"),""),Number(a)):a},isComplete:function(e,t){var i=(t.numericInput?e.slice().reverse():e).join("");return i=(i=(i=(i=(i=i.replace(new RegExp("^"+(0,r.default)(t.negationSymbol.front)),"-")).replace(new RegExp((0,r.default)(t.negationSymbol.back)+"$"),"")).replace(t.prefix,"")).replace(t.suffix,"")).replace(new RegExp((0,r.default)(t.groupSeparator)+"([0-9]{3})","g"),"$1"),","===t.radixPoint&&(i=i.replace((0,r.default)(t.radixPoint),".")),isFinite(i)},onBeforeMask:function(e,t){var i=t.radixPoint||",";isFinite(t.digits)&&(t.digits=parseInt(t.digits)),"number"!=typeof e&&"number"!==t.inputType||""===i||(e=e.toString().replace(".",i));var a="-"===e.charAt(0)||e.charAt(0)===t.negationSymbol.front,n=e.split(i),o=n[0].replace(/[^\-0-9]/g,""),s=n.length>1?n[1].replace(/[^0-9]/g,""):"",l=n.length>1;e=o+(""!==s?i+s:s);var u=0;if(""!==i&&(u=t.digitsOptional?t.digits<s.length?t.digits:s.length:t.digits,""!==s||!t.digitsOptional)){var f=Math.pow(10,u||1);e=e.replace((0,r.default)(i),"."),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*f)/f).toFixed(u)),e=e.toString().replace(".",i)}if(0===t.digits&&-1!==e.indexOf(i)&&(e=e.substring(0,e.indexOf(i))),null!==t.min||null!==t.max){var d=e.toString().replace(i,".");null!==t.min&&d<t.min?e=t.min.toString().replace(".",i):null!==t.max&&d>t.max&&(e=t.max.toString().replace(".",i))}return a&&"-"!==e.charAt(0)&&(e="-"+e),c(e.toString().split(""),u,t,l).join("")},onBeforeWrite:function(e,t,i,a){function n(e,t){if(!1!==a.__financeInput||t){var i=e.indexOf(a.radixPoint);-1!==i&&e.splice(i,1)}if(""!==a.groupSeparator)for(;-1!==(i=e.indexOf(a.groupSeparator));)e.splice(i,1);return e}var o,s;if(a.stripLeadingZeroes&&(s=function(e,t){var i=new RegExp("(^"+(""!==t.negationSymbol.front?(0,r.default)(t.negationSymbol.front)+"?":"")+(0,r.default)(t.prefix)+")(.*)("+(0,r.default)(t.suffix)+(""!=t.negationSymbol.back?(0,r.default)(t.negationSymbol.back)+"?":"")+"$)").exec(e.slice().reverse().join("")),a=i?i[2]:"",n=!1;return a&&(a=a.split(t.radixPoint.charAt(0))[0],n=new RegExp("^[0"+t.groupSeparator+"]*").exec(a)),!(!n||!(n[0].length>1||n[0].length>0&&n[0].length<a.length))&&n}(t,a)))for(var u=t.join("").lastIndexOf(s[0].split("").reverse().join(""))-(s[0]==s.input?0:1),f=s[0]==s.input?1:0,d=s[0].length-f;d>0;d--)delete this.maskset.validPositions[u+d],delete t[u+d];if(e)switch(e.type){case"blur":case"checkval":if(null!==a.min){var p=a.onUnMask(t.slice().reverse().join(""),void 0,l.extend({},a,{unmaskAsNumber:!0}));if(null!==a.min&&p<a.min)return{refreshFromBuffer:!0,buffer:c(a.min.toString().replace(".",a.radixPoint).split(""),a.digits,a).reverse()}}if(t[t.length-1]===a.negationSymbol.front){var h=new RegExp("(^"+(""!=a.negationSymbol.front?(0,r.default)(a.negationSymbol.front)+"?":"")+(0,r.default)(a.prefix)+")(.*)("+(0,r.default)(a.suffix)+(""!=a.negationSymbol.back?(0,r.default)(a.negationSymbol.back)+"?":"")+"$)").exec(n(t.slice(),!0).reverse().join(""));0==(h?h[2]:"")&&(o={refreshFromBuffer:!0,buffer:[0]})}else if(""!==a.radixPoint){t.indexOf(a.radixPoint)===a.suffix.length&&(o&&o.buffer?o.buffer.splice(0,1+a.suffix.length):(t.splice(0,1+a.suffix.length),o={refreshFromBuffer:!0,buffer:n(t)}))}if(a.enforceDigitsOnBlur){var v=(o=o||{})&&o.buffer||t.slice().reverse();o.refreshFromBuffer=!0,o.buffer=c(v,a.digits,a,!0).reverse()}}return o},onKeyDown:function(e,t,i,a){var r,o=l(this);if(3!=e.location){var s,u=String.fromCharCode(e.keyCode).toLowerCase();if((s=a.shortcuts&&a.shortcuts[u])&&s.length>1)return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())*parseInt(s)),o.trigger("setvalue"),!1}if(e.ctrlKey)switch(e.keyCode){case n.default.UP:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(a.step)),o.trigger("setvalue"),!1;case n.default.DOWN:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(a.step)),o.trigger("setvalue"),!1}if(!e.shiftKey&&(e.keyCode===n.default.DELETE||e.keyCode===n.default.BACKSPACE||e.keyCode===n.default.BACKSPACE_SAFARI)&&i.begin!==t.length){if(t[e.keyCode===n.default.DELETE?i.begin-1:i.end]===a.negationSymbol.front)return r=t.slice().reverse(),""!==a.negationSymbol.front&&r.shift(),""!==a.negationSymbol.back&&r.pop(),o.trigger("setvalue",[r.join(""),i.begin]),!1;if(!0===a._radixDance){var f=t.indexOf(a.radixPoint);if(a.digitsOptional){if(0===f)return(r=t.slice().reverse()).pop(),o.trigger("setvalue",[r.join(""),i.begin>=r.length?r.length:i.begin]),!1}else if(-1!==f&&(i.begin<f||i.end<f||e.keyCode===n.default.DELETE&&(i.begin===f||i.begin-1===f))){var d=void 0;return i.begin===i.end&&(e.keyCode===n.default.BACKSPACE||e.keyCode===n.default.BACKSPACE_SAFARI?i.begin++:e.keyCode===n.default.DELETE&&i.begin-1===f&&(d=l.extend({},i),i.begin--,i.end--)),(r=t.slice().reverse()).splice(r.length-i.begin,i.begin-i.end+1),r=c(r,a.digits,a).join(""),d&&(i=d),o.trigger("setvalue",[r,i.begin>=r.length?f+1:i.begin]),!1}}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",inputmode:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function(e){return"("+e.groupSeparator+"99){*|1}("+e.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}})},9380:function(e,t,i){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((a=i(8741))&&a.__esModule?a:{default:a}).default?window:{};t.default=n},7760:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.HandleNativePlaceholder=function(e,t){var i=e?e.inputmask:this;if(l.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||""===e.placeholder)){var a=o.getBuffer.call(i).slice(),n=e.inputmask._valueGet();if(n!==t){var r=o.getLastValidPosition.call(i);-1===r&&n===o.getBufferTemplate.call(i).join("")?a=[]:-1!==r&&f.call(i,a),p(e,a)}}}else e.placeholder!==t&&(e.placeholder=t,""===e.placeholder&&e.removeAttribute("placeholder"))},t.applyInputValue=c,t.checkVal=d,t.clearOptionalTail=f,t.unmaskedvalue=function(e){var t=e?e.inputmask:this,i=t.opts,a=t.maskset;if(e){if(void 0===e.inputmask)return e.value;e.inputmask&&e.inputmask.refreshValue&&c(e,e.inputmask._valueGet(!0))}for(var n=[],r=a.validPositions,s=0,l=r.length;s<l;s++)r[s]&&r[s].match&&(1!=r[s].match.static||Array.isArray(a.metadata)&&!0!==r[s].generatedInput)&&n.push(r[s].input);var u=0===n.length?"":(t.isRTL?n.reverse():n).join("");if("function"==typeof i.onUnMask){var f=(t.isRTL?o.getBuffer.call(t).slice().reverse():o.getBuffer.call(t)).join("");u=i.onUnMask.call(t,f,u,i)}return u},t.writeBuffer=p;var a,n=(a=i(5581))&&a.__esModule?a:{default:a},r=i(4713),o=i(8711),s=i(7215),l=i(9845),u=i(6030);function c(e,t){var i=e?e.inputmask:this,a=i.opts;e.inputmask.refreshValue=!1,"function"==typeof a.onBeforeMask&&(t=a.onBeforeMask.call(i,t,a)||t),d(e,!0,!1,t=t.toString().split("")),i.undoValue=i._valueGet(!0),(a.clearMaskOnLostFocus||a.clearIncomplete)&&e.inputmask._valueGet()===o.getBufferTemplate.call(i).join("")&&-1===o.getLastValidPosition.call(i)&&e.inputmask._valueSet("")}function f(e){e.length=0;for(var t,i=r.getMaskTemplate.call(this,!0,0,!0,void 0,!0);void 0!==(t=i.shift());)e.push(t);return e}function d(e,t,i,a,n){var l=e?e.inputmask:this,c=l.maskset,f=l.opts,d=l.dependencyLib,h=a.slice(),v="",m=-1,g=void 0,k=f.skipOptionalPartCharacter;f.skipOptionalPartCharacter="",o.resetMaskSet.call(l),c.tests={},m=f.radixPoint?o.determineNewCaretPosition.call(l,{begin:0,end:0},!1,!1===f.__financeInput?"radixFocus":void 0).begin:0,c.p=m,l.caretPos={begin:m};var y=[],b=l.caretPos;if(h.forEach((function(e,t){if(void 0!==e){var a=new d.Event("_checkval");a.keyCode=e.toString().charCodeAt(0),v+=e;var n=o.getLastValidPosition.call(l,void 0,!0);!function(e,t){for(var i=r.getMaskTemplate.call(l,!0,0).slice(e,o.seekNext.call(l,e,!1,!1)).join("").replace(/'/g,""),a=i.indexOf(t);a>0&&" "===i[a-1];)a--;var n=0===a&&!o.isMask.call(l,e)&&(r.getTest.call(l,e).match.nativeDef===t.charAt(0)||!0===r.getTest.call(l,e).match.static&&r.getTest.call(l,e).match.nativeDef==="'"+t.charAt(0)||" "===r.getTest.call(l,e).match.nativeDef&&(r.getTest.call(l,e+1).match.nativeDef===t.charAt(0)||!0===r.getTest.call(l,e+1).match.static&&r.getTest.call(l,e+1).match.nativeDef==="'"+t.charAt(0)));if(!n&&a>0&&!o.isMask.call(l,e,!1,!0)){var s=o.seekNext.call(l,e);l.caretPos.begin<s&&(l.caretPos={begin:s})}return n}(m,v)?(g=u.EventHandlers.keypressEvent.call(l,a,!0,!1,i,l.caretPos.begin))&&(m=l.caretPos.begin+1,v=""):g=u.EventHandlers.keypressEvent.call(l,a,!0,!1,i,n+1),g?(void 0!==g.pos&&c.validPositions[g.pos]&&!0===c.validPositions[g.pos].match.static&&void 0===c.validPositions[g.pos].alternation&&(y.push(g.pos),l.isRTL||(g.forwardPosition=g.pos+1)),p.call(l,void 0,o.getBuffer.call(l),g.forwardPosition,a,!1),l.caretPos={begin:g.forwardPosition,end:g.forwardPosition},b=l.caretPos):void 0===c.validPositions[t]&&h[t]===r.getPlaceholder.call(l,t)&&o.isMask.call(l,t,!0)?l.caretPos.begin++:l.caretPos=b}})),y.length>0){var x,P,E=o.seekNext.call(l,-1,void 0,!1);if(!s.isComplete.call(l,o.getBuffer.call(l))&&y.length<=E||s.isComplete.call(l,o.getBuffer.call(l))&&y.length>0&&y.length!==E&&0===y[0])for(var S=E;void 0!==(x=y.shift());){var w=new d.Event("_checkval");if((P=c.validPositions[x]).generatedInput=!0,w.keyCode=P.input.charCodeAt(0),(g=u.EventHandlers.keypressEvent.call(l,w,!0,!1,i,S))&&void 0!==g.pos&&g.pos!==x&&c.validPositions[g.pos]&&!0===c.validPositions[g.pos].match.static)y.push(g.pos);else if(!g)break;S++}}t&&p.call(l,e,o.getBuffer.call(l),g?g.forwardPosition:l.caretPos.begin,n||new d.Event("checkval"),n&&("input"===n.type&&l.undoValue!==o.getBuffer.call(l).join("")||"paste"===n.type)),f.skipOptionalPartCharacter=k}function p(e,t,i,a,r){var l=e?e.inputmask:this,u=l.opts,c=l.dependencyLib;if(a&&"function"==typeof u.onBeforeWrite){var f=u.onBeforeWrite.call(l,a,t,i,u);if(f){if(f.refreshFromBuffer){var d=f.refreshFromBuffer;s.refreshFromBuffer.call(l,!0===d?d:d.start,d.end,f.buffer||t),t=o.getBuffer.call(l,!0)}void 0!==i&&(i=void 0!==f.caret?f.caret:i)}}if(void 0!==e&&(e.inputmask._valueSet(t.join("")),void 0===i||void 0!==a&&"blur"===a.type||o.caret.call(l,e,i,void 0,void 0,void 0!==a&&"keydown"===a.type&&(a.keyCode===n.default.DELETE||a.keyCode===n.default.BACKSPACE)),!0===r)){var p=c(e),h=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,p.trigger("input"),setTimeout((function(){h===o.getBufferTemplate.call(l).join("")?p.trigger("cleared"):!0===s.isComplete.call(l,t)&&p.trigger("complete")}),0)}}},2394:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i(7149),i(3194);var a=i(157),n=m(i(3287)),r=m(i(9380)),o=i(2391),s=i(4713),l=i(8711),u=i(7215),c=i(7760),f=i(9716),d=m(i(7392)),p=m(i(3976)),h=m(i(8741));function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e){return e&&e.__esModule?e:{default:e}}var g=r.default.document,k="_inputmask_opts";function y(e,t,i){if(h.default){if(!(this instanceof y))return new y(e,t,i);this.dependencyLib=n.default,this.el=void 0,this.events={},this.maskset=void 0,!0!==i&&("[object Object]"===Object.prototype.toString.call(e)?t=e:(t=t||{},e&&(t.alias=e)),this.opts=n.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&void 0!==t.definitions,this.userOptions=t||{},b(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipKeyPressEvent=!1,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.originalPlaceholder=void 0,this.isComposing=!1}}function b(e,t,i){var a=y.prototype.aliases[e];return a?(a.alias&&b(a.alias,void 0,i),n.default.extend(!0,i,a),n.default.extend(!0,i,t),!0):(null===i.mask&&(i.mask=e),!1)}y.prototype={dataAttribute:"data-inputmask",defaults:p.default,definitions:d.default,aliases:{},masksCache:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function(e){var t=this;return"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:Array.isArray(e)?e:[].slice.call(e)).forEach((function(e,i){var s=n.default.extend(!0,{},t.opts);if(function(e,t,i,a){function o(t,n){var o=""===a?t:a+"-"+t;null!==(n=void 0!==n?n:e.getAttribute(o))&&("string"==typeof n&&(0===t.indexOf("on")?n=r.default[n]:"false"===n?n=!1:"true"===n&&(n=!0)),i[t]=n)}if(!0===t.importDataAttributes){var s,l,u,c,f=e.getAttribute(a);if(f&&""!==f&&(f=f.replace(/'/g,'"'),l=JSON.parse("{"+f+"}")),l)for(c in u=void 0,l)if("alias"===c.toLowerCase()){u=l[c];break}for(s in o("alias",u),i.alias&&b(i.alias,i,t),t){if(l)for(c in u=void 0,l)if(c.toLowerCase()===s.toLowerCase()){u=l[c];break}o(s,u)}}n.default.extend(!0,t,i),("rtl"===e.dir||t.rightAlign)&&(e.style.textAlign="right");("rtl"===e.dir||t.numericInput)&&(e.dir="ltr",e.removeAttribute("dir"),t.isRTL=!0);return Object.keys(i).length}(e,s,n.default.extend(!0,{},t.userOptions),t.dataAttribute)){var l=(0,o.generateMaskSet)(s,t.noMasksCache);void 0!==l&&(void 0!==e.inputmask&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new y(void 0,void 0,!0),e.inputmask.opts=s,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=n.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,n.default)(e),e.inputmask.maskset=l,n.default.data(e,k,t.userOptions),a.mask.call(e.inputmask))}})),e&&e[0]&&e[0].inputmask||this},option:function(e,t){return"string"==typeof e?this.opts[e]:"object"===v(e)?(n.default.extend(this.userOptions,e),this.el&&!0!==t&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),void 0===this.el||void 0!==e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!1,!1,t),"function"==typeof this.opts.onBeforeWrite&&this.opts.onBeforeWrite.call(this,void 0,l.getBuffer.call(this),0,this.opts)}return c.unmaskedvalue.call(this,this.el)},remove:function(){if(this.el){n.default.data(this.el,k,null);var e=this.opts.autoUnmask?(0,c.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);e!==l.getBufferTemplate.call(this).join("")?this._valueSet(e,this.opts.autoUnmask):this._valueSet(""),f.EventRuler.off(this.el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),"value")&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0}):g.__lookupGetter__&&this.el.__lookupGetter__("value")&&this.__valueGet&&(this.el.__defineGetter__("value",this.__valueGet),this.el.__defineSetter__("value",this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),(this.isRTL?l.getBufferTemplate.call(this).reverse():l.getBufferTemplate.call(this)).join("")},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),u.isComplete.call(this,l.getBuffer.call(this))},getmetadata:function(){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){var e=s.getMaskTemplate.call(this,!0,0,!1).join("");return this.maskset.metadata.forEach((function(t){return t.mask!==e||(e=t,!1)})),e}return this.maskset.metadata},isValid:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!0,!1,t)}else e=this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join("");for(var i=l.getBuffer.call(this),a=l.determineLastRequiredPosition.call(this),n=i.length-1;n>a&&!l.isMask.call(this,n);n--);return i.splice(a,n+1-a),u.isComplete.call(this,i)&&e===(this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join(""))},format:function(e,t){this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache);var i=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!0,!1,i);var a=this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join("");return t?{value:a,metadata:this.getmetadata()}:a},setValue:function(e){this.el&&(0,n.default)(this.el).trigger("setvalue",[e])},analyseMask:o.analyseMask},y.extendDefaults=function(e){n.default.extend(!0,y.prototype.defaults,e)},y.extendDefinitions=function(e){n.default.extend(!0,y.prototype.definitions,e)},y.extendAliases=function(e){n.default.extend(!0,y.prototype.aliases,e)},y.format=function(e,t,i){return y(t).format(e,i)},y.unmask=function(e,t){return y(t).unmaskedvalue(e)},y.isValid=function(e,t){return y(t).isValid(e)},y.remove=function(e){"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach((function(e){e.inputmask&&e.inputmask.remove()}))},y.setValue=function(e,t){"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach((function(e){e.inputmask?e.inputmask.setValue(t):(0,n.default)(e).trigger("setvalue",[t])}))},y.dependencyLib=n.default,r.default.Inputmask=y;var x=y;t.default=x},5296:function(e,t,i){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var n=h(i(9380)),r=h(i(2394)),o=h(i(8741));function s(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||(i=e,-1===Function.toString.call(i).indexOf("[native code]")))return e;var i;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return c(e,arguments,p(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),d(a,e)},u(e)}function c(e,t,i){return c=f()?Reflect.construct:function(e,t,i){var a=[null];a.push.apply(a,t);var n=new(Function.bind.apply(e,a));return i&&d(n,i.prototype),n},c.apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function h(e){return e&&e.__esModule?e:{default:e}}var v=n.default.document;if(o.default&&v&&v.head&&v.head.attachShadow&&n.default.customElements&&void 0===n.default.customElements.get("input-mask")){var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(c,e);var t,i,a,n,o,u=(t=c,i=f(),function(){var e,a=p(t);if(i){var n=p(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return l(this,e)});function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);var t=(e=u.call(this)).getAttributeNames(),i=e.attachShadow({mode:"closed"}),a=v.createElement("input");for(var n in a.type="text",i.appendChild(a),t)Object.prototype.hasOwnProperty.call(t,n)&&a.setAttribute(t[n],e.getAttribute(t[n]));var o=new r.default;return o.dataAttribute="",o.mask(a),a.inputmask.shadowRoot=i,e}return a=c,n&&s(a.prototype,n),o&&s(a,o),Object.defineProperty(a,"prototype",{writable:!1}),a}(u(HTMLElement));n.default.customElements.define("input-mask",m)}},443:function(e,t,i){var a=o(i(7957)),n=o(i(2394));function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e){return e&&e.__esModule?e:{default:e}}void 0===a.default.fn.inputmask&&(a.default.fn.inputmask=function(e,t){var i,o=this[0];if(void 0===t&&(t={}),"string"==typeof e)switch(e){case"unmaskedvalue":return o&&o.inputmask?o.inputmask.unmaskedvalue():(0,a.default)(o).val();case"remove":return this.each((function(){this.inputmask&&this.inputmask.remove()}));case"getemptymask":return o&&o.inputmask?o.inputmask.getemptymask():"";case"hasMaskedValue":return!(!o||!o.inputmask)&&o.inputmask.hasMaskedValue();case"isComplete":return!o||!o.inputmask||o.inputmask.isComplete();case"getmetadata":return o&&o.inputmask?o.inputmask.getmetadata():void 0;case"setvalue":n.default.setValue(o,t);break;case"option":if("string"!=typeof t)return this.each((function(){if(void 0!==this.inputmask)return this.inputmask.option(t)}));if(o&&void 0!==o.inputmask)return o.inputmask.option(t);break;default:return t.alias=e,i=new n.default(t),this.each((function(){i.mask(this)}))}else{if(Array.isArray(e))return t.alias=e,i=new n.default(t),this.each((function(){i.mask(this)}));if("object"==r(e))return i=new n.default(e),void 0===e.mask&&void 0===e.alias?this.each((function(){if(void 0!==this.inputmask)return this.inputmask.option(e);i.mask(this)})):this.each((function(){i.mask(this)}));if(void 0===e)return this.each((function(){(i=new n.default(t)).mask(this)}))}})},2391:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.analyseMask=function(e,t,i){var a,o,s,l,u,c,f=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,d=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,p=!1,h=new n.default,v=[],m=[],g=!1;function k(e,a,n){n=void 0!==n?n:e.matches.length;var o=e.matches[n-1];if(t)0===a.indexOf("[")||p&&/\\d|\\s|\\w/i.test(a)||"."===a?e.matches.splice(n++,0,{fn:new RegExp(a,i.casing?"i":""),static:!1,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==a,casing:null,def:a,placeholder:void 0,nativeDef:a}):(p&&(a=a[a.length-1]),a.split("").forEach((function(t,a){o=e.matches[n-1],e.matches.splice(n++,0,{fn:/[a-z]/i.test(i.staticDefinitionSymbol||t)?new RegExp("["+(i.staticDefinitionSymbol||t)+"]",i.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==t&&!0!==o.static,casing:null,def:i.staticDefinitionSymbol||t,placeholder:void 0!==i.staticDefinitionSymbol?t:void 0,nativeDef:(p?"'":"")+t})}))),p=!1;else{var s=i.definitions&&i.definitions[a]||i.usePrototypeDefinitions&&r.default.prototype.definitions[a];s&&!p?e.matches.splice(n++,0,{fn:s.validator?"string"==typeof s.validator?new RegExp(s.validator,i.casing?"i":""):new function(){this.test=s.validator}:new RegExp("."),static:s.static||!1,optionality:s.optional||!1,defOptionality:s.optional||!1,newBlockMarker:void 0===o||s.optional?"master":o.def!==(s.definitionSymbol||a),casing:s.casing,def:s.definitionSymbol||a,placeholder:s.placeholder,nativeDef:a,generated:s.generated}):(e.matches.splice(n++,0,{fn:/[a-z]/i.test(i.staticDefinitionSymbol||a)?new RegExp("["+(i.staticDefinitionSymbol||a)+"]",i.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===o?"master":o.def!==a&&!0!==o.static,casing:null,def:i.staticDefinitionSymbol||a,placeholder:void 0!==i.staticDefinitionSymbol?a:void 0,nativeDef:(p?"'":"")+a}),p=!1)}}function y(){if(v.length>0){if(k(l=v[v.length-1],o),l.isAlternator){u=v.pop();for(var e=0;e<u.matches.length;e++)u.matches[e].isGroup&&(u.matches[e].isGroup=!1);v.length>0?(l=v[v.length-1]).matches.push(u):h.matches.push(u)}}else k(h,o)}function b(e){var t=new n.default(!0);return t.openGroup=!1,t.matches=e,t}function x(){if((s=v.pop()).openGroup=!1,void 0!==s)if(v.length>0){if((l=v[v.length-1]).matches.push(s),l.isAlternator){for(var e=(u=v.pop()).matches[0].matches?u.matches[0].matches.length:1,t=0;t<u.matches.length;t++)u.matches[t].isGroup=!1,u.matches[t].alternatorGroup=!1,null===i.keepStatic&&e<(u.matches[t].matches?u.matches[t].matches.length:1)&&(i.keepStatic=!0),e=u.matches[t].matches?u.matches[t].matches.length:1;v.length>0?(l=v[v.length-1]).matches.push(u):h.matches.push(u)}}else h.matches.push(s);else y()}function P(e){var t=e.pop();return t.isQuantifier&&(t=b([e.pop(),t])),t}t&&(i.optionalmarker[0]=void 0,i.optionalmarker[1]=void 0);for(;a=t?d.exec(e):f.exec(e);){if(o=a[0],t){switch(o.charAt(0)){case"?":o="{0,1}";break;case"+":case"*":o="{"+o+"}";break;case"|":if(0===v.length){var E=b(h.matches);E.openGroup=!0,v.push(E),h.matches=[],g=!0}}if("\\d"===o)o="[0-9]"}if(p)y();else switch(o.charAt(0)){case"$":case"^":t||y();break;case i.escapeChar:p=!0,t&&y();break;case i.optionalmarker[1]:case i.groupmarker[1]:x();break;case i.optionalmarker[0]:v.push(new n.default(!1,!0));break;case i.groupmarker[0]:v.push(new n.default(!0));break;case i.quantifiermarker[0]:var S=new n.default(!1,!1,!0),w=(o=o.replace(/[{}?]/g,"")).split("|"),_=w[0].split(","),M=isNaN(_[0])?_[0]:parseInt(_[0]),O=1===_.length?M:isNaN(_[1])?_[1]:parseInt(_[1]),T=isNaN(w[1])?w[1]:parseInt(w[1]);"*"!==M&&"+"!==M||(M="*"===O?0:1),S.quantifier={min:M,max:O,jit:T};var A=v.length>0?v[v.length-1].matches:h.matches;if((a=A.pop()).isAlternator){A.push(a),A=a.matches;var C=new n.default(!0),D=A.pop();A.push(C),A=C.matches,a=D}a.isGroup||(a=b([a])),A.push(a),A.push(S);break;case i.alternatormarker:if(v.length>0){var j=(l=v[v.length-1]).matches[l.matches.length-1];c=l.openGroup&&(void 0===j.matches||!1===j.isGroup&&!1===j.isAlternator)?v.pop():P(l.matches)}else c=P(h.matches);if(c.isAlternator)v.push(c);else if(c.alternatorGroup?(u=v.pop(),c.alternatorGroup=!1):u=new n.default(!1,!1,!1,!0),u.matches.push(c),v.push(u),c.openGroup){c.openGroup=!1;var B=new n.default(!0);B.alternatorGroup=!0,v.push(B)}break;default:y()}}g&&x();for(;v.length>0;)s=v.pop(),h.matches.push(s);h.matches.length>0&&(!function e(a){a&&a.matches&&a.matches.forEach((function(n,r){var o=a.matches[r+1];(void 0===o||void 0===o.matches||!1===o.isQuantifier)&&n&&n.isGroup&&(n.isGroup=!1,t||(k(n,i.groupmarker[0],0),!0!==n.openGroup&&k(n,i.groupmarker[1]))),e(n)}))}(h),m.push(h));(i.numericInput||i.isRTL)&&function e(t){for(var a in t.matches=t.matches.reverse(),t.matches)if(Object.prototype.hasOwnProperty.call(t.matches,a)){var n=parseInt(a);if(t.matches[a].isQuantifier&&t.matches[n+1]&&t.matches[n+1].isGroup){var r=t.matches[a];t.matches.splice(a,1),t.matches.splice(n+1,0,r)}void 0!==t.matches[a].matches?t.matches[a]=e(t.matches[a]):t.matches[a]=((o=t.matches[a])===i.optionalmarker[0]?o=i.optionalmarker[1]:o===i.optionalmarker[1]?o=i.optionalmarker[0]:o===i.groupmarker[0]?o=i.groupmarker[1]:o===i.groupmarker[1]&&(o=i.groupmarker[0]),o)}var o;return t}(m[0]);return m},t.generateMaskSet=function(e,t){var i;function n(e,i,n){var s,l,u=!1;return null!==e&&""!==e||((u=null!==n.regex)?e=(e=n.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(u=!0,e=".*")),1===e.length&&!1===n.greedy&&0!==n.repeat&&(n.placeholder=""),e=function(e,t){if(t.repeat>0||"*"===t.repeat||"+"===t.repeat){var i="*"===t.repeat?0:"+"===t.repeat?1:t.repeat;e=t.groupmarker[0]+e+t.groupmarker[1]+t.quantifiermarker[0]+i+","+t.repeat+t.quantifiermarker[1]}if(!0===t.keepStatic){var a=e.match(new RegExp("(?<p1>.)\\[(?<p2>[^\\]]*)\\]","g"));a&&a.forEach((function(t,i){var a=t.split("["),n=a[0],r=a[1].replace("]","");e=e.replace(new RegExp("".concat((0,o.default)(n),"\\[").concat((0,o.default)(r),"\\]")),n.charAt(0)===r.charAt(0)?"(".concat(n,"|").concat(n).concat(r,")"):"".concat(n,"[").concat(r,"]"))}))}return e}(e,n),l=u?"regex_"+n.regex:n.numericInput?e.split("").reverse().join(""):e,null!==n.keepStatic&&(l="ks_"+n.keepStatic+l),void 0===r.default.prototype.masksCache[l]||!0===t?(s={mask:e,maskToken:r.default.prototype.analyseMask(e,u,n),validPositions:[],_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:i,maskLength:void 0,jitOffset:{}},!0!==t&&(r.default.prototype.masksCache[l]=s,s=a.default.extend(!0,{},r.default.prototype.masksCache[l]))):s=a.default.extend(!0,{},r.default.prototype.masksCache[l]),s}"function"==typeof e.mask&&(e.mask=e.mask(e));if(Array.isArray(e.mask)){if(e.mask.length>1){null===e.keepStatic&&(e.keepStatic=!0);var s=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach((function(t){s.length>1&&(s+=e.alternatormarker),void 0!==t.mask&&"function"!=typeof t.mask?s+=t.mask:s+=t})),n(s+=e.groupmarker[1],e.mask,e)}e.mask=e.mask.pop()}i=e.mask&&void 0!==e.mask.mask&&"function"!=typeof e.mask.mask?n(e.mask.mask,e.mask,e):n(e.mask,e.mask,e);null===e.keepStatic&&(e.keepStatic=!1);return i};var a=s(i(3287)),n=s(i(9695)),r=s(i(2394)),o=s(i(7184));function s(e){return e&&e.__esModule?e:{default:e}}},157:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=function(){var e=this,t=this.opts,i=this.el,a=this.dependencyLib;s.EventRuler.off(i);var f=function(t,i){"textarea"!==t.tagName.toLowerCase()&&i.ignorables.push(n.default.ENTER);var l=t.getAttribute("type"),u="input"===t.tagName.toLowerCase()&&i.supportsInputType.includes(l)||t.isContentEditable||"textarea"===t.tagName.toLowerCase();if(!u)if("input"===t.tagName.toLowerCase()){var c=document.createElement("input");c.setAttribute("type",l),u="text"===c.type,c=null}else u="partial";return!1!==u?function(t){var n,l;function u(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==r.getLastValidPosition.call(e)||!0!==i.nullable?(this.inputmask.shadowRoot||this.ownerDocument).activeElement===this&&i.clearMaskOnLostFocus?(e.isRTL?o.clearOptionalTail.call(e,r.getBuffer.call(e).slice()).reverse():o.clearOptionalTail.call(e,r.getBuffer.call(e).slice())).join(""):n.call(this):"":n.call(this)}function c(e){l.call(this,e),this.inputmask&&(0,o.applyInputValue)(this,e)}if(!t.inputmask.__valueGet){if(!0!==i.noValuePatching){if(Object.getOwnPropertyDescriptor){var f=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):void 0;f&&f.get&&f.set?(n=f.get,l=f.set,Object.defineProperty(t,"value",{get:u,set:c,configurable:!0})):"input"!==t.tagName.toLowerCase()&&(n=function(){return this.textContent},l=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:u,set:c,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__("value")&&(n=t.__lookupGetter__("value"),l=t.__lookupSetter__("value"),t.__defineGetter__("value",u),t.__defineSetter__("value",c));t.inputmask.__valueGet=n,t.inputmask.__valueSet=l}t.inputmask._valueGet=function(t){return e.isRTL&&!0!==t?n.call(this.el).split("").reverse().join(""):n.call(this.el)},t.inputmask._valueSet=function(t,i){l.call(this.el,null==t?"":!0!==i&&e.isRTL?t.split("").reverse().join(""):t)},void 0===n&&(n=function(){return this.value},l=function(e){this.value=e},function(t){if(a.valHooks&&(void 0===a.valHooks[t]||!0!==a.valHooks[t].inputmaskpatch)){var n=a.valHooks[t]&&a.valHooks[t].get?a.valHooks[t].get:function(e){return e.value},s=a.valHooks[t]&&a.valHooks[t].set?a.valHooks[t].set:function(e,t){return e.value=t,e};a.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();var a=n(t);return-1!==r.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)||!0!==i.nullable?a:""}return n(t)},set:function(e,t){var i=s(e,t);return e.inputmask&&(0,o.applyInputValue)(e,t),i},inputmaskpatch:!0}}}(t.type),function(e){s.EventRuler.on(e,"mouseenter",(function(){var e=this,t=e.inputmask._valueGet(!0);t!=(e.inputmask.isRTL?r.getBuffer.call(e.inputmask).slice().reverse():r.getBuffer.call(e.inputmask)).join("")&&(0,o.applyInputValue)(e,t)}))}(t))}}(t):t.inputmask=void 0,u}(i,t);if(!1!==f){e.originalPlaceholder=i.placeholder,e.maxLength=void 0!==i?i.maxLength:void 0,-1===e.maxLength&&(e.maxLength=void 0),"inputMode"in i&&null===i.getAttribute("inputmode")&&(i.inputMode=t.inputmode,i.setAttribute("inputmode",t.inputmode)),!0===f&&(t.showMaskOnFocus=t.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(i.autocomplete),l.iphone&&(t.insertModeVisual=!1,i.setAttribute("autocorrect","off")),s.EventRuler.on(i,"submit",c.EventHandlers.submitEvent),s.EventRuler.on(i,"reset",c.EventHandlers.resetEvent),s.EventRuler.on(i,"blur",c.EventHandlers.blurEvent),s.EventRuler.on(i,"focus",c.EventHandlers.focusEvent),s.EventRuler.on(i,"invalid",c.EventHandlers.invalidEvent),s.EventRuler.on(i,"click",c.EventHandlers.clickEvent),s.EventRuler.on(i,"mouseleave",c.EventHandlers.mouseleaveEvent),s.EventRuler.on(i,"mouseenter",c.EventHandlers.mouseenterEvent),s.EventRuler.on(i,"paste",c.EventHandlers.pasteEvent),s.EventRuler.on(i,"cut",c.EventHandlers.cutEvent),s.EventRuler.on(i,"complete",t.oncomplete),s.EventRuler.on(i,"incomplete",t.onincomplete),s.EventRuler.on(i,"cleared",t.oncleared),!0!==t.inputEventOnly&&(s.EventRuler.on(i,"keydown",c.EventHandlers.keydownEvent),s.EventRuler.on(i,"keypress",c.EventHandlers.keypressEvent),s.EventRuler.on(i,"keyup",c.EventHandlers.keyupEvent)),(l.mobile||t.inputEventOnly)&&i.removeAttribute("maxLength"),s.EventRuler.on(i,"input",c.EventHandlers.inputFallBackEvent),s.EventRuler.on(i,"compositionend",c.EventHandlers.compositionendEvent)),s.EventRuler.on(i,"setvalue",c.EventHandlers.setValueEvent),r.getBufferTemplate.call(e).join(""),e.undoValue=e._valueGet(!0);var d=(i.inputmask.shadowRoot||i.ownerDocument).activeElement;if(""!==i.inputmask._valueGet(!0)||!1===t.clearMaskOnLostFocus||d===i){(0,o.applyInputValue)(i,i.inputmask._valueGet(!0),t);var p=r.getBuffer.call(e).slice();!1===u.isComplete.call(e,p)&&t.clearIncomplete&&r.resetMaskSet.call(e),t.clearMaskOnLostFocus&&d!==i&&(-1===r.getLastValidPosition.call(e)?p=[]:o.clearOptionalTail.call(e,p)),(!1===t.clearMaskOnLostFocus||t.showMaskOnFocus&&d===i||""!==i.inputmask._valueGet(!0))&&(0,o.writeBuffer)(i,p),d===i&&r.caret.call(e,i,r.seekNext.call(e,r.getLastValidPosition.call(e)))}}};var a,n=(a=i(5581))&&a.__esModule?a:{default:a},r=i(8711),o=i(7760),s=i(9716),l=i(9845),u=i(7215),c=i(6030)},9695:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i,a){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=a||!1,this.quantifier={min:1,max:1}}},3194:function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var i=Object(this),a=i.length>>>0;if(0===a)return!1;for(var n=0|t,r=Math.max(n>=0?n:a-Math.abs(n),0);r<a;){if(i[r]===e)return!0;r++}return!1}})},7149:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===e("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype})},8711:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=function(e,t,i,a,n){var r,o=this,s=this.opts;if(void 0===t)return"selectionStart"in e&&"selectionEnd"in e?(t=e.selectionStart,i=e.selectionEnd):window.getSelection?(r=window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==e&&r.commonAncestorContainer!==e||(t=r.startOffset,i=r.endOffset):document.selection&&document.selection.createRange&&(r=document.selection.createRange(),t=0-r.duplicate().moveStart("character",-e.inputmask._valueGet().length),i=t+r.text.length),{begin:a?t:u.call(o,t),end:a?i:u.call(o,i)};if(Array.isArray(t)&&(i=o.isRTL?t[0]:t[1],t=o.isRTL?t[1]:t[0]),void 0!==t.begin&&(i=o.isRTL?t.begin:t.end,t=o.isRTL?t.end:t.begin),"number"==typeof t){t=a?t:u.call(o,t),i="number"==typeof(i=a?i:u.call(o,i))?i:t;var l=parseInt(((e.ownerDocument.defaultView||window).getComputedStyle?(e.ownerDocument.defaultView||window).getComputedStyle(e,null):e.currentStyle).fontSize)*i;if(e.scrollLeft=l>e.scrollWidth?l:0,e.inputmask.caretPos={begin:t,end:i},s.insertModeVisual&&!1===s.insertMode&&t===i&&(n||i++),e===(e.inputmask.shadowRoot||e.ownerDocument).activeElement)if("setSelectionRange"in e)e.setSelectionRange(t,i);else if(window.getSelection){if(r=document.createRange(),void 0===e.firstChild||null===e.firstChild){var c=document.createTextNode("");e.appendChild(c)}r.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),r.setEnd(e.firstChild,i<e.inputmask._valueGet().length?i:e.inputmask._valueGet().length),r.collapse(!0);var f=window.getSelection();f.removeAllRanges(),f.addRange(r)}else e.createTextRange&&((r=e.createTextRange()).collapse(!0),r.moveEnd("character",i),r.moveStart("character",t),r.select())}},t.determineLastRequiredPosition=function(e){var t,i,r=this,s=this.maskset,l=this.dependencyLib,u=a.getMaskTemplate.call(r,!0,o.call(r),!0,!0),c=u.length,f=o.call(r),d={},p=s.validPositions[f],h=void 0!==p?p.locator.slice():void 0;for(t=f+1;t<u.length;t++)i=a.getTestTemplate.call(r,t,h,t-1),h=i.locator.slice(),d[t]=l.extend(!0,{},i);var v=p&&void 0!==p.alternation?p.locator[p.alternation]:void 0;for(t=c-1;t>f&&(((i=d[t]).match.optionality||i.match.optionalQuantifier&&i.match.newBlockMarker||v&&(v!==d[t].locator[p.alternation]&&1!=i.match.static||!0===i.match.static&&i.locator[p.alternation]&&n.checkAlternationMatch.call(r,i.locator[p.alternation].toString().split(","),v.toString().split(","))&&""!==a.getTests.call(r,t)[0].def))&&u[t]===a.getPlaceholder.call(r,t,i.match));t--)c--;return e?{l:c,def:d[c]?d[c].match:void 0}:c},t.determineNewCaretPosition=function(e,t,i){var n=this,u=this.maskset,c=this.opts;t&&(n.isRTL?e.end=e.begin:e.begin=e.end);if(e.begin===e.end){switch(i=i||c.positionCaretOnClick){case"none":break;case"select":e={begin:0,end:r.call(n).length};break;case"ignore":e.end=e.begin=l.call(n,o.call(n));break;case"radixFocus":if(function(e){if(""!==c.radixPoint&&0!==c.digits){var t=u.validPositions;if(void 0===t[e]||t[e].input===a.getPlaceholder.call(n,e)){if(e<l.call(n,-1))return!0;var i=r.call(n).indexOf(c.radixPoint);if(-1!==i){for(var o=0,s=t.length;o<s;o++)if(t[o]&&i<o&&t[o].input!==a.getPlaceholder.call(n,o))return!1;return!0}}}return!1}(e.begin)){var f=r.call(n).join("").indexOf(c.radixPoint);e.end=e.begin=c.numericInput?l.call(n,f):f;break}default:var d=e.begin,p=o.call(n,d,!0),h=l.call(n,-1!==p||s.call(n,0)?p:-1);if(d<=h)e.end=e.begin=s.call(n,d,!1,!0)?d:l.call(n,d);else{var v=u.validPositions[p],m=a.getTestTemplate.call(n,h,v?v.match.locator:void 0,v),g=a.getPlaceholder.call(n,h,m.match);if(""!==g&&r.call(n)[h]!==g&&!0!==m.match.optionalQuantifier&&!0!==m.match.newBlockMarker||!s.call(n,h,c.keepStatic,!0)&&m.match.def===g){var k=l.call(n,h);(d>=k||d===h)&&(h=k)}e.end=e.begin=h}}return e}},t.getBuffer=r,t.getBufferTemplate=function(){var e=this.maskset;void 0===e._buffer&&(e._buffer=a.getMaskTemplate.call(this,!1,1),void 0===e.buffer&&(e.buffer=e._buffer.slice()));return e._buffer},t.getLastValidPosition=o,t.isMask=s,t.resetMaskSet=function(e){var t=this.maskset;t.buffer=void 0,!0!==e&&(t.validPositions=[],t.p=0)},t.seekNext=l,t.seekPrevious=function(e,t){var i=this,n=e-1;if(e<=0)return 0;for(;n>0&&(!0===t&&(!0!==a.getTest.call(i,n).match.newBlockMarker||!s.call(i,n,void 0,!0))||!0!==t&&!s.call(i,n,void 0,!0));)n--;return n},t.translatePosition=u;var a=i(4713),n=i(7215);function r(e){var t=this.maskset;return void 0!==t.buffer&&!0!==e||(t.buffer=a.getMaskTemplate.call(this,!0,o.call(this),!0),void 0===t._buffer&&(t._buffer=t.buffer.slice())),t.buffer}function o(e,t,i){var a=this.maskset,n=-1,r=-1,o=i||a.validPositions;void 0===e&&(e=-1);for(var s=0,l=o.length;s<l;s++)o[s]&&(t||!0!==o[s].generatedInput)&&(s<=e&&(n=s),s>=e&&(r=s));return-1===n||n==e?r:-1==r||e-n<r-e?n:r}function s(e,t,i){var n=this,r=this.maskset,o=a.getTestTemplate.call(n,e).match;if(""===o.def&&(o=a.getTest.call(n,e).match),!0!==o.static)return o.fn;if(!0===i&&void 0!==r.validPositions[e]&&!0!==r.validPositions[e].generatedInput)return!0;if(!0!==t&&e>-1){if(i){var s=a.getTests.call(n,e);return s.length>1+(""===s[s.length-1].match.def?1:0)}var l=a.determineTestTemplate.call(n,e,a.getTests.call(n,e)),u=a.getPlaceholder.call(n,e,l.match);return l.match.def!==u}return!1}function l(e,t,i){var n=this;void 0===i&&(i=!0);for(var r=e+1;""!==a.getTest.call(n,r).match.def&&(!0===t&&(!0!==a.getTest.call(n,r).match.newBlockMarker||!s.call(n,r,void 0,!0))||!0!==t&&!s.call(n,r,void 0,i));)r++;return r}function u(e){var t=this.opts,i=this.el;return!this.isRTL||"number"!=typeof e||t.greedy&&""===t.placeholder||!i||(e=this._valueGet().length-e)<0&&(e=0),e}},4713:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=u,t.getDecisionTaker=o,t.getMaskTemplate=function(e,t,i,a,n){var r=this,o=this.opts,c=this.maskset,f=o.greedy;n&&o.greedy&&(o.greedy=!1,r.maskset.tests={});t=t||0;var p,h,v,m,g=[],k=0;do{if(!0===e&&c.validPositions[k])v=n&&c.validPositions[k].match.optionality&&void 0===c.validPositions[k+1]&&(!0===c.validPositions[k].generatedInput||c.validPositions[k].input==o.skipOptionalPartCharacter&&k>0)?u.call(r,k,d.call(r,k,p,k-1)):c.validPositions[k],h=v.match,p=v.locator.slice(),g.push(!0===i?v.input:!1===i?h.nativeDef:s.call(r,k,h));else{v=l.call(r,k,p,k-1),h=v.match,p=v.locator.slice();var y=!0!==a&&(!1!==o.jitMasking?o.jitMasking:h.jit);(m=(m&&h.static&&h.def!==o.groupSeparator&&null===h.fn||c.validPositions[k-1]&&h.static&&h.def!==o.groupSeparator&&null===h.fn)&&c.tests[k]&&1===c.tests[k].length)||!1===y||void 0===y||"number"==typeof y&&isFinite(y)&&y>k?g.push(!1===i?h.nativeDef:s.call(r,g.length,h)):m=!1}k++}while(!0!==h.static||""!==h.def||t>k);""===g[g.length-1]&&g.pop();!1===i&&void 0!==c.maskLength||(c.maskLength=k-1);return o.greedy=f,g},t.getPlaceholder=s,t.getTest=c,t.getTestTemplate=l,t.getTests=d,t.isSubsetOf=f;var a,n=(a=i(2394))&&a.__esModule?a:{default:a};function r(e,t){var i=(null!=e.alternation?e.mloc[o(e)]:e.locator).join("");if(""!==i)for(;i.length<t;)i+="0";return i}function o(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),void 0!==t?t.toString():""}function s(e,t,i){var a=this.opts,n=this.maskset;if(void 0!==(t=t||c.call(this,e).match).placeholder||!0===i)return"function"==typeof t.placeholder?t.placeholder(a):t.placeholder;if(!0===t.static){if(e>-1&&void 0===n.validPositions[e]){var r,o=d.call(this,e),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(""!==o[l].match.def&&!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(!0===o[l].match.static||void 0===r||!1!==o[l].match.fn.test(r.match.def,n,e,!0,a))&&(s.push(o[l]),!0===o[l].match.static&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return a.placeholder.charAt(e%a.placeholder.length)}return t.def}return a.placeholder.charAt(e%a.placeholder.length)}function l(e,t,i){return this.maskset.validPositions[e]||u.call(this,e,d.call(this,e,t?t.slice():t,i))}function u(e,t){var i=this.opts,a=function(e,t){var i=0,a=!1;t.forEach((function(e){e.match.optionality&&(0!==i&&i!==e.match.optionality&&(a=!0),(0===i||i>e.match.optionality)&&(i=e.match.optionality))})),i&&(0==e||1==t.length?i=0:a||(i=0));return i}(e,t);e=e>0?e-1:0;var n,o,s,l=r(c.call(this,e));i.greedy&&t.length>1&&""===t[t.length-1].match.def&&t.pop();for(var u=0;u<t.length;u++){var f=t[u];n=r(f,l.length);var d=Math.abs(n-l);(void 0===o||""!==n&&d<o||s&&!i.greedy&&s.match.optionality&&s.match.optionality-a>0&&"master"===s.match.newBlockMarker&&(!f.match.optionality||f.match.optionality-a<1||!f.match.newBlockMarker)||s&&!i.greedy&&s.match.optionalQuantifier&&!f.match.optionalQuantifier)&&(o=d,s=f)}return s}function c(e,t){var i=this.maskset;return i.validPositions[e]?i.validPositions[e]:(t||d.call(this,e))[0]}function f(e,t,i){function a(e){for(var t,i=[],a=-1,n=0,r=e.length;n<r;n++)if("-"===e.charAt(n))for(t=e.charCodeAt(n+1);++a<t;)i.push(String.fromCharCode(a));else a=e.charCodeAt(n),i.push(e.charAt(n));return i.join("")}return e.match.def===t.match.nativeDef||!(!(i.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)||!0===e.match.static||!0===t.match.static)&&-1!==a(t.match.fn.toString().replace(/[[\]/]/g,"")).indexOf(a(e.match.fn.toString().replace(/[[\]/]/g,"")))}function d(e,t,i){var a,r,o=this,s=this.dependencyLib,l=this.maskset,c=this.opts,d=this.el,p=l.maskToken,h=t?i:0,v=t?t.slice():[0],m=[],g=!1,k=t?t.join(""):"";function y(t,i,r,o){function s(r,o,u){function p(e,t){var i=0===t.matches.indexOf(e);return i||t.matches.every((function(a,n){return!0===a.isQuantifier?i=p(e,t.matches[n-1]):Object.prototype.hasOwnProperty.call(a,"matches")&&(i=p(e,a)),!i})),i}function v(e,t,i){var a,n;if((l.tests[e]||l.validPositions[e])&&(l.tests[e]||[l.validPositions[e]]).every((function(e,r){if(e.mloc[t])return a=e,!1;var o=void 0!==i?i:e.alternation,s=void 0!==e.locator[o]?e.locator[o].toString().indexOf(t):-1;return(void 0===n||s<n)&&-1!==s&&(a=e,n=s),!0})),a){var r=a.locator[a.alternation];return(a.mloc[t]||a.mloc[r]||a.locator).slice((void 0!==i?i:a.alternation)+1)}return void 0!==i?v(e,t):void 0}function b(e,t){var i=e.alternation,a=void 0===t||i===t.alternation&&-1===e.locator[i].toString().indexOf(t.locator[i]);if(!a&&i>t.alternation)for(var n=t.alternation;n<i;n++)if(e.locator[n]!==t.locator[n]){i=n,a=!0;break}if(a){e.mloc=e.mloc||{};var r=e.locator[i];if(void 0!==r){if("string"==typeof r&&(r=r.split(",")[0]),void 0===e.mloc[r]&&(e.mloc[r]=e.locator.slice()),void 0!==t){for(var o in t.mloc)"string"==typeof o&&(o=o.split(",")[0]),void 0===e.mloc[o]&&(e.mloc[o]=t.mloc[o]);e.locator[i]=Object.keys(e.mloc).join(",")}return!0}e.alternation=void 0}return!1}function x(e,t){if(e.locator.length!==t.locator.length)return!1;for(var i=e.alternation+1;i<e.locator.length;i++)if(e.locator[i]!==t.locator[i])return!1;return!0}if(h>e+c._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+l.mask;if(h===e&&void 0===r.matches){if(m.push({match:r,locator:o.reverse(),cd:k,mloc:{}}),!r.optionality||void 0!==u||!(c.definitions&&c.definitions[r.nativeDef]&&c.definitions[r.nativeDef].optional||n.default.prototype.definitions[r.nativeDef]&&n.default.prototype.definitions[r.nativeDef].optional))return!0;g=!0,h=e}else if(void 0!==r.matches){if(r.isGroup&&u!==r){if(r=s(t.matches[t.matches.indexOf(r)+1],o,u))return!0}else if(r.isOptional){var P=r,E=m.length;if(r=y(r,i,o,u)){if(m.forEach((function(e,t){t>=E&&(e.match.optionality=e.match.optionality?e.match.optionality+1:1)})),a=m[m.length-1].match,void 0!==u||!p(a,P))return!0;g=!0,h=e}}else if(r.isAlternator){var S,w=r,_=[],M=m.slice(),O=o.length,T=!1,A=i.length>0?i.shift():-1;if(-1===A||"string"==typeof A){var C,D=h,j=i.slice(),B=[];if("string"==typeof A)B=A.split(",");else for(C=0;C<w.matches.length;C++)B.push(C.toString());if(void 0!==l.excludes[e]){for(var R=B.slice(),L=0,I=l.excludes[e].length;L<I;L++){var F=l.excludes[e][L].toString().split(":");o.length==F[1]&&B.splice(B.indexOf(F[0]),1)}0===B.length&&(delete l.excludes[e],B=R)}(!0===c.keepStatic||isFinite(parseInt(c.keepStatic))&&D>=c.keepStatic)&&(B=B.slice(0,1));for(var N=0;N<B.length;N++){C=parseInt(B[N]),m=[],i="string"==typeof A&&v(h,C,O)||j.slice();var V=w.matches[C];if(V&&s(V,[C].concat(o),u))r=!0;else if(0===N&&(T=!0),V&&V.matches&&V.matches.length>w.matches[0].matches.length)break;S=m.slice(),h=D,m=[];for(var G=0;G<S.length;G++){var H=S[G],K=!1;H.match.jit=H.match.jit||T,H.alternation=H.alternation||O,b(H);for(var U=0;U<_.length;U++){var $=_[U];if("string"!=typeof A||void 0!==H.alternation&&B.includes(H.locator[H.alternation].toString())){if(H.match.nativeDef===$.match.nativeDef){K=!0,b($,H);break}if(f(H,$,c)){b(H,$)&&(K=!0,_.splice(_.indexOf($),0,H));break}if(f($,H,c)){b($,H);break}if(Z=$,!0===(W=H).match.static&&!0!==Z.match.static&&Z.match.fn.test(W.match.def,l,e,!1,c,!1)){x(H,$)||void 0!==d.inputmask.userOptions.keepStatic?b(H,$)&&(K=!0,_.splice(_.indexOf($),0,H)):c.keepStatic=!0;break}}}K||_.push(H)}}m=M.concat(_),h=e,g=m.length>0,r=_.length>0,i=j.slice()}else r=s(w.matches[A]||t.matches[A],[A].concat(o),u);if(r)return!0}else if(r.isQuantifier&&u!==t.matches[t.matches.indexOf(r)-1])for(var q=r,z=i.length>0?i.shift():0;z<(isNaN(q.quantifier.max)?z+1:q.quantifier.max)&&h<=e;z++){var Q=t.matches[t.matches.indexOf(q)-1];if(r=s(Q,[z].concat(o),Q)){if((a=m[m.length-1].match).optionalQuantifier=z>=q.quantifier.min,a.jit=(z+1)*(Q.matches.indexOf(a)+1)>q.quantifier.jit,a.optionalQuantifier&&p(a,Q)){g=!0,h=e;break}return a.jit&&(l.jitOffset[e]=Q.matches.length-Q.matches.indexOf(a)),!0}}else if(r=y(r,i,o,u))return!0}else h++;var W,Z}for(var u=i.length>0?i.shift():0;u<t.matches.length;u++)if(!0!==t.matches[u].isQuantifier){var p=s(t.matches[u],[u].concat(r),o);if(p&&h===e)return p;if(h>e)break}}if(e>-1){if(void 0===t){for(var b,x=e-1;void 0===(b=l.validPositions[x]||l.tests[x])&&x>-1;)x--;void 0!==b&&x>-1&&(v=function(e,t){var i,a=[];return Array.isArray(t)||(t=[t]),t.length>0&&(void 0===t[0].alternation||!0===c.keepStatic?0===(a=u.call(o,e,t.slice()).locator.slice()).length&&(a=t[0].locator.slice()):t.forEach((function(e){""!==e.def&&(0===a.length?(i=e.alternation,a=e.locator.slice()):e.locator[i]&&-1===a[i].toString().indexOf(e.locator[i])&&(a[i]+=","+e.locator[i]))}))),a}(x,b),k=v.join(""),h=x)}if(l.tests[e]&&l.tests[e][0].cd===k)return l.tests[e];for(var P=v.shift();P<p.length;P++){if(y(p[P],v,[P])&&h===e||h>e)break}}return(0===m.length||g)&&m.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:k}),void 0!==t&&l.tests[e]?r=s.extend(!0,[],m):(l.tests[e]=s.extend(!0,[],m),r=l.tests[e]),m.forEach((function(e){e.match.optionality=e.match.defOptionality||!1})),r}},7215:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=l,t.checkAlternationMatch=function(e,t,i){for(var a,n=this.opts.greedy?t:t.slice(0,1),r=!1,o=void 0!==i?i.split(","):[],s=0;s<o.length;s++)-1!==(a=e.indexOf(o[s]))&&e.splice(a,1);for(var l=0;l<e.length;l++)if(n.includes(e[l])){r=!0;break}return r},t.handleRemove=function(e,t,i,a,s){var u=this,c=this.maskset,f=this.opts;if((f.numericInput||u.isRTL)&&(t===r.default.BACKSPACE?t=r.default.DELETE:t===r.default.DELETE&&(t=r.default.BACKSPACE),u.isRTL)){var d=i.end;i.end=i.begin,i.begin=d}var p,h=o.getLastValidPosition.call(u,void 0,!0);i.end>=o.getBuffer.call(u).length&&h>=i.end&&(i.end=h+1);t===r.default.BACKSPACE?i.end-i.begin<1&&(i.begin=o.seekPrevious.call(u,i.begin)):t===r.default.DELETE&&i.begin===i.end&&(i.end=o.isMask.call(u,i.end,!0,!0)?i.end+1:o.seekNext.call(u,i.end)+1);if(!1!==(p=m.call(u,i))){if(!0!==a&&!1!==f.keepStatic||null!==f.regex&&-1!==n.getTest.call(u,i.begin).match.def.indexOf("|")){var v=l.call(u,!0);if(v){var g=void 0!==v.caret?v.caret:v.pos?o.seekNext.call(u,v.pos.begin?v.pos.begin:v.pos):o.getLastValidPosition.call(u,-1,!0);(t!==r.default.DELETE||i.begin>g)&&i.begin}}!0!==a&&(c.p=t===r.default.DELETE?i.begin+p:i.begin,c.p=o.determineNewCaretPosition.call(u,{begin:c.p,end:c.p},!1,!1===f.insertMode&&t===r.default.BACKSPACE?"none":void 0).begin)}},t.isComplete=c,t.isSelection=f,t.isValid=d,t.refreshFromBuffer=h,t.revalidateMask=m;var a,n=i(4713),r=(a=i(5581))&&a.__esModule?a:{default:a},o=i(8711),s=i(6030);function l(e,t,i,a,r,s){var u,c,f,p,h,v,m,g,k,y,b,x=this,P=this.dependencyLib,E=this.opts,S=x.maskset,w=P.extend(!0,[],S.validPositions),_=P.extend(!0,{},S.tests),M=!1,O=!1,T=void 0!==r?r:o.getLastValidPosition.call(x);if(s&&(y=s.begin,b=s.end,s.begin>s.end&&(y=s.end,b=s.begin)),-1===T&&void 0===r)u=0,c=(p=n.getTest.call(x,u)).alternation;else for(;T>=0;T--)if((f=S.validPositions[T])&&void 0!==f.alternation){if(p&&p.locator[f.alternation]!==f.locator[f.alternation])break;u=T,c=S.validPositions[u].alternation,p=f}if(void 0!==c){m=parseInt(u),S.excludes[m]=S.excludes[m]||[],!0!==e&&S.excludes[m].push((0,n.getDecisionTaker)(p)+":"+p.alternation);var A=[],C=-1;for(h=m;h<o.getLastValidPosition.call(x,void 0,!0)+1;h++)-1===C&&e<=h&&void 0!==t&&(A.push(t),C=A.length-1),(v=S.validPositions[h])&&!0!==v.generatedInput&&(void 0===s||h<y||h>=b)&&A.push(v.input),delete S.validPositions[h];for(-1===C&&void 0!==t&&(A.push(t),C=A.length-1);void 0!==S.excludes[m]&&S.excludes[m].length<10;){for(S.tests={},o.resetMaskSet.call(x,!0),M=!0,h=0;h<A.length&&(g=M.caret||o.getLastValidPosition.call(x,void 0,!0)+1,k=A[h],M=d.call(x,g,k,!1,a,!0));h++)h===C&&(O=M),1==e&&M&&(O={caretPos:h});if(M)break;if(o.resetMaskSet.call(x),p=n.getTest.call(x,m),S.validPositions=P.extend(!0,[],w),S.tests=P.extend(!0,{},_),!S.excludes[m]){O=l.call(x,e,t,i,a,m-1,s);break}var D=(0,n.getDecisionTaker)(p);if(-1!==S.excludes[m].indexOf(D+":"+p.alternation)){O=l.call(x,e,t,i,a,m-1,s);break}for(S.excludes[m].push(D+":"+p.alternation),h=m;h<o.getLastValidPosition.call(x,void 0,!0)+1;h++)delete S.validPositions[h]}}return O&&!1===E.keepStatic||delete S.excludes[m],O}function u(e,t,i){var a=this.opts,n=this.maskset;switch(a.casing||t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"title":var o=n.validPositions[i-1];e=0===i||o&&o.input===String.fromCharCode(r.default.SPACE)?e.toUpperCase():e.toLowerCase();break;default:if("function"==typeof a.casing){var s=Array.prototype.slice.call(arguments);s.push(n.validPositions),e=a.casing.apply(this,s)}}return e}function c(e){var t=this,i=this.opts,a=this.maskset;if("function"==typeof i.isComplete)return i.isComplete(e,i);if("*"!==i.repeat){var r=!1,s=o.determineLastRequiredPosition.call(t,!0),l=o.seekPrevious.call(t,s.l);if(void 0===s.def||s.def.newBlockMarker||s.def.optionality||s.def.optionalQuantifier){r=!0;for(var u=0;u<=l;u++){var c=n.getTestTemplate.call(t,u).match;if(!0!==c.static&&void 0===a.validPositions[u]&&!0!==c.optionality&&!0!==c.optionalQuantifier||!0===c.static&&e[u]!==n.getPlaceholder.call(t,u,c)){r=!1;break}}}return r}}function f(e){var t=this.opts.insertMode?0:1;return this.isRTL?e.begin-e.end>t:e.end-e.begin>t}function d(e,t,i,a,r,s,p){var g=this,k=this.dependencyLib,y=this.opts,b=g.maskset;i=!0===i;var x=e;function P(e){if(void 0!==e){if(void 0!==e.remove&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort((function(e,t){return g.isRTL?e.pos-t.pos:t.pos-e.pos})).forEach((function(e){m.call(g,{begin:e,end:e+1})})),e.remove=void 0),void 0!==e.insert&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort((function(e,t){return g.isRTL?t.pos-e.pos:e.pos-t.pos})).forEach((function(e){""!==e.c&&d.call(g,e.pos,e.c,void 0===e.strict||e.strict,void 0!==e.fromIsValid?e.fromIsValid:a)})),e.insert=void 0),e.refreshFromBuffer&&e.buffer){var t=e.refreshFromBuffer;h.call(g,!0===t?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0}void 0!==e.rewritePosition&&(x=e.rewritePosition,e=!0)}return e}function E(t,i,r){var s=!1;return n.getTests.call(g,t).every((function(l,c){var d=l.match;if(o.getBuffer.call(g,!0),!1!==(s=(!d.jit||void 0!==b.validPositions[o.seekPrevious.call(g,t)])&&(null!=d.fn?d.fn.test(i,b,t,r,y,f.call(g,e)):(i===d.def||i===y.skipOptionalPartCharacter)&&""!==d.def&&{c:n.getPlaceholder.call(g,t,d,!0)||d.def,pos:t}))){var p=void 0!==s.c?s.c:i,h=t;return p=p===y.skipOptionalPartCharacter&&!0===d.static?n.getPlaceholder.call(g,t,d,!0)||d.def:p,!0!==(s=P(s))&&void 0!==s.pos&&s.pos!==t&&(h=s.pos),!0!==s&&void 0===s.pos&&void 0===s.c?!1:(!1===m.call(g,e,k.extend({},l,{input:u.call(g,p,d,h)}),a,h)&&(s=!1),!1)}return!0})),s}void 0!==e.begin&&(x=g.isRTL?e.end:e.begin);var S=!0,w=k.extend(!0,{},b.validPositions);if(!1===y.keepStatic&&void 0!==b.excludes[x]&&!0!==r&&!0!==a)for(var _=x;_<(g.isRTL?e.begin:e.end);_++)void 0!==b.excludes[_]&&(b.excludes[_]=void 0,delete b.tests[_]);if("function"==typeof y.preValidation&&!0!==a&&!0!==s&&(S=P(S=y.preValidation.call(g,o.getBuffer.call(g),x,t,f.call(g,e),y,b,e,i||r))),!0===S){if(S=E(x,t,i),(!i||!0===a)&&!1===S&&!0!==s){var M=b.validPositions[x];if(!M||!0!==M.match.static||M.match.def!==t&&t!==y.skipOptionalPartCharacter){if(y.insertMode||void 0===b.validPositions[o.seekNext.call(g,x)]||e.end>x){var O=!1;if(b.jitOffset[x]&&void 0===b.validPositions[o.seekNext.call(g,x)]&&!1!==(S=d.call(g,x+b.jitOffset[x],t,!0,!0))&&(!0!==r&&(S.caret=x),O=!0),e.end>x&&(b.validPositions[x]=void 0),!O&&!o.isMask.call(g,x,y.keepStatic&&0===x))for(var T=x+1,A=o.seekNext.call(g,x,!1,0!==x);T<=A;T++)if(!1!==(S=E(T,t,i))){S=v.call(g,x,void 0!==S.pos?S.pos:T)||S,x=T;break}}}else S={caret:o.seekNext.call(g,x)}}!1!==S||!y.keepStatic||!c.call(g,o.getBuffer.call(g))&&0!==x||i||!0===r?f.call(g,e)&&b.tests[x]&&b.tests[x].length>1&&y.keepStatic&&!i&&!0!==r&&(S=l.call(g,!0)):S=l.call(g,x,t,i,a,void 0,e),!0===S&&(S={pos:x})}if("function"==typeof y.postValidation&&!0!==a&&!0!==s){var C=y.postValidation.call(g,o.getBuffer.call(g,!0),void 0!==e.begin?g.isRTL?e.end:e.begin:e,t,S,y,b,i,p);void 0!==C&&(S=!0===C?S:C)}S&&void 0===S.pos&&(S.pos=x),!1===S||!0===s?(o.resetMaskSet.call(g,!0),b.validPositions=k.extend(!0,[],w)):v.call(g,void 0,x,!0);var D=P(S);void 0!==g.maxLength&&(o.getBuffer.call(g).length>g.maxLength&&!a&&(o.resetMaskSet.call(g,!0),b.validPositions=k.extend(!0,[],w),D=!1));return D}function p(e,t,i){for(var a=this.maskset,r=!1,o=n.getTests.call(this,e),s=0;s<o.length;s++){if(o[s].match&&(o[s].match.nativeDef===t.match[i.shiftPositions?"def":"nativeDef"]&&(!i.shiftPositions||!t.match.static)||o[s].match.nativeDef===t.match.nativeDef||i.regex&&!o[s].match.static&&o[s].match.fn.test(t.input))){r=!0;break}if(o[s].match&&o[s].match.def===t.match.nativeDef){r=void 0;break}}return!1===r&&void 0!==a.jitOffset[e]&&(r=p.call(this,e+a.jitOffset[e],t,i)),r}function h(e,t,i){var a,n,r=this,l=this.maskset,u=this.opts,c=this.dependencyLib,f=u.skipOptionalPartCharacter,d=r.isRTL?i.slice().reverse():i;if(u.skipOptionalPartCharacter="",!0===e)o.resetMaskSet.call(r),l.tests={},e=0,t=i.length,n=o.determineNewCaretPosition.call(r,{begin:0,end:0},!1).begin;else{for(a=e;a<t;a++)delete l.validPositions[a];n=e}var p=new c.Event("keypress");for(a=e;a<t;a++){p.keyCode=d[a].toString().charCodeAt(0),r.ignorable=!1;var h=s.EventHandlers.keypressEvent.call(r,p,!0,!1,!1,n);!1!==h&&void 0!==h&&(n=h.forwardPosition)}u.skipOptionalPartCharacter=f}function v(e,t,i){var a=this,r=this.maskset,s=this.dependencyLib;if(void 0===e)for(e=t-1;e>0&&!r.validPositions[e];e--);for(var l=e;l<t;l++){if(void 0===r.validPositions[l]&&!o.isMask.call(a,l,!1))if(0==l?n.getTest.call(a,l):r.validPositions[l-1]){var u=n.getTests.call(a,l).slice();""===u[u.length-1].match.def&&u.pop();var c,f=n.determineTestTemplate.call(a,l,u);if(f&&(!0!==f.match.jit||"master"===f.match.newBlockMarker&&(c=r.validPositions[l+1])&&!0===c.match.optionalQuantifier)&&((f=s.extend({},f,{input:n.getPlaceholder.call(a,l,f.match,!0)||f.match.def})).generatedInput=!0,m.call(a,l,f,!0),!0!==i)){var p=r.validPositions[t].input;return r.validPositions[t]=void 0,d.call(a,t,p,!0,!0)}}}}function m(e,t,i,a){var r=this,s=this.maskset,l=this.opts,u=this.dependencyLib;function c(e,t,i){var a=t[e];if(void 0!==a&&!0===a.match.static&&!0!==a.match.optionality&&(void 0===t[0]||void 0===t[0].alternation)){var n=i.begin<=e-1?t[e-1]&&!0===t[e-1].match.static&&t[e-1]:t[e-1],r=i.end>e+1?t[e+1]&&!0===t[e+1].match.static&&t[e+1]:t[e+1];return n&&r}return!1}var f=0,h=void 0!==e.begin?e.begin:e,v=void 0!==e.end?e.end:e,m=!0;if(e.begin>e.end&&(h=e.end,v=e.begin),a=void 0!==a?a:h,void 0===i&&(h!==v||l.insertMode&&void 0!==s.validPositions[a]||void 0===t||t.match.optionalQuantifier||t.match.optionality)){var g,k=u.extend(!0,{},s.validPositions),y=o.getLastValidPosition.call(r,void 0,!0);for(s.p=h,g=y;g>=h;g--)delete s.validPositions[g],void 0===t&&delete s.tests[g+1];var b,x,P=a,E=P;for(t&&(s.validPositions[a]=u.extend(!0,{},t),E++,P++),g=t?v:v-1;g<=y;g++){if(void 0!==(b=k[g])&&!0!==b.generatedInput&&(g>=v||g>=h&&c(g,k,{begin:h,end:v}))){for(;""!==n.getTest.call(r,E).match.def;){if(!1!==(x=p.call(r,E,b,l))||"+"===b.match.def){"+"===b.match.def&&o.getBuffer.call(r,!0);var S=d.call(r,E,b.input,"+"!==b.match.def,!0);if(m=!1!==S,P=(S.pos||E)+1,!m&&x)break}else m=!1;if(m){void 0===t&&b.match.static&&g===e.begin&&f++;break}if(!m&&o.getBuffer.call(r),E>s.maskLength)break;E++}""==n.getTest.call(r,E).match.def&&(m=!1),E=P}if(!m)break}if(!m)return s.validPositions=u.extend(!0,[],k),o.resetMaskSet.call(r,!0),!1}else t&&n.getTest.call(r,a).match.cd===t.match.cd&&(s.validPositions[a]=u.extend(!0,{},t));return o.resetMaskSet.call(r,!0),f}},7957:function(t){t.exports=e},5581:function(e){e.exports=JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}')}},i={};function a(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,a),r.exports}var n={};return function(){var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t,i=(t=a(3046))&&t.__esModule?t:{default:t};a(443);var r=i.default;e.default=r}(),n}()}));
var luxon=function(e){"use strict";function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){t&&A(e.prototype,t),n&&A(e,n),Object.defineProperty(e,"prototype",{writable:!1})}function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),z(e.prototype.constructor=e,t)}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function q(e,t,n){return(q=function(){if("undefined"!=typeof Reflect&&Reflect.construct&&!Reflect.construct.sham){if("function"==typeof Proxy)return 1;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),1}catch(e){return}}}()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);t=new(Function.bind.apply(e,r));return n&&z(t,n.prototype),t}).apply(null,arguments)}function _(e){var n="function"==typeof Map?new Map:void 0;return function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return q(e,arguments,j(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),z(t,e)}(e)}function U(e,t){if(null==e)return{};for(var n,r={},i=Object.keys(e),o=0;o<i.length;o++)n=i[o],0<=t.indexOf(n)||(r[n]=e[n]);return r}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){var n,r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length)return r&&(e=r),n=0,function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var t=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(_(Error)),R=function(t){function e(e){return t.call(this,"Invalid DateTime: "+e.toMessage())||this}return i(e,t),e}(t),H=function(t){function e(e){return t.call(this,"Invalid Interval: "+e.toMessage())||this}return i(e,t),e}(t),W=function(t){function e(e){return t.call(this,"Invalid Duration: "+e.toMessage())||this}return i(e,t),e}(t),Y=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(t),J=function(t){function e(e){return t.call(this,"Invalid unit "+e)||this}return i(e,t),e}(t),u=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(t),n=function(e){function t(){return e.call(this,"Zone is an abstract class")||this}return i(t,e),t}(t),t="numeric",r="short",a="long",G={year:t,month:t,day:t},$={year:t,month:r,day:t},B={year:t,month:r,day:t,weekday:r},Q={year:t,month:a,day:t},K={year:t,month:a,day:t,weekday:a},X={hour:t,minute:t},ee={hour:t,minute:t,second:t},te={hour:t,minute:t,second:t,timeZoneName:r},ne={hour:t,minute:t,second:t,timeZoneName:a},re={hour:t,minute:t,hourCycle:"h23"},ie={hour:t,minute:t,second:t,hourCycle:"h23"},oe={hour:t,minute:t,second:t,hourCycle:"h23",timeZoneName:r},ae={hour:t,minute:t,second:t,hourCycle:"h23",timeZoneName:a},ue={year:t,month:t,day:t,hour:t,minute:t},se={year:t,month:t,day:t,hour:t,minute:t,second:t},ce={year:t,month:r,day:t,hour:t,minute:t},le={year:t,month:r,day:t,hour:t,minute:t,second:t},fe={year:t,month:r,day:t,weekday:r,hour:t,minute:t},de={year:t,month:a,day:t,hour:t,minute:t,timeZoneName:r},he={year:t,month:a,day:t,hour:t,minute:t,second:t,timeZoneName:r},me={year:t,month:a,day:t,weekday:a,hour:t,minute:t,timeZoneName:a},ye={year:t,month:a,day:t,weekday:a,hour:t,minute:t,second:t,timeZoneName:a},c=function(){function e(){}var t=e.prototype;return t.offsetName=function(e,t){throw new n},t.formatOffset=function(e,t){throw new n},t.offset=function(e){throw new n},t.equals=function(e){throw new n},o(e,[{key:"type",get:function(){throw new n}},{key:"name",get:function(){throw new n}},{key:"ianaName",get:function(){return this.name}},{key:"isUniversal",get:function(){throw new n}},{key:"isValid",get:function(){throw new n}}]),e}(),ve=null,pe=function(e){function t(){return e.apply(this,arguments)||this}i(t,e);var n=t.prototype;return n.offsetName=function(e,t){return Xe(e,t.format,t.locale)},n.formatOffset=function(e,t){return rt(this.offset(e),t)},n.offset=function(e){return-new Date(e).getTimezoneOffset()},n.equals=function(e){return"system"===e.type},o(t,[{key:"type",get:function(){return"system"}},{key:"name",get:function(){return(new Intl.DateTimeFormat).resolvedOptions().timeZone}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!0}}],[{key:"instance",get:function(){return ve=null===ve?new t:ve}}]),t}(c),ge={};var we={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};var ke={},f=function(n){function r(e){var t=n.call(this)||this;return t.zoneName=e,t.valid=r.isValidZone(e),t}i(r,n),r.create=function(e){return ke[e]||(ke[e]=new r(e)),ke[e]},r.resetCache=function(){ke={},ge={}},r.isValidSpecifier=function(e){return this.isValidZone(e)},r.isValidZone=function(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}};var e=r.prototype;return e.offsetName=function(e,t){return Xe(e,t.format,t.locale,this.name)},e.formatOffset=function(e,t){return rt(this.offset(e),t)},e.offset=function(e){e=new Date(e);if(isNaN(e))return NaN;t=this.name,ge[t]||(ge[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}));var t=ge[t],t=t.formatToParts?function(e,t){for(var n=e.formatToParts(t),r=[],i=0;i<n.length;i++){var o=n[i],a=o.type,o=o.value,u=we[a];"era"===a?r[u]=o:T(u)||(r[u]=parseInt(o,10))}return r}(t,e):(r=e,t=(t=t).format(r).replace(/\u200E/g,""),t=(r=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t))[1],n=r[2],[r[3],t,n,r[4],r[5],r[6],r[7]]),n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],u=t[5],t=t[6],a=24===a?0:a,e=+e,s=e%1e3;return(Be({year:n="BC"===o?1-Math.abs(n):n,month:r,day:i,hour:a,minute:u,second:t,millisecond:0})-(e-=0<=s?s:1e3+s))/6e4},e.equals=function(e){return"iana"===e.type&&e.name===this.name},o(r,[{key:"type",get:function(){return"iana"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return this.valid}}]),r}(c),be=["base"],Te=["padTo","floor"],Se={};var Oe={};function Me(e,t){void 0===t&&(t={});var n=JSON.stringify([e,t]),r=Oe[n];return r||(r=new Intl.DateTimeFormat(e,t),Oe[n]=r),r}var Ne={};var De={};var Ee=null;function Ve(e,t,n,r,i){e=e.listingMode(n);return"error"===e?null:("en"===e?r:i)(t)}var Ie=function(){function e(e,t,n){this.padTo=n.padTo||0,this.floor=n.floor||!1,n.padTo,n.floor;var r=U(n,Te);(!t||0<Object.keys(r).length)&&(t=s({useGrouping:!1},n),0<n.padTo&&(t.minimumIntegerDigits=n.padTo),this.inf=(r=e,void 0===(n=t)&&(n={}),e=JSON.stringify([r,n]),(t=Ne[e])||(t=new Intl.NumberFormat(r,n),Ne[e]=t),t))}return e.prototype.format=function(e){var t;return this.inf?(t=this.floor?Math.floor(e):e,this.inf.format(t)):l(this.floor?Math.floor(e):Ye(e,3),this.padTo)},e}(),xe=function(){function e(e,t,n){this.opts=n,e.zone.isUniversal?(i=0<=(i=e.offset/60*-1)?"Etc/GMT+"+i:"Etc/GMT"+i,0!==e.offset&&f.create(i).valid?(r=i,this.dt=e):(r="UTC",n.timeZoneName?this.dt=e:this.dt=0===e.offset?e:L.fromMillis(e.ts+60*e.offset*1e3))):"system"===e.zone.type?this.dt=e:r=(this.dt=e).zone.name;var r,i=s({},this.opts);r&&(i.timeZone=r),this.dtf=Me(t,i)}var t=e.prototype;return t.format=function(){return this.dtf.format(this.dt.toJSDate())},t.formatToParts=function(){return this.dtf.formatToParts(this.dt.toJSDate())},t.resolvedOptions=function(){return this.dtf.resolvedOptions()},e}(),Ce=function(){function e(e,t,n){var r;this.opts=s({style:"long"},n),!t&&Re()&&(this.rtf=(t=e,(n=e=void 0===(e=n)?{}:e).base,n=U(n=e,be),n=JSON.stringify([t,n]),(r=De[n])||(r=new Intl.RelativeTimeFormat(t,e),De[n]=r),r))}var t=e.prototype;return t.format=function(e,t){if(this.rtf)return this.rtf.format(e,t);var n=t,t=e,e=this.opts.numeric,r="long"!==this.opts.style,i=(void 0===e&&(e="always"),void 0===r&&(r=!1),{years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]}),o=-1===["hours","minutes","seconds"].indexOf(n);if("auto"===e&&o){var a="days"===n;switch(t){case 1:return a?"tomorrow":"next "+i[n][0];case-1:return a?"yesterday":"last "+i[n][0];case 0:return a?"today":"this "+i[n][0]}}var e=Object.is(t,-0)||t<0,t=1===(o=Math.abs(t)),u=i[n],r=r?!t&&u[2]||u[1]:t?i[n][0]:n;return e?o+" "+r+" ago":"in "+o+" "+r},t.formatToParts=function(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]},e}(),w=function(){function i(e,t,n,r){var e=function(e){if(-1===(n=e.indexOf("-u-")))return[e];var t,n=e.substring(0,n);try{t=Me(e).resolvedOptions()}catch(e){t=Me(n).resolvedOptions()}return[n,(e=t).numberingSystem,e.calendar]}(e),i=e[0],o=e[1],e=e[2];this.locale=i,this.numberingSystem=t||o||null,this.outputCalendar=n||e||null,this.intl=(i=this.locale,t=this.numberingSystem,((o=this.outputCalendar)||t)&&(i+="-u",o&&(i+="-ca-"+o),t&&(i+="-nu-"+t)),i),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=r,this.fastNumbersCached=null}i.fromOpts=function(e){return i.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)},i.create=function(e,t,n,r){void 0===r&&(r=!1);e=e||b.defaultLocale;return new i(e||(r?"en-US":Ee=Ee||(new Intl.DateTimeFormat).resolvedOptions().locale),t||b.defaultNumberingSystem,n||b.defaultOutputCalendar,e)},i.resetCache=function(){Ee=null,Oe={},Ne={},De={}},i.fromObject=function(e){var e=void 0===e?{}:e,t=e.locale,n=e.numberingSystem,e=e.outputCalendar;return i.create(t,n,e)};var e=i.prototype;return e.listingMode=function(){var e=this.isEnglish(),t=!(null!==this.numberingSystem&&"latn"!==this.numberingSystem||null!==this.outputCalendar&&"gregory"!==this.outputCalendar);return e&&t?"en":"intl"},e.clone=function(e){return e&&0!==Object.getOwnPropertyNames(e).length?i.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1):this},e.redefaultToEN=function(e){return this.clone(s({},e=void 0===e?{}:e,{defaultToEN:!0}))},e.redefaultToSystem=function(e){return this.clone(s({},e=void 0===e?{}:e,{defaultToEN:!1}))},e.months=function(n,r,e){var i=this;return void 0===r&&(r=!1),Ve(this,n,e=void 0===e?!0:e,st,function(){var t=r?{month:n,day:"numeric"}:{month:n},e=r?"format":"standalone";return i.monthsCache[e][n]||(i.monthsCache[e][n]=function(e){for(var t=[],n=1;n<=12;n++){var r=L.utc(2016,n,1);t.push(e(r))}return t}(function(e){return i.extract(e,t,"month")})),i.monthsCache[e][n]})},e.weekdays=function(n,r,e){var i=this;return void 0===r&&(r=!1),Ve(this,n,e=void 0===e?!0:e,dt,function(){var t=r?{weekday:n,year:"numeric",month:"long",day:"numeric"}:{weekday:n},e=r?"format":"standalone";return i.weekdaysCache[e][n]||(i.weekdaysCache[e][n]=function(e){for(var t=[],n=1;n<=7;n++){var r=L.utc(2016,11,13+n);t.push(e(r))}return t}(function(e){return i.extract(e,t,"weekday")})),i.weekdaysCache[e][n]})},e.meridiems=function(e){var n=this;return Ve(this,void 0,e=void 0===e?!0:e,function(){return ht},function(){var t;return n.meridiemCache||(t={hour:"numeric",hourCycle:"h12"},n.meridiemCache=[L.utc(2016,11,13,9),L.utc(2016,11,13,19)].map(function(e){return n.extract(e,t,"dayperiod")})),n.meridiemCache})},e.eras=function(e,t){var n=this;return Ve(this,e,t=void 0===t?!0:t,pt,function(){var t={era:e};return n.eraCache[e]||(n.eraCache[e]=[L.utc(-40,1,1),L.utc(2017,1,1)].map(function(e){return n.extract(e,t,"era")})),n.eraCache[e]})},e.extract=function(e,t,n){e=this.dtFormatter(e,t).formatToParts().find(function(e){return e.type.toLowerCase()===n});return e?e.value:null},e.numberFormatter=function(e){return new Ie(this.intl,(e=void 0===e?{}:e).forceSimple||this.fastNumbers,e)},e.dtFormatter=function(e,t){return new xe(e,this.intl,t=void 0===t?{}:t)},e.relFormatter=function(e){return void 0===e&&(e={}),new Ce(this.intl,this.isEnglish(),e)},e.listFormatter=function(e){return void 0===e&&(e={}),t=this.intl,void 0===(e=e)&&(e={}),n=JSON.stringify([t,e]),(r=Se[n])||(r=new Intl.ListFormat(t,e),Se[n]=r),r;var t,n,r},e.isEnglish=function(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")},e.equals=function(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar},o(i,[{key:"fastNumbers",get:function(){var e;return null==this.fastNumbersCached&&(this.fastNumbersCached=(!(e=this).numberingSystem||"latn"===e.numberingSystem)&&("latn"===e.numberingSystem||!e.locale||e.locale.startsWith("en")||"latn"===new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}}]),i}(),Fe=null,d=function(n){function t(e){var t=n.call(this)||this;return t.fixed=e,t}i(t,n),t.instance=function(e){return 0===e?t.utcInstance:new t(e)},t.parseSpecifier=function(e){if(e){e=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(e)return new t(et(e[1],e[2]))}return null};var e=t.prototype;return e.offsetName=function(){return this.name},e.formatOffset=function(e,t){return rt(this.fixed,t)},e.offset=function(){return this.fixed},e.equals=function(e){return"fixed"===e.type&&e.fixed===this.fixed},o(t,[{key:"type",get:function(){return"fixed"}},{key:"name",get:function(){return 0===this.fixed?"UTC":"UTC"+rt(this.fixed,"narrow")}},{key:"ianaName",get:function(){return 0===this.fixed?"Etc/UTC":"Etc/GMT"+rt(-this.fixed,"narrow")}},{key:"isUniversal",get:function(){return!0}},{key:"isValid",get:function(){return!0}}],[{key:"utcInstance",get:function(){return Fe=null===Fe?new t(0):Fe}}]),t}(c),Ze=function(n){function e(e){var t=n.call(this)||this;return t.zoneName=e,t}i(e,n);var t=e.prototype;return t.offsetName=function(){return null},t.formatOffset=function(){return""},t.offset=function(){return NaN},t.equals=function(){return!1},o(e,[{key:"type",get:function(){return"invalid"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!1}}]),e}(c);function k(e,t){var n;return T(e)||null===e?t:e instanceof c?e:"string"==typeof e?"default"===(n=e.toLowerCase())?t:"local"===n||"system"===n?pe.instance:"utc"===n||"gmt"===n?d.utcInstance:d.parseSpecifier(n)||f.create(e):y(e)?d.instance(e):"object"==typeof e&&e.offset&&"number"==typeof e.offset?e:new Ze(e)}var Le,Ae=function(){return Date.now()},je="system",ze=null,qe=null,_e=null,Ue=60,b=function(){function e(){}return e.resetCaches=function(){w.resetCache(),f.resetCache()},o(e,null,[{key:"now",get:function(){return Ae},set:function(e){Ae=e}},{key:"defaultZone",get:function(){return k(je,pe.instance)},set:function(e){je=e}},{key:"defaultLocale",get:function(){return ze},set:function(e){ze=e}},{key:"defaultNumberingSystem",get:function(){return qe},set:function(e){qe=e}},{key:"defaultOutputCalendar",get:function(){return _e},set:function(e){_e=e}},{key:"twoDigitCutoffYear",get:function(){return Ue},set:function(e){Ue=e%100}},{key:"throwOnInvalid",get:function(){return Le},set:function(e){Le=e}}]),e}();function T(e){return void 0===e}function y(e){return"number"==typeof e}function Pe(e){return"number"==typeof e&&e%1==0}function Re(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function He(e,n,r){if(0!==e.length)return e.reduce(function(e,t){t=[n(t),t];return e&&r(e[0],t[0])===e[0]?e:t},null)[1]}function h(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function S(e,t,n){return Pe(e)&&t<=e&&e<=n}function l(e,t){void 0===t&&(t=2);e=e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0");return e}function m(e){if(!T(e)&&null!==e&&""!==e)return parseInt(e,10)}function v(e){if(!T(e)&&null!==e&&""!==e)return parseFloat(e)}function We(e){if(!T(e)&&null!==e&&""!==e)return e=1e3*parseFloat("0."+e),Math.floor(e)}function Ye(e,t,n){void 0===n&&(n=!1);t=Math.pow(10,t);return(n?Math.trunc:Math.round)(e*t)/t}function Je(e){return e%4==0&&(e%100!=0||e%400==0)}function Ge(e){return Je(e)?366:365}function $e(e,t){var n,r=(r=t-1)-(n=12)*Math.floor(r/n)+1;return 2==r?Je(e+(t-r)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Be(e){var t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&0<=e.year&&(t=new Date(t)).setUTCFullYear(t.getUTCFullYear()-1900),+t}function Qe(e){var t=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7,e=e-1,e=(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7;return 4==t||3==e?53:52}function Ke(e){return 99<e?e:e>b.twoDigitCutoffYear?1900+e:2e3+e}function Xe(e,t,n,r){void 0===r&&(r=null);var e=new Date(e),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"},r=(r&&(i.timeZone=r),s({timeZoneName:t},i)),t=new Intl.DateTimeFormat(n,r).formatToParts(e).find(function(e){return"timezonename"===e.type.toLowerCase()});return t?t.value:null}function et(e,t){e=parseInt(e,10),Number.isNaN(e)&&(e=0),t=parseInt(t,10)||0;return 60*e+(e<0||Object.is(e,-0)?-t:t)}function tt(e){var t=Number(e);if("boolean"==typeof e||""===e||Number.isNaN(t))throw new u("Invalid unit value "+e);return t}function nt(e,t){var n,r,i={};for(n in e)!h(e,n)||null!=(r=e[n])&&(i[t(n)]=tt(r));return i}function rt(e,t){var n=Math.trunc(Math.abs(e/60)),r=Math.trunc(Math.abs(e%60)),i=0<=e?"+":"-";switch(t){case"short":return i+l(n,2)+":"+l(r,2);case"narrow":return i+n+(0<r?":"+r:"");case"techie":return i+l(n,2)+l(r,2);default:throw new RangeError("Value format "+t+" is out of range for property format")}}function it(e){return n=e,["hour","minute","second","millisecond"].reduce(function(e,t){return e[t]=n[t],e},{});var n}var ot=["January","February","March","April","May","June","July","August","September","October","November","December"],at=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ut=["J","F","M","A","M","J","J","A","S","O","N","D"];function st(e){switch(e){case"narrow":return[].concat(ut);case"short":return[].concat(at);case"long":return[].concat(ot);case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var ct=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],lt=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ft=["M","T","W","T","F","S","S"];function dt(e){switch(e){case"narrow":return[].concat(ft);case"short":return[].concat(lt);case"long":return[].concat(ct);case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var ht=["AM","PM"],mt=["Before Christ","Anno Domini"],yt=["BC","AD"],vt=["B","A"];function pt(e){switch(e){case"narrow":return[].concat(vt);case"short":return[].concat(yt);case"long":return[].concat(mt);default:return null}}function gt(e,t){for(var n="",r=g(e);!(i=r()).done;){var i=i.value;i.literal?n+=i.val:n+=t(i.val)}return n}var wt={D:G,DD:$,DDD:Q,DDDD:K,t:X,tt:ee,ttt:te,tttt:ne,T:re,TT:ie,TTT:oe,TTTT:ae,f:ue,ff:ce,fff:de,ffff:me,F:se,FF:le,FFF:he,FFFF:ye},O=function(){function d(e,t){this.opts=t,this.loc=e,this.systemLoc=null}d.create=function(e,t){return new d(e,t=void 0===t?{}:t)},d.parseFormat=function(e){for(var t=null,n="",r=!1,i=[],o=0;o<e.length;o++){var a=e.charAt(o);"'"===a?(0<n.length&&i.push({literal:r,val:n}),t=null,n="",r=!r):r||a===t?n+=a:(0<n.length&&i.push({literal:!1,val:n}),t=n=a)}return 0<n.length&&i.push({literal:r,val:n}),i},d.macroTokenToFormatOpts=function(e){return wt[e]};var e=d.prototype;return e.formatWithSystemDefault=function(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,s({},this.opts,t)).format()},e.formatDateTime=function(e,t){return this.loc.dtFormatter(e,s({},this.opts,t=void 0===t?{}:t)).format()},e.formatDateTimeParts=function(e,t){return this.loc.dtFormatter(e,s({},this.opts,t=void 0===t?{}:t)).formatToParts()},e.resolvedOptions=function(e,t){return this.loc.dtFormatter(e,s({},this.opts,t=void 0===t?{}:t)).resolvedOptions()},e.num=function(e,t){if(void 0===t&&(t=0),this.opts.forceSimple)return l(e,t);var n=s({},this.opts);return 0<t&&(n.padTo=t),this.loc.numberFormatter(n).format(e)},e.formatDateTimeFromString=function(r,e){var n=this,i="en"===this.loc.listingMode(),t=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,o=function(e,t){return n.loc.extract(r,e,t)},a=function(e){return r.isOffsetFixed&&0===r.offset&&e.allowZ?"Z":r.isValid?r.zone.formatOffset(r.ts,e.format):""},u=function(){return i?ht[r.hour<12?0:1]:o({hour:"numeric",hourCycle:"h12"},"dayperiod")},s=function(e,t){return i?(n=r,st(e)[n.month-1]):o(t?{month:e}:{month:e,day:"numeric"},"month");var n},c=function(e,t){return i?(n=r,dt(e)[n.weekday-1]):o(t?{weekday:e}:{weekday:e,month:"long",day:"numeric"},"weekday");var n},l=function(e){var t=d.macroTokenToFormatOpts(e);return t?n.formatWithSystemDefault(r,t):e},f=function(e){return i?(t=r,pt(e)[t.year<0?0:1]):o({era:e},"era");var t};return gt(d.parseFormat(e),function(e){switch(e){case"S":return n.num(r.millisecond);case"u":case"SSS":return n.num(r.millisecond,3);case"s":return n.num(r.second);case"ss":return n.num(r.second,2);case"uu":return n.num(Math.floor(r.millisecond/10),2);case"uuu":return n.num(Math.floor(r.millisecond/100));case"m":return n.num(r.minute);case"mm":return n.num(r.minute,2);case"h":return n.num(r.hour%12==0?12:r.hour%12);case"hh":return n.num(r.hour%12==0?12:r.hour%12,2);case"H":return n.num(r.hour);case"HH":return n.num(r.hour,2);case"Z":return a({format:"narrow",allowZ:n.opts.allowZ});case"ZZ":return a({format:"short",allowZ:n.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:n.opts.allowZ});case"ZZZZ":return r.zone.offsetName(r.ts,{format:"short",locale:n.loc.locale});case"ZZZZZ":return r.zone.offsetName(r.ts,{format:"long",locale:n.loc.locale});case"z":return r.zoneName;case"a":return u();case"d":return t?o({day:"numeric"},"day"):n.num(r.day);case"dd":return t?o({day:"2-digit"},"day"):n.num(r.day,2);case"c":return n.num(r.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return n.num(r.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return t?o({month:"numeric",day:"numeric"},"month"):n.num(r.month);case"LL":return t?o({month:"2-digit",day:"numeric"},"month"):n.num(r.month,2);case"LLL":return s("short",!0);case"LLLL":return s("long",!0);case"LLLLL":return s("narrow",!0);case"M":return t?o({month:"numeric"},"month"):n.num(r.month);case"MM":return t?o({month:"2-digit"},"month"):n.num(r.month,2);case"MMM":return s("short",!1);case"MMMM":return s("long",!1);case"MMMMM":return s("narrow",!1);case"y":return t?o({year:"numeric"},"year"):n.num(r.year);case"yy":return t?o({year:"2-digit"},"year"):n.num(r.year.toString().slice(-2),2);case"yyyy":return t?o({year:"numeric"},"year"):n.num(r.year,4);case"yyyyyy":return t?o({year:"numeric"},"year"):n.num(r.year,6);case"G":return f("short");case"GG":return f("long");case"GGGGG":return f("narrow");case"kk":return n.num(r.weekYear.toString().slice(-2),2);case"kkkk":return n.num(r.weekYear,4);case"W":return n.num(r.weekNumber);case"WW":return n.num(r.weekNumber,2);case"o":return n.num(r.ordinal);case"ooo":return n.num(r.ordinal,3);case"q":return n.num(r.quarter);case"qq":return n.num(r.quarter,2);case"X":return n.num(Math.floor(r.ts/1e3));case"x":return n.num(r.ts);default:return l(e)}})},e.formatDurationFromString=function(e,t){var n,r=this,i=function(e){switch(e[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},t=d.parseFormat(t),o=t.reduce(function(e,t){var n=t.literal,t=t.val;return n?e:e.concat(t)},[]),e=e.shiftTo.apply(e,o.map(i).filter(function(e){return e}));return gt(t,(n=e,function(e){var t=i(e);return t?r.num(n.get(t),e.length):e}))},d}(),M=function(){function e(e,t){this.reason=e,this.explanation=t}return e.prototype.toMessage=function(){return this.explanation?this.reason+": "+this.explanation:this.reason},e}(),r=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.reduce(function(e,t){return e+t.source},"");return RegExp("^"+r+"$")}function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(o){return t.reduce(function(e,t){var n=e[0],r=e[1],e=e[2],t=t(o,e),e=t[0],i=t[1],t=t[2];return[s({},n,e),i||r,t]},[{},null,1]).slice(0,2)}}function kt(e){if(null!=e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i],u=a[0],a=a[1],u=u.exec(e);if(u)return a(u)}}return[null,null]}function bt(){for(var e=arguments.length,i=new Array(e),t=0;t<e;t++)i[t]=arguments[t];return function(e,t){for(var n={},r=0;r<i.length;r++)n[i[r]]=m(e[t+r]);return[n,null,t+r]}}var t=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,a=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Tt=RegExp(a.source+("(?:"+t.source+"?(?:\\[("+r.source+")\\])?)?")),D=RegExp("(?:T"+Tt.source+")?"),St=bt("weekYear","weekNumber","weekDay"),Ot=bt("year","ordinal"),t=RegExp(a.source+" ?(?:"+t.source+"|("+r.source+"))?"),r=RegExp("(?: "+t.source+")?");function Mt(e,t,n){e=e[t];return T(e)?n:m(e)}function Nt(e,t){return[{hours:Mt(e,t,0),minutes:Mt(e,t+1,0),seconds:Mt(e,t+2,0),milliseconds:We(e[t+3])},null,t+4]}function Dt(e,t){var n=!e[t]&&!e[t+1],e=et(e[t+1],e[t+2]);return[{},n?null:d.instance(e),t+3]}function Et(e,t){return[{},e[t]?f.create(e[t]):null,t+1]}var Vt=RegExp("^T?"+a.source+"$"),It=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function xt(e){function t(e,t){return void 0===t&&(t=!1),void 0!==e&&(t||e&&l)?-e:e}var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],u=e[5],s=e[6],c=e[7],e=e[8],l="-"===n[0],n=c&&"-"===c[0];return[{years:t(v(r)),months:t(v(i)),weeks:t(v(o)),days:t(v(a)),hours:t(v(u)),minutes:t(v(s)),seconds:t(v(c),"-0"===c),milliseconds:t(We(e),n)}]}var Ct={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Ft(e,t,n,r,i,o,a){t={year:2===t.length?Ke(m(t)):m(t),month:at.indexOf(n)+1,day:m(r),hour:m(i),minute:m(o)};return a&&(t.second=m(a)),e&&(t.weekday=3<e.length?ct.indexOf(e)+1:lt.indexOf(e)+1),t}var Zt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Lt(e){var t=e[1],n=e[2],r=e[3],i=e[4],o=e[5],a=e[6],u=e[7],s=e[8],c=e[9],l=e[10],e=e[11],t=Ft(t,i,r,n,o,a,u),i=s?Ct[s]:c?0:et(l,e);return[t,new d(i)]}var At=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,jt=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,zt=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function qt(e){var t=e[1],n=e[2],r=e[3];return[Ft(t,e[4],r,n,e[5],e[6],e[7]),d.utcInstance]}function _t(e){var t=e[1],n=e[2],r=e[3],i=e[4],o=e[5],a=e[6];return[Ft(t,e[7],n,r,i,o,a),d.utcInstance]}var Ut=p(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,D),Pt=p(/(\d{4})-?W(\d\d)(?:-?(\d))?/,D),Rt=p(/(\d{4})-?(\d{3})/,D),Ht=p(Tt),Wt=N(function(e,t){return[{year:Mt(e,t),month:Mt(e,t+1,1),day:Mt(e,t+2,1)},null,t+3]},Nt,Dt,Et),Yt=N(St,Nt,Dt,Et),Jt=N(Ot,Nt,Dt,Et),Gt=N(Nt,Dt,Et);var $t=N(Nt);var Bt=p(/(\d{4})-(\d\d)-(\d\d)/,r),Qt=p(t),Kt=N(Nt,Dt,Et);var a={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},Xt=s({years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6}},a),D=365.2425,Tt=30.436875,en=s({years:{quarters:4,months:12,weeks:D/7,days:D,hours:24*D,minutes:525949.2,seconds:525949.2*60,milliseconds:525949.2*60*1e3},quarters:{months:3,weeks:D/28,days:D/4,hours:24*D/4,minutes:131487.3,seconds:525949.2*60/4,milliseconds:7889237999.999999},months:{weeks:Tt/7,days:Tt,hours:24*Tt,minutes:43829.1,seconds:2629746,milliseconds:2629746e3}},a),E=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],tn=E.slice(0).reverse();function V(e,t,n){n={values:(n=void 0===n?!1:n)?t.values:s({},e.values,t.values||{}),loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix};return new I(n)}function nn(e,t,n,r,i){var e=e[i][n],o=t[n]/e,a=!(Math.sign(o)===Math.sign(r[i]))&&0!==r[i]&&Math.abs(o)<=1?(a=o)<0?Math.floor(a):Math.ceil(a):Math.trunc(o);r[i]+=a,t[n]-=a*e}var I=function(){function m(e){var t="longterm"===e.conversionAccuracy||!1,n=t?en:Xt;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||w.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}m.fromMillis=function(e,t){return m.fromObject({milliseconds:e},t)},m.fromObject=function(e,t){if(void 0===t&&(t={}),null==e||"object"!=typeof e)throw new u("Duration.fromObject: argument expected to be an object, got "+(null===e?"null":typeof e));return new m({values:nt(e,m.normalizeUnit),loc:w.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})},m.fromDurationLike=function(e){if(y(e))return m.fromMillis(e);if(m.isDuration(e))return e;if("object"==typeof e)return m.fromObject(e);throw new u("Unknown duration argument "+e+" of type "+typeof e)},m.fromISO=function(e,t){var n=kt(e,[It,xt])[0];return n?m.fromObject(n,t):m.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},m.fromISOTime=function(e,t){var n=kt(e,[Vt,$t])[0];return n?m.fromObject(n,t):m.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},m.invalid=function(e,t){if(void 0===t&&(t=null),!e)throw new u("need to specify a reason the Duration is invalid");e=e instanceof M?e:new M(e,t);if(b.throwOnInvalid)throw new W(e);return new m({invalid:e})},m.normalizeUnit=function(e){var t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(t)return t;throw new J(e)},m.isDuration=function(e){return e&&e.isLuxonDuration||!1};var e=m.prototype;return e.toFormat=function(e,t){t=s({},t=void 0===t?{}:t,{floor:!1!==t.round&&!1!==t.floor});return this.isValid?O.create(this.loc,t).formatDurationFromString(this,e):"Invalid Duration"},e.toHuman=function(n){var r=this,e=(void 0===n&&(n={}),E.map(function(e){var t=r.values[e];return T(t)?null:r.loc.numberFormatter(s({style:"unit",unitDisplay:"long"},n,{unit:e.slice(0,-1)})).format(t)}).filter(function(e){return e}));return this.loc.listFormatter(s({type:"conjunction",style:n.listStyle||"narrow"},n)).format(e)},e.toObject=function(){return this.isValid?s({},this.values):{}},e.toISO=function(){if(!this.isValid)return null;var e="P";return 0!==this.years&&(e+=this.years+"Y"),0===this.months&&0===this.quarters||(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),0===this.hours&&0===this.minutes&&0===this.seconds&&0===this.milliseconds||(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),0===this.seconds&&0===this.milliseconds||(e+=Ye(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e},e.toISOTime=function(e){if(void 0===e&&(e={}),!this.isValid)return null;var t=this.toMillis();if(t<0||864e5<=t)return null;e=s({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},e);var t=this.shiftTo("hours","minutes","seconds","milliseconds"),n="basic"===e.format?"hhmm":"hh:mm",t=(e.suppressSeconds&&0===t.seconds&&0===t.milliseconds||(n+="basic"===e.format?"ss":":ss",e.suppressMilliseconds&&0===t.milliseconds||(n+=".SSS")),t.toFormat(n));return t=e.includePrefix?"T"+t:t},e.toJSON=function(){return this.toISO()},e.toString=function(){return this.toISO()},e.toMillis=function(){return this.as("milliseconds")},e.valueOf=function(){return this.toMillis()},e.plus=function(e){if(!this.isValid)return this;for(var t=m.fromDurationLike(e),n={},r=g(E);!(i=r()).done;){var i=i.value;(h(t.values,i)||h(this.values,i))&&(n[i]=t.get(i)+this.get(i))}return V(this,{values:n},!0)},e.minus=function(e){if(!this.isValid)return this;e=m.fromDurationLike(e);return this.plus(e.negate())},e.mapUnits=function(e){if(!this.isValid)return this;for(var t={},n=0,r=Object.keys(this.values);n<r.length;n++){var i=r[n];t[i]=tt(e(this.values[i],i))}return V(this,{values:t},!0)},e.get=function(e){return this[m.normalizeUnit(e)]},e.set=function(e){return this.isValid?V(this,{values:s({},this.values,nt(e,m.normalizeUnit))}):this},e.reconfigure=function(e){var e=void 0===e?{}:e,t=e.locale,n=e.numberingSystem,r=e.conversionAccuracy,e=e.matrix,t=this.loc.clone({locale:t,numberingSystem:n});return V(this,{loc:t,matrix:e,conversionAccuracy:r})},e.as=function(e){return this.isValid?this.shiftTo(e).get(e):NaN},e.normalize=function(){if(!this.isValid)return this;var n,r,e=this.toObject();return n=this.matrix,r=e,tn.reduce(function(e,t){return T(r[t])?e:(e&&nn(n,r,e,r,t),t)},null),V(this,{values:e},!0)},e.rescale=function(){if(!this.isValid)return this;var e=function(e){for(var t={},n=0,r=Object.entries(e);n<r.length;n++){var i=r[n],o=i[0],i=i[1];0!==i&&(t[o]=i)}return t}(this.normalize().shiftToAll().toObject());return V(this,{values:e},!0)},e.shiftTo=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!this.isValid)return this;if(0===t.length)return this;for(var r,t=t.map(function(e){return m.normalizeUnit(e)}),i={},o={},a=this.toObject(),u=g(E);!(h=u()).done;){var s=h.value;if(0<=t.indexOf(s)){var c,l=s,f=0;for(c in o)f+=this.matrix[c][s]*o[c],o[c]=0;y(a[s])&&(f+=a[s]);var d,h=Math.trunc(f);for(d in i[s]=h,o[s]=(1e3*f-1e3*h)/1e3,a)E.indexOf(d)>E.indexOf(s)&&nn(this.matrix,a,d,i,s)}else y(a[s])&&(o[s]=a[s])}for(r in o)0!==o[r]&&(i[l]+=r===l?o[r]:o[r]/this.matrix[l][r]);return V(this,{values:i},!0).normalize()},e.shiftToAll=function(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this},e.negate=function(){if(!this.isValid)return this;for(var e={},t=0,n=Object.keys(this.values);t<n.length;t++){var r=n[t];e[r]=0===this.values[r]?0:-this.values[r]}return V(this,{values:e},!0)},e.equals=function(e){if(!this.isValid||!e.isValid)return!1;if(!this.loc.equals(e.loc))return!1;for(var t,n=g(E);!(r=n()).done;){var r=r.value;if(t=this.values[r],r=e.values[r],!(void 0===t||0===t?void 0===r||0===r:t===r))return!1}return!0},o(m,[{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"years",get:function(){return this.isValid?this.values.years||0:NaN}},{key:"quarters",get:function(){return this.isValid?this.values.quarters||0:NaN}},{key:"months",get:function(){return this.isValid?this.values.months||0:NaN}},{key:"weeks",get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:"days",get:function(){return this.isValid?this.values.days||0:NaN}},{key:"hours",get:function(){return this.isValid?this.values.hours||0:NaN}},{key:"minutes",get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:"seconds",get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:"milliseconds",get:function(){return this.isValid?this.values.milliseconds||0:NaN}},{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),m}(),rn="Invalid Interval";var on=function(){function c(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}c.invalid=function(e,t){if(void 0===t&&(t=null),!e)throw new u("need to specify a reason the Interval is invalid");e=e instanceof M?e:new M(e,t);if(b.throwOnInvalid)throw new H(e);return new c({invalid:e})},c.fromDateTimes=function(e,t){var n,e=ir(e),t=ir(t),r=(n=t,(r=e)&&r.isValid?n&&n.isValid?n<r?on.invalid("end before start","The end of an interval must be after its start, but you had start="+r.toISO()+" and end="+n.toISO()):null:on.invalid("missing or invalid end"):on.invalid("missing or invalid start"));return null==r?new c({start:e,end:t}):r},c.after=function(e,t){t=I.fromDurationLike(t),e=ir(e);return c.fromDateTimes(e,e.plus(t))},c.before=function(e,t){t=I.fromDurationLike(t),e=ir(e);return c.fromDateTimes(e.minus(t),e)},c.fromISO=function(e,t){var n,r,i,o=(e||"").split("/",2),a=o[0],u=o[1];if(a&&u){try{s=(n=L.fromISO(a,t)).isValid}catch(u){s=!1}try{i=(r=L.fromISO(u,t)).isValid}catch(u){i=!1}if(s&&i)return c.fromDateTimes(n,r);if(s){o=I.fromISO(u,t);if(o.isValid)return c.after(n,o)}else if(i){var s=I.fromISO(a,t);if(s.isValid)return c.before(r,s)}}return c.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")},c.isInterval=function(e){return e&&e.isLuxonInterval||!1};var e=c.prototype;return e.length=function(e){return void 0===e&&(e="milliseconds"),this.isValid?this.toDuration.apply(this,[e]).get(e):NaN},e.count=function(e){if(!this.isValid)return NaN;var t=this.start.startOf(e=void 0===e?"milliseconds":e),n=this.end.startOf(e);return Math.floor(n.diff(t,e).get(e))+1},e.hasSame=function(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))},e.isEmpty=function(){return this.s.valueOf()===this.e.valueOf()},e.isAfter=function(e){return!!this.isValid&&this.s>e},e.isBefore=function(e){return!!this.isValid&&this.e<=e},e.contains=function(e){return!!this.isValid&&(this.s<=e&&this.e>e)},e.set=function(e){var e=void 0===e?{}:e,t=e.start,e=e.end;return this.isValid?c.fromDateTimes(t||this.s,e||this.e):this},e.splitAt=function(){var t=this;if(!this.isValid)return[];for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];for(var i=n.map(ir).filter(function(e){return t.contains(e)}).sort(),o=[],a=this.s,u=0;a<this.e;){var s=i[u]||this.e,s=+s>+this.e?this.e:s;o.push(c.fromDateTimes(a,s)),a=s,u+=1}return o},e.splitBy=function(e){var t=I.fromDurationLike(e);if(!this.isValid||!t.isValid||0===t.as("milliseconds"))return[];for(var n=this.s,r=1,i=[];n<this.e;){var o=this.start.plus(t.mapUnits(function(e){return e*r})),o=+o>+this.e?this.e:o;i.push(c.fromDateTimes(n,o)),n=o,r+=1}return i},e.divideEqually=function(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]},e.overlaps=function(e){return this.e>e.s&&this.s<e.e},e.abutsStart=function(e){return!!this.isValid&&+this.e==+e.s},e.abutsEnd=function(e){return!!this.isValid&&+e.e==+this.s},e.engulfs=function(e){return!!this.isValid&&(this.s<=e.s&&this.e>=e.e)},e.equals=function(e){return!(!this.isValid||!e.isValid)&&(this.s.equals(e.s)&&this.e.equals(e.e))},e.intersection=function(e){if(!this.isValid)return this;var t=(this.s>e.s?this:e).s,e=(this.e<e.e?this:e).e;return e<=t?null:c.fromDateTimes(t,e)},e.union=function(e){if(!this.isValid)return this;var t=(this.s<e.s?this:e).s,e=(this.e>e.e?this:e).e;return c.fromDateTimes(t,e)},c.merge=function(e){var e=e.sort(function(e,t){return e.s-t.s}).reduce(function(e,t){var n=e[0],e=e[1];return e?e.overlaps(t)||e.abutsStart(t)?[n,e.union(t)]:[n.concat([e]),t]:[n,t]},[[],null]),t=e[0],e=e[1];return e&&t.push(e),t},c.xor=function(e){for(var t,n=null,r=0,i=[],e=e.map(function(e){return[{time:e.s,type:"s"},{time:e.e,type:"e"}]}),o=g((t=Array.prototype).concat.apply(t,e).sort(function(e,t){return e.time-t.time}));!(a=o()).done;)var a=a.value,n=1===(r+="s"===a.type?1:-1)?a.time:(n&&+n!=+a.time&&i.push(c.fromDateTimes(n,a.time)),null);return c.merge(i)},e.difference=function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return c.xor([this].concat(n)).map(function(e){return t.intersection(e)}).filter(function(e){return e&&!e.isEmpty()})},e.toString=function(){return this.isValid?"["+this.s.toISO()+" – "+this.e.toISO()+")":rn},e.toISO=function(e){return this.isValid?this.s.toISO(e)+"/"+this.e.toISO(e):rn},e.toISODate=function(){return this.isValid?this.s.toISODate()+"/"+this.e.toISODate():rn},e.toISOTime=function(e){return this.isValid?this.s.toISOTime(e)+"/"+this.e.toISOTime(e):rn},e.toFormat=function(e,t){t=(void 0===t?{}:t).separator,t=void 0===t?" – ":t;return this.isValid?""+this.s.toFormat(e)+t+this.e.toFormat(e):rn},e.toDuration=function(e,t){return this.isValid?this.e.diff(this.s,e,t):I.invalid(this.invalidReason)},e.mapEndpoints=function(e){return c.fromDateTimes(e(this.s),e(this.e))},o(c,[{key:"start",get:function(){return this.isValid?this.s:null}},{key:"end",get:function(){return this.isValid?this.e:null}},{key:"isValid",get:function(){return null===this.invalidReason}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),c}(),an=function(){function e(){}return e.hasDST=function(e){void 0===e&&(e=b.defaultZone);var t=L.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset},e.isValidIANAZone=function(e){return f.isValidZone(e)},e.normalizeZone=function(e){return k(e,b.defaultZone)},e.months=function(e,t){void 0===e&&(e="long");var t=void 0===t?{}:t,n=t.locale,r=t.numberingSystem,i=t.locObj,i=void 0===i?null:i,t=t.outputCalendar;return(i||w.create(void 0===n?null:n,void 0===r?null:r,void 0===t?"gregory":t)).months(e)},e.monthsFormat=function(e,t){void 0===e&&(e="long");var t=void 0===t?{}:t,n=t.locale,r=t.numberingSystem,i=t.locObj,i=void 0===i?null:i,t=t.outputCalendar;return(i||w.create(void 0===n?null:n,void 0===r?null:r,void 0===t?"gregory":t)).months(e,!0)},e.weekdays=function(e,t){void 0===e&&(e="long");var t=void 0===t?{}:t,n=t.locale,r=t.numberingSystem,t=t.locObj;return((void 0===t?null:t)||w.create(void 0===n?null:n,void 0===r?null:r,null)).weekdays(e)},e.weekdaysFormat=function(e,t){void 0===e&&(e="long");var t=void 0===t?{}:t,n=t.locale,r=t.numberingSystem,t=t.locObj;return((void 0===t?null:t)||w.create(void 0===n?null:n,void 0===r?null:r,null)).weekdays(e,!0)},e.meridiems=function(e){e=(void 0===e?{}:e).locale;return w.create(void 0===e?null:e).meridiems()},e.eras=function(e,t){void 0===e&&(e="short");t=(void 0===t?{}:t).locale;return w.create(void 0===t?null:t,null,"gregory").eras(e)},e.features=function(){return{relative:Re()}},e}();function un(e,t){function n(e){return e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf()}t=n(t)-n(e);return Math.floor(I.fromMillis(t).as("days"))}function sn(e,t,n,r){var e=function(e,t,n){for(var r={},i=0,o=[["years",function(e,t){return t.year-e.year}],["quarters",function(e,t){return t.quarter-e.quarter+4*(t.year-e.year)}],["months",function(e,t){return t.month-e.month+12*(t.year-e.year)}],["weeks",function(e,t){e=un(e,t);return(e-e%7)/7}],["days",un]];i<o.length;i++){var a,u,s,c=o[i],l=c[0],c=c[1];0<=n.indexOf(l)&&(a=l,c=c(e,t),t<(s=e.plus(((u={})[l]=c,u)))?(e=e.plus(((u={})[l]=c-1,u)),--c):e=s,r[l]=c)}return[e,r,s,a]}(e,t,n),i=e[0],o=e[1],a=e[2],e=e[3],u=t-i,n=n.filter(function(e){return 0<=["hours","minutes","seconds","milliseconds"].indexOf(e)}),t=(0===n.length&&(a=a<t?i.plus(((t={})[e]=1,t)):a)!==i&&(o[e]=(o[e]||0)+u/(a-i)),I.fromObject(o,r));return 0<n.length?(e=I.fromMillis(u,r)).shiftTo.apply(e,n).plus(t):t}var cn={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ln={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},fn=cn.hanidec.replace(/[\[|\]]/g,"").split("");function x(e,t){e=e.numberingSystem;return void 0===t&&(t=""),new RegExp(""+cn[e||"latn"]+t)}var dn="missing Intl.DateTimeFormat.formatToParts support";function C(e,t){return void 0===t&&(t=function(e){return e}),{regex:e,deser:function(e){e=e[0];return t(function(e){var t=parseInt(e,10);if(isNaN(t)){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);if(-1!==e[n].search(cn.hanidec))t+=fn.indexOf(e[n]);else for(var i in ln){var i=ln[i],o=i[0],i=i[1];o<=r&&r<=i&&(t+=r-o)}}return parseInt(t,10)}return t}(e))}}}var hn="[ "+String.fromCharCode(160)+"]",mn=new RegExp(hn,"g");function yn(e){return e.replace(/\./g,"\\.?").replace(mn,hn)}function vn(e){return e.replace(/\./g,"").replace(mn," ").toLowerCase()}function F(n,r){return null===n?null:{regex:RegExp(n.map(yn).join("|")),deser:function(e){var t=e[0];return n.findIndex(function(e){return vn(t)===vn(e)})+r}}}function pn(e,t){return{regex:e,deser:function(e){return et(e[1],e[2])},groups:t}}function gn(e){return{regex:e,deser:function(e){return e[0]}}}function wn(t,n){function r(e){return{regex:RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")),deser:function(e){return e[0]},literal:!0}}var i=x(n),o=x(n,"{2}"),a=x(n,"{3}"),u=x(n,"{4}"),s=x(n,"{6}"),c=x(n,"{1,2}"),l=x(n,"{1,3}"),f=x(n,"{1,6}"),d=x(n,"{1,9}"),h=x(n,"{2,4}"),m=x(n,"{4,6}"),e=function(e){if(t.literal)return r(e);switch(e.val){case"G":return F(n.eras("short",!1),0);case"GG":return F(n.eras("long",!1),0);case"y":return C(f);case"yy":return C(h,Ke);case"yyyy":return C(u);case"yyyyy":return C(m);case"yyyyyy":return C(s);case"M":return C(c);case"MM":return C(o);case"MMM":return F(n.months("short",!0,!1),1);case"MMMM":return F(n.months("long",!0,!1),1);case"L":return C(c);case"LL":return C(o);case"LLL":return F(n.months("short",!1,!1),1);case"LLLL":return F(n.months("long",!1,!1),1);case"d":return C(c);case"dd":return C(o);case"o":return C(l);case"ooo":return C(a);case"HH":return C(o);case"H":return C(c);case"hh":return C(o);case"h":return C(c);case"mm":return C(o);case"m":case"q":return C(c);case"qq":return C(o);case"s":return C(c);case"ss":return C(o);case"S":return C(l);case"SSS":return C(a);case"u":return gn(d);case"uu":return gn(c);case"uuu":return C(i);case"a":return F(n.meridiems(),0);case"kkkk":return C(u);case"kk":return C(h,Ke);case"W":return C(c);case"WW":return C(o);case"E":case"c":return C(i);case"EEE":return F(n.weekdays("short",!1,!1),1);case"EEEE":return F(n.weekdays("long",!1,!1),1);case"ccc":return F(n.weekdays("short",!0,!1),1);case"cccc":return F(n.weekdays("long",!0,!1),1);case"Z":case"ZZ":return pn(new RegExp("([+-]"+c.source+")(?::("+o.source+"))?"),2);case"ZZZ":return pn(new RegExp("([+-]"+c.source+")("+o.source+")?"),2);case"z":return gn(/[a-z_+-/]{1,256}?/i);default:return r(e)}}(t)||{invalidReason:dn};return e.token=t,e}var kn={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};var bn=null;function Tn(e,n){var t;return(t=Array.prototype).concat.apply(t,e.map(function(e){return t=n,(e=e).literal||null==(t=On(O.macroTokenToFormatOpts(e.val),t))||t.includes(void 0)?e:t;var t}))}function Sn(t,e,n){var n=Tn(O.parseFormat(n),t),r=n.map(function(e){return wn(e,t)}),i=r.find(function(e){return e.invalidReason});if(i)return{input:e,tokens:n,invalidReason:i.invalidReason};var o,r=["^"+(i=r).map(function(e){return e.regex}).reduce(function(e,t){return e+"("+t.source+")"},"")+"$",i],i=r[1],r=RegExp(r[0],"i"),i=function(e,t,n){var r=e.match(t);if(r){var i,o,a,u={},s=1;for(i in n)h(n,i)&&(a=(o=n[i]).groups?o.groups+1:1,!o.literal&&o.token&&(u[o.token.val[0]]=o.deser(r.slice(s,s+a))),s+=a);return[r,u]}return[r,{}]}(e,r,i),a=i[0],i=i[1],u=i?(u=null,T((o=i).z)||(u=f.create(o.z)),T(o.Z)||(u=u||new d(o.Z),s=o.Z),T(o.q)||(o.M=3*(o.q-1)+1),T(o.h)||(o.h<12&&1===o.a?o.h+=12:12===o.h&&0===o.a&&(o.h=0)),0===o.G&&o.y&&(o.y=-o.y),T(o.u)||(o.S=We(o.u)),[Object.keys(o).reduce(function(e,t){var n=function(e){switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}}(t);return n&&(e[n]=o[t]),e},{}),u,s]):[null,null,void 0],s=u[0],c=u[1],l=u[2];if(h(i,"a")&&h(i,"H"))throw new Y("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:n,regex:r,rawMatches:a,matches:i,result:s,zone:c,specificOffset:l}}function On(r,e){return r?O.create(e,r).formatDateTimeParts(bn=bn||L.fromMillis(1555555555555)).map(function(e){return t=r,n=(e=e).type,e=e.value,"literal"===n?{literal:!0,val:e}:(e=t[n],(t="object"==typeof(t=kn[n])?t[e]:t)?{literal:!1,val:t}:void 0);var t,n}):null}var Mn=[0,31,59,90,120,151,181,212,243,273,304,334],Nn=[0,31,60,91,121,152,182,213,244,274,305,335];function Z(e,t){return new M("unit out of range","you specified "+t+" (of type "+typeof t+") as a "+e+", which is invalid")}function Dn(e,t,n){t=new Date(Date.UTC(e,t-1,n)),e<100&&0<=e&&t.setUTCFullYear(t.getUTCFullYear()-1900),n=t.getUTCDay();return 0===n?7:n}function En(e,t,n){return n+(Je(e)?Nn:Mn)[t-1]}function Vn(e,t){var e=Je(e)?Nn:Mn,n=e.findIndex(function(e){return e<t});return{month:n+1,day:t-e[n]}}function In(e){var t,n=e.year,r=e.month,i=e.day,o=En(n,r,i),r=Dn(n,r,i),i=Math.floor((o-r+10)/7);return i<1?i=Qe(t=n-1):i>Qe(n)?(t=n+1,i=1):t=n,s({weekYear:t,weekNumber:i,weekday:r},it(e))}function xn(e){var t,n=e.weekYear,r=e.weekNumber,i=e.weekday,o=Dn(n,1,4),a=Ge(n),r=7*r+i-o-3,i=(r<1?r+=Ge(t=n-1):a<r?(t=n+1,r-=Ge(n)):t=n,Vn(t,r));return s({year:t,month:i.month,day:i.day},it(e))}function Cn(e){var t=e.year;return s({year:t,ordinal:En(t,e.month,e.day)},it(e))}function Fn(e){var t=e.year,n=Vn(t,e.ordinal);return s({year:t,month:n.month,day:n.day},it(e))}function Zn(e){var t=Pe(e.year),n=S(e.month,1,12),r=S(e.day,1,$e(e.year,e.month));return t?n?!r&&Z("day",e.day):Z("month",e.month):Z("year",e.year)}function Ln(e){var t=e.hour,n=e.minute,r=e.second,e=e.millisecond,i=S(t,0,23)||24===t&&0===n&&0===r&&0===e,o=S(n,0,59),a=S(r,0,59),u=S(e,0,999);return i?o?a?!u&&Z("millisecond",e):Z("second",r):Z("minute",n):Z("hour",t)}var An="Invalid DateTime";function jn(e){return new M("unsupported zone",'the zone "'+e.name+'" is not supported')}function zn(e){return null===e.weekData&&(e.weekData=In(e.c)),e.weekData}function qn(e,t){e={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new L(s({},e,t,{old:e}))}function _n(e,t,n){var r=e-60*t*1e3,i=n.offset(r);if(t===i)return[r,t];n=n.offset(r-=60*(i-t)*1e3);return i===n?[r,i]:[e-60*Math.min(i,n)*1e3,Math.max(i,n)]}function Un(e,t){e+=60*t*1e3;t=new Date(e);return{year:t.getUTCFullYear(),month:t.getUTCMonth()+1,day:t.getUTCDate(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),second:t.getUTCSeconds(),millisecond:t.getUTCMilliseconds()}}function Pn(e,t,n){return _n(Be(e),t,n)}function Rn(e,t){var n=e.o,r=e.c.year+Math.trunc(t.years),i=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),r=s({},e.c,{year:r,month:i,day:Math.min(e.c.day,$e(r,i))+Math.trunc(t.days)+7*Math.trunc(t.weeks)}),i=I.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),t=_n(Be(r),n,e.zone),r=t[0],n=t[1];return 0!==i&&(n=e.zone.offset(r+=i)),{ts:r,o:n}}function Hn(e,t,n,r,i,o){var a=n.setZone,u=n.zone;return e&&0!==Object.keys(e).length?(e=L.fromObject(e,s({},n,{zone:t||u,specificOffset:o})),a?e:e.setZone(u)):L.invalid(new M("unparsable",'the input "'+i+"\" can't be parsed as "+r))}function Wn(e,t,n){return void 0===n&&(n=!0),e.isValid?O.create(w.create("en-US"),{allowZ:n,forceSimple:!0}).formatDateTimeFromString(e,t):null}function Yn(e,t){var n=9999<e.c.year||e.c.year<0,r="";return n&&0<=e.c.year&&(r+="+"),r+=l(e.c.year,n?6:4),r=t?(r=(r+="-")+l(e.c.month)+"-")+l(e.c.day):(r+=l(e.c.month))+l(e.c.day)}function Jn(e,t,n,r,i,o){var a=l(e.c.hour);return t?(a=(a+=":")+l(e.c.minute),0===e.c.second&&n||(a+=":")):a+=l(e.c.minute),0===e.c.second&&n||(a+=l(e.c.second),0===e.c.millisecond&&r||(a=(a+=".")+l(e.c.millisecond,3))),i&&(e.isOffsetFixed&&0===e.offset&&!o?a+="Z":a=e.o<0?(a=(a+="-")+l(Math.trunc(-e.o/60))+":")+l(Math.trunc(-e.o%60)):(a=(a+="+")+l(Math.trunc(e.o/60))+":")+l(Math.trunc(e.o%60))),o&&(a+="["+e.zone.ianaName+"]"),a}var Gn={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},$n={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Bn={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Qn=["year","month","day","hour","minute","second","millisecond"],Kn=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Xn=["year","ordinal","hour","minute","second","millisecond"];function er(e){var t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(t)return t;throw new J(e)}function tr(e,t){var n=k(t.zone,b.defaultZone),t=w.fromObject(t),r=b.now();if(T(e.year))u=r;else{for(var i=g(Qn);!(o=i()).done;){var o=o.value;T(e[o])&&(e[o]=Gn[o])}var a=Zn(e)||Ln(e);if(a)return L.invalid(a);var a=Pn(e,n.offset(r),n),u=a[0],a=a[1]}return new L({ts:u,zone:n,loc:t,o:a})}function nr(t,n,r){function e(e,t){return e=Ye(e,o||r.calendary?0:2,!0),n.loc.clone(r).relFormatter(r).format(e,t)}function i(e){return r.calendary?n.hasSame(t,e)?0:n.startOf(e).diff(t.startOf(e),e).get(e):n.diff(t,e).get(e)}var o=!!T(r.round)||r.round;if(r.unit)return e(i(r.unit),r.unit);for(var a=g(r.units);!(u=a()).done;){var u=u.value,s=i(u);if(1<=Math.abs(s))return e(s,u)}return e(n<t?-0:0,r.units[r.units.length-1])}function rr(e){var t={},e=0<e.length&&"object"==typeof e[e.length-1]?(t=e[e.length-1],Array.from(e).slice(0,e.length-1)):Array.from(e);return[t,e]}var L=function(){function p(e){var t,n=e.zone||b.defaultZone,r=e.invalid||(Number.isNaN(e.ts)?new M("invalid input"):null)||(n.isValid?null:jn(n)),i=(this.ts=T(e.ts)?b.now():e.ts,null),o=null;r||(o=e.old&&e.old.ts===this.ts&&e.old.zone.equals(n)?(i=(t=[e.old.c,e.old.o])[0],t[1]):(t=n.offset(this.ts),i=Un(this.ts,t),i=(r=Number.isNaN(i.year)?new M("invalid input"):null)?null:i,r?null:t)),this._zone=n,this.loc=e.loc||w.create(),this.invalid=r,this.weekData=null,this.c=i,this.o=o,this.isLuxonDateTime=!0}p.now=function(){return new p({})},p.local=function(){var e=rr(arguments),t=e[0],e=e[1];return tr({year:e[0],month:e[1],day:e[2],hour:e[3],minute:e[4],second:e[5],millisecond:e[6]},t)},p.utc=function(){var e=rr(arguments),t=e[0],e=e[1],n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],u=e[5],e=e[6];return t.zone=d.utcInstance,tr({year:n,month:r,day:i,hour:o,minute:a,second:u,millisecond:e},t)},p.fromJSDate=function(e,t){void 0===t&&(t={});e="[object Date]"===Object.prototype.toString.call(e)?e.valueOf():NaN;if(Number.isNaN(e))return p.invalid("invalid input");var n=k(t.zone,b.defaultZone);return n.isValid?new p({ts:e,zone:n,loc:w.fromObject(t)}):p.invalid(jn(n))},p.fromMillis=function(e,t){if(void 0===t&&(t={}),y(e))return e<-864e13||864e13<e?p.invalid("Timestamp out of range"):new p({ts:e,zone:k(t.zone,b.defaultZone),loc:w.fromObject(t)});throw new u("fromMillis requires a numerical input, but received a "+typeof e+" with value "+e)},p.fromSeconds=function(e,t){if(void 0===t&&(t={}),y(e))return new p({ts:1e3*e,zone:k(t.zone,b.defaultZone),loc:w.fromObject(t)});throw new u("fromSeconds requires a numerical input")},p.fromObject=function(e,t){e=e||{};var n=k((t=void 0===t?{}:t).zone,b.defaultZone);if(!n.isValid)return p.invalid(jn(n));var r=b.now(),i=T(t.specificOffset)?n.offset(r):t.specificOffset,o=nt(e,er),a=!T(o.ordinal),u=!T(o.year),s=!T(o.month)||!T(o.day),u=u||s,c=o.weekYear||o.weekNumber,t=w.fromObject(t);if((u||a)&&c)throw new Y("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(s&&a)throw new Y("Can't mix ordinal dates with month/day");for(var l,s=c||o.weekday&&!u,f=Un(r,i),d=(s?(v=Kn,l=$n,f=In(f)):a?(v=Xn,l=Bn,f=Cn(f)):(v=Qn,l=Gn),!1),h=g(v);!(m=h()).done;){var m=m.value;T(o[m])?o[m]=(d?l:f)[m]:d=!0}var y,c=(s?(r=Pe((c=o).weekYear),v=S(c.weekNumber,1,Qe(c.weekYear)),y=S(c.weekday,1,7),r?v?!y&&Z("weekday",c.weekday):Z("week",c.week):Z("weekYear",c.weekYear)):a?(v=Pe((r=o).year),y=S(r.ordinal,1,Ge(r.year)),v?!y&&Z("ordinal",r.ordinal):Z("year",r.year)):Zn(o))||Ln(o);if(c)return p.invalid(c);var v=Pn(s?xn(o):a?Fn(o):o,i,n),r=new p({ts:v[0],zone:n,o:v[1],loc:t});return o.weekday&&u&&e.weekday!==r.weekday?p.invalid("mismatched weekday","you can't specify both a weekday of "+o.weekday+" and a date of "+r.toISO()):r},p.fromISO=function(e,t){void 0===t&&(t={});var n=kt(e,[Ut,Wt],[Pt,Yt],[Rt,Jt],[Ht,Gt]);return Hn(n[0],n[1],t,"ISO 8601",e)},p.fromRFC2822=function(e,t){void 0===t&&(t={});var n=kt(e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim(),[Zt,Lt]);return Hn(n[0],n[1],t,"RFC 2822",e)},p.fromHTTP=function(e,t){void 0===t&&(t={});e=kt(e,[At,qt],[jt,qt],[zt,_t]);return Hn(e[0],e[1],t,"HTTP",t)},p.fromFormat=function(e,t,n){if(void 0===n&&(n={}),T(e)||T(t))throw new u("fromFormat requires an input string and a format");var r=n,i=r.locale,r=r.numberingSystem,i=w.fromOpts({locale:void 0===i?null:i,numberingSystem:void 0===r?null:r,defaultToEN:!0}),i=[(r=Sn(r=i,e,t)).result,r.zone,r.specificOffset,r.invalidReason],r=i[0],o=i[1],a=i[2],i=i[3];return i?p.invalid(i):Hn(r,o,n,"format "+t,e,a)},p.fromString=function(e,t,n){return p.fromFormat(e,t,n=void 0===n?{}:n)},p.fromSQL=function(e,t){void 0===t&&(t={});var n=kt(e,[Bt,Wt],[Qt,Kt]);return Hn(n[0],n[1],t,"SQL",e)},p.invalid=function(e,t){if(void 0===t&&(t=null),!e)throw new u("need to specify a reason the DateTime is invalid");e=e instanceof M?e:new M(e,t);if(b.throwOnInvalid)throw new R(e);return new p({invalid:e})},p.isDateTime=function(e){return e&&e.isLuxonDateTime||!1},p.parseFormatForOpts=function(e,t){e=On(e,w.fromObject(t=void 0===t?{}:t));return e?e.map(function(e){return e?e.val:null}).join(""):null},p.expandFormat=function(e,t){return void 0===t&&(t={}),Tn(O.parseFormat(e),w.fromObject(t)).map(function(e){return e.val}).join("")};var e=p.prototype;return e.get=function(e){return this[e]},e.resolvedLocaleOptions=function(e){e=O.create(this.loc.clone(e=void 0===e?{}:e),e).resolvedOptions(this);return{locale:e.locale,numberingSystem:e.numberingSystem,outputCalendar:e.calendar}},e.toUTC=function(e,t){return void 0===t&&(t={}),this.setZone(d.instance(e=void 0===e?0:e),t)},e.toLocal=function(){return this.setZone(b.defaultZone)},e.setZone=function(e,t){var n,t=void 0===t?{}:t,r=t.keepLocalTime,r=void 0!==r&&r,t=t.keepCalendarTime,t=void 0!==t&&t;return(e=k(e,b.defaultZone)).equals(this.zone)?this:e.isValid?(n=this.ts,(r||t)&&(r=e.offset(this.ts),n=Pn(this.toObject(),r,e)[0]),qn(this,{ts:n,zone:e})):p.invalid(jn(e))},e.reconfigure=function(e){var e=void 0===e?{}:e,t=e.locale,n=e.numberingSystem,e=e.outputCalendar,t=this.loc.clone({locale:t,numberingSystem:n,outputCalendar:e});return qn(this,{loc:t})},e.setLocale=function(e){return this.reconfigure({locale:e})},e.set=function(e){if(!this.isValid)return this;var t,e=nt(e,er),n=!T(e.weekYear)||!T(e.weekNumber)||!T(e.weekday),r=!T(e.ordinal),i=!T(e.year),o=!T(e.month)||!T(e.day),a=e.weekYear||e.weekNumber;if((i||o||r)&&a)throw new Y("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(o&&r)throw new Y("Can't mix ordinal dates with month/day");n?t=xn(s({},In(this.c),e)):T(e.ordinal)?(t=s({},this.toObject(),e),T(e.day)&&(t.day=Math.min($e(t.year,t.month),t.day))):t=Fn(s({},Cn(this.c),e));i=Pn(t,this.o,this.zone);return qn(this,{ts:i[0],o:i[1]})},e.plus=function(e){return this.isValid?qn(this,Rn(this,I.fromDurationLike(e))):this},e.minus=function(e){return this.isValid?qn(this,Rn(this,I.fromDurationLike(e).negate())):this},e.startOf=function(e){if(!this.isValid)return this;var t={},e=I.normalizeUnit(e);switch(e){case"years":t.month=1;case"quarters":case"months":t.day=1;case"weeks":case"days":t.hour=0;case"hours":t.minute=0;case"minutes":t.second=0;case"seconds":t.millisecond=0}return"weeks"===e&&(t.weekday=1),"quarters"===e&&(e=Math.ceil(this.month/3),t.month=3*(e-1)+1),this.set(t)},e.endOf=function(e){var t;return this.isValid?this.plus(((t={})[e]=1,t)).startOf(e).minus(1):this},e.toFormat=function(e,t){return void 0===t&&(t={}),this.isValid?O.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):An},e.toLocaleString=function(e,t){return void 0===e&&(e=G),void 0===t&&(t={}),this.isValid?O.create(this.loc.clone(t),e).formatDateTime(this):An},e.toLocaleParts=function(e){return void 0===e&&(e={}),this.isValid?O.create(this.loc.clone(e),e).formatDateTimeParts(this):[]},e.toISO=function(e){var e=void 0===e?{}:e,t=e.format,n=e.suppressSeconds,n=void 0!==n&&n,r=e.suppressMilliseconds,r=void 0!==r&&r,i=e.includeOffset,i=void 0===i||i,e=e.extendedZone,e=void 0!==e&&e;if(!this.isValid)return null;var t="extended"===(void 0===t?"extended":t),o=Yn(this,t);return(o+="T")+Jn(this,t,n,r,i,e)},e.toISODate=function(e){e=(void 0===e?{}:e).format;return this.isValid?Yn(this,"extended"===(void 0===e?"extended":e)):null},e.toISOWeekDate=function(){return Wn(this,"kkkk-'W'WW-c")},e.toISOTime=function(e){var e=void 0===e?{}:e,t=e.suppressMilliseconds,n=e.suppressSeconds,r=e.includeOffset,i=e.includePrefix,o=e.extendedZone,e=e.format;return this.isValid?(void 0!==i&&i?"T":"")+Jn(this,"extended"===(void 0===e?"extended":e),void 0!==n&&n,void 0!==t&&t,void 0===r||r,void 0!==o&&o):null},e.toRFC2822=function(){return Wn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)},e.toHTTP=function(){return Wn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")},e.toSQLDate=function(){return this.isValid?Yn(this,!0):null},e.toSQLTime=function(e){var e=void 0===e?{}:e,t=e.includeOffset,t=void 0===t||t,n=e.includeZone,n=void 0!==n&&n,e=e.includeOffsetSpace,r="HH:mm:ss.SSS";return(n||t)&&((void 0===e||e)&&(r+=" "),n?r+="z":t&&(r+="ZZ")),Wn(this,r,!0)},e.toSQL=function(e){return void 0===e&&(e={}),this.isValid?this.toSQLDate()+" "+this.toSQLTime(e):null},e.toString=function(){return this.isValid?this.toISO():An},e.valueOf=function(){return this.toMillis()},e.toMillis=function(){return this.isValid?this.ts:NaN},e.toSeconds=function(){return this.isValid?this.ts/1e3:NaN},e.toUnixInteger=function(){return this.isValid?Math.floor(this.ts/1e3):NaN},e.toJSON=function(){return this.toISO()},e.toBSON=function(){return this.toJSDate()},e.toObject=function(e){if(void 0===e&&(e={}),!this.isValid)return{};var t=s({},this.c);return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t},e.toJSDate=function(){return new Date(this.isValid?this.ts:NaN)},e.diff=function(e,t,n){if(void 0===t&&(t="milliseconds"),void 0===n&&(n={}),!this.isValid||!e.isValid)return I.invalid("created by diffing an invalid DateTime");var n=s({locale:this.locale,numberingSystem:this.numberingSystem},n),t=(t=t,(Array.isArray(t)?t:[t]).map(I.normalizeUnit)),r=e.valueOf()>this.valueOf(),e=sn(r?this:e,r?e:this,t,n);return r?e.negate():e},e.diffNow=function(e,t){return void 0===e&&(e="milliseconds"),void 0===t&&(t={}),this.diff(p.now(),e,t)},e.until=function(e){return this.isValid?on.fromDateTimes(this,e):this},e.hasSame=function(e,t){if(!this.isValid)return!1;var n=e.valueOf(),e=this.setZone(e.zone,{keepLocalTime:!0});return e.startOf(t)<=n&&n<=e.endOf(t)},e.equals=function(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)},e.toRelative=function(e){if(!this.isValid)return null;var t=(e=void 0===e?{}:e).base||p.fromObject({},{zone:this.zone}),n=e.padding?this<t?-e.padding:e.padding:0,r=["years","months","days","hours","minutes","seconds"],i=e.unit;return Array.isArray(e.unit)&&(r=e.unit,i=void 0),nr(t,this.plus(n),s({},e,{numeric:"always",units:r,unit:i}))},e.toRelativeCalendar=function(e){return void 0===e&&(e={}),this.isValid?nr(e.base||p.fromObject({},{zone:this.zone}),this,s({},e,{numeric:"auto",units:["years","months","days"],calendary:!0})):null},p.min=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t.every(p.isDateTime))return He(t,function(e){return e.valueOf()},Math.min);throw new u("min requires all arguments be DateTimes")},p.max=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t.every(p.isDateTime))return He(t,function(e){return e.valueOf()},Math.max);throw new u("max requires all arguments be DateTimes")},p.fromFormatExplain=function(e,t,n){var n=n=void 0===n?{}:n,r=n.locale,n=n.numberingSystem;return Sn(w.fromOpts({locale:void 0===r?null:r,numberingSystem:void 0===n?null:n,defaultToEN:!0}),e,t)},p.fromStringExplain=function(e,t,n){return p.fromFormatExplain(e,t,n=void 0===n?{}:n)},o(p,[{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}},{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"outputCalendar",get:function(){return this.isValid?this.loc.outputCalendar:null}},{key:"zone",get:function(){return this._zone}},{key:"zoneName",get:function(){return this.isValid?this.zone.name:null}},{key:"year",get:function(){return this.isValid?this.c.year:NaN}},{key:"quarter",get:function(){return this.isValid?Math.ceil(this.c.month/3):NaN}},{key:"month",get:function(){return this.isValid?this.c.month:NaN}},{key:"day",get:function(){return this.isValid?this.c.day:NaN}},{key:"hour",get:function(){return this.isValid?this.c.hour:NaN}},{key:"minute",get:function(){return this.isValid?this.c.minute:NaN}},{key:"second",get:function(){return this.isValid?this.c.second:NaN}},{key:"millisecond",get:function(){return this.isValid?this.c.millisecond:NaN}},{key:"weekYear",get:function(){return this.isValid?zn(this).weekYear:NaN}},{key:"weekNumber",get:function(){return this.isValid?zn(this).weekNumber:NaN}},{key:"weekday",get:function(){return this.isValid?zn(this).weekday:NaN}},{key:"ordinal",get:function(){return this.isValid?Cn(this.c).ordinal:NaN}},{key:"monthShort",get:function(){return this.isValid?an.months("short",{locObj:this.loc})[this.month-1]:null}},{key:"monthLong",get:function(){return this.isValid?an.months("long",{locObj:this.loc})[this.month-1]:null}},{key:"weekdayShort",get:function(){return this.isValid?an.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}},{key:"weekdayLong",get:function(){return this.isValid?an.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}},{key:"offset",get:function(){return this.isValid?+this.o:NaN}},{key:"offsetNameShort",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}},{key:"offsetNameLong",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}},{key:"isOffsetFixed",get:function(){return this.isValid?this.zone.isUniversal:null}},{key:"isInDST",get:function(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}},{key:"isInLeapYear",get:function(){return Je(this.year)}},{key:"daysInMonth",get:function(){return $e(this.year,this.month)}},{key:"daysInYear",get:function(){return this.isValid?Ge(this.year):NaN}},{key:"weeksInWeekYear",get:function(){return this.isValid?Qe(this.weekYear):NaN}}],[{key:"DATE_SHORT",get:function(){return G}},{key:"DATE_MED",get:function(){return $}},{key:"DATE_MED_WITH_WEEKDAY",get:function(){return B}},{key:"DATE_FULL",get:function(){return Q}},{key:"DATE_HUGE",get:function(){return K}},{key:"TIME_SIMPLE",get:function(){return X}},{key:"TIME_WITH_SECONDS",get:function(){return ee}},{key:"TIME_WITH_SHORT_OFFSET",get:function(){return te}},{key:"TIME_WITH_LONG_OFFSET",get:function(){return ne}},{key:"TIME_24_SIMPLE",get:function(){return re}},{key:"TIME_24_WITH_SECONDS",get:function(){return ie}},{key:"TIME_24_WITH_SHORT_OFFSET",get:function(){return oe}},{key:"TIME_24_WITH_LONG_OFFSET",get:function(){return ae}},{key:"DATETIME_SHORT",get:function(){return ue}},{key:"DATETIME_SHORT_WITH_SECONDS",get:function(){return se}},{key:"DATETIME_MED",get:function(){return ce}},{key:"DATETIME_MED_WITH_SECONDS",get:function(){return le}},{key:"DATETIME_MED_WITH_WEEKDAY",get:function(){return fe}},{key:"DATETIME_FULL",get:function(){return de}},{key:"DATETIME_FULL_WITH_SECONDS",get:function(){return he}},{key:"DATETIME_HUGE",get:function(){return me}},{key:"DATETIME_HUGE_WITH_SECONDS",get:function(){return ye}}]),p}();function ir(e){if(L.isDateTime(e))return e;if(e&&e.valueOf&&y(e.valueOf()))return L.fromJSDate(e);if(e&&"object"==typeof e)return L.fromObject(e);throw new u("Unknown datetime argument: "+e+", of type "+typeof e)}return e.DateTime=L,e.Duration=I,e.FixedOffsetZone=d,e.IANAZone=f,e.Info=an,e.Interval=on,e.InvalidZone=Ze,e.Settings=b,e.SystemZone=pe,e.VERSION="3.1.1",e.Zone=c,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
// Ion.RangeSlider, 2.3.1, © Denis Ineshin, 2010 - 2019, IonDen.com, Build date: 2019-12-19 16:56:44
!(function (i) {
	("undefined" != typeof jQuery && jQuery) ||
	"function" != typeof define ||
	!define.amd
		? ("undefined" != typeof jQuery && jQuery) || "object" != typeof exports
			? i(jQuery, document, window, navigator)
			: i(require("jquery"), document, window, navigator)
		: define(["jquery"], function (t) {
				return i(t, document, window, navigator);
		  });
})(function (a, c, l, t, _) {
	"use strict";
	var i,
		s,
		o = 0,
		e =
			((i = t.userAgent),
			(s = /msie\s\d+/i),
			0 < i.search(s) &&
				s.exec(i).toString().split(" ")[1] < 9 &&
				(a("html").addClass("lt-ie9"), !0));
	Function.prototype.bind ||
		(Function.prototype.bind = function (o) {
			var e = this,
				h = [].slice;
			if ("function" != typeof e) throw new TypeError();
			var r = h.call(arguments, 1),
				n = function () {
					if (this instanceof n) {
						var t = function () {};
						t.prototype = e.prototype;
						var i = new t(),
							s = e.apply(i, r.concat(h.call(arguments)));
						return Object(s) === s ? s : i;
					}
					return e.apply(o, r.concat(h.call(arguments)));
				};
			return n;
		}),
		Array.prototype.indexOf ||
			(Array.prototype.indexOf = function (t, i) {
				var s;
				if (null == this)
					throw new TypeError('"this" is null or not defined');
				var o = Object(this),
					e = o.length >>> 0;
				if (0 == e) return -1;
				var h = +i || 0;
				if ((Math.abs(h) === 1 / 0 && (h = 0), e <= h)) return -1;
				for (s = Math.max(0 <= h ? h : e - Math.abs(h), 0); s < e; ) {
					if (s in o && o[s] === t) return s;
					s++;
				}
				return -1;
			});
	function h(t, i, s) {
		(this.VERSION = "2.3.1"),
			(this.input = t),
			(this.plugin_count = s),
			(this.current_plugin = 0),
			(this.calc_count = 0),
			(this.update_tm = 0),
			(this.old_from = 0),
			(this.old_to = 0),
			(this.old_min_interval = null),
			(this.raf_id = null),
			(this.dragging = !1),
			(this.force_redraw = !1),
			(this.no_diapason = !1),
			(this.has_tab_index = !0),
			(this.is_key = !1),
			(this.is_update = !1),
			(this.is_start = !0),
			(this.is_finish = !1),
			(this.is_active = !1),
			(this.is_resize = !1),
			(this.is_click = !1),
			(i = i || {}),
			(this.$cache = {
				win: a(l),
				body: a(c.body),
				input: a(t),
				cont: null,
				rs: null,
				min: null,
				max: null,
				from: null,
				to: null,
				single: null,
				bar: null,
				line: null,
				s_single: null,
				s_from: null,
				s_to: null,
				shad_single: null,
				shad_from: null,
				shad_to: null,
				edge: null,
				grid: null,
				grid_labels: [],
			}),
			(this.coords = {
				x_gap: 0,
				x_pointer: 0,
				w_rs: 0,
				w_rs_old: 0,
				w_handle: 0,
				p_gap: 0,
				p_gap_left: 0,
				p_gap_right: 0,
				p_step: 0,
				p_pointer: 0,
				p_handle: 0,
				p_single_fake: 0,
				p_single_real: 0,
				p_from_fake: 0,
				p_from_real: 0,
				p_to_fake: 0,
				p_to_real: 0,
				p_bar_x: 0,
				p_bar_w: 0,
				grid_gap: 0,
				big_num: 0,
				big: [],
				big_w: [],
				big_p: [],
				big_x: [],
			}),
			(this.labels = {
				w_min: 0,
				w_max: 0,
				w_from: 0,
				w_to: 0,
				w_single: 0,
				p_min: 0,
				p_max: 0,
				p_from_fake: 0,
				p_from_left: 0,
				p_to_fake: 0,
				p_to_left: 0,
				p_single_fake: 0,
				p_single_left: 0,
			});
		var o,
			e,
			h,
			r = this.$cache.input,
			n = r.prop("value");
		for (h in ((o = {
			skin: "flat",
			type: "single",
			min: 10,
			max: 100,
			from: null,
			to: null,
			step: 1,
			min_interval: 0,
			max_interval: 0,
			drag_interval: !1,
			values: [],
			p_values: [],
			from_fixed: !1,
			from_min: null,
			from_max: null,
			from_shadow: !1,
			to_fixed: !1,
			to_min: null,
			to_max: null,
			to_shadow: !1,
			prettify_enabled: !0,
			prettify_separator: " ",
			prettify: null,
			force_edges: !1,
			keyboard: !0,
			grid: !1,
			grid_margin: !0,
			grid_num: 4,
			grid_snap: !1,
			hide_min_max: !1,
			hide_from_to: !1,
			prefix: "",
			postfix: "",
			max_postfix: "",
			decorate_both: !0,
			values_separator: " — ",
			input_values_separator: ";",
			disable: !1,
			block: !1,
			extra_classes: "",
			scope: null,
			onStart: null,
			onChange: null,
			onFinish: null,
			onUpdate: null,
		}),
		"INPUT" !== r[0].nodeName &&
			console &&
			console.warn &&
			console.warn("Base element should be <input>!", r[0]),
		((e = {
			skin: r.data("skin"),
			type: r.data("type"),
			min: r.data("min"),
			max: r.data("max"),
			from: r.data("from"),
			to: r.data("to"),
			step: r.data("step"),
			min_interval: r.data("minInterval"),
			max_interval: r.data("maxInterval"),
			drag_interval: r.data("dragInterval"),
			values: r.data("values"),
			from_fixed: r.data("fromFixed"),
			from_min: r.data("fromMin"),
			from_max: r.data("fromMax"),
			from_shadow: r.data("fromShadow"),
			to_fixed: r.data("toFixed"),
			to_min: r.data("toMin"),
			to_max: r.data("toMax"),
			to_shadow: r.data("toShadow"),
			prettify_enabled: r.data("prettifyEnabled"),
			prettify_separator: r.data("prettifySeparator"),
			force_edges: r.data("forceEdges"),
			keyboard: r.data("keyboard"),
			grid: r.data("grid"),
			grid_margin: r.data("gridMargin"),
			grid_num: r.data("gridNum"),
			grid_snap: r.data("gridSnap"),
			hide_min_max: r.data("hideMinMax"),
			hide_from_to: r.data("hideFromTo"),
			prefix: r.data("prefix"),
			postfix: r.data("postfix"),
			max_postfix: r.data("maxPostfix"),
			decorate_both: r.data("decorateBoth"),
			values_separator: r.data("valuesSeparator"),
			input_values_separator: r.data("inputValuesSeparator"),
			disable: r.data("disable"),
			block: r.data("block"),
			extra_classes: r.data("extraClasses"),
		}).values = e.values && e.values.split(",")),
		e))
			e.hasOwnProperty(h) && ((e[h] !== _ && "" !== e[h]) || delete e[h]);
		n !== _ &&
			"" !== n &&
			((n = n.split(
				e.input_values_separator || i.input_values_separator || ";"
			))[0] &&
				n[0] == +n[0] &&
				(n[0] = +n[0]),
			n[1] && n[1] == +n[1] && (n[1] = +n[1]),
			i && i.values && i.values.length
				? ((o.from = n[0] && i.values.indexOf(n[0])),
				  (o.to = n[1] && i.values.indexOf(n[1])))
				: ((o.from = n[0] && +n[0]), (o.to = n[1] && +n[1]))),
			a.extend(o, i),
			a.extend(o, e),
			(this.options = o),
			(this.update_check = {}),
			this.validate(),
			(this.result = {
				input: this.$cache.input,
				slider: null,
				min: this.options.min,
				max: this.options.max,
				from: this.options.from,
				from_percent: 0,
				from_value: null,
				to: this.options.to,
				to_percent: 0,
				to_value: null,
			}),
			this.init();
	}
	(h.prototype = {
		init: function (t) {
			(this.no_diapason = !1),
				(this.coords.p_step = this.convertToPercent(
					this.options.step,
					!0
				)),
				(this.target = "base"),
				this.toggleInput(),
				this.append(),
				this.setMinMax(),
				t
					? ((this.force_redraw = !0),
					  this.calc(!0),
					  this.callOnUpdate())
					: ((this.force_redraw = !0),
					  this.calc(!0),
					  this.callOnStart()),
				this.updateScene();
		},
		append: function () {
			var t =
				'<span class="irs irs--' +
				this.options.skin +
				" js-irs-" +
				this.plugin_count +
				" " +
				this.options.extra_classes +
				'"></span>';
			this.$cache.input.before(t),
				this.$cache.input.prop("readonly", !0),
				(this.$cache.cont = this.$cache.input.prev()),
				(this.result.slider = this.$cache.cont),
				this.$cache.cont.html(
					'<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'
				),
				(this.$cache.rs = this.$cache.cont.find(".irs")),
				(this.$cache.min = this.$cache.cont.find(".irs-min")),
				(this.$cache.max = this.$cache.cont.find(".irs-max")),
				(this.$cache.from = this.$cache.cont.find(".irs-from")),
				(this.$cache.to = this.$cache.cont.find(".irs-to")),
				(this.$cache.single = this.$cache.cont.find(".irs-single")),
				(this.$cache.line = this.$cache.cont.find(".irs-line")),
				(this.$cache.grid = this.$cache.cont.find(".irs-grid")),
				"single" === this.options.type
					? (this.$cache.cont.append(
							'<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'
					  ),
					  (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
					  (this.$cache.edge =
							this.$cache.cont.find(".irs-bar-edge")),
					  (this.$cache.s_single = this.$cache.cont.find(".single")),
					  (this.$cache.from[0].style.visibility = "hidden"),
					  (this.$cache.to[0].style.visibility = "hidden"),
					  (this.$cache.shad_single =
							this.$cache.cont.find(".shadow-single")))
					: (this.$cache.cont.append(
							'<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'
					  ),
					  (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
					  (this.$cache.s_from = this.$cache.cont.find(".from")),
					  (this.$cache.s_to = this.$cache.cont.find(".to")),
					  (this.$cache.shad_from =
							this.$cache.cont.find(".shadow-from")),
					  (this.$cache.shad_to =
							this.$cache.cont.find(".shadow-to")),
					  this.setTopHandler()),
				this.options.hide_from_to &&
					((this.$cache.from[0].style.display = "none"),
					(this.$cache.to[0].style.display = "none"),
					(this.$cache.single[0].style.display = "none")),
				this.appendGrid(),
				this.options.disable
					? (this.appendDisableMask(),
					  (this.$cache.input[0].disabled = !0))
					: ((this.$cache.input[0].disabled = !1),
					  this.removeDisableMask(),
					  this.bindEvents()),
				this.options.disable ||
					(this.options.block
						? this.appendDisableMask()
						: this.removeDisableMask()),
				this.options.drag_interval &&
					(this.$cache.bar[0].style.cursor = "ew-resize");
		},
		setTopHandler: function () {
			var t = this.options.min,
				i = this.options.max,
				s = this.options.from,
				o = this.options.to;
			t < s && o === i
				? this.$cache.s_from.addClass("type_last")
				: o < i && this.$cache.s_to.addClass("type_last");
		},
		changeLevel: function (t) {
			switch (t) {
				case "single":
					(this.coords.p_gap = this.toFixed(
						this.coords.p_pointer - this.coords.p_single_fake
					)),
						this.$cache.s_single.addClass("state_hover");
					break;
				case "from":
					(this.coords.p_gap = this.toFixed(
						this.coords.p_pointer - this.coords.p_from_fake
					)),
						this.$cache.s_from.addClass("state_hover"),
						this.$cache.s_from.addClass("type_last"),
						this.$cache.s_to.removeClass("type_last");
					break;
				case "to":
					(this.coords.p_gap = this.toFixed(
						this.coords.p_pointer - this.coords.p_to_fake
					)),
						this.$cache.s_to.addClass("state_hover"),
						this.$cache.s_to.addClass("type_last"),
						this.$cache.s_from.removeClass("type_last");
					break;
				case "both":
					(this.coords.p_gap_left = this.toFixed(
						this.coords.p_pointer - this.coords.p_from_fake
					)),
						(this.coords.p_gap_right = this.toFixed(
							this.coords.p_to_fake - this.coords.p_pointer
						)),
						this.$cache.s_to.removeClass("type_last"),
						this.$cache.s_from.removeClass("type_last");
			}
		},
		appendDisableMask: function () {
			this.$cache.cont.append('<span class="irs-disable-mask"></span>'),
				this.$cache.cont.addClass("irs-disabled");
		},
		removeDisableMask: function () {
			this.$cache.cont.remove(".irs-disable-mask"),
				this.$cache.cont.removeClass("irs-disabled");
		},
		remove: function () {
			this.$cache.cont.remove(),
				(this.$cache.cont = null),
				this.$cache.line.off("keydown.irs_" + this.plugin_count),
				this.$cache.body.off("touchmove.irs_" + this.plugin_count),
				this.$cache.body.off("mousemove.irs_" + this.plugin_count),
				this.$cache.win.off("touchend.irs_" + this.plugin_count),
				this.$cache.win.off("mouseup.irs_" + this.plugin_count),
				e &&
					(this.$cache.body.off("mouseup.irs_" + this.plugin_count),
					this.$cache.body.off(
						"mouseleave.irs_" + this.plugin_count
					)),
				(this.$cache.grid_labels = []),
				(this.coords.big = []),
				(this.coords.big_w = []),
				(this.coords.big_p = []),
				(this.coords.big_x = []),
				cancelAnimationFrame(this.raf_id);
		},
		bindEvents: function () {
			this.no_diapason ||
				(this.$cache.body.on(
					"touchmove.irs_" + this.plugin_count,
					this.pointerMove.bind(this)
				),
				this.$cache.body.on(
					"mousemove.irs_" + this.plugin_count,
					this.pointerMove.bind(this)
				),
				this.$cache.win.on(
					"touchend.irs_" + this.plugin_count,
					this.pointerUp.bind(this)
				),
				this.$cache.win.on(
					"mouseup.irs_" + this.plugin_count,
					this.pointerUp.bind(this)
				),
				this.$cache.line.on(
					"touchstart.irs_" + this.plugin_count,
					this.pointerClick.bind(this, "click")
				),
				this.$cache.line.on(
					"mousedown.irs_" + this.plugin_count,
					this.pointerClick.bind(this, "click")
				),
				this.$cache.line.on(
					"focus.irs_" + this.plugin_count,
					this.pointerFocus.bind(this)
				),
				this.options.drag_interval && "double" === this.options.type
					? (this.$cache.bar.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "both")
					  ),
					  this.$cache.bar.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "both")
					  ))
					: (this.$cache.bar.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerClick.bind(this, "click")
					  ),
					  this.$cache.bar.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerClick.bind(this, "click")
					  )),
				"single" === this.options.type
					? (this.$cache.single.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "single")
					  ),
					  this.$cache.s_single.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "single")
					  ),
					  this.$cache.shad_single.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerClick.bind(this, "click")
					  ),
					  this.$cache.single.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "single")
					  ),
					  this.$cache.s_single.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "single")
					  ),
					  this.$cache.edge.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerClick.bind(this, "click")
					  ),
					  this.$cache.shad_single.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerClick.bind(this, "click")
					  ))
					: (this.$cache.single.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerDown.bind(this, null)
					  ),
					  this.$cache.single.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerDown.bind(this, null)
					  ),
					  this.$cache.from.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "from")
					  ),
					  this.$cache.s_from.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "from")
					  ),
					  this.$cache.to.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "to")
					  ),
					  this.$cache.s_to.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "to")
					  ),
					  this.$cache.shad_from.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerClick.bind(this, "click")
					  ),
					  this.$cache.shad_to.on(
							"touchstart.irs_" + this.plugin_count,
							this.pointerClick.bind(this, "click")
					  ),
					  this.$cache.from.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "from")
					  ),
					  this.$cache.s_from.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "from")
					  ),
					  this.$cache.to.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "to")
					  ),
					  this.$cache.s_to.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerDown.bind(this, "to")
					  ),
					  this.$cache.shad_from.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerClick.bind(this, "click")
					  ),
					  this.$cache.shad_to.on(
							"mousedown.irs_" + this.plugin_count,
							this.pointerClick.bind(this, "click")
					  )),
				this.options.keyboard &&
					this.$cache.line.on(
						"keydown.irs_" + this.plugin_count,
						this.key.bind(this, "keyboard")
					),
				e &&
					(this.$cache.body.on(
						"mouseup.irs_" + this.plugin_count,
						this.pointerUp.bind(this)
					),
					this.$cache.body.on(
						"mouseleave.irs_" + this.plugin_count,
						this.pointerUp.bind(this)
					)));
		},
		pointerFocus: function (t) {
			var i, s;
			this.target ||
				((i = (s =
					"single" === this.options.type
						? this.$cache.single
						: this.$cache.from).offset().left),
				(i += s.width() / 2 - 1),
				this.pointerClick("single", {
					preventDefault: function () {},
					pageX: i,
				}));
		},
		pointerMove: function (t) {
			if (this.dragging) {
				var i =
					t.pageX ||
					(t.originalEvent.touches &&
						t.originalEvent.touches[0].pageX);
				(this.coords.x_pointer = i - this.coords.x_gap), this.calc();
			}
		},
		pointerUp: function (t) {
			this.current_plugin === this.plugin_count &&
				this.is_active &&
				((this.is_active = !1),
				this.$cache.cont
					.find(".state_hover")
					.removeClass("state_hover"),
				(this.force_redraw = !0),
				e && a("*").prop("unselectable", !1),
				this.updateScene(),
				this.restoreOriginalMinInterval(),
				(a.contains(this.$cache.cont[0], t.target) || this.dragging) &&
					this.callOnFinish(),
				(this.dragging = !1));
		},
		pointerDown: function (t, i) {
			i.preventDefault();
			var s =
				i.pageX ||
				(i.originalEvent.touches && i.originalEvent.touches[0].pageX);
			2 !== i.button &&
				("both" === t && this.setTempMinInterval(),
				(t = t || this.target || "from"),
				(this.current_plugin = this.plugin_count),
				(this.target = t),
				(this.is_active = !0),
				(this.dragging = !0),
				(this.coords.x_gap = this.$cache.rs.offset().left),
				(this.coords.x_pointer = s - this.coords.x_gap),
				this.calcPointerPercent(),
				this.changeLevel(t),
				e && a("*").prop("unselectable", !0),
				this.$cache.line.trigger("focus"),
				this.updateScene());
		},
		pointerClick: function (t, i) {
			i.preventDefault();
			var s =
				i.pageX ||
				(i.originalEvent.touches && i.originalEvent.touches[0].pageX);
			2 !== i.button &&
				((this.current_plugin = this.plugin_count),
				(this.target = t),
				(this.is_click = !0),
				(this.coords.x_gap = this.$cache.rs.offset().left),
				(this.coords.x_pointer = +(s - this.coords.x_gap).toFixed()),
				(this.force_redraw = !0),
				this.calc(),
				this.$cache.line.trigger("focus"));
		},
		key: function (t, i) {
			if (
				!(
					this.current_plugin !== this.plugin_count ||
					i.altKey ||
					i.ctrlKey ||
					i.shiftKey ||
					i.metaKey
				)
			) {
				switch (i.which) {
					case 83:
					case 65:
					case 40:
					case 37:
						i.preventDefault(), this.moveByKey(!1);
						break;
					case 87:
					case 68:
					case 38:
					case 39:
						i.preventDefault(), this.moveByKey(!0);
				}
				return !0;
			}
		},
		moveByKey: function (t) {
			var i = this.coords.p_pointer,
				s = (this.options.max - this.options.min) / 100;
			(s = this.options.step / s),
				t ? (i += s) : (i -= s),
				(this.coords.x_pointer = this.toFixed(
					(this.coords.w_rs / 100) * i
				)),
				(this.is_key = !0),
				this.calc();
		},
		setMinMax: function () {
			if (this.options) {
				if (this.options.hide_min_max)
					return (
						(this.$cache.min[0].style.display = "none"),
						void (this.$cache.max[0].style.display = "none")
					);
				if (this.options.values.length)
					this.$cache.min.html(
						this.decorate(this.options.p_values[this.options.min])
					),
						this.$cache.max.html(
							this.decorate(
								this.options.p_values[this.options.max]
							)
						);
				else {
					var t = this._prettify(this.options.min),
						i = this._prettify(this.options.max);
					(this.result.min_pretty = t),
						(this.result.max_pretty = i),
						this.$cache.min.html(
							this.decorate(t, this.options.min)
						),
						this.$cache.max.html(
							this.decorate(i, this.options.max)
						);
				}
				(this.labels.w_min = this.$cache.min.outerWidth(!1)),
					(this.labels.w_max = this.$cache.max.outerWidth(!1));
			}
		},
		setTempMinInterval: function () {
			var t = this.result.to - this.result.from;
			null === this.old_min_interval &&
				(this.old_min_interval = this.options.min_interval),
				(this.options.min_interval = t);
		},
		restoreOriginalMinInterval: function () {
			null !== this.old_min_interval &&
				((this.options.min_interval = this.old_min_interval),
				(this.old_min_interval = null));
		},
		calc: function (t) {
			if (
				this.options &&
				(this.calc_count++,
				(10 !== this.calc_count && !t) ||
					((this.calc_count = 0),
					(this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
					this.calcHandlePercent()),
				this.coords.w_rs)
			) {
				this.calcPointerPercent();
				var i = this.getHandleX();
				switch (
					("both" === this.target &&
						((this.coords.p_gap = 0), (i = this.getHandleX())),
					"click" === this.target &&
						((this.coords.p_gap = this.coords.p_handle / 2),
						(i = this.getHandleX()),
						this.options.drag_interval
							? (this.target = "both_one")
							: (this.target = this.chooseHandle(i))),
					this.target)
				) {
					case "base":
						var s = (this.options.max - this.options.min) / 100,
							o = (this.result.from - this.options.min) / s,
							e = (this.result.to - this.options.min) / s;
						(this.coords.p_single_real = this.toFixed(o)),
							(this.coords.p_from_real = this.toFixed(o)),
							(this.coords.p_to_real = this.toFixed(e)),
							(this.coords.p_single_real = this.checkDiapason(
								this.coords.p_single_real,
								this.options.from_min,
								this.options.from_max
							)),
							(this.coords.p_from_real = this.checkDiapason(
								this.coords.p_from_real,
								this.options.from_min,
								this.options.from_max
							)),
							(this.coords.p_to_real = this.checkDiapason(
								this.coords.p_to_real,
								this.options.to_min,
								this.options.to_max
							)),
							(this.coords.p_single_fake =
								this.convertToFakePercent(
									this.coords.p_single_real
								)),
							(this.coords.p_from_fake =
								this.convertToFakePercent(
									this.coords.p_from_real
								)),
							(this.coords.p_to_fake = this.convertToFakePercent(
								this.coords.p_to_real
							)),
							(this.target = null);
						break;
					case "single":
						if (this.options.from_fixed) break;
						(this.coords.p_single_real =
							this.convertToRealPercent(i)),
							(this.coords.p_single_real = this.calcWithStep(
								this.coords.p_single_real
							)),
							(this.coords.p_single_real = this.checkDiapason(
								this.coords.p_single_real,
								this.options.from_min,
								this.options.from_max
							)),
							(this.coords.p_single_fake =
								this.convertToFakePercent(
									this.coords.p_single_real
								));
						break;
					case "from":
						if (this.options.from_fixed) break;
						(this.coords.p_from_real =
							this.convertToRealPercent(i)),
							(this.coords.p_from_real = this.calcWithStep(
								this.coords.p_from_real
							)),
							this.coords.p_from_real > this.coords.p_to_real &&
								(this.coords.p_from_real =
									this.coords.p_to_real),
							(this.coords.p_from_real = this.checkDiapason(
								this.coords.p_from_real,
								this.options.from_min,
								this.options.from_max
							)),
							(this.coords.p_from_real = this.checkMinInterval(
								this.coords.p_from_real,
								this.coords.p_to_real,
								"from"
							)),
							(this.coords.p_from_real = this.checkMaxInterval(
								this.coords.p_from_real,
								this.coords.p_to_real,
								"from"
							)),
							(this.coords.p_from_fake =
								this.convertToFakePercent(
									this.coords.p_from_real
								));
						break;
					case "to":
						if (this.options.to_fixed) break;
						(this.coords.p_to_real = this.convertToRealPercent(i)),
							(this.coords.p_to_real = this.calcWithStep(
								this.coords.p_to_real
							)),
							this.coords.p_to_real < this.coords.p_from_real &&
								(this.coords.p_to_real =
									this.coords.p_from_real),
							(this.coords.p_to_real = this.checkDiapason(
								this.coords.p_to_real,
								this.options.to_min,
								this.options.to_max
							)),
							(this.coords.p_to_real = this.checkMinInterval(
								this.coords.p_to_real,
								this.coords.p_from_real,
								"to"
							)),
							(this.coords.p_to_real = this.checkMaxInterval(
								this.coords.p_to_real,
								this.coords.p_from_real,
								"to"
							)),
							(this.coords.p_to_fake = this.convertToFakePercent(
								this.coords.p_to_real
							));
						break;
					case "both":
						if (this.options.from_fixed || this.options.to_fixed)
							break;
						(i = this.toFixed(i + 0.001 * this.coords.p_handle)),
							(this.coords.p_from_real =
								this.convertToRealPercent(i) -
								this.coords.p_gap_left),
							(this.coords.p_from_real = this.calcWithStep(
								this.coords.p_from_real
							)),
							(this.coords.p_from_real = this.checkDiapason(
								this.coords.p_from_real,
								this.options.from_min,
								this.options.from_max
							)),
							(this.coords.p_from_real = this.checkMinInterval(
								this.coords.p_from_real,
								this.coords.p_to_real,
								"from"
							)),
							(this.coords.p_from_fake =
								this.convertToFakePercent(
									this.coords.p_from_real
								)),
							(this.coords.p_to_real =
								this.convertToRealPercent(i) +
								this.coords.p_gap_right),
							(this.coords.p_to_real = this.calcWithStep(
								this.coords.p_to_real
							)),
							(this.coords.p_to_real = this.checkDiapason(
								this.coords.p_to_real,
								this.options.to_min,
								this.options.to_max
							)),
							(this.coords.p_to_real = this.checkMinInterval(
								this.coords.p_to_real,
								this.coords.p_from_real,
								"to"
							)),
							(this.coords.p_to_fake = this.convertToFakePercent(
								this.coords.p_to_real
							));
						break;
					case "both_one":
						if (this.options.from_fixed || this.options.to_fixed)
							break;
						var h = this.convertToRealPercent(i),
							r = this.result.from_percent,
							n = this.result.to_percent - r,
							a = n / 2,
							c = h - a,
							l = h + a;
						c < 0 && (l = (c = 0) + n),
							100 < l && (c = (l = 100) - n),
							(this.coords.p_from_real = this.calcWithStep(c)),
							(this.coords.p_from_real = this.checkDiapason(
								this.coords.p_from_real,
								this.options.from_min,
								this.options.from_max
							)),
							(this.coords.p_from_fake =
								this.convertToFakePercent(
									this.coords.p_from_real
								)),
							(this.coords.p_to_real = this.calcWithStep(l)),
							(this.coords.p_to_real = this.checkDiapason(
								this.coords.p_to_real,
								this.options.to_min,
								this.options.to_max
							)),
							(this.coords.p_to_fake = this.convertToFakePercent(
								this.coords.p_to_real
							));
				}
				"single" === this.options.type
					? ((this.coords.p_bar_x = this.coords.p_handle / 2),
					  (this.coords.p_bar_w = this.coords.p_single_fake),
					  (this.result.from_percent = this.coords.p_single_real),
					  (this.result.from = this.convertToValue(
							this.coords.p_single_real
					  )),
					  (this.result.from_pretty = this._prettify(
							this.result.from
					  )),
					  this.options.values.length &&
							(this.result.from_value =
								this.options.values[this.result.from]))
					: ((this.coords.p_bar_x = this.toFixed(
							this.coords.p_from_fake + this.coords.p_handle / 2
					  )),
					  (this.coords.p_bar_w = this.toFixed(
							this.coords.p_to_fake - this.coords.p_from_fake
					  )),
					  (this.result.from_percent = this.coords.p_from_real),
					  (this.result.from = this.convertToValue(
							this.coords.p_from_real
					  )),
					  (this.result.from_pretty = this._prettify(
							this.result.from
					  )),
					  (this.result.to_percent = this.coords.p_to_real),
					  (this.result.to = this.convertToValue(
							this.coords.p_to_real
					  )),
					  (this.result.to_pretty = this._prettify(this.result.to)),
					  this.options.values.length &&
							((this.result.from_value =
								this.options.values[this.result.from]),
							(this.result.to_value =
								this.options.values[this.result.to]))),
					this.calcMinMax(),
					this.calcLabels();
			}
		},
		calcPointerPercent: function () {
			this.coords.w_rs
				? (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer)
						? (this.coords.x_pointer = 0)
						: this.coords.x_pointer > this.coords.w_rs &&
						  (this.coords.x_pointer = this.coords.w_rs),
				  (this.coords.p_pointer = this.toFixed(
						(this.coords.x_pointer / this.coords.w_rs) * 100
				  )))
				: (this.coords.p_pointer = 0);
		},
		convertToRealPercent: function (t) {
			return (t / (100 - this.coords.p_handle)) * 100;
		},
		convertToFakePercent: function (t) {
			return (t / 100) * (100 - this.coords.p_handle);
		},
		getHandleX: function () {
			var t = 100 - this.coords.p_handle,
				i = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
			return i < 0 ? (i = 0) : t < i && (i = t), i;
		},
		calcHandlePercent: function () {
			"single" === this.options.type
				? (this.coords.w_handle = this.$cache.s_single.outerWidth(!1))
				: (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
				(this.coords.p_handle = this.toFixed(
					(this.coords.w_handle / this.coords.w_rs) * 100
				));
		},
		chooseHandle: function (t) {
			return "single" === this.options.type
				? "single"
				: this.coords.p_from_real +
						(this.coords.p_to_real - this.coords.p_from_real) / 2 <=
				  t
				? this.options.to_fixed
					? "from"
					: "to"
				: this.options.from_fixed
				? "to"
				: "from";
		},
		calcMinMax: function () {
			this.coords.w_rs &&
				((this.labels.p_min =
					(this.labels.w_min / this.coords.w_rs) * 100),
				(this.labels.p_max =
					(this.labels.w_max / this.coords.w_rs) * 100));
		},
		calcLabels: function () {
			this.coords.w_rs &&
				!this.options.hide_from_to &&
				("single" === this.options.type
					? ((this.labels.w_single = this.$cache.single.outerWidth(
							!1
					  )),
					  (this.labels.p_single_fake =
							(this.labels.w_single / this.coords.w_rs) * 100),
					  (this.labels.p_single_left =
							this.coords.p_single_fake +
							this.coords.p_handle / 2 -
							this.labels.p_single_fake / 2))
					: ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
					  (this.labels.p_from_fake =
							(this.labels.w_from / this.coords.w_rs) * 100),
					  (this.labels.p_from_left =
							this.coords.p_from_fake +
							this.coords.p_handle / 2 -
							this.labels.p_from_fake / 2),
					  (this.labels.p_from_left = this.toFixed(
							this.labels.p_from_left
					  )),
					  (this.labels.p_from_left = this.checkEdges(
							this.labels.p_from_left,
							this.labels.p_from_fake
					  )),
					  (this.labels.w_to = this.$cache.to.outerWidth(!1)),
					  (this.labels.p_to_fake =
							(this.labels.w_to / this.coords.w_rs) * 100),
					  (this.labels.p_to_left =
							this.coords.p_to_fake +
							this.coords.p_handle / 2 -
							this.labels.p_to_fake / 2),
					  (this.labels.p_to_left = this.toFixed(
							this.labels.p_to_left
					  )),
					  (this.labels.p_to_left = this.checkEdges(
							this.labels.p_to_left,
							this.labels.p_to_fake
					  )),
					  (this.labels.w_single = this.$cache.single.outerWidth(
							!1
					  )),
					  (this.labels.p_single_fake =
							(this.labels.w_single / this.coords.w_rs) * 100),
					  (this.labels.p_single_left =
							(this.labels.p_from_left +
								this.labels.p_to_left +
								this.labels.p_to_fake) /
								2 -
							this.labels.p_single_fake / 2),
					  (this.labels.p_single_left = this.toFixed(
							this.labels.p_single_left
					  ))),
				(this.labels.p_single_left = this.checkEdges(
					this.labels.p_single_left,
					this.labels.p_single_fake
				)));
		},
		updateScene: function () {
			this.raf_id &&
				(cancelAnimationFrame(this.raf_id), (this.raf_id = null)),
				clearTimeout(this.update_tm),
				(this.update_tm = null),
				this.options &&
					(this.drawHandles(),
					this.is_active
						? (this.raf_id = requestAnimationFrame(
								this.updateScene.bind(this)
						  ))
						: (this.update_tm = setTimeout(
								this.updateScene.bind(this),
								300
						  )));
		},
		drawHandles: function () {
			(this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
				this.coords.w_rs &&
					(this.coords.w_rs !== this.coords.w_rs_old &&
						((this.target = "base"), (this.is_resize = !0)),
					(this.coords.w_rs === this.coords.w_rs_old &&
						!this.force_redraw) ||
						(this.setMinMax(),
						this.calc(!0),
						this.drawLabels(),
						this.options.grid &&
							(this.calcGridMargin(), this.calcGridLabels()),
						(this.force_redraw = !0),
						(this.coords.w_rs_old = this.coords.w_rs),
						this.drawShadow()),
					this.coords.w_rs &&
						(this.dragging || this.force_redraw || this.is_key) &&
						((this.old_from !== this.result.from ||
							this.old_to !== this.result.to ||
							this.force_redraw ||
							this.is_key) &&
							(this.drawLabels(),
							(this.$cache.bar[0].style.left =
								this.coords.p_bar_x + "%"),
							(this.$cache.bar[0].style.width =
								this.coords.p_bar_w + "%"),
							"single" === this.options.type
								? ((this.$cache.bar[0].style.left = 0),
								  (this.$cache.bar[0].style.width =
										this.coords.p_bar_w +
										this.coords.p_bar_x +
										"%"),
								  (this.$cache.s_single[0].style.left =
										this.coords.p_single_fake + "%"))
								: ((this.$cache.s_from[0].style.left =
										this.coords.p_from_fake + "%"),
								  (this.$cache.s_to[0].style.left =
										this.coords.p_to_fake + "%"),
								  (this.old_from === this.result.from &&
										!this.force_redraw) ||
										(this.$cache.from[0].style.left =
											this.labels.p_from_left + "%"),
								  (this.old_to === this.result.to &&
										!this.force_redraw) ||
										(this.$cache.to[0].style.left =
											this.labels.p_to_left + "%")),
							(this.$cache.single[0].style.left =
								this.labels.p_single_left + "%"),
							this.writeToInput(),
							(this.old_from === this.result.from &&
								this.old_to === this.result.to) ||
								this.is_start ||
								(this.$cache.input.trigger("change"),
								this.$cache.input.trigger("input")),
							(this.old_from = this.result.from),
							(this.old_to = this.result.to),
							this.is_resize ||
								this.is_update ||
								this.is_start ||
								this.is_finish ||
								this.callOnChange(),
							(this.is_key || this.is_click) &&
								((this.is_key = !1),
								(this.is_click = !1),
								this.callOnFinish()),
							(this.is_update = !1),
							(this.is_resize = !1),
							(this.is_finish = !1)),
						(this.is_start = !1),
						(this.is_key = !1),
						(this.is_click = !1),
						(this.force_redraw = !1)));
		},
		drawLabels: function () {
			if (this.options) {
				var t,
					i,
					s,
					o,
					e,
					h = this.options.values.length,
					r = this.options.p_values;
				if (!this.options.hide_from_to)
					if ("single" === this.options.type)
						(t = h
							? this.decorate(r[this.result.from])
							: ((o = this._prettify(this.result.from)),
							  this.decorate(o, this.result.from))),
							this.$cache.single.html(t),
							this.calcLabels(),
							this.labels.p_single_left < this.labels.p_min + 1
								? (this.$cache.min[0].style.visibility =
										"hidden")
								: (this.$cache.min[0].style.visibility =
										"visible"),
							this.labels.p_single_left +
								this.labels.p_single_fake >
							100 - this.labels.p_max - 1
								? (this.$cache.max[0].style.visibility =
										"hidden")
								: (this.$cache.max[0].style.visibility =
										"visible");
					else {
						(s = h
							? (this.options.decorate_both
									? ((t = this.decorate(r[this.result.from])),
									  (t += this.options.values_separator),
									  (t += this.decorate(r[this.result.to])))
									: (t = this.decorate(
											r[this.result.from] +
												this.options.values_separator +
												r[this.result.to]
									  )),
							  (i = this.decorate(r[this.result.from])),
							  this.decorate(r[this.result.to]))
							: ((o = this._prettify(this.result.from)),
							  (e = this._prettify(this.result.to)),
							  this.options.decorate_both
									? ((t = this.decorate(o, this.result.from)),
									  (t += this.options.values_separator),
									  (t += this.decorate(e, this.result.to)))
									: (t = this.decorate(
											o +
												this.options.values_separator +
												e,
											this.result.to
									  )),
							  (i = this.decorate(o, this.result.from)),
							  this.decorate(e, this.result.to))),
							this.$cache.single.html(t),
							this.$cache.from.html(i),
							this.$cache.to.html(s),
							this.calcLabels();
						var n = Math.min(
								this.labels.p_single_left,
								this.labels.p_from_left
							),
							a =
								this.labels.p_single_left +
								this.labels.p_single_fake,
							c = this.labels.p_to_left + this.labels.p_to_fake,
							l = Math.max(a, c);
						this.labels.p_from_left + this.labels.p_from_fake >=
						this.labels.p_to_left
							? ((this.$cache.from[0].style.visibility =
									"hidden"),
							  (this.$cache.to[0].style.visibility = "hidden"),
							  (this.$cache.single[0].style.visibility =
									"visible"),
							  (l =
									this.result.from === this.result.to
										? ("from" === this.target
												? (this.$cache.from[0].style.visibility =
														"visible")
												: "to" === this.target
												? (this.$cache.to[0].style.visibility =
														"visible")
												: this.target ||
												  (this.$cache.from[0].style.visibility =
														"visible"),
										  (this.$cache.single[0].style.visibility =
												"hidden"),
										  c)
										: ((this.$cache.from[0].style.visibility =
												"hidden"),
										  (this.$cache.to[0].style.visibility =
												"hidden"),
										  (this.$cache.single[0].style.visibility =
												"visible"),
										  Math.max(a, c))))
							: ((this.$cache.from[0].style.visibility =
									"visible"),
							  (this.$cache.to[0].style.visibility = "visible"),
							  (this.$cache.single[0].style.visibility =
									"hidden")),
							n < this.labels.p_min + 1
								? (this.$cache.min[0].style.visibility =
										"hidden")
								: (this.$cache.min[0].style.visibility =
										"visible"),
							l > 100 - this.labels.p_max - 1
								? (this.$cache.max[0].style.visibility =
										"hidden")
								: (this.$cache.max[0].style.visibility =
										"visible");
					}
			}
		},
		drawShadow: function () {
			var t,
				i,
				s,
				o,
				e = this.options,
				h = this.$cache,
				r = "number" == typeof e.from_min && !isNaN(e.from_min),
				n = "number" == typeof e.from_max && !isNaN(e.from_max),
				a = "number" == typeof e.to_min && !isNaN(e.to_min),
				c = "number" == typeof e.to_max && !isNaN(e.to_max);
			"single" === e.type
				? e.from_shadow && (r || n)
					? ((t = this.convertToPercent(r ? e.from_min : e.min)),
					  (i = this.convertToPercent(n ? e.from_max : e.max) - t),
					  (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
					  (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
					  (t += this.coords.p_handle / 2),
					  (h.shad_single[0].style.display = "block"),
					  (h.shad_single[0].style.left = t + "%"),
					  (h.shad_single[0].style.width = i + "%"))
					: (h.shad_single[0].style.display = "none")
				: (e.from_shadow && (r || n)
						? ((t = this.convertToPercent(r ? e.from_min : e.min)),
						  (i =
								this.convertToPercent(n ? e.from_max : e.max) -
								t),
						  (t = this.toFixed(
								t - (this.coords.p_handle / 100) * t
						  )),
						  (i = this.toFixed(
								i - (this.coords.p_handle / 100) * i
						  )),
						  (t += this.coords.p_handle / 2),
						  (h.shad_from[0].style.display = "block"),
						  (h.shad_from[0].style.left = t + "%"),
						  (h.shad_from[0].style.width = i + "%"))
						: (h.shad_from[0].style.display = "none"),
				  e.to_shadow && (a || c)
						? ((s = this.convertToPercent(a ? e.to_min : e.min)),
						  (o = this.convertToPercent(c ? e.to_max : e.max) - s),
						  (s = this.toFixed(
								s - (this.coords.p_handle / 100) * s
						  )),
						  (o = this.toFixed(
								o - (this.coords.p_handle / 100) * o
						  )),
						  (s += this.coords.p_handle / 2),
						  (h.shad_to[0].style.display = "block"),
						  (h.shad_to[0].style.left = s + "%"),
						  (h.shad_to[0].style.width = o + "%"))
						: (h.shad_to[0].style.display = "none"));
		},
		writeToInput: function () {
			"single" === this.options.type
				? (this.options.values.length
						? this.$cache.input.prop(
								"value",
								this.result.from_value
						  )
						: this.$cache.input.prop("value", this.result.from),
				  this.$cache.input.data("from", this.result.from))
				: (this.options.values.length
						? this.$cache.input.prop(
								"value",
								this.result.from_value +
									this.options.input_values_separator +
									this.result.to_value
						  )
						: this.$cache.input.prop(
								"value",
								this.result.from +
									this.options.input_values_separator +
									this.result.to
						  ),
				  this.$cache.input.data("from", this.result.from),
				  this.$cache.input.data("to", this.result.to));
		},
		callOnStart: function () {
			this.writeToInput(),
				this.options.onStart &&
					"function" == typeof this.options.onStart &&
					(this.options.scope
						? this.options.onStart.call(
								this.options.scope,
								this.result
						  )
						: this.options.onStart(this.result));
		},
		callOnChange: function () {
			this.writeToInput(),
				this.options.onChange &&
					"function" == typeof this.options.onChange &&
					(this.options.scope
						? this.options.onChange.call(
								this.options.scope,
								this.result
						  )
						: this.options.onChange(this.result));
		},
		callOnFinish: function () {
			this.writeToInput(),
				this.options.onFinish &&
					"function" == typeof this.options.onFinish &&
					(this.options.scope
						? this.options.onFinish.call(
								this.options.scope,
								this.result
						  )
						: this.options.onFinish(this.result));
		},
		callOnUpdate: function () {
			this.writeToInput(),
				this.options.onUpdate &&
					"function" == typeof this.options.onUpdate &&
					(this.options.scope
						? this.options.onUpdate.call(
								this.options.scope,
								this.result
						  )
						: this.options.onUpdate(this.result));
		},
		toggleInput: function () {
			this.$cache.input.toggleClass("irs-hidden-input"),
				this.has_tab_index
					? this.$cache.input.prop("tabindex", -1)
					: this.$cache.input.removeProp("tabindex"),
				(this.has_tab_index = !this.has_tab_index);
		},
		convertToPercent: function (t, i) {
			var s,
				o = this.options.max - this.options.min,
				e = o / 100;
			return o
				? ((s = (i ? t : t - this.options.min) / e), this.toFixed(s))
				: ((this.no_diapason = !0), 0);
		},
		convertToValue: function (t) {
			var i,
				s,
				o = this.options.min,
				e = this.options.max,
				h = o.toString().split(".")[1],
				r = e.toString().split(".")[1],
				n = 0,
				a = 0;
			if (0 === t) return this.options.min;
			if (100 === t) return this.options.max;
			h && (n = i = h.length),
				r && (n = s = r.length),
				i && s && (n = s <= i ? i : s),
				o < 0 &&
					((o = +(o + (a = Math.abs(o))).toFixed(n)),
					(e = +(e + a).toFixed(n)));
			var c,
				l = ((e - o) / 100) * t + o,
				_ = this.options.step.toString().split(".")[1];
			return (
				(l = _
					? +l.toFixed(_.length)
					: ((l /= this.options.step),
					  +(l *= this.options.step).toFixed(0))),
				a && (l -= a),
				(c = _ ? +l.toFixed(_.length) : this.toFixed(l)) <
				this.options.min
					? (c = this.options.min)
					: c > this.options.max && (c = this.options.max),
				c
			);
		},
		calcWithStep: function (t) {
			var i = Math.round(t / this.coords.p_step) * this.coords.p_step;
			return (
				100 < i && (i = 100), 100 === t && (i = 100), this.toFixed(i)
			);
		},
		checkMinInterval: function (t, i, s) {
			var o,
				e,
				h = this.options;
			return h.min_interval
				? ((o = this.convertToValue(t)),
				  (e = this.convertToValue(i)),
				  "from" === s
						? e - o < h.min_interval && (o = e - h.min_interval)
						: o - e < h.min_interval && (o = e + h.min_interval),
				  this.convertToPercent(o))
				: t;
		},
		checkMaxInterval: function (t, i, s) {
			var o,
				e,
				h = this.options;
			return h.max_interval
				? ((o = this.convertToValue(t)),
				  (e = this.convertToValue(i)),
				  "from" === s
						? e - o > h.max_interval && (o = e - h.max_interval)
						: o - e > h.max_interval && (o = e + h.max_interval),
				  this.convertToPercent(o))
				: t;
		},
		checkDiapason: function (t, i, s) {
			var o = this.convertToValue(t),
				e = this.options;
			return (
				"number" != typeof i && (i = e.min),
				"number" != typeof s && (s = e.max),
				o < i && (o = i),
				s < o && (o = s),
				this.convertToPercent(o)
			);
		},
		toFixed: function (t) {
			return +(t = t.toFixed(20));
		},
		_prettify: function (t) {
			return this.options.prettify_enabled
				? this.options.prettify &&
				  "function" == typeof this.options.prettify
					? this.options.prettify(t)
					: this.prettify(t)
				: t;
		},
		prettify: function (t) {
			return t
				.toString()
				.replace(
					/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
					"$1" + this.options.prettify_separator
				);
		},
		checkEdges: function (t, i) {
			return (
				this.options.force_edges &&
					(t < 0 ? (t = 0) : 100 - i < t && (t = 100 - i)),
				this.toFixed(t)
			);
		},
		validate: function () {
			var t,
				i,
				s = this.options,
				o = this.result,
				e = s.values,
				h = e.length;
			if (
				("string" == typeof s.min && (s.min = +s.min),
				"string" == typeof s.max && (s.max = +s.max),
				"string" == typeof s.from && (s.from = +s.from),
				"string" == typeof s.to && (s.to = +s.to),
				"string" == typeof s.step && (s.step = +s.step),
				"string" == typeof s.from_min && (s.from_min = +s.from_min),
				"string" == typeof s.from_max && (s.from_max = +s.from_max),
				"string" == typeof s.to_min && (s.to_min = +s.to_min),
				"string" == typeof s.to_max && (s.to_max = +s.to_max),
				"string" == typeof s.grid_num && (s.grid_num = +s.grid_num),
				s.max < s.min && (s.max = s.min),
				h)
			)
				for (
					s.p_values = [],
						s.min = 0,
						s.max = h - 1,
						s.step = 1,
						s.grid_num = s.max,
						s.grid_snap = !0,
						i = 0;
					i < h;
					i++
				)
					(t = +e[i]),
						(t = isNaN(t) ? e[i] : ((e[i] = t), this._prettify(t))),
						s.p_values.push(t);
			("number" == typeof s.from && !isNaN(s.from)) || (s.from = s.min),
				("number" == typeof s.to && !isNaN(s.to)) || (s.to = s.max),
				"single" === s.type
					? (s.from < s.min && (s.from = s.min),
					  s.from > s.max && (s.from = s.max))
					: (s.from < s.min && (s.from = s.min),
					  s.from > s.max && (s.from = s.max),
					  s.to < s.min && (s.to = s.min),
					  s.to > s.max && (s.to = s.max),
					  this.update_check.from &&
							(this.update_check.from !== s.from &&
								s.from > s.to &&
								(s.from = s.to),
							this.update_check.to !== s.to &&
								s.to < s.from &&
								(s.to = s.from)),
					  s.from > s.to && (s.from = s.to),
					  s.to < s.from && (s.to = s.from)),
				("number" != typeof s.step ||
					isNaN(s.step) ||
					!s.step ||
					s.step < 0) &&
					(s.step = 1),
				"number" == typeof s.from_min &&
					s.from < s.from_min &&
					(s.from = s.from_min),
				"number" == typeof s.from_max &&
					s.from > s.from_max &&
					(s.from = s.from_max),
				"number" == typeof s.to_min &&
					s.to < s.to_min &&
					(s.to = s.to_min),
				"number" == typeof s.to_max &&
					s.from > s.to_max &&
					(s.to = s.to_max),
				o &&
					(o.min !== s.min && (o.min = s.min),
					o.max !== s.max && (o.max = s.max),
					(o.from < o.min || o.from > o.max) && (o.from = s.from),
					(o.to < o.min || o.to > o.max) && (o.to = s.to)),
				("number" != typeof s.min_interval ||
					isNaN(s.min_interval) ||
					!s.min_interval ||
					s.min_interval < 0) &&
					(s.min_interval = 0),
				("number" != typeof s.max_interval ||
					isNaN(s.max_interval) ||
					!s.max_interval ||
					s.max_interval < 0) &&
					(s.max_interval = 0),
				s.min_interval &&
					s.min_interval > s.max - s.min &&
					(s.min_interval = s.max - s.min),
				s.max_interval &&
					s.max_interval > s.max - s.min &&
					(s.max_interval = s.max - s.min);
		},
		decorate: function (t, i) {
			var s = "",
				o = this.options;
			return (
				o.prefix && (s += o.prefix),
				(s += t),
				o.max_postfix &&
					(o.values.length && t === o.p_values[o.max]
						? ((s += o.max_postfix), o.postfix && (s += " "))
						: i === o.max &&
						  ((s += o.max_postfix), o.postfix && (s += " "))),
				o.postfix && (s += o.postfix),
				s
			);
		},
		updateFrom: function () {
			(this.result.from = this.options.from),
				(this.result.from_percent = this.convertToPercent(
					this.result.from
				)),
				(this.result.from_pretty = this._prettify(this.result.from)),
				this.options.values &&
					(this.result.from_value =
						this.options.values[this.result.from]);
		},
		updateTo: function () {
			(this.result.to = this.options.to),
				(this.result.to_percent = this.convertToPercent(
					this.result.to
				)),
				(this.result.to_pretty = this._prettify(this.result.to)),
				this.options.values &&
					(this.result.to_value =
						this.options.values[this.result.to]);
		},
		updateResult: function () {
			(this.result.min = this.options.min),
				(this.result.max = this.options.max),
				this.updateFrom(),
				this.updateTo();
		},
		appendGrid: function () {
			if (this.options.grid) {
				var t,
					i,
					s,
					o,
					e,
					h,
					r = this.options,
					n = r.max - r.min,
					a = r.grid_num,
					c = 0,
					l = 4,
					_ = "";
				for (
					this.calcGridMargin(),
						r.grid_snap && (a = n / r.step),
						50 < a && (a = 50),
						s = this.toFixed(100 / a),
						4 < a && (l = 3),
						7 < a && (l = 2),
						14 < a && (l = 1),
						28 < a && (l = 0),
						t = 0;
					t < a + 1;
					t++
				) {
					for (
						o = l,
							100 < (c = this.toFixed(s * t)) && (c = 100),
							e =
								((this.coords.big[t] = c) - s * (t - 1)) /
								(o + 1),
							i = 1;
						i <= o && 0 !== c;
						i++
					)
						_ +=
							'<span class="irs-grid-pol small" style="left: ' +
							this.toFixed(c - e * i) +
							'%"></span>';
					(_ +=
						'<span class="irs-grid-pol" style="left: ' +
						c +
						'%"></span>'),
						(h = this.convertToValue(c)),
						(_ +=
							'<span class="irs-grid-text js-grid-text-' +
							t +
							'" style="left: ' +
							c +
							'%">' +
							(h = r.values.length
								? r.p_values[h]
								: this._prettify(h)) +
							"</span>");
				}
				(this.coords.big_num = Math.ceil(a + 1)),
					this.$cache.cont.addClass("irs-with-grid"),
					this.$cache.grid.html(_),
					this.cacheGridLabels();
			}
		},
		cacheGridLabels: function () {
			var t,
				i,
				s = this.coords.big_num;
			for (i = 0; i < s; i++)
				(t = this.$cache.grid.find(".js-grid-text-" + i)),
					this.$cache.grid_labels.push(t);
			this.calcGridLabels();
		},
		calcGridLabels: function () {
			var t,
				i,
				s = [],
				o = [],
				e = this.coords.big_num;
			for (t = 0; t < e; t++)
				(this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(
					!1
				)),
					(this.coords.big_p[t] = this.toFixed(
						(this.coords.big_w[t] / this.coords.w_rs) * 100
					)),
					(this.coords.big_x[t] = this.toFixed(
						this.coords.big_p[t] / 2
					)),
					(s[t] = this.toFixed(
						this.coords.big[t] - this.coords.big_x[t]
					)),
					(o[t] = this.toFixed(s[t] + this.coords.big_p[t]));
			for (
				this.options.force_edges &&
					(s[0] < -this.coords.grid_gap &&
						((s[0] = -this.coords.grid_gap),
						(o[0] = this.toFixed(s[0] + this.coords.big_p[0])),
						(this.coords.big_x[0] = this.coords.grid_gap)),
					o[e - 1] > 100 + this.coords.grid_gap &&
						((o[e - 1] = 100 + this.coords.grid_gap),
						(s[e - 1] = this.toFixed(
							o[e - 1] - this.coords.big_p[e - 1]
						)),
						(this.coords.big_x[e - 1] = this.toFixed(
							this.coords.big_p[e - 1] - this.coords.grid_gap
						)))),
					this.calcGridCollision(2, s, o),
					this.calcGridCollision(4, s, o),
					t = 0;
				t < e;
				t++
			)
				(i = this.$cache.grid_labels[t][0]),
					this.coords.big_x[t] !== Number.POSITIVE_INFINITY &&
						(i.style.marginLeft = -this.coords.big_x[t] + "%");
		},
		calcGridCollision: function (t, i, s) {
			var o,
				e,
				h,
				r = this.coords.big_num;
			for (o = 0; o < r && !(r <= (e = o + t / 2)); o += t)
				(h = this.$cache.grid_labels[e][0]),
					s[o] <= i[e]
						? (h.style.visibility = "visible")
						: (h.style.visibility = "hidden");
		},
		calcGridMargin: function () {
			this.options.grid_margin &&
				((this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
				this.coords.w_rs &&
					("single" === this.options.type
						? (this.coords.w_handle =
								this.$cache.s_single.outerWidth(!1))
						: (this.coords.w_handle = this.$cache.s_from.outerWidth(
								!1
						  )),
					(this.coords.p_handle = this.toFixed(
						(this.coords.w_handle / this.coords.w_rs) * 100
					)),
					(this.coords.grid_gap = this.toFixed(
						this.coords.p_handle / 2 - 0.1
					)),
					(this.$cache.grid[0].style.width =
						this.toFixed(100 - this.coords.p_handle) + "%"),
					(this.$cache.grid[0].style.left =
						this.coords.grid_gap + "%")));
		},
		update: function (t) {
			this.input &&
				((this.is_update = !0),
				(this.options.from = this.result.from),
				(this.options.to = this.result.to),
				(this.update_check.from = this.result.from),
				(this.update_check.to = this.result.to),
				(this.options = a.extend(this.options, t)),
				this.validate(),
				this.updateResult(t),
				this.toggleInput(),
				this.remove(),
				this.init(!0));
		},
		reset: function () {
			this.input && (this.updateResult(), this.update());
		},
		destroy: function () {
			this.input &&
				(this.toggleInput(),
				this.$cache.input.prop("readonly", !1),
				a.data(this.input, "ionRangeSlider", null),
				this.remove(),
				(this.input = null),
				(this.options = null));
		},
	}),
		(a.fn.ionRangeSlider = function (t) {
			return this.each(function () {
				a.data(this, "ionRangeSlider") ||
					a.data(this, "ionRangeSlider", new h(this, t, o++));
			});
		}),
		(function () {
			for (
				var h = 0, t = ["ms", "moz", "webkit", "o"], i = 0;
				i < t.length && !l.requestAnimationFrame;
				++i
			)
				(l.requestAnimationFrame = l[t[i] + "RequestAnimationFrame"]),
					(l.cancelAnimationFrame =
						l[t[i] + "CancelAnimationFrame"] ||
						l[t[i] + "CancelRequestAnimationFrame"]);
			l.requestAnimationFrame ||
				(l.requestAnimationFrame = function (t, i) {
					var s = new Date().getTime(),
						o = Math.max(0, 16 - (s - h)),
						e = l.setTimeout(function () {
							t(s + o);
						}, o);
					return (h = s + o), e;
				}),
				l.cancelAnimationFrame ||
					(l.cancelAnimationFrame = function (t) {
						clearTimeout(t);
					});
		})();
});

/**
 * Swiper 8.4.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 21, 2022
 */

!(function (e, t) {
	"object" == typeof exports && "undefined" != typeof module
		? (module.exports = t())
		: "function" == typeof define && define.amd
		? define(t)
		: ((e =
				"undefined" != typeof globalThis
					? globalThis
					: e || self).Swiper = t());
})(this, function () {
	"use strict";
	function e(e) {
		return (
			null !== e &&
			"object" == typeof e &&
			"constructor" in e &&
			e.constructor === Object
		);
	}
	function t(s, a) {
		void 0 === s && (s = {}),
			void 0 === a && (a = {}),
			Object.keys(a).forEach((i) => {
				void 0 === s[i]
					? (s[i] = a[i])
					: e(a[i]) &&
					  e(s[i]) &&
					  Object.keys(a[i]).length > 0 &&
					  t(s[i], a[i]);
			});
	}
	const s = {
		body: {},
		addEventListener() {},
		removeEventListener() {},
		activeElement: { blur() {}, nodeName: "" },
		querySelector: () => null,
		querySelectorAll: () => [],
		getElementById: () => null,
		createEvent: () => ({ initEvent() {} }),
		createElement: () => ({
			children: [],
			childNodes: [],
			style: {},
			setAttribute() {},
			getElementsByTagName: () => [],
		}),
		createElementNS: () => ({}),
		importNode: () => null,
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: "",
		},
	};
	function a() {
		const e = "undefined" != typeof document ? document : {};
		return t(e, s), e;
	}
	const i = {
		document: s,
		navigator: { userAgent: "" },
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: "",
		},
		history: { replaceState() {}, pushState() {}, go() {}, back() {} },
		CustomEvent: function () {
			return this;
		},
		addEventListener() {},
		removeEventListener() {},
		getComputedStyle: () => ({ getPropertyValue: () => "" }),
		Image() {},
		Date() {},
		screen: {},
		setTimeout() {},
		clearTimeout() {},
		matchMedia: () => ({}),
		requestAnimationFrame: (e) =>
			"undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
		cancelAnimationFrame(e) {
			"undefined" != typeof setTimeout && clearTimeout(e);
		},
	};
	function r() {
		const e = "undefined" != typeof window ? window : {};
		return t(e, i), e;
	}
	class n extends Array {
		constructor(e) {
			"number" == typeof e
				? super(e)
				: (super(...(e || [])),
				  (function (e) {
						const t = e.__proto__;
						Object.defineProperty(e, "__proto__", {
							get: () => t,
							set(e) {
								t.__proto__ = e;
							},
						});
				  })(this));
		}
	}
	function l(e) {
		void 0 === e && (e = []);
		const t = [];
		return (
			e.forEach((e) => {
				Array.isArray(e) ? t.push(...l(e)) : t.push(e);
			}),
			t
		);
	}
	function o(e, t) {
		return Array.prototype.filter.call(e, t);
	}
	function d(e, t) {
		const s = r(),
			i = a();
		let l = [];
		if (!t && e instanceof n) return e;
		if (!e) return new n(l);
		if ("string" == typeof e) {
			const s = e.trim();
			if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
				let e = "div";
				0 === s.indexOf("<li") && (e = "ul"),
					0 === s.indexOf("<tr") && (e = "tbody"),
					(0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) ||
						(e = "tr"),
					0 === s.indexOf("<tbody") && (e = "table"),
					0 === s.indexOf("<option") && (e = "select");
				const t = i.createElement(e);
				t.innerHTML = s;
				for (let e = 0; e < t.childNodes.length; e += 1)
					l.push(t.childNodes[e]);
			} else
				l = (function (e, t) {
					if ("string" != typeof e) return [e];
					const s = [],
						a = t.querySelectorAll(e);
					for (let e = 0; e < a.length; e += 1) s.push(a[e]);
					return s;
				})(e.trim(), t || i);
		} else if (e.nodeType || e === s || e === i) l.push(e);
		else if (Array.isArray(e)) {
			if (e instanceof n) return e;
			l = e;
		}
		return new n(
			(function (e) {
				const t = [];
				for (let s = 0; s < e.length; s += 1)
					-1 === t.indexOf(e[s]) && t.push(e[s]);
				return t;
			})(l)
		);
	}
	d.fn = n.prototype;
	const c = {
		addClass: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			const a = l(t.map((e) => e.split(" ")));
			return (
				this.forEach((e) => {
					e.classList.add(...a);
				}),
				this
			);
		},
		removeClass: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			const a = l(t.map((e) => e.split(" ")));
			return (
				this.forEach((e) => {
					e.classList.remove(...a);
				}),
				this
			);
		},
		hasClass: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			const a = l(t.map((e) => e.split(" ")));
			return (
				o(
					this,
					(e) => a.filter((t) => e.classList.contains(t)).length > 0
				).length > 0
			);
		},
		toggleClass: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			const a = l(t.map((e) => e.split(" ")));
			this.forEach((e) => {
				a.forEach((t) => {
					e.classList.toggle(t);
				});
			});
		},
		attr: function (e, t) {
			if (1 === arguments.length && "string" == typeof e)
				return this[0] ? this[0].getAttribute(e) : void 0;
			for (let s = 0; s < this.length; s += 1)
				if (2 === arguments.length) this[s].setAttribute(e, t);
				else
					for (const t in e)
						(this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
			return this;
		},
		removeAttr: function (e) {
			for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this;
		},
		transform: function (e) {
			for (let t = 0; t < this.length; t += 1)
				this[t].style.transform = e;
			return this;
		},
		transition: function (e) {
			for (let t = 0; t < this.length; t += 1)
				this[t].style.transitionDuration =
					"string" != typeof e ? `${e}ms` : e;
			return this;
		},
		on: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			let [a, i, r, n] = t;
			function l(e) {
				const t = e.target;
				if (!t) return;
				const s = e.target.dom7EventData || [];
				if ((s.indexOf(e) < 0 && s.unshift(e), d(t).is(i)))
					r.apply(t, s);
				else {
					const e = d(t).parents();
					for (let t = 0; t < e.length; t += 1)
						d(e[t]).is(i) && r.apply(e[t], s);
				}
			}
			function o(e) {
				const t = (e && e.target && e.target.dom7EventData) || [];
				t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
			}
			"function" == typeof t[1] && (([a, r, n] = t), (i = void 0)),
				n || (n = !1);
			const c = a.split(" ");
			let p;
			for (let e = 0; e < this.length; e += 1) {
				const t = this[e];
				if (i)
					for (p = 0; p < c.length; p += 1) {
						const e = c[p];
						t.dom7LiveListeners || (t.dom7LiveListeners = {}),
							t.dom7LiveListeners[e] ||
								(t.dom7LiveListeners[e] = []),
							t.dom7LiveListeners[e].push({
								listener: r,
								proxyListener: l,
							}),
							t.addEventListener(e, l, n);
					}
				else
					for (p = 0; p < c.length; p += 1) {
						const e = c[p];
						t.dom7Listeners || (t.dom7Listeners = {}),
							t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
							t.dom7Listeners[e].push({
								listener: r,
								proxyListener: o,
							}),
							t.addEventListener(e, o, n);
					}
			}
			return this;
		},
		off: function () {
			for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
				t[s] = arguments[s];
			let [a, i, r, n] = t;
			"function" == typeof t[1] && (([a, r, n] = t), (i = void 0)),
				n || (n = !1);
			const l = a.split(" ");
			for (let e = 0; e < l.length; e += 1) {
				const t = l[e];
				for (let e = 0; e < this.length; e += 1) {
					const s = this[e];
					let a;
					if (
						(!i && s.dom7Listeners
							? (a = s.dom7Listeners[t])
							: i &&
							  s.dom7LiveListeners &&
							  (a = s.dom7LiveListeners[t]),
						a && a.length)
					)
						for (let e = a.length - 1; e >= 0; e -= 1) {
							const i = a[e];
							(r && i.listener === r) ||
							(r &&
								i.listener &&
								i.listener.dom7proxy &&
								i.listener.dom7proxy === r)
								? (s.removeEventListener(t, i.proxyListener, n),
								  a.splice(e, 1))
								: r ||
								  (s.removeEventListener(t, i.proxyListener, n),
								  a.splice(e, 1));
						}
				}
			}
			return this;
		},
		trigger: function () {
			const e = r();
			for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
				s[a] = arguments[a];
			const i = s[0].split(" "),
				n = s[1];
			for (let t = 0; t < i.length; t += 1) {
				const a = i[t];
				for (let t = 0; t < this.length; t += 1) {
					const i = this[t];
					if (e.CustomEvent) {
						const t = new e.CustomEvent(a, {
							detail: n,
							bubbles: !0,
							cancelable: !0,
						});
						(i.dom7EventData = s.filter((e, t) => t > 0)),
							i.dispatchEvent(t),
							(i.dom7EventData = []),
							delete i.dom7EventData;
					}
				}
			}
			return this;
		},
		transitionEnd: function (e) {
			const t = this;
			return (
				e &&
					t.on("transitionend", function s(a) {
						a.target === this &&
							(e.call(this, a), t.off("transitionend", s));
					}),
				this
			);
		},
		outerWidth: function (e) {
			if (this.length > 0) {
				if (e) {
					const e = this.styles();
					return (
						this[0].offsetWidth +
						parseFloat(e.getPropertyValue("margin-right")) +
						parseFloat(e.getPropertyValue("margin-left"))
					);
				}
				return this[0].offsetWidth;
			}
			return null;
		},
		outerHeight: function (e) {
			if (this.length > 0) {
				if (e) {
					const e = this.styles();
					return (
						this[0].offsetHeight +
						parseFloat(e.getPropertyValue("margin-top")) +
						parseFloat(e.getPropertyValue("margin-bottom"))
					);
				}
				return this[0].offsetHeight;
			}
			return null;
		},
		styles: function () {
			const e = r();
			return this[0] ? e.getComputedStyle(this[0], null) : {};
		},
		offset: function () {
			if (this.length > 0) {
				const e = r(),
					t = a(),
					s = this[0],
					i = s.getBoundingClientRect(),
					n = t.body,
					l = s.clientTop || n.clientTop || 0,
					o = s.clientLeft || n.clientLeft || 0,
					d = s === e ? e.scrollY : s.scrollTop,
					c = s === e ? e.scrollX : s.scrollLeft;
				return { top: i.top + d - l, left: i.left + c - o };
			}
			return null;
		},
		css: function (e, t) {
			const s = r();
			let a;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (a = 0; a < this.length; a += 1)
						for (const t in e) this[a].style[t] = e[t];
					return this;
				}
				if (this[0])
					return s
						.getComputedStyle(this[0], null)
						.getPropertyValue(e);
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
				return this;
			}
			return this;
		},
		each: function (e) {
			return e
				? (this.forEach((t, s) => {
						e.apply(t, [t, s]);
				  }),
				  this)
				: this;
		},
		html: function (e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : null;
			for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this;
		},
		text: function (e) {
			if (void 0 === e)
				return this[0] ? this[0].textContent.trim() : null;
			for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this;
		},
		is: function (e) {
			const t = r(),
				s = a(),
				i = this[0];
			let l, o;
			if (!i || void 0 === e) return !1;
			if ("string" == typeof e) {
				if (i.matches) return i.matches(e);
				if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
				if (i.msMatchesSelector) return i.msMatchesSelector(e);
				for (l = d(e), o = 0; o < l.length; o += 1)
					if (l[o] === i) return !0;
				return !1;
			}
			if (e === s) return i === s;
			if (e === t) return i === t;
			if (e.nodeType || e instanceof n) {
				for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
					if (l[o] === i) return !0;
				return !1;
			}
			return !1;
		},
		index: function () {
			let e,
				t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling); )
					1 === t.nodeType && (e += 1);
				return e;
			}
		},
		eq: function (e) {
			if (void 0 === e) return this;
			const t = this.length;
			if (e > t - 1) return d([]);
			if (e < 0) {
				const s = t + e;
				return d(s < 0 ? [] : [this[s]]);
			}
			return d([this[e]]);
		},
		append: function () {
			let e;
			const t = a();
			for (let s = 0; s < arguments.length; s += 1) {
				e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
				for (let s = 0; s < this.length; s += 1)
					if ("string" == typeof e) {
						const a = t.createElement("div");
						for (a.innerHTML = e; a.firstChild; )
							this[s].appendChild(a.firstChild);
					} else if (e instanceof n)
						for (let t = 0; t < e.length; t += 1)
							this[s].appendChild(e[t]);
					else this[s].appendChild(e);
			}
			return this;
		},
		prepend: function (e) {
			const t = a();
			let s, i;
			for (s = 0; s < this.length; s += 1)
				if ("string" == typeof e) {
					const a = t.createElement("div");
					for (
						a.innerHTML = e, i = a.childNodes.length - 1;
						i >= 0;
						i -= 1
					)
						this[s].insertBefore(
							a.childNodes[i],
							this[s].childNodes[0]
						);
				} else if (e instanceof n)
					for (i = 0; i < e.length; i += 1)
						this[s].insertBefore(e[i], this[s].childNodes[0]);
				else this[s].insertBefore(e, this[s].childNodes[0]);
			return this;
		},
		next: function (e) {
			return this.length > 0
				? e
					? this[0].nextElementSibling &&
					  d(this[0].nextElementSibling).is(e)
						? d([this[0].nextElementSibling])
						: d([])
					: this[0].nextElementSibling
					? d([this[0].nextElementSibling])
					: d([])
				: d([]);
		},
		nextAll: function (e) {
			const t = [];
			let s = this[0];
			if (!s) return d([]);
			for (; s.nextElementSibling; ) {
				const a = s.nextElementSibling;
				e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
			}
			return d(t);
		},
		prev: function (e) {
			if (this.length > 0) {
				const t = this[0];
				return e
					? t.previousElementSibling &&
					  d(t.previousElementSibling).is(e)
						? d([t.previousElementSibling])
						: d([])
					: t.previousElementSibling
					? d([t.previousElementSibling])
					: d([]);
			}
			return d([]);
		},
		prevAll: function (e) {
			const t = [];
			let s = this[0];
			if (!s) return d([]);
			for (; s.previousElementSibling; ) {
				const a = s.previousElementSibling;
				e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
			}
			return d(t);
		},
		parent: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1)
				null !== this[s].parentNode &&
					(e
						? d(this[s].parentNode).is(e) &&
						  t.push(this[s].parentNode)
						: t.push(this[s].parentNode));
			return d(t);
		},
		parents: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1) {
				let a = this[s].parentNode;
				for (; a; )
					e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
			}
			return d(t);
		},
		closest: function (e) {
			let t = this;
			return void 0 === e
				? d([])
				: (t.is(e) || (t = t.parents(e).eq(0)), t);
		},
		find: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1) {
				const a = this[s].querySelectorAll(e);
				for (let e = 0; e < a.length; e += 1) t.push(a[e]);
			}
			return d(t);
		},
		children: function (e) {
			const t = [];
			for (let s = 0; s < this.length; s += 1) {
				const a = this[s].children;
				for (let s = 0; s < a.length; s += 1)
					(e && !d(a[s]).is(e)) || t.push(a[s]);
			}
			return d(t);
		},
		filter: function (e) {
			return d(o(this, e));
		},
		remove: function () {
			for (let e = 0; e < this.length; e += 1)
				this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this;
		},
	};
	function p(e, t) {
		return void 0 === t && (t = 0), setTimeout(e, t);
	}
	function u() {
		return Date.now();
	}
	function h(e, t) {
		void 0 === t && (t = "x");
		const s = r();
		let a, i, n;
		const l = (function (e) {
			const t = r();
			let s;
			return (
				t.getComputedStyle && (s = t.getComputedStyle(e, null)),
				!s && e.currentStyle && (s = e.currentStyle),
				s || (s = e.style),
				s
			);
		})(e);
		return (
			s.WebKitCSSMatrix
				? ((i = l.transform || l.webkitTransform),
				  i.split(",").length > 6 &&
						(i = i
							.split(", ")
							.map((e) => e.replace(",", "."))
							.join(", ")),
				  (n = new s.WebKitCSSMatrix("none" === i ? "" : i)))
				: ((n =
						l.MozTransform ||
						l.OTransform ||
						l.MsTransform ||
						l.msTransform ||
						l.transform ||
						l
							.getPropertyValue("transform")
							.replace("translate(", "matrix(1, 0, 0, 1,")),
				  (a = n.toString().split(","))),
			"x" === t &&
				(i = s.WebKitCSSMatrix
					? n.m41
					: 16 === a.length
					? parseFloat(a[12])
					: parseFloat(a[4])),
			"y" === t &&
				(i = s.WebKitCSSMatrix
					? n.m42
					: 16 === a.length
					? parseFloat(a[13])
					: parseFloat(a[5])),
			i || 0
		);
	}
	function m(e) {
		return (
			"object" == typeof e &&
			null !== e &&
			e.constructor &&
			"Object" === Object.prototype.toString.call(e).slice(8, -1)
		);
	}
	function f(e) {
		return "undefined" != typeof window && void 0 !== window.HTMLElement
			? e instanceof HTMLElement
			: e && (1 === e.nodeType || 11 === e.nodeType);
	}
	function g() {
		const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
			t = ["__proto__", "constructor", "prototype"];
		for (let s = 1; s < arguments.length; s += 1) {
			const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
			if (null != a && !f(a)) {
				const s = Object.keys(Object(a)).filter(
					(e) => t.indexOf(e) < 0
				);
				for (let t = 0, i = s.length; t < i; t += 1) {
					const i = s[t],
						r = Object.getOwnPropertyDescriptor(a, i);
					void 0 !== r &&
						r.enumerable &&
						(m(e[i]) && m(a[i])
							? a[i].__swiper__
								? (e[i] = a[i])
								: g(e[i], a[i])
							: !m(e[i]) && m(a[i])
							? ((e[i] = {}),
							  a[i].__swiper__ ? (e[i] = a[i]) : g(e[i], a[i]))
							: (e[i] = a[i]));
				}
			}
		}
		return e;
	}
	function v(e, t, s) {
		e.style.setProperty(t, s);
	}
	function w(e) {
		let { swiper: t, targetPosition: s, side: a } = e;
		const i = r(),
			n = -t.translate;
		let l,
			o = null;
		const d = t.params.speed;
		(t.wrapperEl.style.scrollSnapType = "none"),
			i.cancelAnimationFrame(t.cssModeFrameID);
		const c = s > n ? "next" : "prev",
			p = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
			u = () => {
				(l = new Date().getTime()), null === o && (o = l);
				const e = Math.max(Math.min((l - o) / d, 1), 0),
					r = 0.5 - Math.cos(e * Math.PI) / 2;
				let c = n + r * (s - n);
				if (
					(p(c, s) && (c = s),
					t.wrapperEl.scrollTo({ [a]: c }),
					p(c, s))
				)
					return (
						(t.wrapperEl.style.overflow = "hidden"),
						(t.wrapperEl.style.scrollSnapType = ""),
						setTimeout(() => {
							(t.wrapperEl.style.overflow = ""),
								t.wrapperEl.scrollTo({ [a]: c });
						}),
						void i.cancelAnimationFrame(t.cssModeFrameID)
					);
				t.cssModeFrameID = i.requestAnimationFrame(u);
			};
		u();
	}
	let b, x, y;
	function E() {
		return (
			b ||
				(b = (function () {
					const e = r(),
						t = a();
					return {
						smoothScroll:
							t.documentElement &&
							"scrollBehavior" in t.documentElement.style,
						touch: !!(
							"ontouchstart" in e ||
							(e.DocumentTouch && t instanceof e.DocumentTouch)
						),
						passiveListener: (function () {
							let t = !1;
							try {
								const s = Object.defineProperty({}, "passive", {
									get() {
										t = !0;
									},
								});
								e.addEventListener(
									"testPassiveListener",
									null,
									s
								);
							} catch (e) {}
							return t;
						})(),
						gestures: "ongesturestart" in e,
					};
				})()),
			b
		);
	}
	function C(e) {
		return (
			void 0 === e && (e = {}),
			x ||
				(x = (function (e) {
					let { userAgent: t } = void 0 === e ? {} : e;
					const s = E(),
						a = r(),
						i = a.navigator.platform,
						n = t || a.navigator.userAgent,
						l = { ios: !1, android: !1 },
						o = a.screen.width,
						d = a.screen.height,
						c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
					let p = n.match(/(iPad).*OS\s([\d_]+)/);
					const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
						h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
						m = "Win32" === i;
					let f = "MacIntel" === i;
					return (
						!p &&
							f &&
							s.touch &&
							[
								"1024x1366",
								"1366x1024",
								"834x1194",
								"1194x834",
								"834x1112",
								"1112x834",
								"768x1024",
								"1024x768",
								"820x1180",
								"1180x820",
								"810x1080",
								"1080x810",
							].indexOf(`${o}x${d}`) >= 0 &&
							((p = n.match(/(Version)\/([\d.]+)/)),
							p || (p = [0, 1, "13_0_0"]),
							(f = !1)),
						c && !m && ((l.os = "android"), (l.android = !0)),
						(p || h || u) && ((l.os = "ios"), (l.ios = !0)),
						l
					);
				})(e)),
			x
		);
	}
	function T() {
		return (
			y ||
				(y = (function () {
					const e = r();
					return {
						isSafari: (function () {
							const t = e.navigator.userAgent.toLowerCase();
							return (
								t.indexOf("safari") >= 0 &&
								t.indexOf("chrome") < 0 &&
								t.indexOf("android") < 0
							);
						})(),
						isWebView:
							/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
								e.navigator.userAgent
							),
					};
				})()),
			y
		);
	}
	Object.keys(c).forEach((e) => {
		Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
	});
	var $ = {
		on(e, t, s) {
			const a = this;
			if (!a.eventsListeners || a.destroyed) return a;
			if ("function" != typeof t) return a;
			const i = s ? "unshift" : "push";
			return (
				e.split(" ").forEach((e) => {
					a.eventsListeners[e] || (a.eventsListeners[e] = []),
						a.eventsListeners[e][i](t);
				}),
				a
			);
		},
		once(e, t, s) {
			const a = this;
			if (!a.eventsListeners || a.destroyed) return a;
			if ("function" != typeof t) return a;
			function i() {
				a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
				for (
					var s = arguments.length, r = new Array(s), n = 0;
					n < s;
					n++
				)
					r[n] = arguments[n];
				t.apply(a, r);
			}
			return (i.__emitterProxy = t), a.on(e, i, s);
		},
		onAny(e, t) {
			const s = this;
			if (!s.eventsListeners || s.destroyed) return s;
			if ("function" != typeof e) return s;
			const a = t ? "unshift" : "push";
			return (
				s.eventsAnyListeners.indexOf(e) < 0 &&
					s.eventsAnyListeners[a](e),
				s
			);
		},
		offAny(e) {
			const t = this;
			if (!t.eventsListeners || t.destroyed) return t;
			if (!t.eventsAnyListeners) return t;
			const s = t.eventsAnyListeners.indexOf(e);
			return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
		},
		off(e, t) {
			const s = this;
			return !s.eventsListeners || s.destroyed
				? s
				: s.eventsListeners
				? (e.split(" ").forEach((e) => {
						void 0 === t
							? (s.eventsListeners[e] = [])
							: s.eventsListeners[e] &&
							  s.eventsListeners[e].forEach((a, i) => {
									(a === t ||
										(a.__emitterProxy &&
											a.__emitterProxy === t)) &&
										s.eventsListeners[e].splice(i, 1);
							  });
				  }),
				  s)
				: s;
		},
		emit() {
			const e = this;
			if (!e.eventsListeners || e.destroyed) return e;
			if (!e.eventsListeners) return e;
			let t, s, a;
			for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
				r[n] = arguments[n];
			"string" == typeof r[0] || Array.isArray(r[0])
				? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
				: ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
				s.unshift(a);
			return (
				(Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
					e.eventsAnyListeners &&
						e.eventsAnyListeners.length &&
						e.eventsAnyListeners.forEach((e) => {
							e.apply(a, [t, ...s]);
						}),
						e.eventsListeners &&
							e.eventsListeners[t] &&
							e.eventsListeners[t].forEach((e) => {
								e.apply(a, s);
							});
				}),
				e
			);
		},
	};
	var S = {
		updateSize: function () {
			const e = this;
			let t, s;
			const a = e.$el;
			(t =
				void 0 !== e.params.width && null !== e.params.width
					? e.params.width
					: a[0].clientWidth),
				(s =
					void 0 !== e.params.height && null !== e.params.height
						? e.params.height
						: a[0].clientHeight),
				(0 === t && e.isHorizontal()) ||
					(0 === s && e.isVertical()) ||
					((t =
						t -
						parseInt(a.css("padding-left") || 0, 10) -
						parseInt(a.css("padding-right") || 0, 10)),
					(s =
						s -
						parseInt(a.css("padding-top") || 0, 10) -
						parseInt(a.css("padding-bottom") || 0, 10)),
					Number.isNaN(t) && (t = 0),
					Number.isNaN(s) && (s = 0),
					Object.assign(e, {
						width: t,
						height: s,
						size: e.isHorizontal() ? t : s,
					}));
		},
		updateSlides: function () {
			const e = this;
			function t(t) {
				return e.isHorizontal()
					? t
					: {
							width: "height",
							"margin-top": "margin-left",
							"margin-bottom ": "margin-right",
							"margin-left": "margin-top",
							"margin-right": "margin-bottom",
							"padding-left": "padding-top",
							"padding-right": "padding-bottom",
							marginRight: "marginBottom",
					  }[t];
			}
			function s(e, s) {
				return parseFloat(e.getPropertyValue(t(s)) || 0);
			}
			const a = e.params,
				{ $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e,
				o = e.virtual && a.virtual.enabled,
				d = o ? e.virtual.slides.length : e.slides.length,
				c = i.children(`.${e.params.slideClass}`),
				p = o ? e.virtual.slides.length : c.length;
			let u = [];
			const h = [],
				m = [];
			let f = a.slidesOffsetBefore;
			"function" == typeof f && (f = a.slidesOffsetBefore.call(e));
			let g = a.slidesOffsetAfter;
			"function" == typeof g && (g = a.slidesOffsetAfter.call(e));
			const w = e.snapGrid.length,
				b = e.slidesGrid.length;
			let x = a.spaceBetween,
				y = -f,
				E = 0,
				C = 0;
			if (void 0 === r) return;
			"string" == typeof x &&
				x.indexOf("%") >= 0 &&
				(x = (parseFloat(x.replace("%", "")) / 100) * r),
				(e.virtualSize = -x),
				n
					? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
					: c.css({
							marginRight: "",
							marginBottom: "",
							marginTop: "",
					  }),
				a.centeredSlides &&
					a.cssMode &&
					(v(e.wrapperEl, "--swiper-centered-offset-before", ""),
					v(e.wrapperEl, "--swiper-centered-offset-after", ""));
			const T = a.grid && a.grid.rows > 1 && e.grid;
			let $;
			T && e.grid.initSlides(p);
			const S =
				"auto" === a.slidesPerView &&
				a.breakpoints &&
				Object.keys(a.breakpoints).filter(
					(e) => void 0 !== a.breakpoints[e].slidesPerView
				).length > 0;
			for (let i = 0; i < p; i += 1) {
				$ = 0;
				const n = c.eq(i);
				if (
					(T && e.grid.updateSlide(i, n, p, t),
					"none" !== n.css("display"))
				) {
					if ("auto" === a.slidesPerView) {
						S && (c[i].style[t("width")] = "");
						const r = getComputedStyle(n[0]),
							l = n[0].style.transform,
							o = n[0].style.webkitTransform;
						if (
							(l && (n[0].style.transform = "none"),
							o && (n[0].style.webkitTransform = "none"),
							a.roundLengths)
						)
							$ = e.isHorizontal()
								? n.outerWidth(!0)
								: n.outerHeight(!0);
						else {
							const e = s(r, "width"),
								t = s(r, "padding-left"),
								a = s(r, "padding-right"),
								i = s(r, "margin-left"),
								l = s(r, "margin-right"),
								o = r.getPropertyValue("box-sizing");
							if (o && "border-box" === o) $ = e + i + l;
							else {
								const { clientWidth: s, offsetWidth: r } = n[0];
								$ = e + t + a + i + l + (r - s);
							}
						}
						l && (n[0].style.transform = l),
							o && (n[0].style.webkitTransform = o),
							a.roundLengths && ($ = Math.floor($));
					} else
						($ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView),
							a.roundLengths && ($ = Math.floor($)),
							c[i] && (c[i].style[t("width")] = `${$}px`);
					c[i] && (c[i].swiperSlideSize = $),
						m.push($),
						a.centeredSlides
							? ((y = y + $ / 2 + E / 2 + x),
							  0 === E && 0 !== i && (y = y - r / 2 - x),
							  0 === i && (y = y - r / 2 - x),
							  Math.abs(y) < 0.001 && (y = 0),
							  a.roundLengths && (y = Math.floor(y)),
							  C % a.slidesPerGroup == 0 && u.push(y),
							  h.push(y))
							: (a.roundLengths && (y = Math.floor(y)),
							  (C - Math.min(e.params.slidesPerGroupSkip, C)) %
									e.params.slidesPerGroup ==
									0 && u.push(y),
							  h.push(y),
							  (y = y + $ + x)),
						(e.virtualSize += $ + x),
						(E = $),
						(C += 1);
				}
			}
			if (
				((e.virtualSize = Math.max(e.virtualSize, r) + g),
				n &&
					l &&
					("slide" === a.effect || "coverflow" === a.effect) &&
					i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
				a.setWrapperSize &&
					i.css({
						[t("width")]: `${e.virtualSize + a.spaceBetween}px`,
					}),
				T && e.grid.updateWrapperSize($, u, t),
				!a.centeredSlides)
			) {
				const t = [];
				for (let s = 0; s < u.length; s += 1) {
					let i = u[s];
					a.roundLengths && (i = Math.floor(i)),
						u[s] <= e.virtualSize - r && t.push(i);
				}
				(u = t),
					Math.floor(e.virtualSize - r) -
						Math.floor(u[u.length - 1]) >
						1 && u.push(e.virtualSize - r);
			}
			if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
				const s =
					e.isHorizontal() && n ? "marginLeft" : t("marginRight");
				c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({
					[s]: `${x}px`,
				});
			}
			if (a.centeredSlides && a.centeredSlidesBounds) {
				let e = 0;
				m.forEach((t) => {
					e += t + (a.spaceBetween ? a.spaceBetween : 0);
				}),
					(e -= a.spaceBetween);
				const t = e - r;
				u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
			}
			if (a.centerInsufficientSlides) {
				let e = 0;
				if (
					(m.forEach((t) => {
						e += t + (a.spaceBetween ? a.spaceBetween : 0);
					}),
					(e -= a.spaceBetween),
					e < r)
				) {
					const t = (r - e) / 2;
					u.forEach((e, s) => {
						u[s] = e - t;
					}),
						h.forEach((e, s) => {
							h[s] = e + t;
						});
				}
			}
			if (
				(Object.assign(e, {
					slides: c,
					snapGrid: u,
					slidesGrid: h,
					slidesSizesGrid: m,
				}),
				a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
			) {
				v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
					v(
						e.wrapperEl,
						"--swiper-centered-offset-after",
						e.size / 2 - m[m.length - 1] / 2 + "px"
					);
				const t = -e.snapGrid[0],
					s = -e.slidesGrid[0];
				(e.snapGrid = e.snapGrid.map((e) => e + t)),
					(e.slidesGrid = e.slidesGrid.map((e) => e + s));
			}
			if (
				(p !== d && e.emit("slidesLengthChange"),
				u.length !== w &&
					(e.params.watchOverflow && e.checkOverflow(),
					e.emit("snapGridLengthChange")),
				h.length !== b && e.emit("slidesGridLengthChange"),
				a.watchSlidesProgress && e.updateSlidesOffset(),
				!(
					o ||
					a.cssMode ||
					("slide" !== a.effect && "fade" !== a.effect)
				))
			) {
				const t = `${a.containerModifierClass}backface-hidden`,
					s = e.$el.hasClass(t);
				p <= a.maxBackfaceHiddenSlides
					? s || e.$el.addClass(t)
					: s && e.$el.removeClass(t);
			}
		},
		updateAutoHeight: function (e) {
			const t = this,
				s = [],
				a = t.virtual && t.params.virtual.enabled;
			let i,
				r = 0;
			"number" == typeof e
				? t.setTransition(e)
				: !0 === e && t.setTransition(t.params.speed);
			const n = (e) =>
				a
					? t.slides.filter(
							(t) =>
								parseInt(
									t.getAttribute("data-swiper-slide-index"),
									10
								) === e
					  )[0]
					: t.slides.eq(e)[0];
			if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
				if (t.params.centeredSlides)
					(t.visibleSlides || d([])).each((e) => {
						s.push(e);
					});
				else
					for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
						const e = t.activeIndex + i;
						if (e > t.slides.length && !a) break;
						s.push(n(e));
					}
			else s.push(n(t.activeIndex));
			for (i = 0; i < s.length; i += 1)
				if (void 0 !== s[i]) {
					const e = s[i].offsetHeight;
					r = e > r ? e : r;
				}
			(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
		},
		updateSlidesOffset: function () {
			const e = this,
				t = e.slides;
			for (let s = 0; s < t.length; s += 1)
				t[s].swiperSlideOffset = e.isHorizontal()
					? t[s].offsetLeft
					: t[s].offsetTop;
		},
		updateSlidesProgress: function (e) {
			void 0 === e && (e = (this && this.translate) || 0);
			const t = this,
				s = t.params,
				{ slides: a, rtlTranslate: i, snapGrid: r } = t;
			if (0 === a.length) return;
			void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
			let n = -e;
			i && (n = e),
				a.removeClass(s.slideVisibleClass),
				(t.visibleSlidesIndexes = []),
				(t.visibleSlides = []);
			for (let e = 0; e < a.length; e += 1) {
				const l = a[e];
				let o = l.swiperSlideOffset;
				s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
				const d =
						(n + (s.centeredSlides ? t.minTranslate() : 0) - o) /
						(l.swiperSlideSize + s.spaceBetween),
					c =
						(n -
							r[0] +
							(s.centeredSlides ? t.minTranslate() : 0) -
							o) /
						(l.swiperSlideSize + s.spaceBetween),
					p = -(n - o),
					u = p + t.slidesSizesGrid[e];
				((p >= 0 && p < t.size - 1) ||
					(u > 1 && u <= t.size) ||
					(p <= 0 && u >= t.size)) &&
					(t.visibleSlides.push(l),
					t.visibleSlidesIndexes.push(e),
					a.eq(e).addClass(s.slideVisibleClass)),
					(l.progress = i ? -d : d),
					(l.originalProgress = i ? -c : c);
			}
			t.visibleSlides = d(t.visibleSlides);
		},
		updateProgress: function (e) {
			const t = this;
			if (void 0 === e) {
				const s = t.rtlTranslate ? -1 : 1;
				e = (t && t.translate && t.translate * s) || 0;
			}
			const s = t.params,
				a = t.maxTranslate() - t.minTranslate();
			let { progress: i, isBeginning: r, isEnd: n } = t;
			const l = r,
				o = n;
			0 === a
				? ((i = 0), (r = !0), (n = !0))
				: ((i = (e - t.minTranslate()) / a),
				  (r = i <= 0),
				  (n = i >= 1)),
				Object.assign(t, { progress: i, isBeginning: r, isEnd: n }),
				(s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
					t.updateSlidesProgress(e),
				r && !l && t.emit("reachBeginning toEdge"),
				n && !o && t.emit("reachEnd toEdge"),
				((l && !r) || (o && !n)) && t.emit("fromEdge"),
				t.emit("progress", i);
		},
		updateSlidesClasses: function () {
			const e = this,
				{
					slides: t,
					params: s,
					$wrapperEl: a,
					activeIndex: i,
					realIndex: r,
				} = e,
				n = e.virtual && s.virtual.enabled;
			let l;
			t.removeClass(
				`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
			),
				(l = n
					? e.$wrapperEl.find(
							`.${s.slideClass}[data-swiper-slide-index="${i}"]`
					  )
					: t.eq(i)),
				l.addClass(s.slideActiveClass),
				s.loop &&
					(l.hasClass(s.slideDuplicateClass)
						? a
								.children(
									`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
								)
								.addClass(s.slideDuplicateActiveClass)
						: a
								.children(
									`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
								)
								.addClass(s.slideDuplicateActiveClass));
			let o = l
				.nextAll(`.${s.slideClass}`)
				.eq(0)
				.addClass(s.slideNextClass);
			s.loop &&
				0 === o.length &&
				((o = t.eq(0)), o.addClass(s.slideNextClass));
			let d = l
				.prevAll(`.${s.slideClass}`)
				.eq(0)
				.addClass(s.slidePrevClass);
			s.loop &&
				0 === d.length &&
				((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
				s.loop &&
					(o.hasClass(s.slideDuplicateClass)
						? a
								.children(
									`.${s.slideClass}:not(.${
										s.slideDuplicateClass
									})[data-swiper-slide-index="${o.attr(
										"data-swiper-slide-index"
									)}"]`
								)
								.addClass(s.slideDuplicateNextClass)
						: a
								.children(
									`.${s.slideClass}.${
										s.slideDuplicateClass
									}[data-swiper-slide-index="${o.attr(
										"data-swiper-slide-index"
									)}"]`
								)
								.addClass(s.slideDuplicateNextClass),
					d.hasClass(s.slideDuplicateClass)
						? a
								.children(
									`.${s.slideClass}:not(.${
										s.slideDuplicateClass
									})[data-swiper-slide-index="${d.attr(
										"data-swiper-slide-index"
									)}"]`
								)
								.addClass(s.slideDuplicatePrevClass)
						: a
								.children(
									`.${s.slideClass}.${
										s.slideDuplicateClass
									}[data-swiper-slide-index="${d.attr(
										"data-swiper-slide-index"
									)}"]`
								)
								.addClass(s.slideDuplicatePrevClass)),
				e.emitSlidesClasses();
		},
		updateActiveIndex: function (e) {
			const t = this,
				s = t.rtlTranslate ? t.translate : -t.translate,
				{
					slidesGrid: a,
					snapGrid: i,
					params: r,
					activeIndex: n,
					realIndex: l,
					snapIndex: o,
				} = t;
			let d,
				c = e;
			if (void 0 === c) {
				for (let e = 0; e < a.length; e += 1)
					void 0 !== a[e + 1]
						? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
							? (c = e)
							: s >= a[e] && s < a[e + 1] && (c = e + 1)
						: s >= a[e] && (c = e);
				r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
			}
			if (i.indexOf(s) >= 0) d = i.indexOf(s);
			else {
				const e = Math.min(r.slidesPerGroupSkip, c);
				d = e + Math.floor((c - e) / r.slidesPerGroup);
			}
			if ((d >= i.length && (d = i.length - 1), c === n))
				return void (
					d !== o && ((t.snapIndex = d), t.emit("snapIndexChange"))
				);
			const p = parseInt(
				t.slides.eq(c).attr("data-swiper-slide-index") || c,
				10
			);
			Object.assign(t, {
				snapIndex: d,
				realIndex: p,
				previousIndex: n,
				activeIndex: c,
			}),
				t.emit("activeIndexChange"),
				t.emit("snapIndexChange"),
				l !== p && t.emit("realIndexChange"),
				(t.initialized || t.params.runCallbacksOnInit) &&
					t.emit("slideChange");
		},
		updateClickedSlide: function (e) {
			const t = this,
				s = t.params,
				a = d(e).closest(`.${s.slideClass}`)[0];
			let i,
				r = !1;
			if (a)
				for (let e = 0; e < t.slides.length; e += 1)
					if (t.slides[e] === a) {
						(r = !0), (i = e);
						break;
					}
			if (!a || !r)
				return (
					(t.clickedSlide = void 0), void (t.clickedIndex = void 0)
				);
			(t.clickedSlide = a),
				t.virtual && t.params.virtual.enabled
					? (t.clickedIndex = parseInt(
							d(a).attr("data-swiper-slide-index"),
							10
					  ))
					: (t.clickedIndex = i),
				s.slideToClickedSlide &&
					void 0 !== t.clickedIndex &&
					t.clickedIndex !== t.activeIndex &&
					t.slideToClickedSlide();
		},
	};
	var M = {
		getTranslate: function (e) {
			void 0 === e && (e = this.isHorizontal() ? "x" : "y");
			const {
				params: t,
				rtlTranslate: s,
				translate: a,
				$wrapperEl: i,
			} = this;
			if (t.virtualTranslate) return s ? -a : a;
			if (t.cssMode) return a;
			let r = h(i[0], e);
			return s && (r = -r), r || 0;
		},
		setTranslate: function (e, t) {
			const s = this,
				{
					rtlTranslate: a,
					params: i,
					$wrapperEl: r,
					wrapperEl: n,
					progress: l,
				} = s;
			let o,
				d = 0,
				c = 0;
			s.isHorizontal() ? (d = a ? -e : e) : (c = e),
				i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
				i.cssMode
					? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
							s.isHorizontal() ? -d : -c)
					: i.virtualTranslate ||
					  r.transform(`translate3d(${d}px, ${c}px, 0px)`),
				(s.previousTranslate = s.translate),
				(s.translate = s.isHorizontal() ? d : c);
			const p = s.maxTranslate() - s.minTranslate();
			(o = 0 === p ? 0 : (e - s.minTranslate()) / p),
				o !== l && s.updateProgress(e),
				s.emit("setTranslate", s.translate, t);
		},
		minTranslate: function () {
			return -this.snapGrid[0];
		},
		maxTranslate: function () {
			return -this.snapGrid[this.snapGrid.length - 1];
		},
		translateTo: function (e, t, s, a, i) {
			void 0 === e && (e = 0),
				void 0 === t && (t = this.params.speed),
				void 0 === s && (s = !0),
				void 0 === a && (a = !0);
			const r = this,
				{ params: n, wrapperEl: l } = r;
			if (r.animating && n.preventInteractionOnTransition) return !1;
			const o = r.minTranslate(),
				d = r.maxTranslate();
			let c;
			if (
				((c = a && e > o ? o : a && e < d ? d : e),
				r.updateProgress(c),
				n.cssMode)
			) {
				const e = r.isHorizontal();
				if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
				else {
					if (!r.support.smoothScroll)
						return (
							w({
								swiper: r,
								targetPosition: -c,
								side: e ? "left" : "top",
							}),
							!0
						);
					l.scrollTo({
						[e ? "left" : "top"]: -c,
						behavior: "smooth",
					});
				}
				return !0;
			}
			return (
				0 === t
					? (r.setTransition(0),
					  r.setTranslate(c),
					  s &&
							(r.emit("beforeTransitionStart", t, i),
							r.emit("transitionEnd")))
					: (r.setTransition(t),
					  r.setTranslate(c),
					  s &&
							(r.emit("beforeTransitionStart", t, i),
							r.emit("transitionStart")),
					  r.animating ||
							((r.animating = !0),
							r.onTranslateToWrapperTransitionEnd ||
								(r.onTranslateToWrapperTransitionEnd =
									function (e) {
										r &&
											!r.destroyed &&
											e.target === this &&
											(r.$wrapperEl[0].removeEventListener(
												"transitionend",
												r.onTranslateToWrapperTransitionEnd
											),
											r.$wrapperEl[0].removeEventListener(
												"webkitTransitionEnd",
												r.onTranslateToWrapperTransitionEnd
											),
											(r.onTranslateToWrapperTransitionEnd =
												null),
											delete r.onTranslateToWrapperTransitionEnd,
											s && r.emit("transitionEnd"));
									}),
							r.$wrapperEl[0].addEventListener(
								"transitionend",
								r.onTranslateToWrapperTransitionEnd
							),
							r.$wrapperEl[0].addEventListener(
								"webkitTransitionEnd",
								r.onTranslateToWrapperTransitionEnd
							))),
				!0
			);
		},
	};
	function P(e) {
		let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
		const { activeIndex: r, previousIndex: n } = t;
		let l = a;
		if (
			(l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
			t.emit(`transition${i}`),
			s && r !== n)
		) {
			if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
			t.emit(`slideChangeTransition${i}`),
				"next" === l
					? t.emit(`slideNextTransition${i}`)
					: t.emit(`slidePrevTransition${i}`);
		}
	}
	var k = {
		slideTo: function (e, t, s, a, i) {
			if (
				(void 0 === e && (e = 0),
				void 0 === t && (t = this.params.speed),
				void 0 === s && (s = !0),
				"number" != typeof e && "string" != typeof e)
			)
				throw new Error(
					`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
				);
			if ("string" == typeof e) {
				const t = parseInt(e, 10);
				if (!isFinite(t))
					throw new Error(
						`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
					);
				e = t;
			}
			const r = this;
			let n = e;
			n < 0 && (n = 0);
			const {
				params: l,
				snapGrid: o,
				slidesGrid: d,
				previousIndex: c,
				activeIndex: p,
				rtlTranslate: u,
				wrapperEl: h,
				enabled: m,
			} = r;
			if (
				(r.animating && l.preventInteractionOnTransition) ||
				(!m && !a && !i)
			)
				return !1;
			const f = Math.min(r.params.slidesPerGroupSkip, n);
			let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
			g >= o.length && (g = o.length - 1);
			const v = -o[g];
			if (l.normalizeSlideIndex)
				for (let e = 0; e < d.length; e += 1) {
					const t = -Math.floor(100 * v),
						s = Math.floor(100 * d[e]),
						a = Math.floor(100 * d[e + 1]);
					void 0 !== d[e + 1]
						? t >= s && t < a - (a - s) / 2
							? (n = e)
							: t >= s && t < a && (n = e + 1)
						: t >= s && (n = e);
				}
			if (r.initialized && n !== p) {
				if (
					!r.allowSlideNext &&
					v < r.translate &&
					v < r.minTranslate()
				)
					return !1;
				if (
					!r.allowSlidePrev &&
					v > r.translate &&
					v > r.maxTranslate() &&
					(p || 0) !== n
				)
					return !1;
			}
			let b;
			if (
				(n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
				r.updateProgress(v),
				(b = n > p ? "next" : n < p ? "prev" : "reset"),
				(u && -v === r.translate) || (!u && v === r.translate))
			)
				return (
					r.updateActiveIndex(n),
					l.autoHeight && r.updateAutoHeight(),
					r.updateSlidesClasses(),
					"slide" !== l.effect && r.setTranslate(v),
					"reset" !== b &&
						(r.transitionStart(s, b), r.transitionEnd(s, b)),
					!1
				);
			if (l.cssMode) {
				const e = r.isHorizontal(),
					s = u ? v : -v;
				if (0 === t) {
					const t = r.virtual && r.params.virtual.enabled;
					t &&
						((r.wrapperEl.style.scrollSnapType = "none"),
						(r._immediateVirtual = !0)),
						(h[e ? "scrollLeft" : "scrollTop"] = s),
						t &&
							requestAnimationFrame(() => {
								(r.wrapperEl.style.scrollSnapType = ""),
									(r._swiperImmediateVirtual = !1);
							});
				} else {
					if (!r.support.smoothScroll)
						return (
							w({
								swiper: r,
								targetPosition: s,
								side: e ? "left" : "top",
							}),
							!0
						);
					h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
				}
				return !0;
			}
			return (
				r.setTransition(t),
				r.setTranslate(v),
				r.updateActiveIndex(n),
				r.updateSlidesClasses(),
				r.emit("beforeTransitionStart", t, a),
				r.transitionStart(s, b),
				0 === t
					? r.transitionEnd(s, b)
					: r.animating ||
					  ((r.animating = !0),
					  r.onSlideToWrapperTransitionEnd ||
							(r.onSlideToWrapperTransitionEnd = function (e) {
								r &&
									!r.destroyed &&
									e.target === this &&
									(r.$wrapperEl[0].removeEventListener(
										"transitionend",
										r.onSlideToWrapperTransitionEnd
									),
									r.$wrapperEl[0].removeEventListener(
										"webkitTransitionEnd",
										r.onSlideToWrapperTransitionEnd
									),
									(r.onSlideToWrapperTransitionEnd = null),
									delete r.onSlideToWrapperTransitionEnd,
									r.transitionEnd(s, b));
							}),
					  r.$wrapperEl[0].addEventListener(
							"transitionend",
							r.onSlideToWrapperTransitionEnd
					  ),
					  r.$wrapperEl[0].addEventListener(
							"webkitTransitionEnd",
							r.onSlideToWrapperTransitionEnd
					  )),
				!0
			);
		},
		slideToLoop: function (e, t, s, a) {
			if (
				(void 0 === e && (e = 0),
				void 0 === t && (t = this.params.speed),
				void 0 === s && (s = !0),
				"string" == typeof e)
			) {
				const t = parseInt(e, 10);
				if (!isFinite(t))
					throw new Error(
						`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
					);
				e = t;
			}
			const i = this;
			let r = e;
			return (
				i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
			);
		},
		slideNext: function (e, t, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			const a = this,
				{ animating: i, enabled: r, params: n } = a;
			if (!r) return a;
			let l = n.slidesPerGroup;
			"auto" === n.slidesPerView &&
				1 === n.slidesPerGroup &&
				n.slidesPerGroupAuto &&
				(l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
			const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
			if (n.loop) {
				if (i && n.loopPreventsSlide) return !1;
				a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
			}
			return n.rewind && a.isEnd
				? a.slideTo(0, e, t, s)
				: a.slideTo(a.activeIndex + o, e, t, s);
		},
		slidePrev: function (e, t, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			const a = this,
				{
					params: i,
					animating: r,
					snapGrid: n,
					slidesGrid: l,
					rtlTranslate: o,
					enabled: d,
				} = a;
			if (!d) return a;
			if (i.loop) {
				if (r && i.loopPreventsSlide) return !1;
				a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
			}
			function c(e) {
				return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
			}
			const p = c(o ? a.translate : -a.translate),
				u = n.map((e) => c(e));
			let h = n[u.indexOf(p) - 1];
			if (void 0 === h && i.cssMode) {
				let e;
				n.forEach((t, s) => {
					p >= t && (e = s);
				}),
					void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
			}
			let m = 0;
			if (
				(void 0 !== h &&
					((m = l.indexOf(h)),
					m < 0 && (m = a.activeIndex - 1),
					"auto" === i.slidesPerView &&
						1 === i.slidesPerGroup &&
						i.slidesPerGroupAuto &&
						((m = m - a.slidesPerViewDynamic("previous", !0) + 1),
						(m = Math.max(m, 0)))),
				i.rewind && a.isBeginning)
			) {
				const i =
					a.params.virtual && a.params.virtual.enabled && a.virtual
						? a.virtual.slides.length - 1
						: a.slides.length - 1;
				return a.slideTo(i, e, t, s);
			}
			return a.slideTo(m, e, t, s);
		},
		slideReset: function (e, t, s) {
			return (
				void 0 === e && (e = this.params.speed),
				void 0 === t && (t = !0),
				this.slideTo(this.activeIndex, e, t, s)
			);
		},
		slideToClosest: function (e, t, s, a) {
			void 0 === e && (e = this.params.speed),
				void 0 === t && (t = !0),
				void 0 === a && (a = 0.5);
			const i = this;
			let r = i.activeIndex;
			const n = Math.min(i.params.slidesPerGroupSkip, r),
				l = n + Math.floor((r - n) / i.params.slidesPerGroup),
				o = i.rtlTranslate ? i.translate : -i.translate;
			if (o >= i.snapGrid[l]) {
				const e = i.snapGrid[l];
				o - e > (i.snapGrid[l + 1] - e) * a &&
					(r += i.params.slidesPerGroup);
			} else {
				const e = i.snapGrid[l - 1];
				o - e <= (i.snapGrid[l] - e) * a &&
					(r -= i.params.slidesPerGroup);
			}
			return (
				(r = Math.max(r, 0)),
				(r = Math.min(r, i.slidesGrid.length - 1)),
				i.slideTo(r, e, t, s)
			);
		},
		slideToClickedSlide: function () {
			const e = this,
				{ params: t, $wrapperEl: s } = e,
				a =
					"auto" === t.slidesPerView
						? e.slidesPerViewDynamic()
						: t.slidesPerView;
			let i,
				r = e.clickedIndex;
			if (t.loop) {
				if (e.animating) return;
				(i = parseInt(
					d(e.clickedSlide).attr("data-swiper-slide-index"),
					10
				)),
					t.centeredSlides
						? r < e.loopedSlides - a / 2 ||
						  r > e.slides.length - e.loopedSlides + a / 2
							? (e.loopFix(),
							  (r = s
									.children(
										`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
									)
									.eq(0)
									.index()),
							  p(() => {
									e.slideTo(r);
							  }))
							: e.slideTo(r)
						: r > e.slides.length - a
						? (e.loopFix(),
						  (r = s
								.children(
									`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
								)
								.eq(0)
								.index()),
						  p(() => {
								e.slideTo(r);
						  }))
						: e.slideTo(r);
			} else e.slideTo(r);
		},
	};
	var z = {
		loopCreate: function () {
			const e = this,
				t = a(),
				{ params: s, $wrapperEl: i } = e,
				r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
			r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
			let n = r.children(`.${s.slideClass}`);
			if (s.loopFillGroupWithBlank) {
				const e = s.slidesPerGroup - (n.length % s.slidesPerGroup);
				if (e !== s.slidesPerGroup) {
					for (let a = 0; a < e; a += 1) {
						const e = d(t.createElement("div")).addClass(
							`${s.slideClass} ${s.slideBlankClass}`
						);
						r.append(e);
					}
					n = r.children(`.${s.slideClass}`);
				}
			}
			"auto" !== s.slidesPerView ||
				s.loopedSlides ||
				(s.loopedSlides = n.length),
				(e.loopedSlides = Math.ceil(
					parseFloat(s.loopedSlides || s.slidesPerView, 10)
				)),
				(e.loopedSlides += s.loopAdditionalSlides),
				e.loopedSlides > n.length &&
					e.params.loopedSlidesLimit &&
					(e.loopedSlides = n.length);
			const l = [],
				o = [];
			n.each((e, t) => {
				d(e).attr("data-swiper-slide-index", t);
			});
			for (let t = 0; t < e.loopedSlides; t += 1) {
				const e = t - Math.floor(t / n.length) * n.length;
				o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0]);
			}
			for (let e = 0; e < o.length; e += 1)
				r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
			for (let e = l.length - 1; e >= 0; e -= 1)
				r.prepend(
					d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass)
				);
		},
		loopFix: function () {
			const e = this;
			e.emit("beforeLoopFix");
			const {
				activeIndex: t,
				slides: s,
				loopedSlides: a,
				allowSlidePrev: i,
				allowSlideNext: r,
				snapGrid: n,
				rtlTranslate: l,
			} = e;
			let o;
			(e.allowSlidePrev = !0), (e.allowSlideNext = !0);
			const d = -n[t] - e.getTranslate();
			if (t < a) {
				(o = s.length - 3 * a + t), (o += a);
				e.slideTo(o, 0, !1, !0) &&
					0 !== d &&
					e.setTranslate((l ? -e.translate : e.translate) - d);
			} else if (t >= s.length - a) {
				(o = -s.length + t + a), (o += a);
				e.slideTo(o, 0, !1, !0) &&
					0 !== d &&
					e.setTranslate((l ? -e.translate : e.translate) - d);
			}
			(e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
		},
		loopDestroy: function () {
			const { $wrapperEl: e, params: t, slides: s } = this;
			e
				.children(
					`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
				)
				.remove(),
				s.removeAttr("data-swiper-slide-index");
		},
	};
	function L(e) {
		const t = this,
			s = a(),
			i = r(),
			n = t.touchEventsData,
			{ params: l, touches: o, enabled: c } = t;
		if (!c) return;
		if (t.animating && l.preventInteractionOnTransition) return;
		!t.animating && l.cssMode && l.loop && t.loopFix();
		let p = e;
		p.originalEvent && (p = p.originalEvent);
		let h = d(p.target);
		if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
			return;
		if (
			((n.isTouchEvent = "touchstart" === p.type),
			!n.isTouchEvent && "which" in p && 3 === p.which)
		)
			return;
		if (!n.isTouchEvent && "button" in p && p.button > 0) return;
		if (n.isTouched && n.isMoved) return;
		const m = !!l.noSwipingClass && "" !== l.noSwipingClass,
			f = e.composedPath ? e.composedPath() : e.path;
		m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
		const g = l.noSwipingSelector
				? l.noSwipingSelector
				: `.${l.noSwipingClass}`,
			v = !(!p.target || !p.target.shadowRoot);
		if (
			l.noSwiping &&
			(v
				? (function (e, t) {
						return (
							void 0 === t && (t = this),
							(function t(s) {
								if (!s || s === a() || s === r()) return null;
								s.assignedSlot && (s = s.assignedSlot);
								const i = s.closest(e);
								return i || s.getRootNode
									? i || t(s.getRootNode().host)
									: null;
							})(t)
						);
				  })(g, h[0])
				: h.closest(g)[0])
		)
			return void (t.allowClick = !0);
		if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
		(o.currentX =
			"touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX),
			(o.currentY =
				"touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY);
		const w = o.currentX,
			b = o.currentY,
			x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
			y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
		if (x && (w <= y || w >= i.innerWidth - y)) {
			if ("prevent" !== x) return;
			e.preventDefault();
		}
		if (
			(Object.assign(n, {
				isTouched: !0,
				isMoved: !1,
				allowTouchCallbacks: !0,
				isScrolling: void 0,
				startMoving: void 0,
			}),
			(o.startX = w),
			(o.startY = b),
			(n.touchStartTime = u()),
			(t.allowClick = !0),
			t.updateSize(),
			(t.swipeDirection = void 0),
			l.threshold > 0 && (n.allowThresholdMove = !1),
			"touchstart" !== p.type)
		) {
			let e = !0;
			h.is(n.focusableElements) &&
				((e = !1), "SELECT" === h[0].nodeName && (n.isTouched = !1)),
				s.activeElement &&
					d(s.activeElement).is(n.focusableElements) &&
					s.activeElement !== h[0] &&
					s.activeElement.blur();
			const a = e && t.allowTouchMove && l.touchStartPreventDefault;
			(!l.touchStartForcePreventDefault && !a) ||
				h[0].isContentEditable ||
				p.preventDefault();
		}
		t.params.freeMode &&
			t.params.freeMode.enabled &&
			t.freeMode &&
			t.animating &&
			!l.cssMode &&
			t.freeMode.onTouchStart(),
			t.emit("touchStart", p);
	}
	function O(e) {
		const t = a(),
			s = this,
			i = s.touchEventsData,
			{ params: r, touches: n, rtlTranslate: l, enabled: o } = s;
		if (!o) return;
		let c = e;
		if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
			return void (
				i.startMoving &&
				i.isScrolling &&
				s.emit("touchMoveOpposite", c)
			);
		if (i.isTouchEvent && "touchmove" !== c.type) return;
		const p =
				"touchmove" === c.type &&
				c.targetTouches &&
				(c.targetTouches[0] || c.changedTouches[0]),
			h = "touchmove" === c.type ? p.pageX : c.pageX,
			m = "touchmove" === c.type ? p.pageY : c.pageY;
		if (c.preventedByNestedSwiper)
			return (n.startX = h), void (n.startY = m);
		if (!s.allowTouchMove)
			return (
				d(c.target).is(i.focusableElements) || (s.allowClick = !1),
				void (
					i.isTouched &&
					(Object.assign(n, {
						startX: h,
						startY: m,
						currentX: h,
						currentY: m,
					}),
					(i.touchStartTime = u()))
				)
			);
		if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
			if (s.isVertical()) {
				if (
					(m < n.startY && s.translate <= s.maxTranslate()) ||
					(m > n.startY && s.translate >= s.minTranslate())
				)
					return (i.isTouched = !1), void (i.isMoved = !1);
			} else if (
				(h < n.startX && s.translate <= s.maxTranslate()) ||
				(h > n.startX && s.translate >= s.minTranslate())
			)
				return;
		if (
			i.isTouchEvent &&
			t.activeElement &&
			c.target === t.activeElement &&
			d(c.target).is(i.focusableElements)
		)
			return (i.isMoved = !0), void (s.allowClick = !1);
		if (
			(i.allowTouchCallbacks && s.emit("touchMove", c),
			c.targetTouches && c.targetTouches.length > 1)
		)
			return;
		(n.currentX = h), (n.currentY = m);
		const f = n.currentX - n.startX,
			g = n.currentY - n.startY;
		if (
			s.params.threshold &&
			Math.sqrt(f ** 2 + g ** 2) < s.params.threshold
		)
			return;
		if (void 0 === i.isScrolling) {
			let e;
			(s.isHorizontal() && n.currentY === n.startY) ||
			(s.isVertical() && n.currentX === n.startX)
				? (i.isScrolling = !1)
				: f * f + g * g >= 25 &&
				  ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
				  (i.isScrolling = s.isHorizontal()
						? e > r.touchAngle
						: 90 - e > r.touchAngle));
		}
		if (
			(i.isScrolling && s.emit("touchMoveOpposite", c),
			void 0 === i.startMoving &&
				((n.currentX === n.startX && n.currentY === n.startY) ||
					(i.startMoving = !0)),
			i.isScrolling)
		)
			return void (i.isTouched = !1);
		if (!i.startMoving) return;
		(s.allowClick = !1),
			!r.cssMode && c.cancelable && c.preventDefault(),
			r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
			i.isMoved ||
				(r.loop && !r.cssMode && s.loopFix(),
				(i.startTranslate = s.getTranslate()),
				s.setTransition(0),
				s.animating &&
					s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
				(i.allowMomentumBounce = !1),
				!r.grabCursor ||
					(!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
					s.setGrabCursor(!0),
				s.emit("sliderFirstMove", c)),
			s.emit("sliderMove", c),
			(i.isMoved = !0);
		let v = s.isHorizontal() ? f : g;
		(n.diff = v),
			(v *= r.touchRatio),
			l && (v = -v),
			(s.swipeDirection = v > 0 ? "prev" : "next"),
			(i.currentTranslate = v + i.startTranslate);
		let w = !0,
			b = r.resistanceRatio;
		if (
			(r.touchReleaseOnEdges && (b = 0),
			v > 0 && i.currentTranslate > s.minTranslate()
				? ((w = !1),
				  r.resistance &&
						(i.currentTranslate =
							s.minTranslate() -
							1 +
							(-s.minTranslate() + i.startTranslate + v) ** b))
				: v < 0 &&
				  i.currentTranslate < s.maxTranslate() &&
				  ((w = !1),
				  r.resistance &&
						(i.currentTranslate =
							s.maxTranslate() +
							1 -
							(s.maxTranslate() - i.startTranslate - v) ** b)),
			w && (c.preventedByNestedSwiper = !0),
			!s.allowSlideNext &&
				"next" === s.swipeDirection &&
				i.currentTranslate < i.startTranslate &&
				(i.currentTranslate = i.startTranslate),
			!s.allowSlidePrev &&
				"prev" === s.swipeDirection &&
				i.currentTranslate > i.startTranslate &&
				(i.currentTranslate = i.startTranslate),
			s.allowSlidePrev ||
				s.allowSlideNext ||
				(i.currentTranslate = i.startTranslate),
			r.threshold > 0)
		) {
			if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
				return void (i.currentTranslate = i.startTranslate);
			if (!i.allowThresholdMove)
				return (
					(i.allowThresholdMove = !0),
					(n.startX = n.currentX),
					(n.startY = n.currentY),
					(i.currentTranslate = i.startTranslate),
					void (n.diff = s.isHorizontal()
						? n.currentX - n.startX
						: n.currentY - n.startY)
				);
		}
		r.followFinger &&
			!r.cssMode &&
			(((r.freeMode && r.freeMode.enabled && s.freeMode) ||
				r.watchSlidesProgress) &&
				(s.updateActiveIndex(), s.updateSlidesClasses()),
			s.params.freeMode &&
				r.freeMode.enabled &&
				s.freeMode &&
				s.freeMode.onTouchMove(),
			s.updateProgress(i.currentTranslate),
			s.setTranslate(i.currentTranslate));
	}
	function I(e) {
		const t = this,
			s = t.touchEventsData,
			{
				params: a,
				touches: i,
				rtlTranslate: r,
				slidesGrid: n,
				enabled: l,
			} = t;
		if (!l) return;
		let o = e;
		if (
			(o.originalEvent && (o = o.originalEvent),
			s.allowTouchCallbacks && t.emit("touchEnd", o),
			(s.allowTouchCallbacks = !1),
			!s.isTouched)
		)
			return (
				s.isMoved && a.grabCursor && t.setGrabCursor(!1),
				(s.isMoved = !1),
				void (s.startMoving = !1)
			);
		a.grabCursor &&
			s.isMoved &&
			s.isTouched &&
			(!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
			t.setGrabCursor(!1);
		const d = u(),
			c = d - s.touchStartTime;
		if (t.allowClick) {
			const e = o.path || (o.composedPath && o.composedPath());
			t.updateClickedSlide((e && e[0]) || o.target),
				t.emit("tap click", o),
				c < 300 &&
					d - s.lastClickTime < 300 &&
					t.emit("doubleTap doubleClick", o);
		}
		if (
			((s.lastClickTime = u()),
			p(() => {
				t.destroyed || (t.allowClick = !0);
			}),
			!s.isTouched ||
				!s.isMoved ||
				!t.swipeDirection ||
				0 === i.diff ||
				s.currentTranslate === s.startTranslate)
		)
			return (
				(s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
			);
		let h;
		if (
			((s.isTouched = !1),
			(s.isMoved = !1),
			(s.startMoving = !1),
			(h = a.followFinger
				? r
					? t.translate
					: -t.translate
				: -s.currentTranslate),
			a.cssMode)
		)
			return;
		if (t.params.freeMode && a.freeMode.enabled)
			return void t.freeMode.onTouchEnd({ currentPos: h });
		let m = 0,
			f = t.slidesSizesGrid[0];
		for (
			let e = 0;
			e < n.length;
			e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
		) {
			const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
			void 0 !== n[e + t]
				? h >= n[e] && h < n[e + t] && ((m = e), (f = n[e + t] - n[e]))
				: h >= n[e] &&
				  ((m = e), (f = n[n.length - 1] - n[n.length - 2]));
		}
		let g = null,
			v = null;
		a.rewind &&
			(t.isBeginning
				? (v =
						t.params.virtual &&
						t.params.virtual.enabled &&
						t.virtual
							? t.virtual.slides.length - 1
							: t.slides.length - 1)
				: t.isEnd && (g = 0));
		const w = (h - n[m]) / f,
			b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
		if (c > a.longSwipesMs) {
			if (!a.longSwipes) return void t.slideTo(t.activeIndex);
			"next" === t.swipeDirection &&
				(w >= a.longSwipesRatio
					? t.slideTo(a.rewind && t.isEnd ? g : m + b)
					: t.slideTo(m)),
				"prev" === t.swipeDirection &&
					(w > 1 - a.longSwipesRatio
						? t.slideTo(m + b)
						: null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio
						? t.slideTo(v)
						: t.slideTo(m));
		} else {
			if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
			t.navigation &&
			(o.target === t.navigation.nextEl ||
				o.target === t.navigation.prevEl)
				? o.target === t.navigation.nextEl
					? t.slideTo(m + b)
					: t.slideTo(m)
				: ("next" === t.swipeDirection &&
						t.slideTo(null !== g ? g : m + b),
				  "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
		}
	}
	function A() {
		const e = this,
			{ params: t, el: s } = e;
		if (s && 0 === s.offsetWidth) return;
		t.breakpoints && e.setBreakpoint();
		const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
		(e.allowSlideNext = !0),
			(e.allowSlidePrev = !0),
			e.updateSize(),
			e.updateSlides(),
			e.updateSlidesClasses(),
			("auto" === t.slidesPerView || t.slidesPerView > 1) &&
			e.isEnd &&
			!e.isBeginning &&
			!e.params.centeredSlides
				? e.slideTo(e.slides.length - 1, 0, !1, !0)
				: e.slideTo(e.activeIndex, 0, !1, !0),
			e.autoplay &&
				e.autoplay.running &&
				e.autoplay.paused &&
				e.autoplay.run(),
			(e.allowSlidePrev = i),
			(e.allowSlideNext = a),
			e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
	}
	function D(e) {
		const t = this;
		t.enabled &&
			(t.allowClick ||
				(t.params.preventClicks && e.preventDefault(),
				t.params.preventClicksPropagation &&
					t.animating &&
					(e.stopPropagation(), e.stopImmediatePropagation())));
	}
	function G() {
		const e = this,
			{ wrapperEl: t, rtlTranslate: s, enabled: a } = e;
		if (!a) return;
		let i;
		(e.previousTranslate = e.translate),
			e.isHorizontal()
				? (e.translate = -t.scrollLeft)
				: (e.translate = -t.scrollTop),
			0 === e.translate && (e.translate = 0),
			e.updateActiveIndex(),
			e.updateSlidesClasses();
		const r = e.maxTranslate() - e.minTranslate();
		(i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
			i !== e.progress &&
				e.updateProgress(s ? -e.translate : e.translate),
			e.emit("setTranslate", e.translate, !1);
	}
	let N = !1;
	function B() {}
	const H = (e, t) => {
		const s = a(),
			{
				params: i,
				touchEvents: r,
				el: n,
				wrapperEl: l,
				device: o,
				support: d,
			} = e,
			c = !!i.nested,
			p = "on" === t ? "addEventListener" : "removeEventListener",
			u = t;
		if (d.touch) {
			const t = !(
				"touchstart" !== r.start ||
				!d.passiveListener ||
				!i.passiveListeners
			) && { passive: !0, capture: !1 };
			n[p](r.start, e.onTouchStart, t),
				n[p](
					r.move,
					e.onTouchMove,
					d.passiveListener ? { passive: !1, capture: c } : c
				),
				n[p](r.end, e.onTouchEnd, t),
				r.cancel && n[p](r.cancel, e.onTouchEnd, t);
		} else
			n[p](r.start, e.onTouchStart, !1),
				s[p](r.move, e.onTouchMove, c),
				s[p](r.end, e.onTouchEnd, !1);
		(i.preventClicks || i.preventClicksPropagation) &&
			n[p]("click", e.onClick, !0),
			i.cssMode && l[p]("scroll", e.onScroll),
			i.updateOnWindowResize
				? e[u](
						o.ios || o.android
							? "resize orientationchange observerUpdate"
							: "resize observerUpdate",
						A,
						!0
				  )
				: e[u]("observerUpdate", A, !0);
	};
	var X = {
		attachEvents: function () {
			const e = this,
				t = a(),
				{ params: s, support: i } = e;
			(e.onTouchStart = L.bind(e)),
				(e.onTouchMove = O.bind(e)),
				(e.onTouchEnd = I.bind(e)),
				s.cssMode && (e.onScroll = G.bind(e)),
				(e.onClick = D.bind(e)),
				i.touch &&
					!N &&
					(t.addEventListener("touchstart", B), (N = !0)),
				H(e, "on");
		},
		detachEvents: function () {
			H(this, "off");
		},
	};
	const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
	var R = {
		addClasses: function () {
			const e = this,
				{
					classNames: t,
					params: s,
					rtl: a,
					$el: i,
					device: r,
					support: n,
				} = e,
				l = (function (e, t) {
					const s = [];
					return (
						e.forEach((e) => {
							"object" == typeof e
								? Object.keys(e).forEach((a) => {
										e[a] && s.push(t + a);
								  })
								: "string" == typeof e && s.push(t + e);
						}),
						s
					);
				})(
					[
						"initialized",
						s.direction,
						{ "pointer-events": !n.touch },
						{
							"free-mode":
								e.params.freeMode && s.freeMode.enabled,
						},
						{ autoheight: s.autoHeight },
						{ rtl: a },
						{ grid: s.grid && s.grid.rows > 1 },
						{
							"grid-column":
								s.grid &&
								s.grid.rows > 1 &&
								"column" === s.grid.fill,
						},
						{ android: r.android },
						{ ios: r.ios },
						{ "css-mode": s.cssMode },
						{ centered: s.cssMode && s.centeredSlides },
						{ "watch-progress": s.watchSlidesProgress },
					],
					s.containerModifierClass
				);
			t.push(...l),
				i.addClass([...t].join(" ")),
				e.emitContainerClasses();
		},
		removeClasses: function () {
			const { $el: e, classNames: t } = this;
			e.removeClass(t.join(" ")), this.emitContainerClasses();
		},
	};
	var W = {
		init: !0,
		direction: "horizontal",
		touchEventsTarget: "wrapper",
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		enabled: !0,
		focusableElements:
			"input, select, option, textarea, button, video, label",
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: "slide",
		breakpoints: void 0,
		breakpointsBase: "window",
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: 0.5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 0,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: 0.85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		preloadImages: !0,
		updateOnImagesReady: !0,
		loop: !1,
		loopAdditionalSlides: 0,
		loopedSlides: null,
		loopedSlidesLimit: !0,
		loopFillGroupWithBlank: !1,
		loopPreventsSlide: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: "swiper-no-swiping",
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: "swiper-",
		slideClass: "swiper-slide",
		slideBlankClass: "swiper-slide-invisible-blank",
		slideActiveClass: "swiper-slide-active",
		slideDuplicateActiveClass: "swiper-slide-duplicate-active",
		slideVisibleClass: "swiper-slide-visible",
		slideDuplicateClass: "swiper-slide-duplicate",
		slideNextClass: "swiper-slide-next",
		slideDuplicateNextClass: "swiper-slide-duplicate-next",
		slidePrevClass: "swiper-slide-prev",
		slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
		wrapperClass: "swiper-wrapper",
		runCallbacksOnInit: !0,
		_emitClasses: !1,
	};
	function q(e, t) {
		return function (s) {
			void 0 === s && (s = {});
			const a = Object.keys(s)[0],
				i = s[a];
			"object" == typeof i && null !== i
				? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 &&
						!0 === e[a] &&
						(e[a] = { auto: !0 }),
				  a in e && "enabled" in i
						? (!0 === e[a] && (e[a] = { enabled: !0 }),
						  "object" != typeof e[a] ||
								"enabled" in e[a] ||
								(e[a].enabled = !0),
						  e[a] || (e[a] = { enabled: !1 }),
						  g(t, s))
						: g(t, s))
				: g(t, s);
		};
	}
	const j = {
			eventsEmitter: $,
			update: S,
			translate: M,
			transition: {
				setTransition: function (e, t) {
					const s = this;
					s.params.cssMode || s.$wrapperEl.transition(e),
						s.emit("setTransition", e, t);
				},
				transitionStart: function (e, t) {
					void 0 === e && (e = !0);
					const s = this,
						{ params: a } = s;
					a.cssMode ||
						(a.autoHeight && s.updateAutoHeight(),
						P({
							swiper: s,
							runCallbacks: e,
							direction: t,
							step: "Start",
						}));
				},
				transitionEnd: function (e, t) {
					void 0 === e && (e = !0);
					const s = this,
						{ params: a } = s;
					(s.animating = !1),
						a.cssMode ||
							(s.setTransition(0),
							P({
								swiper: s,
								runCallbacks: e,
								direction: t,
								step: "End",
							}));
				},
			},
			slide: k,
			loop: z,
			grabCursor: {
				setGrabCursor: function (e) {
					const t = this;
					if (
						t.support.touch ||
						!t.params.simulateTouch ||
						(t.params.watchOverflow && t.isLocked) ||
						t.params.cssMode
					)
						return;
					const s =
						"container" === t.params.touchEventsTarget
							? t.el
							: t.wrapperEl;
					(s.style.cursor = "move"),
						(s.style.cursor = e ? "grabbing" : "grab");
				},
				unsetGrabCursor: function () {
					const e = this;
					e.support.touch ||
						(e.params.watchOverflow && e.isLocked) ||
						e.params.cssMode ||
						(e[
							"container" === e.params.touchEventsTarget
								? "el"
								: "wrapperEl"
						].style.cursor = "");
				},
			},
			events: X,
			breakpoints: {
				setBreakpoint: function () {
					const e = this,
						{
							activeIndex: t,
							initialized: s,
							loopedSlides: a = 0,
							params: i,
							$el: r,
						} = e,
						n = i.breakpoints;
					if (!n || (n && 0 === Object.keys(n).length)) return;
					const l = e.getBreakpoint(
						n,
						e.params.breakpointsBase,
						e.el
					);
					if (!l || e.currentBreakpoint === l) return;
					const o = (l in n ? n[l] : void 0) || e.originalParams,
						d = Y(e, i),
						c = Y(e, o),
						p = i.enabled;
					d && !c
						? (r.removeClass(
								`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
						  ),
						  e.emitContainerClasses())
						: !d &&
						  c &&
						  (r.addClass(`${i.containerModifierClass}grid`),
						  ((o.grid.fill && "column" === o.grid.fill) ||
								(!o.grid.fill && "column" === i.grid.fill)) &&
								r.addClass(
									`${i.containerModifierClass}grid-column`
								),
						  e.emitContainerClasses()),
						["navigation", "pagination", "scrollbar"].forEach(
							(t) => {
								const s = i[t] && i[t].enabled,
									a = o[t] && o[t].enabled;
								s && !a && e[t].disable(),
									!s && a && e[t].enable();
							}
						);
					const u = o.direction && o.direction !== i.direction,
						h =
							i.loop &&
							(o.slidesPerView !== i.slidesPerView || u);
					u && s && e.changeDirection(), g(e.params, o);
					const m = e.params.enabled;
					Object.assign(e, {
						allowTouchMove: e.params.allowTouchMove,
						allowSlideNext: e.params.allowSlideNext,
						allowSlidePrev: e.params.allowSlidePrev,
					}),
						p && !m ? e.disable() : !p && m && e.enable(),
						(e.currentBreakpoint = l),
						e.emit("_beforeBreakpoint", o),
						h &&
							s &&
							(e.loopDestroy(),
							e.loopCreate(),
							e.updateSlides(),
							e.slideTo(t - a + e.loopedSlides, 0, !1)),
						e.emit("breakpoint", o);
				},
				getBreakpoint: function (e, t, s) {
					if (
						(void 0 === t && (t = "window"),
						!e || ("container" === t && !s))
					)
						return;
					let a = !1;
					const i = r(),
						n = "window" === t ? i.innerHeight : s.clientHeight,
						l = Object.keys(e).map((e) => {
							if ("string" == typeof e && 0 === e.indexOf("@")) {
								const t = parseFloat(e.substr(1));
								return { value: n * t, point: e };
							}
							return { value: e, point: e };
						});
					l.sort(
						(e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)
					);
					for (let e = 0; e < l.length; e += 1) {
						const { point: r, value: n } = l[e];
						"window" === t
							? i.matchMedia(`(min-width: ${n}px)`).matches &&
							  (a = r)
							: n <= s.clientWidth && (a = r);
					}
					return a || "max";
				},
			},
			checkOverflow: {
				checkOverflow: function () {
					const e = this,
						{ isLocked: t, params: s } = e,
						{ slidesOffsetBefore: a } = s;
					if (a) {
						const t = e.slides.length - 1,
							s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
						e.isLocked = e.size > s;
					} else e.isLocked = 1 === e.snapGrid.length;
					!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
						!0 === s.allowSlidePrev &&
							(e.allowSlidePrev = !e.isLocked),
						t && t !== e.isLocked && (e.isEnd = !1),
						t !== e.isLocked &&
							e.emit(e.isLocked ? "lock" : "unlock");
				},
			},
			classes: R,
			images: {
				loadImage: function (e, t, s, a, i, n) {
					const l = r();
					let o;
					function c() {
						n && n();
					}
					d(e).parent("picture")[0] || (e.complete && i)
						? c()
						: t
						? ((o = new l.Image()),
						  (o.onload = c),
						  (o.onerror = c),
						  a && (o.sizes = a),
						  s && (o.srcset = s),
						  t && (o.src = t))
						: c();
				},
				preloadImages: function () {
					const e = this;
					function t() {
						null != e &&
							e &&
							!e.destroyed &&
							(void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
							e.imagesLoaded === e.imagesToLoad.length &&
								(e.params.updateOnImagesReady && e.update(),
								e.emit("imagesReady")));
					}
					e.imagesToLoad = e.$el.find("img");
					for (let s = 0; s < e.imagesToLoad.length; s += 1) {
						const a = e.imagesToLoad[s];
						e.loadImage(
							a,
							a.currentSrc || a.getAttribute("src"),
							a.srcset || a.getAttribute("srcset"),
							a.sizes || a.getAttribute("sizes"),
							!0,
							t
						);
					}
				},
			},
		},
		_ = {};
	class V {
		constructor() {
			let e, t;
			for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
				a[i] = arguments[i];
			if (
				(1 === a.length &&
				a[0].constructor &&
				"Object" === Object.prototype.toString.call(a[0]).slice(8, -1)
					? (t = a[0])
					: ([e, t] = a),
				t || (t = {}),
				(t = g({}, t)),
				e && !t.el && (t.el = e),
				t.el && d(t.el).length > 1)
			) {
				const e = [];
				return (
					d(t.el).each((s) => {
						const a = g({}, t, { el: s });
						e.push(new V(a));
					}),
					e
				);
			}
			const r = this;
			(r.__swiper__ = !0),
				(r.support = E()),
				(r.device = C({ userAgent: t.userAgent })),
				(r.browser = T()),
				(r.eventsListeners = {}),
				(r.eventsAnyListeners = []),
				(r.modules = [...r.__modules__]),
				t.modules &&
					Array.isArray(t.modules) &&
					r.modules.push(...t.modules);
			const n = {};
			r.modules.forEach((e) => {
				e({
					swiper: r,
					extendParams: q(t, n),
					on: r.on.bind(r),
					once: r.once.bind(r),
					off: r.off.bind(r),
					emit: r.emit.bind(r),
				});
			});
			const l = g({}, W, n);
			return (
				(r.params = g({}, l, _, t)),
				(r.originalParams = g({}, r.params)),
				(r.passedParams = g({}, t)),
				r.params &&
					r.params.on &&
					Object.keys(r.params.on).forEach((e) => {
						r.on(e, r.params.on[e]);
					}),
				r.params && r.params.onAny && r.onAny(r.params.onAny),
				(r.$ = d),
				Object.assign(r, {
					enabled: r.params.enabled,
					el: e,
					classNames: [],
					slides: d(),
					slidesGrid: [],
					snapGrid: [],
					slidesSizesGrid: [],
					isHorizontal: () => "horizontal" === r.params.direction,
					isVertical: () => "vertical" === r.params.direction,
					activeIndex: 0,
					realIndex: 0,
					isBeginning: !0,
					isEnd: !1,
					translate: 0,
					previousTranslate: 0,
					progress: 0,
					velocity: 0,
					animating: !1,
					allowSlideNext: r.params.allowSlideNext,
					allowSlidePrev: r.params.allowSlidePrev,
					touchEvents: (function () {
						const e = [
								"touchstart",
								"touchmove",
								"touchend",
								"touchcancel",
							],
							t = ["pointerdown", "pointermove", "pointerup"];
						return (
							(r.touchEventsTouch = {
								start: e[0],
								move: e[1],
								end: e[2],
								cancel: e[3],
							}),
							(r.touchEventsDesktop = {
								start: t[0],
								move: t[1],
								end: t[2],
							}),
							r.support.touch || !r.params.simulateTouch
								? r.touchEventsTouch
								: r.touchEventsDesktop
						);
					})(),
					touchEventsData: {
						isTouched: void 0,
						isMoved: void 0,
						allowTouchCallbacks: void 0,
						touchStartTime: void 0,
						isScrolling: void 0,
						currentTranslate: void 0,
						startTranslate: void 0,
						allowThresholdMove: void 0,
						focusableElements: r.params.focusableElements,
						lastClickTime: u(),
						clickTimeout: void 0,
						velocities: [],
						allowMomentumBounce: void 0,
						isTouchEvent: void 0,
						startMoving: void 0,
					},
					allowClick: !0,
					allowTouchMove: r.params.allowTouchMove,
					touches: {
						startX: 0,
						startY: 0,
						currentX: 0,
						currentY: 0,
						diff: 0,
					},
					imagesToLoad: [],
					imagesLoaded: 0,
				}),
				r.emit("_swiper"),
				r.params.init && r.init(),
				r
			);
		}
		enable() {
			const e = this;
			e.enabled ||
				((e.enabled = !0),
				e.params.grabCursor && e.setGrabCursor(),
				e.emit("enable"));
		}
		disable() {
			const e = this;
			e.enabled &&
				((e.enabled = !1),
				e.params.grabCursor && e.unsetGrabCursor(),
				e.emit("disable"));
		}
		setProgress(e, t) {
			const s = this;
			e = Math.min(Math.max(e, 0), 1);
			const a = s.minTranslate(),
				i = (s.maxTranslate() - a) * e + a;
			s.translateTo(i, void 0 === t ? 0 : t),
				s.updateActiveIndex(),
				s.updateSlidesClasses();
		}
		emitContainerClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = e.el.className
				.split(" ")
				.filter(
					(t) =>
						0 === t.indexOf("swiper") ||
						0 === t.indexOf(e.params.containerModifierClass)
				);
			e.emit("_containerClasses", t.join(" "));
		}
		getSlideClasses(e) {
			const t = this;
			return t.destroyed
				? ""
				: e.className
						.split(" ")
						.filter(
							(e) =>
								0 === e.indexOf("swiper-slide") ||
								0 === e.indexOf(t.params.slideClass)
						)
						.join(" ");
		}
		emitSlidesClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = [];
			e.slides.each((s) => {
				const a = e.getSlideClasses(s);
				t.push({ slideEl: s, classNames: a }),
					e.emit("_slideClass", s, a);
			}),
				e.emit("_slideClasses", t);
		}
		slidesPerViewDynamic(e, t) {
			void 0 === e && (e = "current"), void 0 === t && (t = !1);
			const {
				params: s,
				slides: a,
				slidesGrid: i,
				slidesSizesGrid: r,
				size: n,
				activeIndex: l,
			} = this;
			let o = 1;
			if (s.centeredSlides) {
				let e,
					t = a[l].swiperSlideSize;
				for (let s = l + 1; s < a.length; s += 1)
					a[s] &&
						!e &&
						((t += a[s].swiperSlideSize),
						(o += 1),
						t > n && (e = !0));
				for (let s = l - 1; s >= 0; s -= 1)
					a[s] &&
						!e &&
						((t += a[s].swiperSlideSize),
						(o += 1),
						t > n && (e = !0));
			} else if ("current" === e)
				for (let e = l + 1; e < a.length; e += 1) {
					(t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
				}
			else
				for (let e = l - 1; e >= 0; e -= 1) {
					i[l] - i[e] < n && (o += 1);
				}
			return o;
		}
		update() {
			const e = this;
			if (!e || e.destroyed) return;
			const { snapGrid: t, params: s } = e;
			function a() {
				const t = e.rtlTranslate ? -1 * e.translate : e.translate,
					s = Math.min(
						Math.max(t, e.maxTranslate()),
						e.minTranslate()
					);
				e.setTranslate(s),
					e.updateActiveIndex(),
					e.updateSlidesClasses();
			}
			let i;
			s.breakpoints && e.setBreakpoint(),
				e.updateSize(),
				e.updateSlides(),
				e.updateProgress(),
				e.updateSlidesClasses(),
				e.params.freeMode && e.params.freeMode.enabled
					? (a(), e.params.autoHeight && e.updateAutoHeight())
					: ((i =
							("auto" === e.params.slidesPerView ||
								e.params.slidesPerView > 1) &&
							e.isEnd &&
							!e.params.centeredSlides
								? e.slideTo(e.slides.length - 1, 0, !1, !0)
								: e.slideTo(e.activeIndex, 0, !1, !0)),
					  i || a()),
				s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
				e.emit("update");
		}
		changeDirection(e, t) {
			void 0 === t && (t = !0);
			const s = this,
				a = s.params.direction;
			return (
				e || (e = "horizontal" === a ? "vertical" : "horizontal"),
				e === a ||
					("horizontal" !== e && "vertical" !== e) ||
					(s.$el
						.removeClass(`${s.params.containerModifierClass}${a}`)
						.addClass(`${s.params.containerModifierClass}${e}`),
					s.emitContainerClasses(),
					(s.params.direction = e),
					s.slides.each((t) => {
						"vertical" === e
							? (t.style.width = "")
							: (t.style.height = "");
					}),
					s.emit("changeDirection"),
					t && s.update()),
				s
			);
		}
		changeLanguageDirection(e) {
			const t = this;
			(t.rtl && "rtl" === e) ||
				(!t.rtl && "ltr" === e) ||
				((t.rtl = "rtl" === e),
				(t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
				t.rtl
					? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
					  (t.el.dir = "rtl"))
					: (t.$el.removeClass(
							`${t.params.containerModifierClass}rtl`
					  ),
					  (t.el.dir = "ltr")),
				t.update());
		}
		mount(e) {
			const t = this;
			if (t.mounted) return !0;
			const s = d(e || t.params.el);
			if (!(e = s[0])) return !1;
			e.swiper = t;
			const i = () =>
				`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
			let r = (() => {
				if (e && e.shadowRoot && e.shadowRoot.querySelector) {
					const t = d(e.shadowRoot.querySelector(i()));
					return (t.children = (e) => s.children(e)), t;
				}
				return s.children ? s.children(i()) : d(s).children(i());
			})();
			if (0 === r.length && t.params.createElements) {
				const e = a().createElement("div");
				(r = d(e)),
					(e.className = t.params.wrapperClass),
					s.append(e),
					s.children(`.${t.params.slideClass}`).each((e) => {
						r.append(e);
					});
			}
			return (
				Object.assign(t, {
					$el: s,
					el: e,
					$wrapperEl: r,
					wrapperEl: r[0],
					mounted: !0,
					rtl:
						"rtl" === e.dir.toLowerCase() ||
						"rtl" === s.css("direction"),
					rtlTranslate:
						"horizontal" === t.params.direction &&
						("rtl" === e.dir.toLowerCase() ||
							"rtl" === s.css("direction")),
					wrongRTL: "-webkit-box" === r.css("display"),
				}),
				!0
			);
		}
		init(e) {
			const t = this;
			if (t.initialized) return t;
			return (
				!1 === t.mount(e) ||
					(t.emit("beforeInit"),
					t.params.breakpoints && t.setBreakpoint(),
					t.addClasses(),
					t.params.loop && t.loopCreate(),
					t.updateSize(),
					t.updateSlides(),
					t.params.watchOverflow && t.checkOverflow(),
					t.params.grabCursor && t.enabled && t.setGrabCursor(),
					t.params.preloadImages && t.preloadImages(),
					t.params.loop
						? t.slideTo(
								t.params.initialSlide + t.loopedSlides,
								0,
								t.params.runCallbacksOnInit,
								!1,
								!0
						  )
						: t.slideTo(
								t.params.initialSlide,
								0,
								t.params.runCallbacksOnInit,
								!1,
								!0
						  ),
					t.attachEvents(),
					(t.initialized = !0),
					t.emit("init"),
					t.emit("afterInit")),
				t
			);
		}
		destroy(e, t) {
			void 0 === e && (e = !0), void 0 === t && (t = !0);
			const s = this,
				{ params: a, $el: i, $wrapperEl: r, slides: n } = s;
			return (
				void 0 === s.params ||
					s.destroyed ||
					(s.emit("beforeDestroy"),
					(s.initialized = !1),
					s.detachEvents(),
					a.loop && s.loopDestroy(),
					t &&
						(s.removeClasses(),
						i.removeAttr("style"),
						r.removeAttr("style"),
						n &&
							n.length &&
							n
								.removeClass(
									[
										a.slideVisibleClass,
										a.slideActiveClass,
										a.slideNextClass,
										a.slidePrevClass,
									].join(" ")
								)
								.removeAttr("style")
								.removeAttr("data-swiper-slide-index")),
					s.emit("destroy"),
					Object.keys(s.eventsListeners).forEach((e) => {
						s.off(e);
					}),
					!1 !== e &&
						((s.$el[0].swiper = null),
						(function (e) {
							const t = e;
							Object.keys(t).forEach((e) => {
								try {
									t[e] = null;
								} catch (e) {}
								try {
									delete t[e];
								} catch (e) {}
							});
						})(s)),
					(s.destroyed = !0)),
				null
			);
		}
		static extendDefaults(e) {
			g(_, e);
		}
		static get extendedDefaults() {
			return _;
		}
		static get defaults() {
			return W;
		}
		static installModule(e) {
			V.prototype.__modules__ || (V.prototype.__modules__ = []);
			const t = V.prototype.__modules__;
			"function" == typeof e && t.indexOf(e) < 0 && t.push(e);
		}
		static use(e) {
			return Array.isArray(e)
				? (e.forEach((e) => V.installModule(e)), V)
				: (V.installModule(e), V);
		}
	}
	function F(e, t, s, i) {
		const r = a();
		return (
			e.params.createElements &&
				Object.keys(i).forEach((a) => {
					if (!s[a] && !0 === s.auto) {
						let n = e.$el.children(`.${i[a]}`)[0];
						n ||
							((n = r.createElement("div")),
							(n.className = i[a]),
							e.$el.append(n)),
							(s[a] = n),
							(t[a] = n);
					}
				}),
			s
		);
	}
	function U(e) {
		return (
			void 0 === e && (e = ""),
			`.${e
				.trim()
				.replace(/([\.:!\/])/g, "\\$1")
				.replace(/ /g, ".")}`
		);
	}
	function K(e) {
		const t = this,
			{ $wrapperEl: s, params: a } = t;
		if ((a.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
			for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
		else s.append(e);
		a.loop && t.loopCreate(), a.observer || t.update();
	}
	function Z(e) {
		const t = this,
			{ params: s, $wrapperEl: a, activeIndex: i } = t;
		s.loop && t.loopDestroy();
		let r = i + 1;
		if ("object" == typeof e && "length" in e) {
			for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
			r = i + e.length;
		} else a.prepend(e);
		s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
	}
	function Q(e, t) {
		const s = this,
			{ $wrapperEl: a, params: i, activeIndex: r } = s;
		let n = r;
		i.loop &&
			((n -= s.loopedSlides),
			s.loopDestroy(),
			(s.slides = a.children(`.${i.slideClass}`)));
		const l = s.slides.length;
		if (e <= 0) return void s.prependSlide(t);
		if (e >= l) return void s.appendSlide(t);
		let o = n > e ? n + 1 : n;
		const d = [];
		for (let t = l - 1; t >= e; t -= 1) {
			const e = s.slides.eq(t);
			e.remove(), d.unshift(e);
		}
		if ("object" == typeof t && "length" in t) {
			for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
			o = n > e ? n + t.length : n;
		} else a.append(t);
		for (let e = 0; e < d.length; e += 1) a.append(d[e]);
		i.loop && s.loopCreate(),
			i.observer || s.update(),
			i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
	}
	function J(e) {
		const t = this,
			{ params: s, $wrapperEl: a, activeIndex: i } = t;
		let r = i;
		s.loop &&
			((r -= t.loopedSlides),
			t.loopDestroy(),
			(t.slides = a.children(`.${s.slideClass}`)));
		let n,
			l = r;
		if ("object" == typeof e && "length" in e) {
			for (let s = 0; s < e.length; s += 1)
				(n = e[s]),
					t.slides[n] && t.slides.eq(n).remove(),
					n < l && (l -= 1);
			l = Math.max(l, 0);
		} else (n = e), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), (l = Math.max(l, 0));
		s.loop && t.loopCreate(),
			s.observer || t.update(),
			s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
	}
	function ee() {
		const e = this,
			t = [];
		for (let s = 0; s < e.slides.length; s += 1) t.push(s);
		e.removeSlide(t);
	}
	function te(e) {
		const {
			effect: t,
			swiper: s,
			on: a,
			setTranslate: i,
			setTransition: r,
			overwriteParams: n,
			perspective: l,
			recreateShadows: o,
			getEffectParams: d,
		} = e;
		let c;
		a("beforeInit", () => {
			if (s.params.effect !== t) return;
			s.classNames.push(`${s.params.containerModifierClass}${t}`),
				l &&
					l() &&
					s.classNames.push(`${s.params.containerModifierClass}3d`);
			const e = n ? n() : {};
			Object.assign(s.params, e), Object.assign(s.originalParams, e);
		}),
			a("setTranslate", () => {
				s.params.effect === t && i();
			}),
			a("setTransition", (e, a) => {
				s.params.effect === t && r(a);
			}),
			a("transitionEnd", () => {
				if (s.params.effect === t && o) {
					if (!d || !d().slideShadows) return;
					s.slides.each((e) => {
						s.$(e)
							.find(
								".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
							)
							.remove();
					}),
						o();
				}
			}),
			a("virtualUpdate", () => {
				s.params.effect === t &&
					(s.slides.length || (c = !0),
					requestAnimationFrame(() => {
						c && s.slides && s.slides.length && (i(), (c = !1));
					}));
			});
	}
	function se(e, t) {
		return e.transformEl
			? t.find(e.transformEl).css({
					"backface-visibility": "hidden",
					"-webkit-backface-visibility": "hidden",
			  })
			: t;
	}
	function ae(e) {
		let { swiper: t, duration: s, transformEl: a, allSlides: i } = e;
		const { slides: r, activeIndex: n, $wrapperEl: l } = t;
		if (t.params.virtualTranslate && 0 !== s) {
			let e,
				s = !1;
			(e = i ? (a ? r.find(a) : r) : a ? r.eq(n).find(a) : r.eq(n)),
				e.transitionEnd(() => {
					if (s) return;
					if (!t || t.destroyed) return;
					(s = !0), (t.animating = !1);
					const e = ["webkitTransitionEnd", "transitionend"];
					for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
				});
		}
	}
	function ie(e, t, s) {
		const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
			i = e.transformEl ? t.find(e.transformEl) : t;
		let r = i.children(`.${a}`);
		return (
			r.length ||
				((r = d(
					`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`
				)),
				i.append(r)),
			r
		);
	}
	Object.keys(j).forEach((e) => {
		Object.keys(j[e]).forEach((t) => {
			V.prototype[t] = j[e][t];
		});
	}),
		V.use([
			function (e) {
				let { swiper: t, on: s, emit: a } = e;
				const i = r();
				let n = null,
					l = null;
				const o = () => {
						t &&
							!t.destroyed &&
							t.initialized &&
							(a("beforeResize"), a("resize"));
					},
					d = () => {
						t &&
							!t.destroyed &&
							t.initialized &&
							a("orientationchange");
					};
				s("init", () => {
					t.params.resizeObserver && void 0 !== i.ResizeObserver
						? t &&
						  !t.destroyed &&
						  t.initialized &&
						  ((n = new ResizeObserver((e) => {
								l = i.requestAnimationFrame(() => {
									const { width: s, height: a } = t;
									let i = s,
										r = a;
									e.forEach((e) => {
										let {
											contentBoxSize: s,
											contentRect: a,
											target: n,
										} = e;
										(n && n !== t.el) ||
											((i = a
												? a.width
												: (s[0] || s).inlineSize),
											(r = a
												? a.height
												: (s[0] || s).blockSize));
									}),
										(i === s && r === a) || o();
								});
						  })),
						  n.observe(t.el))
						: (i.addEventListener("resize", o),
						  i.addEventListener("orientationchange", d));
				}),
					s("destroy", () => {
						l && i.cancelAnimationFrame(l),
							n &&
								n.unobserve &&
								t.el &&
								(n.unobserve(t.el), (n = null)),
							i.removeEventListener("resize", o),
							i.removeEventListener("orientationchange", d);
					});
			},
			function (e) {
				let { swiper: t, extendParams: s, on: a, emit: i } = e;
				const n = [],
					l = r(),
					o = function (e, t) {
						void 0 === t && (t = {});
						const s = new (l.MutationObserver ||
							l.WebkitMutationObserver)((e) => {
							if (1 === e.length)
								return void i("observerUpdate", e[0]);
							const t = function () {
								i("observerUpdate", e[0]);
							};
							l.requestAnimationFrame
								? l.requestAnimationFrame(t)
								: l.setTimeout(t, 0);
						});
						s.observe(e, {
							attributes: void 0 === t.attributes || t.attributes,
							childList: void 0 === t.childList || t.childList,
							characterData:
								void 0 === t.characterData || t.characterData,
						}),
							n.push(s);
					};
				s({
					observer: !1,
					observeParents: !1,
					observeSlideChildren: !1,
				}),
					a("init", () => {
						if (t.params.observer) {
							if (t.params.observeParents) {
								const e = t.$el.parents();
								for (let t = 0; t < e.length; t += 1) o(e[t]);
							}
							o(t.$el[0], {
								childList: t.params.observeSlideChildren,
							}),
								o(t.$wrapperEl[0], { attributes: !1 });
						}
					}),
					a("destroy", () => {
						n.forEach((e) => {
							e.disconnect();
						}),
							n.splice(0, n.length);
					});
			},
		]);
	const re = [
		function (e) {
			let t,
				{ swiper: s, extendParams: a, on: i, emit: r } = e;
			function n(e, t) {
				const a = s.params.virtual;
				if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
				const i = a.renderSlide
					? d(a.renderSlide.call(s, e, t))
					: d(
							`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
					  );
				return (
					i.attr("data-swiper-slide-index") ||
						i.attr("data-swiper-slide-index", t),
					a.cache && (s.virtual.cache[t] = i),
					i
				);
			}
			function l(e) {
				const {
						slidesPerView: t,
						slidesPerGroup: a,
						centeredSlides: i,
					} = s.params,
					{ addSlidesBefore: l, addSlidesAfter: o } =
						s.params.virtual,
					{
						from: d,
						to: c,
						slides: p,
						slidesGrid: u,
						offset: h,
					} = s.virtual;
				s.params.cssMode || s.updateActiveIndex();
				const m = s.activeIndex || 0;
				let f, g, v;
				(f = s.rtlTranslate
					? "right"
					: s.isHorizontal()
					? "left"
					: "top"),
					i
						? ((g = Math.floor(t / 2) + a + o),
						  (v = Math.floor(t / 2) + a + l))
						: ((g = t + (a - 1) + o), (v = a + l));
				const w = Math.max((m || 0) - v, 0),
					b = Math.min((m || 0) + g, p.length - 1),
					x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
				function y() {
					s.updateSlides(),
						s.updateProgress(),
						s.updateSlidesClasses(),
						s.lazy && s.params.lazy.enabled && s.lazy.load(),
						r("virtualUpdate");
				}
				if (
					(Object.assign(s.virtual, {
						from: w,
						to: b,
						offset: x,
						slidesGrid: s.slidesGrid,
					}),
					d === w && c === b && !e)
				)
					return (
						s.slidesGrid !== u &&
							x !== h &&
							s.slides.css(f, `${x}px`),
						s.updateProgress(),
						void r("virtualUpdate")
					);
				if (s.params.virtual.renderExternal)
					return (
						s.params.virtual.renderExternal.call(s, {
							offset: x,
							from: w,
							to: b,
							slides: (function () {
								const e = [];
								for (let t = w; t <= b; t += 1) e.push(p[t]);
								return e;
							})(),
						}),
						void (s.params.virtual.renderExternalUpdate
							? y()
							: r("virtualUpdate"))
					);
				const E = [],
					C = [];
				if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
				else
					for (let e = d; e <= c; e += 1)
						(e < w || e > b) &&
							s.$wrapperEl
								.find(
									`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`
								)
								.remove();
				for (let t = 0; t < p.length; t += 1)
					t >= w &&
						t <= b &&
						(void 0 === c || e
							? C.push(t)
							: (t > c && C.push(t), t < d && E.push(t)));
				C.forEach((e) => {
					s.$wrapperEl.append(n(p[e], e));
				}),
					E.sort((e, t) => t - e).forEach((e) => {
						s.$wrapperEl.prepend(n(p[e], e));
					}),
					s.$wrapperEl.children(".swiper-slide").css(f, `${x}px`),
					y();
			}
			a({
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					renderExternalUpdate: !0,
					addSlidesBefore: 0,
					addSlidesAfter: 0,
				},
			}),
				(s.virtual = {
					cache: {},
					from: void 0,
					to: void 0,
					slides: [],
					offset: 0,
					slidesGrid: [],
				}),
				i("beforeInit", () => {
					s.params.virtual.enabled &&
						((s.virtual.slides = s.params.virtual.slides),
						s.classNames.push(
							`${s.params.containerModifierClass}virtual`
						),
						(s.params.watchSlidesProgress = !0),
						(s.originalParams.watchSlidesProgress = !0),
						s.params.initialSlide || l());
				}),
				i("setTranslate", () => {
					s.params.virtual.enabled &&
						(s.params.cssMode && !s._immediateVirtual
							? (clearTimeout(t),
							  (t = setTimeout(() => {
									l();
							  }, 100)))
							: l());
				}),
				i("init update resize", () => {
					s.params.virtual.enabled &&
						s.params.cssMode &&
						v(
							s.wrapperEl,
							"--swiper-virtual-size",
							`${s.virtualSize}px`
						);
				}),
				Object.assign(s.virtual, {
					appendSlide: function (e) {
						if ("object" == typeof e && "length" in e)
							for (let t = 0; t < e.length; t += 1)
								e[t] && s.virtual.slides.push(e[t]);
						else s.virtual.slides.push(e);
						l(!0);
					},
					prependSlide: function (e) {
						const t = s.activeIndex;
						let a = t + 1,
							i = 1;
						if (Array.isArray(e)) {
							for (let t = 0; t < e.length; t += 1)
								e[t] && s.virtual.slides.unshift(e[t]);
							(a = t + e.length), (i = e.length);
						} else s.virtual.slides.unshift(e);
						if (s.params.virtual.cache) {
							const e = s.virtual.cache,
								t = {};
							Object.keys(e).forEach((s) => {
								const a = e[s],
									r = a.attr("data-swiper-slide-index");
								r &&
									a.attr(
										"data-swiper-slide-index",
										parseInt(r, 10) + i
									),
									(t[parseInt(s, 10) + i] = a);
							}),
								(s.virtual.cache = t);
						}
						l(!0), s.slideTo(a, 0);
					},
					removeSlide: function (e) {
						if (null == e) return;
						let t = s.activeIndex;
						if (Array.isArray(e))
							for (let a = e.length - 1; a >= 0; a -= 1)
								s.virtual.slides.splice(e[a], 1),
									s.params.virtual.cache &&
										delete s.virtual.cache[e[a]],
									e[a] < t && (t -= 1),
									(t = Math.max(t, 0));
						else
							s.virtual.slides.splice(e, 1),
								s.params.virtual.cache &&
									delete s.virtual.cache[e],
								e < t && (t -= 1),
								(t = Math.max(t, 0));
						l(!0), s.slideTo(t, 0);
					},
					removeAllSlides: function () {
						(s.virtual.slides = []),
							s.params.virtual.cache && (s.virtual.cache = {}),
							l(!0),
							s.slideTo(0, 0);
					},
					update: l,
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: i, emit: n } = e;
			const l = a(),
				o = r();
			function c(e) {
				if (!t.enabled) return;
				const { rtlTranslate: s } = t;
				let a = e;
				a.originalEvent && (a = a.originalEvent);
				const i = a.keyCode || a.charCode,
					r = t.params.keyboard.pageUpDown,
					d = r && 33 === i,
					c = r && 34 === i,
					p = 37 === i,
					u = 39 === i,
					h = 38 === i,
					m = 40 === i;
				if (
					!t.allowSlideNext &&
					((t.isHorizontal() && u) || (t.isVertical() && m) || c)
				)
					return !1;
				if (
					!t.allowSlidePrev &&
					((t.isHorizontal() && p) || (t.isVertical() && h) || d)
				)
					return !1;
				if (
					!(
						a.shiftKey ||
						a.altKey ||
						a.ctrlKey ||
						a.metaKey ||
						(l.activeElement &&
							l.activeElement.nodeName &&
							("input" ===
								l.activeElement.nodeName.toLowerCase() ||
								"textarea" ===
									l.activeElement.nodeName.toLowerCase()))
					)
				) {
					if (
						t.params.keyboard.onlyInViewport &&
						(d || c || p || u || h || m)
					) {
						let e = !1;
						if (
							t.$el.parents(`.${t.params.slideClass}`).length >
								0 &&
							0 ===
								t.$el.parents(`.${t.params.slideActiveClass}`)
									.length
						)
							return;
						const a = t.$el,
							i = a[0].clientWidth,
							r = a[0].clientHeight,
							n = o.innerWidth,
							l = o.innerHeight,
							d = t.$el.offset();
						s && (d.left -= t.$el[0].scrollLeft);
						const c = [
							[d.left, d.top],
							[d.left + i, d.top],
							[d.left, d.top + r],
							[d.left + i, d.top + r],
						];
						for (let t = 0; t < c.length; t += 1) {
							const s = c[t];
							if (
								s[0] >= 0 &&
								s[0] <= n &&
								s[1] >= 0 &&
								s[1] <= l
							) {
								if (0 === s[0] && 0 === s[1]) continue;
								e = !0;
							}
						}
						if (!e) return;
					}
					t.isHorizontal()
						? ((d || c || p || u) &&
								(a.preventDefault
									? a.preventDefault()
									: (a.returnValue = !1)),
						  (((c || u) && !s) || ((d || p) && s)) &&
								t.slideNext(),
						  (((d || p) && !s) || ((c || u) && s)) &&
								t.slidePrev())
						: ((d || c || h || m) &&
								(a.preventDefault
									? a.preventDefault()
									: (a.returnValue = !1)),
						  (c || m) && t.slideNext(),
						  (d || h) && t.slidePrev()),
						n("keyPress", i);
				}
			}
			function p() {
				t.keyboard.enabled ||
					(d(l).on("keydown", c), (t.keyboard.enabled = !0));
			}
			function u() {
				t.keyboard.enabled &&
					(d(l).off("keydown", c), (t.keyboard.enabled = !1));
			}
			(t.keyboard = { enabled: !1 }),
				s({
					keyboard: {
						enabled: !1,
						onlyInViewport: !0,
						pageUpDown: !0,
					},
				}),
				i("init", () => {
					t.params.keyboard.enabled && p();
				}),
				i("destroy", () => {
					t.keyboard.enabled && u();
				}),
				Object.assign(t.keyboard, { enable: p, disable: u });
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			const n = r();
			let l;
			s({
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarget: "container",
					thresholdDelta: null,
					thresholdTime: null,
				},
			}),
				(t.mousewheel = { enabled: !1 });
			let o,
				c = u();
			const h = [];
			function m() {
				t.enabled && (t.mouseEntered = !0);
			}
			function f() {
				t.enabled && (t.mouseEntered = !1);
			}
			function g(e) {
				return (
					!(
						t.params.mousewheel.thresholdDelta &&
						e.delta < t.params.mousewheel.thresholdDelta
					) &&
					!(
						t.params.mousewheel.thresholdTime &&
						u() - c < t.params.mousewheel.thresholdTime
					) &&
					((e.delta >= 6 && u() - c < 60) ||
						(e.direction < 0
							? (t.isEnd && !t.params.loop) ||
							  t.animating ||
							  (t.slideNext(), i("scroll", e.raw))
							: (t.isBeginning && !t.params.loop) ||
							  t.animating ||
							  (t.slidePrev(), i("scroll", e.raw)),
						(c = new n.Date().getTime()),
						!1))
				);
			}
			function v(e) {
				let s = e,
					a = !0;
				if (!t.enabled) return;
				const r = t.params.mousewheel;
				t.params.cssMode && s.preventDefault();
				let n = t.$el;
				if (
					("container" !== t.params.mousewheel.eventsTarget &&
						(n = d(t.params.mousewheel.eventsTarget)),
					!t.mouseEntered &&
						!n[0].contains(s.target) &&
						!r.releaseOnEdges)
				)
					return !0;
				s.originalEvent && (s = s.originalEvent);
				let c = 0;
				const m = t.rtlTranslate ? -1 : 1,
					f = (function (e) {
						let t = 0,
							s = 0,
							a = 0,
							i = 0;
						return (
							"detail" in e && (s = e.detail),
							"wheelDelta" in e && (s = -e.wheelDelta / 120),
							"wheelDeltaY" in e && (s = -e.wheelDeltaY / 120),
							"wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
							"axis" in e &&
								e.axis === e.HORIZONTAL_AXIS &&
								((t = s), (s = 0)),
							(a = 10 * t),
							(i = 10 * s),
							"deltaY" in e && (i = e.deltaY),
							"deltaX" in e && (a = e.deltaX),
							e.shiftKey && !a && ((a = i), (i = 0)),
							(a || i) &&
								e.deltaMode &&
								(1 === e.deltaMode
									? ((a *= 40), (i *= 40))
									: ((a *= 800), (i *= 800))),
							a && !t && (t = a < 1 ? -1 : 1),
							i && !s && (s = i < 1 ? -1 : 1),
							{ spinX: t, spinY: s, pixelX: a, pixelY: i }
						);
					})(s);
				if (r.forceToAxis)
					if (t.isHorizontal()) {
						if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY)))
							return !0;
						c = -f.pixelX * m;
					} else {
						if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX)))
							return !0;
						c = -f.pixelY;
					}
				else
					c =
						Math.abs(f.pixelX) > Math.abs(f.pixelY)
							? -f.pixelX * m
							: -f.pixelY;
				if (0 === c) return !0;
				r.invert && (c = -c);
				let v = t.getTranslate() + c * r.sensitivity;
				if (
					(v >= t.minTranslate() && (v = t.minTranslate()),
					v <= t.maxTranslate() && (v = t.maxTranslate()),
					(a =
						!!t.params.loop ||
						!(v === t.minTranslate() || v === t.maxTranslate())),
					a && t.params.nested && s.stopPropagation(),
					t.params.freeMode && t.params.freeMode.enabled)
				) {
					const e = {
							time: u(),
							delta: Math.abs(c),
							direction: Math.sign(c),
						},
						a =
							o &&
							e.time < o.time + 500 &&
							e.delta <= o.delta &&
							e.direction === o.direction;
					if (!a) {
						(o = void 0), t.params.loop && t.loopFix();
						let n = t.getTranslate() + c * r.sensitivity;
						const d = t.isBeginning,
							u = t.isEnd;
						if (
							(n >= t.minTranslate() && (n = t.minTranslate()),
							n <= t.maxTranslate() && (n = t.maxTranslate()),
							t.setTransition(0),
							t.setTranslate(n),
							t.updateProgress(),
							t.updateActiveIndex(),
							t.updateSlidesClasses(),
							((!d && t.isBeginning) || (!u && t.isEnd)) &&
								t.updateSlidesClasses(),
							t.params.freeMode.sticky)
						) {
							clearTimeout(l),
								(l = void 0),
								h.length >= 15 && h.shift();
							const s = h.length ? h[h.length - 1] : void 0,
								a = h[0];
							if (
								(h.push(e),
								s &&
									(e.delta > s.delta ||
										e.direction !== s.direction))
							)
								h.splice(0);
							else if (
								h.length >= 15 &&
								e.time - a.time < 500 &&
								a.delta - e.delta >= 1 &&
								e.delta <= 6
							) {
								const s = c > 0 ? 0.8 : 0.2;
								(o = e),
									h.splice(0),
									(l = p(() => {
										t.slideToClosest(
											t.params.speed,
											!0,
											void 0,
											s
										);
									}, 0));
							}
							l ||
								(l = p(() => {
									(o = e),
										h.splice(0),
										t.slideToClosest(
											t.params.speed,
											!0,
											void 0,
											0.5
										);
								}, 500));
						}
						if (
							(a || i("scroll", s),
							t.params.autoplay &&
								t.params.autoplayDisableOnInteraction &&
								t.autoplay.stop(),
							n === t.minTranslate() || n === t.maxTranslate())
						)
							return !0;
					}
				} else {
					const s = {
						time: u(),
						delta: Math.abs(c),
						direction: Math.sign(c),
						raw: e,
					};
					h.length >= 2 && h.shift();
					const a = h.length ? h[h.length - 1] : void 0;
					if (
						(h.push(s),
						a
							? (s.direction !== a.direction ||
									s.delta > a.delta ||
									s.time > a.time + 150) &&
							  g(s)
							: g(s),
						(function (e) {
							const s = t.params.mousewheel;
							if (e.direction < 0) {
								if (
									t.isEnd &&
									!t.params.loop &&
									s.releaseOnEdges
								)
									return !0;
							} else if (
								t.isBeginning &&
								!t.params.loop &&
								s.releaseOnEdges
							)
								return !0;
							return !1;
						})(s))
					)
						return !0;
				}
				return (
					s.preventDefault
						? s.preventDefault()
						: (s.returnValue = !1),
					!1
				);
			}
			function w(e) {
				let s = t.$el;
				"container" !== t.params.mousewheel.eventsTarget &&
					(s = d(t.params.mousewheel.eventsTarget)),
					s[e]("mouseenter", m),
					s[e]("mouseleave", f),
					s[e]("wheel", v);
			}
			function b() {
				return t.params.cssMode
					? (t.wrapperEl.removeEventListener("wheel", v), !0)
					: !t.mousewheel.enabled &&
							(w("on"), (t.mousewheel.enabled = !0), !0);
			}
			function x() {
				return t.params.cssMode
					? (t.wrapperEl.addEventListener(event, v), !0)
					: !!t.mousewheel.enabled &&
							(w("off"), (t.mousewheel.enabled = !1), !0);
			}
			a("init", () => {
				!t.params.mousewheel.enabled && t.params.cssMode && x(),
					t.params.mousewheel.enabled && b();
			}),
				a("destroy", () => {
					t.params.cssMode && b(), t.mousewheel.enabled && x();
				}),
				Object.assign(t.mousewheel, { enable: b, disable: x });
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			function r(e) {
				let s;
				return (
					e &&
						((s = d(e)),
						t.params.uniqueNavElements &&
							"string" == typeof e &&
							s.length > 1 &&
							1 === t.$el.find(e).length &&
							(s = t.$el.find(e))),
					s
				);
			}
			function n(e, s) {
				const a = t.params.navigation;
				e &&
					e.length > 0 &&
					(e[s ? "addClass" : "removeClass"](a.disabledClass),
					e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
					t.params.watchOverflow &&
						t.enabled &&
						e[t.isLocked ? "addClass" : "removeClass"](
							a.lockClass
						));
			}
			function l() {
				if (t.params.loop) return;
				const { $nextEl: e, $prevEl: s } = t.navigation;
				n(s, t.isBeginning && !t.params.rewind),
					n(e, t.isEnd && !t.params.rewind);
			}
			function o(e) {
				e.preventDefault(),
					(!t.isBeginning || t.params.loop || t.params.rewind) &&
						(t.slidePrev(), i("navigationPrev"));
			}
			function c(e) {
				e.preventDefault(),
					(!t.isEnd || t.params.loop || t.params.rewind) &&
						(t.slideNext(), i("navigationNext"));
			}
			function p() {
				const e = t.params.navigation;
				if (
					((t.params.navigation = F(
						t,
						t.originalParams.navigation,
						t.params.navigation,
						{
							nextEl: "swiper-button-next",
							prevEl: "swiper-button-prev",
						}
					)),
					!e.nextEl && !e.prevEl)
				)
					return;
				const s = r(e.nextEl),
					a = r(e.prevEl);
				s && s.length > 0 && s.on("click", c),
					a && a.length > 0 && a.on("click", o),
					Object.assign(t.navigation, {
						$nextEl: s,
						nextEl: s && s[0],
						$prevEl: a,
						prevEl: a && a[0],
					}),
					t.enabled ||
						(s && s.addClass(e.lockClass),
						a && a.addClass(e.lockClass));
			}
			function u() {
				const { $nextEl: e, $prevEl: s } = t.navigation;
				e &&
					e.length &&
					(e.off("click", c),
					e.removeClass(t.params.navigation.disabledClass)),
					s &&
						s.length &&
						(s.off("click", o),
						s.removeClass(t.params.navigation.disabledClass));
			}
			s({
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock",
					navigationDisabledClass: "swiper-navigation-disabled",
				},
			}),
				(t.navigation = {
					nextEl: null,
					$nextEl: null,
					prevEl: null,
					$prevEl: null,
				}),
				a("init", () => {
					!1 === t.params.navigation.enabled ? h() : (p(), l());
				}),
				a("toEdge fromEdge lock unlock", () => {
					l();
				}),
				a("destroy", () => {
					u();
				}),
				a("enable disable", () => {
					const { $nextEl: e, $prevEl: s } = t.navigation;
					e &&
						e[t.enabled ? "removeClass" : "addClass"](
							t.params.navigation.lockClass
						),
						s &&
							s[t.enabled ? "removeClass" : "addClass"](
								t.params.navigation.lockClass
							);
				}),
				a("click", (e, s) => {
					const { $nextEl: a, $prevEl: r } = t.navigation,
						n = s.target;
					if (
						t.params.navigation.hideOnClick &&
						!d(n).is(r) &&
						!d(n).is(a)
					) {
						if (
							t.pagination &&
							t.params.pagination &&
							t.params.pagination.clickable &&
							(t.pagination.el === n ||
								t.pagination.el.contains(n))
						)
							return;
						let e;
						a
							? (e = a.hasClass(t.params.navigation.hiddenClass))
							: r &&
							  (e = r.hasClass(t.params.navigation.hiddenClass)),
							i(!0 === e ? "navigationShow" : "navigationHide"),
							a && a.toggleClass(t.params.navigation.hiddenClass),
							r && r.toggleClass(t.params.navigation.hiddenClass);
					}
				});
			const h = () => {
				t.$el.addClass(t.params.navigation.navigationDisabledClass),
					u();
			};
			Object.assign(t.navigation, {
				enable: () => {
					t.$el.removeClass(
						t.params.navigation.navigationDisabledClass
					),
						p(),
						l();
				},
				disable: h,
				update: l,
				init: p,
				destroy: u,
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			const r = "swiper-pagination";
			let n;
			s({
				pagination: {
					el: null,
					bulletElement: "span",
					clickable: !1,
					hideOnClick: !1,
					renderBullet: null,
					renderProgressbar: null,
					renderFraction: null,
					renderCustom: null,
					progressbarOpposite: !1,
					type: "bullets",
					dynamicBullets: !1,
					dynamicMainBullets: 1,
					formatFractionCurrent: (e) => e,
					formatFractionTotal: (e) => e,
					bulletClass: `${r}-bullet`,
					bulletActiveClass: `${r}-bullet-active`,
					modifierClass: `${r}-`,
					currentClass: `${r}-current`,
					totalClass: `${r}-total`,
					hiddenClass: `${r}-hidden`,
					progressbarFillClass: `${r}-progressbar-fill`,
					progressbarOppositeClass: `${r}-progressbar-opposite`,
					clickableClass: `${r}-clickable`,
					lockClass: `${r}-lock`,
					horizontalClass: `${r}-horizontal`,
					verticalClass: `${r}-vertical`,
					paginationDisabledClass: `${r}-disabled`,
				},
			}),
				(t.pagination = { el: null, $el: null, bullets: [] });
			let l = 0;
			function o() {
				return (
					!t.params.pagination.el ||
					!t.pagination.el ||
					!t.pagination.$el ||
					0 === t.pagination.$el.length
				);
			}
			function c(e, s) {
				const { bulletActiveClass: a } = t.params.pagination;
				e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
			}
			function p() {
				const e = t.rtl,
					s = t.params.pagination;
				if (o()) return;
				const a =
						t.virtual && t.params.virtual.enabled
							? t.virtual.slides.length
							: t.slides.length,
					r = t.pagination.$el;
				let p;
				const u = t.params.loop
					? Math.ceil(
							(a - 2 * t.loopedSlides) / t.params.slidesPerGroup
					  )
					: t.snapGrid.length;
				if (
					(t.params.loop
						? ((p = Math.ceil(
								(t.activeIndex - t.loopedSlides) /
									t.params.slidesPerGroup
						  )),
						  p > a - 1 - 2 * t.loopedSlides &&
								(p -= a - 2 * t.loopedSlides),
						  p > u - 1 && (p -= u),
						  p < 0 &&
								"bullets" !== t.params.paginationType &&
								(p = u + p))
						: (p =
								void 0 !== t.snapIndex
									? t.snapIndex
									: t.activeIndex || 0),
					"bullets" === s.type &&
						t.pagination.bullets &&
						t.pagination.bullets.length > 0)
				) {
					const a = t.pagination.bullets;
					let i, o, u;
					if (
						(s.dynamicBullets &&
							((n = a
								.eq(0)
								[
									t.isHorizontal()
										? "outerWidth"
										: "outerHeight"
								](!0)),
							r.css(
								t.isHorizontal() ? "width" : "height",
								n * (s.dynamicMainBullets + 4) + "px"
							),
							s.dynamicMainBullets > 1 &&
								void 0 !== t.previousIndex &&
								((l +=
									p -
									(t.previousIndex - t.loopedSlides || 0)),
								l > s.dynamicMainBullets - 1
									? (l = s.dynamicMainBullets - 1)
									: l < 0 && (l = 0)),
							(i = Math.max(p - l, 0)),
							(o =
								i +
								(Math.min(a.length, s.dynamicMainBullets) - 1)),
							(u = (o + i) / 2)),
						a.removeClass(
							[
								"",
								"-next",
								"-next-next",
								"-prev",
								"-prev-prev",
								"-main",
							]
								.map((e) => `${s.bulletActiveClass}${e}`)
								.join(" ")
						),
						r.length > 1)
					)
						a.each((e) => {
							const t = d(e),
								a = t.index();
							a === p && t.addClass(s.bulletActiveClass),
								s.dynamicBullets &&
									(a >= i &&
										a <= o &&
										t.addClass(
											`${s.bulletActiveClass}-main`
										),
									a === i && c(t, "prev"),
									a === o && c(t, "next"));
						});
					else {
						const e = a.eq(p),
							r = e.index();
						if (
							(e.addClass(s.bulletActiveClass), s.dynamicBullets)
						) {
							const e = a.eq(i),
								n = a.eq(o);
							for (let e = i; e <= o; e += 1)
								a.eq(e).addClass(`${s.bulletActiveClass}-main`);
							if (t.params.loop)
								if (r >= a.length) {
									for (
										let e = s.dynamicMainBullets;
										e >= 0;
										e -= 1
									)
										a.eq(a.length - e).addClass(
											`${s.bulletActiveClass}-main`
										);
									a.eq(
										a.length - s.dynamicMainBullets - 1
									).addClass(`${s.bulletActiveClass}-prev`);
								} else c(e, "prev"), c(n, "next");
							else c(e, "prev"), c(n, "next");
						}
					}
					if (s.dynamicBullets) {
						const i = Math.min(a.length, s.dynamicMainBullets + 4),
							r = (n * i - n) / 2 - u * n,
							l = e ? "right" : "left";
						a.css(t.isHorizontal() ? l : "top", `${r}px`);
					}
				}
				if (
					("fraction" === s.type &&
						(r
							.find(U(s.currentClass))
							.text(s.formatFractionCurrent(p + 1)),
						r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),
					"progressbar" === s.type)
				) {
					let e;
					e = s.progressbarOpposite
						? t.isHorizontal()
							? "vertical"
							: "horizontal"
						: t.isHorizontal()
						? "horizontal"
						: "vertical";
					const a = (p + 1) / u;
					let i = 1,
						n = 1;
					"horizontal" === e ? (i = a) : (n = a),
						r
							.find(U(s.progressbarFillClass))
							.transform(
								`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`
							)
							.transition(t.params.speed);
				}
				"custom" === s.type && s.renderCustom
					? (r.html(s.renderCustom(t, p + 1, u)),
					  i("paginationRender", r[0]))
					: i("paginationUpdate", r[0]),
					t.params.watchOverflow &&
						t.enabled &&
						r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
			}
			function u() {
				const e = t.params.pagination;
				if (o()) return;
				const s =
						t.virtual && t.params.virtual.enabled
							? t.virtual.slides.length
							: t.slides.length,
					a = t.pagination.$el;
				let r = "";
				if ("bullets" === e.type) {
					let i = t.params.loop
						? Math.ceil(
								(s - 2 * t.loopedSlides) /
									t.params.slidesPerGroup
						  )
						: t.snapGrid.length;
					t.params.freeMode &&
						t.params.freeMode.enabled &&
						!t.params.loop &&
						i > s &&
						(i = s);
					for (let s = 0; s < i; s += 1)
						e.renderBullet
							? (r += e.renderBullet.call(t, s, e.bulletClass))
							: (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
					a.html(r),
						(t.pagination.bullets = a.find(U(e.bulletClass)));
				}
				"fraction" === e.type &&
					((r = e.renderFraction
						? e.renderFraction.call(t, e.currentClass, e.totalClass)
						: `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
					a.html(r)),
					"progressbar" === e.type &&
						((r = e.renderProgressbar
							? e.renderProgressbar.call(
									t,
									e.progressbarFillClass
							  )
							: `<span class="${e.progressbarFillClass}"></span>`),
						a.html(r)),
					"custom" !== e.type &&
						i("paginationRender", t.pagination.$el[0]);
			}
			function h() {
				t.params.pagination = F(
					t,
					t.originalParams.pagination,
					t.params.pagination,
					{ el: "swiper-pagination" }
				);
				const e = t.params.pagination;
				if (!e.el) return;
				let s = d(e.el);
				0 !== s.length &&
					(t.params.uniqueNavElements &&
						"string" == typeof e.el &&
						s.length > 1 &&
						((s = t.$el.find(e.el)),
						s.length > 1 &&
							(s = s.filter(
								(e) => d(e).parents(".swiper")[0] === t.el
							))),
					"bullets" === e.type &&
						e.clickable &&
						s.addClass(e.clickableClass),
					s.addClass(e.modifierClass + e.type),
					s.addClass(
						t.isHorizontal() ? e.horizontalClass : e.verticalClass
					),
					"bullets" === e.type &&
						e.dynamicBullets &&
						(s.addClass(`${e.modifierClass}${e.type}-dynamic`),
						(l = 0),
						e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
					"progressbar" === e.type &&
						e.progressbarOpposite &&
						s.addClass(e.progressbarOppositeClass),
					e.clickable &&
						s.on("click", U(e.bulletClass), function (e) {
							e.preventDefault();
							let s = d(this).index() * t.params.slidesPerGroup;
							t.params.loop && (s += t.loopedSlides),
								t.slideTo(s);
						}),
					Object.assign(t.pagination, { $el: s, el: s[0] }),
					t.enabled || s.addClass(e.lockClass));
			}
			function m() {
				const e = t.params.pagination;
				if (o()) return;
				const s = t.pagination.$el;
				s.removeClass(e.hiddenClass),
					s.removeClass(e.modifierClass + e.type),
					s.removeClass(
						t.isHorizontal() ? e.horizontalClass : e.verticalClass
					),
					t.pagination.bullets &&
						t.pagination.bullets.removeClass &&
						t.pagination.bullets.removeClass(e.bulletActiveClass),
					e.clickable && s.off("click", U(e.bulletClass));
			}
			a("init", () => {
				!1 === t.params.pagination.enabled ? f() : (h(), u(), p());
			}),
				a("activeIndexChange", () => {
					(t.params.loop || void 0 === t.snapIndex) && p();
				}),
				a("snapIndexChange", () => {
					t.params.loop || p();
				}),
				a("slidesLengthChange", () => {
					t.params.loop && (u(), p());
				}),
				a("snapGridLengthChange", () => {
					t.params.loop || (u(), p());
				}),
				a("destroy", () => {
					m();
				}),
				a("enable disable", () => {
					const { $el: e } = t.pagination;
					e &&
						e[t.enabled ? "removeClass" : "addClass"](
							t.params.pagination.lockClass
						);
				}),
				a("lock unlock", () => {
					p();
				}),
				a("click", (e, s) => {
					const a = s.target,
						{ $el: r } = t.pagination;
					if (
						t.params.pagination.el &&
						t.params.pagination.hideOnClick &&
						r &&
						r.length > 0 &&
						!d(a).hasClass(t.params.pagination.bulletClass)
					) {
						if (
							t.navigation &&
							((t.navigation.nextEl &&
								a === t.navigation.nextEl) ||
								(t.navigation.prevEl &&
									a === t.navigation.prevEl))
						)
							return;
						const e = r.hasClass(t.params.pagination.hiddenClass);
						i(!0 === e ? "paginationShow" : "paginationHide"),
							r.toggleClass(t.params.pagination.hiddenClass);
					}
				});
			const f = () => {
				t.$el.addClass(t.params.pagination.paginationDisabledClass),
					t.pagination.$el &&
						t.pagination.$el.addClass(
							t.params.pagination.paginationDisabledClass
						),
					m();
			};
			Object.assign(t.pagination, {
				enable: () => {
					t.$el.removeClass(
						t.params.pagination.paginationDisabledClass
					),
						t.pagination.$el &&
							t.pagination.$el.removeClass(
								t.params.pagination.paginationDisabledClass
							),
						h(),
						u(),
						p();
				},
				disable: f,
				render: u,
				update: p,
				init: h,
				destroy: m,
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: i, emit: r } = e;
			const n = a();
			let l,
				o,
				c,
				u,
				h = !1,
				m = null,
				f = null;
			function g() {
				if (!t.params.scrollbar.el || !t.scrollbar.el) return;
				const { scrollbar: e, rtlTranslate: s, progress: a } = t,
					{ $dragEl: i, $el: r } = e,
					n = t.params.scrollbar;
				let l = o,
					d = (c - o) * a;
				s
					? ((d = -d),
					  d > 0
							? ((l = o - d), (d = 0))
							: -d + o > c && (l = c + d))
					: d < 0
					? ((l = o + d), (d = 0))
					: d + o > c && (l = c - d),
					t.isHorizontal()
						? (i.transform(`translate3d(${d}px, 0, 0)`),
						  (i[0].style.width = `${l}px`))
						: (i.transform(`translate3d(0px, ${d}px, 0)`),
						  (i[0].style.height = `${l}px`)),
					n.hide &&
						(clearTimeout(m),
						(r[0].style.opacity = 1),
						(m = setTimeout(() => {
							(r[0].style.opacity = 0), r.transition(400);
						}, 1e3)));
			}
			function v() {
				if (!t.params.scrollbar.el || !t.scrollbar.el) return;
				const { scrollbar: e } = t,
					{ $dragEl: s, $el: a } = e;
				(s[0].style.width = ""),
					(s[0].style.height = ""),
					(c = t.isHorizontal()
						? a[0].offsetWidth
						: a[0].offsetHeight),
					(u =
						t.size /
						(t.virtualSize +
							t.params.slidesOffsetBefore -
							(t.params.centeredSlides ? t.snapGrid[0] : 0))),
					(o =
						"auto" === t.params.scrollbar.dragSize
							? c * u
							: parseInt(t.params.scrollbar.dragSize, 10)),
					t.isHorizontal()
						? (s[0].style.width = `${o}px`)
						: (s[0].style.height = `${o}px`),
					(a[0].style.display = u >= 1 ? "none" : ""),
					t.params.scrollbar.hide && (a[0].style.opacity = 0),
					t.params.watchOverflow &&
						t.enabled &&
						e.$el[t.isLocked ? "addClass" : "removeClass"](
							t.params.scrollbar.lockClass
						);
			}
			function w(e) {
				return t.isHorizontal()
					? "touchstart" === e.type || "touchmove" === e.type
						? e.targetTouches[0].clientX
						: e.clientX
					: "touchstart" === e.type || "touchmove" === e.type
					? e.targetTouches[0].clientY
					: e.clientY;
			}
			function b(e) {
				const { scrollbar: s, rtlTranslate: a } = t,
					{ $el: i } = s;
				let r;
				(r =
					(w(e) -
						i.offset()[t.isHorizontal() ? "left" : "top"] -
						(null !== l ? l : o / 2)) /
					(c - o)),
					(r = Math.max(Math.min(r, 1), 0)),
					a && (r = 1 - r);
				const n =
					t.minTranslate() +
					(t.maxTranslate() - t.minTranslate()) * r;
				t.updateProgress(n),
					t.setTranslate(n),
					t.updateActiveIndex(),
					t.updateSlidesClasses();
			}
			function x(e) {
				const s = t.params.scrollbar,
					{ scrollbar: a, $wrapperEl: i } = t,
					{ $el: n, $dragEl: o } = a;
				(h = !0),
					(l =
						e.target === o[0] || e.target === o
							? w(e) -
							  e.target.getBoundingClientRect()[
									t.isHorizontal() ? "left" : "top"
							  ]
							: null),
					e.preventDefault(),
					e.stopPropagation(),
					i.transition(100),
					o.transition(100),
					b(e),
					clearTimeout(f),
					n.transition(0),
					s.hide && n.css("opacity", 1),
					t.params.cssMode &&
						t.$wrapperEl.css("scroll-snap-type", "none"),
					r("scrollbarDragStart", e);
			}
			function y(e) {
				const { scrollbar: s, $wrapperEl: a } = t,
					{ $el: i, $dragEl: n } = s;
				h &&
					(e.preventDefault
						? e.preventDefault()
						: (e.returnValue = !1),
					b(e),
					a.transition(0),
					i.transition(0),
					n.transition(0),
					r("scrollbarDragMove", e));
			}
			function E(e) {
				const s = t.params.scrollbar,
					{ scrollbar: a, $wrapperEl: i } = t,
					{ $el: n } = a;
				h &&
					((h = !1),
					t.params.cssMode &&
						(t.$wrapperEl.css("scroll-snap-type", ""),
						i.transition("")),
					s.hide &&
						(clearTimeout(f),
						(f = p(() => {
							n.css("opacity", 0), n.transition(400);
						}, 1e3))),
					r("scrollbarDragEnd", e),
					s.snapOnRelease && t.slideToClosest());
			}
			function C(e) {
				const {
						scrollbar: s,
						touchEventsTouch: a,
						touchEventsDesktop: i,
						params: r,
						support: l,
					} = t,
					o = s.$el;
				if (!o) return;
				const d = o[0],
					c = !(!l.passiveListener || !r.passiveListeners) && {
						passive: !1,
						capture: !1,
					},
					p = !(!l.passiveListener || !r.passiveListeners) && {
						passive: !0,
						capture: !1,
					};
				if (!d) return;
				const u =
					"on" === e ? "addEventListener" : "removeEventListener";
				l.touch
					? (d[u](a.start, x, c),
					  d[u](a.move, y, c),
					  d[u](a.end, E, p))
					: (d[u](i.start, x, c),
					  n[u](i.move, y, c),
					  n[u](i.end, E, p));
			}
			function T() {
				const { scrollbar: e, $el: s } = t;
				t.params.scrollbar = F(
					t,
					t.originalParams.scrollbar,
					t.params.scrollbar,
					{ el: "swiper-scrollbar" }
				);
				const a = t.params.scrollbar;
				if (!a.el) return;
				let i = d(a.el);
				t.params.uniqueNavElements &&
					"string" == typeof a.el &&
					i.length > 1 &&
					1 === s.find(a.el).length &&
					(i = s.find(a.el)),
					i.addClass(
						t.isHorizontal() ? a.horizontalClass : a.verticalClass
					);
				let r = i.find(`.${t.params.scrollbar.dragClass}`);
				0 === r.length &&
					((r = d(
						`<div class="${t.params.scrollbar.dragClass}"></div>`
					)),
					i.append(r)),
					Object.assign(e, {
						$el: i,
						el: i[0],
						$dragEl: r,
						dragEl: r[0],
					}),
					a.draggable &&
						t.params.scrollbar.el &&
						t.scrollbar.el &&
						C("on"),
					i &&
						i[t.enabled ? "removeClass" : "addClass"](
							t.params.scrollbar.lockClass
						);
			}
			function $() {
				const e = t.params.scrollbar,
					s = t.scrollbar.$el;
				s &&
					s.removeClass(
						t.isHorizontal() ? e.horizontalClass : e.verticalClass
					),
					t.params.scrollbar.el && t.scrollbar.el && C("off");
			}
			s({
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag",
					scrollbarDisabledClass: "swiper-scrollbar-disabled",
					horizontalClass: "swiper-scrollbar-horizontal",
					verticalClass: "swiper-scrollbar-vertical",
				},
			}),
				(t.scrollbar = {
					el: null,
					dragEl: null,
					$el: null,
					$dragEl: null,
				}),
				i("init", () => {
					!1 === t.params.scrollbar.enabled ? S() : (T(), v(), g());
				}),
				i("update resize observerUpdate lock unlock", () => {
					v();
				}),
				i("setTranslate", () => {
					g();
				}),
				i("setTransition", (e, s) => {
					!(function (e) {
						t.params.scrollbar.el &&
							t.scrollbar.el &&
							t.scrollbar.$dragEl.transition(e);
					})(s);
				}),
				i("enable disable", () => {
					const { $el: e } = t.scrollbar;
					e &&
						e[t.enabled ? "removeClass" : "addClass"](
							t.params.scrollbar.lockClass
						);
				}),
				i("destroy", () => {
					$();
				});
			const S = () => {
				t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),
					t.scrollbar.$el &&
						t.scrollbar.$el.addClass(
							t.params.scrollbar.scrollbarDisabledClass
						),
					$();
			};
			Object.assign(t.scrollbar, {
				enable: () => {
					t.$el.removeClass(
						t.params.scrollbar.scrollbarDisabledClass
					),
						t.scrollbar.$el &&
							t.scrollbar.$el.removeClass(
								t.params.scrollbar.scrollbarDisabledClass
							),
						T(),
						v(),
						g();
				},
				disable: S,
				updateSize: v,
				setTranslate: g,
				init: T,
				destroy: $,
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({ parallax: { enabled: !1 } });
			const i = (e, s) => {
					const { rtl: a } = t,
						i = d(e),
						r = a ? -1 : 1,
						n = i.attr("data-swiper-parallax") || "0";
					let l = i.attr("data-swiper-parallax-x"),
						o = i.attr("data-swiper-parallax-y");
					const c = i.attr("data-swiper-parallax-scale"),
						p = i.attr("data-swiper-parallax-opacity");
					if (
						(l || o
							? ((l = l || "0"), (o = o || "0"))
							: t.isHorizontal()
							? ((l = n), (o = "0"))
							: ((o = n), (l = "0")),
						(l =
							l.indexOf("%") >= 0
								? parseInt(l, 10) * s * r + "%"
								: l * s * r + "px"),
						(o =
							o.indexOf("%") >= 0
								? parseInt(o, 10) * s + "%"
								: o * s + "px"),
						null != p)
					) {
						const e = p - (p - 1) * (1 - Math.abs(s));
						i[0].style.opacity = e;
					}
					if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
					else {
						const e = c - (c - 1) * (1 - Math.abs(s));
						i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
					}
				},
				r = () => {
					const { $el: e, slides: s, progress: a, snapGrid: r } = t;
					e
						.children(
							"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
						)
						.each((e) => {
							i(e, a);
						}),
						s.each((e, s) => {
							let n = e.progress;
							t.params.slidesPerGroup > 1 &&
								"auto" !== t.params.slidesPerView &&
								(n += Math.ceil(s / 2) - a * (r.length - 1)),
								(n = Math.min(Math.max(n, -1), 1)),
								d(e)
									.find(
										"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
									)
									.each((e) => {
										i(e, n);
									});
						});
				};
			a("beforeInit", () => {
				t.params.parallax.enabled &&
					((t.params.watchSlidesProgress = !0),
					(t.originalParams.watchSlidesProgress = !0));
			}),
				a("init", () => {
					t.params.parallax.enabled && r();
				}),
				a("setTranslate", () => {
					t.params.parallax.enabled && r();
				}),
				a("setTransition", (e, s) => {
					t.params.parallax.enabled &&
						(function (e) {
							void 0 === e && (e = t.params.speed);
							const { $el: s } = t;
							s.find(
								"[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
							).each((t) => {
								const s = d(t);
								let a =
									parseInt(
										s.attr("data-swiper-parallax-duration"),
										10
									) || e;
								0 === e && (a = 0), s.transition(a);
							});
						})(s);
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			const n = r();
			s({
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed",
				},
			}),
				(t.zoom = { enabled: !1 });
			let l,
				o,
				c,
				p = 1,
				u = !1;
			const m = {
					$slideEl: void 0,
					slideWidth: void 0,
					slideHeight: void 0,
					$imageEl: void 0,
					$imageWrapEl: void 0,
					maxRatio: 3,
				},
				f = {
					isTouched: void 0,
					isMoved: void 0,
					currentX: void 0,
					currentY: void 0,
					minX: void 0,
					minY: void 0,
					maxX: void 0,
					maxY: void 0,
					width: void 0,
					height: void 0,
					startX: void 0,
					startY: void 0,
					touchesStart: {},
					touchesCurrent: {},
				},
				g = {
					x: void 0,
					y: void 0,
					prevPositionX: void 0,
					prevPositionY: void 0,
					prevTime: void 0,
				};
			let v = 1;
			function w(e) {
				if (e.targetTouches.length < 2) return 1;
				const t = e.targetTouches[0].pageX,
					s = e.targetTouches[0].pageY,
					a = e.targetTouches[1].pageX,
					i = e.targetTouches[1].pageY;
				return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
			}
			function b(e) {
				const s = t.support,
					a = t.params.zoom;
				if (((o = !1), (c = !1), !s.gestures)) {
					if (
						"touchstart" !== e.type ||
						("touchstart" === e.type && e.targetTouches.length < 2)
					)
						return;
					(o = !0), (m.scaleStart = w(e));
				}
				(m.$slideEl && m.$slideEl.length) ||
				((m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
				0 === m.$slideEl.length &&
					(m.$slideEl = t.slides.eq(t.activeIndex)),
				(m.$imageEl = m.$slideEl
					.find(`.${a.containerClass}`)
					.eq(0)
					.find("picture, img, svg, canvas, .swiper-zoom-target")
					.eq(0)),
				(m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
				(m.maxRatio =
					m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
				0 !== m.$imageWrapEl.length)
					? (m.$imageEl && m.$imageEl.transition(0), (u = !0))
					: (m.$imageEl = void 0);
			}
			function x(e) {
				const s = t.support,
					a = t.params.zoom,
					i = t.zoom;
				if (!s.gestures) {
					if (
						"touchmove" !== e.type ||
						("touchmove" === e.type && e.targetTouches.length < 2)
					)
						return;
					(c = !0), (m.scaleMove = w(e));
				}
				m.$imageEl && 0 !== m.$imageEl.length
					? (s.gestures
							? (i.scale = e.scale * p)
							: (i.scale = (m.scaleMove / m.scaleStart) * p),
					  i.scale > m.maxRatio &&
							(i.scale =
								m.maxRatio -
								1 +
								(i.scale - m.maxRatio + 1) ** 0.5),
					  i.scale < a.minRatio &&
							(i.scale =
								a.minRatio +
								1 -
								(a.minRatio - i.scale + 1) ** 0.5),
					  m.$imageEl.transform(
							`translate3d(0,0,0) scale(${i.scale})`
					  ))
					: "gesturechange" === e.type && b(e);
			}
			function y(e) {
				const s = t.device,
					a = t.support,
					i = t.params.zoom,
					r = t.zoom;
				if (!a.gestures) {
					if (!o || !c) return;
					if (
						"touchend" !== e.type ||
						("touchend" === e.type &&
							e.changedTouches.length < 2 &&
							!s.android)
					)
						return;
					(o = !1), (c = !1);
				}
				m.$imageEl &&
					0 !== m.$imageEl.length &&
					((r.scale = Math.max(
						Math.min(r.scale, m.maxRatio),
						i.minRatio
					)),
					m.$imageEl
						.transition(t.params.speed)
						.transform(`translate3d(0,0,0) scale(${r.scale})`),
					(p = r.scale),
					(u = !1),
					1 === r.scale && (m.$slideEl = void 0));
			}
			function E(e) {
				const s = t.zoom;
				if (!m.$imageEl || 0 === m.$imageEl.length) return;
				if (((t.allowClick = !1), !f.isTouched || !m.$slideEl)) return;
				f.isMoved ||
					((f.width = m.$imageEl[0].offsetWidth),
					(f.height = m.$imageEl[0].offsetHeight),
					(f.startX = h(m.$imageWrapEl[0], "x") || 0),
					(f.startY = h(m.$imageWrapEl[0], "y") || 0),
					(m.slideWidth = m.$slideEl[0].offsetWidth),
					(m.slideHeight = m.$slideEl[0].offsetHeight),
					m.$imageWrapEl.transition(0));
				const a = f.width * s.scale,
					i = f.height * s.scale;
				if (!(a < m.slideWidth && i < m.slideHeight)) {
					if (
						((f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
						(f.maxX = -f.minX),
						(f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
						(f.maxY = -f.minY),
						(f.touchesCurrent.x =
							"touchmove" === e.type
								? e.targetTouches[0].pageX
								: e.pageX),
						(f.touchesCurrent.y =
							"touchmove" === e.type
								? e.targetTouches[0].pageY
								: e.pageY),
						!f.isMoved && !u)
					) {
						if (
							t.isHorizontal() &&
							((Math.floor(f.minX) === Math.floor(f.startX) &&
								f.touchesCurrent.x < f.touchesStart.x) ||
								(Math.floor(f.maxX) === Math.floor(f.startX) &&
									f.touchesCurrent.x > f.touchesStart.x))
						)
							return void (f.isTouched = !1);
						if (
							!t.isHorizontal() &&
							((Math.floor(f.minY) === Math.floor(f.startY) &&
								f.touchesCurrent.y < f.touchesStart.y) ||
								(Math.floor(f.maxY) === Math.floor(f.startY) &&
									f.touchesCurrent.y > f.touchesStart.y))
						)
							return void (f.isTouched = !1);
					}
					e.cancelable && e.preventDefault(),
						e.stopPropagation(),
						(f.isMoved = !0),
						(f.currentX =
							f.touchesCurrent.x - f.touchesStart.x + f.startX),
						(f.currentY =
							f.touchesCurrent.y - f.touchesStart.y + f.startY),
						f.currentX < f.minX &&
							(f.currentX =
								f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
						f.currentX > f.maxX &&
							(f.currentX =
								f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
						f.currentY < f.minY &&
							(f.currentY =
								f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
						f.currentY > f.maxY &&
							(f.currentY =
								f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
						g.prevPositionX ||
							(g.prevPositionX = f.touchesCurrent.x),
						g.prevPositionY ||
							(g.prevPositionY = f.touchesCurrent.y),
						g.prevTime || (g.prevTime = Date.now()),
						(g.x =
							(f.touchesCurrent.x - g.prevPositionX) /
							(Date.now() - g.prevTime) /
							2),
						(g.y =
							(f.touchesCurrent.y - g.prevPositionY) /
							(Date.now() - g.prevTime) /
							2),
						Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 &&
							(g.x = 0),
						Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 &&
							(g.y = 0),
						(g.prevPositionX = f.touchesCurrent.x),
						(g.prevPositionY = f.touchesCurrent.y),
						(g.prevTime = Date.now()),
						m.$imageWrapEl.transform(
							`translate3d(${f.currentX}px, ${f.currentY}px,0)`
						);
				}
			}
			function C() {
				const e = t.zoom;
				m.$slideEl &&
					t.previousIndex !== t.activeIndex &&
					(m.$imageEl &&
						m.$imageEl.transform("translate3d(0,0,0) scale(1)"),
					m.$imageWrapEl &&
						m.$imageWrapEl.transform("translate3d(0,0,0)"),
					(e.scale = 1),
					(p = 1),
					(m.$slideEl = void 0),
					(m.$imageEl = void 0),
					(m.$imageWrapEl = void 0));
			}
			function T(e) {
				const s = t.zoom,
					a = t.params.zoom;
				if (
					(m.$slideEl ||
						(e &&
							e.target &&
							(m.$slideEl = d(e.target).closest(
								`.${t.params.slideClass}`
							)),
						m.$slideEl ||
							(t.params.virtual &&
							t.params.virtual.enabled &&
							t.virtual
								? (m.$slideEl = t.$wrapperEl.children(
										`.${t.params.slideActiveClass}`
								  ))
								: (m.$slideEl = t.slides.eq(t.activeIndex))),
						(m.$imageEl = m.$slideEl
							.find(`.${a.containerClass}`)
							.eq(0)
							.find(
								"picture, img, svg, canvas, .swiper-zoom-target"
							)
							.eq(0)),
						(m.$imageWrapEl = m.$imageEl.parent(
							`.${a.containerClass}`
						))),
					!m.$imageEl ||
						0 === m.$imageEl.length ||
						!m.$imageWrapEl ||
						0 === m.$imageWrapEl.length)
				)
					return;
				let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
				t.params.cssMode &&
					((t.wrapperEl.style.overflow = "hidden"),
					(t.wrapperEl.style.touchAction = "none")),
					m.$slideEl.addClass(`${a.zoomedSlideClass}`),
					void 0 === f.touchesStart.x && e
						? ((i =
								"touchend" === e.type
									? e.changedTouches[0].pageX
									: e.pageX),
						  (r =
								"touchend" === e.type
									? e.changedTouches[0].pageY
									: e.pageY))
						: ((i = f.touchesStart.x), (r = f.touchesStart.y)),
					(s.scale =
						m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
					(p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
					e
						? (($ = m.$slideEl[0].offsetWidth),
						  (S = m.$slideEl[0].offsetHeight),
						  (l = m.$slideEl.offset().left + n.scrollX),
						  (o = m.$slideEl.offset().top + n.scrollY),
						  (c = l + $ / 2 - i),
						  (u = o + S / 2 - r),
						  (v = m.$imageEl[0].offsetWidth),
						  (w = m.$imageEl[0].offsetHeight),
						  (b = v * s.scale),
						  (x = w * s.scale),
						  (y = Math.min($ / 2 - b / 2, 0)),
						  (E = Math.min(S / 2 - x / 2, 0)),
						  (C = -y),
						  (T = -E),
						  (h = c * s.scale),
						  (g = u * s.scale),
						  h < y && (h = y),
						  h > C && (h = C),
						  g < E && (g = E),
						  g > T && (g = T))
						: ((h = 0), (g = 0)),
					m.$imageWrapEl
						.transition(300)
						.transform(`translate3d(${h}px, ${g}px,0)`),
					m.$imageEl
						.transition(300)
						.transform(`translate3d(0,0,0) scale(${s.scale})`);
			}
			function $() {
				const e = t.zoom,
					s = t.params.zoom;
				m.$slideEl ||
					(t.params.virtual && t.params.virtual.enabled && t.virtual
						? (m.$slideEl = t.$wrapperEl.children(
								`.${t.params.slideActiveClass}`
						  ))
						: (m.$slideEl = t.slides.eq(t.activeIndex)),
					(m.$imageEl = m.$slideEl
						.find(`.${s.containerClass}`)
						.eq(0)
						.find("picture, img, svg, canvas, .swiper-zoom-target")
						.eq(0)),
					(m.$imageWrapEl = m.$imageEl.parent(
						`.${s.containerClass}`
					))),
					m.$imageEl &&
						0 !== m.$imageEl.length &&
						m.$imageWrapEl &&
						0 !== m.$imageWrapEl.length &&
						(t.params.cssMode &&
							((t.wrapperEl.style.overflow = ""),
							(t.wrapperEl.style.touchAction = "")),
						(e.scale = 1),
						(p = 1),
						m.$imageWrapEl
							.transition(300)
							.transform("translate3d(0,0,0)"),
						m.$imageEl
							.transition(300)
							.transform("translate3d(0,0,0) scale(1)"),
						m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
						(m.$slideEl = void 0));
			}
			function S(e) {
				const s = t.zoom;
				s.scale && 1 !== s.scale ? $() : T(e);
			}
			function M() {
				const e = t.support;
				return {
					passiveListener: !(
						"touchstart" !== t.touchEvents.start ||
						!e.passiveListener ||
						!t.params.passiveListeners
					) && { passive: !0, capture: !1 },
					activeListenerWithCapture: !e.passiveListener || {
						passive: !1,
						capture: !0,
					},
				};
			}
			function P() {
				return `.${t.params.slideClass}`;
			}
			function k(e) {
				const { passiveListener: s } = M(),
					a = P();
				t.$wrapperEl[e]("gesturestart", a, b, s),
					t.$wrapperEl[e]("gesturechange", a, x, s),
					t.$wrapperEl[e]("gestureend", a, y, s);
			}
			function z() {
				l || ((l = !0), k("on"));
			}
			function L() {
				l && ((l = !1), k("off"));
			}
			function O() {
				const e = t.zoom;
				if (e.enabled) return;
				e.enabled = !0;
				const s = t.support,
					{ passiveListener: a, activeListenerWithCapture: i } = M(),
					r = P();
				s.gestures
					? (t.$wrapperEl.on(t.touchEvents.start, z, a),
					  t.$wrapperEl.on(t.touchEvents.end, L, a))
					: "touchstart" === t.touchEvents.start &&
					  (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
					  t.$wrapperEl.on(t.touchEvents.move, r, x, i),
					  t.$wrapperEl.on(t.touchEvents.end, r, y, a),
					  t.touchEvents.cancel &&
							t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
					t.$wrapperEl.on(
						t.touchEvents.move,
						`.${t.params.zoom.containerClass}`,
						E,
						i
					);
			}
			function I() {
				const e = t.zoom;
				if (!e.enabled) return;
				const s = t.support;
				e.enabled = !1;
				const { passiveListener: a, activeListenerWithCapture: i } =
						M(),
					r = P();
				s.gestures
					? (t.$wrapperEl.off(t.touchEvents.start, z, a),
					  t.$wrapperEl.off(t.touchEvents.end, L, a))
					: "touchstart" === t.touchEvents.start &&
					  (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
					  t.$wrapperEl.off(t.touchEvents.move, r, x, i),
					  t.$wrapperEl.off(t.touchEvents.end, r, y, a),
					  t.touchEvents.cancel &&
							t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
					t.$wrapperEl.off(
						t.touchEvents.move,
						`.${t.params.zoom.containerClass}`,
						E,
						i
					);
			}
			Object.defineProperty(t.zoom, "scale", {
				get: () => v,
				set(e) {
					if (v !== e) {
						const t = m.$imageEl ? m.$imageEl[0] : void 0,
							s = m.$slideEl ? m.$slideEl[0] : void 0;
						i("zoomChange", e, t, s);
					}
					v = e;
				},
			}),
				a("init", () => {
					t.params.zoom.enabled && O();
				}),
				a("destroy", () => {
					I();
				}),
				a("touchStart", (e, s) => {
					t.zoom.enabled &&
						(function (e) {
							const s = t.device;
							m.$imageEl &&
								0 !== m.$imageEl.length &&
								(f.isTouched ||
									(s.android &&
										e.cancelable &&
										e.preventDefault(),
									(f.isTouched = !0),
									(f.touchesStart.x =
										"touchstart" === e.type
											? e.targetTouches[0].pageX
											: e.pageX),
									(f.touchesStart.y =
										"touchstart" === e.type
											? e.targetTouches[0].pageY
											: e.pageY)));
						})(s);
				}),
				a("touchEnd", (e, s) => {
					t.zoom.enabled &&
						(function () {
							const e = t.zoom;
							if (!m.$imageEl || 0 === m.$imageEl.length) return;
							if (!f.isTouched || !f.isMoved)
								return (
									(f.isTouched = !1), void (f.isMoved = !1)
								);
							(f.isTouched = !1), (f.isMoved = !1);
							let s = 300,
								a = 300;
							const i = g.x * s,
								r = f.currentX + i,
								n = g.y * a,
								l = f.currentY + n;
							0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)),
								0 !== g.y &&
									(a = Math.abs((l - f.currentY) / g.y));
							const o = Math.max(s, a);
							(f.currentX = r), (f.currentY = l);
							const d = f.width * e.scale,
								c = f.height * e.scale;
							(f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
								(f.maxX = -f.minX),
								(f.minY = Math.min(
									m.slideHeight / 2 - c / 2,
									0
								)),
								(f.maxY = -f.minY),
								(f.currentX = Math.max(
									Math.min(f.currentX, f.maxX),
									f.minX
								)),
								(f.currentY = Math.max(
									Math.min(f.currentY, f.maxY),
									f.minY
								)),
								m.$imageWrapEl
									.transition(o)
									.transform(
										`translate3d(${f.currentX}px, ${f.currentY}px,0)`
									);
						})();
				}),
				a("doubleTap", (e, s) => {
					!t.animating &&
						t.params.zoom.enabled &&
						t.zoom.enabled &&
						t.params.zoom.toggle &&
						S(s);
				}),
				a("transitionEnd", () => {
					t.zoom.enabled && t.params.zoom.enabled && C();
				}),
				a("slideChange", () => {
					t.zoom.enabled &&
						t.params.zoom.enabled &&
						t.params.cssMode &&
						C();
				}),
				Object.assign(t.zoom, {
					enable: O,
					disable: I,
					in: T,
					out: $,
					toggle: S,
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a, emit: i } = e;
			s({
				lazy: {
					checkInView: !1,
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					scrollingElement: "",
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader",
				},
			}),
				(t.lazy = {});
			let n = !1,
				l = !1;
			function o(e, s) {
				void 0 === s && (s = !0);
				const a = t.params.lazy;
				if (void 0 === e) return;
				if (0 === t.slides.length) return;
				const r =
						t.virtual && t.params.virtual.enabled
							? t.$wrapperEl.children(
									`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
							  )
							: t.slides.eq(e),
					n = r.find(
						`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`
					);
				!r.hasClass(a.elementClass) ||
					r.hasClass(a.loadedClass) ||
					r.hasClass(a.loadingClass) ||
					n.push(r[0]),
					0 !== n.length &&
						n.each((e) => {
							const n = d(e);
							n.addClass(a.loadingClass);
							const l = n.attr("data-background"),
								c = n.attr("data-src"),
								p = n.attr("data-srcset"),
								u = n.attr("data-sizes"),
								h = n.parent("picture");
							t.loadImage(n[0], c || l, p, u, !1, () => {
								if (
									null != t &&
									t &&
									(!t || t.params) &&
									!t.destroyed
								) {
									if (
										(l
											? (n.css(
													"background-image",
													`url("${l}")`
											  ),
											  n.removeAttr("data-background"))
											: (p &&
													(n.attr("srcset", p),
													n.removeAttr(
														"data-srcset"
													)),
											  u &&
													(n.attr("sizes", u),
													n.removeAttr("data-sizes")),
											  h.length &&
													h
														.children("source")
														.each((e) => {
															const t = d(e);
															t.attr(
																"data-srcset"
															) &&
																(t.attr(
																	"srcset",
																	t.attr(
																		"data-srcset"
																	)
																),
																t.removeAttr(
																	"data-srcset"
																));
														}),
											  c &&
													(n.attr("src", c),
													n.removeAttr("data-src"))),
										n
											.addClass(a.loadedClass)
											.removeClass(a.loadingClass),
										r.find(`.${a.preloaderClass}`).remove(),
										t.params.loop && s)
									) {
										const e = r.attr(
											"data-swiper-slide-index"
										);
										if (
											r.hasClass(
												t.params.slideDuplicateClass
											)
										) {
											o(
												t.$wrapperEl
													.children(
														`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
													)
													.index(),
												!1
											);
										} else {
											o(
												t.$wrapperEl
													.children(
														`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
													)
													.index(),
												!1
											);
										}
									}
									i("lazyImageReady", r[0], n[0]),
										t.params.autoHeight &&
											t.updateAutoHeight();
								}
							}),
								i("lazyImageLoad", r[0], n[0]);
						});
			}
			function c() {
				const {
						$wrapperEl: e,
						params: s,
						slides: a,
						activeIndex: i,
					} = t,
					r = t.virtual && s.virtual.enabled,
					n = s.lazy;
				let c = s.slidesPerView;
				function p(t) {
					if (r) {
						if (
							e.children(
								`.${s.slideClass}[data-swiper-slide-index="${t}"]`
							).length
						)
							return !0;
					} else if (a[t]) return !0;
					return !1;
				}
				function u(e) {
					return r
						? d(e).attr("data-swiper-slide-index")
						: d(e).index();
				}
				if (
					("auto" === c && (c = 0),
					l || (l = !0),
					t.params.watchSlidesProgress)
				)
					e.children(`.${s.slideVisibleClass}`).each((e) => {
						o(
							r
								? d(e).attr("data-swiper-slide-index")
								: d(e).index()
						);
					});
				else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e);
				else o(i);
				if (n.loadPrevNext)
					if (
						c > 1 ||
						(n.loadPrevNextAmount && n.loadPrevNextAmount > 1)
					) {
						const e = n.loadPrevNextAmount,
							t = Math.ceil(c),
							s = Math.min(i + t + Math.max(e, t), a.length),
							r = Math.max(i - Math.max(t, e), 0);
						for (let e = i + t; e < s; e += 1) p(e) && o(e);
						for (let e = r; e < i; e += 1) p(e) && o(e);
					} else {
						const t = e.children(`.${s.slideNextClass}`);
						t.length > 0 && o(u(t));
						const a = e.children(`.${s.slidePrevClass}`);
						a.length > 0 && o(u(a));
					}
			}
			function p() {
				const e = r();
				if (!t || t.destroyed) return;
				const s = t.params.lazy.scrollingElement
						? d(t.params.lazy.scrollingElement)
						: d(e),
					a = s[0] === e,
					i = a ? e.innerWidth : s[0].offsetWidth,
					l = a ? e.innerHeight : s[0].offsetHeight,
					o = t.$el.offset(),
					{ rtlTranslate: u } = t;
				let h = !1;
				u && (o.left -= t.$el[0].scrollLeft);
				const m = [
					[o.left, o.top],
					[o.left + t.width, o.top],
					[o.left, o.top + t.height],
					[o.left + t.width, o.top + t.height],
				];
				for (let e = 0; e < m.length; e += 1) {
					const t = m[e];
					if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
						if (0 === t[0] && 0 === t[1]) continue;
						h = !0;
					}
				}
				const f = !(
					"touchstart" !== t.touchEvents.start ||
					!t.support.passiveListener ||
					!t.params.passiveListeners
				) && { passive: !0, capture: !1 };
				h
					? (c(), s.off("scroll", p, f))
					: n || ((n = !0), s.on("scroll", p, f));
			}
			a("beforeInit", () => {
				t.params.lazy.enabled &&
					t.params.preloadImages &&
					(t.params.preloadImages = !1);
			}),
				a("init", () => {
					t.params.lazy.enabled &&
						(t.params.lazy.checkInView ? p() : c());
				}),
				a("scroll", () => {
					t.params.freeMode &&
						t.params.freeMode.enabled &&
						!t.params.freeMode.sticky &&
						c();
				}),
				a("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
					t.params.lazy.enabled &&
						(t.params.lazy.checkInView ? p() : c());
				}),
				a("transitionStart", () => {
					t.params.lazy.enabled &&
						(t.params.lazy.loadOnTransitionStart ||
							(!t.params.lazy.loadOnTransitionStart && !l)) &&
						(t.params.lazy.checkInView ? p() : c());
				}),
				a("transitionEnd", () => {
					t.params.lazy.enabled &&
						!t.params.lazy.loadOnTransitionStart &&
						(t.params.lazy.checkInView ? p() : c());
				}),
				a("slideChange", () => {
					const {
						lazy: e,
						cssMode: s,
						watchSlidesProgress: a,
						touchReleaseOnEdges: i,
						resistanceRatio: r,
					} = t.params;
					e.enabled && (s || (a && (i || 0 === r))) && c();
				}),
				a("destroy", () => {
					t.$el &&
						t.$el
							.find(`.${t.params.lazy.loadingClass}`)
							.removeClass(t.params.lazy.loadingClass);
				}),
				Object.assign(t.lazy, { load: c, loadInSlide: o });
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			function i(e, t) {
				const s = (function () {
					let e, t, s;
					return (a, i) => {
						for (t = -1, e = a.length; e - t > 1; )
							(s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
						return e;
					};
				})();
				let a, i;
				return (
					(this.x = e),
					(this.y = t),
					(this.lastIndex = e.length - 1),
					(this.interpolate = function (e) {
						return e
							? ((i = s(this.x, e)),
							  (a = i - 1),
							  ((e - this.x[a]) * (this.y[i] - this.y[a])) /
									(this.x[i] - this.x[a]) +
									this.y[a])
							: 0;
					}),
					this
				);
			}
			function r() {
				t.controller.control &&
					t.controller.spline &&
					((t.controller.spline = void 0),
					delete t.controller.spline);
			}
			s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
				(t.controller = { control: void 0 }),
				a("beforeInit", () => {
					t.controller.control = t.params.controller.control;
				}),
				a("update", () => {
					r();
				}),
				a("resize", () => {
					r();
				}),
				a("observerUpdate", () => {
					r();
				}),
				a("setTranslate", (e, s, a) => {
					t.controller.control && t.controller.setTranslate(s, a);
				}),
				a("setTransition", (e, s, a) => {
					t.controller.control && t.controller.setTransition(s, a);
				}),
				Object.assign(t.controller, {
					setTranslate: function (e, s) {
						const a = t.controller.control;
						let r, n;
						const l = t.constructor;
						function o(e) {
							const s = t.rtlTranslate
								? -t.translate
								: t.translate;
							"slide" === t.params.controller.by &&
								(!(function (e) {
									t.controller.spline ||
										(t.controller.spline = t.params.loop
											? new i(t.slidesGrid, e.slidesGrid)
											: new i(t.snapGrid, e.snapGrid));
								})(e),
								(n = -t.controller.spline.interpolate(-s))),
								(n && "container" !== t.params.controller.by) ||
									((r =
										(e.maxTranslate() - e.minTranslate()) /
										(t.maxTranslate() - t.minTranslate())),
									(n =
										(s - t.minTranslate()) * r +
										e.minTranslate())),
								t.params.controller.inverse &&
									(n = e.maxTranslate() - n),
								e.updateProgress(n),
								e.setTranslate(n, t),
								e.updateActiveIndex(),
								e.updateSlidesClasses();
						}
						if (Array.isArray(a))
							for (let e = 0; e < a.length; e += 1)
								a[e] !== s && a[e] instanceof l && o(a[e]);
						else a instanceof l && s !== a && o(a);
					},
					setTransition: function (e, s) {
						const a = t.constructor,
							i = t.controller.control;
						let r;
						function n(s) {
							s.setTransition(e, t),
								0 !== e &&
									(s.transitionStart(),
									s.params.autoHeight &&
										p(() => {
											s.updateAutoHeight();
										}),
									s.$wrapperEl.transitionEnd(() => {
										i &&
											(s.params.loop &&
												"slide" ===
													t.params.controller.by &&
												s.loopFix(),
											s.transitionEnd());
									}));
						}
						if (Array.isArray(i))
							for (r = 0; r < i.length; r += 1)
								i[r] !== s && i[r] instanceof a && n(i[r]);
						else i instanceof a && s !== i && n(i);
					},
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				a11y: {
					enabled: !0,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}",
					slideLabelMessage: "{{index}} / {{slidesLength}}",
					containerMessage: null,
					containerRoleDescriptionMessage: null,
					itemRoleDescriptionMessage: null,
					slideRole: "group",
					id: null,
				},
			}),
				(t.a11y = { clicked: !1 });
			let i = null;
			function r(e) {
				const t = i;
				0 !== t.length && (t.html(""), t.html(e));
			}
			function n(e) {
				e.attr("tabIndex", "0");
			}
			function l(e) {
				e.attr("tabIndex", "-1");
			}
			function o(e, t) {
				e.attr("role", t);
			}
			function c(e, t) {
				e.attr("aria-roledescription", t);
			}
			function p(e, t) {
				e.attr("aria-label", t);
			}
			function u(e) {
				e.attr("aria-disabled", !0);
			}
			function h(e) {
				e.attr("aria-disabled", !1);
			}
			function m(e) {
				if (13 !== e.keyCode && 32 !== e.keyCode) return;
				const s = t.params.a11y,
					a = d(e.target);
				t.navigation &&
					t.navigation.$nextEl &&
					a.is(t.navigation.$nextEl) &&
					((t.isEnd && !t.params.loop) || t.slideNext(),
					t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
					t.navigation &&
						t.navigation.$prevEl &&
						a.is(t.navigation.$prevEl) &&
						((t.isBeginning && !t.params.loop) || t.slidePrev(),
						t.isBeginning
							? r(s.firstSlideMessage)
							: r(s.prevSlideMessage)),
					t.pagination &&
						a.is(U(t.params.pagination.bulletClass)) &&
						a[0].click();
			}
			function f() {
				return (
					t.pagination &&
					t.pagination.bullets &&
					t.pagination.bullets.length
				);
			}
			function g() {
				return f() && t.params.pagination.clickable;
			}
			const v = (e, t, s) => {
					n(e),
						"BUTTON" !== e[0].tagName &&
							(o(e, "button"), e.on("keydown", m)),
						p(e, s),
						(function (e, t) {
							e.attr("aria-controls", t);
						})(e, t);
				},
				w = () => {
					t.a11y.clicked = !0;
				},
				b = () => {
					requestAnimationFrame(() => {
						requestAnimationFrame(() => {
							t.destroyed || (t.a11y.clicked = !1);
						});
					});
				},
				x = (e) => {
					if (t.a11y.clicked) return;
					const s = e.target.closest(`.${t.params.slideClass}`);
					if (!s || !t.slides.includes(s)) return;
					const a = t.slides.indexOf(s) === t.activeIndex,
						i =
							t.params.watchSlidesProgress &&
							t.visibleSlides &&
							t.visibleSlides.includes(s);
					a ||
						i ||
						(e.sourceCapabilities &&
							e.sourceCapabilities.firesTouchEvents) ||
						(t.isHorizontal()
							? (t.el.scrollLeft = 0)
							: (t.el.scrollTop = 0),
						t.slideTo(t.slides.indexOf(s), 0));
				},
				y = () => {
					const e = t.params.a11y;
					e.itemRoleDescriptionMessage &&
						c(d(t.slides), e.itemRoleDescriptionMessage),
						e.slideRole && o(d(t.slides), e.slideRole);
					const s = t.params.loop
						? t.slides.filter(
								(e) =>
									!e.classList.contains(
										t.params.slideDuplicateClass
									)
						  ).length
						: t.slides.length;
					e.slideLabelMessage &&
						t.slides.each((a, i) => {
							const r = d(a),
								n = t.params.loop
									? parseInt(
											r.attr("data-swiper-slide-index"),
											10
									  )
									: i;
							p(
								r,
								e.slideLabelMessage
									.replace(/\{\{index\}\}/, n + 1)
									.replace(/\{\{slidesLength\}\}/, s)
							);
						});
				},
				E = () => {
					const e = t.params.a11y;
					t.$el.append(i);
					const s = t.$el;
					e.containerRoleDescriptionMessage &&
						c(s, e.containerRoleDescriptionMessage),
						e.containerMessage && p(s, e.containerMessage);
					const a = t.$wrapperEl,
						r =
							e.id ||
							a.attr("id") ||
							`swiper-wrapper-${
								((n = 16),
								void 0 === n && (n = 16),
								"x"
									.repeat(n)
									.replace(/x/g, () =>
										Math.round(16 * Math.random()).toString(
											16
										)
									))
							}`;
					var n;
					const l =
						t.params.autoplay && t.params.autoplay.enabled
							? "off"
							: "polite";
					var o;
					let d, u;
					(o = r),
						a.attr("id", o),
						(function (e, t) {
							e.attr("aria-live", t);
						})(a, l),
						y(),
						t.navigation &&
							t.navigation.$nextEl &&
							(d = t.navigation.$nextEl),
						t.navigation &&
							t.navigation.$prevEl &&
							(u = t.navigation.$prevEl),
						d && d.length && v(d, r, e.nextSlideMessage),
						u && u.length && v(u, r, e.prevSlideMessage),
						g() &&
							t.pagination.$el.on(
								"keydown",
								U(t.params.pagination.bulletClass),
								m
							),
						t.$el.on("focus", x, !0),
						t.$el.on("pointerdown", w, !0),
						t.$el.on("pointerup", b, !0);
				};
			a("beforeInit", () => {
				i = d(
					`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
				);
			}),
				a("afterInit", () => {
					t.params.a11y.enabled && E();
				}),
				a(
					"slidesLengthChange snapGridLengthChange slidesGridLengthChange",
					() => {
						t.params.a11y.enabled && y();
					}
				),
				a("fromEdge toEdge afterInit lock unlock", () => {
					t.params.a11y.enabled &&
						(function () {
							if (
								t.params.loop ||
								t.params.rewind ||
								!t.navigation
							)
								return;
							const { $nextEl: e, $prevEl: s } = t.navigation;
							s &&
								s.length > 0 &&
								(t.isBeginning ? (u(s), l(s)) : (h(s), n(s))),
								e &&
									e.length > 0 &&
									(t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
						})();
				}),
				a("paginationUpdate", () => {
					t.params.a11y.enabled &&
						(function () {
							const e = t.params.a11y;
							f() &&
								t.pagination.bullets.each((s) => {
									const a = d(s);
									t.params.pagination.clickable &&
										(n(a),
										t.params.pagination.renderBullet ||
											(o(a, "button"),
											p(
												a,
												e.paginationBulletMessage.replace(
													/\{\{index\}\}/,
													a.index() + 1
												)
											))),
										a.is(
											`.${t.params.pagination.bulletActiveClass}`
										)
											? a.attr("aria-current", "true")
											: a.removeAttr("aria-current");
								});
						})();
				}),
				a("destroy", () => {
					t.params.a11y.enabled &&
						(function () {
							let e, s;
							i && i.length > 0 && i.remove(),
								t.navigation &&
									t.navigation.$nextEl &&
									(e = t.navigation.$nextEl),
								t.navigation &&
									t.navigation.$prevEl &&
									(s = t.navigation.$prevEl),
								e && e.off("keydown", m),
								s && s.off("keydown", m),
								g() &&
									t.pagination.$el.off(
										"keydown",
										U(t.params.pagination.bulletClass),
										m
									),
								t.$el.off("focus", x, !0),
								t.$el.off("pointerdown", w, !0),
								t.$el.off("pointerup", b, !0);
						})();
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				history: {
					enabled: !1,
					root: "",
					replaceState: !1,
					key: "slides",
					keepQuery: !1,
				},
			});
			let i = !1,
				n = {};
			const l = (e) =>
					e
						.toString()
						.replace(/\s+/g, "-")
						.replace(/[^\w-]+/g, "")
						.replace(/--+/g, "-")
						.replace(/^-+/, "")
						.replace(/-+$/, ""),
				o = (e) => {
					const t = r();
					let s;
					s = e ? new URL(e) : t.location;
					const a = s.pathname
							.slice(1)
							.split("/")
							.filter((e) => "" !== e),
						i = a.length;
					return { key: a[i - 2], value: a[i - 1] };
				},
				d = (e, s) => {
					const a = r();
					if (!i || !t.params.history.enabled) return;
					let n;
					n = t.params.url ? new URL(t.params.url) : a.location;
					const o = t.slides.eq(s);
					let d = l(o.attr("data-history"));
					if (t.params.history.root.length > 0) {
						let s = t.params.history.root;
						"/" === s[s.length - 1] &&
							(s = s.slice(0, s.length - 1)),
							(d = `${s}/${e}/${d}`);
					} else n.pathname.includes(e) || (d = `${e}/${d}`);
					t.params.history.keepQuery && (d += n.search);
					const c = a.history.state;
					(c && c.value === d) ||
						(t.params.history.replaceState
							? a.history.replaceState({ value: d }, null, d)
							: a.history.pushState({ value: d }, null, d));
				},
				c = (e, s, a) => {
					if (s)
						for (let i = 0, r = t.slides.length; i < r; i += 1) {
							const r = t.slides.eq(i);
							if (
								l(r.attr("data-history")) === s &&
								!r.hasClass(t.params.slideDuplicateClass)
							) {
								const s = r.index();
								t.slideTo(s, e, a);
							}
						}
					else t.slideTo(0, e, a);
				},
				p = () => {
					(n = o(t.params.url)), c(t.params.speed, n.value, !1);
				};
			a("init", () => {
				t.params.history.enabled &&
					(() => {
						const e = r();
						if (t.params.history) {
							if (!e.history || !e.history.pushState)
								return (
									(t.params.history.enabled = !1),
									void (t.params.hashNavigation.enabled = !0)
								);
							(i = !0),
								(n = o(t.params.url)),
								(n.key || n.value) &&
									(c(0, n.value, t.params.runCallbacksOnInit),
									t.params.history.replaceState ||
										e.addEventListener("popstate", p));
						}
					})();
			}),
				a("destroy", () => {
					t.params.history.enabled &&
						(() => {
							const e = r();
							t.params.history.replaceState ||
								e.removeEventListener("popstate", p);
						})();
				}),
				a("transitionEnd _freeModeNoMomentumRelease", () => {
					i && d(t.params.history.key, t.activeIndex);
				}),
				a("slideChange", () => {
					i &&
						t.params.cssMode &&
						d(t.params.history.key, t.activeIndex);
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, emit: i, on: n } = e,
				l = !1;
			const o = a(),
				c = r();
			s({
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1,
				},
			});
			const p = () => {
					i("hashChange");
					const e = o.location.hash.replace("#", "");
					if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
						const s = t.$wrapperEl
							.children(
								`.${t.params.slideClass}[data-hash="${e}"]`
							)
							.index();
						if (void 0 === s) return;
						t.slideTo(s);
					}
				},
				u = () => {
					if (l && t.params.hashNavigation.enabled)
						if (
							t.params.hashNavigation.replaceState &&
							c.history &&
							c.history.replaceState
						)
							c.history.replaceState(
								null,
								null,
								`#${t.slides
									.eq(t.activeIndex)
									.attr("data-hash")}` || ""
							),
								i("hashSet");
						else {
							const e = t.slides.eq(t.activeIndex),
								s =
									e.attr("data-hash") ||
									e.attr("data-history");
							(o.location.hash = s || ""), i("hashSet");
						}
				};
			n("init", () => {
				t.params.hashNavigation.enabled &&
					(() => {
						if (
							!t.params.hashNavigation.enabled ||
							(t.params.history && t.params.history.enabled)
						)
							return;
						l = !0;
						const e = o.location.hash.replace("#", "");
						if (e) {
							const s = 0;
							for (
								let a = 0, i = t.slides.length;
								a < i;
								a += 1
							) {
								const i = t.slides.eq(a);
								if (
									(i.attr("data-hash") ||
										i.attr("data-history")) === e &&
									!i.hasClass(t.params.slideDuplicateClass)
								) {
									const e = i.index();
									t.slideTo(
										e,
										s,
										t.params.runCallbacksOnInit,
										!0
									);
								}
							}
						}
						t.params.hashNavigation.watchState &&
							d(c).on("hashchange", p);
					})();
			}),
				n("destroy", () => {
					t.params.hashNavigation.enabled &&
						t.params.hashNavigation.watchState &&
						d(c).off("hashchange", p);
				}),
				n("transitionEnd _freeModeNoMomentumRelease", () => {
					l && u();
				}),
				n("slideChange", () => {
					l && t.params.cssMode && u();
				});
		},
		function (e) {
			let t,
				{ swiper: s, extendParams: i, on: r, emit: n } = e;
			function l() {
				if (!s.size)
					return (
						(s.autoplay.running = !1), void (s.autoplay.paused = !1)
					);
				const e = s.slides.eq(s.activeIndex);
				let a = s.params.autoplay.delay;
				e.attr("data-swiper-autoplay") &&
					(a =
						e.attr("data-swiper-autoplay") ||
						s.params.autoplay.delay),
					clearTimeout(t),
					(t = p(() => {
						let e;
						s.params.autoplay.reverseDirection
							? s.params.loop
								? (s.loopFix(),
								  (e = s.slidePrev(s.params.speed, !0, !0)),
								  n("autoplay"))
								: s.isBeginning
								? s.params.autoplay.stopOnLastSlide
									? d()
									: ((e = s.slideTo(
											s.slides.length - 1,
											s.params.speed,
											!0,
											!0
									  )),
									  n("autoplay"))
								: ((e = s.slidePrev(s.params.speed, !0, !0)),
								  n("autoplay"))
							: s.params.loop
							? (s.loopFix(),
							  (e = s.slideNext(s.params.speed, !0, !0)),
							  n("autoplay"))
							: s.isEnd
							? s.params.autoplay.stopOnLastSlide
								? d()
								: ((e = s.slideTo(0, s.params.speed, !0, !0)),
								  n("autoplay"))
							: ((e = s.slideNext(s.params.speed, !0, !0)),
							  n("autoplay")),
							((s.params.cssMode && s.autoplay.running) ||
								!1 === e) &&
								l();
					}, a));
			}
			function o() {
				return (
					void 0 === t &&
					!s.autoplay.running &&
					((s.autoplay.running = !0), n("autoplayStart"), l(), !0)
				);
			}
			function d() {
				return (
					!!s.autoplay.running &&
					void 0 !== t &&
					(t && (clearTimeout(t), (t = void 0)),
					(s.autoplay.running = !1),
					n("autoplayStop"),
					!0)
				);
			}
			function c(e) {
				s.autoplay.running &&
					(s.autoplay.paused ||
						(t && clearTimeout(t),
						(s.autoplay.paused = !0),
						0 !== e && s.params.autoplay.waitForTransition
							? ["transitionend", "webkitTransitionEnd"].forEach(
									(e) => {
										s.$wrapperEl[0].addEventListener(e, h);
									}
							  )
							: ((s.autoplay.paused = !1), l())));
			}
			function u() {
				const e = a();
				"hidden" === e.visibilityState && s.autoplay.running && c(),
					"visible" === e.visibilityState &&
						s.autoplay.paused &&
						(l(), (s.autoplay.paused = !1));
			}
			function h(e) {
				s &&
					!s.destroyed &&
					s.$wrapperEl &&
					e.target === s.$wrapperEl[0] &&
					(["transitionend", "webkitTransitionEnd"].forEach((e) => {
						s.$wrapperEl[0].removeEventListener(e, h);
					}),
					(s.autoplay.paused = !1),
					s.autoplay.running ? l() : d());
			}
			function m() {
				s.params.autoplay.disableOnInteraction
					? d()
					: (n("autoplayPause"), c()),
					["transitionend", "webkitTransitionEnd"].forEach((e) => {
						s.$wrapperEl[0].removeEventListener(e, h);
					});
			}
			function f() {
				s.params.autoplay.disableOnInteraction ||
					((s.autoplay.paused = !1), n("autoplayResume"), l());
			}
			(s.autoplay = { running: !1, paused: !1 }),
				i({
					autoplay: {
						enabled: !1,
						delay: 3e3,
						waitForTransition: !0,
						disableOnInteraction: !0,
						stopOnLastSlide: !1,
						reverseDirection: !1,
						pauseOnMouseEnter: !1,
					},
				}),
				r("init", () => {
					if (s.params.autoplay.enabled) {
						o();
						a().addEventListener("visibilitychange", u),
							s.params.autoplay.pauseOnMouseEnter &&
								(s.$el.on("mouseenter", m),
								s.$el.on("mouseleave", f));
					}
				}),
				r("beforeTransitionStart", (e, t, a) => {
					s.autoplay.running &&
						(a || !s.params.autoplay.disableOnInteraction
							? s.autoplay.pause(t)
							: d());
				}),
				r("sliderFirstMove", () => {
					s.autoplay.running &&
						(s.params.autoplay.disableOnInteraction ? d() : c());
				}),
				r("touchEnd", () => {
					s.params.cssMode &&
						s.autoplay.paused &&
						!s.params.autoplay.disableOnInteraction &&
						l();
				}),
				r("destroy", () => {
					s.$el.off("mouseenter", m),
						s.$el.off("mouseleave", f),
						s.autoplay.running && d();
					a().removeEventListener("visibilitychange", u);
				}),
				Object.assign(s.autoplay, {
					pause: c,
					run: l,
					start: o,
					stop: d,
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				thumbs: {
					swiper: null,
					multipleActiveThumbs: !0,
					autoScrollOffset: 0,
					slideThumbActiveClass: "swiper-slide-thumb-active",
					thumbsContainerClass: "swiper-thumbs",
				},
			});
			let i = !1,
				r = !1;
			function n() {
				const e = t.thumbs.swiper;
				if (!e || e.destroyed) return;
				const s = e.clickedIndex,
					a = e.clickedSlide;
				if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass))
					return;
				if (null == s) return;
				let i;
				if (
					((i = e.params.loop
						? parseInt(
								d(e.clickedSlide).attr(
									"data-swiper-slide-index"
								),
								10
						  )
						: s),
					t.params.loop)
				) {
					let e = t.activeIndex;
					t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
						(t.loopFix(),
						(t._clientLeft = t.$wrapperEl[0].clientLeft),
						(e = t.activeIndex));
					const s = t.slides
							.eq(e)
							.prevAll(`[data-swiper-slide-index="${i}"]`)
							.eq(0)
							.index(),
						a = t.slides
							.eq(e)
							.nextAll(`[data-swiper-slide-index="${i}"]`)
							.eq(0)
							.index();
					i =
						void 0 === s
							? a
							: void 0 === a
							? s
							: a - e < e - s
							? a
							: s;
				}
				t.slideTo(i);
			}
			function l() {
				const { thumbs: e } = t.params;
				if (i) return !1;
				i = !0;
				const s = t.constructor;
				if (e.swiper instanceof s)
					(t.thumbs.swiper = e.swiper),
						Object.assign(t.thumbs.swiper.originalParams, {
							watchSlidesProgress: !0,
							slideToClickedSlide: !1,
						}),
						Object.assign(t.thumbs.swiper.params, {
							watchSlidesProgress: !0,
							slideToClickedSlide: !1,
						});
				else if (m(e.swiper)) {
					const a = Object.assign({}, e.swiper);
					Object.assign(a, {
						watchSlidesProgress: !0,
						slideToClickedSlide: !1,
					}),
						(t.thumbs.swiper = new s(a)),
						(r = !0);
				}
				return (
					t.thumbs.swiper.$el.addClass(
						t.params.thumbs.thumbsContainerClass
					),
					t.thumbs.swiper.on("tap", n),
					!0
				);
			}
			function o(e) {
				const s = t.thumbs.swiper;
				if (!s || s.destroyed) return;
				const a =
					"auto" === s.params.slidesPerView
						? s.slidesPerViewDynamic()
						: s.params.slidesPerView;
				let i = 1;
				const r = t.params.thumbs.slideThumbActiveClass;
				if (
					(t.params.slidesPerView > 1 &&
						!t.params.centeredSlides &&
						(i = t.params.slidesPerView),
					t.params.thumbs.multipleActiveThumbs || (i = 1),
					(i = Math.floor(i)),
					s.slides.removeClass(r),
					s.params.loop ||
						(s.params.virtual && s.params.virtual.enabled))
				)
					for (let e = 0; e < i; e += 1)
						s.$wrapperEl
							.children(
								`[data-swiper-slide-index="${t.realIndex + e}"]`
							)
							.addClass(r);
				else
					for (let e = 0; e < i; e += 1)
						s.slides.eq(t.realIndex + e).addClass(r);
				const n = t.params.thumbs.autoScrollOffset,
					l = n && !s.params.loop;
				if (t.realIndex !== s.realIndex || l) {
					let i,
						r,
						o = s.activeIndex;
					if (s.params.loop) {
						s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
							(s.loopFix(),
							(s._clientLeft = s.$wrapperEl[0].clientLeft),
							(o = s.activeIndex));
						const e = s.slides
								.eq(o)
								.prevAll(
									`[data-swiper-slide-index="${t.realIndex}"]`
								)
								.eq(0)
								.index(),
							a = s.slides
								.eq(o)
								.nextAll(
									`[data-swiper-slide-index="${t.realIndex}"]`
								)
								.eq(0)
								.index();
						(i =
							void 0 === e
								? a
								: void 0 === a
								? e
								: a - o == o - e
								? s.params.slidesPerGroup > 1
									? a
									: o
								: a - o < o - e
								? a
								: e),
							(r =
								t.activeIndex > t.previousIndex
									? "next"
									: "prev");
					} else
						(i = t.realIndex),
							(r = i > t.previousIndex ? "next" : "prev");
					l && (i += "next" === r ? n : -1 * n),
						s.visibleSlidesIndexes &&
							s.visibleSlidesIndexes.indexOf(i) < 0 &&
							(s.params.centeredSlides
								? (i =
										i > o
											? i - Math.floor(a / 2) + 1
											: i + Math.floor(a / 2) - 1)
								: i > o && s.params.slidesPerGroup,
							s.slideTo(i, e ? 0 : void 0));
				}
			}
			(t.thumbs = { swiper: null }),
				a("beforeInit", () => {
					const { thumbs: e } = t.params;
					e && e.swiper && (l(), o(!0));
				}),
				a("slideChange update resize observerUpdate", () => {
					o();
				}),
				a("setTransition", (e, s) => {
					const a = t.thumbs.swiper;
					a && !a.destroyed && a.setTransition(s);
				}),
				a("beforeDestroy", () => {
					const e = t.thumbs.swiper;
					e && !e.destroyed && r && e.destroy();
				}),
				Object.assign(t.thumbs, { init: l, update: o });
		},
		function (e) {
			let { swiper: t, extendParams: s, emit: a, once: i } = e;
			s({
				freeMode: {
					enabled: !1,
					momentum: !0,
					momentumRatio: 1,
					momentumBounce: !0,
					momentumBounceRatio: 1,
					momentumVelocityRatio: 1,
					sticky: !1,
					minimumVelocity: 0.02,
				},
			}),
				Object.assign(t, {
					freeMode: {
						onTouchStart: function () {
							const e = t.getTranslate();
							t.setTranslate(e),
								t.setTransition(0),
								(t.touchEventsData.velocities.length = 0),
								t.freeMode.onTouchEnd({
									currentPos: t.rtl
										? t.translate
										: -t.translate,
								});
						},
						onTouchMove: function () {
							const { touchEventsData: e, touches: s } = t;
							0 === e.velocities.length &&
								e.velocities.push({
									position:
										s[
											t.isHorizontal()
												? "startX"
												: "startY"
										],
									time: e.touchStartTime,
								}),
								e.velocities.push({
									position:
										s[
											t.isHorizontal()
												? "currentX"
												: "currentY"
										],
									time: u(),
								});
						},
						onTouchEnd: function (e) {
							let { currentPos: s } = e;
							const {
									params: r,
									$wrapperEl: n,
									rtlTranslate: l,
									snapGrid: o,
									touchEventsData: d,
								} = t,
								c = u() - d.touchStartTime;
							if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
							else if (s > -t.maxTranslate())
								t.slides.length < o.length
									? t.slideTo(o.length - 1)
									: t.slideTo(t.slides.length - 1);
							else {
								if (r.freeMode.momentum) {
									if (d.velocities.length > 1) {
										const e = d.velocities.pop(),
											s = d.velocities.pop(),
											a = e.position - s.position,
											i = e.time - s.time;
										(t.velocity = a / i),
											(t.velocity /= 2),
											Math.abs(t.velocity) <
												r.freeMode.minimumVelocity &&
												(t.velocity = 0),
											(i > 150 || u() - e.time > 300) &&
												(t.velocity = 0);
									} else t.velocity = 0;
									(t.velocity *=
										r.freeMode.momentumVelocityRatio),
										(d.velocities.length = 0);
									let e = 1e3 * r.freeMode.momentumRatio;
									const s = t.velocity * e;
									let c = t.translate + s;
									l && (c = -c);
									let p,
										h = !1;
									const m =
										20 *
										Math.abs(t.velocity) *
										r.freeMode.momentumBounceRatio;
									let f;
									if (c < t.maxTranslate())
										r.freeMode.momentumBounce
											? (c + t.maxTranslate() < -m &&
													(c = t.maxTranslate() - m),
											  (p = t.maxTranslate()),
											  (h = !0),
											  (d.allowMomentumBounce = !0))
											: (c = t.maxTranslate()),
											r.loop &&
												r.centeredSlides &&
												(f = !0);
									else if (c > t.minTranslate())
										r.freeMode.momentumBounce
											? (c - t.minTranslate() > m &&
													(c = t.minTranslate() + m),
											  (p = t.minTranslate()),
											  (h = !0),
											  (d.allowMomentumBounce = !0))
											: (c = t.minTranslate()),
											r.loop &&
												r.centeredSlides &&
												(f = !0);
									else if (r.freeMode.sticky) {
										let e;
										for (let t = 0; t < o.length; t += 1)
											if (o[t] > -c) {
												e = t;
												break;
											}
										(c =
											Math.abs(o[e] - c) <
												Math.abs(o[e - 1] - c) ||
											"next" === t.swipeDirection
												? o[e]
												: o[e - 1]),
											(c = -c);
									}
									if (
										(f &&
											i("transitionEnd", () => {
												t.loopFix();
											}),
										0 !== t.velocity)
									) {
										if (
											((e = l
												? Math.abs(
														(-c - t.translate) /
															t.velocity
												  )
												: Math.abs(
														(c - t.translate) /
															t.velocity
												  )),
											r.freeMode.sticky)
										) {
											const s = Math.abs(
													(l ? -c : c) - t.translate
												),
												a =
													t.slidesSizesGrid[
														t.activeIndex
													];
											e =
												s < a
													? r.speed
													: s < 2 * a
													? 1.5 * r.speed
													: 2.5 * r.speed;
										}
									} else if (r.freeMode.sticky)
										return void t.slideToClosest();
									r.freeMode.momentumBounce && h
										? (t.updateProgress(p),
										  t.setTransition(e),
										  t.setTranslate(c),
										  t.transitionStart(
												!0,
												t.swipeDirection
										  ),
										  (t.animating = !0),
										  n.transitionEnd(() => {
												t &&
													!t.destroyed &&
													d.allowMomentumBounce &&
													(a("momentumBounce"),
													t.setTransition(r.speed),
													setTimeout(() => {
														t.setTranslate(p),
															n.transitionEnd(
																() => {
																	t &&
																		!t.destroyed &&
																		t.transitionEnd();
																}
															);
													}, 0));
										  }))
										: t.velocity
										? (a("_freeModeNoMomentumRelease"),
										  t.updateProgress(c),
										  t.setTransition(e),
										  t.setTranslate(c),
										  t.transitionStart(
												!0,
												t.swipeDirection
										  ),
										  t.animating ||
												((t.animating = !0),
												n.transitionEnd(() => {
													t &&
														!t.destroyed &&
														t.transitionEnd();
												})))
										: t.updateProgress(c),
										t.updateActiveIndex(),
										t.updateSlidesClasses();
								} else {
									if (r.freeMode.sticky)
										return void t.slideToClosest();
									r.freeMode &&
										a("_freeModeNoMomentumRelease");
								}
								(!r.freeMode.momentum || c >= r.longSwipesMs) &&
									(t.updateProgress(),
									t.updateActiveIndex(),
									t.updateSlidesClasses());
							}
						},
					},
				});
		},
		function (e) {
			let t,
				s,
				a,
				{ swiper: i, extendParams: r } = e;
			r({ grid: { rows: 1, fill: "column" } }),
				(i.grid = {
					initSlides: (e) => {
						const { slidesPerView: r } = i.params,
							{ rows: n, fill: l } = i.params.grid;
						(s = t / n),
							(a = Math.floor(e / n)),
							(t =
								Math.floor(e / n) === e / n
									? e
									: Math.ceil(e / n) * n),
							"auto" !== r &&
								"row" === l &&
								(t = Math.max(t, r * n));
					},
					updateSlide: (e, r, n, l) => {
						const { slidesPerGroup: o, spaceBetween: d } = i.params,
							{ rows: c, fill: p } = i.params.grid;
						let u, h, m;
						if ("row" === p && o > 1) {
							const s = Math.floor(e / (o * c)),
								a = e - c * o * s,
								i =
									0 === s
										? o
										: Math.min(
												Math.ceil((n - s * c * o) / c),
												o
										  );
							(m = Math.floor(a / i)),
								(h = a - m * i + s * o),
								(u = h + (m * t) / c),
								r.css({ "-webkit-order": u, order: u });
						} else
							"column" === p
								? ((h = Math.floor(e / c)),
								  (m = e - h * c),
								  (h > a || (h === a && m === c - 1)) &&
										((m += 1),
										m >= c && ((m = 0), (h += 1))))
								: ((m = Math.floor(e / s)), (h = e - m * s));
						r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
					},
					updateWrapperSize: (e, s, a) => {
						const {
								spaceBetween: r,
								centeredSlides: n,
								roundLengths: l,
							} = i.params,
							{ rows: o } = i.params.grid;
						if (
							((i.virtualSize = (e + r) * t),
							(i.virtualSize = Math.ceil(i.virtualSize / o) - r),
							i.$wrapperEl.css({
								[a("width")]: `${i.virtualSize + r}px`,
							}),
							n)
						) {
							s.splice(0, s.length);
							const e = [];
							for (let t = 0; t < s.length; t += 1) {
								let a = s[t];
								l && (a = Math.floor(a)),
									s[t] < i.virtualSize + s[0] && e.push(a);
							}
							s.push(...e);
						}
					},
				});
		},
		function (e) {
			let { swiper: t } = e;
			Object.assign(t, {
				appendSlide: K.bind(t),
				prependSlide: Z.bind(t),
				addSlide: Q.bind(t),
				removeSlide: J.bind(t),
				removeAllSlides: ee.bind(t),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({ fadeEffect: { crossFade: !1, transformEl: null } }),
				te({
					effect: "fade",
					swiper: t,
					on: a,
					setTranslate: () => {
						const { slides: e } = t,
							s = t.params.fadeEffect;
						for (let a = 0; a < e.length; a += 1) {
							const e = t.slides.eq(a);
							let i = -e[0].swiperSlideOffset;
							t.params.virtualTranslate || (i -= t.translate);
							let r = 0;
							t.isHorizontal() || ((r = i), (i = 0));
							const n = t.params.fadeEffect.crossFade
								? Math.max(1 - Math.abs(e[0].progress), 0)
								: 1 + Math.min(Math.max(e[0].progress, -1), 0);
							se(s, e)
								.css({ opacity: n })
								.transform(`translate3d(${i}px, ${r}px, 0px)`);
						}
					},
					setTransition: (e) => {
						const { transformEl: s } = t.params.fadeEffect;
						(s ? t.slides.find(s) : t.slides).transition(e),
							ae({
								swiper: t,
								duration: e,
								transformEl: s,
								allSlides: !0,
							});
					},
					overwriteParams: () => ({
						slidesPerView: 1,
						slidesPerGroup: 1,
						watchSlidesProgress: !0,
						spaceBetween: 0,
						virtualTranslate: !t.params.cssMode,
					}),
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: 0.94,
				},
			});
			const i = (e, t, s) => {
				let a = s
						? e.find(".swiper-slide-shadow-left")
						: e.find(".swiper-slide-shadow-top"),
					i = s
						? e.find(".swiper-slide-shadow-right")
						: e.find(".swiper-slide-shadow-bottom");
				0 === a.length &&
					((a = d(
						`<div class="swiper-slide-shadow-${
							s ? "left" : "top"
						}"></div>`
					)),
					e.append(a)),
					0 === i.length &&
						((i = d(
							`<div class="swiper-slide-shadow-${
								s ? "right" : "bottom"
							}"></div>`
						)),
						e.append(i)),
					a.length && (a[0].style.opacity = Math.max(-t, 0)),
					i.length && (i[0].style.opacity = Math.max(t, 0));
			};
			te({
				effect: "cube",
				swiper: t,
				on: a,
				setTranslate: () => {
					const {
							$el: e,
							$wrapperEl: s,
							slides: a,
							width: r,
							height: n,
							rtlTranslate: l,
							size: o,
							browser: c,
						} = t,
						p = t.params.cubeEffect,
						u = t.isHorizontal(),
						h = t.virtual && t.params.virtual.enabled;
					let m,
						f = 0;
					p.shadow &&
						(u
							? ((m = s.find(".swiper-cube-shadow")),
							  0 === m.length &&
									((m = d(
										'<div class="swiper-cube-shadow"></div>'
									)),
									s.append(m)),
							  m.css({ height: `${r}px` }))
							: ((m = e.find(".swiper-cube-shadow")),
							  0 === m.length &&
									((m = d(
										'<div class="swiper-cube-shadow"></div>'
									)),
									e.append(m))));
					for (let e = 0; e < a.length; e += 1) {
						const t = a.eq(e);
						let s = e;
						h &&
							(s = parseInt(
								t.attr("data-swiper-slide-index"),
								10
							));
						let r = 90 * s,
							n = Math.floor(r / 360);
						l && ((r = -r), (n = Math.floor(-r / 360)));
						const d = Math.max(Math.min(t[0].progress, 1), -1);
						let c = 0,
							m = 0,
							g = 0;
						s % 4 == 0
							? ((c = 4 * -n * o), (g = 0))
							: (s - 1) % 4 == 0
							? ((c = 0), (g = 4 * -n * o))
							: (s - 2) % 4 == 0
							? ((c = o + 4 * n * o), (g = o))
							: (s - 3) % 4 == 0 &&
							  ((c = -o), (g = 3 * o + 4 * o * n)),
							l && (c = -c),
							u || ((m = c), (c = 0));
						const v = `rotateX(${u ? 0 : -r}deg) rotateY(${
							u ? r : 0
						}deg) translate3d(${c}px, ${m}px, ${g}px)`;
						d <= 1 &&
							d > -1 &&
							((f = 90 * s + 90 * d),
							l && (f = 90 * -s - 90 * d)),
							t.transform(v),
							p.slideShadows && i(t, d, u);
					}
					if (
						(s.css({
							"-webkit-transform-origin": `50% 50% -${o / 2}px`,
							"transform-origin": `50% 50% -${o / 2}px`,
						}),
						p.shadow)
					)
						if (u)
							m.transform(
								`translate3d(0px, ${
									r / 2 + p.shadowOffset
								}px, ${
									-r / 2
								}px) rotateX(90deg) rotateZ(0deg) scale(${
									p.shadowScale
								})`
							);
						else {
							const e =
									Math.abs(f) -
									90 * Math.floor(Math.abs(f) / 90),
								t =
									1.5 -
									(Math.sin((2 * e * Math.PI) / 360) / 2 +
										Math.cos((2 * e * Math.PI) / 360) / 2),
								s = p.shadowScale,
								a = p.shadowScale / t,
								i = p.shadowOffset;
							m.transform(
								`scale3d(${s}, 1, ${a}) translate3d(0px, ${
									n / 2 + i
								}px, ${-n / 2 / a}px) rotateX(-90deg)`
							);
						}
					const g = c.isSafari || c.isWebView ? -o / 2 : 0;
					s.transform(
						`translate3d(0px,0,${g}px) rotateX(${
							t.isHorizontal() ? 0 : f
						}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`
					),
						s[0].style.setProperty(
							"--swiper-cube-translate-z",
							`${g}px`
						);
				},
				setTransition: (e) => {
					const { $el: s, slides: a } = t;
					a
						.transition(e)
						.find(
							".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
						)
						.transition(e),
						t.params.cubeEffect.shadow &&
							!t.isHorizontal() &&
							s.find(".swiper-cube-shadow").transition(e);
				},
				recreateShadows: () => {
					const e = t.isHorizontal();
					t.slides.each((t) => {
						const s = Math.max(Math.min(t.progress, 1), -1);
						i(d(t), s, e);
					});
				},
				getEffectParams: () => t.params.cubeEffect,
				perspective: () => !0,
				overwriteParams: () => ({
					slidesPerView: 1,
					slidesPerGroup: 1,
					watchSlidesProgress: !0,
					resistanceRatio: 0,
					spaceBetween: 0,
					centeredSlides: !1,
					virtualTranslate: !0,
				}),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0,
					transformEl: null,
				},
			});
			const i = (e, s, a) => {
				let i = t.isHorizontal()
						? e.find(".swiper-slide-shadow-left")
						: e.find(".swiper-slide-shadow-top"),
					r = t.isHorizontal()
						? e.find(".swiper-slide-shadow-right")
						: e.find(".swiper-slide-shadow-bottom");
				0 === i.length &&
					(i = ie(a, e, t.isHorizontal() ? "left" : "top")),
					0 === r.length &&
						(r = ie(a, e, t.isHorizontal() ? "right" : "bottom")),
					i.length && (i[0].style.opacity = Math.max(-s, 0)),
					r.length && (r[0].style.opacity = Math.max(s, 0));
			};
			te({
				effect: "flip",
				swiper: t,
				on: a,
				setTranslate: () => {
					const { slides: e, rtlTranslate: s } = t,
						a = t.params.flipEffect;
					for (let r = 0; r < e.length; r += 1) {
						const n = e.eq(r);
						let l = n[0].progress;
						t.params.flipEffect.limitRotation &&
							(l = Math.max(Math.min(n[0].progress, 1), -1));
						const o = n[0].swiperSlideOffset;
						let d = -180 * l,
							c = 0,
							p = t.params.cssMode ? -o - t.translate : -o,
							u = 0;
						t.isHorizontal()
							? s && (d = -d)
							: ((u = p), (p = 0), (c = -d), (d = 0)),
							(n[0].style.zIndex =
								-Math.abs(Math.round(l)) + e.length),
							a.slideShadows && i(n, l, a);
						const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
						se(a, n).transform(h);
					}
				},
				setTransition: (e) => {
					const { transformEl: s } = t.params.flipEffect;
					(s ? t.slides.find(s) : t.slides)
						.transition(e)
						.find(
							".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
						)
						.transition(e),
						ae({ swiper: t, duration: e, transformEl: s });
				},
				recreateShadows: () => {
					const e = t.params.flipEffect;
					t.slides.each((s) => {
						const a = d(s);
						let r = a[0].progress;
						t.params.flipEffect.limitRotation &&
							(r = Math.max(Math.min(s.progress, 1), -1)),
							i(a, r, e);
					});
				},
				getEffectParams: () => t.params.flipEffect,
				perspective: () => !0,
				overwriteParams: () => ({
					slidesPerView: 1,
					slidesPerGroup: 1,
					watchSlidesProgress: !0,
					spaceBetween: 0,
					virtualTranslate: !t.params.cssMode,
				}),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					scale: 1,
					modifier: 1,
					slideShadows: !0,
					transformEl: null,
				},
			}),
				te({
					effect: "coverflow",
					swiper: t,
					on: a,
					setTranslate: () => {
						const {
								width: e,
								height: s,
								slides: a,
								slidesSizesGrid: i,
							} = t,
							r = t.params.coverflowEffect,
							n = t.isHorizontal(),
							l = t.translate,
							o = n ? e / 2 - l : s / 2 - l,
							d = n ? r.rotate : -r.rotate,
							c = r.depth;
						for (let e = 0, t = a.length; e < t; e += 1) {
							const t = a.eq(e),
								s = i[e],
								l = (o - t[0].swiperSlideOffset - s / 2) / s,
								p =
									"function" == typeof r.modifier
										? r.modifier(l)
										: l * r.modifier;
							let u = n ? d * p : 0,
								h = n ? 0 : d * p,
								m = -c * Math.abs(p),
								f = r.stretch;
							"string" == typeof f &&
								-1 !== f.indexOf("%") &&
								(f = (parseFloat(r.stretch) / 100) * s);
							let g = n ? 0 : f * p,
								v = n ? f * p : 0,
								w = 1 - (1 - r.scale) * Math.abs(p);
							Math.abs(v) < 0.001 && (v = 0),
								Math.abs(g) < 0.001 && (g = 0),
								Math.abs(m) < 0.001 && (m = 0),
								Math.abs(u) < 0.001 && (u = 0),
								Math.abs(h) < 0.001 && (h = 0),
								Math.abs(w) < 0.001 && (w = 0);
							const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
							if (
								(se(r, t).transform(b),
								(t[0].style.zIndex =
									1 - Math.abs(Math.round(p))),
								r.slideShadows)
							) {
								let e = n
										? t.find(".swiper-slide-shadow-left")
										: t.find(".swiper-slide-shadow-top"),
									s = n
										? t.find(".swiper-slide-shadow-right")
										: t.find(".swiper-slide-shadow-bottom");
								0 === e.length &&
									(e = ie(r, t, n ? "left" : "top")),
									0 === s.length &&
										(s = ie(r, t, n ? "right" : "bottom")),
									e.length &&
										(e[0].style.opacity = p > 0 ? p : 0),
									s.length &&
										(s[0].style.opacity = -p > 0 ? -p : 0);
							}
						}
					},
					setTransition: (e) => {
						const { transformEl: s } = t.params.coverflowEffect;
						(s ? t.slides.find(s) : t.slides)
							.transition(e)
							.find(
								".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
							)
							.transition(e);
					},
					perspective: () => !0,
					overwriteParams: () => ({ watchSlidesProgress: !0 }),
				});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				creativeEffect: {
					transformEl: null,
					limitProgress: 1,
					shadowPerProgress: !1,
					progressMultiplier: 1,
					perspective: !0,
					prev: {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						opacity: 1,
						scale: 1,
					},
					next: {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						opacity: 1,
						scale: 1,
					},
				},
			});
			const i = (e) => ("string" == typeof e ? e : `${e}px`);
			te({
				effect: "creative",
				swiper: t,
				on: a,
				setTranslate: () => {
					const { slides: e, $wrapperEl: s, slidesSizesGrid: a } = t,
						r = t.params.creativeEffect,
						{ progressMultiplier: n } = r,
						l = t.params.centeredSlides;
					if (l) {
						const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
						s.transform(`translateX(calc(50% - ${e}px))`);
					}
					for (let s = 0; s < e.length; s += 1) {
						const a = e.eq(s),
							o = a[0].progress,
							d = Math.min(
								Math.max(a[0].progress, -r.limitProgress),
								r.limitProgress
							);
						let c = d;
						l ||
							(c = Math.min(
								Math.max(
									a[0].originalProgress,
									-r.limitProgress
								),
								r.limitProgress
							));
						const p = a[0].swiperSlideOffset,
							u = [
								t.params.cssMode ? -p - t.translate : -p,
								0,
								0,
							],
							h = [0, 0, 0];
						let m = !1;
						t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
						let f = {
							translate: [0, 0, 0],
							rotate: [0, 0, 0],
							scale: 1,
							opacity: 1,
						};
						d < 0
							? ((f = r.next), (m = !0))
							: d > 0 && ((f = r.prev), (m = !0)),
							u.forEach((e, t) => {
								u[t] = `calc(${e}px + (${i(
									f.translate[t]
								)} * ${Math.abs(d * n)}))`;
							}),
							h.forEach((e, t) => {
								h[t] = f.rotate[t] * Math.abs(d * n);
							}),
							(a[0].style.zIndex =
								-Math.abs(Math.round(o)) + e.length);
						const g = u.join(", "),
							v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
							w =
								c < 0
									? `scale(${1 + (1 - f.scale) * c * n})`
									: `scale(${1 - (1 - f.scale) * c * n})`,
							b =
								c < 0
									? 1 + (1 - f.opacity) * c * n
									: 1 - (1 - f.opacity) * c * n,
							x = `translate3d(${g}) ${v} ${w}`;
						if ((m && f.shadow) || !m) {
							let e = a.children(".swiper-slide-shadow");
							if (
								(0 === e.length && f.shadow && (e = ie(r, a)),
								e.length)
							) {
								const t = r.shadowPerProgress
									? d * (1 / r.limitProgress)
									: d;
								e[0].style.opacity = Math.min(
									Math.max(Math.abs(t), 0),
									1
								);
							}
						}
						const y = se(r, a);
						y.transform(x).css({ opacity: b }),
							f.origin && y.css("transform-origin", f.origin);
					}
				},
				setTransition: (e) => {
					const { transformEl: s } = t.params.creativeEffect;
					(s ? t.slides.find(s) : t.slides)
						.transition(e)
						.find(".swiper-slide-shadow")
						.transition(e),
						ae({
							swiper: t,
							duration: e,
							transformEl: s,
							allSlides: !0,
						});
				},
				perspective: () => t.params.creativeEffect.perspective,
				overwriteParams: () => ({
					watchSlidesProgress: !0,
					virtualTranslate: !t.params.cssMode,
				}),
			});
		},
		function (e) {
			let { swiper: t, extendParams: s, on: a } = e;
			s({
				cardsEffect: {
					slideShadows: !0,
					transformEl: null,
					rotate: !0,
					perSlideRotate: 2,
					perSlideOffset: 8,
				},
			}),
				te({
					effect: "cards",
					swiper: t,
					on: a,
					setTranslate: () => {
						const { slides: e, activeIndex: s } = t,
							a = t.params.cardsEffect,
							{ startTranslate: i, isTouched: r } =
								t.touchEventsData,
							n = t.translate;
						for (let l = 0; l < e.length; l += 1) {
							const o = e.eq(l),
								d = o[0].progress,
								c = Math.min(Math.max(d, -4), 4);
							let p = o[0].swiperSlideOffset;
							t.params.centeredSlides &&
								!t.params.cssMode &&
								t.$wrapperEl.transform(
									`translateX(${t.minTranslate()}px)`
								),
								t.params.centeredSlides &&
									t.params.cssMode &&
									(p -= e[0].swiperSlideOffset);
							let u = t.params.cssMode ? -p - t.translate : -p,
								h = 0;
							const m = -100 * Math.abs(c);
							let f = 1,
								g = -a.perSlideRotate * c,
								v = a.perSlideOffset - 0.75 * Math.abs(c);
							const w =
									t.virtual && t.params.virtual.enabled
										? t.virtual.from + l
										: l,
								b =
									(w === s || w === s - 1) &&
									c > 0 &&
									c < 1 &&
									(r || t.params.cssMode) &&
									n < i,
								x =
									(w === s || w === s + 1) &&
									c < 0 &&
									c > -1 &&
									(r || t.params.cssMode) &&
									n > i;
							if (b || x) {
								const e =
									(1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) **
									0.5;
								(g += -28 * c * e),
									(f += -0.5 * e),
									(v += 96 * e),
									(h = -25 * e * Math.abs(c) + "%");
							}
							if (
								((u =
									c < 0
										? `calc(${u}px + (${v * Math.abs(c)}%))`
										: c > 0
										? `calc(${u}px + (-${
												v * Math.abs(c)
										  }%))`
										: `${u}px`),
								!t.isHorizontal())
							) {
								const e = h;
								(h = u), (u = e);
							}
							const y =
									c < 0
										? "" + (1 + (1 - f) * c)
										: "" + (1 - (1 - f) * c),
								E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${
									a.rotate ? g : 0
								}deg)\n        scale(${y})\n      `;
							if (a.slideShadows) {
								let e = o.find(".swiper-slide-shadow");
								0 === e.length && (e = ie(a, o)),
									e.length &&
										(e[0].style.opacity = Math.min(
											Math.max(
												(Math.abs(c) - 0.5) / 0.5,
												0
											),
											1
										));
							}
							o[0].style.zIndex =
								-Math.abs(Math.round(d)) + e.length;
							se(a, o).transform(E);
						}
					},
					setTransition: (e) => {
						const { transformEl: s } = t.params.cardsEffect;
						(s ? t.slides.find(s) : t.slides)
							.transition(e)
							.find(".swiper-slide-shadow")
							.transition(e),
							ae({ swiper: t, duration: e, transformEl: s });
					},
					perspective: () => !0,
					overwriteParams: () => ({
						watchSlidesProgress: !0,
						virtualTranslate: !t.params.cssMode,
					}),
				});
		},
	];
	return V.use(re), V;
});

/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

!(function (factory) {
	"function" == typeof define && define.amd && define.amd.jQuery
		? define(["jquery"], factory)
		: factory(
				"undefined" != typeof module && module.exports
					? require("jquery")
					: jQuery
		  );
})(function ($) {
	"use strict";
	function init(options) {
		return (
			!options ||
				void 0 !== options.allowPageScroll ||
				(void 0 === options.swipe && void 0 === options.swipeStatus) ||
				(options.allowPageScroll = NONE),
			void 0 !== options.click &&
				void 0 === options.tap &&
				(options.tap = options.click),
			options || (options = {}),
			(options = $.extend({}, $.fn.swipe.defaults, options)),
			this.each(function () {
				var $this = $(this),
					plugin = $this.data(PLUGIN_NS);
				plugin ||
					((plugin = new TouchSwipe(this, options)),
					$this.data(PLUGIN_NS, plugin));
			})
		);
	}
	function TouchSwipe(element, options) {
		function touchStart(jqEvent) {
			if (
				!(
					getTouchInProgress() ||
					$(jqEvent.target).closest(
						options.excludedElements,
						$element
					).length > 0
				)
			) {
				var event = jqEvent.originalEvent
					? jqEvent.originalEvent
					: jqEvent;
				if (
					!event.pointerType ||
					"mouse" != event.pointerType ||
					0 != options.fallbackToMouseEvents
				) {
					var ret,
						touches = event.touches,
						evt = touches ? touches[0] : event;
					return (
						(phase = PHASE_START),
						touches
							? (fingerCount = touches.length)
							: options.preventDefaultEvents !== !1 &&
							  jqEvent.preventDefault(),
						(distance = 0),
						(direction = null),
						(currentDirection = null),
						(pinchDirection = null),
						(duration = 0),
						(startTouchesDistance = 0),
						(endTouchesDistance = 0),
						(pinchZoom = 1),
						(pinchDistance = 0),
						(maximumsMap = createMaximumsData()),
						cancelMultiFingerRelease(),
						createFingerData(0, evt),
						!touches ||
						fingerCount === options.fingers ||
						options.fingers === ALL_FINGERS ||
						hasPinches()
							? ((startTime = getTimeStamp()),
							  2 == fingerCount &&
									(createFingerData(1, touches[1]),
									(startTouchesDistance = endTouchesDistance =
										calculateTouchesDistance(
											fingerData[0].start,
											fingerData[1].start
										))),
							  (options.swipeStatus || options.pinchStatus) &&
									(ret = triggerHandler(event, phase)))
							: (ret = !1),
						ret === !1
							? ((phase = PHASE_CANCEL),
							  triggerHandler(event, phase),
							  ret)
							: (options.hold &&
									(holdTimeout = setTimeout(
										$.proxy(function () {
											$element.trigger("hold", [
												event.target,
											]),
												options.hold &&
													(ret = options.hold.call(
														$element,
														event,
														event.target
													));
										}, this),
										options.longTapThreshold
									)),
							  setTouchInProgress(!0),
							  null)
					);
				}
			}
		}
		function touchMove(jqEvent) {
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			if (
				phase !== PHASE_END &&
				phase !== PHASE_CANCEL &&
				!inMultiFingerRelease()
			) {
				var ret,
					touches = event.touches,
					evt = touches ? touches[0] : event,
					currentFinger = updateFingerData(evt);
				if (
					((endTime = getTimeStamp()),
					touches && (fingerCount = touches.length),
					options.hold && clearTimeout(holdTimeout),
					(phase = PHASE_MOVE),
					2 == fingerCount &&
						(0 == startTouchesDistance
							? (createFingerData(1, touches[1]),
							  (startTouchesDistance = endTouchesDistance =
									calculateTouchesDistance(
										fingerData[0].start,
										fingerData[1].start
									)))
							: (updateFingerData(touches[1]),
							  (endTouchesDistance = calculateTouchesDistance(
									fingerData[0].end,
									fingerData[1].end
							  )),
							  (pinchDirection = calculatePinchDirection(
									fingerData[0].end,
									fingerData[1].end
							  ))),
						(pinchZoom = calculatePinchZoom(
							startTouchesDistance,
							endTouchesDistance
						)),
						(pinchDistance = Math.abs(
							startTouchesDistance - endTouchesDistance
						))),
					fingerCount === options.fingers ||
						options.fingers === ALL_FINGERS ||
						!touches ||
						hasPinches())
				) {
					if (
						((direction = calculateDirection(
							currentFinger.start,
							currentFinger.end
						)),
						(currentDirection = calculateDirection(
							currentFinger.last,
							currentFinger.end
						)),
						validateDefaultEvent(jqEvent, currentDirection),
						(distance = calculateDistance(
							currentFinger.start,
							currentFinger.end
						)),
						(duration = calculateDuration()),
						setMaxDistance(direction, distance),
						(ret = triggerHandler(event, phase)),
						!options.triggerOnTouchEnd ||
							options.triggerOnTouchLeave)
					) {
						var inBounds = !0;
						if (options.triggerOnTouchLeave) {
							var bounds = getbounds(this);
							inBounds = isInBounds(currentFinger.end, bounds);
						}
						!options.triggerOnTouchEnd && inBounds
							? (phase = getNextPhase(PHASE_MOVE))
							: options.triggerOnTouchLeave &&
							  !inBounds &&
							  (phase = getNextPhase(PHASE_END)),
							(phase != PHASE_CANCEL && phase != PHASE_END) ||
								triggerHandler(event, phase);
					}
				} else (phase = PHASE_CANCEL), triggerHandler(event, phase);
				ret === !1 &&
					((phase = PHASE_CANCEL), triggerHandler(event, phase));
			}
		}
		function touchEnd(jqEvent) {
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
				touches = event.touches;
			if (touches) {
				if (touches.length && !inMultiFingerRelease())
					return startMultiFingerRelease(event), !0;
				if (touches.length && inMultiFingerRelease()) return !0;
			}
			return (
				inMultiFingerRelease() && (fingerCount = fingerCountAtRelease),
				(endTime = getTimeStamp()),
				(duration = calculateDuration()),
				didSwipeBackToCancel() || !validateSwipeDistance()
					? ((phase = PHASE_CANCEL), triggerHandler(event, phase))
					: options.triggerOnTouchEnd ||
					  (options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE)
					? (options.preventDefaultEvents !== !1 &&
							jqEvent.preventDefault(),
					  (phase = PHASE_END),
					  triggerHandler(event, phase))
					: !options.triggerOnTouchEnd && hasTap()
					? ((phase = PHASE_END),
					  triggerHandlerForGesture(event, phase, TAP))
					: phase === PHASE_MOVE &&
					  ((phase = PHASE_CANCEL), triggerHandler(event, phase)),
				setTouchInProgress(!1),
				null
			);
		}
		function touchCancel() {
			(fingerCount = 0),
				(endTime = 0),
				(startTime = 0),
				(startTouchesDistance = 0),
				(endTouchesDistance = 0),
				(pinchZoom = 1),
				cancelMultiFingerRelease(),
				setTouchInProgress(!1);
		}
		function touchLeave(jqEvent) {
			var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
			options.triggerOnTouchLeave &&
				((phase = getNextPhase(PHASE_END)),
				triggerHandler(event, phase));
		}
		function removeListeners() {
			$element.unbind(START_EV, touchStart),
				$element.unbind(CANCEL_EV, touchCancel),
				$element.unbind(MOVE_EV, touchMove),
				$element.unbind(END_EV, touchEnd),
				LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave),
				setTouchInProgress(!1);
		}
		function getNextPhase(currentPhase) {
			var nextPhase = currentPhase,
				validTime = validateSwipeTime(),
				validDistance = validateSwipeDistance(),
				didCancel = didSwipeBackToCancel();
			return (
				!validTime || didCancel
					? (nextPhase = PHASE_CANCEL)
					: !validDistance ||
					  currentPhase != PHASE_MOVE ||
					  (options.triggerOnTouchEnd &&
							!options.triggerOnTouchLeave)
					? !validDistance &&
					  currentPhase == PHASE_END &&
					  options.triggerOnTouchLeave &&
					  (nextPhase = PHASE_CANCEL)
					: (nextPhase = PHASE_END),
				nextPhase
			);
		}
		function triggerHandler(event, phase) {
			var ret,
				touches = event.touches;
			return (
				(didSwipe() || hasSwipes()) &&
					(ret = triggerHandlerForGesture(event, phase, SWIPE)),
				(didPinch() || hasPinches()) &&
					ret !== !1 &&
					(ret = triggerHandlerForGesture(event, phase, PINCH)),
				didDoubleTap() && ret !== !1
					? (ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP))
					: didLongTap() && ret !== !1
					? (ret = triggerHandlerForGesture(event, phase, LONG_TAP))
					: didTap() &&
					  ret !== !1 &&
					  (ret = triggerHandlerForGesture(event, phase, TAP)),
				phase === PHASE_CANCEL && touchCancel(event),
				phase === PHASE_END &&
					(touches
						? touches.length || touchCancel(event)
						: touchCancel(event)),
				ret
			);
		}
		function triggerHandlerForGesture(event, phase, gesture) {
			var ret;
			if (gesture == SWIPE) {
				if (
					($element.trigger("swipeStatus", [
						phase,
						direction || null,
						distance || 0,
						duration || 0,
						fingerCount,
						fingerData,
						currentDirection,
					]),
					options.swipeStatus &&
						((ret = options.swipeStatus.call(
							$element,
							event,
							phase,
							direction || null,
							distance || 0,
							duration || 0,
							fingerCount,
							fingerData,
							currentDirection
						)),
						ret === !1))
				)
					return !1;
				if (phase == PHASE_END && validateSwipe()) {
					if (
						(clearTimeout(singleTapTimeout),
						clearTimeout(holdTimeout),
						$element.trigger("swipe", [
							direction,
							distance,
							duration,
							fingerCount,
							fingerData,
							currentDirection,
						]),
						options.swipe &&
							((ret = options.swipe.call(
								$element,
								event,
								direction,
								distance,
								duration,
								fingerCount,
								fingerData,
								currentDirection
							)),
							ret === !1))
					)
						return !1;
					switch (direction) {
						case LEFT:
							$element.trigger("swipeLeft", [
								direction,
								distance,
								duration,
								fingerCount,
								fingerData,
								currentDirection,
							]),
								options.swipeLeft &&
									(ret = options.swipeLeft.call(
										$element,
										event,
										direction,
										distance,
										duration,
										fingerCount,
										fingerData,
										currentDirection
									));
							break;
						case RIGHT:
							$element.trigger("swipeRight", [
								direction,
								distance,
								duration,
								fingerCount,
								fingerData,
								currentDirection,
							]),
								options.swipeRight &&
									(ret = options.swipeRight.call(
										$element,
										event,
										direction,
										distance,
										duration,
										fingerCount,
										fingerData,
										currentDirection
									));
							break;
						case UP:
							$element.trigger("swipeUp", [
								direction,
								distance,
								duration,
								fingerCount,
								fingerData,
								currentDirection,
							]),
								options.swipeUp &&
									(ret = options.swipeUp.call(
										$element,
										event,
										direction,
										distance,
										duration,
										fingerCount,
										fingerData,
										currentDirection
									));
							break;
						case DOWN:
							$element.trigger("swipeDown", [
								direction,
								distance,
								duration,
								fingerCount,
								fingerData,
								currentDirection,
							]),
								options.swipeDown &&
									(ret = options.swipeDown.call(
										$element,
										event,
										direction,
										distance,
										duration,
										fingerCount,
										fingerData,
										currentDirection
									));
					}
				}
			}
			if (gesture == PINCH) {
				if (
					($element.trigger("pinchStatus", [
						phase,
						pinchDirection || null,
						pinchDistance || 0,
						duration || 0,
						fingerCount,
						pinchZoom,
						fingerData,
					]),
					options.pinchStatus &&
						((ret = options.pinchStatus.call(
							$element,
							event,
							phase,
							pinchDirection || null,
							pinchDistance || 0,
							duration || 0,
							fingerCount,
							pinchZoom,
							fingerData
						)),
						ret === !1))
				)
					return !1;
				if (phase == PHASE_END && validatePinch())
					switch (pinchDirection) {
						case IN:
							$element.trigger("pinchIn", [
								pinchDirection || null,
								pinchDistance || 0,
								duration || 0,
								fingerCount,
								pinchZoom,
								fingerData,
							]),
								options.pinchIn &&
									(ret = options.pinchIn.call(
										$element,
										event,
										pinchDirection || null,
										pinchDistance || 0,
										duration || 0,
										fingerCount,
										pinchZoom,
										fingerData
									));
							break;
						case OUT:
							$element.trigger("pinchOut", [
								pinchDirection || null,
								pinchDistance || 0,
								duration || 0,
								fingerCount,
								pinchZoom,
								fingerData,
							]),
								options.pinchOut &&
									(ret = options.pinchOut.call(
										$element,
										event,
										pinchDirection || null,
										pinchDistance || 0,
										duration || 0,
										fingerCount,
										pinchZoom,
										fingerData
									));
					}
			}
			return (
				gesture == TAP
					? (phase !== PHASE_CANCEL && phase !== PHASE_END) ||
					  (clearTimeout(singleTapTimeout),
					  clearTimeout(holdTimeout),
					  hasDoubleTap() && !inDoubleTap()
							? ((doubleTapStartTime = getTimeStamp()),
							  (singleTapTimeout = setTimeout(
									$.proxy(function () {
										(doubleTapStartTime = null),
											$element.trigger("tap", [
												event.target,
											]),
											options.tap &&
												(ret = options.tap.call(
													$element,
													event,
													event.target
												));
									}, this),
									options.doubleTapThreshold
							  )))
							: ((doubleTapStartTime = null),
							  $element.trigger("tap", [event.target]),
							  options.tap &&
									(ret = options.tap.call(
										$element,
										event,
										event.target
									))))
					: gesture == DOUBLE_TAP
					? (phase !== PHASE_CANCEL && phase !== PHASE_END) ||
					  (clearTimeout(singleTapTimeout),
					  clearTimeout(holdTimeout),
					  (doubleTapStartTime = null),
					  $element.trigger("doubletap", [event.target]),
					  options.doubleTap &&
							(ret = options.doubleTap.call(
								$element,
								event,
								event.target
							)))
					: gesture == LONG_TAP &&
					  ((phase !== PHASE_CANCEL && phase !== PHASE_END) ||
							(clearTimeout(singleTapTimeout),
							(doubleTapStartTime = null),
							$element.trigger("longtap", [event.target]),
							options.longTap &&
								(ret = options.longTap.call(
									$element,
									event,
									event.target
								)))),
				ret
			);
		}
		function validateSwipeDistance() {
			var valid = !0;
			return (
				null !== options.threshold &&
					(valid = distance >= options.threshold),
				valid
			);
		}
		function didSwipeBackToCancel() {
			var cancelled = !1;
			return (
				null !== options.cancelThreshold &&
					null !== direction &&
					(cancelled =
						getMaxDistance(direction) - distance >=
						options.cancelThreshold),
				cancelled
			);
		}
		function validatePinchDistance() {
			return (
				null === options.pinchThreshold ||
				pinchDistance >= options.pinchThreshold
			);
		}
		function validateSwipeTime() {
			var result;
			return (result =
				!options.maxTimeThreshold ||
				!(duration >= options.maxTimeThreshold));
		}
		function validateDefaultEvent(jqEvent, direction) {
			if (options.preventDefaultEvents !== !1)
				if (options.allowPageScroll === NONE) jqEvent.preventDefault();
				else {
					var auto = options.allowPageScroll === AUTO;
					switch (direction) {
						case LEFT:
							((options.swipeLeft && auto) ||
								(!auto &&
									options.allowPageScroll != HORIZONTAL)) &&
								jqEvent.preventDefault();
							break;
						case RIGHT:
							((options.swipeRight && auto) ||
								(!auto &&
									options.allowPageScroll != HORIZONTAL)) &&
								jqEvent.preventDefault();
							break;
						case UP:
							((options.swipeUp && auto) ||
								(!auto &&
									options.allowPageScroll != VERTICAL)) &&
								jqEvent.preventDefault();
							break;
						case DOWN:
							((options.swipeDown && auto) ||
								(!auto &&
									options.allowPageScroll != VERTICAL)) &&
								jqEvent.preventDefault();
							break;
						case NONE:
					}
				}
		}
		function validatePinch() {
			var hasCorrectFingerCount = validateFingers(),
				hasEndPoint = validateEndPoint(),
				hasCorrectDistance = validatePinchDistance();
			return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
		}
		function hasPinches() {
			return !!(
				options.pinchStatus ||
				options.pinchIn ||
				options.pinchOut
			);
		}
		function didPinch() {
			return !(!validatePinch() || !hasPinches());
		}
		function validateSwipe() {
			var hasValidTime = validateSwipeTime(),
				hasValidDistance = validateSwipeDistance(),
				hasCorrectFingerCount = validateFingers(),
				hasEndPoint = validateEndPoint(),
				didCancel = didSwipeBackToCancel(),
				valid =
					!didCancel &&
					hasEndPoint &&
					hasCorrectFingerCount &&
					hasValidDistance &&
					hasValidTime;
			return valid;
		}
		function hasSwipes() {
			return !!(
				options.swipe ||
				options.swipeStatus ||
				options.swipeLeft ||
				options.swipeRight ||
				options.swipeUp ||
				options.swipeDown
			);
		}
		function didSwipe() {
			return !(!validateSwipe() || !hasSwipes());
		}
		function validateFingers() {
			return (
				fingerCount === options.fingers ||
				options.fingers === ALL_FINGERS ||
				!SUPPORTS_TOUCH
			);
		}
		function validateEndPoint() {
			return 0 !== fingerData[0].end.x;
		}
		function hasTap() {
			return !!options.tap;
		}
		function hasDoubleTap() {
			return !!options.doubleTap;
		}
		function hasLongTap() {
			return !!options.longTap;
		}
		function validateDoubleTap() {
			if (null == doubleTapStartTime) return !1;
			var now = getTimeStamp();
			return (
				hasDoubleTap() &&
				now - doubleTapStartTime <= options.doubleTapThreshold
			);
		}
		function inDoubleTap() {
			return validateDoubleTap();
		}
		function validateTap() {
			return (
				(1 === fingerCount || !SUPPORTS_TOUCH) &&
				(isNaN(distance) || distance < options.threshold)
			);
		}
		function validateLongTap() {
			return (
				duration > options.longTapThreshold &&
				distance < DOUBLE_TAP_THRESHOLD
			);
		}
		function didTap() {
			return !(!validateTap() || !hasTap());
		}
		function didDoubleTap() {
			return !(!validateDoubleTap() || !hasDoubleTap());
		}
		function didLongTap() {
			return !(!validateLongTap() || !hasLongTap());
		}
		function startMultiFingerRelease(event) {
			(previousTouchEndTime = getTimeStamp()),
				(fingerCountAtRelease = event.touches.length + 1);
		}
		function cancelMultiFingerRelease() {
			(previousTouchEndTime = 0), (fingerCountAtRelease = 0);
		}
		function inMultiFingerRelease() {
			var withinThreshold = !1;
			if (previousTouchEndTime) {
				var diff = getTimeStamp() - previousTouchEndTime;
				diff <= options.fingerReleaseThreshold &&
					(withinThreshold = !0);
			}
			return withinThreshold;
		}
		function getTouchInProgress() {
			return !($element.data(PLUGIN_NS + "_intouch") !== !0);
		}
		function setTouchInProgress(val) {
			$element &&
				(val === !0
					? ($element.bind(MOVE_EV, touchMove),
					  $element.bind(END_EV, touchEnd),
					  LEAVE_EV && $element.bind(LEAVE_EV, touchLeave))
					: ($element.unbind(MOVE_EV, touchMove, !1),
					  $element.unbind(END_EV, touchEnd, !1),
					  LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)),
				$element.data(PLUGIN_NS + "_intouch", val === !0));
		}
		function createFingerData(id, evt) {
			var f = {
				start: { x: 0, y: 0 },
				last: { x: 0, y: 0 },
				end: { x: 0, y: 0 },
			};
			return (
				(f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX),
				(f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY),
				(fingerData[id] = f),
				f
			);
		}
		function updateFingerData(evt) {
			var id = void 0 !== evt.identifier ? evt.identifier : 0,
				f = getFingerData(id);
			return (
				null === f && (f = createFingerData(id, evt)),
				(f.last.x = f.end.x),
				(f.last.y = f.end.y),
				(f.end.x = evt.pageX || evt.clientX),
				(f.end.y = evt.pageY || evt.clientY),
				f
			);
		}
		function getFingerData(id) {
			return fingerData[id] || null;
		}
		function setMaxDistance(direction, distance) {
			direction != NONE &&
				((distance = Math.max(distance, getMaxDistance(direction))),
				(maximumsMap[direction].distance = distance));
		}
		function getMaxDistance(direction) {
			if (maximumsMap[direction]) return maximumsMap[direction].distance;
		}
		function createMaximumsData() {
			var maxData = {};
			return (
				(maxData[LEFT] = createMaximumVO(LEFT)),
				(maxData[RIGHT] = createMaximumVO(RIGHT)),
				(maxData[UP] = createMaximumVO(UP)),
				(maxData[DOWN] = createMaximumVO(DOWN)),
				maxData
			);
		}
		function createMaximumVO(dir) {
			return { direction: dir, distance: 0 };
		}
		function calculateDuration() {
			return endTime - startTime;
		}
		function calculateTouchesDistance(startPoint, endPoint) {
			var diffX = Math.abs(startPoint.x - endPoint.x),
				diffY = Math.abs(startPoint.y - endPoint.y);
			return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
		}
		function calculatePinchZoom(startDistance, endDistance) {
			var percent = (endDistance / startDistance) * 1;
			return percent.toFixed(2);
		}
		function calculatePinchDirection() {
			return pinchZoom < 1 ? OUT : IN;
		}
		function calculateDistance(startPoint, endPoint) {
			return Math.round(
				Math.sqrt(
					Math.pow(endPoint.x - startPoint.x, 2) +
						Math.pow(endPoint.y - startPoint.y, 2)
				)
			);
		}
		function calculateAngle(startPoint, endPoint) {
			var x = startPoint.x - endPoint.x,
				y = endPoint.y - startPoint.y,
				r = Math.atan2(y, x),
				angle = Math.round((180 * r) / Math.PI);
			return angle < 0 && (angle = 360 - Math.abs(angle)), angle;
		}
		function calculateDirection(startPoint, endPoint) {
			if (comparePoints(startPoint, endPoint)) return NONE;
			var angle = calculateAngle(startPoint, endPoint);
			return angle <= 45 && angle >= 0
				? LEFT
				: angle <= 360 && angle >= 315
				? LEFT
				: angle >= 135 && angle <= 225
				? RIGHT
				: angle > 45 && angle < 135
				? DOWN
				: UP;
		}
		function getTimeStamp() {
			var now = new Date();
			return now.getTime();
		}
		function getbounds(el) {
			el = $(el);
			var offset = el.offset(),
				bounds = {
					left: offset.left,
					right: offset.left + el.outerWidth(),
					top: offset.top,
					bottom: offset.top + el.outerHeight(),
				};
			return bounds;
		}
		function isInBounds(point, bounds) {
			return (
				point.x > bounds.left &&
				point.x < bounds.right &&
				point.y > bounds.top &&
				point.y < bounds.bottom
			);
		}
		function comparePoints(pointA, pointB) {
			return pointA.x == pointB.x && pointA.y == pointB.y;
		}
		var options = $.extend({}, options),
			useTouchEvents =
				SUPPORTS_TOUCH ||
				SUPPORTS_POINTER ||
				!options.fallbackToMouseEvents,
			START_EV = useTouchEvents
				? SUPPORTS_POINTER
					? SUPPORTS_POINTER_IE10
						? "MSPointerDown"
						: "pointerdown"
					: "touchstart"
				: "mousedown",
			MOVE_EV = useTouchEvents
				? SUPPORTS_POINTER
					? SUPPORTS_POINTER_IE10
						? "MSPointerMove"
						: "pointermove"
					: "touchmove"
				: "mousemove",
			END_EV = useTouchEvents
				? SUPPORTS_POINTER
					? SUPPORTS_POINTER_IE10
						? "MSPointerUp"
						: "pointerup"
					: "touchend"
				: "mouseup",
			LEAVE_EV = useTouchEvents
				? SUPPORTS_POINTER
					? "mouseleave"
					: null
				: "mouseleave",
			CANCEL_EV = SUPPORTS_POINTER
				? SUPPORTS_POINTER_IE10
					? "MSPointerCancel"
					: "pointercancel"
				: "touchcancel",
			distance = 0,
			direction = null,
			currentDirection = null,
			duration = 0,
			startTouchesDistance = 0,
			endTouchesDistance = 0,
			pinchZoom = 1,
			pinchDistance = 0,
			pinchDirection = 0,
			maximumsMap = null,
			$element = $(element),
			phase = "start",
			fingerCount = 0,
			fingerData = {},
			startTime = 0,
			endTime = 0,
			previousTouchEndTime = 0,
			fingerCountAtRelease = 0,
			doubleTapStartTime = 0,
			singleTapTimeout = null,
			holdTimeout = null;
		try {
			$element.bind(START_EV, touchStart),
				$element.bind(CANCEL_EV, touchCancel);
		} catch (e) {
			$.error(
				"events not supported " +
					START_EV +
					"," +
					CANCEL_EV +
					" on jQuery.swipe"
			);
		}
		(this.enable = function () {
			return (
				this.disable(),
				$element.bind(START_EV, touchStart),
				$element.bind(CANCEL_EV, touchCancel),
				$element
			);
		}),
			(this.disable = function () {
				return removeListeners(), $element;
			}),
			(this.destroy = function () {
				removeListeners(),
					$element.data(PLUGIN_NS, null),
					($element = null);
			}),
			(this.option = function (property, value) {
				if ("object" == typeof property)
					options = $.extend(options, property);
				else if (void 0 !== options[property]) {
					if (void 0 === value) return options[property];
					options[property] = value;
				} else {
					if (!property) return options;
					$.error(
						"Option " +
							property +
							" does not exist on jQuery.swipe.options"
					);
				}
				return null;
			});
	}
	var VERSION = "1.6.18",
		LEFT = "left",
		RIGHT = "right",
		UP = "up",
		DOWN = "down",
		IN = "in",
		OUT = "out",
		NONE = "none",
		AUTO = "auto",
		SWIPE = "swipe",
		PINCH = "pinch",
		TAP = "tap",
		DOUBLE_TAP = "doubletap",
		LONG_TAP = "longtap",
		HORIZONTAL = "horizontal",
		VERTICAL = "vertical",
		ALL_FINGERS = "all",
		DOUBLE_TAP_THRESHOLD = 10,
		PHASE_START = "start",
		PHASE_MOVE = "move",
		PHASE_END = "end",
		PHASE_CANCEL = "cancel",
		SUPPORTS_TOUCH = "ontouchstart" in window,
		SUPPORTS_POINTER_IE10 =
			window.navigator.msPointerEnabled &&
			!window.PointerEvent &&
			!SUPPORTS_TOUCH,
		SUPPORTS_POINTER =
			(window.PointerEvent || window.navigator.msPointerEnabled) &&
			!SUPPORTS_TOUCH,
		PLUGIN_NS = "TouchSwipe",
		defaults = {
			fingers: 1,
			threshold: 75,
			cancelThreshold: null,
			pinchThreshold: 20,
			maxTimeThreshold: null,
			fingerReleaseThreshold: 250,
			longTapThreshold: 500,
			doubleTapThreshold: 200,
			swipe: null,
			swipeLeft: null,
			swipeRight: null,
			swipeUp: null,
			swipeDown: null,
			swipeStatus: null,
			pinchIn: null,
			pinchOut: null,
			pinchStatus: null,
			click: null,
			tap: null,
			doubleTap: null,
			longTap: null,
			hold: null,
			triggerOnTouchEnd: !0,
			triggerOnTouchLeave: !1,
			allowPageScroll: "auto",
			fallbackToMouseEvents: !0,
			excludedElements: ".noSwipe",
			preventDefaultEvents: !0,
		};
	($.fn.swipe = function (method) {
		var $this = $(this),
			plugin = $this.data(PLUGIN_NS);
		if (plugin && "string" == typeof method) {
			if (plugin[method])
				return plugin[method].apply(
					plugin,
					Array.prototype.slice.call(arguments, 1)
				);
			$.error("Method " + method + " does not exist on jQuery.swipe");
		} else if (plugin && "object" == typeof method)
			plugin.option.apply(plugin, arguments);
		else if (!(plugin || ("object" != typeof method && method)))
			return init.apply(this, arguments);
		return $this;
	}),
		($.fn.swipe.version = VERSION),
		($.fn.swipe.defaults = defaults),
		($.fn.swipe.phases = {
			PHASE_START: PHASE_START,
			PHASE_MOVE: PHASE_MOVE,
			PHASE_END: PHASE_END,
			PHASE_CANCEL: PHASE_CANCEL,
		}),
		($.fn.swipe.directions = {
			LEFT: LEFT,
			RIGHT: RIGHT,
			UP: UP,
			DOWN: DOWN,
			IN: IN,
			OUT: OUT,
		}),
		($.fn.swipe.pageScroll = {
			NONE: NONE,
			HORIZONTAL: HORIZONTAL,
			VERTICAL: VERTICAL,
			AUTO: AUTO,
		}),
		($.fn.swipe.fingers = {
			ONE: 1,
			TWO: 2,
			THREE: 3,
			FOUR: 4,
			FIVE: 5,
			ALL: ALL_FINGERS,
		});
});

/*! jQuery UI - v1.13.2 - 2022-11-24
* http://jqueryui.com
* Includes: widget.js, keycode.js, widgets/mouse.js, widgets/slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(l){"use strict";l.ui=l.ui||{};l.ui.version="1.13.2";var n,i=0,o=Array.prototype.hasOwnProperty,h=Array.prototype.slice;l.cleanData=(n=l.cleanData,function(e){for(var t,i,s=0;null!=(i=e[s]);s++)(t=l._data(i,"events"))&&t.remove&&l(i).triggerHandler("remove");n(e)}),l.widget=function(e,i,t){var s,n,a,o={},h=e.split(".")[0],r=h+"-"+(e=e.split(".")[1]);return t||(t=i,i=l.Widget),Array.isArray(t)&&(t=l.extend.apply(null,[{}].concat(t))),l.expr.pseudos[r.toLowerCase()]=function(e){return!!l.data(e,r)},l[h]=l[h]||{},s=l[h][e],n=l[h][e]=function(e,t){if(!this||!this._createWidget)return new n(e,t);arguments.length&&this._createWidget(e,t)},l.extend(n,s,{version:t.version,_proto:l.extend({},t),_childConstructors:[]}),(a=new i).options=l.widget.extend({},a.options),l.each(t,function(t,s){function n(){return i.prototype[t].apply(this,arguments)}function a(e){return i.prototype[t].apply(this,e)}o[t]="function"==typeof s?function(){var e,t=this._super,i=this._superApply;return this._super=n,this._superApply=a,e=s.apply(this,arguments),this._super=t,this._superApply=i,e}:s}),n.prototype=l.widget.extend(a,{widgetEventPrefix:s&&a.widgetEventPrefix||e},o,{constructor:n,namespace:h,widgetName:e,widgetFullName:r}),s?(l.each(s._childConstructors,function(e,t){var i=t.prototype;l.widget(i.namespace+"."+i.widgetName,n,t._proto)}),delete s._childConstructors):i._childConstructors.push(n),l.widget.bridge(e,n),n},l.widget.extend=function(e){for(var t,i,s=h.call(arguments,1),n=0,a=s.length;n<a;n++)for(t in s[n])i=s[n][t],o.call(s[n],t)&&void 0!==i&&(l.isPlainObject(i)?e[t]=l.isPlainObject(e[t])?l.widget.extend({},e[t],i):l.widget.extend({},i):e[t]=i);return e},l.widget.bridge=function(a,t){var o=t.prototype.widgetFullName||a;l.fn[a]=function(i){var e="string"==typeof i,s=h.call(arguments,1),n=this;return e?this.length||"instance"!==i?this.each(function(){var e,t=l.data(this,o);return"instance"===i?(n=t,!1):t?"function"!=typeof t[i]||"_"===i.charAt(0)?l.error("no such method '"+i+"' for "+a+" widget instance"):(e=t[i].apply(t,s))!==t&&void 0!==e?(n=e&&e.jquery?n.pushStack(e.get()):e,!1):void 0:l.error("cannot call methods on "+a+" prior to initialization; attempted to call method '"+i+"'")}):n=void 0:(s.length&&(i=l.widget.extend.apply(null,[i].concat(s))),this.each(function(){var e=l.data(this,o);e?(e.option(i||{}),e._init&&e._init()):l.data(this,o,new t(i,this))})),n}},l.Widget=function(){},l.Widget._childConstructors=[],l.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,t){t=l(t||this.defaultElement||this)[0],this.element=l(t),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=l(),this.hoverable=l(),this.focusable=l(),this.classesElementLookup={},t!==this&&(l.data(t,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===t&&this.destroy()}}),this.document=l(t.style?t.ownerDocument:t.document||t),this.window=l(this.document[0].defaultView||this.document[0].parentWindow)),this.options=l.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:l.noop,_create:l.noop,_init:l.noop,destroy:function(){var i=this;this._destroy(),l.each(this.classesElementLookup,function(e,t){i._removeClass(t,e)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:l.noop,widget:function(){return this.element},option:function(e,t){var i,s,n,a=e;if(0===arguments.length)return l.widget.extend({},this.options);if("string"==typeof e)if(a={},e=(i=e.split(".")).shift(),i.length){for(s=a[e]=l.widget.extend({},this.options[e]),n=0;n<i.length-1;n++)s[i[n]]=s[i[n]]||{},s=s[i[n]];if(e=i.pop(),1===arguments.length)return void 0===s[e]?null:s[e];s[e]=t}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=t}return this._setOptions(a),this},_setOptions:function(e){for(var t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return"classes"===e&&this._setOptionClasses(t),this.options[e]=t,"disabled"===e&&this._setOptionDisabled(t),this},_setOptionClasses:function(e){var t,i,s;for(t in e)s=this.classesElementLookup[t],e[t]!==this.options.classes[t]&&s&&s.length&&(i=l(s.get()),this._removeClass(s,t),i.addClass(this._classes({element:i,keys:t,classes:e,add:!0})))},_setOptionDisabled:function(e){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!e),e&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(n){var a=[],o=this;function e(e,t){for(var i,s=0;s<e.length;s++)i=o.classesElementLookup[e[s]]||l(),i=n.add?(function(){var i=[];n.element.each(function(e,t){l.map(o.classesElementLookup,function(e){return e}).some(function(e){return e.is(t)})||i.push(t)}),o._on(l(i),{remove:"_untrackClassesElement"})}(),l(l.uniqueSort(i.get().concat(n.element.get())))):l(i.not(n.element).get()),o.classesElementLookup[e[s]]=i,a.push(e[s]),t&&n.classes[e[s]]&&a.push(n.classes[e[s]])}return(n=l.extend({element:this.element,classes:this.options.classes||{}},n)).keys&&e(n.keys.match(/\S+/g)||[],!0),n.extra&&e(n.extra.match(/\S+/g)||[]),a.join(" ")},_untrackClassesElement:function(i){var s=this;l.each(s.classesElementLookup,function(e,t){-1!==l.inArray(i.target,t)&&(s.classesElementLookup[e]=l(t.not(i.target).get()))}),this._off(l(i.target))},_removeClass:function(e,t,i){return this._toggleClass(e,t,i,!1)},_addClass:function(e,t,i){return this._toggleClass(e,t,i,!0)},_toggleClass:function(e,t,i,s){var n="string"==typeof e||null===e,i={extra:n?t:i,keys:n?e:t,element:n?this.element:e,add:s="boolean"==typeof s?s:i};return i.element.toggleClass(this._classes(i),s),this},_on:function(n,a,e){var o,h=this;"boolean"!=typeof n&&(e=a,a=n,n=!1),e?(a=o=l(a),this.bindings=this.bindings.add(a)):(e=a,a=this.element,o=this.widget()),l.each(e,function(e,t){function i(){if(n||!0!==h.options.disabled&&!l(this).hasClass("ui-state-disabled"))return("string"==typeof t?h[t]:t).apply(h,arguments)}"string"!=typeof t&&(i.guid=t.guid=t.guid||i.guid||l.guid++);var s=e.match(/^([\w:-]*)\s*(.*)$/),e=s[1]+h.eventNamespace,s=s[2];s?o.on(e,s,i):a.on(e,i)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(t),this.bindings=l(this.bindings.not(e).get()),this.focusable=l(this.focusable.not(e).get()),this.hoverable=l(this.hoverable.not(e).get())},_delay:function(e,t){var i=this;return setTimeout(function(){return("string"==typeof e?i[e]:e).apply(i,arguments)},t||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(l(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(l(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(l(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(l(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,t,i){var s,n,a=this.options[e];if(i=i||{},(t=l.Event(t)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),t.target=this.element[0],n=t.originalEvent)for(s in n)s in t||(t[s]=n[s]);return this.element.trigger(t,i),!("function"==typeof a&&!1===a.apply(this.element[0],[t].concat(i))||t.isDefaultPrevented())}},l.each({show:"fadeIn",hide:"fadeOut"},function(a,o){l.Widget.prototype["_"+a]=function(t,e,i){var s,n=(e="string"==typeof e?{effect:e}:e)?!0!==e&&"number"!=typeof e&&e.effect||o:a;"number"==typeof(e=e||{})?e={duration:e}:!0===e&&(e={}),s=!l.isEmptyObject(e),e.complete=i,e.delay&&t.delay(e.delay),s&&l.effects&&l.effects.effect[n]?t[a](e):n!==a&&t[n]?t[n](e.duration,e.easing,i):t.queue(function(e){l(this)[a](),i&&i.call(t[0]),e()})}});l.widget,l.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},l.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var a=!1;l(document).on("mouseup",function(){a=!1});l.widget("ui.mouse",{version:"1.13.2",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.on("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).on("click."+this.widgetName,function(e){if(!0===l.data(e.target,t.widgetName+".preventClickEvent"))return l.removeData(e.target,t.widgetName+".preventClickEvent"),e.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var t=this,i=1===e.which,s=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&l(e.target).closest(this.options.cancel).length;return i&&!s&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){t.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),!0):(!0===l.data(e.target,this.widgetName+".preventClickEvent")&&l.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return t._mouseMove(e)},this._mouseUpDelegate=function(e){return t._mouseUp(e)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),a=!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(l.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&l.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,a=!1,e.preventDefault()},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),l.widget("ui.slider",l.ui.mouse,{version:"1.13.2",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,t=this.options,i=this.element.find(".ui-slider-handle"),s=[],n=t.values&&t.values.length||1;for(i.length>n&&(i.slice(n).remove(),i=i.slice(0,n)),e=i.length;e<n;e++)s.push("<span tabindex='0'></span>");this.handles=i.add(l(s.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){l(this).data("ui-slider-handle-index",e).attr("tabIndex",0)})},_createRange:function(){var e=this.options;e.range?(!0===e.range&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:Array.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=l("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==e.range&&"max"!==e.range||this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,t,o,h=this,r=this.options;return!r.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),o={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(o),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var t=Math.abs(i-h.values(e));(t<s||s===t&&(e===h._lastChangedValue||h.values(e)===r.min))&&(s=t,n=l(this),a=e)}),!1!==this._start(e,a)&&(this._mouseSliding=!0,this._handleIndex=a,this._addClass(n,null,"ui-state-active"),n.trigger("focus"),t=n.offset(),o=!l(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=o?{left:0,top:0}:{left:e.pageX-t.left-n.width()/2,top:e.pageY-t.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,i),this._animateOff=!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},t=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,t),!1},_mouseStop:function(e){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,e="horizontal"===this.orientation?(t=this.elementSize.width,e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),e=e/t;return(e=1<e?1:e)<0&&(e=0),"vertical"===this.orientation&&(e=1-e),t=this._valueMax()-this._valueMin(),t=this._valueMin()+e*t,this._trimAlignValue(t)},_uiHash:function(e,t,i){var s={handle:this.handles[e],handleIndex:e,value:void 0!==t?t:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==t?t:this.values(e),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(e,t){return this._trigger("start",e,this._uiHash(t))},_slide:function(e,t,i){var s,n=this.value(),a=this.values();this._hasMultipleValues()&&(s=this.values(t?0:1),n=this.values(t),2===this.options.values.length&&!0===this.options.range&&(i=0===t?Math.min(s,i):Math.max(s,i)),a[t]=i),i!==n&&!1!==this._trigger("slide",e,this._uiHash(t,i,a))&&(this._hasMultipleValues()?this.values(t,i):this.value(i))},_stop:function(e,t){this._trigger("stop",e,this._uiHash(t))},_change:function(e,t){this._keySliding||this._mouseSliding||(this._lastChangedValue=t,this._trigger("change",e,this._uiHash(t)))},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),void this._change(null,0)):this._value()},values:function(e,t){var i,s,n;if(1<arguments.length)return this.options.values[e]=this._trimAlignValue(t),this._refreshValue(),void this._change(null,e);if(!arguments.length)return this._values();if(!Array.isArray(e))return this._hasMultipleValues()?this._values(e):this.value();for(i=this.options.values,s=e,n=0;n<i.length;n+=1)i[n]=this._trimAlignValue(s[n]),this._change(null,n);this._refreshValue()},_setOption:function(e,t){var i,s=0;switch("range"===e&&!0===this.options.range&&("min"===t?(this.options.value=this._values(0),this.options.values=null):"max"===t&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),Array.isArray(this.options.values)&&(s=this.options.values.length),this._super(e,t),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(t),this.handles.css("horizontal"===t?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),i=s-1;0<=i;i--)this._change(null,i);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(e){this._super(e),this._toggleClass(null,"ui-state-disabled",!!e)},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i;if(arguments.length)return e=this.options.values[e],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(t=this.options.values.slice(),i=0;i<t.length;i+=1)t[i]=this._trimAlignValue(t[i]);return t}return[]},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=0<this.options.step?this.options.step:1,i=(e-this._valueMin())%t,e=e-i;return 2*Math.abs(i)>=t&&(e+=0<i?t:-t),parseFloat(e.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step;(e=Math.round((e-t)/i)*i+t)>this.options.max&&(e-=i),this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return e=null!==this.options.min?Math.max(e,this._precisionOf(this.options.min)):e},_precisionOf:function(e){var t=e.toString(),e=t.indexOf(".");return-1===e?0:t.length-e-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(e){"vertical"===e&&this.range.css({width:"",left:""}),"horizontal"===e&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var t,i,e,s,n,a=this.options.range,o=this.options,h=this,r=!this._animateOff&&o.animate,u={};this._hasMultipleValues()?this.handles.each(function(e){i=(h.values(e)-h._valueMin())/(h._valueMax()-h._valueMin())*100,u["horizontal"===h.orientation?"left":"bottom"]=i+"%",l(this).stop(1,1)[r?"animate":"css"](u,o.animate),!0===h.options.range&&("horizontal"===h.orientation?(0===e&&h.range.stop(1,1)[r?"animate":"css"]({left:i+"%"},o.animate),1===e&&h.range[r?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:o.animate})):(0===e&&h.range.stop(1,1)[r?"animate":"css"]({bottom:i+"%"},o.animate),1===e&&h.range[r?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:o.animate}))),t=i}):(e=this.value(),s=this._valueMin(),n=this._valueMax(),i=n!==s?(e-s)/(n-s)*100:0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[r?"animate":"css"](u,o.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({width:i+"%"},o.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({width:100-i+"%"},o.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({height:i+"%"},o.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[r?"animate":"css"]({height:100-i+"%"},o.animate))},_handleEvents:{keydown:function(e){var t,i,s,n=l(e.target).data("ui-slider-handle-index");switch(e.keyCode){case l.ui.keyCode.HOME:case l.ui.keyCode.END:case l.ui.keyCode.PAGE_UP:case l.ui.keyCode.PAGE_DOWN:case l.ui.keyCode.UP:case l.ui.keyCode.RIGHT:case l.ui.keyCode.DOWN:case l.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(l(e.target),null,"ui-state-active"),!1===this._start(e,n)))return}switch(s=this.options.step,t=i=this._hasMultipleValues()?this.values(n):this.value(),e.keyCode){case l.ui.keyCode.HOME:i=this._valueMin();break;case l.ui.keyCode.END:i=this._valueMax();break;case l.ui.keyCode.PAGE_UP:i=this._trimAlignValue(t+(this._valueMax()-this._valueMin())/this.numPages);break;case l.ui.keyCode.PAGE_DOWN:i=this._trimAlignValue(t-(this._valueMax()-this._valueMin())/this.numPages);break;case l.ui.keyCode.UP:case l.ui.keyCode.RIGHT:if(t===this._valueMax())return;i=this._trimAlignValue(t+s);break;case l.ui.keyCode.DOWN:case l.ui.keyCode.LEFT:if(t===this._valueMin())return;i=this._trimAlignValue(t-s)}this._slide(e,n,i)},keyup:function(e){var t=l(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,t),this._change(e,t),this._removeClass(l(e.target),null,"ui-state-active"))}}})});
/*!
 * jQuery Validation Plugin v1.19.3
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2021 Jörn Zaefferer
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory(require("jquery"));
	} else {
		factory(jQuery);
	}
})(function ($) {
	$.extend($.fn, {
		// https://jqueryvalidation.org/validate/
		validate: function (options) {
			// If nothing is selected, return nothing; can't chain anyway
			if (!this.length) {
				if (options && options.debug && window.console) {
					console.warn(
						"Nothing selected, can't validate, returning nothing."
					);
				}
				return;
			}

			// Check if a validator for this form was already created
			var validator = $.data(this[0], "validator");
			if (validator) {
				return validator;
			}

			// Add novalidate tag if HTML5.
			this.attr("novalidate", "novalidate");

			validator = new $.validator(options, this[0]);
			$.data(this[0], "validator", validator);

			if (validator.settings.onsubmit) {
				this.on("click.validate", ":submit", function (event) {
					// Track the used submit button to properly handle scripted
					// submits later.
					validator.submitButton = event.currentTarget;

					// Allow suppressing validation by adding a cancel class to the submit button
					if ($(this).hasClass("cancel")) {
						validator.cancelSubmit = true;
					}

					// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
					if ($(this).attr("formnovalidate") !== undefined) {
						validator.cancelSubmit = true;
					}
				});

				// Validate the form on submit
				this.on("submit.validate", function (event) {
					if (validator.settings.debug) {
						// Prevent form submit to be able to see console output
						event.preventDefault();
					}

					function handle() {
						var hidden, result;

						// Insert a hidden input as a replacement for the missing submit button
						// The hidden input is inserted in two cases:
						//   - A user defined a `submitHandler`
						//   - There was a pending request due to `remote` method and `stopRequest()`
						//     was called to submit the form in case it's valid
						if (
							validator.submitButton &&
							(validator.settings.submitHandler ||
								validator.formSubmitted)
						) {
							hidden = $("<input type='hidden'/>")
								.attr("name", validator.submitButton.name)
								.val($(validator.submitButton).val())
								.appendTo(validator.currentForm);
						}

						if (
							validator.settings.submitHandler &&
							!validator.settings.debug
						) {
							result = validator.settings.submitHandler.call(
								validator,
								validator.currentForm,
								event
							);
							if (hidden) {
								// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
								hidden.remove();
							}
							if (result !== undefined) {
								return result;
							}
							return false;
						}
						return true;
					}

					// Prevent submit for invalid forms or custom submit handlers
					if (validator.cancelSubmit) {
						validator.cancelSubmit = false;
						return handle();
					}
					if (validator.form()) {
						if (validator.pendingRequest) {
							validator.formSubmitted = true;
							return false;
						}
						return handle();
					} else {
						validator.focusInvalid();
						return false;
					}
				});
			}

			return validator;
		},

		// https://jqueryvalidation.org/valid/
		valid: function () {
			var valid, validator, errorList;

			if ($(this[0]).is("form")) {
				valid = this.validate().form();
			} else {
				errorList = [];
				valid = true;
				validator = $(this[0].form).validate();
				this.each(function () {
					valid = validator.element(this) && valid;
					if (!valid) {
						errorList = errorList.concat(validator.errorList);
					}
				});
				validator.errorList = errorList;
			}
			return valid;
		},

		// https://jqueryvalidation.org/rules/
		rules: function (command, argument) {
			var element = this[0],
				isContentEditable =
					typeof this.attr("contenteditable") !== "undefined" &&
					this.attr("contenteditable") !== "false",
				settings,
				staticRules,
				existingRules,
				data,
				param,
				filtered;

			// If nothing is selected, return empty object; can't chain anyway
			if (element == null) {
				return;
			}

			if (!element.form && isContentEditable) {
				element.form = this.closest("form")[0];
				element.name = this.attr("name");
			}

			if (element.form == null) {
				return;
			}

			if (command) {
				settings = $.data(element.form, "validator").settings;
				staticRules = settings.rules;
				existingRules = $.validator.staticRules(element);
				switch (command) {
					case "add":
						$.extend(
							existingRules,
							$.validator.normalizeRule(argument)
						);

						// Remove messages from rules, but allow them to be set separately
						delete existingRules.messages;
						staticRules[element.name] = existingRules;
						if (argument.messages) {
							settings.messages[element.name] = $.extend(
								settings.messages[element.name],
								argument.messages
							);
						}
						break;
					case "remove":
						if (!argument) {
							delete staticRules[element.name];
							return existingRules;
						}
						filtered = {};
						$.each(argument.split(/\s/), function (index, method) {
							filtered[method] = existingRules[method];
							delete existingRules[method];
						});
						return filtered;
				}
			}

			data = $.validator.normalizeRules(
				$.extend(
					{},
					$.validator.classRules(element),
					$.validator.attributeRules(element),
					$.validator.dataRules(element),
					$.validator.staticRules(element)
				),
				element
			);

			// Make sure required is at front
			if (data.required) {
				param = data.required;
				delete data.required;
				data = $.extend({ required: param }, data);
			}

			// Make sure remote is at back
			if (data.remote) {
				param = data.remote;
				delete data.remote;
				data = $.extend(data, { remote: param });
			}

			return data;
		},
	});

	// JQuery trim is deprecated, provide a trim method based on String.prototype.trim
	var trim = function (str) {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
		return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
	};

	// Custom selectors
	$.extend($.expr.pseudos || $.expr[":"], {
		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

		// https://jqueryvalidation.org/blank-selector/
		blank: function (a) {
			return !trim("" + $(a).val());
		},

		// https://jqueryvalidation.org/filled-selector/
		filled: function (a) {
			var val = $(a).val();
			return val !== null && !!trim("" + val);
		},

		// https://jqueryvalidation.org/unchecked-selector/
		unchecked: function (a) {
			return !$(a).prop("checked");
		},
	});

	// Constructor for validator
	$.validator = function (options, form) {
		this.settings = $.extend(true, {}, $.validator.defaults, options);
		this.currentForm = form;
		this.init();
	};

	// https://jqueryvalidation.org/jQuery.validator.format/
	$.validator.format = function (source, params) {
		if (arguments.length === 1) {
			return function () {
				var args = $.makeArray(arguments);
				args.unshift(source);
				return $.validator.format.apply(this, args);
			};
		}
		if (params === undefined) {
			return source;
		}
		if (arguments.length > 2 && params.constructor !== Array) {
			params = $.makeArray(arguments).slice(1);
		}
		if (params.constructor !== Array) {
			params = [params];
		}
		$.each(params, function (i, n) {
			source = source.replace(
				new RegExp("\\{" + i + "\\}", "g"),
				function () {
					return n;
				}
			);
		});
		return source;
	};

	$.extend($.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: false,
			focusInvalid: true,
			errorContainer: $([]),
			errorLabelContainer: $([]),
			onsubmit: true,
			ignore: ":hidden",
			ignoreTitle: false,
			onfocusin: function (element) {
				this.lastActive = element;

				// Hide error label and remove error class on focus if enabled
				if (this.settings.focusCleanup) {
					if (this.settings.unhighlight) {
						this.settings.unhighlight.call(
							this,
							element,
							this.settings.errorClass,
							this.settings.validClass
						);
					}
					this.hideThese(this.errorsFor(element));
				}
			},
			onfocusout: function (element) {
				if (
					!this.checkable(element) &&
					(element.name in this.submitted || !this.optional(element))
				) {
					this.element(element);
				}
			},
			onkeyup: function (element, event) {
				// Avoid revalidate the field when pressing one of the following keys
				// Shift       => 16
				// Ctrl        => 17
				// Alt         => 18
				// Caps lock   => 20
				// End         => 35
				// Home        => 36
				// Left arrow  => 37
				// Up arrow    => 38
				// Right arrow => 39
				// Down arrow  => 40
				// Insert      => 45
				// Num lock    => 144
				// AltGr key   => 225
				var excludedKeys = [
					16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225,
				];

				if (
					(event.which === 9 && this.elementValue(element) === "") ||
					$.inArray(event.keyCode, excludedKeys) !== -1
				) {
					return;
				} else if (
					element.name in this.submitted ||
					element.name in this.invalid
				) {
					this.element(element);
				}
			},
			onclick: function (element) {
				// Click on selects, radiobuttons and checkboxes
				if (element.name in this.submitted) {
					this.element(element);

					// Or option elements, check parent select in that case
				} else if (element.parentNode.name in this.submitted) {
					this.element(element.parentNode);
				}
			},
			highlight: function (element, errorClass, validClass) {
				if (element.type === "radio") {
					this.findByName(element.name)
						.addClass(errorClass)
						.removeClass(validClass);
				} else {
					$(element).addClass(errorClass).removeClass(validClass);
				}
			},
			unhighlight: function (element, errorClass, validClass) {
				if (element.type === "radio") {
					this.findByName(element.name)
						.removeClass(errorClass)
						.addClass(validClass);
				} else {
					$(element).removeClass(errorClass).addClass(validClass);
				}
			},
		},

		// https://jqueryvalidation.org/jQuery.validator.setDefaults/
		setDefaults: function (settings) {
			$.extend($.validator.defaults, settings);
		},

		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date (ISO).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: $.validator.format(
				"Please enter no more than {0} characters."
			),
			minlength: $.validator.format(
				"Please enter at least {0} characters."
			),
			rangelength: $.validator.format(
				"Please enter a value between {0} and {1} characters long."
			),
			range: $.validator.format(
				"Please enter a value between {0} and {1}."
			),
			max: $.validator.format(
				"Please enter a value less than or equal to {0}."
			),
			min: $.validator.format(
				"Please enter a value greater than or equal to {0}."
			),
			step: $.validator.format("Please enter a multiple of {0}."),
		},

		autoCreateRanges: false,

		prototype: {
			init: function () {
				this.labelContainer = $(this.settings.errorLabelContainer);
				this.errorContext =
					(this.labelContainer.length && this.labelContainer) ||
					$(this.currentForm);
				this.containers = $(this.settings.errorContainer).add(
					this.settings.errorLabelContainer
				);
				this.submitted = {};
				this.valueCache = {};
				this.pendingRequest = 0;
				this.pending = {};
				this.invalid = {};
				this.reset();

				var currentForm = this.currentForm,
					groups = (this.groups = {}),
					rules;
				$.each(this.settings.groups, function (key, value) {
					if (typeof value === "string") {
						value = value.split(/\s/);
					}
					$.each(value, function (index, name) {
						groups[name] = key;
					});
				});
				rules = this.settings.rules;
				$.each(rules, function (key, value) {
					rules[key] = $.validator.normalizeRule(value);
				});

				function delegate(event) {
					var isContentEditable =
						typeof $(this).attr("contenteditable") !==
							"undefined" &&
						$(this).attr("contenteditable") !== "false";

					// Set form expando on contenteditable
					if (!this.form && isContentEditable) {
						this.form = $(this).closest("form")[0];
						this.name = $(this).attr("name");
					}

					// Ignore the element if it belongs to another form. This will happen mainly
					// when setting the `form` attribute of an input to the id of another form.
					if (currentForm !== this.form) {
						return;
					}

					var validator = $.data(this.form, "validator"),
						eventType = "on" + event.type.replace(/^validate/, ""),
						settings = validator.settings;
					if (settings[eventType] && !$(this).is(settings.ignore)) {
						settings[eventType].call(validator, this, event);
					}
				}

				$(this.currentForm)
					.on(
						"focusin.validate focusout.validate keyup.validate",
						":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
							"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
							"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
							"[type='radio'], [type='checkbox'], [contenteditable], [type='button']",
						delegate
					)

					// Support: Chrome, oldIE
					// "select" is provided as event.target when clicking a option
					.on(
						"click.validate",
						"select, option, [type='radio'], [type='checkbox']",
						delegate
					);

				if (this.settings.invalidHandler) {
					$(this.currentForm).on(
						"invalid-form.validate",
						this.settings.invalidHandler
					);
				}
			},

			// https://jqueryvalidation.org/Validator.form/
			form: function () {
				this.checkForm();
				$.extend(this.submitted, this.errorMap);
				this.invalid = $.extend({}, this.errorMap);
				if (!this.valid()) {
					$(this.currentForm).triggerHandler("invalid-form", [this]);
				}
				this.showErrors();
				return this.valid();
			},

			checkForm: function () {
				this.prepareForm();
				for (
					var i = 0,
						elements = (this.currentElements = this.elements());
					elements[i];
					i++
				) {
					this.check(elements[i]);
				}
				return this.valid();
			},

			// https://jqueryvalidation.org/Validator.element/
			element: function (element) {
				var cleanElement = this.clean(element),
					checkElement = this.validationTargetFor(cleanElement),
					v = this,
					result = true,
					rs,
					group;

				if (checkElement === undefined) {
					delete this.invalid[cleanElement.name];
				} else {
					this.prepareElement(checkElement);
					this.currentElements = $(checkElement);

					// If this element is grouped, then validate all group elements already
					// containing a value
					group = this.groups[checkElement.name];
					if (group) {
						$.each(this.groups, function (name, testgroup) {
							if (
								testgroup === group &&
								name !== checkElement.name
							) {
								cleanElement = v.validationTargetFor(
									v.clean(v.findByName(name))
								);
								if (
									cleanElement &&
									cleanElement.name in v.invalid
								) {
									v.currentElements.push(cleanElement);
									result = v.check(cleanElement) && result;
								}
							}
						});
					}

					rs = this.check(checkElement) !== false;
					result = result && rs;
					if (rs) {
						this.invalid[checkElement.name] = false;
					} else {
						this.invalid[checkElement.name] = true;
					}

					if (!this.numberOfInvalids()) {
						// Hide error containers on last error
						this.toHide = this.toHide.add(this.containers);
					}
					this.showErrors();

					// Add aria-invalid status for screen readers
					$(element).attr("aria-invalid", !rs);
				}

				return result;
			},

			// https://jqueryvalidation.org/Validator.showErrors/
			showErrors: function (errors) {
				if (errors) {
					var validator = this;

					// Add items to error list and map
					$.extend(this.errorMap, errors);
					this.errorList = $.map(
						this.errorMap,
						function (message, name) {
							return {
								message: message,
								element: validator.findByName(name)[0],
							};
						}
					);

					// Remove items from success list
					this.successList = $.grep(
						this.successList,
						function (element) {
							return !(element.name in errors);
						}
					);
				}
				if (this.settings.showErrors) {
					this.settings.showErrors.call(
						this,
						this.errorMap,
						this.errorList
					);
				} else {
					this.defaultShowErrors();
				}
			},

			// https://jqueryvalidation.org/Validator.resetForm/
			resetForm: function () {
				if ($.fn.resetForm) {
					$(this.currentForm).resetForm();
				}
				this.invalid = {};
				this.submitted = {};
				this.prepareForm();
				this.hideErrors();
				var elements = this.elements()
					.removeData("previousValue")
					.removeAttr("aria-invalid");

				this.resetElements(elements);
			},

			resetElements: function (elements) {
				var i;

				if (this.settings.unhighlight) {
					for (i = 0; elements[i]; i++) {
						this.settings.unhighlight.call(
							this,
							elements[i],
							this.settings.errorClass,
							""
						);
						this.findByName(elements[i].name).removeClass(
							this.settings.validClass
						);
					}
				} else {
					elements
						.removeClass(this.settings.errorClass)
						.removeClass(this.settings.validClass);
				}
			},

			numberOfInvalids: function () {
				return this.objectLength(this.invalid);
			},

			objectLength: function (obj) {
				/* jshint unused: false */
				var count = 0,
					i;
				for (i in obj) {
					// This check allows counting elements with empty error
					// message as invalid elements
					if (
						obj[i] !== undefined &&
						obj[i] !== null &&
						obj[i] !== false
					) {
						count++;
					}
				}
				return count;
			},

			hideErrors: function () {
				this.hideThese(this.toHide);
			},

			hideThese: function (errors) {
				errors.not(this.containers).text("");
				this.addWrapper(errors).hide();
			},

			valid: function () {
				return this.size() === 0;
			},

			size: function () {
				return this.errorList.length;
			},

			focusInvalid: function () {
				if (this.settings.focusInvalid) {
					try {
						$(
							this.findLastActive() ||
								(this.errorList.length &&
									this.errorList[0].element) ||
								[]
						)
							.filter(":visible")
							.trigger("focus")

							// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
							.trigger("focusin");
					} catch (e) {
						// Ignore IE throwing errors when focusing hidden elements
					}
				}
			},

			findLastActive: function () {
				var lastActive = this.lastActive;
				return (
					lastActive &&
					$.grep(this.errorList, function (n) {
						return n.element.name === lastActive.name;
					}).length === 1 &&
					lastActive
				);
			},

			elements: function () {
				var validator = this,
					rulesCache = {};

				// Select all valid inputs inside the form (no submit or reset buttons)
				return $(this.currentForm)
					.find("input, select, textarea, [contenteditable]")
					.not(":submit, :reset, :image, :disabled")
					.not(this.settings.ignore)
					.filter(function () {
						var name = this.name || $(this).attr("name"); // For contenteditable
						var isContentEditable =
							typeof $(this).attr("contenteditable") !==
								"undefined" &&
							$(this).attr("contenteditable") !== "false";

						if (
							!name &&
							validator.settings.debug &&
							window.console
						) {
							console.error("%o has no name assigned", this);
						}

						// Set form expando on contenteditable
						if (isContentEditable) {
							this.form = $(this).closest("form")[0];
							this.name = name;
						}

						// Ignore elements that belong to other/nested forms
						if (this.form !== validator.currentForm) {
							return false;
						}

						// Select only the first element for each name, and only those with rules specified
						if (
							name in rulesCache ||
							!validator.objectLength($(this).rules())
						) {
							return false;
						}

						rulesCache[name] = true;
						return true;
					});
			},

			clean: function (selector) {
				return $(selector)[0];
			},

			errors: function () {
				var errorClass = this.settings.errorClass.split(" ").join(".");
				return $(
					this.settings.errorElement + "." + errorClass,
					this.errorContext
				);
			},

			resetInternals: function () {
				this.successList = [];
				this.errorList = [];
				this.errorMap = {};
				this.toShow = $([]);
				this.toHide = $([]);
			},

			reset: function () {
				this.resetInternals();
				this.currentElements = $([]);
			},

			prepareForm: function () {
				this.reset();
				this.toHide = this.errors().add(this.containers);
			},

			prepareElement: function (element) {
				this.reset();
				this.toHide = this.errorsFor(element);
			},

			elementValue: function (element) {
				var $element = $(element),
					type = element.type,
					isContentEditable =
						typeof $element.attr("contenteditable") !==
							"undefined" &&
						$element.attr("contenteditable") !== "false",
					val,
					idx;

				if (type === "radio" || type === "checkbox") {
					return this.findByName(element.name)
						.filter(":checked")
						.val();
				} else if (
					type === "number" &&
					typeof element.validity !== "undefined"
				) {
					return element.validity.badInput ? "NaN" : $element.val();
				}

				if (isContentEditable) {
					val = $element.text();
				} else {
					val = $element.val();
				}

				if (type === "file") {
					// Modern browser (chrome & safari)
					if (val.substr(0, 12) === "C:\\fakepath\\") {
						return val.substr(12);
					}

					// Legacy browsers
					// Unix-based path
					idx = val.lastIndexOf("/");
					if (idx >= 0) {
						return val.substr(idx + 1);
					}

					// Windows-based path
					idx = val.lastIndexOf("\\");
					if (idx >= 0) {
						return val.substr(idx + 1);
					}

					// Just the file name
					return val;
				}

				if (typeof val === "string") {
					return val.replace(/\r/g, "");
				}
				return val;
			},

			check: function (element) {
				element = this.validationTargetFor(this.clean(element));

				var rules = $(element).rules(),
					rulesCount = $.map(rules, function (n, i) {
						return i;
					}).length,
					dependencyMismatch = false,
					val = this.elementValue(element),
					result,
					method,
					rule,
					normalizer;

				// Prioritize the local normalizer defined for this element over the global one
				// if the former exists, otherwise user the global one in case it exists.
				if (typeof rules.normalizer === "function") {
					normalizer = rules.normalizer;
				} else if (typeof this.settings.normalizer === "function") {
					normalizer = this.settings.normalizer;
				}

				// If normalizer is defined, then call it to retreive the changed value instead
				// of using the real one.
				// Note that `this` in the normalizer is `element`.
				if (normalizer) {
					val = normalizer.call(element, val);

					// Delete the normalizer from rules to avoid treating it as a pre-defined method.
					delete rules.normalizer;
				}

				for (method in rules) {
					rule = { method: method, parameters: rules[method] };
					try {
						result = $.validator.methods[method].call(
							this,
							val,
							element,
							rule.parameters
						);

						// If a method indicates that the field is optional and therefore valid,
						// don't mark it as valid when there are no other rules
						if (
							result === "dependency-mismatch" &&
							rulesCount === 1
						) {
							dependencyMismatch = true;
							continue;
						}
						dependencyMismatch = false;

						if (result === "pending") {
							this.toHide = this.toHide.not(
								this.errorsFor(element)
							);
							return;
						}

						if (!result) {
							this.formatAndAdd(element, rule);
							return false;
						}
					} catch (e) {
						if (this.settings.debug && window.console) {
							console.log(
								"Exception occurred when checking element " +
									element.id +
									", check the '" +
									rule.method +
									"' method.",
								e
							);
						}
						if (e instanceof TypeError) {
							e.message +=
								".  Exception occurred when checking element " +
								element.id +
								", check the '" +
								rule.method +
								"' method.";
						}

						throw e;
					}
				}
				if (dependencyMismatch) {
					return;
				}
				if (this.objectLength(rules)) {
					this.successList.push(element);
				}
				return true;
			},

			// Return the custom message for the given element and validation method
			// specified in the element's HTML5 data attribute
			// return the generic message if present and no method specific message is present
			customDataMessage: function (element, method) {
				return (
					$(element).data(
						"msg" +
							method.charAt(0).toUpperCase() +
							method.substring(1).toLowerCase()
					) || $(element).data("msg")
				);
			},

			// Return the custom message for the given element name and validation method
			customMessage: function (name, method) {
				var m = this.settings.messages[name];
				return m && (m.constructor === String ? m : m[method]);
			},

			// Return the first defined argument, allowing empty strings
			findDefined: function () {
				for (var i = 0; i < arguments.length; i++) {
					if (arguments[i] !== undefined) {
						return arguments[i];
					}
				}
				return undefined;
			},

			// The second parameter 'rule' used to be a string, and extended to an object literal
			// of the following form:
			// rule = {
			//     method: "method name",
			//     parameters: "the given method parameters"
			// }
			//
			// The old behavior still supported, kept to maintain backward compatibility with
			// old code, and will be removed in the next major release.
			defaultMessage: function (element, rule) {
				if (typeof rule === "string") {
					rule = { method: rule };
				}

				var message = this.findDefined(
						this.customMessage(element.name, rule.method),
						this.customDataMessage(element, rule.method),

						// 'title' is never undefined, so handle empty string as undefined
						(!this.settings.ignoreTitle && element.title) ||
							undefined,
						$.validator.messages[rule.method],
						"<strong>Warning: No message defined for " +
							element.name +
							"</strong>"
					),
					theregex = /\$?\{(\d+)\}/g;
				if (typeof message === "function") {
					message = message.call(this, rule.parameters, element);
				} else if (theregex.test(message)) {
					message = $.validator.format(
						message.replace(theregex, "{$1}"),
						rule.parameters
					);
				}

				return message;
			},

			formatAndAdd: function (element, rule) {
				var message = this.defaultMessage(element, rule);

				this.errorList.push({
					message: message,
					element: element,
					method: rule.method,
				});

				this.errorMap[element.name] = message;
				this.submitted[element.name] = message;
			},

			addWrapper: function (toToggle) {
				if (this.settings.wrapper) {
					toToggle = toToggle.add(
						toToggle.parent(this.settings.wrapper)
					);
				}
				return toToggle;
			},

			defaultShowErrors: function () {
				var i, elements, error;
				for (i = 0; this.errorList[i]; i++) {
					error = this.errorList[i];
					if (this.settings.highlight) {
						this.settings.highlight.call(
							this,
							error.element,
							this.settings.errorClass,
							this.settings.validClass
						);
					}
					this.showLabel(error.element, error.message);
				}
				if (this.errorList.length) {
					this.toShow = this.toShow.add(this.containers);
				}
				if (this.settings.success) {
					for (i = 0; this.successList[i]; i++) {
						this.showLabel(this.successList[i]);
					}
				}
				if (this.settings.unhighlight) {
					for (
						i = 0, elements = this.validElements();
						elements[i];
						i++
					) {
						this.settings.unhighlight.call(
							this,
							elements[i],
							this.settings.errorClass,
							this.settings.validClass
						);
					}
				}
				this.toHide = this.toHide.not(this.toShow);
				this.hideErrors();
				this.addWrapper(this.toShow).show();
			},

			validElements: function () {
				return this.currentElements.not(this.invalidElements());
			},

			invalidElements: function () {
				return $(this.errorList).map(function () {
					return this.element;
				});
			},

			showLabel: function (element, message) {
				var place,
					group,
					errorID,
					v,
					error = this.errorsFor(element),
					elementID = this.idOrName(element),
					describedBy = $(element).attr("aria-describedby");

				if (error.length) {
					// Refresh error/success class
					error
						.removeClass(this.settings.validClass)
						.addClass(this.settings.errorClass);

					// Replace message on existing label
					error.html(message);
				} else {
					// Create error element
					error = $("<" + this.settings.errorElement + ">")
						.attr("id", elementID + "-error")
						.addClass(this.settings.errorClass)
						.html(message || "");

					// Maintain reference to the element to be placed into the DOM
					place = error;
					if (this.settings.wrapper) {
						// Make sure the element is visible, even in IE
						// actually showing the wrapped element is handled elsewhere
						place = error
							.hide()
							.show()
							.wrap("<" + this.settings.wrapper + "/>")
							.parent();
					}
					if (this.labelContainer.length) {
						this.labelContainer.append(place);
					} else if (this.settings.errorPlacement) {
						this.settings.errorPlacement.call(
							this,
							place,
							$(element)
						);
					} else {
						place.insertAfter(element);
					}

					// Link error back to the element
					if (error.is("label")) {
						// If the error is a label, then associate using 'for'
						error.attr("for", elementID);

						// If the element is not a child of an associated label, then it's necessary
						// to explicitly apply aria-describedby
					} else if (
						error.parents(
							"label[for='" + this.escapeCssMeta(elementID) + "']"
						).length === 0
					) {
						errorID = error.attr("id");

						// Respect existing non-error aria-describedby
						if (!describedBy) {
							describedBy = errorID;
						} else if (
							!describedBy.match(
								new RegExp(
									"\\b" + this.escapeCssMeta(errorID) + "\\b"
								)
							)
						) {
							// Add to end of list if not already present
							describedBy += " " + errorID;
						}
						$(element).attr("aria-describedby", describedBy);

						// If this element is grouped, then assign to all elements in the same group
						group = this.groups[element.name];
						if (group) {
							v = this;
							$.each(v.groups, function (name, testgroup) {
								if (testgroup === group) {
									$(
										"[name='" +
											v.escapeCssMeta(name) +
											"']",
										v.currentForm
									).attr(
										"aria-describedby",
										error.attr("id")
									);
								}
							});
						}
					}
				}
				if (!message && this.settings.success) {
					error.text("");
					if (typeof this.settings.success === "string") {
						error.addClass(this.settings.success);
					} else {
						this.settings.success(error, element);
					}
				}
				this.toShow = this.toShow.add(error);
			},

			errorsFor: function (element) {
				var name = this.escapeCssMeta(this.idOrName(element)),
					describer = $(element).attr("aria-describedby"),
					selector =
						"label[for='" +
						name +
						"'], label[for='" +
						name +
						"'] *";

				// 'aria-describedby' should directly reference the error element
				if (describer) {
					selector =
						selector +
						", #" +
						this.escapeCssMeta(describer).replace(/\s+/g, ", #");
				}

				return this.errors().filter(selector);
			},

			// See https://api.jquery.com/category/selectors/, for CSS
			// meta-characters that should be escaped in order to be used with JQuery
			// as a literal part of a name/id or any selector.
			escapeCssMeta: function (string) {
				return string.replace(
					/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,
					"\\$1"
				);
			},

			idOrName: function (element) {
				return (
					this.groups[element.name] ||
					(this.checkable(element)
						? element.name
						: element.id || element.name)
				);
			},

			validationTargetFor: function (element) {
				// If radio/checkbox, validate first element in group instead
				if (this.checkable(element)) {
					element = this.findByName(element.name);
				}

				// Always apply ignore filter
				return $(element).not(this.settings.ignore)[0];
			},

			checkable: function (element) {
				return /radio|checkbox/i.test(element.type);
			},

			findByName: function (name) {
				return $(this.currentForm).find(
					"[name='" + this.escapeCssMeta(name) + "']"
				);
			},

			getLength: function (value, element) {
				switch (element.nodeName.toLowerCase()) {
					case "select":
						return $("option:selected", element).length;
					case "input":
						if (this.checkable(element)) {
							return this.findByName(element.name).filter(
								":checked"
							).length;
						}
				}
				return value.length;
			},

			depend: function (param, element) {
				return this.dependTypes[typeof param]
					? this.dependTypes[typeof param](param, element)
					: true;
			},

			dependTypes: {
				boolean: function (param) {
					return param;
				},
				string: function (param, element) {
					return !!$(param, element.form).length;
				},
				function: function (param, element) {
					return param(element);
				},
			},

			optional: function (element) {
				var val = this.elementValue(element);
				return (
					!$.validator.methods.required.call(this, val, element) &&
					"dependency-mismatch"
				);
			},

			startRequest: function (element) {
				if (!this.pending[element.name]) {
					this.pendingRequest++;
					$(element).addClass(this.settings.pendingClass);
					this.pending[element.name] = true;
				}
			},

			stopRequest: function (element, valid) {
				this.pendingRequest--;

				// Sometimes synchronization fails, make sure pendingRequest is never < 0
				if (this.pendingRequest < 0) {
					this.pendingRequest = 0;
				}
				delete this.pending[element.name];
				$(element).removeClass(this.settings.pendingClass);
				if (
					valid &&
					this.pendingRequest === 0 &&
					this.formSubmitted &&
					this.form()
				) {
					$(this.currentForm).submit();

					// Remove the hidden input that was used as a replacement for the
					// missing submit button. The hidden input is added by `handle()`
					// to ensure that the value of the used submit button is passed on
					// for scripted submits triggered by this method
					if (this.submitButton) {
						$(
							"input:hidden[name='" +
								this.submitButton.name +
								"']",
							this.currentForm
						).remove();
					}

					this.formSubmitted = false;
				} else if (
					!valid &&
					this.pendingRequest === 0 &&
					this.formSubmitted
				) {
					$(this.currentForm).triggerHandler("invalid-form", [this]);
					this.formSubmitted = false;
				}
			},

			previousValue: function (element, method) {
				method = (typeof method === "string" && method) || "remote";

				return (
					$.data(element, "previousValue") ||
					$.data(element, "previousValue", {
						old: null,
						valid: true,
						message: this.defaultMessage(element, {
							method: method,
						}),
					})
				);
			},

			// Cleans up all forms and elements, removes validator-specific events
			destroy: function () {
				this.resetForm();

				$(this.currentForm)
					.off(".validate")
					.removeData("validator")
					.find(".validate-equalTo-blur")
					.off(".validate-equalTo")
					.removeClass("validate-equalTo-blur")
					.find(".validate-lessThan-blur")
					.off(".validate-lessThan")
					.removeClass("validate-lessThan-blur")
					.find(".validate-lessThanEqual-blur")
					.off(".validate-lessThanEqual")
					.removeClass("validate-lessThanEqual-blur")
					.find(".validate-greaterThanEqual-blur")
					.off(".validate-greaterThanEqual")
					.removeClass("validate-greaterThanEqual-blur")
					.find(".validate-greaterThan-blur")
					.off(".validate-greaterThan")
					.removeClass("validate-greaterThan-blur");
			},
		},

		classRuleSettings: {
			required: { required: true },
			email: { email: true },
			url: { url: true },
			date: { date: true },
			dateISO: { dateISO: true },
			number: { number: true },
			digits: { digits: true },
			creditcard: { creditcard: true },
		},

		addClassRules: function (className, rules) {
			if (className.constructor === String) {
				this.classRuleSettings[className] = rules;
			} else {
				$.extend(this.classRuleSettings, className);
			}
		},

		classRules: function (element) {
			var rules = {},
				classes = $(element).attr("class");

			if (classes) {
				$.each(classes.split(" "), function () {
					if (this in $.validator.classRuleSettings) {
						$.extend(rules, $.validator.classRuleSettings[this]);
					}
				});
			}
			return rules;
		},

		normalizeAttributeRule: function (rules, type, method, value) {
			// Convert the value to a number for number inputs, and for text for backwards compability
			// allows type="date" and others to be compared as strings
			if (
				/min|max|step/.test(method) &&
				(type === null || /number|range|text/.test(type))
			) {
				value = Number(value);

				// Support Opera Mini, which returns NaN for undefined minlength
				if (isNaN(value)) {
					value = undefined;
				}
			}

			if (value || value === 0) {
				rules[method] = value;
			} else if (type === method && type !== "range") {
				// Exception: the jquery validate 'range' method
				// does not test for the html5 'range' type
				rules[method] = true;
			}
		},

		attributeRules: function (element) {
			var rules = {},
				$element = $(element),
				type = element.getAttribute("type"),
				method,
				value;

			for (method in $.validator.methods) {
				// Support for <input required> in both html5 and older browsers
				if (method === "required") {
					value = element.getAttribute(method);

					// Some browsers return an empty string for the required attribute
					// and non-HTML5 browsers might have required="" markup
					if (value === "") {
						value = true;
					}

					// Force non-HTML5 browsers to return bool
					value = !!value;
				} else {
					value = $element.attr(method);
				}

				this.normalizeAttributeRule(rules, type, method, value);
			}

			// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
			if (
				rules.maxlength &&
				/-1|2147483647|524288/.test(rules.maxlength)
			) {
				delete rules.maxlength;
			}

			return rules;
		},

		dataRules: function (element) {
			var rules = {},
				$element = $(element),
				type = element.getAttribute("type"),
				method,
				value;

			for (method in $.validator.methods) {
				value = $element.data(
					"rule" +
						method.charAt(0).toUpperCase() +
						method.substring(1).toLowerCase()
				);

				// Cast empty attributes like `data-rule-required` to `true`
				if (value === "") {
					value = true;
				}

				this.normalizeAttributeRule(rules, type, method, value);
			}
			return rules;
		},

		staticRules: function (element) {
			var rules = {},
				validator = $.data(element.form, "validator");

			if (validator.settings.rules) {
				rules =
					$.validator.normalizeRule(
						validator.settings.rules[element.name]
					) || {};
			}
			return rules;
		},

		normalizeRules: function (rules, element) {
			// Handle dependency check
			$.each(rules, function (prop, val) {
				// Ignore rule when param is explicitly false, eg. required:false
				if (val === false) {
					delete rules[prop];
					return;
				}
				if (val.param || val.depends) {
					var keepRule = true;
					switch (typeof val.depends) {
						case "string":
							keepRule = !!$(val.depends, element.form).length;
							break;
						case "function":
							keepRule = val.depends.call(element, element);
							break;
					}
					if (keepRule) {
						rules[prop] =
							val.param !== undefined ? val.param : true;
					} else {
						$.data(element.form, "validator").resetElements(
							$(element)
						);
						delete rules[prop];
					}
				}
			});

			// Evaluate parameters
			$.each(rules, function (rule, parameter) {
				rules[rule] =
					typeof parameter === "function" && rule !== "normalizer"
						? parameter(element)
						: parameter;
			});

			// Clean number parameters
			$.each(["minlength", "maxlength"], function () {
				if (rules[this]) {
					rules[this] = Number(rules[this]);
				}
			});
			$.each(["rangelength", "range"], function () {
				var parts;
				if (rules[this]) {
					if (Array.isArray(rules[this])) {
						rules[this] = [
							Number(rules[this][0]),
							Number(rules[this][1]),
						];
					} else if (typeof rules[this] === "string") {
						parts = rules[this]
							.replace(/[\[\]]/g, "")
							.split(/[\s,]+/);
						rules[this] = [Number(parts[0]), Number(parts[1])];
					}
				}
			});

			if ($.validator.autoCreateRanges) {
				// Auto-create ranges
				if (rules.min != null && rules.max != null) {
					rules.range = [rules.min, rules.max];
					delete rules.min;
					delete rules.max;
				}
				if (rules.minlength != null && rules.maxlength != null) {
					rules.rangelength = [rules.minlength, rules.maxlength];
					delete rules.minlength;
					delete rules.maxlength;
				}
			}

			return rules;
		},

		// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
		normalizeRule: function (data) {
			if (typeof data === "string") {
				var transformed = {};
				$.each(data.split(/\s/), function () {
					transformed[this] = true;
				});
				data = transformed;
			}
			return data;
		},

		// https://jqueryvalidation.org/jQuery.validator.addMethod/
		addMethod: function (name, method, message) {
			$.validator.methods[name] = method;
			$.validator.messages[name] =
				message !== undefined ? message : $.validator.messages[name];
			if (method.length < 3) {
				$.validator.addClassRules(
					name,
					$.validator.normalizeRule(name)
				);
			}
		},

		// https://jqueryvalidation.org/jQuery.validator.methods/
		methods: {
			// https://jqueryvalidation.org/required-method/
			required: function (value, element, param) {
				// Check if dependency is met
				if (!this.depend(param, element)) {
					return "dependency-mismatch";
				}
				if (element.nodeName.toLowerCase() === "select") {
					// Could be an array for select-multiple or a string, both are fine this way
					var val = $(element).val();
					return val && val.length > 0;
				}
				if (this.checkable(element)) {
					return this.getLength(value, element) > 0;
				}
				return (
					value !== undefined && value !== null && value.length > 0
				);
			},

			// https://jqueryvalidation.org/email-method/
			email: function (value, element) {
				// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
				// Retrieved 2014-01-14
				// If you have a problem with this implementation, report a bug against the above spec
				// Or use custom methods to implement your own email validation
				return (
					this.optional(element) ||
					/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
						value
					)
				);
			},

			// https://jqueryvalidation.org/url-method/
			url: function (value, element) {
				// Copyright (c) 2010-2013 Diego Perini, MIT licensed
				// https://gist.github.com/dperini/729294
				// see also https://mathiasbynens.be/demo/url-regex
				// modified to allow protocol-relative URLs
				return (
					this.optional(element) ||
					/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
						value
					)
				);
			},

			// https://jqueryvalidation.org/date-method/
			date: (function () {
				var called = false;

				return function (value, element) {
					if (!called) {
						called = true;
						if (this.settings.debug && window.console) {
							console.warn(
								"The `date` method is deprecated and will be removed in version '2.0.0'.\n" +
									"Please don't use it, since it relies on the Date constructor, which\n" +
									"behaves very differently across browsers and locales. Use `dateISO`\n" +
									"instead or one of the locale specific methods in `localizations/`\n" +
									"and `additional-methods.js`."
							);
						}
					}

					return (
						this.optional(element) ||
						!/Invalid|NaN/.test(new Date(value).toString())
					);
				};
			})(),

			// https://jqueryvalidation.org/dateISO-method/
			dateISO: function (value, element) {
				return (
					this.optional(element) ||
					/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
						value
					)
				);
			},

			// https://jqueryvalidation.org/number-method/
			number: function (value, element) {
				return (
					this.optional(element) ||
					/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
				);
			},

			// https://jqueryvalidation.org/digits-method/
			digits: function (value, element) {
				return this.optional(element) || /^\d+$/.test(value);
			},

			// https://jqueryvalidation.org/minlength-method/
			minlength: function (value, element, param) {
				var length = Array.isArray(value)
					? value.length
					: this.getLength(value, element);
				return this.optional(element) || length >= param;
			},

			// https://jqueryvalidation.org/maxlength-method/
			maxlength: function (value, element, param) {
				var length = Array.isArray(value)
					? value.length
					: this.getLength(value, element);
				return this.optional(element) || length <= param;
			},

			// https://jqueryvalidation.org/rangelength-method/
			rangelength: function (value, element, param) {
				var length = Array.isArray(value)
					? value.length
					: this.getLength(value, element);
				return (
					this.optional(element) ||
					(length >= param[0] && length <= param[1])
				);
			},

			// https://jqueryvalidation.org/min-method/
			min: function (value, element, param) {
				return this.optional(element) || value >= param;
			},

			// https://jqueryvalidation.org/max-method/
			max: function (value, element, param) {
				return this.optional(element) || value <= param;
			},

			// https://jqueryvalidation.org/range-method/
			range: function (value, element, param) {
				return (
					this.optional(element) ||
					(value >= param[0] && value <= param[1])
				);
			},

			// https://jqueryvalidation.org/step-method/
			step: function (value, element, param) {
				var type = $(element).attr("type"),
					errorMessage =
						"Step attribute on input type " +
						type +
						" is not supported.",
					supportedTypes = ["text", "number", "range"],
					re = new RegExp("\\b" + type + "\\b"),
					notSupported = type && !re.test(supportedTypes.join()),
					decimalPlaces = function (num) {
						var match = ("" + num).match(/(?:\.(\d+))?$/);
						if (!match) {
							return 0;
						}

						// Number of digits right of decimal point.
						return match[1] ? match[1].length : 0;
					},
					toInt = function (num) {
						return Math.round(num * Math.pow(10, decimals));
					},
					valid = true,
					decimals;

				// Works only for text, number and range input types
				// TODO find a way to support input types date, datetime, datetime-local, month, time and week
				if (notSupported) {
					throw new Error(errorMessage);
				}

				decimals = decimalPlaces(param);

				// Value can't have too many decimals
				if (
					decimalPlaces(value) > decimals ||
					toInt(value) % toInt(param) !== 0
				) {
					valid = false;
				}

				return this.optional(element) || valid;
			},

			// https://jqueryvalidation.org/equalTo-method/
			equalTo: function (value, element, param) {
				// Bind to the blur event of the target in order to revalidate whenever the target field is updated
				var target = $(param);
				if (
					this.settings.onfocusout &&
					target.not(".validate-equalTo-blur").length
				) {
					target
						.addClass("validate-equalTo-blur")
						.on("blur.validate-equalTo", function () {
							$(element).valid();
						});
				}
				return value === target.val();
			},

			// https://jqueryvalidation.org/remote-method/
			remote: function (value, element, param, method) {
				if (this.optional(element)) {
					return "dependency-mismatch";
				}

				method = (typeof method === "string" && method) || "remote";

				var previous = this.previousValue(element, method),
					validator,
					data,
					optionDataString;

				if (!this.settings.messages[element.name]) {
					this.settings.messages[element.name] = {};
				}
				previous.originalMessage =
					previous.originalMessage ||
					this.settings.messages[element.name][method];
				this.settings.messages[element.name][method] = previous.message;

				param = (typeof param === "string" && { url: param }) || param;
				optionDataString = $.param(
					$.extend({ data: value }, param.data)
				);
				if (previous.old === optionDataString) {
					return previous.valid;
				}

				previous.old = optionDataString;
				validator = this;
				this.startRequest(element);
				data = {};
				data[element.name] = value;
				$.ajax(
					$.extend(
						true,
						{
							mode: "abort",
							port: "validate" + element.name,
							dataType: "json",
							data: data,
							context: validator.currentForm,
							success: function (response) {
								var valid =
										response === true ||
										response === "true",
									errors,
									message,
									submitted;

								validator.settings.messages[element.name][
									method
								] = previous.originalMessage;
								if (valid) {
									submitted = validator.formSubmitted;
									validator.resetInternals();
									validator.toHide =
										validator.errorsFor(element);
									validator.formSubmitted = submitted;
									validator.successList.push(element);
									validator.invalid[element.name] = false;
									validator.showErrors();
								} else {
									errors = {};
									message =
										response ||
										validator.defaultMessage(element, {
											method: method,
											parameters: value,
										});
									errors[element.name] = previous.message =
										message;
									validator.invalid[element.name] = true;
									validator.showErrors(errors);
								}
								previous.valid = valid;
								validator.stopRequest(element, valid);
							},
						},
						param
					)
				);
				return "pending";
			},
		},
	});

	// Ajax mode: abort
	// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
	// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

	var pendingRequests = {},
		ajax;

	// Use a prefilter if available (1.5+)
	if ($.ajaxPrefilter) {
		$.ajaxPrefilter(function (settings, _, xhr) {
			var port = settings.port;
			if (settings.mode === "abort") {
				if (pendingRequests[port]) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		ajax = $.ajax;
		$.ajax = function (settings) {
			var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
				port = ("port" in settings ? settings : $.ajaxSettings).port;
			if (mode === "abort") {
				if (pendingRequests[port]) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = ajax.apply(this, arguments);
				return pendingRequests[port];
			}
			return ajax.apply(this, arguments);
		};
	}
	return $;
});
