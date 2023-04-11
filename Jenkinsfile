pipeline {
	// Execute the Pipeline, or stage, on any available agent
	agent any

	stages {

		// In this stage, the code is being built/compiled, and the Docker image is being created and tagged.
        // Tests shouldn't be run in this stage, in order to speed up time to deployment.
		stage ('Build') {
			stages {
				stage ('Build Dev') {
					when{ not {branch 'main'} }
					steps {
                        echo "Building branch another branch"
					}
				}
			}
		}

	} // End of ALL Stages

} // End of Pipeline
