using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExcelLibrary.Worker.ExcelParser
{
    public class Header
    {
        public int ID { get; set; }
        public int SectionHeaderID { get; set; }
        public string StartAddress { get; set; }
        public string EndAddress { get; set; }
        public string DataType { get; set; }
        public string Month { get; set; }
        public string Year { get; set; }
        public string Value { get; set; }
        public string Formula { get; set; }
        public string GroupName { get; set; }
        public string ColumnName { get; set; }
        public int Index { get; set; }
    }

}
