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
  // [START webrisk_v1beta1_generated_WebRiskServiceV1Beta1_ComputeThreatListDiff_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The ThreatList to update.
   */
  // const threatType = ''
  /**
   *  The current version token of the client for the requested list (the
   *  client version that was received from the last successful diff).
   */
  // const versionToken = 'Buffer.from('string')'
  /**
   *  Required. The constraints associated with this request.
   */
  // const constraints = ''

  // Imports the Webrisk library
  const {WebRiskServiceV1Beta1Client} = require('@google-cloud/web-risk').v1beta1;

  // Instantiates a client
  const webriskClient = new WebRiskServiceV1Beta1Client();

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
  // [END webrisk_v1beta1_generated_WebRiskServiceV1Beta1_ComputeThreatListDiff_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
