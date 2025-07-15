export interface Form16Data {
  employerName: string;
  employeeName: string;
  pan: string;
  grossSalary: number;
  deductions: {
    section80C: number;
    section80D: number;
    otherDeductions: number;
  };
  taxPaid: number;
}
