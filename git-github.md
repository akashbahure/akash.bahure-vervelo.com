# Git & GitHub Notes

## What is Git?
Git is a **version control system** used to track changes in code during software development.

## What is GitHub?
GitHub is a **cloud platform** that hosts Git repositories for collaboration and sharing.

---

## Basic Terminal Commands

- `ls` → List files and folders  
- `mkdir foldername` → Make a new directory  
- `touch file.txt` → Create an empty file  
- `cat file.txt` → Show contents of file  
- `rm -rf filename` → Force remove file/folder  

---

## Git Basic Commands

- `git --version` → Check installed Git version  
- `git init` → Initialize Git repo  
- `git status` → Show changed/unstaged files  
- `git add .` → Stage all files  
- `git add filename` → Stage specific file  
- `git restore --staged filename` → Unstage a file  
- `git commit -m "your message"` → Commit with message  
- `git log` → View commit history  

---

## Remote Repository

- `git remote add origin <URL>` → Connect local to remote repo  
- `git remote -v` → Show remote URLs  
- `git push -u origin main` → Push to GitHub  
- `git pull` → Pull changes from GitHub  
- `git clone <URL>` → Clone a remote repo  

---

## Branching

- `git branch` → List branches  
- `git branch branch-name` → Create new branch  
- `git checkout branch-name` → Switch to branch  
- `git checkout -b branch-name` → Create and switch  
- `git merge branch-name` → Merge branch into current one  

---

## Git Rebase

> Rebase applies commits from one branch onto another.

```bash
git checkout feature-branch
git rebase main

# Fix the conflict manually, then:
git add .
git rebase --continue


# Undoing Changes in Git
## Undo changes in working directory (but keep staged version)
git restore filename

#Removes the file from the staging area but keeps local changes.
git restore --staged filename

#Discard all local changes and reset completely (⚠️ irreversible)
git reset --hard




# To exclude files/folders from Git, create a .gitignore file:
node_modules/
.env
*.log
