using Application.Common;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Application.Features.TaxiFeature.Commands;
using Application.Features.TaxiFeature.Queries;
using Application.Features.TaxiFeature.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Portal.Controllers.FleetManagement.Taxi
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaxiController : ControllerBase
    {
        private readonly ILogger<TaxiController> _logger;
        private readonly IMediator _mediator;

        public TaxiController(ILogger<TaxiController> logger, IMediator mediator)
        {
            _logger = logger;
            this._mediator = mediator;
        }

        /// <summary>
        /// Lists all the Taxis
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// Sample Parameters are, <br/><br/>
        /// searchField = Leave it empty or taxino <br/>
        /// searchText = empty or based on searchField<br/>
        /// pageNo = 0<br/>
        /// pageSize = 20<br/>
        /// </remarks>
        [HttpGet]
        [Route("GetAll")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> GetAll(string? searchField, string? searchText, int pageNo, int pageSize)
        {
            try
            {
                string userName = HttpContext.User.Identity.Name;
                var FRId = HttpContext.User.FindFirst("companyCode");
                return await _mediator.Send(new TaxiGetAllQuery(new TaxiGetAllViewModel()
                {
                    User_ID = userName,
                    FR_ID = FRId.Value,
                    Search_Field = searchField,
                    Search_Text = searchText,
                    Page_No = pageNo,
                    Page_Size = pageSize
                }));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// View particular Taxi
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// Sample Parameter: <br/><br/>
        /// TaxiNo = 'AD 1726'
        /// </remarks>
        [HttpGet]
        [Route("GetById")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> GetById(string TaxiNo)
        {
            try
            {
                return await _mediator.Send(new TaxiGetByIdQuery(TaxiNo));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// To Load Company Drop Down
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// 
        /// </remarks>
        [HttpGet]
        [Route("GetCompanyDD")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> GetCompanyDD()
        {
            try
            {
                var FRId = HttpContext.User.FindFirst("companyCode");
                return await _mediator.Send(new TaxiGetCompanyDDQuery(FRId.Value));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// To Load Drop Down values
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// Manufacture, Model, Year, Taxi Status Drop Downs
        /// </remarks>
        [HttpGet]
        [Route("GetDropDowns")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> GetDropDowns()
        {
            try
            {
                var FRId = HttpContext.User.FindFirst("companyCode");
                return await _mediator.Send(new TaxiGetDropDownsQuery(FRId.Value));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// Saves the Taxi details
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// </remarks>
        [HttpPost]
        [Route("Save")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> Save([FromBody] UpdateTaxiDTO taxi)
        {
            try
            {
                string userName = HttpContext.User.Identity.Name;
                var FRId = HttpContext.User.FindFirst("companyCode");
                return await _mediator.Send(new SaveTaxiCommand(FRId.Value, userName, taxi));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        private CommonResponseModel generateExceptionResponse(Exception ex)
        {
            CommonResponseModel response = new();
            response.StatusCode = 0;
            response.StatusMessage = "Exception Occured.";
            response.ErrorMessage = ex.Message;
            response.ResponseObject = null;
            return response;
        }
    }
}
