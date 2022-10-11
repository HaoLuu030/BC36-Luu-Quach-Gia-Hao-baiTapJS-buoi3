/**
 * Bài 1: Tính tiền lương nhân viên
 *
 * Sơ đồ 3 khối
 *
 * - Input: lương 1 ngày (100.000), số ngày làm (20)
 *
 * - Process:
 * + Lấy input: var dailyPayment = 100.000; var workingDays = 20;
 * + Lập công thức: var totalPayment = dailyPayment * workingDays;
 *
 * - Output:
 * Tiền lương nhân viên
 *
 *
 */
function ex1() {
  var dailyPayment = document.getElementById("dailyPayment").value;
  var workingDays = document.getElementById("workingDays").value;
  var totalPayment = dailyPayment * workingDays;
  document.getElementById("result1").innerHTML =
    totalPayment.toString() + " (VND)";
}

/*********************************************************************************************************/

/**
 * Bài 2: Tính giá trị trung bình
 *
 * Sơ đồ 3 khối
 *
 * - Input: 5 số thực (a, b, c, d, e)
 *
 * - Process:
 * + Lấy input: var a = 1; var b = 2; var c = 2.5; var d = 5.6; var e = 120;
 * + Lập công thức: average = (a + b + c + d + e)/5;
 *
 * - Output: Trung bình của 5 số thực
 *
 *
 */

function ex2() {
  var a = document.getElementById("firstNum").value;
  var b = document.getElementById("secondNum").value;
  var c = document.getElementById("thirdNum").value;
  var d = document.getElementById("fourthNum").value;
  var e = document.getElementById("fifthNum").value;

  var average =
    (parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d) + parseInt(e)) / 5;
  console.log(average);

  document.getElementById("result2").innerHTML = average;
}

/*********************************************************************************************************/

/**
 * Bài 3: Quy đổi tiền
 *
 * - Input: Tỷ giá USD (23500VND), Số tiền USD (2USD)
 *
 * - Process:
 * + Lấy input: var exchangeRate = 23500; var USD = 2;
 * + Lập công thức: var VND = exchangeRate * USD;
 *
 * - Output: Số tiền sau qui đổi VND
 */

function ex3() {
  var exchangeRate = 23500;
  var USD = document.getElementById("USD").value;

  var VND = exchangeRate * USD;

  document.getElementById("result3").innerHTML = VND.toString() + " (VND)";
}

/*********************************************************************************************************/

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 *
 * - Input: chiều dài, chiều rộng (hình chữ nhật)
 *
 * - Process:
 * + Lấy input: var w = 6 (cm); var h = 5 (cm)
 * + Lập công thức chu vi: var perimeter = w + h (cm)
 * + Lập công thức tính diện tích: var area = w * h (cm2)
 *
 * - Output: chu vi, diện tích (hình chữ nhật)
 *
 *
 *
 */
function ex4() {
  var w = document.getElementById("w").value;
  var h = document.getElementById("h").value;

  var perimeter = w * 1 + h * 1;
  var area = w * h;

  var result =
    "Diện tích: " + area.toString() + " Chu vi: " + perimeter.toString();
  document.getElementById("result4").innerHTML = result;
}

/*********************************************************************************************************/

/**
 * Bài 5: Tính tổng 2 ký số
 *
 * - Input: 1 số có 2 chữ số (12)
 *
 * - Process:
 * + Lấy input: var number = 12, var ones = number % 10 (số hàng đơn vị), var tens = Math.floor(number / 10)
 * + Lập công thức var total = ones + tens
 *
 *
 *
 * - Output: Tổng 2 ký số vừa nhập
 */

function ex5() {
  var number = document.getElementById("number").value;

  if (number <= 99) {
    var ones = parseInt(number) % 10;
    var tens = Math.floor(number / 10);
    var total = ones + tens;
  } else {
     alert ("Vui lòng nhập số có 2 chữ số")
  }

  document.getElementById("result5").innerHTML = "Tổng hai ký số là " + total.toString();
}
