using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend
{
    public class PizzaVotesController : Controller
    {
        // GET: PizzaVotesController
        public ActionResult Index()
        {
            return View();
        }

        // GET: PizzaVotesController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PizzaVotesController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PizzaVotesController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PizzaVotesController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: PizzaVotesController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: PizzaVotesController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PizzaVotesController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
