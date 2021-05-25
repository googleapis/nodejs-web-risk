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
 * `src/v1/web_risk_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './web_risk_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Web Risk API defines an interface to detect malicious URLs on your
 *  website and in client applications.
 * @class
 * @memberof v1
 */
export class WebRiskServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
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
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  webRiskServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of WebRiskServiceClient.
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
    const staticMembers = this.constructor as typeof WebRiskServiceClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
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
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      projectPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.webrisk.v1.WebRiskService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};
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
    if (this.webRiskServiceStub) {
      return this.webRiskServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.webrisk.v1.WebRiskService.
    this.webRiskServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.webrisk.v1.WebRiskService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.webrisk.v1.WebRiskService,
      this._opts
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const webRiskServiceStubMethods = [
      'computeThreatListDiff',
      'searchUris',
      'searchHashes',
      'createSubmission',
    ];
    for (const methodName of webRiskServiceStubMethods) {
      const callPromise = this.webRiskServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.webRiskServiceStub;
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
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
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
    request: protos.google.cloud.webrisk.v1.IComputeThreatListDiffRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.webrisk.v1.IComputeThreatListDiffResponse,
      protos.google.cloud.webrisk.v1.IComputeThreatListDiffRequest | undefined,
      {} | undefined
    ]
  >;
  computeThreatListDiff(
    request: protos.google.cloud.webrisk.v1.IComputeThreatListDiffRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.webrisk.v1.IComputeThreatListDiffResponse,
      | protos.google.cloud.webrisk.v1.IComputeThreatListDiffRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  computeThreatListDiff(
    request: protos.google.cloud.webrisk.v1.IComputeThreatListDiffRequest,
    callback: Callback<
      protos.google.cloud.webrisk.v1.IComputeThreatListDiffResponse,
      | protos.google.cloud.webrisk.v1.IComputeThreatListDiffRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Gets the most recent threat list diffs. These diffs should be applied to
   * a local database of hashes to keep it up-to-date. If the local database is
   * empty or excessively out-of-date, a complete snapshot of the database will
   * be returned. This Method only updates a single ThreatList at a time. To
   * update multiple ThreatList databases, this method needs to be called once
   * for each list.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {google.cloud.webrisk.v1.ThreatType} request.threatType
   *   Required. The threat list to update. Only a single ThreatType should be specified.
   * @param {Buffer} request.versionToken
   *   The current version token of the client for the requested list (the
   *   client version that was received from the last successful diff).
   *   If the client does not have a version token (this is the first time calling
   *   ComputeThreatListDiff), this may be left empty and a full database
   *   snapshot will be returned.
   * @param {google.cloud.webrisk.v1.ComputeThreatListDiffRequest.Constraints} request.constraints
   *   Required. The constraints associated with this request.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [ComputeThreatListDiffResponse]{@link google.cloud.webrisk.v1.ComputeThreatListDiffResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.computeThreatListDiff(request);
   */
  computeThreatListDiff(
    request: protos.google.cloud.webrisk.v1.IComputeThreatListDiffRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.webrisk.v1.IComputeThreatListDiffResponse,
          | protos.google.cloud.webrisk.v1.IComputeThreatListDiffRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.webrisk.v1.IComputeThreatListDiffResponse,
      | protos.google.cloud.webrisk.v1.IComputeThreatListDiffRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.webrisk.v1.IComputeThreatListDiffResponse,
      protos.google.cloud.webrisk.v1.IComputeThreatListDiffRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    this.initialize();
    return this.innerApiCalls.computeThreatListDiff(request, options, callback);
  }
  searchUris(
    request: protos.google.cloud.webrisk.v1.ISearchUrisRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.webrisk.v1.ISearchUrisResponse,
      protos.google.cloud.webrisk.v1.ISearchUrisRequest | undefined,
      {} | undefined
    ]
  >;
  searchUris(
    request: protos.google.cloud.webrisk.v1.ISearchUrisRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.webrisk.v1.ISearchUrisResponse,
      protos.google.cloud.webrisk.v1.ISearchUrisRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  searchUris(
    request: protos.google.cloud.webrisk.v1.ISearchUrisRequest,
    callback: Callback<
      protos.google.cloud.webrisk.v1.ISearchUrisResponse,
      protos.google.cloud.webrisk.v1.ISearchUrisRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * This method is used to check whether a URI is on a given threatList.
   * Multiple threatLists may be searched in a single query.
   * The response will list all requested threatLists the URI was found to
   * match. If the URI is not found on any of the requested ThreatList an
   * empty response will be returned.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.uri
   *   Required. The URI to be checked for matches.
   * @param {number[]} request.threatTypes
   *   Required. The ThreatLists to search in. Multiple ThreatLists may be specified.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SearchUrisResponse]{@link google.cloud.webrisk.v1.SearchUrisResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.searchUris(request);
   */
  searchUris(
    request: protos.google.cloud.webrisk.v1.ISearchUrisRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.webrisk.v1.ISearchUrisResponse,
          protos.google.cloud.webrisk.v1.ISearchUrisRequest | null | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.webrisk.v1.ISearchUrisResponse,
      protos.google.cloud.webrisk.v1.ISearchUrisRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.webrisk.v1.ISearchUrisResponse,
      protos.google.cloud.webrisk.v1.ISearchUrisRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    this.initialize();
    return this.innerApiCalls.searchUris(request, options, callback);
  }
  searchHashes(
    request: protos.google.cloud.webrisk.v1.ISearchHashesRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.webrisk.v1.ISearchHashesResponse,
      protos.google.cloud.webrisk.v1.ISearchHashesRequest | undefined,
      {} | undefined
    ]
  >;
  searchHashes(
    request: protos.google.cloud.webrisk.v1.ISearchHashesRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.webrisk.v1.ISearchHashesResponse,
      protos.google.cloud.webrisk.v1.ISearchHashesRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  searchHashes(
    request: protos.google.cloud.webrisk.v1.ISearchHashesRequest,
    callback: Callback<
      protos.google.cloud.webrisk.v1.ISearchHashesResponse,
      protos.google.cloud.webrisk.v1.ISearchHashesRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
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
   *   Required. The ThreatLists to search in. Multiple ThreatLists may be specified.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [SearchHashesResponse]{@link google.cloud.webrisk.v1.SearchHashesResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.searchHashes(request);
   */
  searchHashes(
    request: protos.google.cloud.webrisk.v1.ISearchHashesRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.webrisk.v1.ISearchHashesResponse,
          | protos.google.cloud.webrisk.v1.ISearchHashesRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.webrisk.v1.ISearchHashesResponse,
      protos.google.cloud.webrisk.v1.ISearchHashesRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.webrisk.v1.ISearchHashesResponse,
      protos.google.cloud.webrisk.v1.ISearchHashesRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    this.initialize();
    return this.innerApiCalls.searchHashes(request, options, callback);
  }
  createSubmission(
    request: protos.google.cloud.webrisk.v1.ICreateSubmissionRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.webrisk.v1.ISubmission,
      protos.google.cloud.webrisk.v1.ICreateSubmissionRequest | undefined,
      {} | undefined
    ]
  >;
  createSubmission(
    request: protos.google.cloud.webrisk.v1.ICreateSubmissionRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.webrisk.v1.ISubmission,
      | protos.google.cloud.webrisk.v1.ICreateSubmissionRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  createSubmission(
    request: protos.google.cloud.webrisk.v1.ICreateSubmissionRequest,
    callback: Callback<
      protos.google.cloud.webrisk.v1.ISubmission,
      | protos.google.cloud.webrisk.v1.ICreateSubmissionRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  /**
   * Creates a Submission of a URI suspected of containing phishing content to
   * be reviewed. If the result verifies the existence of malicious phishing
   * content, the site will be added to the [Google's Social Engineering
   * lists](https://support.google.com/webmasters/answer/6350487/) in order to
   * protect users that could get exposed to this threat in the future. Only
   * projects with CREATE_SUBMISSION_USERS visibility can use this method.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The name of the project that is making the submission. This string is in
   *   the format "projects/{project_number}".
   * @param {google.cloud.webrisk.v1.Submission} request.submission
   *   Required. The submission that contains the content of the phishing report.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [Submission]{@link google.cloud.webrisk.v1.Submission}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example
   * const [response] = await client.createSubmission(request);
   */
  createSubmission(
    request: protos.google.cloud.webrisk.v1.ICreateSubmissionRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.webrisk.v1.ISubmission,
          | protos.google.cloud.webrisk.v1.ICreateSubmissionRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.webrisk.v1.ISubmission,
      | protos.google.cloud.webrisk.v1.ICreateSubmissionRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.webrisk.v1.ISubmission,
      protos.google.cloud.webrisk.v1.ICreateSubmissionRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      parent: request.parent || '',
    });
    this.initialize();
    return this.innerApiCalls.createSubmission(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified project resource name string.
   *
   * @param {string} project
   * @returns {string} Resource name string.
   */
  projectPath(project: string) {
    return this.pathTemplates.projectPathTemplate.render({
      project: project,
    });
  }

  /**
   * Parse the project from Project resource.
   *
   * @param {string} projectName
   *   A fully-qualified path representing Project resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromProjectName(projectName: string) {
    return this.pathTemplates.projectPathTemplate.match(projectName).project;
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
      return this.webRiskServiceStub!.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
