
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("search").addEventListener('click', openSearchTabs);
});

    function openSearchTabs(e) {
        var stock = document.getElementById("stock").value;
        var URLs = [
            "https://finance.yahoo.com/quote/" + stock + "?p=" + stock + "&.tsrc=fin-srch-v1",
            "https://finance.yahoo.com/chart/" + stock,
            "https://finviz.com/quote.ashx?t=" + stock,
            "https://stocktwits.com/symbol/" + stock,
            "https://www.sec.gov/cgi-bin/browse-edgar?CIK="+stock+"&action=getcompany&owner=exclude"
        ]
        for(var i=0; i<URLs.length; i++) {
            chrome.tabs.create({url: URLs[i], selected: false});
        }
    }


