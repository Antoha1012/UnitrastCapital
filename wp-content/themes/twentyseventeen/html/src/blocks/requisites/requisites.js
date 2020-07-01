/**
 * @file Implementation of the requisites block.
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// Block name
const BLOCK_NAME = 'requisites';

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
// $('#select').on('change', function () {
//     if ($(this).val() == 4) {
//         window.location.href = 'rekvizity.pug'
//     }
// })
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
 * Initialize the requisites block.
 *
 * @return {boolean} true if the block is present on the page; false otherwise.
 */
export function initBlock() {
    const block = document.querySelector(SELECTOR.BLOCK);
    if (block == null) {
        return false;
    }

    $('#CategorySelectorForm_categories').on('change', function () {
        window.location.href = $(this).val();
    })

    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------