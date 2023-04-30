using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExcelLibrary.Worker.ExcelParser
{
    public class SectionHeader
    {
        public string Title { get; set; }
        public string Address { get; set; }
        public string StartAddress { get; set; }
        public string EndAddress { get; set; }
    }
}
