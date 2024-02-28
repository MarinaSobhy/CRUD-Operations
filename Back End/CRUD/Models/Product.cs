using System.ComponentModel.DataAnnotations;

namespace CRUD.Models
{
    public class Product
    {
        public int ID { get; set; }
        [Required]
        public string Name { get; set; }

        public string Category { get; set; }
        [Required]
        public float Price { get; set; }

        public string Description { get; set; }

    }
}
