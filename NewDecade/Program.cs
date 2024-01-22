using Microsoft.EntityFrameworkCore;
using ReactServer.Data;
using ReactServer.IRepository;
using ReactServer.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DatabaseContext>(option => 
 option.UseSqlServer(builder.Configuration.GetConnectionString("MyConnection")));

builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IOrderRepository, OrderRepository>();


var allowOrigins = builder.Configuration.GetSection("AllowOrigins").Get<string[]>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("myAppCors", policy =>
    {
        policy.WithOrigins(allowOrigins).AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseCors("myAppCors");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
