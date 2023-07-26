﻿// -------------------------------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License (MIT). See LICENSE in the repo root for license information.
// -------------------------------------------------------------------------------------------------

using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Health.Fhir.Tests.Common.FixtureParameters;
using Microsoft.Health.Fhir.Tests.E2E.Common;
using Microsoft.Health.Fhir.Tests.E2E.Rest;
using Xunit;

namespace Microsoft.Health.Fhir.Smart.Tests.E2E.SmartProxy
{
    [HttpIntegrationFixtureArgumentSets(DataStore.CosmosDb, Format.All)]
    public class SmartProxyBadRequestTests : IClassFixture<HttpIntegrationTestFixture>
    {
        private readonly TestFhirClient _client;
        private readonly Uri _tokenUri;

        public SmartProxyBadRequestTests(HttpIntegrationTestFixture fixture)
        {
            _client = fixture.TestFhirClient;
            _tokenUri = fixture.TestFhirServer.TokenUri;
        }

        [Fact]
        public async Task GivenMissingParams_WhenRequestingAToken_ThenBadRequestResponseReturned()
        {
            var content = new StringContent(string.Empty);
            HttpResponseMessage response = await _client.HttpClient.PostAsync(_tokenUri, content);

            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
            var responseContent = await response.Content.ReadAsStringAsync();
            Assert.Contains("Value cannot be null", responseContent.ToString());
        }
    }
}
