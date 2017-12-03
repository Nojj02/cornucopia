using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cornucopia.FinancialPlanning.Controllers.ViewModels;
using Cornucopia.FinancialPlanning.Domain;
using Microsoft.AspNetCore.Mvc;

namespace Cornucopia.FinancialPlanning.Controllers
{
    [Route("api/[controller]")]
    public class FinancialNeedsAnalysisController : Controller
    {
        // POST api/financialneedsanalysis
        [HttpPost]
        public JsonResult Post([FromBody]FinancialNeedsAnalysisPostViewModel model)
        {
            const decimal inflationRate = 0.03m;

            var financialNeedsAnalysis =
                new FinancialNeedsAnalysis(
                    clientName: model.ClientName,
                    age: model.Age,
                    targetRetirementAge: model.TargetRetirementAge,
                    monthlyLivingExpenseAmount: model.MonthlyLivingExpenseAmount,
                    inflationRate: inflationRate);

            var viewModel = new FinancialNeedsAnalysisResourceViewModel(financialNeedsAnalysis);
            return Json(viewModel);
        }
        
        // GET api/financialneedsanalysis
        [HttpGet]
        public JsonResult Get()
        {
            const decimal inflationRate = 0.03m;

            var financialNeedsAnalysis =
                new FinancialNeedsAnalysis(
                    clientName: "",
                    age: 1,
                    targetRetirementAge: 1,
                    monthlyLivingExpenseAmount: 1,
                    inflationRate: inflationRate);

            var viewModel = new FinancialNeedsAnalysisResourceViewModel(financialNeedsAnalysis);
            return Json(viewModel);
        }
    }
}
