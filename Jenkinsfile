pipeline {
	// Execute the Pipeline, or stage, on any available agent
	agent any

	environment {
		SANDBOX_LIFECYCLE = "idev"
		SANDBOX_DEPLOY_AZ = "np-alln"
		SB1_DEPLOY_NS =  "rts-devint-alln" 
		DEV_DEPLOY_USER = "itsmc-ci.gen"
		DEPLOY_PWD_MASK = credentials('DEPLOY_PWD')
	}
	stages {

		// In this stage, the code is being built/compiled, and the Docker image is being created and tagged.
        // Tests shouldn't be run in this stage, in order to speed up time to deployment.
		stage ('Build') {
			stages {
				stage ('Build Dev') {
					when{ not { anyof {
                        branch 'main'
                        branch 'master'
                    }} }
					steps {
                        echo "Building another branch"
					}
				}
			}
		}
		stage('Deploy') {
			stages {
				stage ('Deploy Sandbox') {
					when{ branch 'feature/*' }
					steps {
						sh '''#!/bin/env bash
							DEPLOY_NS=${SB1_DEPLOY_NS} \
							DEPLOY_AZ=${SANDBOX_DEPLOY_AZ} \
							LIFECYCLE=${SANDBOX_LIFECYCLE} \
							DEPLOY_USER=${DEV_DEPLOY_USER} \
							DEPLOY_PWD=${DEPLOY_PWD_MASK} \
							make deploy
						'''
					}
				}
			}
		}

	} // End of ALL Stages

} // End of Pipeline
