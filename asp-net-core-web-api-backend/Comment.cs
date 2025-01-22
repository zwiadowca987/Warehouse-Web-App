using System.ComponentModel.DataAnnotations;

namespace asp_net_core_web_api_backend
{
	public class Comment
	{
		[Key]
		public int Id { get; set; }

		[Required]
		[StringLength(100)]
		public string Name { get; set; }

		[Required]
		[StringLength(100)]
		public string LastName { get; set; }

		[Required]
		[EmailAddress]
		public string Email { get; set; }

		[Required]
		[MaxLength(500)]
		public string Message { get; set; }

		public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
	}
}