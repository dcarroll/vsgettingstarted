// JavaScript Document

function resetHorizontalNav(tab, items) {
    LinkTableNavMVC.className = "linkTableNavItem";
    LinkTableNavConsole.className = "linkTableNavItem";
    document.getElementById(tab).setAttribute('class', 'linkTableNavItemSelected');

    MVCLinks.style.display = "none";
    ConsoleLinks.style.display = "none";
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

function resetConsoleLinks(tab, items) {
    ConsoleLinksSubNavOverview.className = "linkTableSubNavItem";
    ConsoleLinksSubNavUpdateService.className = "linkTableSubNavItem";
    ConsoleLinksSubNavUsing.className = "linkTableSubNavItem";
    ConsoleLinksSubNav1.className = "linkTableSubNavItem";
    ConsoleLinksSubNav2.className = "linkTableSubNavItem";
    ConsoleLinksSubNav3.className = "linkTableSubNavItem";
    ConsoleLinksSubNavCallSampleMethods.className = "linkTableSubNavItem";
    document.getElementById(tab).setAttribute('class', 'linkTableSubNavItemSelected');

    ConsoleLinksOverview.style.display = "none";
    ConsoleLinksCodeUpdateService.style.display = "none";
    ConsoleLinksCodeUsing.style.display = "none";
    ConsoleLinksCode1.style.display = "none";
    ConsoleLinksCode2.style.display = "none";
    ConsoleLinksCode3.style.display = "none";
    ConsoleLinksCallSampleMethods.style.display = "none";
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

