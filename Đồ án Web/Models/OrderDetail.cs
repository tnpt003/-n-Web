//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Đồ_án_Web.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class OrderDetail
    {
        public int OrderDetailID { get; set; }
        public Nullable<int> OrderID { get; set; }
        public Nullable<int> Quantity { get; set; }
        public Nullable<double> UnitPrice { get; set; }
    
        public virtual Order Order { get; set; }
    }
}
