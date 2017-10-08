using System;

namespace Cornucopia.FinancialPlanning.Domain.Domain
{
    public class FinancialNeedsAnalysis
    {
        public FinancialNeedsAnalysis(
            string clientName,
            int age,
            int targetRetirementAge,
            decimal monthlyLivingExpenseAmount,
            decimal inflationRate = 0.0m)
        {
            ClientName = clientName;
            Age = age;
            TargetRetirementAge = targetRetirementAge;
            MonthlyLivingExpenseAmount = monthlyLivingExpenseAmount;
            InflationRate = inflationRate;

            AnnualLivingExpenseAmount = MonthlyLivingExpenseAmount * 12;

            TargetRetirementFundAmount = AnnualLivingExpenseAmount;
            var lastYearLivingExpenseAmount = AnnualLivingExpenseAmount;
            var yearsUntilRetirement = targetRetirementAge - age + 10;
            for (var i = 1; i < yearsUntilRetirement; i++)
            {
                lastYearLivingExpenseAmount = Math.Round(lastYearLivingExpenseAmount * (1 + inflationRate), 2);
                TargetRetirementFundAmount += lastYearLivingExpenseAmount;
            }
        }


        public string ClientName { get; }

        public int Age { get; }

        public int TargetRetirementAge { get; }

        public decimal AnnualLivingExpenseAmount { get; }

        public decimal MonthlyLivingExpenseAmount { get; }

        public decimal InflationRate { get; }

        public decimal TargetRetirementFundAmount { get; }
    }
}
