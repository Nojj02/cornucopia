namespace Cornucopia.FinancialPlanning.Controllers.ViewModels
{
    public class FinancialNeedsAnalysisPostViewModel
    {
        public string ClientName { get; set; }

        public int Age { get; set; }

        public int TargetRetirementAge { get; set; }

        public decimal MonthlyLivingExpenseAmount { get; set; }
    }
}