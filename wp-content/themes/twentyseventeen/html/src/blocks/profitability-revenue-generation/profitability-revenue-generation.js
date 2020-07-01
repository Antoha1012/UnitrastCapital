/**
 * @file Implementation of the profitability revenue generation block.
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// Block name
const BLOCK_NAME = 'profitability-revenue-generation';

// Element class names
const CLASSNAME = {
    BLOCK: BLOCK_NAME,
};

// Element selectors
const SELECTOR = {
    BLOCK: `.${BLOCK_NAME}`,
};

// Map of DOM elements
const elements = {};

// TODO: add code here

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

// TODO: add code here

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

// TODO: add code here

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

// TODO: add code here

// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the profitability revenue generation block.
 *
 * @return {boolean} true if the block is present on the page; false otherwise.
 */
export function initBlock() {
    const block = document.querySelector(SELECTOR.BLOCK);
    if (block == null) {
        return false;
    }

    function openNav() {
        document.getElementById("mySidenav").style.width = "1000px";
        document.getElementById("mySidenav").style.padding = "60px";
        document.getElementById("bg").style.display = "block";
        document.getElementById("closebtn").style.display = "flex";
        document.getElementById("btn").style.display = "block";
        document.getElementById("main").style.marginRight = "900px";
    }
    $("#span").on('click', function (){
        openNav();
    })

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav").style.padding = "0";
        document.getElementById("closebtn").style.display = "none";
        document.getElementById("btn").style.display = "none";
        document.getElementById("bg").style.display = "none";
        document.getElementById("main").style.marginRight = "0";
    }
    $("#close").on('click', function (){
        closeNav()
    })
    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------