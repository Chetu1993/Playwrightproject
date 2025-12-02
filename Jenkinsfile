pipeline {

agent any

stages {

stage('Clean'){steps{echo 'this is the Clean step......................'
                    bat 'mvn clean'}}
stage('Compile'){steps {echo 'this is the Compile step.......................'
                    bat 'mvn compile'}}
stage('Test'){steps {echo 'this is the Test step..............'
                       bat 'mvn test'}}
stage('Package'){steps {echo 'this is the Package step...................'
                       bat 'mvn package'}}
stage('Deploy'){steps {echo 'this is the Deploy step...................'
                      bat 'mvn deploy'}}
}

  
}
