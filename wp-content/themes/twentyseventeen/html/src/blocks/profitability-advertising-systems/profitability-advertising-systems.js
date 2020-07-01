/**
 * @file Implementation of the advertising systems block.
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// Block name
const BLOCK_NAME = 'profitability-advertising-systems';

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
 * Initialize the advertising systems block.
 *
 * @return {boolean} true if the block is present on the page; false otherwise.
 */
export function initBlock() {
    const block = document.querySelector(SELECTOR.BLOCK);
    if (block == null) {
        return false;
    }
    let flag = true;

    function animateElements() {
        $('#circle').each(function () {
            var elementPos = $('#circle').offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elementPos < topOfWindow + $(window).height() && flag) {
                $('#circle').circleProgress({
                    startAngle: -Math.PI / 4 * 2,
                    value: 1,
                    size: 250,
                    reverse: true,
                    thickness: 10,
                    fill: {
                        color: 'transparent',
                        image: './assets/img/chart.png'
                    }
                });
                flag = false;
            }
        });
    };
    animateElements();
    $(window).scroll(animateElements);

    $('.active-chart').on('click', function () {
        $('#circle').circleProgress('redraw');
    });


    $("ul.tabs__caption").on("click", "li:not(.active-link)", function () {
        $(this)
            .addClass("active-link")
            .siblings()
            .removeClass("active-link")
            .closest("div.tabs")
            .find("div.tabs__content")
            .removeClass("active-link")
            .eq($(this).index())
            .addClass("active-link");
    });
    // TODO: add code here

    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------