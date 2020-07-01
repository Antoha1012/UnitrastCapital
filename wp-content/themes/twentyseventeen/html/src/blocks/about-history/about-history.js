/**
 * @file Implementation of the history block.
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// Block name
const BLOCK_NAME = 'about-history';

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
 * Initialize the history block.
 *
 * @return {boolean} true if the block is present on the page; false otherwise.
 */

import Swiper from 'swiper';

export function initBlock() {
    const block = document.querySelector(SELECTOR.BLOCK);
    if (block == null) {
        return false;
    }



    var mySwiper = new Swiper('#history', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
        },
    })

    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------