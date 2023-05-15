using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Application.Common;

using Application.Features.Masters.Unit.Queries;
using Application.Features.Masters.Unit.Commands;
using Application.Features.Masters.Unit.ViewModels;

namespace Portal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnitMasterController : ControllerBase
    {
        private readonly ILogger<UnitMasterController> _logger;
        private readonly IMediator _mediator;

        public UnitMasterController(ILogger<UnitMasterController> logger, IMediator mediator)
        {
            _logger = logger;
            this._mediator = mediator;
        }

        /// <summary>
        /// Lists all the Units
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// Sample Parameters are, <br/><br/>
        /// searchText = null, to see all the records <br/>
        /// searchText = any value, returns all matching values in any column<br/>
        /// </remarks>
        [HttpGet]
        [Route("GetAll")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> GetAll(string? searchText)
        {
            try
            {
                return await _mediator.Send(new UnitGetAllQuery(searchText));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// Gets details of a given Unit
        /// </summary>
        /// <returns>Success or Failure</returns>
        /// <remarks>
        /// Parameter, <br/>
        /// unitNo <br/>
        /// Example 7007645 <br/>
        /// </remarks>
        [HttpGet]
        [Route("GetById")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> GetById(int unitNo)
        {
            try
            {
                string userName = HttpContext.User.Identity.Name;
                var FRId = HttpContext.User.FindFirst("companyCode");
                return await _mediator.Send(new UnitGetByIdQuery(unitNo));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new { });
                return generateExceptionResponse(ex);
            }
        }

        /// <summary>
        /// Create/Update the Unit details
        /// </summary>
        /// <returns></returns>
        /// <remarks>
        /// Unit.Status = 0 in case of updating existing record<br/>
        /// Unit.Status = 1 in case of creating new record 
        /// </remarks>
        [HttpPost]
        [Route("Save")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<CommonResponseModel> Save([FromBody] UnitDTO unit)
        {
            try
            {
                string userName = HttpContext.User.Identity.Name;
                var FRId = HttpContext.User.FindFirst("companyCode");
                return await _mediator.Send(new SaveUnitCommand(FRId.Value, userName, unit));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, ex.Message, new {});
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
