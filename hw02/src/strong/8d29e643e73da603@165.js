function _1(md) {
  return (
    md`# HW2 Strong Baseline (2pt)`
  )
}

function _2(Plot, data, sign) {
  return (
    Plot.plot({
      width: 800,
      y: { grid: true, label: "count" },
      marks: [
        Plot.rectY(data, Plot.binX({ y: "count" }, { x: "Constellation", interval: 1, fill: "Gender", tip: true })),
        Plot.axisX({ tickFormat: i => { return sign[i] } }),
        Plot.gridY({ interval: 1, stroke: "white", strokeOpacity: 0.5 })
      ]
    })
  )
}

function _3(yCounts) {
  return (
    yCounts
  )
}

function _plot1(Plot, yCounts) {
  return (
    Plot.plot({
      grid: true,
      y: { label: "count" },

      marks: [
        Plot.ruleY([0]),
        Plot.barY(yCounts, { x: "Constellation", y: "count", tip: true, fill: "gender" }),
      ]
    })
  )
}

function _5(yCounts, sign, data) {

  yCounts.length = 0; //將yCounts清空
  for (var y = 0; y < 12; y++) {
    //所有年份都建立兩個Object，一個存放男性資料，一個存放女性資料
    yCounts.push({ Constellation: sign[y], gender: "male", count: 0 });
    //Object包含：1. 出生年，2.男性，3.人數(設為0)
    yCounts.push({ Constellation: sign[y], gender: "female", count: 0 });
    //Object包含：1. 出生年，2.女性，3.人數(設為0)
  }

  data.forEach(x => {
    var i = (x.Constellation) * 2 + (x.Gender == "男" ? 0 : 1);
    yCounts[i].count++;
    //讀取data array，加總每個年份出生的人
  })
  return yCounts
}


function _data1(data, sign) {
  return (
    data.map(item => ({
      ...item,
      Constellation: sign[item.Constellation],
    }))
  )
}

function _7(sign) {
  return (
    sign
  )
}

function _8(sign) {
  return (
    sign.push('牡羊座', '金牛座', '雙子座', '巨蟹座', '獅子座', '處女座', '天秤座', '天蠍座', '射手座', '摩羯座', '水瓶座', '雙魚座')
  )
}

function _sign() {
  return (
    []
  )
}

function _Constellations(data) {
  return (
    data.map(item => item.Constellation)
  )
}

function _yCounts() {
  return (
    []
  )
}

function _data(FileAttachment) {
  return (
    FileAttachment("data.json").json()
  )
}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["data.json", { url: new URL("../data.json", import.meta.url), mimeType: "application/json", toString }]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["Plot", "data", "sign"], _2);
  main.variable(observer()).define(["yCounts"], _3);
  main.variable(observer("plot1")).define("plot1", ["Plot", "yCounts"], _plot1);
  main.variable(observer()).define(["yCounts", "sign", "data"], _5);
  main.variable(observer("data1")).define("data1", ["data", "sign"], _data1);
  main.variable(observer()).define(["sign"], _7);
  main.variable(observer()).define(["sign"], _8);
  main.variable(observer("sign")).define("sign", _sign);
  main.variable(observer("Constellations")).define("Constellations", ["data"], _Constellations);
  main.variable(observer("yCounts")).define("yCounts", _yCounts);
  main.variable(observer("data")).define("data", ["FileAttachment"], _data);
  return main;
}
