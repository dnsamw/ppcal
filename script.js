document.getElementById("like-count").addEventListener("input", priceCal);
document.getElementById("followers-count").addEventListener("input", priceCal);

function priceCal() {
  let l = document.getElementById("like-count").value;
  let f = document.getElementById("followers-count").value;

  //   console.log("likes", l);
  //   console.log("follows", f);
  let sum = parseInt(l) + parseInt(f);
  let avg = sum / 2;
  document.getElementById("avg").innerText = avg;

  if (avg >= 500 && avg <= 799) {
    document.getElementById("price-dsplay").innerText = `${500}`;
  } else if (avg >= 800 && avg <= 1300) {
    document.getElementById("price-dsplay").innerText = `${1000}`;
  } else if (avg >= 1301 && avg <= 1499) {
    let a1 = avg - 1300;
    document.getElementById("price-dsplay").innerText = `${1000 + 2 * a1}`;
  } else if (avg >= 1500 && avg <= 1800) {
    document.getElementById("price-dsplay").innerText = `${1500}`;
  } else if (avg >= 1801 && avg <= 1999) {
    let a2 = avg - 1800;
    console.log(a2);
    document.getElementById("price-dsplay").innerText = `${1500 + 2 * a2}`;
  } else if (avg >= 2000 && avg <= 2300) {
    document.getElementById("price-dsplay").innerText = `${2000}`;
  } else if (avg >= 2301 && avg <= 2499) {
    let addition = avg - 2300;
    document.getElementById("price-dsplay").innerText = `${
      2000 + 2 * addition
    }`;
  } else if (avg >= 2500 && avg <= 2800) {
    document.getElementById("price-dsplay").innerText = `${2500}`;
  } else if (avg >= 2801 && avg <= 2999) {
    let addition = avg - 2800;
    document.getElementById("price-dsplay").innerText = `${
      2500 + 2 * addition
    }`;
  } else if (avg >= 3000 && avg <= 3300) {
    document.getElementById("price-dsplay").innerText = `${3000}`;
  } else if (avg >= 3301 && avg <= 3499) {
    let addition = avg - 3300;
    document.getElementById("price-dsplay").innerText = `${
      3000 + 2 * addition
    }`;
  } else if (avg >= 3500 && avg <= 3800) {
    document.getElementById("price-dsplay").innerText = `${3500}`;
  } else if (avg >= 3801 && avg <= 3999) {
    let addition = avg - 3800;
    document.getElementById("price-dsplay").innerText = `${
      3500 + 2 * addition
    }`;
  } else if (avg >= 4000 && avg <= 4300) {
    document.getElementById("price-dsplay").innerText = `${4000}`;
  } else if (avg >= 4301 && avg <= 4499) {
    let addition = avg - 4300;
    document.getElementById("price-dsplay").innerText = `${
      4000 + 2 * addition
    }`;
  } else if (avg >= 4500 && avg <= 4800) {
    document.getElementById("price-dsplay").innerText = `${4500}`;
  } else if (avg >= 4801 && avg <= 4999) {
    let addition = avg - 4800;
    document.getElementById("price-dsplay").innerText = `${
      4500 + 2 * addition
    }`;
  } else if (avg >= 5000 && avg <= 5300) {
    document.getElementById("price-dsplay").innerText = `${5000}`;
  } else if (avg >= 4301 && avg <= 4499) {
    let addition = avg - 5300;
    document.getElementById("price-dsplay").innerText = `${
      5000 + 2 * addition
    }`;
  } else if (avg >= 5301 && avg <= 9999) {
    let xtra_like_price = 800 / 1000;
    let a = avg - 5300;
    let price = 5000 + a * xtra_like_price;
    document.getElementById("price-dsplay").innerText = `${price}`;
  } else if (avg >= 10000 && avg <= 15000) {
    let xtra_like_price = 750 / 1000;
    let a = avg - 10000;
    let price = 9000 + a * xtra_like_price;
    document.getElementById("price-dsplay").innerText = `${price}`;
  }
}
