module.exports = (params) => {
    console.log(params);
    let numSessions = app.plugins.plugins.dataview.api.pages('"campaign"').length
    numSessions = JSON.stringify(numSessions)
    while(numSessions.length < 3) {
        numSessions = "0" + numSessions
    }
    let date = moment().format('YYYY-MM-DD');
    let filename = numSessions + '_' + date;
    params.variables["thisSessionFilename"] = filename;
    params.variables["folderName"] = 'campaign/'
}