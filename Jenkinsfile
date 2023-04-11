pipeline {
	// Execute the Pipeline, or stage, on any available agent
	agent any

	// specifies a sequence of key-value pairs which will be defined as environment variables for all steps
	environment {

	}

	stages {

		// In this stage, the code is being built/compiled, and the Docker image is being created and tagged.
        // Tests shouldn't be run in this stage, in order to speed up time to deployment.
		stage ('Build') {
			stages {
				stage ('Build Dev') {
					when{ branch 'develop' }
					steps {
						sh '''#!/bin/env bash
							git checkout develop
							git pull origin develop
							make tag-build
							make build pub-image
						'''
					}
				}
			}
		}

	} // End of ALL Stages

} // End of Pipeline
