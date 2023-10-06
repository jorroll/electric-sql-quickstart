# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.224.2/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT="20-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends zsh-antigen

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# We're installing firebase-tools v11.14.1 to work around 
# [this bug](https://github.com/firebase/firebase-tools/issues/5259#issuecomment-1320459606)
# in `firebase shell`
# Note that this version of firebase-tools should be kept in sync with the version installed
# in apps/firebase-functions/package.json#devDependencies
# RUN su node -c "npm install -g firebase-tools@11.14.1 gulp-cli"
