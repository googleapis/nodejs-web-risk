// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main(threatType, constraints) {
  // [START webrisk_v1_generated_WebRiskService_ComputeThreatListDiff_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The threat list to update. Only a single ThreatType should be specified.
   */
  // const threatType = ''
  /**
   *  The current version token of the client for the requested list (the
   *  client version that was received from the last successful diff).
   *  If the client does not have a version token (this is the first time calling
   *  ComputeThreatListDiff), this may be left empty and a full database
   *  snapshot will be returned.
   */
  // const versionToken = 'Buffer.from('string')'
  /**
   *  Required. The constraints associated with this request.
   */
  // const constraints = ''

  // Imports the Webrisk library
  const {WebRiskServiceClient} = require('@google-cloud/web-risk').v1;

  // Instantiates a client
  const webriskClient = new WebRiskServiceClient();

  async function computeThreatListDiff() {
    // Construct request
    const request = {
      threatType,
      constraints,
    };

    // Run request
    const response = await webriskClient.computeThreatListDiff(request);
    console.log(response);
  }

  computeThreatListDiff();
  // [END webrisk_v1_generated_WebRiskService_ComputeThreatListDiff_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
