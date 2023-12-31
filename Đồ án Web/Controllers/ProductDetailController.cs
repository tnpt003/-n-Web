﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Đồ_án_Web.Models;


namespace Đồ_án_Web.Controllers
{
    public class ProductDetailController : Controller
    {
        private nhomEntities db = new nhomEntities();
        // GET: ProductDetail
        public ActionResult ProductDetail(int productId)
        {
            var product = db.Products.Include(p => p.Category).Include(p => p.ProDetail)
                        .FirstOrDefault(p => p.ProID == productId);

            if (product == null)
            {
                return HttpNotFound(); // Handle case where product is not found
            }
            return View(product);
        }

        // GET: ProductDetail/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ProductDetail/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ProductDetail/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: ProductDetail/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ProductDetail/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: ProductDetail/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ProductDetail/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
