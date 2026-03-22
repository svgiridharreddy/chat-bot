import concurrently from 'concurrently';

concurrently([
  {
    name: 'Server',
    command: 'bun run dev',
    prefixColor: 'cyan',
    cwd: 'packages/server',
  },
  {
    name: 'Client',
    command: 'bun run dev',
    prefixColor: 'green',
    cwd: 'packages/client',
  },
]);
