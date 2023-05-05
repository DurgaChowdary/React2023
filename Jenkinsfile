pipeline {
	// Execute the Pipeline, or stage, on any available agent
	agent any

	environment {
		SANDBOX_LIFECYCLE = "idev"
		SANDBOX_DEPLOY_AZ = "np-alln"
		SB1_DEPLOY_NS =  "rts-devint-alln" 
		DEV_DEPLOY_USER = "itsmc-ci.gen"
	}

	stages {

		// In this stage, the code is being built/compiled, and the Docker image is being created and tagged.
        // Tests shouldn't be run in this stage, in order to speed up time to deployment.
		stage ('Build') {
			stages {
				stage ('Build Dev') {
					when{ not { anyOf {
                        branch 'main'
                        branch 'master'
                    }} }
					steps {
                       echo "In Feature when condition"
						echo 'Pulling...' + env.BRANCH_NAME + BRANCH_NAME
						sh ''' type env '''
					}
				}
			}
		}
		stage('Deploy') {
			stages {
				stage ('Deploy Sandbox') {
					when{ branch 'develop' }
					steps {
						sh '''
							GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
							echo 'Git Branch' + ${GIT_BRANCH} + ${env.GIT_BRANCH_NAME}
						'''
					}
				}
			}
		}

	} // End of ALL Stages

} // End of Pipeline
