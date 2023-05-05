#!/bin/bash

set -e

# set the DEBUG env variable to turn on debugging
[[ -n "$DEBUG" ]] && set -x


check_az() {
  echo 'DEPLOY_AZ' + $DEPLOY_AZ
  AVAIL_ZONE="${DEPLOY_AZ:?missing required input \'DEPLOY_AZ\'}"
  # make sure that avail zone is a real value
  echo 'AVAILZONE AZ ' + $AVAIL_ZONE
  case "${AVAIL_ZONE}" in
    alln|np-alln|prd-alln|rcdn|np-rcdn|prd-rcdn|rtp|np-rtp|prd-rtp)
      USERNAME="${DEPLOY_USER:?missing required input \'DEPLOY_USER\'}"
      PASSWD="${DEPLOY_PWD:?missing required input \'DEPLOY_PWD\'}"
      INSTANCE="https://cae-${AVAIL_ZONE}.cisco.com"
      INSTANCE_NAME=""
      MCMP_APIGW="apigw-${NAMESPACE}.cisco.com"
      ;;
    local)
      INSTANCE="${LOCAL_CLUSTER:-https://10.0.75.2:8443}"
      prefix="https://"
      port=":8443"
      val="${INSTANCE#$prefix}"
      INSTANCE_NAME="${val//./-}"
      IP="${val%$port}"
      MCMP_APIGW="apigw-${NAMESPACE}.${IP}.nip.io"

      USERNAME="developer"
      PASSWD="developer"
      IMAGE_NAME="172.30.1.1:5000/${NAMESPACE}/${APP_NAME}"
      IMAGE_TAG="latest"
      ;;
    *)
      echo "ERROR: Unknown availability zone: ${AVAIL_ZONE}"
      exit 1
      ;;
  esac
}

### Main
GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo 'Git Branch' + ${GIT_BRANCH} + ${env.GIT_BRANCH_NAME}
case "${GIT_BRANCH}" in
  develop|master)
    check_az
    login
    create_registry_secret
    ;;
  feature*)
    check_az
    login
    create_registry_secret
    ;;
  *)
    DEPLOY_AZ='local'
    check_az
    login
    create_local_registry_secret
    ;;
esac
