using CRUD.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using ProductsApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ProductContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("ProductDB")));

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularOrigins",
    builder =>
    {
        builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();
app.UseCors("AllowAngularOrigins");
app.UseSwagger();
app.UseSwaggerUI();

app.Run();
