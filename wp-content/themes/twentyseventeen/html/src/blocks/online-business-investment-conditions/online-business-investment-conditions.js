/**
 * @file Implementation of the conditions block.
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// Block name
const BLOCK_NAME = 'online-business-investment-conditions';

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
 * Initialize the conditions block.
 *
 * @return {boolean} true if the block is present on the page; false otherwise.
 */
export function initBlock() {
    const block = document.querySelector(SELECTOR.BLOCK);
    if (block == null) {
        return false;
    }
    $(document).ready(function(){
        $('#read_more').click(function(){
            $('#read').slideDown(300);
            $(this).hide();
            $('#hidden').show(300);
        });
        $('#hidden').click(function(){
                $('#read').slideUp(300);
                $(this).hide();
                $('#read_more').show(300);
        });
    });
    $(document).ready(function(){
        $('#read_more-second').click(function(){
            $('#read-second').slideDown(300);
            $(this).hide();
            $('#hidden-second').show(300);
        });
        $('#hidden-second').click(function(){
                $('#read-second').slideUp(300);
                $(this).hide();
                $('#read_more-second').show(300);
        });
    });
    $(document).ready(function(){
        $('#read_more-third').click(function(){
            $('#read-third').slideDown(300);
            $(this).hide();
            $('#hidden-third').show(300);
        });
        $('#hidden-third').click(function(){
                $('#read-third').slideUp(300);
                $(this).hide();
                $('#read_more-third').show(300);
        });
    });

    return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------
