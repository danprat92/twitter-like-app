#!/bin/bash
ssh-keyscan -H heroku.com >> ~/.ssh/known_hosts
# If you need access to the heroku CLI to run heroku commands in the deploy step add these lines:
curl https://cli-assets.heroku.com/install.sh | sh

cat > ~/.netrc << EOF
machine api.heroku.com
  login $HEROKU_LOGIN
  password $HEROKU_API_KEY
EOF

cat >> ~/.ssh/config << EOF
VerifyHostKeyDNS yes
StrictHostKeyChecking no
EOF
