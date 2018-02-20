// ==UserScript==
// @name         Top Meteo
// @namespace    https://europe.topmeteo.eu/
// @version      0.1
// @description  UserScript of JS written by Nathagamelle http://www.parapentebelge.be/parapentebelge/forum/list.php?id=Script%20TopMeteo
// @author       Daan
// @include      /^https?:\/\/europe.topmeteo.eu\/en\/fr\/loc\/[0-9]+/.*
// @grant        none
// ==/UserScript==
$("body").html(String($('body').html()).replace(/([0-9]*[05])\°\/([0-9]+)/g, '<svg height="20" width="20" version="1.1"><g transform="scale(0.2) rotate($1,50,50) rotate(180,50,50) translate(0,5)"><path stroke-width="0" fill="black" d="m50,0 -20,30 16,-3 -3,63 14,0 -3,-63 16,3 -20,-30z"></path></g></svg><vel style="font-size:15px">$2</vel>'));
$("vel").each(function(index) {
    vel = $(this).text();
    $(this).parent().parent().attr('style', 'height:30px;vertical-align:top;background-color: ' + 'hsl(' + Math.max(0, 240 * (1 - (.025 * vel + .35))) + ',100%,' + Math.max(20, Math.min(100, (90 - 2 * vel))) + '%)');
    $(this).parent().attr('style', 'max-height:30px;');
});