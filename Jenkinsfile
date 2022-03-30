pipeline {
    agent {docker { image 'node:16-alpine'}}
    environment {
		registryCredential = 'DockerHub_Id' 
		registry = "nejahbenabdelkader/test_react" 
	}
    stages {
		
		stage('Build') {
			steps {
				 script { 
                    dockerImage = docker.build registry + ":$BUILD_NUMBER" 
                }
			}
		}
		stage('Deploy our image') { 
            steps { 
                script { 
                    docker.withRegistry( '', registryCredential ) { 
                        dockerImage.push() 
                    }
                } 
            }
        } 	
	}
	post {
		always {
			sh 'docker logout'
		}
	}
}