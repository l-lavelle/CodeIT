// Changes the title of Homepage
export function ArrayPlusDelay(array, delegate, delay) {
     var i = 0
     var interval = setInterval(function() {
         delegate(array[i]);

         if (i++ >= array.length - 1)
             clearInterval(interval);
       // loop would be i=0
     }, delay)
     return interval
    }

export function waitForElm(selector) {
   return new Promise(resolve => {
       if (document.querySelector(selector)) {
           return resolve(document.querySelector(selector));
       }
       const observer = new MutationObserver(mutations => {
           if (document.querySelector(selector)) {
               observer.disconnect();
               resolve(document.querySelector(selector));
           }
       });
       observer.observe(document.body, {
           childList: true,
           subtree: true
       });
   });
}