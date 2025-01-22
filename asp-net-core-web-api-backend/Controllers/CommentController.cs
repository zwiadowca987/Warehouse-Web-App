using asp_net_core_web_api_backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace asp_net_core_web_api_backend.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class CommentsController : ControllerBase
	{
		private readonly AppDbContext _context;

		public CommentsController(AppDbContext context)
		{
			_context = context;
		}

		[HttpPost]
		public async Task<IActionResult> CreateComment([FromBody] Comment comment)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			_context.Comments.Add(comment);
			await _context.SaveChangesAsync();

			return Ok(new { message = "Komentarz został zapisany." });
		}

		[HttpGet]
		public async Task<IActionResult> GetComments()
		{
			var comments = await _context.Comments.ToListAsync();
			return Ok(comments);
		}
	}
}
