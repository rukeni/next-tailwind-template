/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable import/extensions */
if (typeof window === 'undefined') {
  const server = import('./server');
  server.then((s) => s.server.listen());
} else {
  const worker = import('./browser');
  worker.then((w) => w.worker.start());
}

export {};
