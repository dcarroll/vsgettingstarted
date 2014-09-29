// JavaScript Document

function resetHorizontalNav(tab, items) {
    LinkTableNavMVC.className = "linkTableNavItem";
    LinkTableNavSnippets.className = "linkTableNavItem";
    document.getElementById(tab).setAttribute('class', 'linkTableNavItemSelected');

    MVCLinks.style.display = "none";
    SnippetLinks.style.display = "none";
    document.getElementById(items).style.display = "inline";
}

function resetMVCLinks(tab, items) {
    MVCLinksSubNavOverview.className = "linkTableSubNavItem";
    MVCLinksSubNavController.className = "linkTableSubNavItem";
    MVCLinksSubNavMenu.className = "linkTableSubNavItem";
    MVCLinksSubNavIndex.className = "linkTableSubNavItem";
    MVCLinksSubNavDetails.className = "linkTableSubNavItem";
    MVCLinksSubNavEdit.className = "linkTableSubNavItem";
    MVCLinksSubNavDelete.className = "linkTableSubNavItem";
    MVCLinksSubNavCreate.className = "linkTableSubNavItem";
    MVCLinksSubNavRunIt.className = "linkTableSubNavItem";
    MVCLinksSubNavTroubleshooting.className = "linkTableSubNavItem";
    document.getElementById(tab).setAttribute('class', 'linkTableSubNavItemSelected');

    MVCLinksOverview.style.display = "none";
    MVCLinksController.style.display = "none";
    MVCLinksMenu.style.display = "none";
    MVCLinksViewIndex.style.display = "none";
    MVCLinksViewDetails.style.display = "none";
    MVCLinksViewEdit.style.display = "none";
    MVCLinksViewDelete.style.display = "none";
    MVCLinksViewCreate.style.display = "none";
    MVCLinksRunIt.style.display = "none";
    MVCLinksTroubleshooting.style.display = "none";
    document.getElementById(items).style.display = "inline";
}

function resetSnippetLinks(tab, items) {
    SnippetLinksSubNav1.className = "linkTableSubNavItem";
    SnippetLinksSubNav2.className = "linkTableSubNavItem";
    SnippetLinksSubNav3.className = "linkTableSubNavItem";
    SnippetLinksSubNav4.className = "linkTableSubNavItem";
    SnippetLinksSubNav5.className = "linkTableSubNavItem";
    SnippetLinksSubNav6.className = "linkTableSubNavItem";
    document.getElementById(tab).setAttribute('class', 'linkTableSubNavItemSelected');

    SnippetLinksCode1.style.display = "none";
    SnippetLinksCode2.style.display = "none";
    SnippetLinksCode3.style.display = "none";
    SnippetLinksCode4.style.display = "none";
    SnippetLinksCode5.style.display = "none";
    SnippetLinksCode6.style.display = "none";
    document.getElementById(items).style.display = "inline";
}

function resetLinks3(tab, items) {
    Links3SubNav1.className = "linkTableSubNavItem";
    Links3SubNav2.className = "linkTableSubNavItem";
    Links3SubNav3.className = "linkTableSubNavItem";
    document.getElementById(tab).setAttribute('class', 'linkTableSubNavItemSelected');

    Links3Code1.style.display = "none";
    Links3Code2.style.display = "none";
    Links3Code3.style.display = "none";
    document.getElementById(items).style.display = "inline";
}

