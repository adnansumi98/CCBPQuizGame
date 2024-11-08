# reset the IDE
### delete the existing folders
rm -rf src
rm -rf public

### remove lock file 
rm -rf *lock*
rm -rf node_modules

### clone the repository and copy the files 
git clone https://github.com/adnansumi98/CCBPQuizGame.git temp1 && mv temp1/* ../quizgame/ && mv temp1/.* ../quizgame

### remove temp folder
rm -rf temp1
