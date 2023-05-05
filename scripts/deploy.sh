# set the DEBUG env variable to turn on debugging
[[ -n "$DEBUG" ]] && set -x

### Main
GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo 'Git Branch' + ${GIT_BRANCH} + ${env.GIT_BRANCH_NAME}

