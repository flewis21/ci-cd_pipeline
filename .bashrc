# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
#[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
#force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
	# We have color support; assume it's compliant with Ecma-48
	# (ISO/IEC-6429). (Lack of such support is extremely rare, and such
	# a case would tend to support setf rather than setaf.)
	color_prompt=yes
    else
	color_prompt=
    fi
fi

if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
    PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
    ;;
*)
    ;;
esac

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    alias cls="ls -pmxaiho1 --color=auto"
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    #alias grep='grep --color=auto'
    #alias fgrep='fgrep --color=auto'
    #alias egrep='egrep --color=auto'
fi

# colored GCC warnings and errors
#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'

# some more ls aliases
#alias ll='ls -l'
#alias la='ls -A'
#alias l='ls -CF'
alias maje='f() { atra $1 && gcen $1 && gsta; unset -f f; }; f'
alias cli='f() { ls -pfuxahit1rs --color=force && git -c color.status=always status; unset -f f; }; f'
alias gcen='f() { git pull --no-rebase && $npxc prettier -w "$1" && git add -f "$1" && git commit -m "$1" && git push; unset -f f; }; f'
alias gben='f() { git add -f "$1"; unset -f f; }; f'
alias gaen='f() { git add -A && git commit -m "Pulled latest changes from Apps Script editor"; unset -f f; }; f'
alias g9en='f() { git add -A && git commit -m "Applied stashed changes for new feature"; unset -f f; }; f'
alias noed='f() { clben "$1" && cloudshell edit "$1"; unset -f f; }; f'
alias prcen='f() { $npxc prettier --watch "**/*.{js,html} --html-whitespace-sensitivity=ignore; unset -f f; }; f'
alias clcen='f() { gcen "$1" && clasp push && noed "$1"; unset -f f; }; f'
alias clben='f() { gben "$1" && gcsta && clasp pull && gaen && git stash pop && g9en; unset -f f; }; f'
alias ckben='f() { gben "$1" && gcsta && clasp pull && gaen && git push && git pull --no-rebase && $npxc prettier -w "$1" && git stash pop && clasp push && cloudshell edit "$1"; unset -f f; }; f'
alias gsta='f() { git stash --keep-index --include-untracked;  unset -f f; }; f'
alias gbsta='f() { git stash branch "$1" stash@{0};  unset -f f; }; f'
alias gcsta='f() { git stash push --keep-index -u -m "WIP: My local changes before clasp pull";  unset -f f; }; f'
alias clas='f() { cp -v $HOME/.clasp.json $HOME/ci-cd_pipeline/package/frontend/.; unset -f f; }; f'
alias atra='f() { git pull --no-rebase && cloudshell edit $1 && $npxc prettier -w "$1"; unset -f f; }; f'
alias mptr='f() { $npxc prettier --watch --html-whitespace-sensitivity "ignore" "$1"; unset -f f; }; f'
PS1='` read -p "$($@)" && ls -pfuxahit1rs --color=force && git -c color.status=always status && git prune && git gc ` \n\033[01;32m\]\d:>/<@>\<:\t[>\W<]\n\$ '


# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# tabtab source for serverless package
# uninstall by removing these lines or running `tabtab uninstall serverless`
# [ -f /home/f_lewis20_allaccess19/ci-cd_pipeline/node_modules/tabtab/.completions/serverless.bash ] && . /home/f_lewis20_allaccess19/ci-cd_pipeline/node_modules/tabtab/.completions/serverless.bash
# tabtab source for sls package
# uninstall by removing these lines or running `tabtab uninstall sls`
# [ -f /home/f_lewis20_allaccess19/ci-cd_pipeline/node_modules/tabtab/.completions/sls.bash ] && . /home/f_lewis20_allaccess19/ci-cd_pipeline/node_modules/tabtab/.completions/sls.bash
# tabtab source for slss package
# uninstall by removing these lines or running `tabtab uninstall slss`
# [ -f /home/f_lewis20_allaccess19/ci-cd_pipeline/node_modules/tabtab/.completions/slss.bash ] && . /home/f_lewis20_allaccess19/ci-cd_pipeline/node_modules/tabtab/.completions/slss.bash
# Added by serverless binary installer
# export PATH="$HOME/.serverless/bin:$PATH"

source /google/devshell/bashrc.google 
