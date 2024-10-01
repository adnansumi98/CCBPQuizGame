
# delete the existing folders
rm -rf src, public

# remove lock file 
rm -rf *lock*

# clone the repository and copy the files 
git clone https://github.com/adnansumi98/CCBPQuizGame.git temp1 && mv temp1/* ../quizgame/ && mv temp1/.* ../quizgame

# remove temp folder
rm -rf temp1