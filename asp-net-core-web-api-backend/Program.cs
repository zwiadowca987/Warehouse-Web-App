using asp_net_core_web_api_backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;

namespace asp_net_core_web_api_backend
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);
			builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
			// Add services to the container.

			builder.Services.AddControllers();
			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();

			var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

			builder.Services.AddCors(options =>
			{
				options.AddPolicy(name: MyAllowSpecificOrigins,
					policy =>
					{
						policy.WithOrigins("http://localhost:3000") // Adres Twojego frontendu
							.AllowAnyHeader()
							.AllowAnyMethod();
					});
			});

			var app = builder.Build();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseCors(MyAllowSpecificOrigins);

			app.UseHttpsRedirection();

			app.UseAuthorization();


			app.MapControllers();

			app.Run();
		}
	}
}
