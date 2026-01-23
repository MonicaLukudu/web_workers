# DEDICATED WORKERS
### 
* This worker acts like a separate office where you send data to be processed so your main office stays clear for users.
* `new Worker(worker.js)` : this spawns a new thread. It’s a completely separate environment from your main page.
* `postMessage()` : This is the only way to talk to a worker. You can’t call functions inside the worker directly; you “mail” them data.
* The Loop: In `worker.js` , we run a loop of the iterations. If you ran this in index.html , your mouse would stop moving and the page would freeze, hence in the worker.js the UI is fluid.
* `onmessage` : This is the “mailbox” listener. When the worker finishes the math , it sends a message back, and the main script update the DOM.
##
### You see that in the code we have to codes in the html file one is for intentional freezing the page from proceeding and the othere is where the worker file is introduced to run the heavy task without freezing the page.