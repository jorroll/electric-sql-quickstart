const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const JSONC = require('jsonc-parser');
shell.config.silent = true; // don't log output of child processes

// If we are running the docker compose file
// there will be a compose-postgres-1 container running
// which binds the container's 5432 port used by PG
// to some available port on the host machine.
// So we fetch this host port and use it in the default url.
const pgPort = fetchHostPortPG() ?? 5432;
const appName = fetchAppName() ?? 'electric';
const DEFAULT_URL = `postgresql://postgres:password@localhost:${pgPort}/${appName}`;
const DATABASE_URL = process.env.DATABASE_URL || DEFAULT_URL;

function fetchHostPortPG() {
  return fetchHostPort('compose-postgres-1', 5432);
}

// Returns the host port to which the `containerPort` of the `container` is bound.
// Returns undefined if the port is not bound or container does not exist.
function fetchHostPort(container, containerPort) {
  const output = shell.exec(
    `docker inspect --format='{{(index (index .NetworkSettings.Ports "${containerPort}/tcp") 0).HostPort}}' ${container}`,
  );
  const port = parseInt(output);
  if (!isNaN(port)) {
    return port;
  }
}

// Reads the app name from the backend/.envrc file
function fetchAppName() {
  return process.env.APP_NAME
}

exports.DATABASE_URL = DATABASE_URL;
