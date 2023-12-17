# ~/.profile: executed by the command interpreter for login shells.
# This file is not read by bash(1), if ~/.bash_profile or ~/.bash_login
# exists.
# see /usr/share/doc/bash/examples/startup-files for examples.
# the files are located in the bash-doc package.

# the default umask is set in /etc/profile; for setting the umask
# for ssh logins, install and configure the libpam-umask package.
#umask 022

# if running bash
if [ -n "$BASH_VERSION" ]; then
    # include .bashrc if it exists
    if [ -f "$HOME/.bashrc" ]; then
	. "$HOME/.bashrc"
    fi
fi

export micr="$HOME/./micro"
export NVM_DIR="/usr/local/nvm"
export micr="$HOME/micro"
export AWS_PROFILE="aws_package_user"
export npmc="$NVM_DIR/versions/node/v20.10.0/bin/npm"
export npxc="$NVM_DIR/versions/node/v20.10.0/bin/npx"

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fi

# npm install -g npm@latest @google/clasp @accordproject/ergo-cli @accordproject/cicero-cli @accordproject/generator-cicero-template yo --force
npm install -g @google/clasp
npm audit fix --force
sudo ~/./aws/install --update
source $HOME/.bashrc
