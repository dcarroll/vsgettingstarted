// JavaScript Document


function resetLinkTableNav(tab, items)
{
	
	LinkTableNavMVC.className = "linkTableNavItem";
	LinkTableNavSnippets.className = "linkTableNavItem";
	LinkTableNav3.className = "linkTableNavItem";
	document.getElementById(tab).setAttribute('class', 'linkTableNavItemSelected');
	
	MVCLinks.style.display = "none";
	Links2.style.display = "none";
	Links3.style.display = "none";
	document.getElementById(items).style.display = "inline";
}
	
function resetMVCLinks(tab, items)
{
	MVCLinksSubNav1.className = "linkTableSubNavItem";
	MVCLinksSubNav2.className = "linkTableSubNavItem";
	MVCLinksSubNav3.className = "linkTableSubNavItem";
	document.getElementById(tab).setAttribute('class', 'linkTableSubNavItemSelected');
	
	MVCLinksCode1.style.display = "none";
	MVCLinksCode2.style.display = "none";
	MVCLinksCode3.style.display = "none";
	document.getElementById(items).style.display = "inline";
}

function resetLinks2(tab, items)
{
	Links2SubNav1.className = "linkTableSubNavItem";
	Links2SubNav2.className = "linkTableSubNavItem";
	Links2SubNav3.className = "linkTableSubNavItem";
	Links2SubNav4.className = "linkTableSubNavItem";
	document.getElementById(tab).setAttribute('class', 'linkTableSubNavItemSelected');
	
	Links2Code1.style.display = "none";
	Links2Code2.style.display = "none";
	Links2Code3.style.display = "none";
	Links2Code4.style.display = "none";
	document.getElementById(items).style.display = "inline";
}

function resetLinks3(tab, items)
{
	Links3SubNav1.className = "linkTableSubNavItem";
	Links3SubNav2.className = "linkTableSubNavItem";
	Links3SubNav3.className = "linkTableSubNavItem";
	document.getElementById(tab).setAttribute('class', 'linkTableSubNavItemSelected');
	
	Links3Code1.style.display = "none";
	Links3Code2.style.display = "none";
	Links3Code3.style.display = "none";
	document.getElementById(items).style.display = "inline";
}
function copyCode(id) {
    if (window.clipboardData) {
        var obj = document.getElementById(id);
        window.clipboardData.setData("Text", obj.innerText);
    }
}
