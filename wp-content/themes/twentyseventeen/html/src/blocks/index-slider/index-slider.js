/**
 * @file Implementation of the index slider block.
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// Block name
const BLOCK_NAME = 'index-slider';

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


// var swiper = new Swiper('.swiper-slider', {
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//     },
// });

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
 * Initialize the index slider block.
 *
 * @return {boolean} true if the block is present on the page; false otherwise.
 */
export function initBlock() {
    const block = document.querySelector(SELECTOR.BLOCK);
    if (block == null) {
        return false;
    }

    // TODO: add code here

    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------