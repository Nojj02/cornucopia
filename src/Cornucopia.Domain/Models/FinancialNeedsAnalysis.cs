namespace Cornucopia.Domain.Models
{
    public class FinancialNeedsAnalysis
    {
        public FinancialNeedsAnalysis(
            string clientName,
            int age,
            int targetRetirementAge,
            int currentLivingExpenses)
        {
            ClientName = clientName;
            Age = age;
            TargetRetirementAge = targetRetirementAge;
            CurrentLivingExpenses = currentLivingExpenses;

            TargetRetirementFund = CurrentLivingExpenses * 10;
        }

        public string ClientName { get; }

        public int Age { get; }

        public int TargetRetirementAge { get; }

        public decimal CurrentLivingExpenses { get; }

        public decimal TargetRetirementFund { get; }
    }
}
