# Node.js Server Hanging on Long Request

This repository demonstrates a common but often overlooked bug in Node.js applications: a server hanging indefinitely due to a long-running request that does not end the response promptly.  This can lead to unresponsive servers and difficulties in debugging.

## Bug Description

The `bug.js` file contains a Node.js HTTP server that simulates a long-running task within a request handler. Because the response is not ended within a reasonable timeframe, the request hangs. This can be hard to detect as the server process might not crash, but clients will experience unresponsive behavior.

## Solution

The solution in `bugSolution.js` addresses this by using asynchronous operations with timeouts or event handling mechanism to prevent indefinite hangs.