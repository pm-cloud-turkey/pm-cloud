FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY *.csproj Nuget.Config ./
#RUN dotnet restore --configfile=Nuget.Config --no-cache --force
RUN dotnet restore --no-cache --force

# copy everything else and build app
COPY . ./temp/
WORKDIR /app/temp
RUN dotnet publish -c Release -o out
COPY ./certificate/pm-core-certificate.pfx ./out/certificate/pm-core-certificate.pfx
COPY ./certificate/www.promanage.net.pfx ./out/certificate/www.promanage.net.pfx


FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime
ENV ASPNETCORE_URLS="https://+;http://+"
ENV ASPNETCORE_Kestrel__Certificates__Default__Password="Doruk1234"
ENV ASPNETCORE_Kestrel__Certificates__Default__Path="certificate/pm-core-certificate.pfx"
#ENV ASPNETCORE_Kestrel__Certificates__Default__Password="123"
#ENV ASPNETCORE_Kestrel__Certificates__Default__Path="www.promanage.net.pfx"

WORKDIR /app
COPY --from=build /app/temp/out ./

ENTRYPOINT ["dotnet", "IdentityServer.dll"]