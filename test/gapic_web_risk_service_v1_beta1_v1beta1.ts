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
import * as webriskservicev1beta1Module from '../src';

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

describe('v1beta1.WebRiskServiceV1Beta1Client', () => {
  it('has servicePath', () => {
    const servicePath =
      webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client
        .servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client
        .apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port =
      webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client =
      new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client =
      new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
        fallback: true,
      });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client =
      new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
    assert.strictEqual(client.webRiskServiceV1Beta1Stub, undefined);
    await client.initialize();
    assert(client.webRiskServiceV1Beta1Stub);
  });

  it('has close method', () => {
    const client =
      new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client =
      new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
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
    const client =
      new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
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
      const client =
        new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse()
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
      const client =
        new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse()
      );
      client.innerApiCalls.computeThreatListDiff =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.computeThreatListDiff(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffResponse | null
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
      const client =
        new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest()
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
      const client =
        new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.SearchUrisRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.SearchUrisResponse()
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
      const client =
        new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.SearchUrisRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.SearchUrisResponse()
      );
      client.innerApiCalls.searchUris =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.searchUris(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.webrisk.v1beta1.ISearchUrisResponse | null
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
      const client =
        new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.SearchUrisRequest()
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
      const client =
        new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.SearchHashesRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.SearchHashesResponse()
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
      const client =
        new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.SearchHashesRequest()
      );
      const expectedOptions = {otherArgs: {headers: {}}};
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.SearchHashesResponse()
      );
      client.innerApiCalls.searchHashes =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.searchHashes(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.webrisk.v1beta1.ISearchHashesResponse | null
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
      const client =
        new webriskservicev1beta1Module.v1beta1.WebRiskServiceV1Beta1Client({
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.webrisk.v1beta1.SearchHashesRequest()
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
});
