!function(){function t(t){return o.cl_reduce.call(t,function(t,e,n){return t[n]={value:e},t},{})}var e={},n={},i={},o={},r=Array.prototype.slice;e.cl_each=function(t){for(var e=0,n=this.length;e<n;e++)t(this[e],e,this)},e.cl_map=function(t){for(var e=0,n=this.length,i=Array(n);e<n;e++)i[e]=t(this[e],e,this);return i},e.cl_reduce=function(t,e){for(var n=0,i=this.length;n<i;n++)e=t(e,this[n],n,this);return e},e.cl_some=function(t){for(var e=0,n=this.length;e<n;e++)if(t(this[e],e,this))return!0},e.cl_filter=function(t){for(var e=0,n=this.length,i=[];e<n;e++)t(this[e],e,this)&&i.push(this[e]);return i},n.cl_each=function(t){r.call(this).cl_each(t)},n.cl_map=function(t){return r.call(this).cl_map(t)},n.cl_reduce=function(t,e){return r.call(this).cl_reduce(t,e)},i.cl_bind=function(t){var e=this,n=r.call(arguments,1);return t=t||null,n.length?function(){return arguments.length?e.apply(t,n.concat(r.call(arguments))):e.apply(t,n)}:function(){return arguments.length?e.apply(t,arguments):e.call(t)}},o.cl_each=function(t){for(var e=0,n=Object.keys(this),i=n.length;e<i;e++)t(this[n[e]],n[e],this)},o.cl_map=function(t){for(var e=0,n=Object.keys(this),i=n.length,o=Array(i);e<i;e++)o[e]=t(this[n[e]],n[e],this);return o},o.cl_reduce=function(t,e){for(var n=0,i=Object.keys(this),o=i.length;n<o;n++)e=t(e,this[i[n]],i[n],this);return e},o.cl_some=function(t){for(var e=0,n=Object.keys(this),i=n.length;e<i;e++)if(t(this[n[e]],n[e],this))return!0},o.cl_extend=function(t){if(t)for(var e=0,n=Object.keys(t),i=n.length;e<i;e++)this[n[e]]=t[n[e]];return this},e=t(e),n=t(n),i=t(i),o=t(o),Object.defineProperties(Array.prototype,e),Object.defineProperties(Int8Array.prototype,e),Object.defineProperties(Uint8Array.prototype,e),Object.defineProperties(Uint8ClampedArray.prototype,e),Object.defineProperties(Int16Array.prototype,e),Object.defineProperties(Uint16Array.prototype,e),Object.defineProperties(Int32Array.prototype,e),Object.defineProperties(Uint32Array.prototype,e),Object.defineProperties(Float32Array.prototype,e),Object.defineProperties(Float64Array.prototype,e),Object.defineProperties(Function.prototype,i),Object.defineProperties(Object.prototype,o),"undefined"!=typeof window&&(Object.defineProperties(HTMLCollection.prototype,n),Object.defineProperties(NodeList.prototype,n))}(),function(t){function e(t,n,i){function o(){var e=t.textContent.replace(/\r[\n\u0085]?|[\u2424\u2028\u0085]/g,"\n");return"\n"!==e.slice(-1)&&(e+="\n"),e}function r(e,n){return E=k.parseSections(e,n),S.$allElements=Array.prototype.slice.call(t.querySelectorAll(".cledit-section *")),E}function s(t){$.saveSelectionState(!0,!0,t)}function a(t,e,n){var i=Math.min(t,e),o=Math.max(t,e),r=$.createRange(i,o),s=""+r;if(s.length!==o-i||s!==n)return r.deleteContents(),r.insertNode(S.$document.createTextNode(n)),r}function c(t,e,n){var i=o();n=void 0!==n&&n<i.length?n:i.length-1;var r=Math.min(x.diff_commonPrefix(i,t),n),s=Math.min(x.diff_commonSuffix(i,t),i.length-r,t.length-r),c=t.substring(r,t.length-s),l=a(r,i.length-s,c);return l&&(N=e,O=!0),{start:r,end:t.length-s,range:l}}function l(t,e,n){T.setDefaultMode("single"),a(t,e,n);var i=t+n.length;$.setSelectionStartEnd(i,i),$.updateCursorCoordinates(!0)}function d(t,e){T.setDefaultMode("single");var n=o(),i=n.replace(t,e);if(i!==n){var r=S.setContent(i);$.setSelectionStartEnd(r.end,r.end),$.updateCursorCoordinates(!0)}}function f(){$.restoreSelection()}function h(t){S.$markers[t.id]=t}function u(t){delete S.$markers[t.id]}function p(e){_.noWatch(function(){function n(e){for(;e&&e!==t;){if(e.section){var n=e.parentNode?o:i;return n.indexOf(e.section)===-1&&n.push(e.section)}e=e.parentNode}}var i=[],o=[];e.cl_each(function(t){n(t.target),t.addedNodes.cl_each(n),t.removedNodes.cl_each(n)}),k.fixContent(o,i,O),O=!1});var n=o(),i=x.diff_main(M,n);S.$markers.cl_each(function(t){t.adjustOffset(i)}),$.saveSelectionState();var s=r(n);S.$trigger("contentChanged",n,i,s),N||(T.addDiffs(M,n,i),T.setDefaultMode("typing"),T.saveState()),N=!1,M=n,A()}function g(t,e){e=void 0===e?t:e,$.setSelectionStartEnd(t,e),$.updateCursorCoordinates()}function v(t){return function(e){17!==e.which&&91!==e.which&&18!==e.which&&16!==e.which&&t(e)}}function C(){if(!S.$window.document.contains(t))return _.stopWatching(),S.$window.removeEventListener("keydown",m),S.$window.removeEventListener("mouseup",w),S.$trigger("destroy"),!0}function m(t){C()||v(function(){s()})(t)}function w(){C()||$.saveSelectionState(!0,!1)}function y(t){Array.isArray(t)||(t=[t]),S.$keystrokes=S.$keystrokes.concat(t).sort(function(t,e){return t.priority-e.priority})}n=n||t;var S={$contentElt:t,$scrollElt:n,$window:i||window,$keystrokes:[],$markers:{}};S.$document=S.$window.document,e.Utils.createEventHooks(S);var b=e.Utils.debounce;S.toggleEditable=function(e){void 0===e&&(e=!t.contentEditable),t.contentEditable=e},S.toggleEditable(!0);var E,M=o(),k=new e.Highlighter(S),_=new e.Watcher(S,p);_.startWatching();var x=new window.diff_match_patch,$=new e.SelectionMgr(S),N=!1,O=!1,T=new e.UndoMgr(S),A=b(function(){var t=S.$window.getSelection();$.hasFocus&&!k.isComposing&&$.selectionStart===$.selectionEnd&&t.modify&&($.selectionStart?(t.modify("move","backward","character"),t.modify("move","forward","character")):(t.modify("move","forward","character"),t.modify("move","backward","character")))},10);return S.$window.addEventListener("keydown",m,!1),S.$window.addEventListener("mouseup",w),t.addEventListener("contextmenu",$.saveSelectionState.cl_bind($,!0,!1)),t.addEventListener("keydown",v(function(t){$.saveSelectionState(),s();var e=o(),n=Math.min($.selectionStart,$.selectionEnd),i=Math.max($.selectionStart,$.selectionEnd),r={before:e.slice(0,n),after:e.slice(i),selection:e.slice(n,i),isBackwardSelection:$.selectionStart>$.selectionEnd};S.$keystrokes.cl_some(function(e){if(e.handler(t,r,S))return S.setContent(r.before+r.selection+r.after,!1,n),n=r.before.length,i=n+r.selection.length,$.setSelectionStartEnd(r.isBackwardSelection?i:n,r.isBackwardSelection?n:i),!0})}),!1),t.addEventListener("compositionstart",function(){k.isComposing++},!1),t.addEventListener("compositionend",function(){setTimeout(function(){k.isComposing&&k.isComposing--},0)},!1),t.addEventListener("paste",function(t){T.setCurrentMode("single"),t.preventDefault();var e,n=t.clipboardData;n?e=n.getData("text/plain"):(n=S.$window.clipboardData,e=n&&n.getData("Text")),e&&(l($.selectionStart,$.selectionEnd,e),s())},!1),t.addEventListener("cut",function(){T.setCurrentMode("single"),s()},!1),t.addEventListener("focus",function(){$.hasFocus=!0,S.$trigger("focus")},!1),t.addEventListener("blur",function(){$.hasFocus=!1,S.$trigger("blur")},!1),y(e.defaultKeystrokes),S.selectionMgr=$,S.undoMgr=T,S.highlighter=k,S.watcher=_,S.adjustCursorPosition=s,S.setContent=c,S.replace=l,S.replaceAll=d,S.getContent=o,S.focus=f,S.setSelection=g,S.addKeystroke=y,S.addMarker=h,S.removeMarker=u,S.init=function(t){t={cursorFocusRatio:.5,sectionHighlighter:function(t){return t.text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},sectionDelimiter:""}.cl_extend(t||{}),S.options=t,void 0!==t.content&&(M=t.content.toString(),"\n"!==M.slice(-1)&&(M+="\n"));var e=r(M,!0);S.$trigger("contentChanged",M,[0,M],e),void 0!==t.selectionStart&&void 0!==t.selectionEnd?S.setSelection(t.selectionStart,t.selectionEnd):$.saveSelectionState(),T.init(t),void 0!==t.scrollTop&&(n.scrollTop=t.scrollTop)},S}window.cledit=e}(window.diff_match_patch),function(t){function e(t){var e=t.createElement("style");e.type="text/css",e.innerHTML=".cledit-section * { display: inline; }",t.head.appendChild(e),i.push(e)}function n(n){function o(t){this.text=void 0===t.text?t:t.text,this.data=t.data}function r(t){var e=n.options.sectionHighlighter(t).replace(/\n/g,u),i=n.$document.createElement("div");i.className="cledit-section",i.innerHTML=e,t.setElement(i),s.$trigger("sectionHighlighted",t)}var s=this;t.Utils.createEventHooks(this),i.cl_some(function(t){return n.$document.head.contains(t)})||e(n.$document);var a=n.$contentElt;this.isComposing=0;var c,l=[],d=t.Utils.isWebkit,f="div",h='<br><span class="hd-lf" style="display: none">\n</span>',u='<span class="lf">'+(d?h:"\n")+"</span>";this.fixContent=function(t,e,i){t.cl_each(function(t){t.forceHighlighting=!0,i||(d&&(t.elt.getElementsByClassName("hd-lf").cl_each(function(t){t.parentNode.removeChild(t)}),t.elt.getElementsByTagName("br").cl_each(function(t){t.parentNode.replaceChild(n.$document.createTextNode("\n"),t)})),"\n"!==t.elt.textContent.slice(-1)&&t.elt.appendChild(n.$document.createTextNode("\n")))})},this.addTrailingNode=function(){this.trailingNode=n.$document.createElement(f),a.appendChild(this.trailingNode)},o.prototype.setElement=function(t){this.elt=t,t.section=this},this.parseSections=function(t,e){if(this.isComposing)return l;var i=n.options.sectionParser?n.options.sectionParser(t):[t];i=i.cl_map(function(t){return new o(t)});var d=[],f=[];if(c=void 0,e)f=l,l=i,d=i;else{var h=l.length;l.cl_some(function(t,e){var n=i[e];if(e>=i.length||t.forceHighlighting||t.text!==n.text||t.elt.parentNode!==a||t.elt.textContent!==n.text)return h=e,!0});var u=-l.length;l.slice().reverse().cl_some(function(t,e){var n=i[i.length-e-1];if(e>=i.length||t.forceHighlighting||t.text!==n.text||t.elt.parentNode!==a||t.elt.textContent!==n.text)return u=-e,!0}),h-u>l.length&&(u=h-l.length);var p=l.slice(0,h);d=i.slice(h,i.length+u);var g=l.slice(l.length+u,l.length);c=g[0],f=l.slice(h,l.length+u),l=p.concat(d).concat(g)}var v=n.$document.createDocumentFragment();return d.cl_each(function(t){t.forceHighlighting=!1,r(t),v.appendChild(t.elt)}),n.watcher.noWatch(function(){if(e)return a.innerHTML="",a.appendChild(v),this.addTrailingNode();f.cl_each(function(t){t.elt.parentNode===a&&a.removeChild(t.elt),t.elt.section=void 0}),void 0!==c?a.insertBefore(v,c.elt):a.appendChild(v);for(var t=a.firstChild;t;){var i=t.nextSibling;t.section||a.removeChild(t),t=i}this.addTrailingNode(),s.$trigger("highlighted"),n.selectionMgr.restoreSelection(),n.selectionMgr.updateCursorCoordinates()}.cl_bind(this)),l}}var i=[];t.Highlighter=n}(window.cledit),function(t){function e(t,e){this.handler=t,this.priority=e||100}function n(t,e,n){for(var i;n&&e>0||!n&&e<t.length;){var r=o[n?t[e-1]:t[e]]||"word";if(i&&r!==i&&("word"===i||"space"===r||"newLine"===i||"newLine"===r))break;i=r,n?e--:e++}return e}t.Keystroke=e;var i,o=Object.create(null);"./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?".split("").cl_each(function(t){o[t]="wordSeparator"}),o[" "]="space",o["\t"]="space",o["\n"]="newLine",t.defaultKeystrokes=[new e(function(t,e,n){if((t.ctrlKey||t.metaKey)&&!t.altKey){var i,o=t.charCode||t.keyCode,r=String.fromCharCode(o).toLowerCase();switch(r){case"y":i="redo";break;case"z":i=t.shiftKey?"redo":"undo"}return i?(t.preventDefault(),setTimeout(function(){n.undoMgr[i]()},10),!0):void 0}}),new e(function(t,e){function n(t,e,n,i){return n=+n||0,i=i||"",t.slice(0,e)+i+t.slice(e+n)}if(9===t.which&&!t.metaKey&&!t.ctrlKey){t.preventDefault();var i=t.shiftKey,o=e.before.lastIndexOf("\n")+1;return i?(/\s/.test(e.before.charAt(o))&&(e.before=n(e.before,o,1)),e.selection=e.selection.replace(/^[ \t]/gm,"")):e.selection?(e.before=n(e.before,o,0,"\t"),e.selection=e.selection.replace(/\n(?=[\s\S])/g,"\n\t")):e.before+="\t",!0}}),new e(function(t,e,n){if(13!==t.which)return void(i=!1);t.preventDefault();var o=e.before.lastIndexOf("\n")+1;if(i)return e.before=e.before.substring(0,o),e.selection="",i=!1,!0;i=!1;var r=e.before.slice(o),s=r.match(/^\s*/)[0];return s.length&&(i=!0),n.undoMgr.setCurrentMode("single"),e.before+="\n"+s,e.selection="",!0}),new e(function(e,i,o){if(8===e.which||46===e.which){if(o.undoMgr.setCurrentMode("delete"),i.selection)return i.selection="",e.preventDefault(),!0;var r=t.Utils.isMac&&e.altKey||!t.Utils.isMac&&e.ctrlKey;if(r){var s=i.before+i.after,a=n(s,i.before.length,8===e.which);return 8===e.which?i.before=i.before.slice(0,a):i.after=i.after.slice(a-s.length),e.preventDefault(),!0}return 8===e.which&&"\n"===i.before.slice(-1)?(i.before=i.before.slice(0,-1),e.preventDefault(),!0):46===e.which&&"\n"===i.after.slice(0,1)?(i.after=i.after.slice(1),e.preventDefault(),!0):void 0}}),new e(function(e,i,o){if(37===e.which||39===e.which){var r=t.Utils.isMac&&e.altKey||!t.Utils.isMac&&e.ctrlKey;if(r){var s=o.getContent(),a=n(s,o.selectionMgr.selectionEnd,37===e.which);if(e.shiftKey){var c=Math.min(o.selectionMgr.selectionStart,a),l=Math.max(o.selectionMgr.selectionStart,a);i.before=s.slice(0,c),i.after=s.slice(l),i.selection=s.slice(c,l),i.isBackwardSelection=o.selectionMgr.selectionStart>a}else i.before=s.slice(0,a),i.after=s.slice(a),i.selection="";return e.preventDefault(),!0}}})]}(window.cledit),function(t){function e(t,e){this.id=r++,this.offset=t,this.trailing=e}var n=-1,i=1,o=0,r=0;e.prototype.adjustOffset=function(t){var e=0;t.cl_each(function(t){var r=t[0],s=t[1],a=s.length;switch(r){case o:e+=a;break;case i:(this.trailing?this.offset>e:this.offset>=e)&&(this.offset+=a),e+=a;break;case n:this.offset>e&&(this.offset-=Math.min(a,this.offset-e))}}.cl_bind(this))},t.Marker=e}(window.cledit),function(t){function e(e){function n(t){if(!h||h.startContainer!==t.startContainer||h.startOffset!==t.startOffset||h.endContainer!==t.endContainer||h.endOffset!==t.endOffset)return h=t,a.$trigger("selectionChanged",a.selectionStart,a.selectionEnd,t),!0}function i(t,e){void 0===t&&(t=a.selectionStart),t<0&&(t=0),void 0===e&&(e=this.selectionEnd),e<0&&(e=0),a.selectionStart=t,a.selectionEnd=e,u()}var o=t.Utils.debounce,r=e.$contentElt,s=e.$scrollElt;t.Utils.createEventHooks(this);var a=this,c=0,l=0;this.selectionStart=0,this.selectionEnd=0,this.cursorCoordinates={},this.adjustTop=0,this.adjustBottom=0,this.findContainer=function(e){var n=t.Utils.findContainer(r,e);if("\n"===n.container.nodeValue){var i=n.container.parentNode;"hd-lf"===i.className&&i.previousSibling&&"BR"===i.previousSibling.tagName&&(n.container=i.parentNode,n.offsetInContainer=Array.prototype.indexOf.call(n.container.childNodes,0===n.offsetInContainer?i.previousSibling:i))}return n},this.createRange=function(t,n){var i=e.$document.createRange();return t===n?n=t=isNaN(t)?t:this.findContainer(t<0?0:t):(t=isNaN(t)?t:this.findContainer(t<0?0:t),n=isNaN(n)?n:this.findContainer(n<0?0:n)),i.setStart(t.container,t.offsetInContainer),i.setEnd(n.container,n.offsetInContainer),i};var d,f=o(function(){var t=this.getCoordinates(this.selectionEnd,this.selectionEndContainer,this.selectionEndOffset);if(this.cursorCoordinates.top===t.top&&this.cursorCoordinates.height===t.height&&this.cursorCoordinates.left===t.left||(this.cursorCoordinates=t,this.$trigger("cursorCoordinatesChanged",t)),d){var n,i;if(n=i=s.clientHeight/2*e.options.cursorFocusRatio,n=this.adjustTop||n,i=this.adjustBottom||n,n&&i){var o=s.scrollTop+n,r=s.scrollTop+s.clientHeight-i;this.cursorCoordinates.top<o?s.scrollTop+=this.cursorCoordinates.top-o:this.cursorCoordinates.top+this.cursorCoordinates.height>r&&(s.scrollTop+=this.cursorCoordinates.top+this.cursorCoordinates.height-r)}}d=!1}.cl_bind(this));this.updateCursorCoordinates=function(t){d=d||t,f()};var h;this.restoreSelection=function(){var t=Math.min(this.selectionStart,this.selectionEnd),i=Math.max(this.selectionStart,this.selectionEnd),o=this.createRange(t,i);if(e.$document.contains(o.commonAncestorContainer)){var r=e.$window.getSelection();r.removeAllRanges();var s=this.selectionStart>this.selectionEnd;if(r.extend){var a=o.cloneRange();a.collapse(!s),r.addRange(a),s?r.extend(o.startContainer,o.startOffset):r.extend(o.endContainer,o.endOffset)}else r.addRange(o);return n(o),o}};var u=o(function(){c=a.selectionStart,l=a.selectionEnd},50);this.setSelectionStartEnd=function(t,e,n){return i(t,e),n!==!1&&this.restoreSelection()},this.saveSelectionState=function(){function t(t,e){for(var n=t.length;n--;)if(t[n]===e)return!0;return!1}function s(t,e,n){for(var i,o=n?t:t.parentNode;o;){if(i=o.parentNode,i===e)return o;o=i}return null}function d(t){for(var e=0;t=t.previousSibling;)++e;return e}function f(e,n){var i,o=[];for(i=e;i;i=i.parentNode)o.push(i);for(i=n;i;i=i.parentNode)if(t(o,i))return i;return null}function h(t,e,n,i){var o,r,a,c,l;if(t===n)return e===i?0:e<i?-1:1;if(o=s(n,t,!0))return e<=d(o)?-1:1;if(o=s(t,n,!0))return d(o)<i?-1:1;if(r=f(t,n),!r)throw new Error("comparePoints error: nodes have no common ancestor");if(a=t===r?r:s(t,r,!0),c=n===r?r:s(n,r,!0),a===c)throw module.createError("comparePoints got to case 4 and childA and childB are the same!");for(l=r.firstChild;l;){if(l===a)return-1;if(l===c)return 1;l=l.nextSibling}}function u(){var t,o=a.selectionStart,s=a.selectionEnd,l=e.$window.getSelection();if(l.rangeCount>0){var d=l.getRangeAt(0),f=d.startContainer;if(r.compareDocumentPosition(f)&window.Node.DOCUMENT_POSITION_CONTAINED_BY||r===f){var u=d.startOffset;f.firstChild&&u>0&&(f=f.childNodes[u-1],u=f.textContent.length);for(var p=f;f!==r;){for(;f=f.previousSibling;)u+=(f.textContent||"").length;f=p=p.parentNode}var g=d+"",v=d.endContainer.firstChild;v&&"BR"===v.tagName&&1===d.endOffset&&(g+="\n"),1===h(l.anchorNode,l.anchorOffset,l.focusNode,l.focusOffset)?(o=u+g.length,s=u):(o=u,s=u+g.length),o===s&&o===e.getContent().length?(o=--s,t=a.setSelectionStartEnd(o,s)):(i(o,s),t=n(d),t=t||c!==a.selectionStart)}}return t}function p(){return u()&&(c!==a.selectionStart||l!==a.selectionEnd)}var g=!1,v=o(function(){a.updateCursorCoordinates(p()&&g),C()}),C=o(function(){a.updateCursorCoordinates(p()&&g),g=!1},10);return function(t,e,n){return n&&(c=void 0,l=void 0),t?(g=g||e,v()):void u()}}(),this.getSelectedText=function(){var t=Math.min(this.selectionStart,this.selectionEnd),n=Math.max(this.selectionStart,this.selectionEnd);return e.getContent().substring(t,n)},this.getCoordinates=function(t,n,i){if(!n){var o=this.findContainer(t);n=o.container,i=o.offsetInContainer}var s=n;s.hasChildNodes()||(s=n.parentNode);for(var a=!1,c=e.$allElements.indexOf(s);0===s.offsetHeight&&c>0;)a=!0,s=e.$allElements[--c];var l,d,f="left";if(a||"\n"===n.textContent)l=s.getBoundingClientRect();else{var h=e.getContent()[t],u={container:n,offsetInContainer:i},p={container:n,offsetInContainer:i};t>0&&(void 0===h||"\n"===h)?(f="right",0===u.offsetInContainer?u=t-1:u.offsetInContainer-=1):p.offsetInContainer===n.textContent.length?p=t+1:p.offsetInContainer+=1;var g=this.createRange(u,p);l=g.getBoundingClientRect()}return d=r.getBoundingClientRect(),{top:Math.round(l.top-d.top+r.scrollTop),height:Math.round(l.height),left:Math.round(l[f]-d.left+r.scrollLeft)}},this.getClosestWordOffset=function(t){var n=0,i=0,o=0;return e.getContent().split(/\s/).cl_some(function(e){return!!(e&&(n=o,i=o+e.length,i>t))||void(o+=e.length+1)}),{start:n,end:i}}}t.SelectionMgr=e}(window.cledit),function(t,e){function n(n){function i(){}function o(){var t,e,n;this.isBufferState=function(){return t=Date.now(),"single"!==this.currentMode&&this.currentMode===n&&t-e<f.options.bufferStateUntilIdle},this.setDefaultMode=function(t){this.currentMode=this.currentMode||t},this.resetMode=function(){C.currentMode=void 0,n=void 0},this.saveMode=function(){n=this.currentMode,this.currentMode=void 0,e=t}}function r(t){return function(){t.push(this),this.patches=p,p=[]}}function s(){Array.prototype.push.apply(p,g),g=[]}function a(t,e){var i=n.getContent();e||(t=f.options.patchHandler.reversePatches(t));var o=f.options.patchHandler.applyPatches(t,i),r=o.text||o,s=n.setContent(r,!0),a=o.selection||{start:s.end,end:s.end};c.setSelectionStartEnd(a.start,a.end),c.updateCursorCoordinates(!0),C.resetMode(),f.$trigger("undoStateChange"),n.adjustCursorPosition()}t.Utils.createEventHooks(this);var c,l,d=new e,f=this,h=[],u=[],p=[],g=[],v=t.Utils.debounce;f.options={undoStackMaxSize:200,bufferStateUntilIdle:1e3,patchHandler:{makePatches:function(t,e,n){return d.patch_make(t,n)},applyPatches:function(t,e){return d.patch_apply(t,e)[0]},reversePatches:function(t){return t=d.patch_deepCopy(t).reverse(),t.cl_each(function(t){t.diffs.cl_each(function(t){t[0]=-t[0]})}),t}}},i.prototype.addToUndoStack=r(h),i.prototype.addToRedoStack=r(u);var C=new o;this.setCurrentMode=function(t){C.currentMode=t},this.setDefaultMode=C.setDefaultMode.cl_bind(C),this.addDiffs=function(t,e,n){var i=f.options.patchHandler.makePatches(t,e,n);g.push.apply(g,i)},this.saveState=v(function(){if(u.length=0,!C.isBufferState())for(l.addToUndoStack();h.length>f.options.undoStackMaxSize;)h.shift();s(),l=new i,C.saveMode(),f.$trigger("undoStateChange")}),this.canUndo=function(){return!!h.length},this.canRedo=function(){return!!u.length},this.undo=function(){var t=h.pop();t&&(s(),l.addToRedoStack(),a(l.patches),p=t.patches,l=t)},this.redo=function(){var t=u.pop();t&&(l.addToUndoStack(),a(t.patches,!0),p=t.patches,l=t)},this.init=function(t){f.options.cl_extend(t||{}),c=n.selectionMgr,l||(l=new i)}}t.UndoMgr=n}(window.cledit,window.diff_match_patch),function(t){var e={isGecko:"MozAppearance"in document.documentElement.style,isWebkit:"WebkitAppearance"in document.documentElement.style,isMsie:"msTransform"in document.documentElement.style,isMac:navigator.userAgent.indexOf("Mac OS X")!==-1};e.defer=function(){function t(){for(var t=0;t<n;t++){try{e[t]()}catch(i){console.error(i.message,i.stack)}e[t]=void 0}n=0}var e=new Array(1e3),n=0,i=0,o=new window.MutationObserver(t),r=document.createTextNode("");return o.observe(r,{characterData:!0}),function(t){e[n++]=t,1===n&&(r.data=i=++i%2)}}(),e.debounce=function(t,n){var i,o;return n?function(){clearTimeout(i),i=setTimeout(t,n)}:function(){o||(o=!0,e.defer(function(){o=!1,t()}))}},e.createEventHooks=function(t){var e=Object.create(null);t.$trigger=function(n){var i=e[n];if(i){var o=Array.prototype.slice.call(arguments,1);i.cl_each(function(e){try{e.apply(t,o)}catch(n){console.error(n.message,n.stack)}})}},t.on=function(t,n){var i=e[t];i||(i=[],e[t]=i),i.push(n)},t.off=function(t,n){var i=e[t];if(i){var o=i.indexOf(n);~o&&i.splice(o,1)}}},e.findContainer=function(t,e){var n,i=0;do if(n=t,t=t.firstChild)do{var o=t.textContent.length;if(i<=e&&i+o>e)break;i+=o}while(t=t.nextSibling);while(t&&t.firstChild&&3!==t.nodeType);if(t)return{container:t,offsetInContainer:e-i};for(;n.lastChild;)n=n.lastChild;return{container:n,offsetInContainer:3===n.nodeType?n.textContent.length:0}},t.Utils=e}(window.cledit),function(t){function e(t,e){this.isWatching=!1;var n;this.startWatching=function(){this.stopWatching(),this.isWatching=!0,n=new window.MutationObserver(e),n.observe(t.$contentElt,{childList:!0,subtree:!0,characterData:!0})},this.stopWatching=function(){n&&(n.disconnect(),n=void 0),this.isWatching=!1},this.noWatch=function(t){return this.isWatching===!0?(this.stopWatching(),t(),this.startWatching()):void t()}}t.Watcher=e}(window.cledit);