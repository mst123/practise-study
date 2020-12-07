self.addEventListener('message', function (e) {
  self.postMessage('You said: ' + e.data);
}, false);


self.postMessage('支线')