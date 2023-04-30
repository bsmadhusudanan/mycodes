using ExcelLibrary.Worker.ExcelParser;
using OfficeOpenXml;
using OfficeOpenXml.FormulaParsing.ExpressionGraph;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Threading;

namespace ExcelLibrary
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        Dictionary<int, string> columnNameList = null;
        List<Header> headerList = new List<Header>();
        Header _header = null;
        List<SectionHeader> sectionHeaderList = null;
        private void btnProcess_Click(object sender, EventArgs e)
        {
            columnNameList = new Dictionary<int, string>();
            using (var pkg = new ExcelPackage(new FileInfo(txtFilePath.Text)))
            {
                ExcelPackage.LicenseContext = OfficeOpenXml.LicenseContext.NonCommercial;
                ExcelWorksheet worksheet = pkg.Workbook.Worksheets["Absorptions"];
                var end = worksheet.Dimension.End;
                GenerateColumnNameList(end.Column);
                Regex re = new Regex(@"([a-zA-Z]+)(\d+)");
                //Match result = re.Match("AA12");

                //string alphaPart = result.Groups[1].Value;
                //string numberPart = result.Groups[2].Value;
                sectionHeaderList = new List<SectionHeader>();
                sectionHeaderList.Add(new SectionHeader() { Title = "Actual", Address = "D3", StartAddress = "E4", EndAddress = "T6" });
                sectionHeaderList.Add(new SectionHeader() { Title = "Budget", Address = "U3", StartAddress = "V4", EndAddress = "AH6" });
                sectionHeaderList.Add(new SectionHeader() { Title = "Q2FCT", Address = "AI3", StartAddress = "AJ4", EndAddress = "AV6" });
                sectionHeaderList.Add(new SectionHeader() { Title = "Q3FCT", Address = "AI3", StartAddress = "AX4", EndAddress = "BJ6" });
                sectionHeaderList.Add(new SectionHeader() { Title = "Q4FCT", Address = "BK3", StartAddress = "BL4", EndAddress = "BX6" });
                sectionHeaderList.Add(new SectionHeader() { Title = "YTDACT", Address = "", StartAddress = "BZ4", EndAddress = "CL6" });
                sectionHeaderList.Add(new SectionHeader() { Title = "YTDBDJT", Address = "", StartAddress = "CN4", EndAddress = "CZ6" });
                sectionHeaderList.Add(new SectionHeader() { Title = "YTDQ2FCT", Address = "", StartAddress = "DB4", EndAddress = "DN6" });
                sectionHeaderList.Add(new SectionHeader() { Title = "YTDQ3FCT", Address = "", StartAddress = "DP4", EndAddress = "EB6" });
                sectionHeaderList.Add(new SectionHeader() { Title = "YTDQ4FCT", Address = "", StartAddress = "ED4", EndAddress = "EP6" });
                foreach (SectionHeader _sectionHeader in sectionHeaderList)
                {
                    int startColumn = columnNameList.Where(w => w.Value == re.Match(_sectionHeader.StartAddress).Groups[1].Value).FirstOrDefault().Key;
                    int endColumn = columnNameList.Where(w => w.Value == re.Match(_sectionHeader.EndAddress).Groups[1].Value).FirstOrDefault().Key;
                    List<string> filteredColumn = columnNameList.Where(s => s.Key >= startColumn && s.Key <= endColumn).Select(w => w.Value).ToList();
                    ExtractHeader(1, "Absorptions", worksheet, filteredColumn, Convert.ToInt32(re.Match(_sectionHeader.StartAddress).Groups[2].Value), Convert.ToInt32(re.Match(_sectionHeader.EndAddress).Groups[2].Value));
                }

                worksheet.Cells[6, 2, 6, 4].ToList().ForEach(cell => { System.Diagnostics.Debug.WriteLine(cell.Text); });
                System.Diagnostics.Debug.WriteLine("Month : " + Convert.ToDateTime(worksheet.Cells["H5"].Value).Month);
                System.Diagnostics.Debug.WriteLine("Year : " + Convert.ToDateTime(worksheet.Cells["H5"].Value).Year);
            }
        }

        public List<Header> ExtractHeader(int sectionHeaderID, string sheetName, ExcelWorksheet worksheet, List<string> columnRange, int startRow, int endRow)
        {

            switch (sheetName)
            {
                case "Absorptions":
                    {
                        foreach (string column in columnRange)
                        {
                            // ExcelRange cell = worksheet.Cells[column + rowIndex.ToString()];
                            _header = new Header();
                            _header.StartAddress = column + startRow;
                            _header.EndAddress = column + endRow;
                            _header.SectionHeaderID = sectionHeaderID;
                            _header.DataType = worksheet.Cells[column + startRow].Text;
                            _header.Value = worksheet.Cells[column + (startRow + 1)].Text;
                            _header.Month = _header.DataType.StartsWith("Y") ? "" : Convert.ToDateTime(_header.Value).Month.ToString();
                            _header.Year = _header.DataType.StartsWith("Y") ? "" : Convert.ToDateTime(_header.Value).Year.ToString();
                            _header.GroupName = worksheet.Cells[column + (startRow + 2)].Text;
                            _header.ColumnName = column;
                            headerList.Add(_header);
                        }
                    }
                    break;
                default:
                    return null;
            }
            return headerList;

        }


        private void GenerateColumnNameList(int columnLength)
        {
            try
            {
                string columnName = string.Empty;
                int a = 26;
                int x = 0;
                int columnIndex = 0;
                for (int ind = 0; ind < columnLength; ind++)
                {
                    columnIndex = ind;
                    columnName = string.Empty;
                    a = 26;
                    x = (int)Math.Floor(Math.Log((columnIndex) * (a - 1) / a + 1, a));
                    columnIndex -= (int)(Math.Pow(a, x) - 1) * a / (a - 1);
                    for (int i = x + 1; columnIndex + i > 0; i--)
                    {
                        columnName = ((char)(65 + columnIndex % a)).ToString() + columnName;
                        columnIndex /= a;
                    }
                    columnNameList.Add(ind, columnName);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error : " + ex.Message);
            }
        }
    }
}
