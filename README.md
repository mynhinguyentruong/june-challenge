# june-challenge

## Git
1. How do I create a new branch in Git?
  ```git checkout -b <NEW_BRANCH_NAME>```
2. How do I switch branches in Git?
```git checkout <BRANCH_NAME>```
3. How do I push changes to a remote repository?
```git push -u remote-name branch-name```
4. Write a script that will take a list of files and move them to a new branch.
say we have changes staged or not staged yet but don't want to commit these changes yet, so we'll stash the changes using git stash
```git checkout my-branch``` &&
```git stash pop```
-> Switch to the branch you want the changes on and run git stash pop.
5. Write a script that will clone a remote repository and checkout a specific branch.
```git clone -b my-branch git@github.com:user/myproject.git```
6. Write a script that will compare two different branches and list the differences in their contents.
```git diff mybranch..master -- myfile.cs```

7. Create a script that will list all commits made by a specific user.
if commit made by "Jonathan Smith"
```git log --author=Jon``` or ```git log --author=Smith```. Add --all if intend to search all branches and not just the current commit's ancestors in the repo.
