pipeline {

agent any

stages {

stage('Build'){steps{echo 'this is the Build step......................'
                    bat 'mvn clean'}}
stage('Test'){steps {echo 'this is the Deploy step.......................'
                    bat 'mvn test'}}
stage('Compile'){steps {echo 'this is the Test step..............'
                       bat 'mvn compile'}}
stage('Deploy'){steps {echo 'this is the Release step...................'
                       bat 'mvn deploy'}}
}

  
}
