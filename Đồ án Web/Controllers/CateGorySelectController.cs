using System;
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
    public class CateGorySelectController : Controller
    {
        private nhomEntities db = new nhomEntities();
        // GET: CateGorySelect
        // Action method to display category details
        public ActionResult CateGorySelect(int catId)
        {
            var category = db.Categories.FirstOrDefault(c => c.CatID == catId);
            if (category == null)
            {
                return HttpNotFound(); // Handle case where category is not found
            }

            return View(category);
        }

        // Action method to fetch products for a specific category
        public ActionResult GetProductsForCategory(int catId)
        {
            var products = db.Products.Where(p => p.CatID == catId).ToList();
            return PartialView("gihn", products);
        }

        // GET: CateGorySelect/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: CateGorySelect/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: CateGorySelect/Create
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

        // GET: CateGorySelect/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: CateGorySelect/Edit/5
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

        // GET: CateGorySelect/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: CateGorySelect/Delete/5
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
