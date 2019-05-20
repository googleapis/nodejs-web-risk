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

# build the docs (Node 8.16.0 is currently installed).
export NPM_CONFIG_PREFIX=/home/node/.npm-global
npm install
npm run docs-test

# upload docs to production bucket.
python3.6 -m pip install gcp-docuploader
DOC_UPLOAD_CREDENTIALS=${KOKORO_KEYSTORE_DIR}/73713_docuploader_service_account
python3.6 -m docuploader upload ./docs --credentials $DOC_UPLOAD_CREDENTIALS --staging-bucket docs-staging
