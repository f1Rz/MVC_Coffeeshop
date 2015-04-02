using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_CoffeeShop.Startup))]
namespace MVC_CoffeeShop
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
