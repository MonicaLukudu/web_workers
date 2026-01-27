# Shared Worker
Shared Workers are unique because they maintain a "port" for every tab that connects to them.

`myWorker.port.start()`: Shared workers require you to manually open the communication port before sending messages.

`onconnect`: In shared-worker.js, this event fires every time a new tab opens the page.

`The ports Array`: We save every new connection into an array. This allows the worker to "broadcast" a message to all open tabs at once when the count changes.

`Shared State`: The counter variable lives inside the worker, not the tabs. This is why if you refresh Tab A, the count stays the same if Tab B is still open.