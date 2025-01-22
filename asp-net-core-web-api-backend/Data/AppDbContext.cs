using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace asp_net_core_web_api_backend.Data
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
		{
		}

		public DbSet<Comment> Comments { get; set; }
	}

}