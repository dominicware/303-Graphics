1 - cd into 303 Graphics folder
2 - run node build.js
3 - to rebuild automatically run npx nodemon --watch src --ext '*' build.js 
4 - to stop rebuilding automatically ctrl c
5 - build.js takes the contents of all html files and concatenates header.html and footer.html 
    to the top and bottom of those html files and creates new combined files within the 'output'
    folder.