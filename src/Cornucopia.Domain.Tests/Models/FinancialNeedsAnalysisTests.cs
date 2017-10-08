using Cornucopia.Domain.Models;
using Xunit;

namespace Cornucopia.Domain.Tests.Models
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
        }
    }
}
