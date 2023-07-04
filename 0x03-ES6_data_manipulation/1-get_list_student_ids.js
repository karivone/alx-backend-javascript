// takes one argument of the same format as the previous task
export default function getListStudentIds(arg) {
  if (!Array.isArray(arg)) return [];
  return arg.map((el) => el.id);
}
