/**
 * Bài Quản lí tuyển sinh
 * -Đầu vào: nhập điểm theo form
 * -Xử lí: 
 *      -Tính tổng điểm =
 * score1St + score2Nd + score3Rd + priorityAreaPoint + prioritySubjectPoint;
 *      -So sánh điểm chuẩn với tổng điềm : nếu điểm chuẩn > tổng điểm => rớt; nếu điểm chuẩn <= tổng điểm => đậu;
 *      -Kiểm tra điểm nhập vào: có 1 môn bằng 0 => rớt tốt nghiệp; nếu điểm môn > 10 => yêu cầu người dùng nhập lại
 *  -Đẩu ra: in ra màn hình 
 
 */

document.getElementById("btnCalScore").onclick = function () {
  var score = document.getElementById("score").value * 1;

  var score1St = document.getElementById("score1St").value * 1;
  var score2Nd = document.getElementById("score2Nd").value * 1;
  var score3Rd = document.getElementById("score3Rd").value * 1;

  var priorityAreaPoint =
    document.getElementById("priorityAreaPoint").value * 1;
  var prioritySubjectPoint =
    document.getElementById("prioritySubjectPoint").value * 1;

  var totalScore = calTotalScore(
    score1St,
    score2Nd,
    score3Rd,
    priorityAreaPoint,
    prioritySubjectPoint
  );

  var infoValidScore = checkValidScore(score1St, score2Nd, score3Rd);

  var infoPassed = checkPassed(totalScore, score);

  document.getElementById("infoScore").innerHTML = "";
  var infoScore = document.createElement("p");
  if (infoValidScore == null) {
    infoScore.innerHTML =
      infoPassed + " và có tổng điểm là " + totalScore + " điểm";
  } else if (infoValidScore == 0) {
    infoScore.innerHTML = "";
  } else {
    infoScore.innerHTML = infoValidScore;
  }
  document.getElementById("infoScore").appendChild(infoScore);
};

function checkPassed(totalScore, score) {
  var checkPassed = "";
  if (totalScore >= score) {
    checkPassed = "Thí sinh đã đậu";
  } else {
    checkPassed = "Thí sinh đã rớt";
  }
  return checkPassed;
}

function calTotalScore(
  score1St,
  score2Nd,
  score3Rd,
  priorityAreaPoint,
  prioritySubjectPoint
) {
  var totalScore =
    score1St + score2Nd + score3Rd + priorityAreaPoint + prioritySubjectPoint;
  return totalScore;
}

function checkValidScore(score1St, score2Nd, score3Rd) {
  var infoValidScore = null;
  if (score1St > 10 || score2Nd > 10 || score3Rd > 10) {
    infoValidScore = "0";
    alert("Vui lòng kiểm tra lại điểm đã nhập");
  } else if (score1St == 0 || score2Nd == 0 || score3Rd == 0) {
    infoValidScore = "Thí sinh đã rớt tốt nghiệp";
  }
  return infoValidScore;
}

/**
 * Bài tính tiền điện
 * -Đầu vào: Nhập số điện đã sử dụng
 * -Xử lí: tính theo công thức:   nếu amountUsedKWh <= 50
   => price = amountUsedKWh * 500;
    nếu amountUsedKWh > 50 && amountUsedKWh <= 100
    price = 50 * 500 + (amountUsedKWh - 50) * 650;
    nếu amountUsedKWh > 100 && amountUsedKWh <= 200
   => price = 50 * 500 + 50 * 650 + (amountUsedKWh - 100) * 850;
    nếu amountUsedKWh > 200 && amountUsedKWh <= 350
   => price = 50 * 500 + 50 * 650 + 100 * 850 + (amountUsedKWh - 200) * 1100;
    nếu amountUsedKWh > 350
   => price = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (amountUsedKWh - 150) * 1300;
*  -Đầu ra: in ra màn hình tiền cần trả
 */
document.getElementById("btnCalPrice").onclick = function () {
  var amountUsedKWh = document.getElementById("amountUsedKWh").value * 1;
  var price = calPrice(amountUsedKWh);
  document.getElementById("infoCost").innerHTML = "";
  var infoCost = document.createElement("p");
  infoCost.innerHTML = price + " là số tiền cần trả.";
  document.getElementById("infoCost").appendChild(infoCost);
};

function calPrice(amountUsedKWh) {
  var price;
  if (amountUsedKWh <= 50) {
    price = amountUsedKWh * 500;
  } else if (amountUsedKWh > 50 && amountUsedKWh <= 100) {
    price = 50 * 500 + (amountUsedKWh - 50) * 650;
  } else if (amountUsedKWh > 100 && amountUsedKWh <= 200) {
    price = 50 * 500 + 50 * 650 + (amountUsedKWh - 100) * 850;
  } else if (amountUsedKWh > 200 && amountUsedKWh <= 350) {
    price = 50 * 500 + 50 * 650 + 100 * 850 + (amountUsedKWh - 200) * 1100;
  } else if (amountUsedKWh > 350) {
    price =
      50 * 500 +
      50 * 650 +
      100 * 850 +
      150 * 1100 +
      (amountUsedKWh - 150) * 1300;
  }
  var formatCurrency = new Intl.NumberFormat("vn-VND", {
    style: "currency",
    currency: "VND",
  });
  return formatCurrency.format(price);
}
