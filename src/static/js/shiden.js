$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Shiden Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
        ["Polkaex",     `<a href="polkaex"       >Various</a>`,      "PKEX",       "https://app.polkaex.io" ]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
