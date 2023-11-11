function getLastSessionFilename(){
    const  titles = app.plugins.plugins.dataview.api.pages('"campaign"').sort(b => b.sessionNum)
    if(titles.length > 1){
        const filename = JSON.stringify(titles[titles.length-2].file.path).replace("\"","").replace("\"","").replace(".md","");
        return filename
    }
    else {
        return "No games found";
    }
}
module.exports = getLastSessionFilename