// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.


using System;
using System.Linq;
using System.Reflection;
using System.Security.Claims;
using IdentityModel;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using IdentityServerAspNetIdentity.Data;
using IdentityServerAspNetIdentity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace IdentityServerAspNetIdentity
{
    public class SeedDataAdd
    {
        public static void EnsureSeedData(IServiceProvider provider)
        {
            provider.GetRequiredService<ApplicationDbContext>().Database.Migrate();
            provider.GetRequiredService<PersistedGrantDbContext>().Database.Migrate();
            provider.GetRequiredService<ConfigurationDbContext>().Database.Migrate();
            {
                var context = provider.GetRequiredService<ConfigurationDbContext>();

                foreach (var client in ConfigAdd.GetClients())
                {
                    if (!context.Clients.Any(c => c.ClientId == client.ClientId))
                        context.Clients.Add(client.ToEntity());
                }

                context.SaveChanges();
                
                foreach (var resource in ConfigAdd.GetApis())
                {
                    if (!context.ApiResources.Any(a => a.Name == resource.Name))
                        context.ApiResources.Add(resource.ToEntity());
                }
                context.SaveChanges();
                
                foreach (var resource in ConfigAdd.GetIdentityResources())
                {
                    if (!context.IdentityResources.Any(a => a.Name == resource.Name))
                        context.IdentityResources.Add(resource.ToEntity());
                }
                context.SaveChanges();
            }
        }
    }
}