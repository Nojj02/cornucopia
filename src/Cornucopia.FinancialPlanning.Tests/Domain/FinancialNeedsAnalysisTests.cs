using Cornucopia.FinancialPlanning.Domain.Domain;
using Xunit;

namespace Cornucopia.FinancialPlanning.Domain.Tests.Domain
{
    public class FinancialNeedsAnalysisTests
    {
        public class NewTests : FinancialNeedsAnalysisTests
        {
            [Fact]
            public void TargetRetirementFundIsAnnualLivingExpensesMultipliedByTenYears()
            {
                var financialNeedsAnalysis =
                    new FinancialNeedsAnalysis(
                        clientName: "Juan De La Cruz",
                        age: 25,
                        targetRetirementAge: 25,
                        monthlyLivingExpenseAmount: 20_000);

                Assert.Equal(2_400_000, financialNeedsAnalysis.TargetRetirementFundAmount);
            }

            [Fact]
            public void TargetRetirementFundAccountsForInflation_RetiresIn30Years()
            {
                var financialNeedsAnalysis =
                    new FinancialNeedsAnalysis(
                        clientName: "Juan De La Cruz",
                        age: 25,
                        targetRetirementAge: 55,
                        monthlyLivingExpenseAmount: 20_000,
                        inflationRate: 0.03m);

                Assert.Equal(18_096_301.97m, financialNeedsAnalysis.TargetRetirementFundAmount);
            }
        }
    }
}
