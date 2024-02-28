using CRUD.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductsApi.Models
{
    public class ProductContext:DbContext
    {
        public ProductContext(DbContextOptions options):base(options)
        {
               
        }
        public DbSet<Product> Products { get; set; }
    }
}
