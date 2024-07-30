//1-masala
// let arr = ["olma", "anor", "anjir", "behi"];
// function largeElement(arg){
//     arg.forEach(element => {

//     });
// }

//2-masala
let arr = [5, "salom", 9, 6, 3, "dunyo"];
function concatString(arg) {
  let res = [];
  arg.forEach((element) => {
    if (typeof element == "string") {
      res.push(element);
    }
  });
  return res;
}
console.log(concatString(arr));
