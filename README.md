# Git commands used in the project

create an empty Git repository

    git init

manage set of tracked repositories

    git remote add origin git@github.com:kidman90/egghead-practical-git.git
    git remote -v

clone a repo into a new directory

    git clone git@github.com:kidman90/egghead-practical-git.git

show the working tree status

    git status

stage all files

    git add -A

record changes to the repo

    git commit -m "Add a fix"

update remote refs

    git push

grab latest changes

    git fetch
    git merge

fetch && merge

    git pull

list branches

    git branch

create a new branch

    git branch new-feature

switch branches

    git checkout

create && checkout

    git checkout -b new-feature

switch to the previous branch

    git checkout -

join two or more branches together

    git merge url-slugs

delete a branch

    git branch -d url-slugs

stash the changes in a dirty working directory away

    git stash
    git stash apply

apply && drop

    git stash pop

show commit logs

    git log
    q (quit)
    j (up)
    k (down)
    f (forward)
    b (backward)
    /term (search)
    n (next)
    N (previous)

pretty formats

    git log --oneline
    git log --decorate
    git log --graph

log changes

    git log -p

log insertions and deletions

    git log -stat

mixed formats

    git log --oneline --graph

log last 3 commits

    git log -3

log between given periods of time

    git log --after="yesterday"
    git log --after="30 minutes ago"
    git log --after="last tuesday"
    git log --after="last week"
    git log --after="2 weeks ago"
    git log --after="3-15-16"
    git log --after="3/15/16"

limit the commits output to ones with author/committer header lines

    git log --author="kidman90"

limit the commits output to ones with reflog entries that match the specified pattern

    git log --grep="add"

log changes which include word Math

    git log -S "Math" -p
    git log -G "Math|Random" -p

ignore case

    git log -i --author="KIDMAN"

log commits regarding a file

    git log filename.js

ignore merge commits

    git log --no-merges

show changes

    git diff
    git diff -stat
    git diff -cached
    git diff HEAD
    git diff origin/master
    git diff origin/master filename.js

show what revision and author last modified each line of a file

    git blame filename.js

list, create and push a tag object

    git tag
    git tag v1.0.0
    git push --tags

reapply commits on top of another base tip

    git rebase -i origin/master
    git rebase --abort

use binary search to find the commit that introduced a bug

    git bisect start
    git bisect bad
    git bisect good 0443d15
    git bisect reset

get and set repository or global options

    git config --global user.name
    git config --global user.name "kidman123"
    git config --global user.email
    git config --global user.email "aaa@bbb.ccc"
    git config --global core.editor
    git config --global core.editor vim
    git config --global alias.graph 'log --graph --oneline'
    git config --list
    git config --global core-excludesfile ~/.gitignore_global