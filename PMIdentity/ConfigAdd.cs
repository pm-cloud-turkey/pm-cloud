// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace IdentityServerAspNetIdentity
{
    public static class ConfigAdd
    {
       
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Email(),
                new IdentityResources.Profile(),
            };
        }

        public static IEnumerable<ApiResource> GetApis()
        {
            return new List<ApiResource>
            {
                new ApiResource("monitoring", "Monitoring"),
                new ApiResource("epc", "Epc"),
            };
        }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "SPAWeb",

                    // no interactive user, use the clientid/secret for authentication
                    AllowedGrantTypes = GrantTypes.ClientCredentials,

                    // secret for authentication
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },

                    // scopes that client has access to
                    AllowedScopes = { "monitoring","epc" }
                },
                new Client {
                    RequireConsent = false,
                    ClientId = "promanage_spa",
                    ClientName = "ProManage SPA",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowedScopes = { "monitoring","openid","epc","profile","email" },
                    RedirectUris = {"http://local.promanage-cloud.com:30080/#/auth-callback#", "http://local.promanage-cloud.com:30080/silent-refresh.html"},
                    PostLogoutRedirectUris = {"http://local.promanage-cloud.com:30080/"},
                    AllowedCorsOrigins = {"http://local.promanage-cloud.com:30080"},
                    AllowAccessTokensViaBrowser = true,
                    AccessTokenLifetime = 120,
                    RefreshTokenUsage = TokenUsage.OneTimeOnly
                }
                
            };
        }
    }
}