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
    public class ProductsController : Controller
    {
        private nhomEntities db = new nhomEntities();

        // GET: Products
        public ActionResult Index()
        {
            var products = db.Products.Include(p => p.Category).Include(p => p.ProDetail);

            return View(products.ToList());
        }

        // GET: Products/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        // GET: Products/Create
        public ActionResult Create()
        {
            Product product = new Product();
            ViewBag.CatID = new SelectList(db.Categories, "CatID", "NameCate");
            ViewBag.ProID = new SelectList(db.ProDetails, "ProID", "ColorName");
            return View(product);
        }

        // POST: Products/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Product Product, HttpPostedFileBase ImageUpLoad)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (ImageUpLoad != null && ImageUpLoad.ContentLength > 0)
                    {
                        string fileName = Path.GetFileName(ImageUpLoad.FileName);
                        string imagePath = Path.Combine(Server.MapPath("~/Content/images/"), fileName);

                        Product.ProImage = "~/Content/images/" + fileName;

                        ImageUpLoad.SaveAs(imagePath);
                    }

                    db.Products.Add(Product);
                    db.SaveChanges();
                    return RedirectToAction("Index");
                }

                ViewBag.CatID = new SelectList(db.Categories, "CatID", "NameCate", Product.CatID);
                ViewBag.ProID = new SelectList(db.ProDetails, "ProID", "ColorName", Product.ProID);
                return View(Product);
            }
            catch
            {
                return View();
            }
        }

        // GET: Products/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            ViewBag.CatID = new SelectList(db.Categories, "CatID", "NameCate", product.CatID);
            ViewBag.ProID = new SelectList(db.ProDetails, "ProID", "ColorName", product.ProID);
            return View(product);
        }

        // POST: Products/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ProID,ProName,CatID,ProImage,CreatedDate")] Product product)
        {
            if (ModelState.IsValid)
            {
                db.Entry(product).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CatID = new SelectList(db.Categories, "CatID", "NameCate", product.CatID);
            ViewBag.ProID = new SelectList(db.ProDetails, "ProID", "ColorName", product.ProID);
            return View(product);
        }

        // GET: Products/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return HttpNotFound();
            }
            return View(product);
        }

        // POST: Products/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Product product = db.Products.Find(id);
            db.Products.Remove(product);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
        public ActionResult Gihn()
        {
            // Retrieve products from your data source (database, service, etc.)
            var products = db.Products.Include(p => p.Category).Include(p => p.ProDetail);
            return PartialView("~/Views/Shared/gihn.cshtml", products);
        }

    }
}
