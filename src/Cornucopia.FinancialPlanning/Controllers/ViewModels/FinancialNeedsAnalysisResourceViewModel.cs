using System;
using Cornucopia.FinancialPlanning.Domain;

namespace Cornucopia.FinancialPlanning.Controllers.ViewModels
{
    public class FinancialNeedsAnalysisResourceViewModel
    {
        public FinancialNeedsAnalysisResourceViewModel(FinancialNeedsAnalysis financialNeedsAnalysis)
        {
            Id = financialNeedsAnalysis.Id;
            ClientName = financialNeedsAnalysis.ClientName;
            Age = financialNeedsAnalysis.Age;
            TargetRetirementAge = financialNeedsAnalysis.TargetRetirementAge;
            AnnualLivingExpenseAmount = financialNeedsAnalysis.AnnualLivingExpenseAmount;
            MonthlyLivingExpenseAmount = financialNeedsAnalysis.MonthlyLivingExpenseAmount;
            InflationRate = financialNeedsAnalysis.InflationRate;
            TargetRetirementFundAmount = financialNeedsAnalysis.TargetRetirementFundAmount;
        }

        public Guid Id { get; }

        public string ClientName { get; }

        public int Age { get; }

        public int TargetRetirementAge { get; }

        public decimal AnnualLivingExpenseAmount { get; }

        public decimal MonthlyLivingExpenseAmount { get; }

        public decimal InflationRate { get; }

        public decimal TargetRetirementFundAmount { get; }
    }
}