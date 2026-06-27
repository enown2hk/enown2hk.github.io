const fmt = new Intl.NumberFormat("zh-CN");

const colors = {
  blue: "#3157f4",
  cyan: "#28a6c8",
  red: "#e84d3c",
  yellow: "#f2b91f",
  green: "#35a66a",
  slate: "#26343d",
  gray: "#8a969e"
};

const data = {
  kpis: [
    { label: "全网声量", value: 89377, suffix: "条", note: "监测期内相关舆情总量" },
    { label: "相关热搜", value: 183, suffix: "个", note: "跨平台形成的热榜议题" },
    { label: "峰值声量", value: 22026, suffix: "条", note: "2026-06-12 单日峰值" },
    { label: "负面占比", value: "23.12", suffix: "%", note: "负面信息 20,660 条" }
  ],
  dates: [
    "06-05", "06-06", "06-07", "06-08", "06-09", "06-10", "06-11", "06-12", "06-13",
    "06-14", "06-15", "06-16", "06-17", "06-18", "06-19", "06-20", "06-21", "06-22", "06-23"
  ],
  trend: {
    all: [0, 0, 12, 48, 1900, 11750, 16780, 22026, 12860, 7000, 9100, 4100, 1720, 710, 520, 320, 230, 260, 41],
    weibo: [0, 0, 4, 20, 600, 3100, 6400, 10008, 5000, 2300, 2800, 1200, 500, 260, 190, 100, 70, 70, 22],
    shortVideo: [0, 0, 3, 8, 900, 5000, 8534, 4633, 2300, 1500, 1800, 800, 300, 200, 120, 100, 80, 90, 10]
  },
  platforms: [
    ["新浪微博", 32586], ["抖音", 7532], ["微信", 7418], ["今日头条", 6103], ["bilibili", 5456],
    ["小红书", 4260], ["微信视频号", 3533], ["百度百家", 2787], ["有驾", 2436], ["快手", 1826]
  ],
  sentiments: {
    all: {
      label: "总体",
      caption: "总体舆情共 89,377 条，中性信息占比最高。",
      values: [["正面", 741], ["负面", 20660], ["中性", 67976]]
    },
    shortVideo: {
      label: "短视频",
      caption: "短视频共 26,378 条，负面占比 36.88%，明显高于总体。",
      values: [["正面", 161], ["负面", 9729], ["中性", 16488]]
    },
    weibo: {
      label: "微博",
      caption: "微博共 32,644 条，中性信息占 91.84%。",
      values: [["正面", 67], ["负面", 2597], ["中性", 29980]]
    }
  },
  gender: [["未知", 44.62], ["男", 31.26], ["女", 24.12]],
  ip: [["境内IP", 75.66], ["境外IP", 1.52], ["其他", 22.82]],
  regions: {
    author: {
      label: "作者地域",
      caption: "作者地域 Top 10：广东和北京最集中。",
      unit: "作者数",
      values: [["广东", 7472], ["北京", 6972], ["江苏", 3369], ["上海", 3264], ["浙江", 2939], ["山东", 2928], ["河南", 2365], ["四川", 1962], ["湖北", 1737], ["福建", 1613]]
    },
    info: {
      label: "信息发布地",
      caption: "信息发布地域 Top 10：广东发布量超过 1 万条。",
      unit: "信息数",
      values: [["广东", 10318], ["北京", 8376], ["江苏", 4775], ["上海", 4606], ["浙江", 4257], ["山东", 3949], ["河南", 3309], ["四川", 2564], ["湖北", 2512], ["河北", 2192]]
    },
    shortVideo: {
      label: "短视频作者",
      caption: "短视频作者地域：北京、广东领先。",
      unit: "作者数",
      values: [["北京", 846], ["广东", 753], ["山东", 267], ["浙江", 265], ["上海", 243], ["河南", 236], ["江苏", 224], ["湖南", 157], ["河北", 154], ["福建", 138]]
    },
    weibo: {
      label: "微博博主",
      caption: "微博博主地域：北京是核心节点。",
      unit: "博主数",
      values: [["北京", 2376], ["广东", 1953], ["上海", 1228], ["江苏", 995], ["浙江", 836], ["山东", 650], ["四川", 586], ["福建", 484], ["湖北", 466], ["河南", 437]]
    }
  },
  keywords: [
    ["鸭腿", 66591], ["阿姨", 27964], ["陈秀凤", 4155], ["绿色系", 3226], ["呈绿色", 3213],
    ["发绿", 2476], ["又坏", 2106], ["鸭肉", 2057], ["鹅肉", 1988], ["消费者", 1680]
  ],
  shortVideoKeywords: [
    ["鸭腿", 21750], ["阿姨", 10344], ["发绿", 1061], ["陈秀凤", 1053], ["爆火", 873],
    ["群公告", 687], ["蔬菜汁", 644], ["大鹅", 611], ["翻车", 561], ["监局", 518]
  ],
  timeline: [
    ["2023-12-02", "“鹅腿阿姨”陈秀凤多次申请注册“鹅腿阿姨”商标。", "事件背景"],
    ["2026-03-18", "陈秀凤在“腌制肉等”类别申请“鹅腿阿姨”商标，目前处于等待实质审查状态。", "事件背景"],
    ["2026-06-09 00:00", "陈秀凤在团购群发公告，承认售卖的“鹅腿”是鸭腿，称会写清，正配合相关部门。", "关键转折"],
    ["2026-06-09 20:00", "红星新闻记者联系“鹅腿阿姨”，其家人确认卖的是鸭腿。", "媒体跟进"],
    ["2026-06-09 22:22", "抖音出现首发短视频，称北大鹅腿阿姨卖的一直是鸭腿。", "媒体首发"],
    ["2026-06-10 15:00", "顶流网红“鹅腿阿姨”承认招牌烤鹅腿用鸭腿，市场监管部门介入调查。", "监管进入"]
  ],
  hotSearches: [
    ["贴吧热议榜", "鸭充鹅!名校鹅腿阿姨翻车被扒", "最高 19 位", "874,000"],
    ["知乎热榜", "雁鹅是一种鹅吗？从生物学种属和消费心理如何理解和判断？", "最高 8 位", "950,000"],
    ["贴吧热议榜", "人大自研真鹅腿,含泪定价15元", "最高 4 位", "1,732,000"],
    ["B站热榜", "UP主实测葱汁腌鸭腿", "最高 3 位", "-"],
    ["搜狗热榜", "多家干锅鹅翅火速改名干锅鸭翅", "最高 15 位", "4,045,849"],
    ["微博实时上升榜", "市监局回应店家鹅翅火速改名鸭翅", "最高 1 位", "29,355"]
  ],
  layers: [["第一层", 0.45], ["第二层", 9.68], ["第三层", 22.19], ["第四层", 20.12], ["四层+", 47.55]],
  propagation: {
    maxLayer: 15,
    reposts: 23040,
    reach: 1537630000
  },
  opinions: {
    netizen: {
      label: "网民观点",
      caption: "网民观点 Top 10：名称与真实食材的关系被反复追问。",
      values: [
        ["那为什么叫鹅腿阿姨？", 65],
        ["鹅腿阿姨那个鸭腿还不够邪修吗？", 29],
        ["鹅腿的正宗脆皮理论还算数不算数？", 18],
        ["你要找的是我，为什么喂无辜的清华学生鸭腿？", 13],
        ["儿子蛮横出狂言，群发公告博同怜", 13],
        ["以假乱真数十载，忠实粉丝高材贤", 13],
        ["莫把善意当筹码，天网恢恢疏而严", 13],
        ["因为凡是成了名的人，本名总是多余的", 11],
        ["学生们排着长队，捧着银钱，仿佛不是买腿，而是购买一种精神", 11],
        ["鹅腿鸭腿分不清，颜色发绿也看不出来？", 5]
      ]
    },
    official: {
      label: "官方观点",
      caption: "官方观点强调菜单标识、实际售卖与依法核查。",
      values: [
        ["招牌叫什么是其次，主要看菜单上标的是什么，实际卖给你的又是什么。", 109],
        ["北京市海淀区市场监督管理局发布情况通报，组织调查问询当事人。", 87],
        ["正在对其涉嫌误导消费者等行为进一步核查，下一步依法依规处置。", 62],
        ["中消协已关注到此事，将搜集相关线索并统一汇总。", 60],
        ["陈秀凤本人在销售群中发布公告称原材料是鸭腿，以后会明确说明。", 53]
      ]
    },
    person: {
      label: "人物回应",
      caption: "人物回应集中在“早期卖过鹅腿”和“不存在欺诈”的辩解。",
      values: [
        ["陈秀凤称 2011 年开始做烧烤，刚开始用的确实是鹅腿。", 102],
        ["鹅腿阿姨叫了十几年了，不存在欺诈。", 85],
        ["原材料是鸭腿，以后都会写清楚，介意请勿下单。", 69],
        ["刚开始干的时候，确实是真材实料的鹅腿。", 44],
        ["国贸本周不过来了，被群里某位上班精英举报，正在配合相关部门工作。", 43]
      ]
    }
  },
  media: {
    summary: [["全部媒体", "432家", 6371], ["中央媒体", "85家", 1044], ["省级媒体", "188家", 4088], ["地方媒体", "159家", 1239]],
    top: [["光明网", 201], ["红星新闻网", 179], ["九派新闻", 174], ["河南广播电视台", 147], ["潇湘晨报", 141], ["封面新闻网", 131]]
  }
};

data.trend.other = data.trend.all.map((value, index) => value - data.trend.weibo[index] - data.trend.shortVideo[index]);

const charts = {};

function createTabs(containerId, items, activeKey, onChange) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  Object.entries(items).forEach(([key, item]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    button.className = key === activeKey ? "active" : "";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", key === activeKey ? "true" : "false");
    button.addEventListener("click", () => {
      container.querySelectorAll("button").forEach((node) => {
        node.classList.remove("active");
        node.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      onChange(key);
    });
    container.appendChild(button);
  });
}

function renderKpis() {
  const grid = document.getElementById("kpiGrid");
  grid.innerHTML = data.kpis
    .map((item) => {
      const value = typeof item.value === "number" ? fmt.format(item.value) : item.value;
      return `<article class="kpi-card"><span>${item.label}</span><strong>${value}${item.suffix}</strong><p>${item.note}</p></article>`;
    })
    .join("");
}

function renderTimeline() {
  const el = document.getElementById("timeline");
  el.innerHTML = data.timeline
    .map(([time, title, type]) => `
      <article class="timeline-item">
        <div class="timeline-time"><span>${time}</span><span class="timeline-badge">${type}</span></div>
        <p>${title}</p>
      </article>
    `)
    .join("");
}

function baseGrid() {
  return {
    left: 12,
    right: 18,
    top: 36,
    bottom: 28,
    containLabel: true
  };
}

function initTrendChart() {
  charts.trend = echarts.init(document.getElementById("trendChart"));
  charts.trend.setOption({
    color: [colors.blue, colors.red, colors.yellow, colors.cyan],
    tooltip: { trigger: "axis", valueFormatter: (value) => `${fmt.format(value)} 条` },
    legend: { top: 0, right: 0, itemWidth: 14, itemHeight: 8 },
    grid: { ...baseGrid(), top: 46 },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: data.dates,
      axisLine: { lineStyle: { color: "#cfd6d2" } }
    },
    yAxis: {
      type: "value",
      axisLabel: { formatter: (value) => fmt.format(value) },
      splitLine: { lineStyle: { color: "#edf0ed" } }
    },
    dataZoom: [{ type: "inside" }, { type: "slider", height: 20, bottom: 0 }],
    series: [
      { name: "全部", type: "line", smooth: true, symbolSize: 7, areaStyle: { opacity: 0.14 }, data: data.trend.all },
      { name: "微博", type: "line", smooth: true, symbolSize: 6, data: data.trend.weibo },
      { name: "短视频", type: "line", smooth: true, symbolSize: 6, data: data.trend.shortVideo },
      { name: "其他", type: "line", smooth: true, symbolSize: 5, data: data.trend.other }
    ]
  });
}

function initPlatformChart() {
  charts.platform = echarts.init(document.getElementById("platformChart"));
  charts.platform.setOption({
    color: [colors.blue],
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: (value) => `${fmt.format(value)} 条` },
    grid: { ...baseGrid(), bottom: 72 },
    xAxis: {
      type: "category",
      data: data.platforms.map((item) => item[0]),
      axisLabel: { interval: 0, rotate: 36 },
      axisLine: { lineStyle: { color: "#cfd6d2" } }
    },
    yAxis: {
      type: "value",
      axisLabel: { formatter: (value) => fmt.format(value) },
      splitLine: { lineStyle: { color: "#edf0ed" } }
    },
    series: [{
      type: "bar",
      barWidth: 22,
      data: data.platforms.map((item, index) => ({
        value: item[1],
        itemStyle: { color: index === 0 ? colors.blue : "#6d99ee" }
      })),
      label: { show: true, position: "top", formatter: ({ value }) => fmt.format(value) }
    }]
  });
}

function renderDonut(chart, rows, centerText, isPercent = false) {
  const total = rows.reduce((sum, row) => sum + row[1], 0);
  chart.setOption({
    color: [colors.blue, colors.red, colors.yellow, colors.green, colors.gray],
    tooltip: {
      trigger: "item",
      formatter: ({ name, value, percent }) => `${name}<br/>${isPercent ? value.toFixed(2) + "%" : fmt.format(value) + " 条"} (${percent}%)`
    },
    series: [{
      type: "pie",
      radius: ["58%", "78%"],
      center: ["50%", "52%"],
      avoidLabelOverlap: true,
      label: {
        formatter: ({ name, percent }) => `${name} ${percent}%`
      },
      data: rows.map(([name, value]) => ({ name, value }))
    }],
    graphic: [{
      type: "text",
      left: "center",
      top: "47%",
      style: {
        text: centerText || (isPercent ? "占比" : fmt.format(total)),
        fontSize: 22,
        fontWeight: 800,
        fill: colors.slate,
        textAlign: "center"
      }
    }]
  });
}

function initSentimentCharts() {
  charts.sentiment = echarts.init(document.getElementById("sentimentChart"));
  charts.gender = echarts.init(document.getElementById("genderChart"));
  charts.ip = echarts.init(document.getElementById("ipChart"));
  createTabs("sentimentTabs", data.sentiments, "all", renderSentiment);
  renderSentiment("all");
  renderDonut(charts.gender, data.gender, "性别", true);
  renderDonut(charts.ip, data.ip, "IP", true);
}

function renderSentiment(key) {
  const selected = data.sentiments[key];
  document.getElementById("sentimentCaption").textContent = selected.caption;
  renderDonut(charts.sentiment, selected.values, selected.label);
}

function initRegionChart() {
  charts.region = echarts.init(document.getElementById("regionChart"));
  createTabs("regionTabs", data.regions, "author", renderRegion);
  renderRegion("author");
}

function renderRegion(key) {
  const selected = data.regions[key];
  document.getElementById("regionCaption").textContent = selected.caption;
  const rows = [...selected.values].reverse();
  charts.region.setOption({
    color: [colors.green],
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: (value) => `${fmt.format(value)} ${selected.unit}` },
    grid: baseGrid(),
    xAxis: {
      type: "value",
      axisLabel: { formatter: (value) => fmt.format(value) },
      splitLine: { lineStyle: { color: "#edf0ed" } }
    },
    yAxis: {
      type: "category",
      data: rows.map((item) => item[0]),
      axisLine: { show: false },
      axisTick: { show: false }
    },
    series: [{
      type: "bar",
      barWidth: 16,
      data: rows.map((item, index) => ({
        value: item[1],
        itemStyle: { color: index > 6 ? colors.blue : "#48b37b" }
      })),
      label: { show: true, position: "right", formatter: ({ value }) => fmt.format(value) }
    }]
  });
}

function initKeywords() {
  renderKeywordCloud(data.keywords);
  charts.keyword = echarts.init(document.getElementById("keywordChart"));
  const rows = data.shortVideoKeywords;
  charts.keyword.setOption({
    color: [colors.yellow],
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: (value) => fmt.format(value) },
    grid: { ...baseGrid(), top: 12 },
    xAxis: {
      type: "category",
      data: rows.map((item) => item[0]),
      axisLabel: { interval: 0, rotate: 28 },
      axisLine: { lineStyle: { color: "#cfd6d2" } }
    },
    yAxis: { type: "value", splitLine: { lineStyle: { color: "#edf0ed" } } },
    series: [{ name: "短视频热词", type: "bar", barWidth: 18, data: rows.map((item) => item[1]) }]
  });
}

function renderKeywordCloud(rows) {
  const el = document.getElementById("keywordCloud");
  const max = Math.max(...rows.map((row) => row[1]));
  const palette = [colors.blue, colors.red, colors.yellow, colors.green, colors.cyan, colors.slate];
  el.innerHTML = rows
    .map(([word, value], index) => {
      const size = 16 + Math.sqrt(value / max) * 26;
      const color = palette[index % palette.length];
      return `<span class="keyword" title="${word}: ${fmt.format(value)}" style="--size:${size.toFixed(0)}px;--color:${color}">${word}</span>`;
    })
    .join("");
}

function renderHotSearches() {
  const el = document.getElementById("hotSearchList");
  el.innerHTML = data.hotSearches
    .map(([platform, title, rank, heat], index) => `
      <div class="hot-item">
        <span class="hot-rank">${index + 1}</span>
        <span class="hot-title" title="${title}">${title}</span>
        <span class="hot-meta">${platform} · ${rank} · ${heat}</span>
      </div>
    `)
    .join("");
}

function initLayerChart() {
  charts.layer = echarts.init(document.getElementById("layerChart"));
  charts.layer.setOption({
    color: [colors.red],
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: (value) => `${value}%` },
    grid: baseGrid(),
    xAxis: {
      type: "category",
      data: data.layers.map((item) => item[0]),
      axisLine: { lineStyle: { color: "#cfd6d2" } }
    },
    yAxis: {
      type: "value",
      axisLabel: { formatter: "{value}%" },
      splitLine: { lineStyle: { color: "#edf0ed" } }
    },
    series: [{
      type: "bar",
      barWidth: 28,
      data: data.layers.map((item, index) => ({
        value: item[1],
        itemStyle: { color: index === 4 ? colors.red : "#f08a7d" }
      })),
      label: { show: true, position: "top", formatter: "{c}%" }
    }]
  });
  document.getElementById("propagationStats").innerHTML = `
    <div><span>最大信息层级</span><strong>${data.propagation.maxLayer}</strong></div>
    <div><span>总转发人数</span><strong>${fmt.format(data.propagation.reposts)}</strong></div>
    <div><span>覆盖微博用户</span><strong>${fmt.format(data.propagation.reach)}</strong></div>
  `;
}

function initOpinions() {
  createTabs("opinionTabs", data.opinions, "netizen", renderOpinions);
  renderOpinions("netizen");
}

function renderOpinions(key) {
  const selected = data.opinions[key];
  document.getElementById("opinionCaption").textContent = selected.caption;
  document.getElementById("opinionList").innerHTML = selected.values
    .map(([text, heat], index) => `
      <div class="opinion-item">
        <span class="opinion-rank">${index + 1}</span>
        <span class="opinion-text" title="${text}">${text}</span>
        <span class="opinion-heat">热度 ${heat}</span>
      </div>
    `)
    .join("");
}

function initMedia() {
  document.getElementById("mediaSummary").innerHTML = data.media.summary
    .map(([name, count, posts]) => `
      <div class="media-row">
        <strong>${name} · ${count}</strong>
        <span class="media-count">${fmt.format(posts)} 条</span>
      </div>
    `)
    .join("");
  charts.media = echarts.init(document.getElementById("mediaChart"));
  charts.media.setOption({
    color: [colors.cyan],
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, valueFormatter: (value) => `${fmt.format(value)} 篇` },
    grid: { ...baseGrid(), top: 12, bottom: 54 },
    xAxis: {
      type: "category",
      data: data.media.top.map((item) => item[0]),
      axisLabel: { interval: 0, rotate: 24 },
      axisLine: { lineStyle: { color: "#cfd6d2" } }
    },
    yAxis: { type: "value", splitLine: { lineStyle: { color: "#edf0ed" } } },
    series: [{ type: "bar", barWidth: 18, data: data.media.top.map((item) => item[1]) }]
  });
}

function installDownload() {
  document.getElementById("downloadTrend").addEventListener("click", () => {
    const url = charts.trend.getDataURL({ pixelRatio: 2, backgroundColor: "#ffffff" });
    const a = document.createElement("a");
    a.href = url;
    a.download = "鹅腿阿姨舆情趋势图.png";
    a.click();
  });
}

function resizeCharts() {
  Object.values(charts).forEach((chart) => chart.resize());
}

function boot() {
  renderKpis();
  renderTimeline();
  initTrendChart();
  initPlatformChart();
  initSentimentCharts();
  initRegionChart();
  initKeywords();
  renderHotSearches();
  initLayerChart();
  initOpinions();
  initMedia();
  installDownload();
  if (window.lucide) {
    window.lucide.createIcons();
  }
  window.addEventListener("resize", resizeCharts);
}

window.addEventListener("DOMContentLoaded", boot);
