var sdk = new apretaste("http://xeros.co/"); // still in dev
// var sdk = new apretaste("https://apretaste.com/"); // for production
$(function() {
    search();
	$("#btn-search").click(function(){
		search();
	});
});

function search(){
	var sites = null;
	
	var q = $("#search-query").val();
	
	if (q == '')
		sites = sdk.getData("public/sites");
	else
		sites = sdk.getData("public/sites", {q: q});
	
    var tpl = $("#pages-list-item-template").html();
    $("#pages-list").html('');
    var html = '';
    for (var site in sites.sites)
    {
        html += replace_tags(tpl, sites.sites[site]);
    }

    $("#pages-list").html(html);
	
}