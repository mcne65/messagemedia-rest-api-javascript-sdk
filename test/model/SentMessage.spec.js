/**
 * MessageMedia REST API
 * Australia's Leading Messaging Solutions for Business and Enterprise.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@messagemedia.com
 *
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MessagemediaRestApi);
  }
}(this, function(expect, MessagemediaRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MessagemediaRestApi.SentMessage();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SentMessage', function() {
    it('should create an instance of SentMessage', function() {
      // uncomment below and update the code to test SentMessage
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be.a(MessagemediaRestApi.SentMessage);
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property deliveredTimestamp (base name: "delivered_timestamp")', function() {
      // uncomment below and update the code to test the property deliveredTimestamp
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property deliveryReport (base name: "delivery_report")', function() {
      // uncomment below and update the code to test the property deliveryReport
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property destinationAddress (base name: "destination_address")', function() {
      // uncomment below and update the code to test the property destinationAddress
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property destinationAddressCountry (base name: "destination_address_country")', function() {
      // uncomment below and update the code to test the property destinationAddressCountry
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property inResponseTo (base name: "in_response_to")', function() {
      // uncomment below and update the code to test the property inResponseTo
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property sourceAddress (base name: "source_address")', function() {
      // uncomment below and update the code to test the property sourceAddress
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property sourceAddressCountry (base name: "source_address_country")', function() {
      // uncomment below and update the code to test the property sourceAddressCountry
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property units (base name: "units")', function() {
      // uncomment below and update the code to test the property units
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instane = new MessagemediaRestApi.SentMessage();
      //expect(instance).to.be();
    });

  });

}));
