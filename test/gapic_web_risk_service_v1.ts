// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as webriskserviceModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v1.WebRiskServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      webriskserviceModule.v1.WebRiskServiceClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      webriskserviceModule.v1.WebRiskServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = webriskserviceModule.v1.WebRiskServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new webriskserviceModule.v1.WebRiskServiceClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new webriskserviceModule.v1.WebRiskServiceClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new webriskserviceModule.v1.WebRiskServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.webRiskServiceStub, undefined);
    await client.initialize();
    assert(client.webRiskServiceStub);
  });

  it('has close method', () => {
    const client = new webriskserviceModule.v1.WebRiskServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new webriskserviceModule.v1.WebRiskServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new webriskserviceModule.v1.WebRiskServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('computeThreatListDiff', () => {
    it('invokes computeThreatListDiff without error', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.ComputeThreatListDiffRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.ComputeThreatListDiffResponse()
      );
      client.innerApiCalls.computeThreatListDiff =
        stubSimpleCall(expectedResponse);
      const [response] = await client.computeThreatListDiff(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.computeThreatListDiff as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes computeThreatListDiff without error using callback', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.ComputeThreatListDiffRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.ComputeThreatListDiffResponse()
      );
      client.innerApiCalls.computeThreatListDiff =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.computeThreatListDiff(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.webrisk.v1.IComputeThreatListDiffResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.computeThreatListDiff as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes computeThreatListDiff with error', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.ComputeThreatListDiffRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedError = new Error('expected');
      client.innerApiCalls.computeThreatListDiff = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(
        client.computeThreatListDiff(request),
        expectedError
      );
      assert(
        (client.innerApiCalls.computeThreatListDiff as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('searchUris', () => {
    it('invokes searchUris without error', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.SearchUrisRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.SearchUrisResponse()
      );
      client.innerApiCalls.searchUris = stubSimpleCall(expectedResponse);
      const [response] = await client.searchUris(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.searchUris as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes searchUris without error using callback', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.SearchUrisRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.SearchUrisResponse()
      );
      client.innerApiCalls.searchUris =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.searchUris(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.webrisk.v1.ISearchUrisResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.searchUris as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes searchUris with error', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.SearchUrisRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedError = new Error('expected');
      client.innerApiCalls.searchUris = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.searchUris(request), expectedError);
      assert(
        (client.innerApiCalls.searchUris as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('searchHashes', () => {
    it('invokes searchHashes without error', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.SearchHashesRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.SearchHashesResponse()
      );
      client.innerApiCalls.searchHashes = stubSimpleCall(expectedResponse);
      const [response] = await client.searchHashes(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.searchHashes as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes searchHashes without error using callback', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.SearchHashesRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.SearchHashesResponse()
      );
      client.innerApiCalls.searchHashes =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.searchHashes(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.webrisk.v1.ISearchHashesResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.searchHashes as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes searchHashes with error', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.SearchHashesRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedError = new Error('expected');
      client.innerApiCalls.searchHashes = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.searchHashes(request), expectedError);
      assert(
        (client.innerApiCalls.searchHashes as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('createSubmission', () => {
    it('invokes createSubmission without error', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.CreateSubmissionRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.Submission()
      );
      client.innerApiCalls.createSubmission = stubSimpleCall(expectedResponse);
      const [response] = await client.createSubmission(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createSubmission as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createSubmission without error using callback', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.CreateSubmissionRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.Submission()
      );
      client.innerApiCalls.createSubmission =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createSubmission(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.webrisk.v1.ISubmission | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createSubmission as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createSubmission with error', async () => {
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1.CreateSubmissionRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.createSubmission = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createSubmission(request), expectedError);
      assert(
        (client.innerApiCalls.createSubmission as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('Path templates', () => {
    describe('project', () => {
      const fakePath = '/rendered/path/project';
      const expectedParameters = {
        project: 'projectValue',
      };
      const client = new webriskserviceModule.v1.WebRiskServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.projectPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectPath', () => {
        const result = client.projectPath('projectValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectName', () => {
        const result = client.matchProjectFromProjectName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
