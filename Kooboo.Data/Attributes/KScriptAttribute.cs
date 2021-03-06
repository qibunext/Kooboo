﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Kooboo.Data.Attributes
{
    /// <summary>
    /// skip this member when generate typescript define
    /// </summary>
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Method, AllowMultiple = false, Inherited = false)]
    public class KIgnoreAttribute : Attribute
    {
    }

    /// <summary>
    /// customize method type
    /// </summary>
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = false)]
    public class KDefineTypeAttribute : Attribute
    {
        public Type Return { get; set; }
        public Type[] Params { get; set; }
    }

    /// <summary>
    /// mark filed is extension 
    /// </summary>
    [AttributeUsage(AttributeTargets.Field, AllowMultiple = false, Inherited = false)]
    public class KExtensionAttribute : Attribute
    {
    }
}
