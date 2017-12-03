FROM microsoft/aspnetcore:2.0

EXPOSE 80
COPY obj/Docker/publish .
ENTRYPOINT ["dotnet", "Cornucopia.FinancialPlanning.dll"]
