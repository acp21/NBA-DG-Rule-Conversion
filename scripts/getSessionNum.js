function getSessionNum() {
   let num = app.plugins.plugins.dataview.api.pages('"campaign"').length;
   num -= 1
   return num.toString()
}
module.exports = getSessionNum