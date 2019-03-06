(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n/******3rd party packages******/\r\n/*@import './styles/bootstrap-4.2.1-dist/css/bootstrap.css';*/\r\n/*@import './styles/fontawesome-free-5.7.2-web/css/all.css';*/\r\n/*@import \"~font-awesome/css/font-awesome.css\";*/\r\n/*Separate CSS style sheet for bracket rendering*/\r\n/*brackets.css*/\r\n/*Licensed from Aron Duby: https://codepen.io/aronduby/pen/qliuj*/\r\n/*\r\n *  Flex Layout Specifics\r\n*/\r\nmain{\r\n  display:flex;\r\n  flex-direction:row;\r\n}\r\n.round{\r\n  display:flex;\r\n  flex-direction:column;\r\n  justify-content:center;\r\n  width:200px;\r\n  list-style:none;\r\n  padding:0;\r\n}\r\n.round .spacer{ flex-grow:1; }\r\n.round .spacer:first-child,\r\n  .round .spacer:last-child{ flex-grow:.5; }\r\n.round .game-spacer{\r\n    flex-grow:1;\r\n  }\r\n/*\r\n *  General Styles\r\n*/\r\nbody{\r\n  font-family:sans-serif;\r\n  font-size:small;\r\n  padding:10px;\r\n  line-height:1.4em;\r\n}\r\nli.game{\r\n  padding-left:5px;\r\n}\r\nli.game.winner{\r\n    font-weight:bold;\r\n  }\r\nli.game span{\r\n    float:right;\r\n    margin-right:5px;\r\n  }\r\n/*Hacky but fills in a \"0\" in white (hidden) as a placeholder within*/\r\n/*bracket entry in order to maintain spacing             */\r\nli.game span.filler:before{\r\n  \tcontent: \"0\";\r\n  \tcolor: white;\r\n  }\r\nli.game-top{ border-bottom:1px solid #aaa; }\r\nli.game-spacer{ \r\n    border-right:1px solid #aaa;\r\n    min-height:40px;\r\n  }\r\nli.game-bottom{ \r\n    border-top:1px solid #aaa;\r\n  }\r\n/*CUSTOM STYLES BELOW TO APPLY ON TOP OF ABOVE IMPORTS*/\r\n/* Added to increase space between navbar elements*/\r\n.navbar-nav > li{\r\n  padding-left:20px;\r\n}\r\n.navbar-text {\r\n\tfont-size: 10px;\r\n\tpadding-right: 10px;\r\n}\r\n/*Add white underline to clicked navbar element*/\r\n.navbar-nav > li {\r\n  float: left;\r\n  position: relative;\r\n}\r\n.navbar-dark .navbar-nav .active a::after {\r\n  border-bottom: 5px solid #ffffff;\r\n  bottom: -5px;\r\n  content: \" \";\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n}\r\n/*To center navbar elements !!NOT WORKING!!*/\r\n.navbar.center .navbar-collapse {\r\n    text-align: center;\r\n}\r\n.navbar.center .navbar-collapse .navbar-nav {\r\n    display:inline-block;\r\n    float: none;\r\n}\r\n/*To modify font size of navbar main men items*/\r\n/*.navbar-nav > li {\r\n  font-size: 20px;\r\n  }*/\r\n/*To modify font size of navbar drop-down menu items*/\r\n.dropdown-menu {\r\n    font-size: 10px;\r\n  }\r\n/*To turn cursor into a pointer, so user sees an element can be clicked*/\r\n/*e.g. for pendil edit icon on Roster page*/\r\n.cursor-pointer{\r\n  cursor: pointer;\r\n}\r\n/*To turn any text into a=href click to navigate ui*/\r\n/*e.g. for bracket names on User Profile*/\r\n.text-pointer{\r\n  cursor: pointer;\r\n}\r\n.text-pointer:hover{\r\n  text-decoration: underline;\r\n}\r\n/*For top margin on table or grid rows*/\r\n.top5 { margin-top:5px; }\r\n.top7 { margin-top:7px; }\r\n.top10 { margin-top:10px; }\r\n.top15 { margin-top:15px; }\r\n.top17 { margin-top:17px; }\r\n.top30 { margin-top:30px; }\r\n/*For applying a custom width to buttons*/\r\n.custom {\r\n    width: 78px !important;\r\n}\r\n/*For making non Form elements look like Form input elements*/\r\n/*Used on Update Game Form*/\r\n.non-form-element {\r\n  display: block;\r\n  width: 100%;\r\n  height: calc(2.25rem + 2px);\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwic3JjL3N0eWxlcy9icmFja2V0cy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQThFO0FBQzlFLCtCQUErQjtBQUMvQiw2REFBNkQ7QUFDN0QsNkRBQTZEO0FBQzdELGdEQUFnRDtBQUdoRCxpREFBaUQ7QUNQakQsZUFBZTtBQUNmLGlFQUFpRTtBQUVqRTs7Q0FFQztBQUNEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDRSxnQkFBZ0IsV0FBVyxFQUFFO0FBQzdCOzZCQUMyQixZQUFZLEVBQUU7QUFFekM7SUFDRSxXQUFXO0VBQ2I7QUFFRjs7Q0FFQztBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUVBLHFFQUFxRTtBQUNyRSwwREFBMEQ7QUFDMUQ7R0FDQyxZQUFZO0dBQ1osWUFBWTtFQUNiO0FBRUEsYUFBYSw0QkFBNEIsRUFBRTtBQUUzQztJQUNFLDJCQUEyQjtJQUMzQixlQUFlO0VBQ2pCO0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7QURyREYsdURBQXVEO0FBRXZELG1EQUFtRDtBQUNuRDtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjtBQUVBLGdEQUFnRDtBQUNoRDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osWUFBWTtFQUNaLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBRUEsNENBQTRDO0FBQzVDO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztBQUNmO0FBRUEsK0NBQStDO0FBQy9DOztJQUVJO0FBRUoscURBQXFEO0FBQ3JEO0lBQ0ksZUFBZTtFQUNqQjtBQUdGLHdFQUF3RTtBQUN4RSwyQ0FBMkM7QUFDM0M7RUFDRSxlQUFlO0FBQ2pCO0FBRUEsb0RBQW9EO0FBQ3BELHlDQUF5QztBQUN6QztFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUVBLHVDQUF1QztBQUN2QyxRQUFRLGNBQWMsRUFBRTtBQUN4QixRQUFRLGNBQWMsRUFBRTtBQUN4QixTQUFTLGVBQWUsRUFBRTtBQUMxQixTQUFTLGVBQWUsRUFBRTtBQUMxQixTQUFTLGVBQWUsRUFBRTtBQUMxQixTQUFTLGVBQWUsRUFBRTtBQUUxQix5Q0FBeUM7QUFDekM7SUFDSSxzQkFBc0I7QUFDMUI7QUFFQSw2REFBNkQ7QUFDN0QsMkJBQTJCO0FBQzNCO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbi8qKioqKiozcmQgcGFydHkgcGFja2FnZXMqKioqKiovXHJcbi8qQGltcG9ydCAnLi9zdHlsZXMvYm9vdHN0cmFwLTQuMi4xLWRpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnOyovXHJcbi8qQGltcG9ydCAnLi9zdHlsZXMvZm9udGF3ZXNvbWUtZnJlZS01LjcuMi13ZWIvY3NzL2FsbC5jc3MnOyovXHJcbi8qQGltcG9ydCBcIn5mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjsqL1xyXG5cclxuXHJcbi8qU2VwYXJhdGUgQ1NTIHN0eWxlIHNoZWV0IGZvciBicmFja2V0IHJlbmRlcmluZyovXHJcbkBpbXBvcnQgJy4vc3R5bGVzL2JyYWNrZXRzLmNzcyc7XHJcblxyXG5cclxuLypDVVNUT00gU1RZTEVTIEJFTE9XIFRPIEFQUExZIE9OIFRPUCBPRiBBQk9WRSBJTVBPUlRTKi9cclxuXHJcbi8qIEFkZGVkIHRvIGluY3JlYXNlIHNwYWNlIGJldHdlZW4gbmF2YmFyIGVsZW1lbnRzKi9cclxuLm5hdmJhci1uYXYgPiBsaXtcclxuICBwYWRkaW5nLWxlZnQ6MjBweDtcclxufVxyXG5cclxuLm5hdmJhci10ZXh0IHtcclxuXHRmb250LXNpemU6IDEwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLypBZGQgd2hpdGUgdW5kZXJsaW5lIHRvIGNsaWNrZWQgbmF2YmFyIGVsZW1lbnQqL1xyXG4ubmF2YmFyLW5hdiA+IGxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5hY3RpdmUgYTo6YWZ0ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJvdHRvbTogLTVweDtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLypUbyBjZW50ZXIgbmF2YmFyIGVsZW1lbnRzICEhTk9UIFdPUktJTkchISovXHJcbi5uYXZiYXIuY2VudGVyIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2YmFyLmNlbnRlciAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItbmF2IHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbn1cclxuXHJcbi8qVG8gbW9kaWZ5IGZvbnQgc2l6ZSBvZiBuYXZiYXIgbWFpbiBtZW4gaXRlbXMqL1xyXG4vKi5uYXZiYXItbmF2ID4gbGkge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB9Ki9cclxuXHJcbi8qVG8gbW9kaWZ5IGZvbnQgc2l6ZSBvZiBuYXZiYXIgZHJvcC1kb3duIG1lbnUgaXRlbXMqL1xyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbi8qVG8gdHVybiBjdXJzb3IgaW50byBhIHBvaW50ZXIsIHNvIHVzZXIgc2VlcyBhbiBlbGVtZW50IGNhbiBiZSBjbGlja2VkKi9cclxuLyplLmcuIGZvciBwZW5kaWwgZWRpdCBpY29uIG9uIFJvc3RlciBwYWdlKi9cclxuLmN1cnNvci1wb2ludGVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLypUbyB0dXJuIGFueSB0ZXh0IGludG8gYT1ocmVmIGNsaWNrIHRvIG5hdmlnYXRlIHVpKi9cclxuLyplLmcuIGZvciBicmFja2V0IG5hbWVzIG9uIFVzZXIgUHJvZmlsZSovXHJcbi50ZXh0LXBvaW50ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGV4dC1wb2ludGVyOmhvdmVye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4vKkZvciB0b3AgbWFyZ2luIG9uIHRhYmxlIG9yIGdyaWQgcm93cyovXHJcbi50b3A1IHsgbWFyZ2luLXRvcDo1cHg7IH1cclxuLnRvcDcgeyBtYXJnaW4tdG9wOjdweDsgfVxyXG4udG9wMTAgeyBtYXJnaW4tdG9wOjEwcHg7IH1cclxuLnRvcDE1IHsgbWFyZ2luLXRvcDoxNXB4OyB9XHJcbi50b3AxNyB7IG1hcmdpbi10b3A6MTdweDsgfVxyXG4udG9wMzAgeyBtYXJnaW4tdG9wOjMwcHg7IH1cclxuXHJcbi8qRm9yIGFwcGx5aW5nIGEgY3VzdG9tIHdpZHRoIHRvIGJ1dHRvbnMqL1xyXG4uY3VzdG9tIHtcclxuICAgIHdpZHRoOiA3OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qRm9yIG1ha2luZyBub24gRm9ybSBlbGVtZW50cyBsb29rIGxpa2UgRm9ybSBpbnB1dCBlbGVtZW50cyovXHJcbi8qVXNlZCBvbiBVcGRhdGUgR2FtZSBGb3JtKi9cclxuLm5vbi1mb3JtLWVsZW1lbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59IiwiLypicmFja2V0cy5jc3MqL1xyXG4vKkxpY2Vuc2VkIGZyb20gQXJvbiBEdWJ5OiBodHRwczovL2NvZGVwZW4uaW8vYXJvbmR1YnkvcGVuL3FsaXVqKi9cclxuXHJcbi8qXHJcbiAqICBGbGV4IExheW91dCBTcGVjaWZpY3NcclxuKi9cclxubWFpbntcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93O1xyXG59XHJcbi5yb3VuZHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gIHBhZGRpbmc6MDtcclxufVxyXG4gIC5yb3VuZCAuc3BhY2VyeyBmbGV4LWdyb3c6MTsgfVxyXG4gIC5yb3VuZCAuc3BhY2VyOmZpcnN0LWNoaWxkLFxyXG4gIC5yb3VuZCAuc3BhY2VyOmxhc3QtY2hpbGR7IGZsZXgtZ3JvdzouNTsgfVxyXG5cclxuICAucm91bmQgLmdhbWUtc3BhY2Vye1xyXG4gICAgZmxleC1ncm93OjE7XHJcbiAgfVxyXG5cclxuLypcclxuICogIEdlbmVyYWwgU3R5bGVzXHJcbiovXHJcbmJvZHl7XHJcbiAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6c21hbGw7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjEuNGVtO1xyXG59XHJcblxyXG5saS5nYW1le1xyXG4gIHBhZGRpbmctbGVmdDo1cHg7XHJcbn1cclxuXHJcbiAgbGkuZ2FtZS53aW5uZXJ7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gIH1cclxuICBsaS5nYW1lIHNwYW57XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDo1cHg7XHJcbiAgfVxyXG5cclxuICAvKkhhY2t5IGJ1dCBmaWxscyBpbiBhIFwiMFwiIGluIHdoaXRlIChoaWRkZW4pIGFzIGEgcGxhY2Vob2xkZXIgd2l0aGluKi9cclxuICAvKmJyYWNrZXQgZW50cnkgaW4gb3JkZXIgdG8gbWFpbnRhaW4gc3BhY2luZyAgICAgICAgICAgICAqL1xyXG4gIGxpLmdhbWUgc3Bhbi5maWxsZXI6YmVmb3Jle1xyXG4gIFx0Y29udGVudDogXCIwXCI7XHJcbiAgXHRjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBsaS5nYW1lLXRvcHsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2FhYTsgfVxyXG5cclxuICBsaS5nYW1lLXNwYWNlcnsgXHJcbiAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNhYWE7XHJcbiAgICBtaW4taGVpZ2h0OjQwcHg7XHJcbiAgfVxyXG5cclxuICBsaS5nYW1lLWJvdHRvbXsgXHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjYWFhO1xyXG4gIH1cclxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Paul Maurer\Google Drive\My Files\Coding\Python\spreadpool_project\spreadpool\bracket\front-end\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map