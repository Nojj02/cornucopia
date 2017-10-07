using Cornucopia.Domain.Models;
using Xunit;

namespace Cornucopia.Domain.Tests.Models
{
    public class FinancialNeedsAnalysisTests
    {
        public class NewTests : FinancialNeedsAnalysisTests
        {
            [Fact]
            public void TargetRetirementFundIsCurrentLivingExpensesMultipliedByTenYears()
            {
                var financialNeedsAnalysis =
                    new FinancialNeedsAnalysis(
                        clientName: "Juan De La Cruz",
                        age: 25,
                        targetRetirementAge: 25,
                        currentLivingExpenses: 10500);

                Assert.Equal(105000, financialNeedsAnalysis.TargetRetirementFund);
            }
        }
    }
}
