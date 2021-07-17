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

/* global window */
import * as gax from 'google-gax';
import {Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1beta1/web_risk_service_v1_beta1_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './web_risk_service_v1_beta1_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Web Risk v1beta1 API defines an interface to detect malicious URLs on your
 *  website and in client applications.
 * @class
 * @memberof v1beta1
 */
export class WebRiskServiceV1Beta1Client {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  webRiskServiceV1Beta1Stub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of WebRiskServiceV1Beta1Client.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP fallback mode.
   *     In fallback mode, a special browser-compatible transport implementation is used
   *     instead of gRPC transport. In browser context (if the `window` object is defined)
   *     the fallback mode is enabled automatically; set `options.fallback` to `false`
   *     if you need to override this behavior.
   */
  constructor(opts?: ClientOptions) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof WebRiskServiceV1Beta1Client;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest' ) {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = gax.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.webRiskServiceV1Beta1Stub) {
      return this.webRiskServiceV1Beta1Stub;
    }

    // Put together the "service stub" for
    // google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1.
    this.webRiskServiceV1Beta1Stub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.webrisk.v1beta1.WebRiskServiceV1Beta1,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const webRiskServiceV1Beta1StubMethods =
        ['computeThreatListDiff', 'searchUris', 'searchHashes'];
    for (const methodName of webRiskServiceV1Beta1StubMethods) {
      const callPromise = this.webRiskServiceV1Beta1Stub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.webRiskServiceV1Beta1Stub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'webrisk.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'webrisk.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  computeThreatListDiff(
      request?: protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffResponse,
        protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest|undefined, {}|undefined
      ]>;
  computeThreatListDiff(
      request: protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffResponse,
          protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest|null|undefined,
          {}|null|undefined>): void;
  computeThreatListDiff(
      request: protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest,
      callback: Callback<
          protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffResponse,
          protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest|null|undefined,
          {}|null|undefined>): void;
/**
 * Gets the most recent threat list diffs.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {google.cloud.webrisk.v1beta1.ThreatType} request.threatType
 *   The ThreatList to update.
 * @param {Buffer} request.versionToken
 *   The current version token of the client for the requested list (the
 *   client version that was received from the last successful diff).
 * @param {google.cloud.webrisk.v1beta1.ComputeThreatListDiffRequest.Constraints} request.constraints
 *   Required. The constraints associated with this request.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ComputeThreatListDiffResponse]{@link google.cloud.webrisk.v1beta1.ComputeThreatListDiffResponse}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example
 * const [response] = await client.computeThreatListDiff(request);
 */
  computeThreatListDiff(
      request?: protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffResponse,
          protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffResponse,
          protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffResponse,
        protos.google.cloud.webrisk.v1beta1.IComputeThreatListDiffRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    this.initialize();
    return this.innerApiCalls.computeThreatListDiff(request, options, callback);
  }
  searchUris(
      request?: protos.google.cloud.webrisk.v1beta1.ISearchUrisRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.webrisk.v1beta1.ISearchUrisResponse,
        protos.google.cloud.webrisk.v1beta1.ISearchUrisRequest|undefined, {}|undefined
      ]>;
  searchUris(
      request: protos.google.cloud.webrisk.v1beta1.ISearchUrisRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.webrisk.v1beta1.ISearchUrisResponse,
          protos.google.cloud.webrisk.v1beta1.ISearchUrisRequest|null|undefined,
          {}|null|undefined>): void;
  searchUris(
      request: protos.google.cloud.webrisk.v1beta1.ISearchUrisRequest,
      callback: Callback<
          protos.google.cloud.webrisk.v1beta1.ISearchUrisResponse,
          protos.google.cloud.webrisk.v1beta1.ISearchUrisRequest|null|undefined,
          {}|null|undefined>): void;
/**
 * This method is used to check whether a URI is on a given threatList.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.uri
 *   Required. The URI to be checked for matches.
 * @param {number[]} request.threatTypes
 *   Required. The ThreatLists to search in.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [SearchUrisResponse]{@link google.cloud.webrisk.v1beta1.SearchUrisResponse}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example
 * const [response] = await client.searchUris(request);
 */
  searchUris(
      request?: protos.google.cloud.webrisk.v1beta1.ISearchUrisRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.webrisk.v1beta1.ISearchUrisResponse,
          protos.google.cloud.webrisk.v1beta1.ISearchUrisRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.webrisk.v1beta1.ISearchUrisResponse,
          protos.google.cloud.webrisk.v1beta1.ISearchUrisRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.webrisk.v1beta1.ISearchUrisResponse,
        protos.google.cloud.webrisk.v1beta1.ISearchUrisRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    this.initialize();
    return this.innerApiCalls.searchUris(request, options, callback);
  }
  searchHashes(
      request?: protos.google.cloud.webrisk.v1beta1.ISearchHashesRequest,
      options?: CallOptions):
      Promise<[
        protos.google.cloud.webrisk.v1beta1.ISearchHashesResponse,
        protos.google.cloud.webrisk.v1beta1.ISearchHashesRequest|undefined, {}|undefined
      ]>;
  searchHashes(
      request: protos.google.cloud.webrisk.v1beta1.ISearchHashesRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.cloud.webrisk.v1beta1.ISearchHashesResponse,
          protos.google.cloud.webrisk.v1beta1.ISearchHashesRequest|null|undefined,
          {}|null|undefined>): void;
  searchHashes(
      request: protos.google.cloud.webrisk.v1beta1.ISearchHashesRequest,
      callback: Callback<
          protos.google.cloud.webrisk.v1beta1.ISearchHashesResponse,
          protos.google.cloud.webrisk.v1beta1.ISearchHashesRequest|null|undefined,
          {}|null|undefined>): void;
/**
 * Gets the full hashes that match the requested hash prefix.
 * This is used after a hash prefix is looked up in a threatList
 * and there is a match. The client side threatList only holds partial hashes
 * so the client must query this method to determine if there is a full
 * hash match of a threat.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {Buffer} request.hashPrefix
 *   A hash prefix, consisting of the most significant 4-32 bytes of a SHA256
 *   hash. For JSON requests, this field is base64-encoded.
 * @param {number[]} request.threatTypes
 *   Required. The ThreatLists to search in.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [SearchHashesResponse]{@link google.cloud.webrisk.v1beta1.SearchHashesResponse}.
 *   Please see the
 *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
 *   for more details and examples.
 * @example
 * const [response] = await client.searchHashes(request);
 */
  searchHashes(
      request?: protos.google.cloud.webrisk.v1beta1.ISearchHashesRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.cloud.webrisk.v1beta1.ISearchHashesResponse,
          protos.google.cloud.webrisk.v1beta1.ISearchHashesRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.cloud.webrisk.v1beta1.ISearchHashesResponse,
          protos.google.cloud.webrisk.v1beta1.ISearchHashesRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.cloud.webrisk.v1beta1.ISearchHashesResponse,
        protos.google.cloud.webrisk.v1beta1.ISearchHashesRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    this.initialize();
    return this.innerApiCalls.searchHashes(request, options, callback);
  }


  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    this.initialize();
    if (!this._terminated) {
      return this.webRiskServiceV1Beta1Stub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
