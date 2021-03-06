﻿// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace API.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20201206230413_PostGres")]
    partial class PostGres
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityByDefaultColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("API.Entities.Order", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Address")
                        .HasColumnType("text");

                    b.Property<string>("City")
                        .HasColumnType("text");

                    b.Property<string>("Country")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.Property<DateTimeOffset>("OrderDate")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("OrderNotes")
                        .HasColumnType("text");

                    b.Property<string>("Telephone")
                        .HasColumnType("text");

                    b.Property<int>("Total")
                        .HasColumnType("integer");

                    b.Property<string>("Zipcode")
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("API.Entities.Product", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int?>("Orderid")
                        .HasColumnType("integer");

                    b.Property<string>("category")
                        .HasColumnType("text");

                    b.Property<string>("description")
                        .HasColumnType("text");

                    b.Property<string>("image")
                        .HasColumnType("text");

                    b.Property<string>("name")
                        .HasColumnType("text");

                    b.Property<int>("price")
                        .HasColumnType("integer");

                    b.Property<int>("stock")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("Orderid");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("API.Entities.Product", b =>
                {
                    b.HasOne("API.Entities.Order", null)
                        .WithMany("OrderItems")
                        .HasForeignKey("Orderid");
                });

            modelBuilder.Entity("API.Entities.Order", b =>
                {
                    b.Navigation("OrderItems");
                });
#pragma warning restore 612, 618
        }
    }
}
