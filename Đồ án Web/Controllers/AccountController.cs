using Đồ_án_Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Đồ_án_Web.Controllers
{
    public class AccountController : Controller
    {
        private nhomEntities db = new nhomEntities();
        public ActionResult SignUp()
        {
            return View();
        }
        // GET: Account
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "CusPhone,CusPassword,CusName,CusEmail")] Customer customer)
        {
            if (ModelState.IsValid)
            {
                db.Customers.Add(customer);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(customer);
        }
        public ActionResult SignUpAdd(string name, string email, string phone, string password, string repeatPassword)
        {
            // Validate the form data as needed
            if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(phone) || string.IsNullOrEmpty(password) || string.IsNullOrEmpty(repeatPassword))
            {
                // Handle validation errors, e.g., return an error view or redirect back to the sign-up page with an error message
                return View("Create"); // Assuming you have a shared create view for signup
            }

            // Perform additional validation if needed

            // Create a new Customer object and add it to the database
            Customer newCustomer = new Customer
            {
                CusName = name,
                CusEmail = email,
                CusPhone = phone,
                CusPassword = password,
                // Other properties as needed
            };

            db.Customers.Add(newCustomer);
            db.SaveChanges();

            // Redirect to a success page or login page
            return RedirectToAction("Success"); // You need to define this action
        }
        public ActionResult Success()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult LoginAdd(string email, string password)
        {
            // Validate the form data as needed
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            {
                // Handle validation errors, e.g., return an error view or redirect back to the login page with an error message
                return View("Login"); // Assuming you have a shared login view
            }

            // Perform additional validation if needed

            // Check if the email and password match a customer in the database
            var customer = db.Customers.FirstOrDefault(c => c.CusEmail == email && c.CusPassword == password);


            if (customer != null)
            {
                if (email == "admin@example.com" && password == "adminpassword")
                {
                    // Redirect to Admin page if the user is an admin
                    return RedirectToAction("Index", "Admin");
                }
                bool isAuthenticated = true;
                ViewBag.IsAuthenticated = isAuthenticated;
                return RedirectToAction("Index", "Home");
            }
            else
            {
                // Login failed, handle accordingly
                ViewBag.IsAuthenticated = false;
                return View("Login");
            }

        }


        // GET: Account/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }
        // POST: Account/Create
        [HttpPost]

        // GET: Account/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Account/Edit/5
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

        // GET: Account/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Account/Delete/5
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
