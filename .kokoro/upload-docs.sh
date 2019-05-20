#!/bin/bash

# Copyright 2019 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -eo pipefail

# build/test docs (Node 8.16.0 is currently installed on Python image).
export NPM_CONFIG_PREFIX=/home/node/.npm-global
npm install
npm run docs-test

# create docs.metadata, based on package.json and .repo-metadata.json.
npm i json@9.0.6 -g
python3 -m pip install gcp-docuploader
python3 -m docuploader create-metadata \
  --name=$(cat .repo-metadata.json | json name) \
  --version=$(cat package.json | json version) \
  --language=$(cat .repo-metadata.json | json language) \
  --distribution-name=$(cat .repo-metadata.json | json distribution_name) \
  --product-page=$(cat .repo-metadata.json | json product_documentation) \
  --github-repository=$(cat .repo-metadata.json | json repo) \
  --issue-tracker=$(cat .repo-metadata.json | json issue_tracker)
cp docs.metadata ./docs/docs.metadata

# deploy the docs.
DOC_UPLOAD_CREDENTIALS=${KOKORO_KEYSTORE_DIR}/73713_docuploader_service_account
python3 -m docuploader upload ./docs --credentials $DOC_UPLOAD_CREDENTIALS --staging-bucket docs-staging
