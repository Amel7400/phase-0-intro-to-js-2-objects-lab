// Write your solution in this file!
const employee = {
name: "Amel",
streetAddress: "Mascara"
}
function updateEmployeeWithKeyAndValue(obj, key, value){
const newEmployee = { ...employee, name: "Sam", streetAddress: "11 Broadway"}
return newEmployee;
};
function destructivelyUpdateEmployeeWithKeyAndValue(){
  employee.name = "Sam";
  employee.streetAddress = "12 Broadway";
  return employee;
}
function destructivelyDeleteFromEmployeeByKey(){
  delete employee.name;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newlyEmployee = { ...employee};
  delete newlyEmployee.name;
  return newlyEmployee
}
