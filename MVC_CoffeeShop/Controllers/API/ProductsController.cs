using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MVC_CoffeeShop.Models;

// Add->NewItem->Web API
namespace MVC_CoffeeShop.Controllers.API
{
    public class ProductsController : ApiController
    {
        private CoffeeShopDbEntities db = new CoffeeShopDbEntities();
      
        public IHttpActionResult GetRegions()
        {
            return Ok(db.Region.ToList());
        }
        public IHttpActionResult AddRegion(Region region)
        {
            db.Region.Add(region);
            db.SaveChanges();
            return Ok();
        }
        // это из-за двух пост-запросов. надо создать новый контроллер и будет всё норм.
        [Route("api/addDate")]
        public IHttpActionResult AddTempDate(TempDataTime date)
        {
            db.TempDataTime.Add(date);
            db.SaveChanges();
            return Ok();
        }
        [Route("api/getDate")]
        public IHttpActionResult GetDate()
        {
            return Ok(db.TempDataTime.ToList());
        }
    }
}