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

export CNV_NUM="$(node -v | cut -d'v' -f2)"
export micr="$HOME/./micro"
export NVM_DIR="/usr/local/nvm"
export micr="$HOME/micro"
export AWS_PROFILE="aws_package_user"
export npmc="$NVM_DIR/versions/node/v${CNV_NUM}/bin/npm"
export npxc="$NVM_DIR/versions/node/v${CNV_NUM}/bin/npx"

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

# set PATH so it includes user's private bin if it exists
if [ -d "$HOME/.local/bin" ] ; then
    PATH="$HOME/.local/bin:$PATH"
fi

# npm install -g npm@latest @google/clasp @accordproject/ergo-cli @accordproject/cicero-cli @accordproject/generator-cicero-template yo --force
#cd sc-cli
#npm install sc-cli
#npm run build
#npm link  # Makes 'sc' available globally
#sc config-init
#cd ~/
npm ci @google/clasp
npm cache verify
npm audit fix --force
sudo apt-get update
sudo apt-get install -y unzip zstd
curl -fsSL https://ollama.com/install.sh | sh
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ~/./aws/install --update
aws --version
gcloud projects describe my-cors-project-dev --format="value(projectName)"
gcloud projects describe my-cors-project-dev --format="value(projectNumber)"
aws configure
#ollama pull 
  # Download model once
#ollama serve          # Start Ollama locally
#sc-agent profile use ollama
#sc-agent              # Works offline
source $HOME/.bashrc
