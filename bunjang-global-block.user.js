// ==UserScript==
// @name        Bunjang - prevent global
// @namespace   Violentmonkey Scripts
// @match       https://*.bunjang.co.kr/*
// @grant       unsafeWindow
// @version     1.0
// @author      kairu
// @description 7/13/2023, 8:18:31 PM
// @run-at      document-start
// ==/UserScript==

Object.defineProperty(unsafeWindow.navigator, 'language', {value: 'ko-KR', configurable: true});
console.log(navigator.language)
