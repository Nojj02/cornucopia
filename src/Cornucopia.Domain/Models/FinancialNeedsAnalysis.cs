using System;

namespace Cornucopia.Domain.Models
{
    public class FinancialNeedsAnalysis
    {
        public FinancialNeedsAnalysis(
            string clientName,
            int age,
            int targetRetirementAge,
            int monthlyLivingExpenseAmount)
        {
            ClientName = clientName;
            Age = age;
            TargetRetirementAge = targetRetirementAge;
            MonthlyLivingExpenseAmount = monthlyLivingExpenseAmount;

            TargetRetirementFundAmount = MonthlyLivingExpenseAmount * 12 * 10;
        }

        public string ClientName { get; }

        public int Age { get; }

        public int TargetRetirementAge { get; }

        public decimal MonthlyLivingExpenseAmount { get; }

        public decimal TargetRetirementFundAmount { get; }
    }
}
