// Polyfill imports
import 'core-js/features/object/assign';
import 'core-js/features/promise';

// Library imports
import svg4everybody from 'svg4everybody';
import 'remodal';
import 'jquery-circle-progress';
import jQuery from 'jquery';
import aos from 'aos';
import 'Inputmask';
// Utility imports
import * as FocusUtility from './util/focus';
import * as LazyLoader from './util/lazy-loader';

// Block imports
// TODO: add code here
import * as aboutHistory from '../../blocks/about-history/index.js';
import * as onlineBusinessInvestmentConditions from '../../blocks/online-business-investment-conditions/index.js'
import * as tradingfloors from '../../blocks/trading-floors/index.js';
import * as requisites from '../../blocks/requisites/index.js';
import * as disclosure from '../../blocks/disclosure/index.js';
import * as contract from '../../blocks/contract/index.js';
import * as revenueGeneration from '../../blocks/profitability-revenue-generation/index.js';
import * as advertising from '../../blocks/profitability-advertising-systems/index.js';
import * as sendRequest from '../../blocks/send-request/index.js';

// Initialize libraries
svg4everybody();
window.$ = window.jQuery = jQuery;

// Initialize utilities
FocusUtility.init();
LazyLoader.init();
aos.init();

// Initialize blocks
// TODO: add code here
aboutHistory.initBlock();
requisites.initBlock();
tradingfloors.initBlock();
disclosure.initBlock();
contract.initBlock();
onlineBusinessInvestmentConditions.initBlock();
revenueGeneration.initBlock();
advertising.initBlock();
sendRequest.initBlock();