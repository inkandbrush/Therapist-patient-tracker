/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "swipeleft", function(sym, e) {
       //  window.location.href="landing.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "swiperight", function(sym, e) {
         window.location.href="stroke-cs-1.html";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         window.next_bak = function(url) {
             window.open('../' + url + '/' + url + '.html', '_self')
         }
         
         window.prev_bak = function(url) {
             window.open('../' + url + '/' + url + '.html', '_self')
         }
         
         window.goto_bak = function(url) {
             window.open('../' + url + '/' + url + '.html', '_self')
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   (function(symbolName) {   
         
      Symbol.bindElementAction(compId, symbolName, "${inactive1}", "click", function(sym, e) {
        //  window.location.href="landing.html";

      });
      //Edge binding end
	      Symbol.bindElementAction(compId, symbolName, "${active1}", "click", function(sym, e) {
         window.location.href="stroke-cs-1.html";

      });
     


      //Edge binding end

   })("menu");

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-3046095798");