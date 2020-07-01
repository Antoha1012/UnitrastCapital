/**
 * @file Implementation of the calc yield block.
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// Block name
const BLOCK_NAME = 'calc-yield';

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

$(function() {
  var all_strategies = [
  // risk:
// низкий 1
// ниже среднего 2
// средний 3
// выше среднего 4
// высокий 5
// не определено/неизвестно 0
//
// investments_type: 'stocks' or 'bonds' or 'mixed' (or 'unknown') - инвестирование в: акции, облигации, смешанное
// less_risky: false or true - наименее рискованные
// currency_investments: false or true - инвестирование в валютные активы
{
name:"Альфа-Капитал <br>Акции роста",
currency:"RUR", min:100, max:10000000,
pif_alias:"ipifa_akar",
alias:"ipifa_akar",
alias:"ipifa_akar",
pif_type:"classic",
years:[],
risk:5,
risklevel:5,
profitlevel:5,
capital_protection:false,
recommended:true,

investments_type: undefined,
less_risky: undefined,
currency_investments: undefined,

description:"Акции перспективных <br>мировых компаний",
buy_link:"/individual/pifs/ipifa_akar/",
css_class:"ipifa_akar",

online_buying: {
    enabled: false,
    id: 49064041
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Акции роста»",
    reg_date: "12 декабря 2006 г.",
    reg_org: "ФСФР России",
    reg_num: "0697-94121997"
}
},
{
name:"Альфа-Капитал <br>Баланс",
currency:"RUR", min:100, max:10000000,
pif_alias:"opif_aks",
alias:"opif_aks",
alias:"opif_aks",
pif_type:"classic",
years:[],
risk:3,
risklevel:3,
profitlevel:4,
capital_protection:false,
recommended:true,

investments_type: 'mixed',
less_risky: false,
currency_investments: true,

description:"Гибкие инвестиции в различные <br>классы активов",
buy_link:"/individual/pifs/opif_aks/",
css_class:"opif_aks",
online_buying: {
    enabled: true,
    id: 49064050
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=balans&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Баланс»",
    reg_date: "13 апреля 2006 г.",
    reg_org: "ФСФР России",
    reg_num: "0500-94103344"
}
},
{
name:"Альфа-Капитал <br>Облигации плюс",
currency:"RUR", min:100, max:10000000,
pif_alias:"opif_akop",
alias:"opif_akop",
alias:"opif_akop",
pif_type:"classic",
years:[],
risk:3,
risklevel:2,
profitlevel:3.5,
capital_protection:false,
recommended:true,

investments_type: 'bonds',
less_risky: false,
currency_investments: false,

description:"Классический фонд <br>рублевых облигаций",
buy_link:"/individual/pifs/opif_akop/",
css_class:"opif_akop",
online_buying: {
    enabled: true,
    id: 49064043
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=obligazii_plus&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Облигации Плюс»",
    reg_date: "21 марта 2003 г.",
    reg_org: "ФКЦБ России",
    reg_num: "0095-59893492"
}
},
{
name:"Альфа-Капитал <br>Резерв",
currency:"RUR", min:100, max:10000000,
pif_alias:"opif_akr",
alias:"opif_akr",
alias:"opif_akr",
pif_type:"classic",
years:[],
risk:3,
risklevel:3,
profitlevel:3,
capital_protection:false,
recommended:true,

investments_type: 'bonds',
less_risky: true,
currency_investments: false,

description:"Консервативный фонд <br>рублевых облигаций",
buy_link:"/individual/pifs/opif_akr/",
css_class:"opif_akr",
online_buying: {
    enabled: true,
    id: 49064049
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=rezerv&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Резерв»",
    reg_date: "21 марта 2003 г.",
    reg_org: "ФКЦБ России",
    reg_num: "0094-59893648"
}
},
{
name:"Альфа-Капитал <br>Еврооблигации",
currency:"RUR", min:100, max:10000000, 
pif_alias:"opifo_akbond",
alias:"opifo_akbond",
alias:"opifo_akbond",
pif_type:"classic",
years:[],
risk:1,
risklevel:3,
profitlevel:3.5,
capital_protection:false,
recommended:true,

investments_type: 'bonds',
less_risky: true,
currency_investments: true,

description:"Долларовые облигации российских <br />и&nbsp;иностранных эмитентов",
buy_link:"/individual/pifs/opifo_akbond/",
css_class:"opifo_akbond",
isYandexCounter:{
    enabled: true,
    target_from_online: 'glawnaya_evroobligazii_otkrit_online',
    target_from_more_btn: 'glawnaya_evroobligazii_uznat_bolshe',
    target_from_inner_online: 'PIFs_evroobligazii_otkrit_online',
    target_from_inner_more_btn: 'PIFs_evroobligazii_uznat_bolshe'
},
online_buying: {
    enabled: true,
    id: 2867829943
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=evroooblig&utm_campaign=poidempokurim'
},	

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Еврооблигации»",
    reg_date: "18 августа 2005 г.",
    reg_org: "ФСФР России",
    reg_num: "0386-78483614"
}
},
{
name:"Альфа-Капитал <br>Индекс МосБиржи",
currency:"RUR", min:100, max:10000000,
pif_alias:"oipif_ak_mmvb",
alias:"oipif_ak_mmvb",
alias:"oipif_ak_mmvb",
pif_type:"classic",
years:[],
risk:5,
risklevel:4,
profitlevel:4.5,
capital_protection:false,
recommended:true,

investments_type: 'stocks',
less_risky: false,
currency_investments: false,

description:"Тренды индекса <br>МосБиржи ",
buy_link:"/individual/pifs/oipif_ak_mmvb/",
css_class:"oipif_ak_mmvb",
online_buying: {
    enabled: true,
    id: 49064044
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=index_MMVB&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Индекс МосБиржи",
    reg_date: "12 декабря 2006 г.",
    reg_org: "ФСФР России",
    reg_num: "0695-94121916"
}
},
{
name:"Альфа-Капитал <br>Ликвидные акции",
currency:"RUR", min:100, max:10000000,
pif_alias:"opifa_akliq",
alias:"opifa_akliq",
pif_type:"classic",
years:[],
risk:5,
risklevel:4,
profitlevel:5,
capital_protection:false,
recommended:true,

investments_type: 'stocks',
less_risky: false,
currency_investments: true,

description:"Акции крупных российских <br>и мировых компаний",
buy_link:"/individual/pifs/opifa_akliq/",
css_class:"opifa_akliq",
isYandexCounter:{
    enabled: true,
    target_from_online: 'glawnaya_likvidnie_akzii_otkrit_online',
    target_from_more_btn: 'glawnaya_likvidnie_akzii_uznat_bolshe',
    target_from_inner_online: 'PIFs_likvidnie_akzii_otkrit_online',
    target_from_inner_more_btn: 'PIFs_likvidnie_akzii_uznat_bolshe'
},
online_buying: {
    enabled: true,
    id: 2867829941
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=liquid_akzii&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Ликвидные акции»",
    reg_date: "18 августа 2005 г.",
    reg_org: "ФСФР России",
    reg_num: "0387-78483850"
}
},

{
name:"Альфа-Капитал <br>Технологии",
currency:"RUR", min:100, max:10000000,
pif_alias:"opifa_akt",
alias:"opifa_akt",
pif_type:"industry",
years:[],
risk:5,
risklevel:4,
profitlevel:5,
capital_protection:false,
recommended:true,

investments_type: 'stocks',
less_risky: false,
currency_investments: true,

description:"Акции мировых <br>лидеров Hi-Tech",
buy_link:"/individual/pifs/opifa_akt/",
css_class:"opifa_akt",
isYandexCounter:{
    enabled: true,
    target_from_online: 'glawnaya_technologii_otkrit_online',
    target_from_more_btn: 'glawnaya_technologii_uznat_bolshe',
    target_from_inner_online: 'PIFs_technologii_otkrit_online',
    target_from_inner_more_btn: 'PIFs_technologii_uznat_bolshe'
},
online_buying: {
    enabled: true,
    id: 49064047
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=technoligies&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Технологии»",
    reg_date: "12 декабря 2006 г.",
    reg_org: "ФСФР России",
    reg_num: "0699-94121833"
}
},
{
name:"Альфа-Капитал <br>Ресурсы",
currency:"RUR", min:100, max:10000000,
pif_alias:"opifa_akn",
alias:"opifa_akn",
pif_type:"industry",
years:[],
risk:5,
risklevel:4,
profitlevel:5,
capital_protection:false,
recommended:true,

investments_type: 'stocks',
less_risky: false,
currency_investments: true,

description:"Акции компаний <br>нефтегазового сектора",
buy_link:"/individual/pifs/opifa_akn/",
css_class:"opifa_akn",
online_buying: {
    enabled: true,
    id: 49064046
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=resursi&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Ресурсы»",
    reg_date: "12 декабря 2006 г.",
    reg_org: "ФСФР России",
    reg_num: "0698-94121750"
}
},
{
name:"Альфа-Капитал <br>Бренды",
currency:"RUR", min:100, max:10000000,
pif_alias:"opifa_akf",
alias:"opifa_akf",
pif_type:"industry",
years:[],
risk:5,
risklevel:4,
profitlevel:4.5,
capital_protection:false,
recommended:true,

investments_type: 'stocks',
less_risky: false,
currency_investments: true,

description:"Акции мировых компаний <br>с сильным брендом",
buy_link:"/individual/pifs/opifa_akf/",
css_class:"opifa_akf",
online_buying: {
    enabled: false,
    id: 49064054
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=brends&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Бренды»",
    reg_date: "7 августа 2007 г.",
    reg_org: "ФСФР России",
    reg_num: "0909-94126641"
}
},

{
name:"Альфа-Капитал <br>Глобальный баланс",
currency:"RUR", min:100, max:10000000,
pif_alias:"opifa_akps",
alias:"opifa_akps",
pif_type:"industry",
years:[],
risk:4,
risklevel:4,
profitlevel:4.5,
capital_protection:false,
recommended:true,

investments_type: 'mixed',
less_risky: false,
currency_investments: true,

description:"Инвестиции в&nbsp;акции и&nbsp;облигации <br>крупнейших компаний мира",
buy_link:"/individual/pifs/opifa_akps/",
css_class:"opifa_akps",
online_buying: {
    enabled: true,
    id: 49064052
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=torgovlya&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Глобальный баланс»",
    reg_date: "7 августа 2007 г.",
    reg_org: "ФСФР России",
    reg_num: "0907-94126486"
}
},
/* --{
name:"Альфа-Капитал <br>Инфраструктура",
currency:"RUR", min:100, max:10000000,
pif_alias:"opifa_ake",
alias:"opifa_ake",
pif_type:"industry",
years:[],
risk:5,
risklevel:5,
profitlevel:4.5,
recommended:true,
capital_protection:false,

investments_type: 'stocks',
less_risky: false,
currency_investments: true,

description:"Акции компаний <br>энергетического сектора",
buy_link:"/individual/pifs/opifa_ake/",
css_class:"opifa_ake",
online_buying: {
    // выключен с 15.11.2018 на время измений (по информации от клиента фонды объединяются)
    enabled: false,
    id: 49064048
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=infrastructur&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Инфраструктура»",
    reg_date: "12 декабря 2006 г.",
    reg_org: "ФСФР России",
    reg_num: "0703-94122554"
}
},
-- */
{
name:"Альфа-Капитал <br>Золото",
currency:"RUR", min:100, max:10000000,
pif_alias:"opifa_akg",
alias:"opifa_akg",
pif_type:"special",
years:[],
risk:3,
risklevel:3,
profitlevel:3,
recommended:true,
capital_protection:false,

investments_type: undefined,
less_risky: false,
currency_investments: true,

description:"Паи фондов <br>на драгоценные металлы",
buy_link:"/individual/pifs/opifa_akg/",
css_class:"opifa_akg",
online_buying: {
    enabled: true,
    id: 49064053
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=zoloto&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Золото»",
    reg_date: "7 августа 2007 г.",
    reg_org: "ФСФР России",
    reg_num: "0908-94126724"
}
},
/* --{
name:"Альфа-Капитал <br>Стратегические инвестиции",
currency:"RUR", min:50000000, max:100000000,
pif_alias:"opifsi_fpr",
alias:"opifsi_fpr",
pif_type:"special",
years:[],
risk:0,
risklevel:2,
profitlevel:3,
capital_protection:false,
recommended:false,

investments_type: undefined,
less_risky: undefined,
currency_investments: undefined,

description:"Инвестиции в долгосрочные <br>рублевые облигации",
buy_link:"/individual/pifs/opifsi_fpr/",
css_class:"opifsi_fpr",

disclaimer: {
    full_name: "Открытый паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал Стратегические Инвестиции»",
    reg_date: "5 июля 2007 г.",
    reg_org: "ФСФР России",
    reg_num: "0888-94124636"
}
}, -- */
{
name:"Альфа-Капитал",
currency:"RUR", min:1000, max:10000000,
pif_alias:"ipifsi_ak",
alias:"ipifsi_ak",
pif_type:"special",
years:[],
risk:0,
risklevel:4,
profitlevel:4,
capital_protection:false,
recommended:false,

investments_type: undefined,
less_risky: undefined,
currency_investments: undefined,

description:"Ликвидные акции <br>и корпоративные облигации",
buy_link:"/individual/pifs/ipifsi_ak/",
css_class:"ipifsi_ak",

disclaimer: {
    full_name: "Интервальный паевой инвестиционный фонд рыночных финансовых инструментов «Альфа-Капитал»",
    reg_date: "5 апреля 1999 г.",
    reg_org: "ФКЦБ России",
    reg_num: "0034-18810975"
}
},

{
name:"инвестиционный счет <br>Наше будущее",
currency:"RUR", min:10000, max:1000000,
tax:0.13,
years:[],
risk:1,
risklevel:1,
profitlevel:3,
capital_protection:false,
recommended:true,

investments_type: 'bonds',
less_risky: true,
currency_investments: false,

description:"Инвестиции в государственные <br>ценные бумаги",
buy_link:"/individual/iis/future/",
css_class:"future",
iis_alias:"future",
alias:"future",
isYandexCounter:{
    enabled: true,
    target_from_online: 'glawnaya_budushee_otkrit_online',
    target_from_more_btn: 'glawnaya_budushee_uznat_bolshe',
    target_from_inner_online: 'IIS_budushee_otkrit_online',
    target_from_inner_more_btn: 'IIS_budushee_uznat_bolshe',
    target_from_stand_online: 'nFuture_open_online',
    target_from_stand_more_btn: 'nFuture_more_info'
},
online_buying: {
    enabled: true,
    id: 3160242813
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=nFuture_read&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Индивидуальный инвестиционный счет «Наше будущее»"
}
},
{
name:"инвестиционный счет <br>Новые горизонты",
currency:"RUR", min:10000, max:1000000,
tax:0.13,
years:[],
risk:1,
risklevel:2,
profitlevel:3.5,
capital_protection:false,
recommended:true,

investments_type: 'bonds',
less_risky: true,
currency_investments: false,

description:"Облигации российских <br>хозяйственных обществ",
buy_link:"/individual/iis/new-horizons/",
css_class:"new-horizons",
iis_alias:"new-horizons",
alias:"new-horizons",
isYandexCounter:{
    enabled: true,
    target_from_online: 'glawnaya_New_Gorizonts_otkrit_online',
    target_from_more_btn: 'glawnaya_New_Gorizonts_uznat_bolshe',
    target_from_inner_online: 'IIS_New_Gorizonts_otkrit_online',
    target_from_inner_more_btn: 'IIS_New_Gorizonts_uznat_bolshe',
    target_from_stand_online: 'nGorizonts_open_online',
    target_from_stand_more_btn: 'nGorizonts_more_info'
},
online_buying: {
    enabled: true,
    id: 3160242814
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=nGorizonts_read&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Индивидуальный инвестиционный счет «Новые горизонты»"
}
},
{
name:"инвестиционный счет <br>Точки роста",
currency:"RUR", min:10000, max:1000000,
tax:0.13,
years:[],
risk:4,
risklevel:4,
profitlevel:5,
capital_protection:false,
recommended:true,

investments_type: 'stocks',
less_risky: true,
currency_investments: false,

description:"Акции крупных <br>российских эмитентов",
buy_link:"/individual/iis/growth/",
css_class:"growth",
iis_alias:"growth",
alias:"growth",
isYandexCounter:{
    enabled: true,
    target_from_online: 'glawnaya_tochki_rosta_otkrit_online',
    target_from_more_btn: 'glawnaya_tochki_rosta_uznat_bolshe',
    target_from_inner_online: 'IIS_tochki_rosta_otkrit_online',
    target_from_inner_more_btn: 'IIS_tochki_rosta_uznat_bolshe',
    target_from_stand_online: 'tRosta_open_online',
    target_from_stand_more_btn: 'tRosta_more_info'
},
online_buying: {
    enabled: true,
    id: 3160242815
},
utm: {
    utm_more_btn: '?utm_source=SMM&utm_medium=cpc&utm_content=trosta_read&utm_campaign=poidempokurim'
},

disclaimer: {
    full_name: "Индивидуальный инвестиционный счет «Точки роста»"
}
},

// {
// 	name:"стратегия <br>Сбалансированная",
// 	currency:"RUR", min:5000000, max:100000000,
// 	years:[],
// 	risk:4,
// 	capital_protection:false,
// 	recommended:false, //true, // плохо смотрится на главной - дырки, отключено

//     investments_type: undefined,
//     less_risky: undefined,
//     currency_investments: undefined,

// 	description:"Компромисс между доходностью <br>и волатильностью стоимости портфеля",
// 	buy_link:"/individual/am/balans/",
// 	css_class:"am_balans",
// 	am_alias:"balans",
// 	alias:"balans",
// 	isYandexCounter:{
// 		enabled: true,
// 		target_from_online: 'glawnaya_Balans_otkrit_online',
// 		target_from_more_btn: 'glawnaya_Balans_uznat_bolshe',
// 		target_from_inner_online: 'DovUpr_Balans_otkrit_online',
// 		target_from_inner_more_btn: 'DovUpr_Balans_uznat_bolshe'
// 	},
//     ask_a_question_button: true,

//     disclaimer: {
//         full_name: "Стратегия Сбалансированная"
//     }
// },
{
name:"стратегия <br>Альфа Денежный поток",
currency:"RUR", min:500000, max:100000000,
//usd: { min: 15000, max: 50000 }, // доллары отключены
years:[],
risk:3,
risklevel:3,
profitlevel:3.5,
capital_protection:false,
recommended:false, //true, // плохо смотрится на главной - дырки, отключено

investments_type: 'mixed',
less_risky: true,
currency_investments: true,

description:"Инвестиции в ОФЗ <br>и корпоративные облигации",
buy_link:"/individual/am/moneyflow/",
css_class:"am_moneyflow",
am_alias:"moneyflow",
alias:"moneyflow",
isYandexCounter:{
    enabled: true,
    target_from_online: 'glawnaya_Denejnii_potok_otkrit_online',
    target_from_more_btn: 'glawnaya_Denejnii_potok_uznat_bolshe',
    target_from_inner_online: 'DovUpr_Denejnii_potok_otkrit_online',
    target_from_inner_more_btn: 'DovUpr_Denejnii_potok_uznat_bolshe'
},
online_buying: {
    enabled: true,
    id: 3206081729
},

disclaimer: {
    full_name: "Стратегия Альфа. Денежный поток"
}
},
{
name:"стратегия <br>Альфа. Государственные облигации",
currency:"RUR", min:100000, max:1000000000, // макс сумма не ограничена, но для калькулятора надо же (слайдер?)
years:[],
risk:1,
risklevel:2,
profitlevel:3.5,
capital_protection:false, 
recommended:false, 

skip_am_index: false,

investments_type: 'bonds',
less_risky: true,
currency_investments: false,

description:"Инвестиции в государственные <br>облигации",
buy_link:"/individual/am/bonds/",
css_class:"am_bonds",
am_alias:"bonds",
alias:"bonds",
isYandexCounter:{
    enabled: false
},
online_buying: {
    enabled: true, // вообще продается, но на online такой пока нет true,
    id: 3738906791
},

disclaimer: {
    full_name: "Стратегия Альфа. Государственные облигации"
}
},
{
name: "Альфа Технологии 100",
currency: "USD", min: 100, max:100000,
years:[],
risklevel:2.5,
profitlevel:3.5,
capital_protection: false,
recommended: false,
skip_am_index: false,
investments_type: 'bonds',
description: "Инвестиции в БПИФ Альфа Технологии 100",
buy_link:"/individual/am/alfa-tech-100/",
css_class:"am_alfa-tech-100",
am_alias:"alfa-tech-100",
alias:"alfa-tech-100",
online_buying: {
    enabled: true,
    id: 4911352316
},
disclaimer: {
    full_name: "Стратегия Альфа Технологии 100"
}
},
{
name: "Альфа. БПИФ S&P 500<sup>®</sup>",
currency: "USD", min: 100, max:100000,
years:[],
risklevel:2.5,
profitlevel:3.5,
capital_protection: false,
recommended: false,
skip_am_index: false,
investments_type: 'bonds',
description: "Инвестиции в Альфа. БПИФ S&P 500<sup>®</sup>",
buy_link:"/individual/am/alfa-bpif-sap500/",
css_class:"am_alfa-bpif-sap500",
am_alias:"alfa-bpif-sap500",

online_buying: {
    enabled: true,
    id: 2842336
},
disclaimer: {
    full_name: "Альфа. БПИФ S&P 500<sup>®</sup>"
}
},
{
name: "Альфа. ЕВРОПА 600",
currency: "USD", min: 100, max:100000,
years:[],
risklevel:2.5,
profitlevel:3.5,
capital_protection: false,
recommended: false,
skip_am_index: false,
investments_type: 'bonds',
description: "Инвестиции в Альфа. ЕВРОПА 600",
buy_link:"/individual/am/alfa-europa-600/",
css_class:"am_alfa-europa-600",
am_alias:"alfa-europa-600",
alias:"alfa-europa-600",
online_buying: {
    enabled: true,
    id: 7082839
},
disclaimer: {
    full_name: "Стратегия Альфа. ЕВРОПА 600"
}
},
{
pif_alias:"zpifn_akrf",
alias:"zpifn_akrf",
currency:"RUR", min: 305000, max: 30000000,
online_buying: {
    enabled: true,
    id: 11868197638
}
},
{
pif_alias:"bpif-ctrlbonds",
alias:"bpif-ctrlbonds",
currency:"RUR", min: 100, max: 300000,
online_buying: {
    enabled: false,
    id: null
}
},
{
iis_alias:"ctrlbonds",
alias:"ctrlbonds",
currency:"RUR", min: 100, max: 300000,
description:"Инвестиции в&nbsp;государственные, муниципальные <br/>и&nbsp;корпоративные облигации",
online_buying: {
    enabled: true,
    id: "10151513"
}
}

  ];

  var strategies = [];
  var strategies_filter_helper = new AKRecommendationsStrategiesFilterHelper(all_strategies);

  // инициализировать слайдер суммы инвестирования правильными значениями
  var initAmountSlider = function (minamount, curramount, maxamount) {
      console.log('initAmountSlider', minamount, curramount, maxamount);
      var slider = jQuery('.js-amount-slider');
      var inp = jQuery('.js-amount-value');
      var label_min = jQuery('.js-amount-label-min');
      var label_max = jQuery('.js-amount-label-max');

      var humanizeAmount = function (amount) {
          var amount = Number(amount);
          if (amount > 0) {
              var units = ['руб.', 'тыс.', 'млн.', 'млрд.'];
              var unit = units.shift();
              var tmp1 = Math.round(amount);
              var tmp2 = null;
              while (units.length > 0 && tmp1 >= 1000) {
                  if (tmp2 && tmp2 < 1000) {
                      break;
                  }
                  tmp2 = Math.round(tmp1 / 1000);
                  unit = units.shift();
                  tmp1 = tmp2;
              }
              return tmp1 + ' ' + unit;
          }
          else {
              return '0 руб.';
          }
      };

      if (curramount !== undefined && curramount != null) {
          inp.val(curramount);
      }

      label_min.html('');
      if (minamount !== undefined && minamount != null) {
          label_min.html(humanizeAmount(minamount));
      }
      label_max.html('');
      if (maxamount !== undefined && maxamount != null) {
          label_max.html(humanizeAmount(maxamount));
      }
  };

  jQuery(document).off('init.amountSlider').on('init.amountSlider', function (e, data) {
      if (data) {
          initAmountSlider(data.minamount, data.curramount, data.maxamount);
      }
  });

  //

  //
  strategies = strategies_filter_helper.strategies_for_main_index();
  //

  //
  // для обновления данных в тизере (самый выгодный ИИС и ПИФ)
  app.update_iis_teasers_choose_best_iis(strategies_filter_helper);
  app.update_pif_teasers_choose_best_pif(strategies_filter_helper);
  //

  //

  //

  //

  //

  //

  if (true) {
    var min = null,
        max = null;

    for (var i=0, l=strategies.length; i<l; i++) {
      var strategy = strategies[i];
      var _min = Number(strategy.min);
      var _max = Number(strategy.max);
      if (_min && (min == null || _min < min)) {
        min = _min;
      }

      if (_max && (max == null || _max > max)) {
        max = _max;
      }
    }
    initAmountSlider(min, null, max);
  }

  app.recommendations.initCalc(strategies, {
    type: 'list',
    use_main_index_hack: false,
    slider_selector: '.js-amount-slider',
    $amountValue: $('.js-amount-value'),
    $yearsSelector: $('.js-years-selector'),
    //getYears: function () {return Number($('.js-years-selector').val())+1},
    getYears: function () {return Number($('.js-years-selector').val())},
    //
    //
    //
    $currencySelector: $('.js-currency-selector'),
    getCurrency: function () {return 'RUR'},
//
    $investmentsTypeSelector: $('.js-investments-type-selector'), // TODO: add html object with this selector
    $lessRiskySelector: $('.js-less-risky-selector'), // TODO: add html object with this selector
    $currencyInvestmentsSelector: $('.js-currency-investments-selector'), // TODO: add html object with this selector
    precalc: JSON.parse("{\"USD\":{\"global-dividends-usd\":{\"type\":\"mc\",\"precalc\":{\"amiis\":{\"3\":{\"rounded_percents\":2,\"sell_price\":\"1.02432\",\"sell_date\":\"20200430\",\"buy_price\":\"1.00760\",\"buy_date\":\"20170428\"},\"1\":{\"buy_price\":\"1.09100\",\"buy_date\":\"20190430\",\"rounded_percents\":-6,\"sell_price\":\"1.02432\",\"sell_date\":\"20200430\"},\"2\":{\"rounded_percents\":-5,\"sell_price\":\"1.02432\",\"sell_date\":\"20200430\",\"buy_date\":\"20180428\",\"buy_price\":\"1.08412\"}}}},\"cloud-tech-dollars\":{\"precalc\":{\"amiis\":{\"2\":{\"buy_price\":\"1.08198\",\"buy_date\":\"20180428\",\"rounded_percents\":35,\"sell_price\":\"1.46060\",\"sell_date\":\"20200430\"},\"1\":{\"buy_price\":\"1.50842\",\"buy_date\":\"20190430\",\"sell_date\":\"20200430\",\"sell_price\":\"1.46060\",\"rounded_percents\":-3}}},\"type\":\"mc\"},\"opifo_akbond\":{\"precalc\":{\"pifs_w_i\":{\"3\":{\"sell_price\":\"74.6015538415667\",\"sell_date\":\"20200529\",\"rounded_percents\":15,\"buy_rate\":\"56.5168\",\"sell_rate\":\"71.1012\",\"buy_date\":\"20170531\",\"buy_price\":\"65.0657857486623\"},\"1\":{\"buy_rate\":\"65.0583\",\"rounded_percents\":7,\"sell_price\":\"74.6015538415667\",\"sell_date\":\"20200529\",\"buy_date\":\"20190531\",\"buy_price\":\"69.5371689699854\",\"sell_rate\":\"71.1012\"},\"4\":{\"rounded_percents\":23,\"sell_price\":\"74.6015538415667\",\"sell_date\":\"20200529\",\"buy_rate\":\"66.0825\",\"sell_rate\":\"71.1012\",\"buy_price\":\"60.641924866644\",\"buy_date\":\"20160531\"},\"5\":{\"buy_rate\":\"52.2907\",\"rounded_percents\":31,\"sell_date\":\"20200529\",\"sell_price\":\"74.6015538415667\",\"buy_price\":\"56.8887010500911\",\"buy_date\":\"20150529\",\"sell_rate\":\"71.1012\"},\"2\":{\"buy_price\":\"64.224195086726\",\"buy_date\":\"20180531\",\"sell_rate\":\"71.1012\",\"buy_rate\":\"62.5937\",\"rounded_percents\":16,\"sell_date\":\"20200529\",\"sell_price\":\"74.6015538415667\"}},\"pifs_wo_i\":{\"2\":{\"sell_rate\":\"71.1012\",\"buy_date\":\"20180531\",\"buy_price\":\"64.224195086726\",\"rounded_percents\":16,\"sell_date\":\"20200529\",\"sell_price\":\"74.6015538415667\",\"buy_rate\":\"62.5937\"},\"4\":{\"sell_rate\":\"71.1012\",\"buy_price\":\"60.641924866644\",\"buy_date\":\"20160531\",\"sell_date\":\"20200529\",\"sell_price\":\"74.6015538415667\",\"rounded_percents\":23,\"buy_rate\":\"66.0825\"},\"5\":{\"sell_date\":\"20200529\",\"sell_price\":\"74.6015538415667\",\"rounded_percents\":31,\"buy_rate\":\"52.2907\",\"sell_rate\":\"71.1012\",\"buy_price\":\"56.8887010500911\",\"buy_date\":\"20150529\"},\"3\":{\"buy_rate\":\"56.5168\",\"sell_price\":\"74.6015538415667\",\"sell_date\":\"20200529\",\"rounded_percents\":15,\"buy_price\":\"65.0657857486623\",\"buy_date\":\"20170531\",\"sell_rate\":\"71.1012\"},\"1\":{\"buy_rate\":\"65.0583\",\"rounded_percents\":7,\"sell_date\":\"20200529\",\"sell_price\":\"74.6015538415667\",\"buy_date\":\"20190531\",\"buy_price\":\"69.5371689699854\",\"sell_rate\":\"71.1012\"}},\"amiis\":{\"3\":{\"rounded_percents\":1,\"sell_price\":\"65.1210240247001\",\"sell_date\":\"20200331\",\"buy_rate\":\"56.3779\",\"sell_rate\":\"77.7325\",\"buy_price\":\"64.6020869879864\",\"buy_date\":\"20170331\"},\"1\":{\"rounded_percents\":-5,\"sell_price\":\"65.1210240247001\",\"sell_date\":\"20200331\",\"buy_rate\":\"64.8012\",\"sell_rate\":\"77.7325\",\"buy_date\":\"20190329\",\"buy_price\":\"69.126189021191\"},\"2\":{\"buy_rate\":\"57.7626\",\"sell_date\":\"20200331\",\"sell_price\":\"65.1210240247001\",\"rounded_percents\":0,\"buy_date\":\"20180330\",\"buy_price\":\"65.6656729440849\",\"sell_rate\":\"77.7325\"},\"5\":{\"buy_rate\":\"58.4643\",\"sell_date\":\"20200331\",\"sell_price\":\"65.1210240247001\",\"rounded_percents\":21,\"buy_price\":\"53.7067920081143\",\"buy_date\":\"20150331\",\"sell_rate\":\"77.7325\"},\"4\":{\"buy_date\":\"20160331\",\"buy_price\":\"59.1008998988279\",\"sell_rate\":\"77.7325\",\"buy_rate\":\"67.6076\",\"rounded_percents\":10,\"sell_price\":\"65.1210240247001\",\"sell_date\":\"20200331\"}}},\"share_price_table\":{\"amiis\":{\"1y\":{\"date_end\":\"20200331\",\"rate_beg\":\"64.8012\",\"price_beg\":\"69.126189021191\",\"direction.text\":\"down\",\"rate_end\":\"77.7325\",\"percent.readable\":\"5,79%\",\"date_end.readable\":\"31.03.2020\",\"price_end\":\"65.1210240247001\",\"percent\":\"-5.79399075508125\",\"direction\":-1,\"date_beg.readable\":\"29.03.2019\",\"date_beg\":\"20190329\",\"direction:down\":1},\"3m\":{\"direction:down\":1,\"direction\":-1,\"date_beg\":\"20191231\",\"date_beg.readable\":\"31.12.2019\",\"rate_beg\":\"61.9057\",\"date_end\":\"20200331\",\"percent\":\"-14.8324669015817\",\"price_end\":\"65.1210240247001\",\"percent.readable\":\"14,83%\",\"rate_end\":\"77.7325\",\"date_end.readable\":\"31.03.2020\",\"direction.text\":\"down\",\"price_beg\":\"76.4622643795321\"},\"1m\":{\"direction:down\":1,\"direction\":-1,\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"rate_beg\":\"65.6097\",\"date_end\":\"20200331\",\"percent\":\"-15.39580945352\",\"price_end\":\"65.1210240247001\",\"rate_end\":\"77.7325\",\"percent.readable\":\"15,40%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"76.9713929495181\",\"direction.text\":\"down\"},\"all\":{\"percent\":\"85.6843124914049\",\"price_end\":\"65.1210240247001\",\"percent.readable\":\"85,68%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"rate_end\":\"77.7325\",\"direction.text\":\"up\",\"price_beg\":\"35.0708272950886\",\"rate_beg\":\"28.4989\",\"date_end\":\"20200331\",\"date_beg.readable\":\"30.09.2005\",\"direction\":1,\"date_beg\":\"20050930\"},\"date.readable\":\"31.03.2020\",\"3y\":{\"date_end\":\"20200331\",\"rate_beg\":\"56.3779\",\"price_beg\":\"64.6020869879864\",\"direction.text\":\"up\",\"rate_end\":\"77.7325\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"0,80%\",\"price_end\":\"65.1210240247001\",\"percent\":\"0.803282098301267\",\"date_beg.readable\":\"31.03.2017\",\"date_beg\":\"20170331\",\"direction\":1},\"6m\":{\"date_beg\":\"20190930\",\"date_beg.readable\":\"30.09.2019\",\"direction\":-1,\"direction:down\":1,\"rate_beg\":\"64.4156\",\"date_end\":\"20200331\",\"rate_end\":\"77.7325\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"10,80%\",\"price_beg\":\"73.0017262899049\",\"direction.text\":\"down\",\"percent\":\"-10.7952269512093\",\"price_end\":\"65.1210240247001\"},\"date\":\"20200331\"},\"pifs_w_i\":{\"all\":{\"date_beg.readable\":\"30.09.2005\",\"direction\":1,\"date_beg\":\"20050930\",\"rate_beg\":\"28.4989\",\"date_end\":\"20200529\",\"rate_end\":\"71.1012\",\"percent.readable\":\"112,72%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"35.0708272950886\",\"percent\":\"112.716837273327\",\"price_end\":\"74.6015538415667\"},\"1m\":{\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1,\"date_end\":\"20200529\",\"rate_beg\":\"73.6894\",\"price_end\":\"74.6015538415667\",\"percent\":\"10.9418013218277\",\"price_beg\":\"67.2438641107133\",\"direction.text\":\"up\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"10,94%\",\"direction:up\":1,\"rate_end\":\"71.1012\"},\"1y\":{\"date_beg.readable\":\"31.05.2019\",\"direction\":1,\"date_beg\":\"20190531\",\"percent\":\"7.28298990716748\",\"price_end\":\"74.6015538415667\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"7,28%\",\"rate_end\":\"71.1012\",\"price_beg\":\"69.5371689699854\",\"direction.text\":\"up\",\"rate_beg\":\"65.0583\",\"date_end\":\"20200529\"},\"3m\":{\"price_beg\":\"76.9713929495181\",\"direction.text\":\"down\",\"percent.readable\":\"3,08%\",\"rate_end\":\"71.1012\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"74.6015538415667\",\"percent\":\"-3.07885684230764\",\"date_end\":\"20200529\",\"rate_beg\":\"65.6097\",\"direction\":-1,\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction:down\":1},\"date\":\"20200529\",\"6m\":{\"direction\":1,\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"percent\":\"0.292928569543548\",\"price_end\":\"74.6015538415667\",\"percent.readable\":\"0,29%\",\"rate_end\":\"71.1012\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"74.3836631539536\",\"direction.text\":\"up\",\"rate_beg\":\"64.1005\",\"date_end\":\"20200529\"},\"3y\":{\"date_end\":\"20200529\",\"rate_beg\":\"56.5168\",\"price_end\":\"74.6015538415667\",\"percent\":\"14.6555795084071\",\"direction.text\":\"up\",\"price_beg\":\"65.0657857486623\",\"direction:up\":1,\"percent.readable\":\"14,66%\",\"rate_end\":\"71.1012\",\"date_end.readable\":\"29.05.2020\",\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"date_beg\":\"20170531\"},\"date.readable\":\"29.05.2020\"},\"pifs_wo_i\":{\"all\":{\"direction\":1,\"date_beg\":\"20050930\",\"date_beg.readable\":\"30.09.2005\",\"price_beg\":\"35.0708272950886\",\"direction.text\":\"up\",\"percent.readable\":\"112,72%\",\"rate_end\":\"71.1012\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_end\":\"74.6015538415667\",\"percent\":\"112.716837273327\",\"date_end\":\"20200529\",\"rate_beg\":\"28.4989\"},\"1m\":{\"rate_beg\":\"73.6894\",\"date_end\":\"20200529\",\"percent\":\"10.9418013218277\",\"price_end\":\"74.6015538415667\",\"rate_end\":\"71.1012\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"10,94%\",\"price_beg\":\"67.2438641107133\",\"direction.text\":\"up\",\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1},\"1y\":{\"date_end\":\"20200529\",\"rate_beg\":\"65.0583\",\"price_end\":\"74.6015538415667\",\"percent\":\"7.28298990716748\",\"direction.text\":\"up\",\"price_beg\":\"69.5371689699854\",\"percent.readable\":\"7,28%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"rate_end\":\"71.1012\",\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\",\"direction\":1},\"3m\":{\"price_beg\":\"76.9713929495181\",\"direction.text\":\"down\",\"percent.readable\":\"3,08%\",\"date_end.readable\":\"29.05.2020\",\"rate_end\":\"71.1012\",\"price_end\":\"74.6015538415667\",\"percent\":\"-3.07885684230764\",\"date_end\":\"20200529\",\"rate_beg\":\"65.6097\",\"direction\":-1,\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction:down\":1},\"date\":\"20200529\",\"6m\":{\"percent\":\"0.292928569543548\",\"price_end\":\"74.6015538415667\",\"percent.readable\":\"0,29%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"rate_end\":\"71.1012\",\"price_beg\":\"74.3836631539536\",\"direction.text\":\"up\",\"rate_beg\":\"64.1005\",\"date_end\":\"20200529\",\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction\":1},\"3y\":{\"date_beg.readable\":\"31.05.2017\",\"date_beg\":\"20170531\",\"direction\":1,\"price_end\":\"74.6015538415667\",\"percent\":\"14.6555795084071\",\"price_beg\":\"65.0657857486623\",\"direction.text\":\"up\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"rate_end\":\"71.1012\",\"percent.readable\":\"14,66%\",\"date_end\":\"20200529\",\"rate_beg\":\"56.5168\"},\"date.readable\":\"29.05.2020\"}}},\"alfa-tech-100\":{\"precalc\":{\"amiis\":{\"1\":{\"sell_date\":\"20200430\",\"sell_price\":\"1.28523\",\"rounded_percents\":22,\"buy_price\":\"1.05398\",\"buy_date\":\"20190430\"}}},\"type\":\"am\"},\"alfa-eurobonds-usd-2\":{\"precalc\":{\"amiis\":{\"1\":{\"rounded_percents\":-7,\"sell_price\":\"1.04983\",\"sell_date\":\"20200430\",\"buy_price\":\"1.13844\",\"buy_date\":\"20190430\"}}},\"type\":\"mc\"},\"opifa_akt\":{\"precalc\":{\"pifs_wo_i\":{\"3\":{\"sell_rate\":\"71.1012\",\"buy_date\":\"20170531\",\"buy_price\":\"42.5133765535204\",\"rounded_percents\":34,\"sell_price\":\"57.1019898398339\",\"sell_date\":\"20200529\",\"buy_rate\":\"56.5168\"},\"1\":{\"buy_price\":\"45.6289205220548\",\"buy_date\":\"20190531\",\"sell_rate\":\"71.1012\",\"buy_rate\":\"65.0583\",\"sell_date\":\"20200529\",\"sell_price\":\"57.1019898398339\",\"rounded_percents\":25},\"2\":{\"sell_rate\":\"71.1012\",\"buy_price\":\"53.0245056611129\",\"buy_date\":\"20180531\",\"rounded_percents\":8,\"sell_price\":\"57.1019898398339\",\"sell_date\":\"20200529\",\"buy_rate\":\"62.5937\"},\"4\":{\"rounded_percents\":69,\"sell_date\":\"20200529\",\"sell_price\":\"57.1019898398339\",\"buy_rate\":\"66.0825\",\"sell_rate\":\"71.1012\",\"buy_price\":\"33.7700601520826\",\"buy_date\":\"20160531\"},\"5\":{\"buy_date\":\"20150529\",\"buy_price\":\"36.2932605606733\",\"sell_rate\":\"71.1012\",\"buy_rate\":\"52.2907\",\"sell_date\":\"20200529\",\"sell_price\":\"57.1019898398339\",\"rounded_percents\":57}},\"pifs_w_i\":{\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"45.6289205220548\",\"sell_rate\":\"71.1012\",\"buy_rate\":\"65.0583\",\"rounded_percents\":25,\"sell_date\":\"20200529\",\"sell_price\":\"57.1019898398339\"},\"3\":{\"sell_rate\":\"71.1012\",\"buy_price\":\"42.5133765535204\",\"buy_date\":\"20170531\",\"rounded_percents\":34,\"sell_date\":\"20200529\",\"sell_price\":\"57.1019898398339\",\"buy_rate\":\"56.5168\"},\"5\":{\"buy_price\":\"36.2932605606733\",\"buy_date\":\"20150529\",\"sell_rate\":\"71.1012\",\"buy_rate\":\"52.2907\",\"sell_price\":\"57.1019898398339\",\"sell_date\":\"20200529\",\"rounded_percents\":57},\"4\":{\"buy_price\":\"33.7700601520826\",\"buy_date\":\"20160531\",\"sell_rate\":\"71.1012\",\"buy_rate\":\"66.0825\",\"sell_price\":\"57.1019898398339\",\"sell_date\":\"20200529\",\"rounded_percents\":69},\"2\":{\"sell_price\":\"57.1019898398339\",\"sell_date\":\"20200529\",\"rounded_percents\":8,\"buy_rate\":\"62.5937\",\"sell_rate\":\"71.1012\",\"buy_price\":\"53.0245056611129\",\"buy_date\":\"20180531\"}},\"amiis\":{\"2\":{\"buy_price\":\"51.3219626540357\",\"buy_date\":\"20180330\",\"sell_rate\":\"77.7325\",\"buy_rate\":\"57.7626\",\"sell_date\":\"20200331\",\"sell_price\":\"49.1762132955971\",\"rounded_percents\":-4},\"5\":{\"sell_date\":\"20200331\",\"sell_price\":\"49.1762132955971\",\"rounded_percents\":41,\"buy_rate\":\"58.4643\",\"sell_rate\":\"77.7325\",\"buy_price\":\"34.9934917547974\",\"buy_date\":\"20150331\"},\"4\":{\"sell_price\":\"49.1762132955971\",\"sell_date\":\"20200331\",\"rounded_percents\":50,\"buy_rate\":\"67.6076\",\"sell_rate\":\"77.7325\",\"buy_price\":\"32.7446914252244\",\"buy_date\":\"20160331\"},\"3\":{\"sell_date\":\"20200331\",\"sell_price\":\"49.1762132955971\",\"rounded_percents\":23,\"buy_rate\":\"56.3779\",\"sell_rate\":\"77.7325\",\"buy_date\":\"20170331\",\"buy_price\":\"39.8189716183114\"},\"1\":{\"buy_date\":\"20190329\",\"buy_price\":\"49.0052653345926\",\"sell_rate\":\"77.7325\",\"buy_rate\":\"64.8012\",\"rounded_percents\":0,\"sell_price\":\"49.1762132955971\",\"sell_date\":\"20200331\"}}},\"share_price_table\":{\"pifs_wo_i\":{\"date.readable\":\"29.05.2020\",\"3y\":{\"date_beg\":\"20170531\",\"direction\":1,\"date_beg.readable\":\"31.05.2017\",\"rate_beg\":\"56.5168\",\"date_end\":\"20200529\",\"percent\":\"34.3153473787792\",\"price_end\":\"57.1019898398339\",\"percent.readable\":\"34,32%\",\"rate_end\":\"71.1012\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"42.5133765535204\"},\"6m\":{\"date_end\":\"20200529\",\"rate_beg\":\"64.1005\",\"direction.text\":\"up\",\"price_beg\":\"52.7871077448694\",\"percent.readable\":\"8,17%\",\"rate_end\":\"71.1012\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_end\":\"57.1019898398339\",\"percent\":\"8.17412084784036\",\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction\":1},\"date\":\"20200529\",\"3m\":{\"date_end\":\"20200529\",\"rate_beg\":\"65.6097\",\"direction.text\":\"up\",\"price_beg\":\"51.9679254744344\",\"rate_end\":\"71.1012\",\"percent.readable\":\"9,88%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_end\":\"57.1019898398339\",\"percent\":\"9.87929573866958\",\"date_beg\":\"20200228\",\"direction\":1,\"date_beg.readable\":\"28.02.2020\"},\"1y\":{\"direction\":1,\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\",\"date_end\":\"20200529\",\"rate_beg\":\"65.0583\",\"direction.text\":\"up\",\"price_beg\":\"45.6289205220548\",\"direction:up\":1,\"percent.readable\":\"25,14%\",\"rate_end\":\"71.1012\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"57.1019898398339\",\"percent\":\"25.1442917091991\"},\"1m\":{\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1,\"date_end\":\"20200529\",\"rate_beg\":\"73.6894\",\"direction.text\":\"up\",\"price_beg\":\"55.1548798063222\",\"percent.readable\":\"3,53%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"rate_end\":\"71.1012\",\"price_end\":\"57.1019898398339\",\"percent\":\"3.53025879124387\"},\"all\":{\"price_beg\":\"37.9332321699545\",\"direction.text\":\"up\",\"percent.readable\":\"50,53%\",\"direction:up\":1,\"rate_end\":\"71.1012\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"57.1019898398339\",\"percent\":\"50.532888945503\",\"date_end\":\"20200529\",\"rate_beg\":\"26.3600\",\"date_beg.readable\":\"27.12.2006\",\"date_beg\":\"20061227\",\"direction\":1}},\"pifs_w_i\":{\"1m\":{\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\",\"direction\":1,\"date_end\":\"20200529\",\"rate_beg\":\"73.6894\",\"direction.text\":\"up\",\"price_beg\":\"55.1548798063222\",\"date_end.readable\":\"29.05.2020\",\"rate_end\":\"71.1012\",\"percent.readable\":\"3,53%\",\"direction:up\":1,\"price_end\":\"57.1019898398339\",\"percent\":\"3.53025879124387\"},\"1y\":{\"price_beg\":\"45.6289205220548\",\"direction.text\":\"up\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"25,14%\",\"rate_end\":\"71.1012\",\"direction:up\":1,\"price_end\":\"57.1019898398339\",\"percent\":\"25.1442917091991\",\"date_end\":\"20200529\",\"rate_beg\":\"65.0583\",\"direction\":1,\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\"},\"3m\":{\"direction.text\":\"up\",\"price_beg\":\"51.9679254744344\",\"direction:up\":1,\"rate_end\":\"71.1012\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"9,88%\",\"price_end\":\"57.1019898398339\",\"percent\":\"9.87929573866958\",\"date_end\":\"20200529\",\"rate_beg\":\"65.6097\",\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":1},\"all\":{\"date_end\":\"20200529\",\"rate_beg\":\"26.3600\",\"price_end\":\"57.1019898398339\",\"percent\":\"50.532888945503\",\"direction.text\":\"up\",\"price_beg\":\"37.9332321699545\",\"percent.readable\":\"50,53%\",\"rate_end\":\"71.1012\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"date_beg\":\"20061227\",\"direction\":1,\"date_beg.readable\":\"27.12.2006\"},\"date.readable\":\"29.05.2020\",\"3y\":{\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"direction.text\":\"up\",\"price_beg\":\"42.5133765535204\",\"date_end.readable\":\"29.05.2020\",\"rate_end\":\"71.1012\",\"percent.readable\":\"34,32%\",\"direction:up\":1,\"price_end\":\"57.1019898398339\",\"percent\":\"34.3153473787792\",\"date_end\":\"20200529\",\"rate_beg\":\"56.5168\"},\"date\":\"20200529\",\"6m\":{\"direction.text\":\"up\",\"price_beg\":\"52.7871077448694\",\"percent.readable\":\"8,17%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"rate_end\":\"71.1012\",\"price_end\":\"57.1019898398339\",\"percent\":\"8.17412084784036\",\"date_end\":\"20200529\",\"rate_beg\":\"64.1005\",\"date_beg\":\"20191129\",\"date_beg.readable\":\"29.11.2019\",\"direction\":1}},\"amiis\":{\"date\":\"20200331\",\"6m\":{\"date_beg.readable\":\"30.09.2019\",\"direction\":1,\"date_beg\":\"20190930\",\"date_end\":\"20200331\",\"rate_beg\":\"64.4156\",\"price_end\":\"49.1762132955971\",\"percent\":\"2.25594229609217\",\"direction.text\":\"up\",\"price_beg\":\"48.0913008650079\",\"rate_end\":\"77.7325\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"2,26%\"},\"3y\":{\"direction\":1,\"date_beg\":\"20170331\",\"date_beg.readable\":\"31.03.2017\",\"percent\":\"23.4994539788722\",\"price_end\":\"49.1762132955971\",\"percent.readable\":\"23,50%\",\"rate_end\":\"77.7325\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"39.8189716183114\",\"direction.text\":\"up\",\"rate_beg\":\"56.3779\",\"date_end\":\"20200331\"},\"date.readable\":\"31.03.2020\",\"all\":{\"date_beg.readable\":\"27.12.2006\",\"date_beg\":\"20061227\",\"direction\":1,\"date_end\":\"20200331\",\"rate_beg\":\"26.3600\",\"price_end\":\"49.1762132955971\",\"percent\":\"29.6388691583148\",\"direction.text\":\"up\",\"price_beg\":\"37.9332321699545\",\"direction:up\":1,\"rate_end\":\"77.7325\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"29,64%\"},\"1m\":{\"price_beg\":\"51.9679254744344\",\"direction.text\":\"down\",\"rate_end\":\"77.7325\",\"percent.readable\":\"5,37%\",\"date_end.readable\":\"31.03.2020\",\"price_end\":\"49.1762132955971\",\"percent\":\"-5.37199051145491\",\"date_end\":\"20200331\",\"rate_beg\":\"65.6097\",\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":-1,\"direction:down\":1},\"1y\":{\"date_beg\":\"20190329\",\"direction\":1,\"date_beg.readable\":\"29.03.2019\",\"date_end\":\"20200331\",\"rate_beg\":\"64.8012\",\"price_end\":\"49.1762132955971\",\"percent\":\"0.34883598731686\",\"direction.text\":\"up\",\"price_beg\":\"49.0052653345926\",\"percent.readable\":\"0,35%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"rate_end\":\"77.7325\"},\"3m\":{\"direction:down\":1,\"date_beg.readable\":\"31.12.2019\",\"direction\":-1,\"date_beg\":\"20191231\",\"price_end\":\"49.1762132955971\",\"percent\":\"-9.77267789224048\",\"direction.text\":\"down\",\"price_beg\":\"54.5025740763775\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"9,77%\",\"rate_end\":\"77.7325\",\"date_end\":\"20200331\",\"rate_beg\":\"61.9057\"}}}},\"alfa-masterbond-usd\":{\"type\":\"mc\",\"precalc\":{\"amiis\":{\"2\":{\"buy_date\":\"20180428\",\"buy_price\":\"1.07181\",\"sell_date\":\"20200430\",\"sell_price\":\"1.03356\",\"rounded_percents\":-3},\"1\":{\"buy_date\":\"20190430\",\"buy_price\":\"1.14581\",\"rounded_percents\":-9,\"sell_date\":\"20200430\",\"sell_price\":\"1.03356\"},\"3\":{\"buy_date\":\"20170428\",\"buy_price\":\"1.03349\",\"sell_date\":\"20200430\",\"sell_price\":\"1.03356\",\"rounded_percents\":0}}}}},\"RUR\":{\"opifa_akf\":{\"share_price_table\":{\"amiis\":{\"1m\":{\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":0,\"price_end\":\"1179.26\",\"percent\":0,\"price_beg\":\"1179.26\",\"direction.text\":\"center\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"0,00%\",\"date_end\":\"20200331\"},\"3m\":{\"date_end\":\"20200331\",\"percent\":0,\"price_end\":\"1179.26\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"1179.26\",\"direction.text\":\"center\",\"direction\":0,\"date_beg.readable\":\"31.12.2019\",\"date_beg\":\"20191231\"},\"1y\":{\"direction.text\":\"up\",\"price_beg\":\"1009.30\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"percent.readable\":\"16,84%\",\"price_end\":\"1179.26\",\"percent\":\"16.8393936391559\",\"date_end\":\"20200331\",\"date_beg.readable\":\"29.03.2019\",\"date_beg\":\"20190329\",\"direction\":1},\"all\":{\"direction\":1,\"date_beg.readable\":\"28.08.2007\",\"date_beg\":\"20070828\",\"direction:up\":1,\"percent.readable\":\"17,99%\",\"date_end.readable\":\"31.03.2020\",\"direction.text\":\"up\",\"price_beg\":\"999.44\",\"percent\":\"17.9920755623149\",\"price_end\":\"1179.26\",\"date_end\":\"20200331\"},\"date.readable\":\"31.03.2020\",\"3y\":{\"date_beg.readable\":\"31.03.2017\",\"date_beg\":\"20170331\",\"direction\":1,\"date_end\":\"20200331\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"percent.readable\":\"65,58%\",\"direction.text\":\"up\",\"price_beg\":\"712.20\",\"percent\":\"65.5798932884021\",\"price_end\":\"1179.26\"},\"date\":\"20200331\",\"6m\":{\"date_end\":\"20200331\",\"price_end\":\"1179.26\",\"percent\":\"6.2118905871439\",\"price_beg\":\"1110.29\",\"direction.text\":\"up\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"6,21%\",\"direction:up\":1,\"date_beg.readable\":\"30.09.2019\",\"date_beg\":\"20190930\",\"direction\":1}},\"pifs_w_i\":{\"date\":\"20200529\",\"6m\":{\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction\":0,\"date_end\":\"20200529\",\"price_end\":\"1179.26\",\"percent\":0,\"direction.text\":\"center\",\"price_beg\":\"1179.26\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"29.05.2020\"},\"3y\":{\"direction\":1,\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\",\"percent\":\"58.5794201495347\",\"price_end\":\"1179.26\",\"percent.readable\":\"58,58%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"743.64\",\"date_end\":\"20200529\"},\"date.readable\":\"29.05.2020\",\"all\":{\"date_end\":\"20200529\",\"price_end\":\"1179.26\",\"percent\":\"17.9920755623149\",\"price_beg\":\"999.44\",\"direction.text\":\"up\",\"percent.readable\":\"17,99%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"date_beg.readable\":\"28.08.2007\",\"direction\":1,\"date_beg\":\"20070828\"},\"1m\":{\"direction\":0,\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"center\",\"price_beg\":\"1179.26\",\"percent\":0,\"price_end\":\"1179.26\",\"date_end\":\"20200529\"},\"1y\":{\"percent\":\"10.9307094613662\",\"price_end\":\"1179.26\",\"percent.readable\":\"10,93%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"1063.06\",\"date_end\":\"20200529\",\"direction\":1,\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\"},\"3m\":{\"date_beg\":\"20200228\",\"direction\":0,\"date_beg.readable\":\"28.02.2020\",\"date_end\":\"20200529\",\"price_end\":\"1179.26\",\"percent\":0,\"price_beg\":\"1179.26\",\"direction.text\":\"center\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\"}},\"pifs_wo_i\":{\"1y\":{\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1,\"price_beg\":\"1063.06\",\"direction.text\":\"up\",\"direction:up\":1,\"percent.readable\":\"10,93%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"1179.26\",\"percent\":\"10.9307094613662\",\"date_end\":\"20200529\"},\"3m\":{\"date_beg\":\"20200228\",\"direction\":0,\"date_beg.readable\":\"28.02.2020\",\"date_end\":\"20200529\",\"direction.text\":\"center\",\"price_beg\":\"1179.26\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"1179.26\",\"percent\":0},\"1m\":{\"price_end\":\"1179.26\",\"percent\":0,\"direction.text\":\"center\",\"price_beg\":\"1179.26\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\",\"date_end\":\"20200529\",\"direction\":0,\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\"},\"all\":{\"price_end\":\"1179.26\",\"percent\":\"17.9920755623149\",\"price_beg\":\"999.44\",\"direction.text\":\"up\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"17,99%\",\"direction:up\":1,\"date_end\":\"20200529\",\"date_beg.readable\":\"28.08.2007\",\"direction\":1,\"date_beg\":\"20070828\"},\"3y\":{\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"date_end\":\"20200529\",\"price_beg\":\"743.64\",\"direction.text\":\"up\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"58,58%\",\"price_end\":\"1179.26\",\"percent\":\"58.5794201495347\"},\"date.readable\":\"29.05.2020\",\"6m\":{\"date_end\":\"20200529\",\"percent\":0,\"price_end\":\"1179.26\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"1179.26\",\"direction.text\":\"center\",\"direction\":0,\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\"},\"date\":\"20200529\"}},\"precalc\":{\"pifs_wo_i\":{\"4\":{\"sell_date\":\"20200529\",\"sell_price\":\"1179.26\",\"rounded_percents\":59,\"buy_date\":\"20160531\",\"buy_price\":\"740.92\"},\"5\":{\"rounded_percents\":77,\"sell_date\":\"20200529\",\"sell_price\":\"1179.26\",\"buy_date\":\"20150529\",\"buy_price\":\"666.46\"},\"2\":{\"sell_price\":\"1179.26\",\"sell_date\":\"20200529\",\"rounded_percents\":21,\"buy_price\":\"976.12\",\"buy_date\":\"20180531\"},\"3\":{\"sell_date\":\"20200529\",\"sell_price\":\"1179.26\",\"rounded_percents\":59,\"buy_date\":\"20170531\",\"buy_price\":\"743.64\"},\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"1063.06\",\"rounded_percents\":11,\"sell_price\":\"1179.26\",\"sell_date\":\"20200529\"}},\"pifs_w_i\":{\"2\":{\"rounded_percents\":21,\"sell_date\":\"20200529\",\"sell_price\":\"1179.26\",\"buy_price\":\"976.12\",\"buy_date\":\"20180531\"},\"4\":{\"buy_price\":\"740.92\",\"buy_date\":\"20160531\",\"sell_date\":\"20200529\",\"sell_price\":\"1179.26\",\"rounded_percents\":59},\"5\":{\"buy_price\":\"666.46\",\"buy_date\":\"20150529\",\"sell_price\":\"1179.26\",\"sell_date\":\"20200529\",\"rounded_percents\":77},\"1\":{\"buy_price\":\"1063.06\",\"buy_date\":\"20190531\",\"sell_price\":\"1179.26\",\"sell_date\":\"20200529\",\"rounded_percents\":11},\"3\":{\"rounded_percents\":59,\"sell_price\":\"1179.26\",\"sell_date\":\"20200529\",\"buy_date\":\"20170531\",\"buy_price\":\"743.64\"}},\"amiis\":{\"2\":{\"sell_date\":\"20200331\",\"sell_price\":\"1179.26\",\"rounded_percents\":30,\"buy_date\":\"20180330\",\"buy_price\":\"910.14\"},\"4\":{\"buy_date\":\"20160331\",\"buy_price\":\"752.60\",\"sell_price\":\"1179.26\",\"sell_date\":\"20200331\",\"rounded_percents\":57},\"5\":{\"buy_date\":\"20150331\",\"buy_price\":\"672.89\",\"sell_price\":\"1179.26\",\"sell_date\":\"20200331\",\"rounded_percents\":75},\"3\":{\"sell_date\":\"20200331\",\"sell_price\":\"1179.26\",\"rounded_percents\":66,\"buy_price\":\"712.20\",\"buy_date\":\"20170331\"},\"1\":{\"buy_price\":\"1009.30\",\"buy_date\":\"20190329\",\"sell_price\":\"1179.26\",\"sell_date\":\"20200331\",\"rounded_percents\":17}}},\"type\":\"pif\"},\"zpifn_azimut\":{\"share_price_table\":{\"amiis\":{\"date\":\"20200331\",\"all\":{\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"direction\":-1,\"direction:down\":1,\"date_end\":\"20200331\",\"percent.readable\":\"6,76%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"3587.61\",\"direction.text\":\"down\",\"percent\":\"-6.75547230607563\",\"price_end\":\"3345.25\"},\"6m\":{\"direction\":-1,\"date_beg.readable\":\"30.09.2019\",\"date_beg\":\"20190930\",\"direction:down\":1,\"date_end\":\"20200331\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"2,19%\",\"direction.text\":\"down\",\"price_beg\":\"3420.29\",\"percent\":\"-2.19396600873026\",\"price_end\":\"3345.25\"},\"1m\":{\"percent\":\"-0.709672440608344\",\"price_end\":\"3345.25\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"0,71%\",\"direction.text\":\"down\",\"price_beg\":\"3369.16\",\"date_end\":\"20200331\",\"direction:down\":1,\"date_beg\":\"20200228\",\"direction\":-1,\"date_beg.readable\":\"28.02.2020\"},\"3m\":{\"date_beg\":\"20191231\",\"direction\":1,\"date_beg.readable\":\"31.12.2019\",\"date_end\":\"20200331\",\"percent.readable\":\"2,08%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"price_beg\":\"3277.08\",\"direction.text\":\"up\",\"percent\":\"2.08020554884226\",\"price_end\":\"3345.25\"},\"date.readable\":\"31.03.2020\"},\"pifs_w_i\":{\"1m\":{\"percent\":\"1.00157766410098\",\"price_end\":\"3380.24\",\"percent.readable\":\"1,00%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_beg\":\"3346.72\",\"direction.text\":\"up\",\"date_end\":\"20200529\",\"direction\":1,\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\"},\"date.readable\":\"29.05.2020\",\"1y\":{\"percent\":\"-5.78017120032557\",\"price_end\":\"3380.24\",\"percent.readable\":\"5,78%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"down\",\"price_beg\":\"3587.61\",\"date_end\":\"20200529\",\"direction:down\":1,\"direction\":-1,\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\"},\"3m\":{\"price_beg\":\"3369.16\",\"direction.text\":\"up\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"0,33%\",\"price_end\":\"3380.24\",\"percent\":\"0.328865355162719\",\"date_end\":\"20200529\",\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":1},\"date\":\"20200529\",\"6m\":{\"direction:down\":1,\"direction\":-1,\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"date_end\":\"20200529\",\"percent\":\"-1.47198563575205\",\"price_end\":\"3380.24\",\"percent.readable\":\"1,47%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"3430.74\",\"direction.text\":\"down\"},\"all\":{\"direction:down\":1,\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\",\"direction\":-1,\"percent\":\"-5.78017120032557\",\"price_end\":\"3380.24\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"5,78%\",\"direction.text\":\"down\",\"price_beg\":\"3587.61\",\"date_end\":\"20200529\"}},\"pifs_wo_i\":{\"1m\":{\"percent\":\"1.00157766410098\",\"price_end\":\"3380.24\",\"percent.readable\":\"1,00%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_beg\":\"3346.72\",\"direction.text\":\"up\",\"date_end\":\"20200529\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1,\"date_beg\":\"20200430\"},\"1y\":{\"date_end\":\"20200529\",\"price_end\":\"3380.24\",\"percent\":\"-5.78017120032557\",\"direction.text\":\"down\",\"price_beg\":\"3587.61\",\"percent.readable\":\"5,78%\",\"date_end.readable\":\"29.05.2020\",\"direction:down\":1,\"date_beg.readable\":\"31.05.2019\",\"direction\":-1,\"date_beg\":\"20190531\"},\"3m\":{\"price_end\":\"3380.24\",\"percent\":\"0.328865355162719\",\"price_beg\":\"3369.16\",\"direction.text\":\"up\",\"percent.readable\":\"0,33%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"date_end\":\"20200529\",\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":1},\"date.readable\":\"29.05.2020\",\"date\":\"20200529\",\"all\":{\"percent\":\"-5.78017120032557\",\"price_end\":\"3380.24\",\"percent.readable\":\"5,78%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"3587.61\",\"direction.text\":\"down\",\"date_end\":\"20200529\",\"direction:down\":1,\"date_beg.readable\":\"31.05.2019\",\"direction\":-1,\"date_beg\":\"20190531\"},\"6m\":{\"date_end\":\"20200529\",\"percent.readable\":\"1,47%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"3430.74\",\"direction.text\":\"down\",\"percent\":\"-1.47198563575205\",\"price_end\":\"3380.24\",\"date_beg.readable\":\"29.11.2019\",\"direction\":-1,\"date_beg\":\"20191129\",\"direction:down\":1}}},\"precalc\":{\"pifs_wo_i\":{\"1\":{\"sell_price\":\"3380.24\",\"sell_date\":\"20200529\",\"rounded_percents\":-5,\"buy_price\":\"3587.61\",\"buy_date\":\"20190531\"}},\"pifs_w_i\":{\"1\":{\"rounded_percents\":-5,\"sell_date\":\"20200529\",\"sell_price\":\"3380.24\",\"buy_date\":\"20190531\",\"buy_price\":\"3587.61\"}}},\"type\":\"pif\"},\"zpifn_act6\":{\"precalc\":{\"amiis\":{\"2\":{\"buy_date\":\"20180330\",\"buy_price\":\"304918.44\",\"rounded_percents\":2,\"sell_price\":\"312446.60\",\"sell_date\":\"20200331\"},\"1\":{\"sell_date\":\"20200331\",\"sell_price\":\"312446.60\",\"rounded_percents\":0,\"buy_price\":\"311811.31\",\"buy_date\":\"20190329\"}},\"pifs_w_i\":{\"1\":{\"sell_date\":\"20200529\",\"sell_price\":\"314760.06\",\"rounded_percents\":1,\"buy_price\":\"312172.17\",\"buy_date\":\"20190531\"},\"2\":{\"buy_price\":\"307462.79\",\"buy_date\":\"20180531\",\"rounded_percents\":2,\"sell_date\":\"20200529\",\"sell_price\":\"314760.06\"}},\"pifs_wo_i\":{\"2\":{\"rounded_percents\":2,\"sell_date\":\"20200529\",\"sell_price\":\"314760.06\",\"buy_price\":\"307462.79\",\"buy_date\":\"20180531\"},\"1\":{\"buy_price\":\"312172.17\",\"buy_date\":\"20190531\",\"rounded_percents\":1,\"sell_price\":\"314760.06\",\"sell_date\":\"20200529\"}}},\"type\":\"pif\",\"share_price_table\":{\"pifs_w_i\":{\"all\":{\"direction\":1,\"date_beg.readable\":\"11.01.2018\",\"date_beg\":\"20180111\",\"date_end\":\"20200529\",\"direction.text\":\"up\",\"price_beg\":\"300000\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"4,92%\",\"price_end\":\"314760.06\",\"percent\":\"4.92001999999999\"},\"6m\":{\"date_end\":\"20200529\",\"direction:up\":1,\"percent.readable\":\"0,25%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"313985.70\",\"percent\":\"0.246622696511338\",\"price_end\":\"314760.06\",\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction\":1},\"date\":\"20200529\",\"1y\":{\"date_end\":\"20200529\",\"percent\":\"0.828994461613931\",\"price_end\":\"314760.06\",\"percent.readable\":\"0,83%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"312172.17\",\"direction.text\":\"up\",\"direction\":1,\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\"},\"3m\":{\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,80%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"312259.23\",\"percent\":\"0.800882651251015\",\"price_end\":\"314760.06\",\"date_beg.readable\":\"28.02.2020\",\"direction\":1,\"date_beg\":\"20200228\"},\"date.readable\":\"29.05.2020\",\"1m\":{\"date_end\":\"20200529\",\"price_end\":\"314760.06\",\"percent\":\"0.0515006387198156\",\"direction.text\":\"up\",\"price_beg\":\"314598.04\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,05%\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1,\"date_beg\":\"20200430\"}},\"pifs_wo_i\":{\"date\":\"20200529\",\"6m\":{\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction\":1,\"percent\":\"0.246622696511338\",\"price_end\":\"314760.06\",\"direction:up\":1,\"percent.readable\":\"0,25%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"313985.70\",\"date_end\":\"20200529\"},\"all\":{\"direction:up\":1,\"percent.readable\":\"4,92%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"300000\",\"percent\":\"4.92001999999999\",\"price_end\":\"314760.06\",\"date_end\":\"20200529\",\"direction\":1,\"date_beg\":\"20180111\",\"date_beg.readable\":\"11.01.2018\"},\"1m\":{\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1,\"percent\":\"0.0515006387198156\",\"price_end\":\"314760.06\",\"direction:up\":1,\"percent.readable\":\"0,05%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"314598.04\",\"direction.text\":\"up\",\"date_end\":\"20200529\"},\"date.readable\":\"29.05.2020\",\"1y\":{\"date_end\":\"20200529\",\"direction.text\":\"up\",\"price_beg\":\"312172.17\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,83%\",\"price_end\":\"314760.06\",\"percent\":\"0.828994461613931\",\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1},\"3m\":{\"date_end\":\"20200529\",\"price_beg\":\"312259.23\",\"direction.text\":\"up\",\"percent.readable\":\"0,80%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_end\":\"314760.06\",\"percent\":\"0.800882651251015\",\"direction\":1,\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\"}},\"amiis\":{\"1m\":{\"date_end\":\"20200331\",\"direction.text\":\"up\",\"price_beg\":\"312259.23\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"0,06%\",\"direction:up\":1,\"price_end\":\"312446.60\",\"percent\":\"0.0600046314083329\",\"direction\":1,\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\"},\"1y\":{\"date_end\":\"20200331\",\"percent\":\"0.203741807826006\",\"price_end\":\"312446.60\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"0,20%\",\"direction.text\":\"up\",\"price_beg\":\"311811.31\",\"date_beg\":\"20190329\",\"date_beg.readable\":\"29.03.2019\",\"direction\":1},\"3m\":{\"direction\":1,\"date_beg\":\"20191231\",\"date_beg.readable\":\"31.12.2019\",\"date_end\":\"20200331\",\"percent\":\"0.28218291508729\",\"price_end\":\"312446.60\",\"direction:up\":1,\"percent.readable\":\"0,28%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"311567.41\",\"direction.text\":\"up\"},\"date.readable\":\"31.03.2020\",\"date\":\"20200331\",\"all\":{\"direction\":1,\"date_beg.readable\":\"11.01.2018\",\"date_beg\":\"20180111\",\"percent\":\"4.14886666666665\",\"price_end\":\"312446.60\",\"percent.readable\":\"4,15%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"price_beg\":\"300000\",\"direction.text\":\"up\",\"date_end\":\"20200331\"},\"6m\":{\"date_end\":\"20200331\",\"price_end\":\"312446.60\",\"percent\":\"0.147955831209828\",\"direction.text\":\"up\",\"price_beg\":\"311985\",\"direction:up\":1,\"percent.readable\":\"0,15%\",\"date_end.readable\":\"31.03.2020\",\"direction\":1,\"date_beg\":\"20190930\",\"date_beg.readable\":\"30.09.2019\"}}}},\"opifa_akn\":{\"share_price_table\":{\"pifs_w_i\":{\"date.readable\":\"29.05.2020\",\"3y\":{\"price_end\":\"3109.01\",\"percent\":\"83.9161170102635\",\"direction.text\":\"up\",\"price_beg\":\"1690.45\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"83,92%\",\"direction:up\":1,\"date_end\":\"20200529\",\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"date_beg\":\"20170531\"},\"date\":\"20200529\",\"6m\":{\"direction:down\":1,\"date_beg.readable\":\"29.11.2019\",\"direction\":-1,\"date_beg\":\"20191129\",\"price_end\":\"3109.01\",\"percent\":\"-8.95537685734534\",\"price_beg\":\"3414.82\",\"direction.text\":\"down\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"8,96%\",\"date_end\":\"20200529\"},\"1m\":{\"date_end\":\"20200529\",\"price_end\":\"3109.01\",\"percent\":\"4.0735508750318\",\"price_beg\":\"2987.32\",\"direction.text\":\"up\",\"percent.readable\":\"4,07%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"date_beg\":\"20200430\",\"direction\":1,\"date_beg.readable\":\"30.04.2020\"},\"1y\":{\"date_beg\":\"20190531\",\"direction\":1,\"date_beg.readable\":\"31.05.2019\",\"percent\":\"5.77094489314072\",\"price_end\":\"3109.01\",\"percent.readable\":\"5,77%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"2939.38\",\"direction.text\":\"up\",\"date_end\":\"20200529\"},\"3m\":{\"date_beg.readable\":\"28.02.2020\",\"direction\":-1,\"date_beg\":\"20200228\",\"direction:down\":1,\"direction.text\":\"down\",\"price_beg\":\"3158.27\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"1,56%\",\"price_end\":\"3109.01\",\"percent\":\"-1.55971465390863\",\"date_end\":\"20200529\"},\"all\":{\"date_end\":\"20200529\",\"direction:up\":1,\"percent.readable\":\"210,96%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"999.81\",\"direction.text\":\"up\",\"percent\":\"210.960082415659\",\"price_end\":\"3109.01\",\"date_beg.readable\":\"27.12.2006\",\"direction\":1,\"date_beg\":\"20061227\"}},\"pifs_wo_i\":{\"date\":\"20200529\",\"6m\":{\"date_end\":\"20200529\",\"percent.readable\":\"8,96%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"3414.82\",\"direction.text\":\"down\",\"percent\":\"-8.95537685734534\",\"price_end\":\"3109.01\",\"direction\":-1,\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction:down\":1},\"date.readable\":\"29.05.2020\",\"3y\":{\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"date_beg\":\"20170531\",\"percent\":\"83.9161170102635\",\"price_end\":\"3109.01\",\"percent.readable\":\"83,92%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"1690.45\",\"date_end\":\"20200529\"},\"all\":{\"percent\":\"210.960082415659\",\"price_end\":\"3109.01\",\"percent.readable\":\"210,96%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"999.81\",\"date_end\":\"20200529\",\"direction\":1,\"date_beg\":\"20061227\",\"date_beg.readable\":\"27.12.2006\"},\"1m\":{\"date_end\":\"20200529\",\"percent\":\"4.0735508750318\",\"price_end\":\"3109.01\",\"percent.readable\":\"4,07%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"2987.32\",\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1},\"3m\":{\"date_end\":\"20200529\",\"percent.readable\":\"1,56%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"down\",\"price_beg\":\"3158.27\",\"percent\":\"-1.55971465390863\",\"price_end\":\"3109.01\",\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":-1,\"direction:down\":1},\"1y\":{\"direction\":1,\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"date_end\":\"20200529\",\"price_beg\":\"2939.38\",\"direction.text\":\"up\",\"percent.readable\":\"5,77%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_end\":\"3109.01\",\"percent\":\"5.77094489314072\"}},\"amiis\":{\"date.readable\":\"31.03.2020\",\"3y\":{\"direction\":1,\"date_beg.readable\":\"31.03.2017\",\"date_beg\":\"20170331\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"55,34%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"1818.96\",\"percent\":\"55.3376654791749\",\"price_end\":\"2825.53\",\"date_end\":\"20200331\"},\"date\":\"20200331\",\"6m\":{\"date_end\":\"20200331\",\"price_beg\":\"3169.27\",\"direction.text\":\"down\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"10,85%\",\"price_end\":\"2825.53\",\"percent\":\"-10.8460307894247\",\"date_beg\":\"20190930\",\"direction\":-1,\"date_beg.readable\":\"30.09.2019\",\"direction:down\":1},\"1m\":{\"percent\":\"-10.5355146963369\",\"price_end\":\"2825.53\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"10,54%\",\"direction.text\":\"down\",\"price_beg\":\"3158.27\",\"date_end\":\"20200331\",\"direction:down\":1,\"date_beg\":\"20200228\",\"direction\":-1,\"date_beg.readable\":\"28.02.2020\"},\"3m\":{\"date_end\":\"20200331\",\"price_end\":\"2825.53\",\"percent\":\"-20.5483804751581\",\"direction.text\":\"down\",\"price_beg\":\"3556.29\",\"percent.readable\":\"20,55%\",\"date_end.readable\":\"31.03.2020\",\"direction:down\":1,\"direction\":-1,\"date_beg.readable\":\"31.12.2019\",\"date_beg\":\"20191231\"},\"1y\":{\"direction.text\":\"down\",\"price_beg\":\"2849.47\",\"percent.readable\":\"0,84%\",\"date_end.readable\":\"31.03.2020\",\"price_end\":\"2825.53\",\"percent\":\"-0.84015623958139\",\"date_end\":\"20200331\",\"direction\":-1,\"date_beg.readable\":\"29.03.2019\",\"date_beg\":\"20190329\",\"direction:down\":1},\"all\":{\"date_beg\":\"20061227\",\"date_beg.readable\":\"27.12.2006\",\"direction\":1,\"price_beg\":\"999.81\",\"direction.text\":\"up\",\"percent.readable\":\"182,61%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"price_end\":\"2825.53\",\"percent\":\"182.606695272102\",\"date_end\":\"20200331\"}}},\"type\":\"pif\",\"precalc\":{\"amiis\":{\"2\":{\"buy_date\":\"20180330\",\"buy_price\":\"2279.24\",\"sell_price\":\"2825.53\",\"sell_date\":\"20200331\",\"rounded_percents\":24},\"5\":{\"buy_date\":\"20150331\",\"buy_price\":\"1507.01\",\"rounded_percents\":87,\"sell_date\":\"20200331\",\"sell_price\":\"2825.53\"},\"4\":{\"rounded_percents\":70,\"sell_date\":\"20200331\",\"sell_price\":\"2825.53\",\"buy_price\":\"1662.91\",\"buy_date\":\"20160331\"},\"1\":{\"buy_date\":\"20190329\",\"buy_price\":\"2849.47\",\"rounded_percents\":0,\"sell_price\":\"2825.53\",\"sell_date\":\"20200331\"},\"3\":{\"buy_date\":\"20170331\",\"buy_price\":\"1818.96\",\"rounded_percents\":55,\"sell_price\":\"2825.53\",\"sell_date\":\"20200331\"}},\"pifs_w_i\":{\"3\":{\"buy_price\":\"1690.45\",\"buy_date\":\"20170531\",\"rounded_percents\":84,\"sell_date\":\"20200529\",\"sell_price\":\"3109.01\"},\"1\":{\"buy_price\":\"2939.38\",\"buy_date\":\"20190531\",\"sell_price\":\"3109.01\",\"sell_date\":\"20200529\",\"rounded_percents\":6},\"2\":{\"buy_price\":\"2418.72\",\"buy_date\":\"20180531\",\"rounded_percents\":29,\"sell_price\":\"3109.01\",\"sell_date\":\"20200529\"},\"4\":{\"sell_price\":\"3109.01\",\"sell_date\":\"20200529\",\"rounded_percents\":83,\"buy_price\":\"1700.24\",\"buy_date\":\"20160531\"},\"5\":{\"buy_price\":\"1426.54\",\"buy_date\":\"20150529\",\"rounded_percents\":118,\"sell_price\":\"3109.01\",\"sell_date\":\"20200529\"}},\"pifs_wo_i\":{\"4\":{\"rounded_percents\":83,\"sell_date\":\"20200529\",\"sell_price\":\"3109.01\",\"buy_date\":\"20160531\",\"buy_price\":\"1700.24\"},\"5\":{\"buy_price\":\"1426.54\",\"buy_date\":\"20150529\",\"sell_date\":\"20200529\",\"sell_price\":\"3109.01\",\"rounded_percents\":118},\"2\":{\"rounded_percents\":29,\"sell_date\":\"20200529\",\"sell_price\":\"3109.01\",\"buy_price\":\"2418.72\",\"buy_date\":\"20180531\"},\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"2939.38\",\"sell_price\":\"3109.01\",\"sell_date\":\"20200529\",\"rounded_percents\":6},\"3\":{\"buy_date\":\"20170531\",\"buy_price\":\"1690.45\",\"sell_price\":\"3109.01\",\"sell_date\":\"20200529\",\"rounded_percents\":84}}}},\"opif_akr\":{\"type\":\"pif\",\"precalc\":{\"amiis\":{\"5\":{\"buy_date\":\"20150331\",\"buy_price\":\"2368.47\",\"sell_date\":\"20200331\",\"sell_price\":\"3953.78\",\"rounded_percents\":67},\"4\":{\"buy_date\":\"20160331\",\"buy_price\":\"2802.58\",\"rounded_percents\":41,\"sell_price\":\"3953.78\",\"sell_date\":\"20200331\"},\"2\":{\"buy_price\":\"3531.02\",\"buy_date\":\"20180330\",\"rounded_percents\":12,\"sell_date\":\"20200331\",\"sell_price\":\"3953.78\"},\"3\":{\"sell_date\":\"20200331\",\"sell_price\":\"3953.78\",\"rounded_percents\":25,\"buy_price\":\"3157.37\",\"buy_date\":\"20170331\"},\"1\":{\"sell_price\":\"3953.78\",\"sell_date\":\"20200331\",\"rounded_percents\":8,\"buy_price\":\"3669.35\",\"buy_date\":\"20190329\"}},\"pifs_wo_i\":{\"3\":{\"buy_price\":\"3216.69\",\"buy_date\":\"20170531\",\"rounded_percents\":28,\"sell_price\":\"4132.10\",\"sell_date\":\"20200529\"},\"1\":{\"sell_price\":\"4132.10\",\"sell_date\":\"20200529\",\"rounded_percents\":11,\"buy_date\":\"20190531\",\"buy_price\":\"3730.52\"},\"4\":{\"buy_date\":\"20160531\",\"buy_price\":\"2864.45\",\"rounded_percents\":44,\"sell_date\":\"20200529\",\"sell_price\":\"4132.10\"},\"5\":{\"buy_date\":\"20150529\",\"buy_price\":\"2508.27\",\"rounded_percents\":65,\"sell_price\":\"4132.10\",\"sell_date\":\"20200529\"},\"2\":{\"rounded_percents\":17,\"sell_date\":\"20200529\",\"sell_price\":\"4132.10\",\"buy_price\":\"3539.63\",\"buy_date\":\"20180531\"}},\"pifs_w_i\":{\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"3730.52\",\"sell_date\":\"20200529\",\"sell_price\":\"4132.10\",\"rounded_percents\":11},\"3\":{\"sell_date\":\"20200529\",\"sell_price\":\"4132.10\",\"rounded_percents\":28,\"buy_date\":\"20170531\",\"buy_price\":\"3216.69\"},\"4\":{\"buy_date\":\"20160531\",\"buy_price\":\"2864.45\",\"sell_date\":\"20200529\",\"sell_price\":\"4132.10\",\"rounded_percents\":44},\"5\":{\"rounded_percents\":65,\"sell_date\":\"20200529\",\"sell_price\":\"4132.10\",\"buy_date\":\"20150529\",\"buy_price\":\"2508.27\"},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"3539.63\",\"sell_price\":\"4132.10\",\"sell_date\":\"20200529\",\"rounded_percents\":17}}},\"share_price_table\":{\"amiis\":{\"all\":{\"direction.text\":\"up\",\"price_beg\":\"1000\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"295,38%\",\"direction:up\":1,\"price_end\":\"3953.78\",\"percent\":\"295.378\",\"date_end\":\"20200331\",\"direction\":1,\"date_beg\":\"20030430\",\"date_beg.readable\":\"30.04.2003\"},\"1y\":{\"date_beg\":\"20190329\",\"direction\":1,\"date_beg.readable\":\"29.03.2019\",\"date_end\":\"20200331\",\"percent.readable\":\"7,75%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"3669.35\",\"direction.text\":\"up\",\"percent\":\"7.75150912286918\",\"price_end\":\"3953.78\"},\"3m\":{\"date_end\":\"20200331\",\"percent.readable\":\"1,51%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"4014.21\",\"direction.text\":\"down\",\"percent\":\"-1.50540205918475\",\"price_end\":\"3953.78\",\"date_beg.readable\":\"31.12.2019\",\"direction\":-1,\"date_beg\":\"20191231\",\"direction:down\":1},\"1m\":{\"date_end\":\"20200331\",\"price_end\":\"3953.78\",\"percent\":\"-2.00220098350253\",\"direction.text\":\"down\",\"price_beg\":\"4034.56\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"2,00%\",\"direction:down\":1,\"direction\":-1,\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\"},\"6m\":{\"percent\":\"1.5889248035684\",\"price_end\":\"3953.78\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"1,59%\",\"direction:up\":1,\"price_beg\":\"3891.94\",\"direction.text\":\"up\",\"date_end\":\"20200331\",\"date_beg\":\"20190930\",\"date_beg.readable\":\"30.09.2019\",\"direction\":1},\"date\":\"20200331\",\"3y\":{\"date_end\":\"20200331\",\"percent.readable\":\"25,22%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"3157.37\",\"direction.text\":\"up\",\"percent\":\"25.2238413616396\",\"price_end\":\"3953.78\",\"date_beg\":\"20170331\",\"date_beg.readable\":\"31.03.2017\",\"direction\":1},\"date.readable\":\"31.03.2020\"},\"pifs_wo_i\":{\"6m\":{\"date_end\":\"20200529\",\"price_beg\":\"3970.87\",\"direction.text\":\"up\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"4,06%\",\"price_end\":\"4132.10\",\"percent\":\"4.06031927512109\",\"date_beg.readable\":\"29.11.2019\",\"direction\":1,\"date_beg\":\"20191129\"},\"date\":\"20200529\",\"date.readable\":\"29.05.2020\",\"3y\":{\"date_beg.readable\":\"31.05.2017\",\"date_beg\":\"20170531\",\"direction\":1,\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"28,46%\",\"price_beg\":\"3216.69\",\"direction.text\":\"up\",\"percent\":\"28.4581355368407\",\"price_end\":\"4132.10\"},\"all\":{\"date_end\":\"20200529\",\"percent\":\"313.21\",\"price_end\":\"4132.10\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"313,21%\",\"direction:up\":1,\"price_beg\":\"1000\",\"direction.text\":\"up\",\"date_beg.readable\":\"30.04.2003\",\"date_beg\":\"20030430\",\"direction\":1},\"1y\":{\"direction\":1,\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"date_end\":\"20200529\",\"percent\":\"10.7647191276283\",\"price_end\":\"4132.10\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"10,76%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"3730.52\"},\"3m\":{\"date_end\":\"20200529\",\"direction.text\":\"up\",\"price_beg\":\"4034.56\",\"direction:up\":1,\"percent.readable\":\"2,42%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"4132.10\",\"percent\":\"2.41761183375637\",\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":1},\"1m\":{\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\",\"direction\":1,\"price_end\":\"4132.10\",\"percent\":\"1.34576661115514\",\"direction.text\":\"up\",\"price_beg\":\"4077.23\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"1,35%\",\"date_end\":\"20200529\"}},\"pifs_w_i\":{\"3m\":{\"date_end\":\"20200529\",\"percent.readable\":\"2,42%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_beg\":\"4034.56\",\"direction.text\":\"up\",\"percent\":\"2.41761183375637\",\"price_end\":\"4132.10\",\"date_beg.readable\":\"28.02.2020\",\"direction\":1,\"date_beg\":\"20200228\"},\"1y\":{\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"10,76%\",\"direction.text\":\"up\",\"price_beg\":\"3730.52\",\"percent\":\"10.7647191276283\",\"price_end\":\"4132.10\",\"direction\":1,\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\"},\"1m\":{\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"1,35%\",\"price_beg\":\"4077.23\",\"direction.text\":\"up\",\"percent\":\"1.34576661115514\",\"price_end\":\"4132.10\",\"date_end\":\"20200529\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1,\"date_beg\":\"20200430\"},\"all\":{\"price_end\":\"4132.10\",\"percent\":\"313.21\",\"price_beg\":\"1000\",\"direction.text\":\"up\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"313,21%\",\"date_end\":\"20200529\",\"date_beg.readable\":\"30.04.2003\",\"date_beg\":\"20030430\",\"direction\":1},\"3y\":{\"percent.readable\":\"28,46%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"3216.69\",\"percent\":\"28.4581355368407\",\"price_end\":\"4132.10\",\"date_end\":\"20200529\",\"direction\":1,\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\"},\"date.readable\":\"29.05.2020\",\"6m\":{\"date_end\":\"20200529\",\"price_end\":\"4132.10\",\"percent\":\"4.06031927512109\",\"price_beg\":\"3970.87\",\"direction.text\":\"up\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"4,06%\",\"direction:up\":1,\"direction\":1,\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\"},\"date\":\"20200529\"}}},\"opifa_akliq\":{\"share_price_table\":{\"pifs_wo_i\":{\"6m\":{\"direction:down\":1,\"direction\":-1,\"date_beg\":\"20191129\",\"date_beg.readable\":\"29.11.2019\",\"date_end\":\"20200529\",\"price_end\":\"5631.84\",\"percent\":\"-8.05579500039181\",\"direction.text\":\"down\",\"price_beg\":\"6125.28\",\"percent.readable\":\"8,06%\",\"date_end.readable\":\"29.05.2020\"},\"date\":\"20200529\",\"3y\":{\"direction\":1,\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\",\"date_end\":\"20200529\",\"price_beg\":\"3314.03\",\"direction.text\":\"up\",\"direction:up\":1,\"percent.readable\":\"69,94%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"5631.84\",\"percent\":\"69.9393185939777\"},\"date.readable\":\"29.05.2020\",\"all\":{\"direction\":1,\"date_beg.readable\":\"30.09.2005\",\"date_beg\":\"20050930\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"463,61%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"999.24\",\"percent\":\"463.612345382491\",\"price_end\":\"5631.84\",\"date_end\":\"20200529\"},\"1y\":{\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\",\"direction\":1,\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,79%\",\"price_beg\":\"5426.03\",\"direction.text\":\"up\",\"percent\":\"3.79301257088517\",\"price_end\":\"5631.84\",\"date_end\":\"20200529\"},\"3m\":{\"direction:down\":1,\"date_beg.readable\":\"28.02.2020\",\"direction\":-1,\"date_beg\":\"20200228\",\"percent\":\"-3.73548384891238\",\"price_end\":\"5631.84\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,74%\",\"direction.text\":\"down\",\"price_beg\":\"5850.38\",\"date_end\":\"20200529\"},\"1m\":{\"date_beg.readable\":\"30.04.2020\",\"direction\":1,\"date_beg\":\"20200430\",\"price_end\":\"5631.84\",\"percent\":\"2.02701111423112\",\"direction.text\":\"up\",\"price_beg\":\"5519.95\",\"percent.readable\":\"2,03%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"date_end\":\"20200529\"}},\"pifs_w_i\":{\"3y\":{\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"date_end\":\"20200529\",\"price_end\":\"5631.84\",\"percent\":\"69.9393185939777\",\"direction.text\":\"up\",\"price_beg\":\"3314.03\",\"percent.readable\":\"69,94%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1},\"date.readable\":\"29.05.2020\",\"6m\":{\"direction:down\":1,\"date_beg\":\"20191129\",\"date_beg.readable\":\"29.11.2019\",\"direction\":-1,\"date_end\":\"20200529\",\"price_end\":\"5631.84\",\"percent\":\"-8.05579500039181\",\"price_beg\":\"6125.28\",\"direction.text\":\"down\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"8,06%\"},\"date\":\"20200529\",\"1y\":{\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,79%\",\"direction:up\":1,\"price_beg\":\"5426.03\",\"direction.text\":\"up\",\"percent\":\"3.79301257088517\",\"price_end\":\"5631.84\",\"date_end\":\"20200529\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1,\"date_beg\":\"20190531\"},\"3m\":{\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,74%\",\"direction.text\":\"down\",\"price_beg\":\"5850.38\",\"percent\":\"-3.73548384891238\",\"price_end\":\"5631.84\",\"date_end\":\"20200529\",\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":-1,\"direction:down\":1},\"1m\":{\"date_beg.readable\":\"30.04.2020\",\"direction\":1,\"date_beg\":\"20200430\",\"percent.readable\":\"2,03%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_beg\":\"5519.95\",\"direction.text\":\"up\",\"percent\":\"2.02701111423112\",\"price_end\":\"5631.84\",\"date_end\":\"20200529\"},\"all\":{\"percent.readable\":\"463,61%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"999.24\",\"direction.text\":\"up\",\"percent\":\"463.612345382491\",\"price_end\":\"5631.84\",\"date_end\":\"20200529\",\"date_beg\":\"20050930\",\"date_beg.readable\":\"30.09.2005\",\"direction\":1}},\"amiis\":{\"date\":\"20200331\",\"6m\":{\"date_beg.readable\":\"30.09.2019\",\"direction\":-1,\"date_beg\":\"20190930\",\"direction:down\":1,\"price_beg\":\"5795.24\",\"direction.text\":\"down\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"7,99%\",\"price_end\":\"5332.28\",\"percent\":\"-7.98862514753488\",\"date_end\":\"20200331\"},\"3y\":{\"price_beg\":\"3605.51\",\"direction.text\":\"up\",\"percent.readable\":\"47,89%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"price_end\":\"5332.28\",\"percent\":\"47.8925311537064\",\"date_end\":\"20200331\",\"date_beg.readable\":\"31.03.2017\",\"direction\":1,\"date_beg\":\"20170331\"},\"date.readable\":\"31.03.2020\",\"all\":{\"date_beg\":\"20050930\",\"date_beg.readable\":\"30.09.2005\",\"direction\":1,\"date_end\":\"20200331\",\"percent\":\"433.633561506745\",\"price_end\":\"5332.28\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"percent.readable\":\"433,63%\",\"direction.text\":\"up\",\"price_beg\":\"999.24\"},\"1m\":{\"date_end\":\"20200331\",\"price_end\":\"5332.28\",\"percent\":\"-8.85583500558938\",\"price_beg\":\"5850.38\",\"direction.text\":\"down\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"8,86%\",\"direction:down\":1,\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":-1},\"1y\":{\"date_beg.readable\":\"29.03.2019\",\"direction\":1,\"date_beg\":\"20190329\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"4,02%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"5126.41\",\"percent\":\"4.01587075555798\",\"price_end\":\"5332.28\",\"date_end\":\"20200331\"},\"3m\":{\"date_end\":\"20200331\",\"price_end\":\"5332.28\",\"percent\":\"-16.1571420709608\",\"price_beg\":\"6359.85\",\"direction.text\":\"down\",\"percent.readable\":\"16,16%\",\"date_end.readable\":\"31.03.2020\",\"direction:down\":1,\"date_beg\":\"20191231\",\"direction\":-1,\"date_beg.readable\":\"31.12.2019\"}}},\"precalc\":{\"amiis\":{\"2\":{\"rounded_percents\":21,\"sell_date\":\"20200331\",\"sell_price\":\"5332.28\",\"buy_price\":\"4414.76\",\"buy_date\":\"20180330\"},\"4\":{\"sell_price\":\"5332.28\",\"sell_date\":\"20200331\",\"rounded_percents\":59,\"buy_date\":\"20160331\",\"buy_price\":\"3344.76\"},\"5\":{\"sell_date\":\"20200331\",\"sell_price\":\"5332.28\",\"rounded_percents\":86,\"buy_price\":\"2862.50\",\"buy_date\":\"20150331\"},\"3\":{\"sell_price\":\"5332.28\",\"sell_date\":\"20200331\",\"rounded_percents\":48,\"buy_price\":\"3605.51\",\"buy_date\":\"20170331\"},\"1\":{\"sell_price\":\"5332.28\",\"sell_date\":\"20200331\",\"rounded_percents\":4,\"buy_price\":\"5126.41\",\"buy_date\":\"20190329\"}},\"pifs_wo_i\":{\"3\":{\"buy_price\":\"3314.03\",\"buy_date\":\"20170531\",\"rounded_percents\":70,\"sell_price\":\"5631.84\",\"sell_date\":\"20200529\"},\"1\":{\"buy_price\":\"5426.03\",\"buy_date\":\"20190531\",\"rounded_percents\":4,\"sell_price\":\"5631.84\",\"sell_date\":\"20200529\"},\"5\":{\"buy_date\":\"20150529\",\"buy_price\":\"2713.22\",\"sell_date\":\"20200529\",\"sell_price\":\"5631.84\",\"rounded_percents\":108},\"4\":{\"rounded_percents\":68,\"sell_date\":\"20200529\",\"sell_price\":\"5631.84\",\"buy_price\":\"3348.28\",\"buy_date\":\"20160531\"},\"2\":{\"rounded_percents\":25,\"sell_price\":\"5631.84\",\"sell_date\":\"20200529\",\"buy_date\":\"20180531\",\"buy_price\":\"4523.55\"}},\"pifs_w_i\":{\"1\":{\"buy_price\":\"5426.03\",\"buy_date\":\"20190531\",\"sell_date\":\"20200529\",\"sell_price\":\"5631.84\",\"rounded_percents\":4},\"3\":{\"buy_date\":\"20170531\",\"buy_price\":\"3314.03\",\"rounded_percents\":70,\"sell_price\":\"5631.84\",\"sell_date\":\"20200529\"},\"5\":{\"rounded_percents\":108,\"sell_date\":\"20200529\",\"sell_price\":\"5631.84\",\"buy_price\":\"2713.22\",\"buy_date\":\"20150529\"},\"4\":{\"buy_price\":\"3348.28\",\"buy_date\":\"20160531\",\"sell_price\":\"5631.84\",\"sell_date\":\"20200529\",\"rounded_percents\":68},\"2\":{\"sell_date\":\"20200529\",\"sell_price\":\"5631.84\",\"rounded_percents\":25,\"buy_price\":\"4523.55\",\"buy_date\":\"20180531\"}}},\"type\":\"pif\"},\"new-horizons\":{\"type\":\"iis\",\"precalc\":{\"amiis\":{\"2\":{\"buy_date\":\"20180330\",\"buy_price\":\"1.44031\",\"sell_date\":\"20200331\",\"sell_price\":\"1.64920\",\"rounded_percents\":15},\"4\":{\"buy_date\":\"20160331\",\"buy_price\":\"1.13340\",\"rounded_percents\":46,\"sell_price\":\"1.64920\",\"sell_date\":\"20200331\"},\"5\":{\"buy_date\":\"20150331\",\"buy_price\":\"1.02277\",\"rounded_percents\":61,\"sell_price\":\"1.64920\",\"sell_date\":\"20200331\"},\"1\":{\"sell_price\":\"1.64920\",\"sell_date\":\"20200331\",\"rounded_percents\":13,\"buy_date\":\"20190329\",\"buy_price\":\"1.46368\"},\"3\":{\"rounded_percents\":30,\"sell_price\":\"1.64920\",\"sell_date\":\"20200331\",\"buy_date\":\"20170331\",\"buy_price\":\"1.26745\"}},\"pifs_w_i\":{\"3\":{\"sell_price\":\"1.64920\",\"sell_date\":\"20200529\",\"rounded_percents\":27,\"buy_price\":\"1.30090\",\"buy_date\":\"20170531\"},\"1\":{\"sell_price\":\"1.64920\",\"sell_date\":\"20200529\",\"rounded_percents\":9,\"buy_price\":\"1.51703\",\"buy_date\":\"20190531\"},\"5\":{\"rounded_percents\":60,\"sell_date\":\"20200529\",\"sell_price\":\"1.64920\",\"buy_price\":\"1.02963\",\"buy_date\":\"20150529\"},\"4\":{\"buy_price\":\"1.15713\",\"buy_date\":\"20160531\",\"sell_date\":\"20200529\",\"sell_price\":\"1.64920\",\"rounded_percents\":43},\"2\":{\"buy_price\":\"1.44929\",\"buy_date\":\"20180531\",\"sell_price\":\"1.64920\",\"sell_date\":\"20200529\",\"rounded_percents\":14}},\"pifs_wo_i\":{\"4\":{\"buy_price\":\"1.15713\",\"buy_date\":\"20160531\",\"sell_price\":\"1.64920\",\"sell_date\":\"20200529\",\"rounded_percents\":43},\"5\":{\"sell_date\":\"20200529\",\"sell_price\":\"1.64920\",\"rounded_percents\":60,\"buy_price\":\"1.02963\",\"buy_date\":\"20150529\"},\"2\":{\"rounded_percents\":14,\"sell_price\":\"1.64920\",\"sell_date\":\"20200529\",\"buy_price\":\"1.44929\",\"buy_date\":\"20180531\"},\"1\":{\"buy_price\":\"1.51703\",\"buy_date\":\"20190531\",\"sell_date\":\"20200529\",\"sell_price\":\"1.64920\",\"rounded_percents\":9},\"3\":{\"sell_price\":\"1.64920\",\"sell_date\":\"20200529\",\"rounded_percents\":27,\"buy_date\":\"20170531\",\"buy_price\":\"1.30090\"}}}},\"zpifn_act10\":{\"precalc\":{\"pifs_w_i\":{\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"294099.03\",\"rounded_percents\":2,\"sell_price\":\"300311.48\",\"sell_date\":\"20200529\"}},\"pifs_wo_i\":{\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"294099.03\",\"rounded_percents\":2,\"sell_price\":\"300311.48\",\"sell_date\":\"20200529\"}}},\"type\":\"pif\",\"share_price_table\":{\"amiis\":{\"1m\":{\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":1,\"direction.text\":\"up\",\"price_beg\":\"294189.34\",\"percent.readable\":\"0,67%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"price_end\":\"296173.53\",\"percent\":\"0.674460196280393\",\"date_end\":\"20200331\"},\"3m\":{\"date_end\":\"20200331\",\"price_beg\":\"288393.84\",\"direction.text\":\"up\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"percent.readable\":\"2,70%\",\"price_end\":\"296173.53\",\"percent\":\"2.69759229253995\",\"direction\":1,\"date_beg.readable\":\"31.12.2019\",\"date_beg\":\"20191231\"},\"date.readable\":\"31.03.2020\",\"date\":\"20200331\",\"6m\":{\"date_end\":\"20200331\",\"price_beg\":\"289375.41\",\"direction.text\":\"up\",\"percent.readable\":\"2,35%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"price_end\":\"296173.53\",\"percent\":\"2.34923900410199\",\"direction\":1,\"date_beg.readable\":\"30.09.2019\",\"date_beg\":\"20190930\"},\"all\":{\"date_end\":\"20200331\",\"percent\":\"-1.27548999999999\",\"price_end\":\"296173.53\",\"percent.readable\":\"1,28%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"300000\",\"direction.text\":\"down\",\"direction:down\":1,\"date_beg\":\"20190416\",\"date_beg.readable\":\"16.04.2019\",\"direction\":-1}},\"pifs_w_i\":{\"1m\":{\"date_end\":\"20200529\",\"percent\":\"0.905426098622527\",\"price_end\":\"300311.48\",\"percent.readable\":\"0,91%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"297616.78\",\"direction.text\":\"up\",\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1},\"date.readable\":\"29.05.2020\",\"3m\":{\"date_beg.readable\":\"28.02.2020\",\"direction\":1,\"date_beg\":\"20200228\",\"direction:up\":1,\"percent.readable\":\"2,08%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"294189.34\",\"direction.text\":\"up\",\"percent\":\"2.08102033880628\",\"price_end\":\"300311.48\",\"date_end\":\"20200529\"},\"1y\":{\"price_beg\":\"294099.03\",\"direction.text\":\"up\",\"percent.readable\":\"2,11%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_end\":\"300311.48\",\"percent\":\"2.11236670858791\",\"date_end\":\"20200529\",\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\",\"direction\":1},\"date\":\"20200529\",\"6m\":{\"price_end\":\"300311.48\",\"percent\":\"4.23052147281849\",\"direction.text\":\"up\",\"price_beg\":\"288122.40\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"4,23%\",\"direction:up\":1,\"date_end\":\"20200529\",\"date_beg.readable\":\"29.11.2019\",\"direction\":1,\"date_beg\":\"20191129\"},\"all\":{\"date_beg.readable\":\"16.04.2019\",\"direction\":1,\"date_beg\":\"20190416\",\"price_end\":\"300311.48\",\"percent\":\"0.103826666666663\",\"price_beg\":\"300000\",\"direction.text\":\"up\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,10%\",\"date_end\":\"20200529\"}},\"pifs_wo_i\":{\"date.readable\":\"29.05.2020\",\"3m\":{\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":1,\"price_beg\":\"294189.34\",\"direction.text\":\"up\",\"percent.readable\":\"2,08%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_end\":\"300311.48\",\"percent\":\"2.08102033880628\",\"date_end\":\"20200529\"},\"1y\":{\"direction\":1,\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"date_end\":\"20200529\",\"percent.readable\":\"2,11%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"294099.03\",\"direction.text\":\"up\",\"percent\":\"2.11236670858791\",\"price_end\":\"300311.48\"},\"1m\":{\"date_beg.readable\":\"30.04.2020\",\"direction\":1,\"date_beg\":\"20200430\",\"price_end\":\"300311.48\",\"percent\":\"0.905426098622527\",\"price_beg\":\"297616.78\",\"direction.text\":\"up\",\"percent.readable\":\"0,91%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"date_end\":\"20200529\"},\"6m\":{\"direction.text\":\"up\",\"price_beg\":\"288122.40\",\"percent.readable\":\"4,23%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_end\":\"300311.48\",\"percent\":\"4.23052147281849\",\"date_end\":\"20200529\",\"date_beg\":\"20191129\",\"direction\":1,\"date_beg.readable\":\"29.11.2019\"},\"all\":{\"date_end\":\"20200529\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,10%\",\"price_beg\":\"300000\",\"direction.text\":\"up\",\"percent\":\"0.103826666666663\",\"price_end\":\"300311.48\",\"date_beg\":\"20190416\",\"date_beg.readable\":\"16.04.2019\",\"direction\":1},\"date\":\"20200529\"}}},\"opifa_akg\":{\"type\":\"pif\",\"precalc\":{\"amiis\":{\"2\":{\"buy_date\":\"20180330\",\"buy_price\":\"844.57\",\"sell_price\":\"1213.54\",\"sell_date\":\"20200331\",\"rounded_percents\":44},\"5\":{\"buy_price\":\"836.63\",\"buy_date\":\"20150331\",\"sell_date\":\"20200331\",\"sell_price\":\"1213.54\",\"rounded_percents\":45},\"4\":{\"buy_price\":\"910.39\",\"buy_date\":\"20160331\",\"rounded_percents\":33,\"sell_date\":\"20200331\",\"sell_price\":\"1213.54\"},\"1\":{\"rounded_percents\":33,\"sell_price\":\"1213.54\",\"sell_date\":\"20200331\",\"buy_date\":\"20190329\",\"buy_price\":\"910.56\"},\"3\":{\"buy_date\":\"20170331\",\"buy_price\":\"827.56\",\"rounded_percents\":47,\"sell_price\":\"1213.54\",\"sell_date\":\"20200331\"}},\"pifs_w_i\":{\"1\":{\"buy_price\":\"918.52\",\"buy_date\":\"20190531\",\"sell_price\":\"1203.12\",\"sell_date\":\"20200529\",\"rounded_percents\":31},\"3\":{\"buy_date\":\"20170531\",\"buy_price\":\"818.21\",\"rounded_percents\":47,\"sell_price\":\"1203.12\",\"sell_date\":\"20200529\"},\"5\":{\"buy_date\":\"20150529\",\"buy_price\":\"773.28\",\"sell_date\":\"20200529\",\"sell_price\":\"1203.12\",\"rounded_percents\":56},\"4\":{\"sell_date\":\"20200529\",\"sell_price\":\"1203.12\",\"rounded_percents\":35,\"buy_price\":\"889.31\",\"buy_date\":\"20160531\"},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"899.46\",\"sell_price\":\"1203.12\",\"sell_date\":\"20200529\",\"rounded_percents\":34}},\"pifs_wo_i\":{\"1\":{\"buy_price\":\"918.52\",\"buy_date\":\"20190531\",\"sell_price\":\"1203.12\",\"sell_date\":\"20200529\",\"rounded_percents\":31},\"3\":{\"sell_date\":\"20200529\",\"sell_price\":\"1203.12\",\"rounded_percents\":47,\"buy_date\":\"20170531\",\"buy_price\":\"818.21\"},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"899.46\",\"rounded_percents\":34,\"sell_date\":\"20200529\",\"sell_price\":\"1203.12\"},\"4\":{\"buy_date\":\"20160531\",\"buy_price\":\"889.31\",\"rounded_percents\":35,\"sell_date\":\"20200529\",\"sell_price\":\"1203.12\"},\"5\":{\"buy_date\":\"20150529\",\"buy_price\":\"773.28\",\"sell_date\":\"20200529\",\"sell_price\":\"1203.12\",\"rounded_percents\":56}}},\"share_price_table\":{\"pifs_w_i\":{\"3y\":{\"date_end\":\"20200529\",\"percent\":\"47.0429351877879\",\"price_end\":\"1203.12\",\"direction:up\":1,\"percent.readable\":\"47,04%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"818.21\",\"direction.text\":\"up\",\"date_beg.readable\":\"31.05.2017\",\"date_beg\":\"20170531\",\"direction\":1},\"date.readable\":\"29.05.2020\",\"date\":\"20200529\",\"6m\":{\"date_beg.readable\":\"29.11.2019\",\"direction\":1,\"date_beg\":\"20191129\",\"percent\":\"21.2260443745843\",\"price_end\":\"1203.12\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"21,23%\",\"direction:up\":1,\"price_beg\":\"992.46\",\"direction.text\":\"up\",\"date_end\":\"20200529\"},\"1m\":{\"direction:down\":1,\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":-1,\"price_end\":\"1203.12\",\"percent\":\"-1.47486344615236\",\"direction.text\":\"down\",\"price_beg\":\"1221.13\",\"percent.readable\":\"1,47%\",\"date_end.readable\":\"29.05.2020\",\"date_end\":\"20200529\"},\"3m\":{\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":1,\"date_end\":\"20200529\",\"percent\":\"11.4722505327527\",\"price_end\":\"1203.12\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"11,47%\",\"price_beg\":\"1079.30\",\"direction.text\":\"up\"},\"1y\":{\"date_end\":\"20200529\",\"price_beg\":\"918.52\",\"direction.text\":\"up\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"30,98%\",\"price_end\":\"1203.12\",\"percent\":\"30.9846274441493\",\"direction\":1,\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\"},\"all\":{\"direction\":1,\"date_beg.readable\":\"13.09.2007\",\"date_beg\":\"20070913\",\"date_end\":\"20200529\",\"price_end\":\"1203.12\",\"percent\":\"20.4734344020988\",\"direction.text\":\"up\",\"price_beg\":\"998.66\",\"percent.readable\":\"20,47%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1}},\"pifs_wo_i\":{\"3y\":{\"percent\":\"47.0429351877879\",\"price_end\":\"1203.12\",\"percent.readable\":\"47,04%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"818.21\",\"date_end\":\"20200529\",\"direction\":1,\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\"},\"date.readable\":\"29.05.2020\",\"date\":\"20200529\",\"6m\":{\"date_end\":\"20200529\",\"percent\":\"21.2260443745843\",\"price_end\":\"1203.12\",\"percent.readable\":\"21,23%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_beg\":\"992.46\",\"direction.text\":\"up\",\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction\":1},\"1m\":{\"price_end\":\"1203.12\",\"percent\":\"-1.47486344615236\",\"direction.text\":\"down\",\"price_beg\":\"1221.13\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"1,47%\",\"date_end\":\"20200529\",\"direction:down\":1,\"date_beg\":\"20200430\",\"direction\":-1,\"date_beg.readable\":\"30.04.2020\"},\"3m\":{\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"11,47%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"1079.30\",\"percent\":\"11.4722505327527\",\"price_end\":\"1203.12\",\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":1},\"1y\":{\"direction.text\":\"up\",\"price_beg\":\"918.52\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"30,98%\",\"direction:up\":1,\"price_end\":\"1203.12\",\"percent\":\"30.9846274441493\",\"date_end\":\"20200529\",\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1},\"all\":{\"date_beg.readable\":\"13.09.2007\",\"date_beg\":\"20070913\",\"direction\":1,\"date_end\":\"20200529\",\"percent.readable\":\"20,47%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"998.66\",\"direction.text\":\"up\",\"percent\":\"20.4734344020988\",\"price_end\":\"1203.12\"}},\"amiis\":{\"1m\":{\"percent.readable\":\"12,44%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"price_beg\":\"1079.30\",\"direction.text\":\"up\",\"percent\":\"12.4376910960808\",\"price_end\":\"1213.54\",\"date_end\":\"20200331\",\"direction\":1,\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\"},\"3m\":{\"date_end\":\"20200331\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"22,28%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"992.43\",\"percent\":\"22.2796570035166\",\"price_end\":\"1213.54\",\"date_beg.readable\":\"31.12.2019\",\"date_beg\":\"20191231\",\"direction\":1},\"1y\":{\"percent\":\"33.2740291688631\",\"price_end\":\"1213.54\",\"direction:up\":1,\"percent.readable\":\"33,27%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"910.56\",\"direction.text\":\"up\",\"date_end\":\"20200331\",\"date_beg.readable\":\"29.03.2019\",\"direction\":1,\"date_beg\":\"20190329\"},\"all\":{\"date_beg\":\"20070913\",\"direction\":1,\"date_beg.readable\":\"13.09.2007\",\"price_end\":\"1213.54\",\"percent\":\"21.5168325556245\",\"direction.text\":\"up\",\"price_beg\":\"998.66\",\"direction:up\":1,\"percent.readable\":\"21,52%\",\"date_end.readable\":\"31.03.2020\",\"date_end\":\"20200331\"},\"date.readable\":\"31.03.2020\",\"3y\":{\"date_beg.readable\":\"31.03.2017\",\"direction\":1,\"date_beg\":\"20170331\",\"date_end\":\"20200331\",\"percent\":\"46.6407269563536\",\"price_end\":\"1213.54\",\"percent.readable\":\"46,64%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"827.56\",\"direction.text\":\"up\"},\"date\":\"20200331\",\"6m\":{\"date_beg.readable\":\"30.09.2019\",\"date_beg\":\"20190930\",\"direction\":1,\"percent\":\"20.525986472931\",\"price_end\":\"1213.54\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"percent.readable\":\"20,53%\",\"direction.text\":\"up\",\"price_beg\":\"1006.87\",\"date_end\":\"20200331\"}}}},\"opif_akop\":{\"share_price_table\":{\"pifs_wo_i\":{\"date.readable\":\"29.05.2020\",\"3y\":{\"price_end\":\"4662.65\",\"percent\":\"30.3770957531289\",\"price_beg\":\"3576.28\",\"direction.text\":\"up\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"30,38%\",\"date_end\":\"20200529\",\"direction\":1,\"date_beg.readable\":\"31.05.2017\",\"date_beg\":\"20170531\"},\"date\":\"20200529\",\"6m\":{\"date_end\":\"20200529\",\"percent\":\"4.61855003915355\",\"price_end\":\"4662.65\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"4,62%\",\"direction:up\":1,\"price_beg\":\"4456.81\",\"direction.text\":\"up\",\"date_beg.readable\":\"29.11.2019\",\"direction\":1,\"date_beg\":\"20191129\"},\"1m\":{\"date_end\":\"20200529\",\"percent\":\"1.44156609861216\",\"price_end\":\"4662.65\",\"percent.readable\":\"1,44%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"4596.39\",\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1},\"1y\":{\"date_end\":\"20200529\",\"percent\":\"12.2650936013965\",\"price_end\":\"4662.65\",\"direction:up\":1,\"percent.readable\":\"12,27%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"4153.25\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1,\"date_beg\":\"20190531\"},\"3m\":{\"date_beg.readable\":\"28.02.2020\",\"direction\":1,\"date_beg\":\"20200228\",\"date_end\":\"20200529\",\"price_end\":\"4662.65\",\"percent\":\"2.78870848627139\",\"direction.text\":\"up\",\"price_beg\":\"4536.15\",\"percent.readable\":\"2,79%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1},\"all\":{\"date_end\":\"20200529\",\"direction.text\":\"up\",\"price_beg\":\"1000\",\"percent.readable\":\"366,26%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_end\":\"4662.65\",\"percent\":\"366.265\",\"direction\":1,\"date_beg\":\"20030430\",\"date_beg.readable\":\"30.04.2003\"}},\"pifs_w_i\":{\"date\":\"20200529\",\"6m\":{\"percent\":\"4.61855003915355\",\"price_end\":\"4662.65\",\"percent.readable\":\"4,62%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_beg\":\"4456.81\",\"direction.text\":\"up\",\"date_end\":\"20200529\",\"date_beg.readable\":\"29.11.2019\",\"direction\":1,\"date_beg\":\"20191129\"},\"3y\":{\"direction\":1,\"date_beg.readable\":\"31.05.2017\",\"date_beg\":\"20170531\",\"date_end\":\"20200529\",\"direction.text\":\"up\",\"price_beg\":\"3576.28\",\"direction:up\":1,\"percent.readable\":\"30,38%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"4662.65\",\"percent\":\"30.3770957531289\"},\"date.readable\":\"29.05.2020\",\"all\":{\"direction.text\":\"up\",\"price_beg\":\"1000\",\"percent.readable\":\"366,26%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_end\":\"4662.65\",\"percent\":\"366.265\",\"date_end\":\"20200529\",\"direction\":1,\"date_beg.readable\":\"30.04.2003\",\"date_beg\":\"20030430\"},\"1m\":{\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"1,44%\",\"direction:up\":1,\"price_beg\":\"4596.39\",\"direction.text\":\"up\",\"percent\":\"1.44156609861216\",\"price_end\":\"4662.65\",\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\",\"direction\":1},\"3m\":{\"direction\":1,\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"date_end\":\"20200529\",\"direction.text\":\"up\",\"price_beg\":\"4536.15\",\"direction:up\":1,\"percent.readable\":\"2,79%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"4662.65\",\"percent\":\"2.78870848627139\"},\"1y\":{\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1,\"percent\":\"12.2650936013965\",\"price_end\":\"4662.65\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"12,27%\",\"price_beg\":\"4153.25\",\"direction.text\":\"up\",\"date_end\":\"20200529\"}},\"amiis\":{\"1y\":{\"date_beg.readable\":\"29.03.2019\",\"direction\":1,\"date_beg\":\"20190329\",\"price_end\":\"4430.29\",\"percent\":\"8.94816570841182\",\"direction.text\":\"up\",\"price_beg\":\"4066.42\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"8,95%\",\"direction:up\":1,\"date_end\":\"20200331\"},\"3m\":{\"date_beg\":\"20191231\",\"direction\":-1,\"date_beg.readable\":\"31.12.2019\",\"direction:down\":1,\"date_end\":\"20200331\",\"price_beg\":\"4510.58\",\"direction.text\":\"down\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"1,78%\",\"price_end\":\"4430.29\",\"percent\":\"-1.78003715708401\"},\"1m\":{\"date_beg\":\"20200228\",\"direction\":-1,\"date_beg.readable\":\"28.02.2020\",\"direction:down\":1,\"price_beg\":\"4536.15\",\"direction.text\":\"down\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"2,33%\",\"price_end\":\"4430.29\",\"percent\":\"-2.33369707791849\",\"date_end\":\"20200331\"},\"all\":{\"price_end\":\"4430.29\",\"percent\":\"343.029\",\"price_beg\":\"1000\",\"direction.text\":\"up\",\"direction:up\":1,\"percent.readable\":\"343,03%\",\"date_end.readable\":\"31.03.2020\",\"date_end\":\"20200331\",\"date_beg\":\"20030430\",\"direction\":1,\"date_beg.readable\":\"30.04.2003\"},\"3y\":{\"date_beg.readable\":\"31.03.2017\",\"date_beg\":\"20170331\",\"direction\":1,\"price_beg\":\"3507.51\",\"direction.text\":\"up\",\"percent.readable\":\"26,31%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"price_end\":\"4430.29\",\"percent\":\"26.3086919210494\",\"date_end\":\"20200331\"},\"date.readable\":\"31.03.2020\",\"6m\":{\"percent\":\"1.60143654568554\",\"price_end\":\"4430.29\",\"percent.readable\":\"1,60%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"price_beg\":\"4360.46\",\"direction.text\":\"up\",\"date_end\":\"20200331\",\"direction\":1,\"date_beg\":\"20190930\",\"date_beg.readable\":\"30.09.2019\"},\"date\":\"20200331\"}},\"type\":\"pif\",\"precalc\":{\"pifs_wo_i\":{\"2\":{\"rounded_percents\":18,\"sell_price\":\"4662.65\",\"sell_date\":\"20200529\",\"buy_price\":\"3959.38\",\"buy_date\":\"20180531\"},\"4\":{\"buy_price\":\"3161.43\",\"buy_date\":\"20160531\",\"sell_date\":\"20200529\",\"sell_price\":\"4662.65\",\"rounded_percents\":47},\"5\":{\"sell_price\":\"4662.65\",\"sell_date\":\"20200529\",\"rounded_percents\":71,\"buy_price\":\"2718.99\",\"buy_date\":\"20150529\"},\"3\":{\"sell_price\":\"4662.65\",\"sell_date\":\"20200529\",\"rounded_percents\":30,\"buy_price\":\"3576.28\",\"buy_date\":\"20170531\"},\"1\":{\"rounded_percents\":12,\"sell_date\":\"20200529\",\"sell_price\":\"4662.65\",\"buy_date\":\"20190531\",\"buy_price\":\"4153.25\"}},\"pifs_w_i\":{\"3\":{\"sell_price\":\"4662.65\",\"sell_date\":\"20200529\",\"rounded_percents\":30,\"buy_date\":\"20170531\",\"buy_price\":\"3576.28\"},\"1\":{\"sell_date\":\"20200529\",\"sell_price\":\"4662.65\",\"rounded_percents\":12,\"buy_date\":\"20190531\",\"buy_price\":\"4153.25\"},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"3959.38\",\"rounded_percents\":18,\"sell_price\":\"4662.65\",\"sell_date\":\"20200529\"},\"5\":{\"rounded_percents\":71,\"sell_date\":\"20200529\",\"sell_price\":\"4662.65\",\"buy_date\":\"20150529\",\"buy_price\":\"2718.99\"},\"4\":{\"buy_price\":\"3161.43\",\"buy_date\":\"20160531\",\"rounded_percents\":47,\"sell_date\":\"20200529\",\"sell_price\":\"4662.65\"}},\"amiis\":{\"5\":{\"rounded_percents\":74,\"sell_date\":\"20200331\",\"sell_price\":\"4430.29\",\"buy_date\":\"20150331\",\"buy_price\":\"2547.34\"},\"4\":{\"buy_price\":\"3081.31\",\"buy_date\":\"20160331\",\"rounded_percents\":44,\"sell_date\":\"20200331\",\"sell_price\":\"4430.29\"},\"2\":{\"buy_date\":\"20180330\",\"buy_price\":\"3959.40\",\"sell_date\":\"20200331\",\"sell_price\":\"4430.29\",\"rounded_percents\":12},\"3\":{\"sell_price\":\"4430.29\",\"sell_date\":\"20200331\",\"rounded_percents\":26,\"buy_date\":\"20170331\",\"buy_price\":\"3507.51\"},\"1\":{\"buy_date\":\"20190329\",\"buy_price\":\"4066.42\",\"sell_date\":\"20200331\",\"sell_price\":\"4430.29\",\"rounded_percents\":9}}}},\"oipif_ak_mmvb\":{\"precalc\":{\"pifs_wo_i\":{\"4\":{\"buy_price\":\"876.71\",\"buy_date\":\"20160531\",\"rounded_percents\":68,\"sell_date\":\"20200529\",\"sell_price\":\"1472.64\"},\"5\":{\"buy_date\":\"20150529\",\"buy_price\":\"741.79\",\"sell_date\":\"20200529\",\"sell_price\":\"1472.64\",\"rounded_percents\":99},\"2\":{\"rounded_percents\":31,\"sell_price\":\"1472.64\",\"sell_date\":\"20200529\",\"buy_date\":\"20180531\",\"buy_price\":\"1124.87\"},\"3\":{\"rounded_percents\":65,\"sell_date\":\"20200529\",\"sell_price\":\"1472.64\",\"buy_date\":\"20170531\",\"buy_price\":\"891.03\"},\"1\":{\"buy_price\":\"1356.51\",\"buy_date\":\"20190531\",\"rounded_percents\":9,\"sell_date\":\"20200529\",\"sell_price\":\"1472.64\"}},\"pifs_w_i\":{\"3\":{\"buy_price\":\"891.03\",\"buy_date\":\"20170531\",\"sell_date\":\"20200529\",\"sell_price\":\"1472.64\",\"rounded_percents\":65},\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"1356.51\",\"rounded_percents\":9,\"sell_price\":\"1472.64\",\"sell_date\":\"20200529\"},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"1124.87\",\"rounded_percents\":31,\"sell_price\":\"1472.64\",\"sell_date\":\"20200529\"},\"5\":{\"buy_price\":\"741.79\",\"buy_date\":\"20150529\",\"sell_price\":\"1472.64\",\"sell_date\":\"20200529\",\"rounded_percents\":99},\"4\":{\"sell_date\":\"20200529\",\"sell_price\":\"1472.64\",\"rounded_percents\":68,\"buy_price\":\"876.71\",\"buy_date\":\"20160531\"}},\"amiis\":{\"1\":{\"buy_date\":\"20190329\",\"buy_price\":\"1272.11\",\"sell_price\":\"1346.21\",\"sell_date\":\"20200331\",\"rounded_percents\":6},\"3\":{\"buy_price\":\"937.09\",\"buy_date\":\"20170331\",\"rounded_percents\":44,\"sell_price\":\"1346.21\",\"sell_date\":\"20200331\"},\"2\":{\"sell_date\":\"20200331\",\"sell_price\":\"1346.21\",\"rounded_percents\":21,\"buy_price\":\"1112.50\",\"buy_date\":\"20180330\"},\"4\":{\"buy_date\":\"20160331\",\"buy_price\":\"860.88\",\"sell_date\":\"20200331\",\"sell_price\":\"1346.21\",\"rounded_percents\":56},\"5\":{\"buy_price\":\"724.60\",\"buy_date\":\"20150331\",\"rounded_percents\":86,\"sell_price\":\"1346.21\",\"sell_date\":\"20200331\"}}},\"type\":\"pif\",\"share_price_table\":{\"pifs_w_i\":{\"all\":{\"date_end\":\"20200529\",\"percent.readable\":\"47,28%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"999.91\",\"direction.text\":\"up\",\"percent\":\"47.2772549529458\",\"price_end\":\"1472.64\",\"date_beg.readable\":\"27.12.2006\",\"direction\":1,\"date_beg\":\"20061227\"},\"3m\":{\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":-1,\"direction:down\":1,\"date_end\":\"20200529\",\"direction.text\":\"down\",\"price_beg\":\"1482.69\",\"percent.readable\":\"0,68%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"1472.64\",\"percent\":\"-0.677822066649128\"},\"1y\":{\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1,\"direction.text\":\"up\",\"price_beg\":\"1356.51\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"8,56%\",\"direction:up\":1,\"price_end\":\"1472.64\",\"percent\":\"8.56093946966848\",\"date_end\":\"20200529\"},\"1m\":{\"direction\":1,\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\",\"date_end\":\"20200529\",\"price_end\":\"1472.64\",\"percent\":\"3.49204118205137\",\"direction.text\":\"up\",\"price_beg\":\"1422.95\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,49%\"},\"6m\":{\"direction\":-1,\"date_beg\":\"20191129\",\"date_beg.readable\":\"29.11.2019\",\"direction:down\":1,\"percent.readable\":\"5,57%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"1559.58\",\"direction.text\":\"down\",\"percent\":\"-5.57457777093832\",\"price_end\":\"1472.64\",\"date_end\":\"20200529\"},\"date\":\"20200529\",\"date.readable\":\"29.05.2020\",\"3y\":{\"date_end\":\"20200529\",\"percent\":\"65.2738965018013\",\"price_end\":\"1472.64\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"65,27%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"891.03\",\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\",\"direction\":1}},\"pifs_wo_i\":{\"1y\":{\"direction\":1,\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\",\"date_end\":\"20200529\",\"percent\":\"8.56093946966848\",\"price_end\":\"1472.64\",\"percent.readable\":\"8,56%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"1356.51\"},\"3m\":{\"direction:down\":1,\"direction\":-1,\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"price_end\":\"1472.64\",\"percent\":\"-0.677822066649128\",\"direction.text\":\"down\",\"price_beg\":\"1482.69\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,68%\",\"date_end\":\"20200529\"},\"1m\":{\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,49%\",\"direction:up\":1,\"price_beg\":\"1422.95\",\"direction.text\":\"up\",\"percent\":\"3.49204118205137\",\"price_end\":\"1472.64\",\"date_end\":\"20200529\",\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\",\"direction\":1},\"all\":{\"date_end\":\"20200529\",\"price_beg\":\"999.91\",\"direction.text\":\"up\",\"percent.readable\":\"47,28%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_end\":\"1472.64\",\"percent\":\"47.2772549529458\",\"date_beg\":\"20061227\",\"date_beg.readable\":\"27.12.2006\",\"direction\":1},\"3y\":{\"direction\":1,\"date_beg.readable\":\"31.05.2017\",\"date_beg\":\"20170531\",\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"65,27%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"891.03\",\"percent\":\"65.2738965018013\",\"price_end\":\"1472.64\"},\"date.readable\":\"29.05.2020\",\"6m\":{\"direction:down\":1,\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction\":-1,\"percent\":\"-5.57457777093832\",\"price_end\":\"1472.64\",\"percent.readable\":\"5,57%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"down\",\"price_beg\":\"1559.58\",\"date_end\":\"20200529\"},\"date\":\"20200529\"},\"amiis\":{\"all\":{\"direction\":1,\"date_beg\":\"20061227\",\"date_beg.readable\":\"27.12.2006\",\"date_end\":\"20200331\",\"price_end\":\"1346.21\",\"percent\":\"34.6331169805283\",\"direction.text\":\"up\",\"price_beg\":\"999.91\",\"direction:up\":1,\"percent.readable\":\"34,63%\",\"date_end.readable\":\"31.03.2020\"},\"3m\":{\"date_end\":\"20200331\",\"price_beg\":\"1627.86\",\"direction.text\":\"down\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"17,30%\",\"price_end\":\"1346.21\",\"percent\":\"-17.3018564249997\",\"date_beg.readable\":\"31.12.2019\",\"direction\":-1,\"date_beg\":\"20191231\",\"direction:down\":1},\"1y\":{\"direction\":1,\"date_beg\":\"20190329\",\"date_beg.readable\":\"29.03.2019\",\"date_end\":\"20200331\",\"price_end\":\"1346.21\",\"percent\":\"5.82496796660666\",\"direction.text\":\"up\",\"price_beg\":\"1272.11\",\"direction:up\":1,\"percent.readable\":\"5,82%\",\"date_end.readable\":\"31.03.2020\"},\"1m\":{\"direction:down\":1,\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":-1,\"date_end\":\"20200331\",\"percent\":\"-9.20489111007696\",\"price_end\":\"1346.21\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"9,20%\",\"price_beg\":\"1482.69\",\"direction.text\":\"down\"},\"6m\":{\"direction:down\":1,\"date_beg.readable\":\"30.09.2019\",\"direction\":-1,\"date_beg\":\"20190930\",\"date_end\":\"20200331\",\"price_end\":\"1346.21\",\"percent\":\"-7.69141101770458\",\"price_beg\":\"1458.38\",\"direction.text\":\"down\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"7,69%\"},\"date\":\"20200331\",\"3y\":{\"direction.text\":\"up\",\"price_beg\":\"937.09\",\"percent.readable\":\"43,66%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"price_end\":\"1346.21\",\"percent\":\"43.6585600102445\",\"date_end\":\"20200331\",\"direction\":1,\"date_beg.readable\":\"31.03.2017\",\"date_beg\":\"20170331\"},\"date.readable\":\"31.03.2020\"}}},\"bonds\":{\"precalc\":{\"pifs_wo_i\":{\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"1.13615\",\"rounded_percents\":8,\"sell_price\":\"1.22972\",\"sell_date\":\"20200529\"},\"3\":{\"buy_price\":\"1.00000\",\"buy_date\":\"20170531\",\"sell_date\":\"20200529\",\"sell_price\":\"1.22972\",\"rounded_percents\":23},\"2\":{\"buy_price\":\"1.08877\",\"buy_date\":\"20180531\",\"sell_date\":\"20200529\",\"sell_price\":\"1.22972\",\"rounded_percents\":13}},\"pifs_w_i\":{\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"1.08877\",\"sell_price\":\"1.22972\",\"sell_date\":\"20200529\",\"rounded_percents\":13},\"3\":{\"rounded_percents\":23,\"sell_date\":\"20200529\",\"sell_price\":\"1.22972\",\"buy_date\":\"20170531\",\"buy_price\":\"1.00000\"},\"1\":{\"rounded_percents\":8,\"sell_price\":\"1.22972\",\"sell_date\":\"20200529\",\"buy_price\":\"1.13615\",\"buy_date\":\"20190531\"}},\"amiis\":{\"2\":{\"buy_date\":\"20180330\",\"buy_price\":\"1.09481\",\"rounded_percents\":12,\"sell_date\":\"20200331\",\"sell_price\":\"1.22972\"},\"1\":{\"buy_price\":\"1.11309\",\"buy_date\":\"20190329\",\"sell_price\":\"1.22972\",\"sell_date\":\"20200331\",\"rounded_percents\":10}}},\"type\":\"am\"},\"zpifn_centercity\":{\"share_price_table\":{\"amiis\":{\"date.readable\":\"31.03.2020\",\"3m\":{\"date_beg.readable\":\"31.12.2019\",\"direction\":1,\"date_beg\":\"20191231\",\"direction.text\":\"up\",\"price_beg\":\"336884.76\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"3,25%\",\"direction:up\":1,\"price_end\":\"347827.04\",\"percent\":\"3.2480780668143\",\"date_end\":\"20200331\"},\"1y\":{\"direction\":1,\"date_beg.readable\":\"29.03.2019\",\"date_beg\":\"20190329\",\"price_beg\":\"316945.50\",\"direction.text\":\"up\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"percent.readable\":\"9,74%\",\"price_end\":\"347827.04\",\"percent\":\"9.74348586744409\",\"date_end\":\"20200331\"},\"1m\":{\"direction\":1,\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"date_end\":\"20200331\",\"direction.text\":\"up\",\"price_beg\":\"335871.31\",\"percent.readable\":\"3,56%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"price_end\":\"347827.04\",\"percent\":\"3.55961633043323\"},\"all\":{\"percent\":\"15.9423466666667\",\"price_end\":\"347827.04\",\"direction:up\":1,\"percent.readable\":\"15,94%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"300000\",\"direction.text\":\"up\",\"date_end\":\"20200331\",\"date_beg.readable\":\"24.10.2017\",\"direction\":1,\"date_beg\":\"20171024\"},\"6m\":{\"date_end\":\"20200331\",\"direction:up\":1,\"percent.readable\":\"2,75%\",\"date_end.readable\":\"31.03.2020\",\"direction.text\":\"up\",\"price_beg\":\"338510.66\",\"percent\":\"2.75216739112442\",\"price_end\":\"347827.04\",\"direction\":1,\"date_beg.readable\":\"30.09.2019\",\"date_beg\":\"20190930\"},\"date\":\"20200331\"},\"pifs_w_i\":{\"all\":{\"direction\":1,\"date_beg\":\"20171024\",\"date_beg.readable\":\"24.10.2017\",\"date_end\":\"20200529\",\"price_end\":\"346692.28\",\"percent\":\"15.5640933333333\",\"direction.text\":\"up\",\"price_beg\":\"300000\",\"percent.readable\":\"15,56%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1},\"6m\":{\"direction.text\":\"up\",\"price_beg\":\"337398.67\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"2,75%\",\"direction:up\":1,\"price_end\":\"346692.28\",\"percent\":\"2.75448922190476\",\"date_end\":\"20200529\",\"date_beg\":\"20191129\",\"direction\":1,\"date_beg.readable\":\"29.11.2019\"},\"date\":\"20200529\",\"date.readable\":\"29.05.2020\",\"1y\":{\"date_beg.readable\":\"31.05.2019\",\"direction\":1,\"date_beg\":\"20190531\",\"percent.readable\":\"7,28%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"323166.22\",\"percent\":\"7.27986359465417\",\"price_end\":\"346692.28\",\"date_end\":\"20200529\"},\"3m\":{\"direction\":1,\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"date_end\":\"20200529\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,22%\",\"price_beg\":\"335871.31\",\"direction.text\":\"up\",\"percent\":\"3.22176073925456\",\"price_end\":\"346692.28\"},\"1m\":{\"date_end\":\"20200529\",\"price_end\":\"346692.28\",\"percent\":\"-0.143629895882952\",\"direction.text\":\"down\",\"price_beg\":\"347190.95\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,14%\",\"direction:down\":1,\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":-1}},\"pifs_wo_i\":{\"1y\":{\"direction\":1,\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\",\"date_end\":\"20200529\",\"direction:up\":1,\"percent.readable\":\"7,28%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"323166.22\",\"direction.text\":\"up\",\"percent\":\"7.27986359465417\",\"price_end\":\"346692.28\"},\"3m\":{\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":1,\"price_end\":\"346692.28\",\"percent\":\"3.22176073925456\",\"direction.text\":\"up\",\"price_beg\":\"335871.31\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,22%\",\"direction:up\":1,\"date_end\":\"20200529\"},\"date.readable\":\"29.05.2020\",\"1m\":{\"direction:down\":1,\"direction\":-1,\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"date_end\":\"20200529\",\"percent\":\"-0.143629895882952\",\"price_end\":\"346692.28\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,14%\",\"price_beg\":\"347190.95\",\"direction.text\":\"down\"},\"all\":{\"direction\":1,\"date_beg\":\"20171024\",\"date_beg.readable\":\"24.10.2017\",\"date_end\":\"20200529\",\"percent\":\"15.5640933333333\",\"price_end\":\"346692.28\",\"percent.readable\":\"15,56%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"300000\"},\"6m\":{\"date_beg\":\"20191129\",\"date_beg.readable\":\"29.11.2019\",\"direction\":1,\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"2,75%\",\"direction:up\":1,\"price_beg\":\"337398.67\",\"direction.text\":\"up\",\"percent\":\"2.75448922190476\",\"price_end\":\"346692.28\"},\"date\":\"20200529\"}},\"precalc\":{\"amiis\":{\"1\":{\"rounded_percents\":10,\"sell_price\":\"347827.04\",\"sell_date\":\"20200331\",\"buy_price\":\"316945.50\",\"buy_date\":\"20190329\"},\"2\":{\"buy_date\":\"20180330\",\"buy_price\":\"298887.40\",\"rounded_percents\":16,\"sell_date\":\"20200331\",\"sell_price\":\"347827.04\"}},\"pifs_wo_i\":{\"2\":{\"sell_price\":\"346692.28\",\"sell_date\":\"20200529\",\"rounded_percents\":16,\"buy_price\":\"298190.57\",\"buy_date\":\"20180531\"},\"1\":{\"sell_date\":\"20200529\",\"sell_price\":\"346692.28\",\"rounded_percents\":7,\"buy_price\":\"323166.22\",\"buy_date\":\"20190531\"}},\"pifs_w_i\":{\"2\":{\"rounded_percents\":16,\"sell_price\":\"346692.28\",\"sell_date\":\"20200529\",\"buy_date\":\"20180531\",\"buy_price\":\"298190.57\"},\"1\":{\"sell_price\":\"346692.28\",\"sell_date\":\"20200529\",\"rounded_percents\":7,\"buy_date\":\"20190531\",\"buy_price\":\"323166.22\"}}},\"type\":\"pif\"},\"future\":{\"type\":\"iis\",\"precalc\":{\"pifs_wo_i\":{\"1\":{\"buy_price\":\"1.50682\",\"buy_date\":\"20190531\",\"sell_date\":\"20200529\",\"sell_price\":\"1.63915\",\"rounded_percents\":9},\"3\":{\"sell_date\":\"20200529\",\"sell_price\":\"1.63915\",\"rounded_percents\":28,\"buy_price\":\"1.27976\",\"buy_date\":\"20170531\"},\"4\":{\"buy_date\":\"20160531\",\"buy_price\":\"1.14757\",\"rounded_percents\":43,\"sell_price\":\"1.63915\",\"sell_date\":\"20200529\"},\"5\":{\"buy_price\":\"1.03622\",\"buy_date\":\"20150529\",\"rounded_percents\":58,\"sell_price\":\"1.63915\",\"sell_date\":\"20200529\"},\"2\":{\"sell_price\":\"1.63915\",\"sell_date\":\"20200529\",\"rounded_percents\":16,\"buy_price\":\"1.41078\",\"buy_date\":\"20180531\"}},\"pifs_w_i\":{\"2\":{\"rounded_percents\":16,\"sell_price\":\"1.63915\",\"sell_date\":\"20200529\",\"buy_price\":\"1.41078\",\"buy_date\":\"20180531\"},\"5\":{\"buy_date\":\"20150529\",\"buy_price\":\"1.03622\",\"rounded_percents\":58,\"sell_price\":\"1.63915\",\"sell_date\":\"20200529\"},\"4\":{\"buy_price\":\"1.14757\",\"buy_date\":\"20160531\",\"sell_price\":\"1.63915\",\"sell_date\":\"20200529\",\"rounded_percents\":43},\"3\":{\"buy_price\":\"1.27976\",\"buy_date\":\"20170531\",\"rounded_percents\":28,\"sell_date\":\"20200529\",\"sell_price\":\"1.63915\"},\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"1.50682\",\"sell_date\":\"20200529\",\"sell_price\":\"1.63915\",\"rounded_percents\":9}},\"amiis\":{\"1\":{\"sell_date\":\"20200331\",\"sell_price\":\"1.63915\",\"rounded_percents\":12,\"buy_price\":\"1.45767\",\"buy_date\":\"20190329\"},\"3\":{\"buy_price\":\"1.25859\",\"buy_date\":\"20170331\",\"sell_date\":\"20200331\",\"sell_price\":\"1.63915\",\"rounded_percents\":30},\"4\":{\"buy_price\":\"1.13362\",\"buy_date\":\"20160331\",\"sell_date\":\"20200331\",\"sell_price\":\"1.63915\",\"rounded_percents\":45},\"5\":{\"buy_price\":\"1.02725\",\"buy_date\":\"20150331\",\"rounded_percents\":60,\"sell_price\":\"1.63915\",\"sell_date\":\"20200331\"},\"2\":{\"rounded_percents\":17,\"sell_date\":\"20200331\",\"sell_price\":\"1.63915\",\"buy_date\":\"20180330\",\"buy_price\":\"1.40265\"}}}},\"zpif_osk\":{\"share_price_table\":{\"amiis\":{\"date.readable\":\"31.03.2020\",\"3y\":{\"direction\":0,\"date_beg.readable\":\"31.03.2017\",\"date_beg\":\"20170331\",\"price_end\":\"1774781.16\",\"percent\":0,\"direction.text\":\"center\",\"price_beg\":\"1774781.16\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"31.03.2020\",\"date_end\":\"20200331\"},\"6m\":{\"direction\":0,\"date_beg\":\"20190930\",\"date_beg.readable\":\"30.09.2019\",\"percent\":0,\"price_end\":\"1774781.16\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"1774781.16\",\"direction.text\":\"center\",\"date_end\":\"20200331\"},\"date\":\"20200331\",\"3m\":{\"date_end\":\"20200331\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"31.03.2020\",\"direction.text\":\"center\",\"price_beg\":\"1774781.16\",\"percent\":0,\"price_end\":\"1774781.16\",\"date_beg.readable\":\"31.12.2019\",\"date_beg\":\"20191231\",\"direction\":0},\"1y\":{\"date_beg.readable\":\"29.03.2019\",\"date_beg\":\"20190329\",\"direction\":0,\"date_end\":\"20200331\",\"price_beg\":\"1774781.16\",\"direction.text\":\"center\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"31.03.2020\",\"price_end\":\"1774781.16\",\"percent\":0},\"1m\":{\"date_beg.readable\":\"28.02.2020\",\"direction\":0,\"date_beg\":\"20200228\",\"date_end\":\"20200331\",\"direction.text\":\"center\",\"price_beg\":\"1774781.16\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"31.03.2020\",\"price_end\":\"1774781.16\",\"percent\":0},\"all\":{\"date_end\":\"20200331\",\"price_beg\":\"1008858.64\",\"direction.text\":\"up\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"percent.readable\":\"75,92%\",\"price_end\":\"1774781.16\",\"percent\":\"75.9197066498831\",\"date_beg.readable\":\"31.08.2006\",\"date_beg\":\"20060831\",\"direction\":1}},\"pifs_w_i\":{\"1m\":{\"percent\":0,\"price_end\":\"1774781.16\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\",\"direction.text\":\"center\",\"price_beg\":\"1774781.16\",\"date_end\":\"20200529\",\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\",\"direction\":0},\"1y\":{\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\",\"direction.text\":\"center\",\"price_beg\":\"1774781.16\",\"percent\":0,\"price_end\":\"1774781.16\",\"date_end\":\"20200529\",\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"direction\":0},\"3m\":{\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":0,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\",\"direction.text\":\"center\",\"price_beg\":\"1774781.16\",\"percent\":0,\"price_end\":\"1774781.16\",\"date_end\":\"20200529\"},\"all\":{\"percent\":\"75.9197066498831\",\"price_end\":\"1774781.16\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"75,92%\",\"direction.text\":\"up\",\"price_beg\":\"1008858.64\",\"date_end\":\"20200529\",\"date_beg.readable\":\"31.08.2006\",\"date_beg\":\"20060831\",\"direction\":1},\"3y\":{\"date_beg.readable\":\"31.05.2017\",\"direction\":0,\"date_beg\":\"20170531\",\"percent\":0,\"price_end\":\"1774781.16\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\",\"price_beg\":\"1774781.16\",\"direction.text\":\"center\",\"date_end\":\"20200529\"},\"date.readable\":\"29.05.2020\",\"date\":\"20200529\",\"6m\":{\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction\":0,\"date_end\":\"20200529\",\"percent\":0,\"price_end\":\"1774781.16\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\",\"direction.text\":\"center\",\"price_beg\":\"1774781.16\"}},\"pifs_wo_i\":{\"1y\":{\"date_end\":\"20200529\",\"percent\":0,\"price_end\":\"1774781.16\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\",\"direction.text\":\"center\",\"price_beg\":\"1774781.16\",\"date_beg.readable\":\"31.05.2019\",\"direction\":0,\"date_beg\":\"20190531\"},\"3m\":{\"date_end\":\"20200529\",\"price_end\":\"1774781.16\",\"percent\":0,\"price_beg\":\"1774781.16\",\"direction.text\":\"center\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\",\"date_beg\":\"20200228\",\"direction\":0,\"date_beg.readable\":\"28.02.2020\"},\"1m\":{\"percent\":0,\"price_end\":\"1774781.16\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\",\"price_beg\":\"1774781.16\",\"direction.text\":\"center\",\"date_end\":\"20200529\",\"date_beg.readable\":\"30.04.2020\",\"direction\":0,\"date_beg\":\"20200430\"},\"all\":{\"price_end\":\"1774781.16\",\"percent\":\"75.9197066498831\",\"price_beg\":\"1008858.64\",\"direction.text\":\"up\",\"percent.readable\":\"75,92%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"date_end\":\"20200529\",\"date_beg\":\"20060831\",\"direction\":1,\"date_beg.readable\":\"31.08.2006\"},\"3y\":{\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\",\"direction.text\":\"center\",\"price_beg\":\"1774781.16\",\"percent\":0,\"price_end\":\"1774781.16\",\"date_beg.readable\":\"31.05.2017\",\"date_beg\":\"20170531\",\"direction\":0},\"date.readable\":\"29.05.2020\",\"6m\":{\"date_end\":\"20200529\",\"price_beg\":\"1774781.16\",\"direction.text\":\"center\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"1774781.16\",\"percent\":0,\"date_beg\":\"20191129\",\"direction\":0,\"date_beg.readable\":\"29.11.2019\"},\"date\":\"20200529\"}},\"type\":\"pif\",\"precalc\":{\"pifs_w_i\":{\"3\":{\"sell_price\":\"1774781.16\",\"sell_date\":\"20200529\",\"rounded_percents\":0,\"buy_price\":\"1774781.16\",\"buy_date\":\"20170531\"},\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"1774781.16\",\"sell_price\":\"1774781.16\",\"sell_date\":\"20200529\",\"rounded_percents\":0},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"1774781.16\",\"rounded_percents\":0,\"sell_price\":\"1774781.16\",\"sell_date\":\"20200529\"},\"4\":{\"rounded_percents\":0,\"sell_price\":\"1774781.16\",\"sell_date\":\"20200529\",\"buy_price\":\"1774781.16\",\"buy_date\":\"20160531\"},\"5\":{\"buy_price\":\"1774781.16\",\"buy_date\":\"20150529\",\"sell_price\":\"1774781.16\",\"sell_date\":\"20200529\",\"rounded_percents\":0}},\"pifs_wo_i\":{\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"1774781.16\",\"rounded_percents\":0,\"sell_price\":\"1774781.16\",\"sell_date\":\"20200529\"},\"3\":{\"buy_price\":\"1774781.16\",\"buy_date\":\"20170531\",\"sell_price\":\"1774781.16\",\"sell_date\":\"20200529\",\"rounded_percents\":0},\"5\":{\"buy_price\":\"1774781.16\",\"buy_date\":\"20150529\",\"rounded_percents\":0,\"sell_price\":\"1774781.16\",\"sell_date\":\"20200529\"},\"4\":{\"rounded_percents\":0,\"sell_price\":\"1774781.16\",\"sell_date\":\"20200529\",\"buy_price\":\"1774781.16\",\"buy_date\":\"20160531\"},\"2\":{\"rounded_percents\":0,\"sell_price\":\"1774781.16\",\"sell_date\":\"20200529\",\"buy_date\":\"20180531\",\"buy_price\":\"1774781.16\"}},\"amiis\":{\"2\":{\"sell_price\":\"1774781.16\",\"sell_date\":\"20200331\",\"rounded_percents\":0,\"buy_date\":\"20180330\",\"buy_price\":\"1774781.16\"},\"4\":{\"rounded_percents\":0,\"sell_price\":\"1774781.16\",\"sell_date\":\"20200331\",\"buy_price\":\"1774781.16\",\"buy_date\":\"20160331\"},\"5\":{\"sell_date\":\"20200331\",\"sell_price\":\"1774781.16\",\"rounded_percents\":0,\"buy_price\":\"1774781.16\",\"buy_date\":\"20150331\"},\"3\":{\"buy_price\":\"1774781.16\",\"buy_date\":\"20170331\",\"rounded_percents\":0,\"sell_date\":\"20200331\",\"sell_price\":\"1774781.16\"},\"1\":{\"buy_date\":\"20190329\",\"buy_price\":\"1774781.16\",\"sell_date\":\"20200331\",\"sell_price\":\"1774781.16\",\"rounded_percents\":0}}}},\"opif_aks\":{\"precalc\":{\"pifs_w_i\":{\"1\":{\"rounded_percents\":8,\"sell_date\":\"20200529\",\"sell_price\":\"2446.18\",\"buy_date\":\"20190531\",\"buy_price\":\"2258.11\"},\"3\":{\"rounded_percents\":59,\"sell_price\":\"2446.18\",\"sell_date\":\"20200529\",\"buy_date\":\"20170531\",\"buy_price\":\"1534.86\"},\"2\":{\"sell_price\":\"2446.18\",\"sell_date\":\"20200529\",\"rounded_percents\":23,\"buy_date\":\"20180531\",\"buy_price\":\"1996.50\"},\"4\":{\"buy_price\":\"1598.52\",\"buy_date\":\"20160531\",\"sell_price\":\"2446.18\",\"sell_date\":\"20200529\",\"rounded_percents\":53},\"5\":{\"rounded_percents\":96,\"sell_date\":\"20200529\",\"sell_price\":\"2446.18\",\"buy_date\":\"20150529\",\"buy_price\":\"1246.85\"}},\"pifs_wo_i\":{\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"2258.11\",\"rounded_percents\":8,\"sell_price\":\"2446.18\",\"sell_date\":\"20200529\"},\"3\":{\"sell_price\":\"2446.18\",\"sell_date\":\"20200529\",\"rounded_percents\":59,\"buy_date\":\"20170531\",\"buy_price\":\"1534.86\"},\"5\":{\"buy_price\":\"1246.85\",\"buy_date\":\"20150529\",\"sell_price\":\"2446.18\",\"sell_date\":\"20200529\",\"rounded_percents\":96},\"4\":{\"sell_price\":\"2446.18\",\"sell_date\":\"20200529\",\"rounded_percents\":53,\"buy_date\":\"20160531\",\"buy_price\":\"1598.52\"},\"2\":{\"sell_price\":\"2446.18\",\"sell_date\":\"20200529\",\"rounded_percents\":23,\"buy_price\":\"1996.50\",\"buy_date\":\"20180531\"}},\"amiis\":{\"2\":{\"buy_price\":\"1958.89\",\"buy_date\":\"20180330\",\"sell_date\":\"20200331\",\"sell_price\":\"2295.61\",\"rounded_percents\":17},\"4\":{\"buy_price\":\"1595.26\",\"buy_date\":\"20160331\",\"rounded_percents\":44,\"sell_date\":\"20200331\",\"sell_price\":\"2295.61\"},\"5\":{\"buy_price\":\"1316.35\",\"buy_date\":\"20150331\",\"sell_date\":\"20200331\",\"sell_price\":\"2295.61\",\"rounded_percents\":74},\"1\":{\"buy_price\":\"2136.18\",\"buy_date\":\"20190329\",\"sell_date\":\"20200331\",\"sell_price\":\"2295.61\",\"rounded_percents\":7},\"3\":{\"buy_price\":\"1591.22\",\"buy_date\":\"20170331\",\"sell_price\":\"2295.61\",\"sell_date\":\"20200331\",\"rounded_percents\":44}}},\"type\":\"pif\",\"share_price_table\":{\"amiis\":{\"3y\":{\"date_end\":\"20200331\",\"direction.text\":\"up\",\"price_beg\":\"1591.22\",\"direction:up\":1,\"percent.readable\":\"44,27%\",\"date_end.readable\":\"31.03.2020\",\"price_end\":\"2295.61\",\"percent\":\"44.2672917635525\",\"direction\":1,\"date_beg\":\"20170331\",\"date_beg.readable\":\"31.03.2017\"},\"date.readable\":\"31.03.2020\",\"date\":\"20200331\",\"6m\":{\"date_beg.readable\":\"30.09.2019\",\"date_beg\":\"20190930\",\"direction\":-1,\"direction:down\":1,\"direction.text\":\"down\",\"price_beg\":\"2418.46\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"5,08%\",\"price_end\":\"2295.61\",\"percent\":\"-5.07967880386693\",\"date_end\":\"20200331\"},\"1m\":{\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":-1,\"direction:down\":1,\"date_end\":\"20200331\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"8,09%\",\"price_beg\":\"2497.73\",\"direction.text\":\"down\",\"percent\":\"-8.09214767008444\",\"price_end\":\"2295.61\"},\"3m\":{\"direction:down\":1,\"date_beg\":\"20191231\",\"direction\":-1,\"date_beg.readable\":\"31.12.2019\",\"percent\":\"-12.1808555405085\",\"price_end\":\"2295.61\",\"percent.readable\":\"12,18%\",\"date_end.readable\":\"31.03.2020\",\"direction.text\":\"down\",\"price_beg\":\"2614.02\",\"date_end\":\"20200331\"},\"1y\":{\"price_end\":\"2295.61\",\"percent\":\"7.46332237920026\",\"price_beg\":\"2136.18\",\"direction.text\":\"up\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"7,46%\",\"date_end\":\"20200331\",\"direction\":1,\"date_beg.readable\":\"29.03.2019\",\"date_beg\":\"20190329\"},\"all\":{\"direction.text\":\"up\",\"price_beg\":\"999.96\",\"percent.readable\":\"129,57%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"price_end\":\"2295.61\",\"percent\":\"129.570182807312\",\"date_end\":\"20200331\",\"direction\":1,\"date_beg.readable\":\"15.05.2006\",\"date_beg\":\"20060515\"}},\"pifs_w_i\":{\"3y\":{\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"date_beg\":\"20170531\",\"date_end\":\"20200529\",\"price_end\":\"2446.18\",\"percent\":\"59.3747963983686\",\"price_beg\":\"1534.86\",\"direction.text\":\"up\",\"percent.readable\":\"59,37%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1},\"date.readable\":\"29.05.2020\",\"6m\":{\"direction:down\":1,\"direction\":-1,\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"price_end\":\"2446.18\",\"percent\":\"-3.83491958659135\",\"direction.text\":\"down\",\"price_beg\":\"2543.73\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,83%\",\"date_end\":\"20200529\"},\"date\":\"20200529\",\"1y\":{\"direction\":1,\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"price_end\":\"2446.18\",\"percent\":\"8.32864652297717\",\"direction.text\":\"up\",\"price_beg\":\"2258.11\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"8,33%\",\"direction:up\":1,\"date_end\":\"20200529\"},\"3m\":{\"date_end\":\"20200529\",\"price_end\":\"2446.18\",\"percent\":\"-2.06387399758982\",\"direction.text\":\"down\",\"price_beg\":\"2497.73\",\"percent.readable\":\"2,06%\",\"date_end.readable\":\"29.05.2020\",\"direction:down\":1,\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":-1},\"1m\":{\"date_end\":\"20200529\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"1,93%\",\"direction.text\":\"up\",\"price_beg\":\"2399.84\",\"percent\":\"1.93096206413759\",\"price_end\":\"2446.18\",\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\",\"direction\":1},\"all\":{\"date_end\":\"20200529\",\"percent.readable\":\"144,63%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"999.96\",\"direction.text\":\"up\",\"percent\":\"144.627785111404\",\"price_end\":\"2446.18\",\"direction\":1,\"date_beg.readable\":\"15.05.2006\",\"date_beg\":\"20060515\"}},\"pifs_wo_i\":{\"3m\":{\"direction\":-1,\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction:down\":1,\"price_beg\":\"2497.73\",\"direction.text\":\"down\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"2,06%\",\"price_end\":\"2446.18\",\"percent\":\"-2.06387399758982\",\"date_end\":\"20200529\"},\"1y\":{\"date_end\":\"20200529\",\"percent.readable\":\"8,33%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_beg\":\"2258.11\",\"direction.text\":\"up\",\"percent\":\"8.32864652297717\",\"price_end\":\"2446.18\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1,\"date_beg\":\"20190531\"},\"1m\":{\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1,\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"1,93%\",\"direction:up\":1,\"price_beg\":\"2399.84\",\"direction.text\":\"up\",\"percent\":\"1.93096206413759\",\"price_end\":\"2446.18\"},\"all\":{\"date_end\":\"20200529\",\"price_beg\":\"999.96\",\"direction.text\":\"up\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"144,63%\",\"direction:up\":1,\"price_end\":\"2446.18\",\"percent\":\"144.627785111404\",\"direction\":1,\"date_beg.readable\":\"15.05.2006\",\"date_beg\":\"20060515\"},\"3y\":{\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"date_beg\":\"20170531\",\"price_end\":\"2446.18\",\"percent\":\"59.3747963983686\",\"price_beg\":\"1534.86\",\"direction.text\":\"up\",\"percent.readable\":\"59,37%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"date_end\":\"20200529\"},\"date.readable\":\"29.05.2020\",\"6m\":{\"percent.readable\":\"3,83%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"2543.73\",\"direction.text\":\"down\",\"percent\":\"-3.83491958659135\",\"price_end\":\"2446.18\",\"date_end\":\"20200529\",\"direction\":-1,\"date_beg\":\"20191129\",\"date_beg.readable\":\"29.11.2019\",\"direction:down\":1},\"date\":\"20200529\"}}},\"zpifn_zhil\":{\"share_price_table\":{\"pifs_wo_i\":{\"date.readable\":\"29.05.2020\",\"3y\":{\"direction:down\":1,\"date_beg.readable\":\"31.05.2017\",\"direction\":-1,\"date_beg\":\"20170531\",\"date_end\":\"20200529\",\"price_end\":\"347.28\",\"percent\":\"-51.2185529069686\",\"price_beg\":\"711.91\",\"direction.text\":\"down\",\"percent.readable\":\"51,22%\",\"date_end.readable\":\"29.05.2020\"},\"6m\":{\"direction:down\":1,\"direction\":-1,\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"percent\":\"-10.846404641491\",\"price_end\":\"347.28\",\"percent.readable\":\"10,85%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"down\",\"price_beg\":\"389.53\",\"date_end\":\"20200529\"},\"date\":\"20200529\",\"3m\":{\"percent\":\"-3.03504118386151\",\"price_end\":\"347.28\",\"percent.readable\":\"3,04%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"358.15\",\"direction.text\":\"down\",\"date_end\":\"20200529\",\"direction:down\":1,\"date_beg\":\"20200228\",\"direction\":-1,\"date_beg.readable\":\"28.02.2020\"},\"1y\":{\"price_end\":\"347.28\",\"percent\":\"-21.9385002697357\",\"price_beg\":\"444.88\",\"direction.text\":\"down\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"21,94%\",\"date_end\":\"20200529\",\"direction:down\":1,\"direction\":-1,\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\"},\"1m\":{\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,12%\",\"price_beg\":\"347.70\",\"direction.text\":\"down\",\"percent\":\"-0.120793787748056\",\"price_end\":\"347.28\",\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\",\"direction\":-1,\"direction:down\":1},\"all\":{\"direction:down\":1,\"date_beg.readable\":\"21.10.2010\",\"direction\":-1,\"date_beg\":\"20101021\",\"percent\":\"-65.272\",\"price_end\":\"347.28\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"65,27%\",\"price_beg\":\"1000.00\",\"direction.text\":\"down\",\"date_end\":\"20200529\"}},\"pifs_w_i\":{\"all\":{\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"65,27%\",\"price_beg\":\"1000.00\",\"direction.text\":\"down\",\"percent\":\"-65.272\",\"price_end\":\"347.28\",\"direction\":-1,\"date_beg\":\"20101021\",\"date_beg.readable\":\"21.10.2010\",\"direction:down\":1},\"1y\":{\"date_end\":\"20200529\",\"price_end\":\"347.28\",\"percent\":\"-21.9385002697357\",\"direction.text\":\"down\",\"price_beg\":\"444.88\",\"percent.readable\":\"21,94%\",\"date_end.readable\":\"29.05.2020\",\"direction:down\":1,\"direction\":-1,\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\"},\"3m\":{\"price_beg\":\"358.15\",\"direction.text\":\"down\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,04%\",\"price_end\":\"347.28\",\"percent\":\"-3.03504118386151\",\"date_end\":\"20200529\",\"date_beg.readable\":\"28.02.2020\",\"direction\":-1,\"date_beg\":\"20200228\",\"direction:down\":1},\"1m\":{\"date_beg.readable\":\"30.04.2020\",\"direction\":-1,\"date_beg\":\"20200430\",\"direction:down\":1,\"percent.readable\":\"0,12%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"347.70\",\"direction.text\":\"down\",\"percent\":\"-0.120793787748056\",\"price_end\":\"347.28\",\"date_end\":\"20200529\"},\"6m\":{\"price_end\":\"347.28\",\"percent\":\"-10.846404641491\",\"price_beg\":\"389.53\",\"direction.text\":\"down\",\"percent.readable\":\"10,85%\",\"date_end.readable\":\"29.05.2020\",\"date_end\":\"20200529\",\"direction:down\":1,\"date_beg\":\"20191129\",\"direction\":-1,\"date_beg.readable\":\"29.11.2019\"},\"date\":\"20200529\",\"3y\":{\"direction\":-1,\"date_beg.readable\":\"31.05.2017\",\"date_beg\":\"20170531\",\"direction:down\":1,\"date_end\":\"20200529\",\"price_beg\":\"711.91\",\"direction.text\":\"down\",\"percent.readable\":\"51,22%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"347.28\",\"percent\":\"-51.2185529069686\"},\"date.readable\":\"29.05.2020\"},\"amiis\":{\"all\":{\"date_end\":\"20200331\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"64,31%\",\"direction.text\":\"down\",\"price_beg\":\"1000.00\",\"percent\":\"-64.315\",\"price_end\":\"356.85\",\"date_beg.readable\":\"21.10.2010\",\"direction\":-1,\"date_beg\":\"20101021\",\"direction:down\":1},\"1m\":{\"date_beg.readable\":\"28.02.2020\",\"direction\":-1,\"date_beg\":\"20200228\",\"direction:down\":1,\"percent.readable\":\"0,36%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"358.15\",\"direction.text\":\"down\",\"percent\":\"-0.362976406533562\",\"price_end\":\"356.85\",\"date_end\":\"20200331\"},\"3m\":{\"date_end\":\"20200331\",\"price_beg\":\"358.56\",\"direction.text\":\"down\",\"percent.readable\":\"0,48%\",\"date_end.readable\":\"31.03.2020\",\"price_end\":\"356.85\",\"percent\":\"-0.476907630522092\",\"date_beg.readable\":\"31.12.2019\",\"date_beg\":\"20191231\",\"direction\":-1,\"direction:down\":1},\"1y\":{\"date_end\":\"20200331\",\"price_end\":\"356.85\",\"percent\":\"-20.0765974601895\",\"direction.text\":\"down\",\"price_beg\":\"446.49\",\"percent.readable\":\"20,08%\",\"date_end.readable\":\"31.03.2020\",\"direction:down\":1,\"direction\":-1,\"date_beg.readable\":\"29.03.2019\",\"date_beg\":\"20190329\"},\"date\":\"20200331\",\"6m\":{\"date_end\":\"20200331\",\"price_end\":\"356.85\",\"percent\":\"-8.83427432746596\",\"direction.text\":\"down\",\"price_beg\":\"391.43\",\"percent.readable\":\"8,83%\",\"date_end.readable\":\"31.03.2020\",\"direction:down\":1,\"date_beg.readable\":\"30.09.2019\",\"direction\":-1,\"date_beg\":\"20190930\"},\"date.readable\":\"31.03.2020\",\"3y\":{\"direction\":-1,\"date_beg\":\"20170331\",\"date_beg.readable\":\"31.03.2017\",\"direction:down\":1,\"percent.readable\":\"49,80%\",\"date_end.readable\":\"31.03.2020\",\"direction.text\":\"down\",\"price_beg\":\"710.81\",\"percent\":\"-49.7967107947271\",\"price_end\":\"356.85\",\"date_end\":\"20200331\"}}},\"precalc\":{\"pifs_wo_i\":{\"4\":{\"buy_date\":\"20160531\",\"buy_price\":\"793.76\",\"sell_date\":\"20200529\",\"sell_price\":\"347.28\",\"rounded_percents\":-56},\"5\":{\"rounded_percents\":-57,\"sell_date\":\"20200529\",\"sell_price\":\"347.28\",\"buy_date\":\"20150529\",\"buy_price\":\"809.71\"},\"2\":{\"sell_price\":\"347.28\",\"sell_date\":\"20200529\",\"rounded_percents\":-44,\"buy_price\":\"626.50\",\"buy_date\":\"20180531\"},\"1\":{\"sell_price\":\"347.28\",\"sell_date\":\"20200529\",\"rounded_percents\":-21,\"buy_price\":\"444.88\",\"buy_date\":\"20190531\"},\"3\":{\"buy_price\":\"711.91\",\"buy_date\":\"20170531\",\"rounded_percents\":-51,\"sell_price\":\"347.28\",\"sell_date\":\"20200529\"}},\"pifs_w_i\":{\"2\":{\"buy_price\":\"626.50\",\"buy_date\":\"20180531\",\"sell_date\":\"20200529\",\"sell_price\":\"347.28\",\"rounded_percents\":-44},\"5\":{\"sell_date\":\"20200529\",\"sell_price\":\"347.28\",\"rounded_percents\":-57,\"buy_date\":\"20150529\",\"buy_price\":\"809.71\"},\"4\":{\"rounded_percents\":-56,\"sell_date\":\"20200529\",\"sell_price\":\"347.28\",\"buy_date\":\"20160531\",\"buy_price\":\"793.76\"},\"3\":{\"buy_date\":\"20170531\",\"buy_price\":\"711.91\",\"rounded_percents\":-51,\"sell_date\":\"20200529\",\"sell_price\":\"347.28\"},\"1\":{\"buy_price\":\"444.88\",\"buy_date\":\"20190531\",\"rounded_percents\":-21,\"sell_date\":\"20200529\",\"sell_price\":\"347.28\"}},\"amiis\":{\"3\":{\"buy_date\":\"20170331\",\"buy_price\":\"710.81\",\"sell_price\":\"356.85\",\"sell_date\":\"20200331\",\"rounded_percents\":-49},\"1\":{\"rounded_percents\":-20,\"sell_date\":\"20200331\",\"sell_price\":\"356.85\",\"buy_price\":\"446.49\",\"buy_date\":\"20190329\"},\"4\":{\"sell_date\":\"20200331\",\"sell_price\":\"356.85\",\"rounded_percents\":-55,\"buy_date\":\"20160331\",\"buy_price\":\"795.41\"},\"5\":{\"sell_price\":\"356.85\",\"sell_date\":\"20200331\",\"rounded_percents\":-56,\"buy_date\":\"20150331\",\"buy_price\":\"817.11\"},\"2\":{\"buy_date\":\"20180330\",\"buy_price\":\"645.30\",\"sell_date\":\"20200331\",\"sell_price\":\"356.85\",\"rounded_percents\":-44}}},\"type\":\"pif\"},\"moneyflow\":{\"type\":\"am\",\"precalc\":{\"amiis\":{\"2\":{\"sell_price\":\"1.38830\",\"sell_date\":\"20200331\",\"rounded_percents\":14,\"buy_date\":\"20180330\",\"buy_price\":\"1.21293\"},\"4\":{\"rounded_percents\":39,\"sell_price\":\"1.38830\",\"sell_date\":\"20200331\",\"buy_date\":\"20160331\",\"buy_price\":\"0.99989\"},\"3\":{\"buy_date\":\"20170331\",\"buy_price\":\"1.10247\",\"sell_date\":\"20200331\",\"sell_price\":\"1.38830\",\"rounded_percents\":26},\"1\":{\"sell_date\":\"20200331\",\"sell_price\":\"1.38830\",\"rounded_percents\":11,\"buy_date\":\"20190329\",\"buy_price\":\"1.25341\"}},\"pifs_w_i\":{\"1\":{\"buy_price\":\"1.28430\",\"buy_date\":\"20190531\",\"sell_date\":\"20200529\",\"sell_price\":\"1.38830\",\"rounded_percents\":8},\"3\":{\"buy_price\":\"1.11383\",\"buy_date\":\"20170531\",\"sell_date\":\"20200529\",\"sell_price\":\"1.38830\",\"rounded_percents\":25},\"4\":{\"buy_price\":\"1.00955\",\"buy_date\":\"20160531\",\"sell_date\":\"20200529\",\"sell_price\":\"1.38830\",\"rounded_percents\":38},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"1.21783\",\"sell_price\":\"1.38830\",\"sell_date\":\"20200529\",\"rounded_percents\":14}},\"pifs_wo_i\":{\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"1.28430\",\"rounded_percents\":8,\"sell_price\":\"1.38830\",\"sell_date\":\"20200529\"},\"3\":{\"sell_date\":\"20200529\",\"sell_price\":\"1.38830\",\"rounded_percents\":25,\"buy_price\":\"1.11383\",\"buy_date\":\"20170531\"},\"2\":{\"sell_price\":\"1.38830\",\"sell_date\":\"20200529\",\"rounded_percents\":14,\"buy_price\":\"1.21783\",\"buy_date\":\"20180531\"},\"4\":{\"buy_price\":\"1.00955\",\"buy_date\":\"20160531\",\"sell_date\":\"20200529\",\"sell_price\":\"1.38830\",\"rounded_percents\":38}}}},\"growth\":{\"type\":\"iis\",\"precalc\":{\"amiis\":{\"3\":{\"buy_price\":\"1.24426\",\"buy_date\":\"20170331\",\"sell_price\":\"1.53940\",\"sell_date\":\"20200331\",\"rounded_percents\":24},\"1\":{\"rounded_percents\":-6,\"sell_date\":\"20200331\",\"sell_price\":\"1.53940\",\"buy_date\":\"20190329\",\"buy_price\":\"1.64140\"},\"2\":{\"buy_price\":\"1.46634\",\"buy_date\":\"20180330\",\"rounded_percents\":5,\"sell_date\":\"20200331\",\"sell_price\":\"1.53940\"},\"5\":{\"buy_date\":\"20150331\",\"buy_price\":\"0.98609\",\"rounded_percents\":56,\"sell_date\":\"20200331\",\"sell_price\":\"1.53940\"},\"4\":{\"buy_price\":\"1.16532\",\"buy_date\":\"20160331\",\"sell_date\":\"20200331\",\"sell_price\":\"1.53940\",\"rounded_percents\":32}},\"pifs_w_i\":{\"1\":{\"buy_price\":\"1.83937\",\"buy_date\":\"20190531\",\"rounded_percents\":-16,\"sell_price\":\"1.53940\",\"sell_date\":\"20200529\"},\"3\":{\"sell_date\":\"20200529\",\"sell_price\":\"1.53940\",\"rounded_percents\":27,\"buy_date\":\"20170531\",\"buy_price\":\"1.21266\"},\"5\":{\"sell_price\":\"1.53940\",\"sell_date\":\"20200529\",\"rounded_percents\":53,\"buy_price\":\"1.00708\",\"buy_date\":\"20150529\"},\"4\":{\"buy_price\":\"1.21928\",\"buy_date\":\"20160531\",\"sell_date\":\"20200529\",\"sell_price\":\"1.53940\",\"rounded_percents\":26},\"2\":{\"buy_price\":\"1.59054\",\"buy_date\":\"20180531\",\"sell_price\":\"1.53940\",\"sell_date\":\"20200529\",\"rounded_percents\":-3}},\"pifs_wo_i\":{\"4\":{\"sell_price\":\"1.53940\",\"sell_date\":\"20200529\",\"rounded_percents\":26,\"buy_date\":\"20160531\",\"buy_price\":\"1.21928\"},\"5\":{\"sell_date\":\"20200529\",\"sell_price\":\"1.53940\",\"rounded_percents\":53,\"buy_price\":\"1.00708\",\"buy_date\":\"20150529\"},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"1.59054\",\"rounded_percents\":-3,\"sell_date\":\"20200529\",\"sell_price\":\"1.53940\"},\"1\":{\"buy_price\":\"1.83937\",\"buy_date\":\"20190531\",\"rounded_percents\":-16,\"sell_date\":\"20200529\",\"sell_price\":\"1.53940\"},\"3\":{\"buy_price\":\"1.21266\",\"buy_date\":\"20170531\",\"sell_price\":\"1.53940\",\"sell_date\":\"20200529\",\"rounded_percents\":27}}}},\"opifo_akbond\":{\"precalc\":{\"pifs_w_i\":{\"1\":{\"buy_price\":\"4523.97\",\"buy_date\":\"20190531\",\"sell_price\":\"5304.26\",\"sell_date\":\"20200529\",\"rounded_percents\":17},\"3\":{\"sell_date\":\"20200529\",\"sell_price\":\"5304.26\",\"rounded_percents\":44,\"buy_date\":\"20170531\",\"buy_price\":\"3677.31\"},\"5\":{\"buy_price\":\"2974.75\",\"buy_date\":\"20150529\",\"sell_price\":\"5304.26\",\"sell_date\":\"20200529\",\"rounded_percents\":78},\"4\":{\"rounded_percents\":32,\"sell_price\":\"5304.26\",\"sell_date\":\"20200529\",\"buy_price\":\"4007.37\",\"buy_date\":\"20160531\"},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"4020.03\",\"rounded_percents\":32,\"sell_price\":\"5304.26\",\"sell_date\":\"20200529\"}},\"pifs_wo_i\":{\"2\":{\"sell_date\":\"20200529\",\"sell_price\":\"5304.26\",\"rounded_percents\":32,\"buy_price\":\"4020.03\",\"buy_date\":\"20180531\"},\"4\":{\"rounded_percents\":32,\"sell_date\":\"20200529\",\"sell_price\":\"5304.26\",\"buy_price\":\"4007.37\",\"buy_date\":\"20160531\"},\"5\":{\"sell_date\":\"20200529\",\"sell_price\":\"5304.26\",\"rounded_percents\":78,\"buy_price\":\"2974.75\",\"buy_date\":\"20150529\"},\"1\":{\"buy_price\":\"4523.97\",\"buy_date\":\"20190531\",\"rounded_percents\":17,\"sell_price\":\"5304.26\",\"sell_date\":\"20200529\"},\"3\":{\"buy_date\":\"20170531\",\"buy_price\":\"3677.31\",\"sell_price\":\"5304.26\",\"sell_date\":\"20200529\",\"rounded_percents\":44}},\"amiis\":{\"3\":{\"sell_date\":\"20200331\",\"sell_price\":\"5062.02\",\"rounded_percents\":39,\"buy_price\":\"3642.13\",\"buy_date\":\"20170331\"},\"1\":{\"sell_price\":\"5062.02\",\"sell_date\":\"20200331\",\"rounded_percents\":13,\"buy_price\":\"4479.46\",\"buy_date\":\"20190329\"},\"5\":{\"sell_price\":\"5062.02\",\"sell_date\":\"20200331\",\"rounded_percents\":61,\"buy_date\":\"20150331\",\"buy_price\":\"3139.93\"},\"4\":{\"buy_date\":\"20160331\",\"buy_price\":\"3995.67\",\"rounded_percents\":27,\"sell_price\":\"5062.02\",\"sell_date\":\"20200331\"},\"2\":{\"rounded_percents\":33,\"sell_date\":\"20200331\",\"sell_price\":\"5062.02\",\"buy_price\":\"3793.02\",\"buy_date\":\"20180330\"}}},\"type\":\"pif\",\"share_price_table\":{\"pifs_w_i\":{\"date\":\"20200529\",\"6m\":{\"date_beg.readable\":\"29.11.2019\",\"direction\":1,\"date_beg\":\"20191129\",\"percent.readable\":\"11,25%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"4768.03\",\"percent\":\"11.2463638022412\",\"price_end\":\"5304.26\",\"date_end\":\"20200529\"},\"date.readable\":\"29.05.2020\",\"3y\":{\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"price_end\":\"5304.26\",\"percent\":\"44.2429384522926\",\"direction.text\":\"up\",\"price_beg\":\"3677.31\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"44,24%\",\"date_end\":\"20200529\"},\"all\":{\"date_beg.readable\":\"30.09.2005\",\"direction\":1,\"date_beg\":\"20050930\",\"percent.readable\":\"430,70%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"999.48\",\"direction.text\":\"up\",\"percent\":\"430.701965021811\",\"price_end\":\"5304.26\",\"date_end\":\"20200529\"},\"1m\":{\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"7,05%\",\"direction:up\":1,\"price_beg\":\"4955.16\",\"direction.text\":\"up\",\"percent\":\"7.04518118486588\",\"price_end\":\"5304.26\",\"date_end\":\"20200529\",\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1},\"3m\":{\"date_beg.readable\":\"28.02.2020\",\"direction\":1,\"date_beg\":\"20200228\",\"date_end\":\"20200529\",\"price_end\":\"5304.26\",\"percent\":\"5.03339557669499\",\"direction.text\":\"up\",\"price_beg\":\"5050.07\",\"direction:up\":1,\"percent.readable\":\"5,03%\",\"date_end.readable\":\"29.05.2020\"},\"1y\":{\"direction\":1,\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"date_end\":\"20200529\",\"percent\":\"17.2479039427759\",\"price_end\":\"5304.26\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"17,25%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"4523.97\"}},\"pifs_wo_i\":{\"3m\":{\"direction.text\":\"up\",\"price_beg\":\"5050.07\",\"direction:up\":1,\"percent.readable\":\"5,03%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"5304.26\",\"percent\":\"5.03339557669499\",\"date_end\":\"20200529\",\"date_beg\":\"20200228\",\"direction\":1,\"date_beg.readable\":\"28.02.2020\"},\"1y\":{\"date_end\":\"20200529\",\"direction.text\":\"up\",\"price_beg\":\"4523.97\",\"percent.readable\":\"17,25%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_end\":\"5304.26\",\"percent\":\"17.2479039427759\",\"direction\":1,\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\"},\"1m\":{\"direction\":1,\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\",\"price_beg\":\"4955.16\",\"direction.text\":\"up\",\"direction:up\":1,\"percent.readable\":\"7,05%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"5304.26\",\"percent\":\"7.04518118486588\",\"date_end\":\"20200529\"},\"all\":{\"date_beg.readable\":\"30.09.2005\",\"date_beg\":\"20050930\",\"direction\":1,\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"430,70%\",\"price_beg\":\"999.48\",\"direction.text\":\"up\",\"percent\":\"430.701965021811\",\"price_end\":\"5304.26\",\"date_end\":\"20200529\"},\"3y\":{\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"44,24%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"3677.31\",\"percent\":\"44.2429384522926\",\"price_end\":\"5304.26\",\"date_end\":\"20200529\"},\"date.readable\":\"29.05.2020\",\"6m\":{\"date_beg\":\"20191129\",\"date_beg.readable\":\"29.11.2019\",\"direction\":1,\"date_end\":\"20200529\",\"price_beg\":\"4768.03\",\"direction.text\":\"up\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"11,25%\",\"price_end\":\"5304.26\",\"percent\":\"11.2463638022412\"},\"date\":\"20200529\"},\"amiis\":{\"date.readable\":\"31.03.2020\",\"3y\":{\"direction\":1,\"date_beg.readable\":\"31.03.2017\",\"date_beg\":\"20170331\",\"date_end\":\"20200331\",\"price_end\":\"5062.02\",\"percent\":\"38.9851542915821\",\"price_beg\":\"3642.13\",\"direction.text\":\"up\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"38,99%\"},\"6m\":{\"date_beg\":\"20190930\",\"date_beg.readable\":\"30.09.2019\",\"direction\":1,\"date_end\":\"20200331\",\"percent\":\"7.64643962189923\",\"price_end\":\"5062.02\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"7,65%\",\"direction.text\":\"up\",\"price_beg\":\"4702.45\"},\"date\":\"20200331\",\"1y\":{\"date_beg.readable\":\"29.03.2019\",\"date_beg\":\"20190329\",\"direction\":1,\"percent\":\"13.0051390122917\",\"price_end\":\"5062.02\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"13,01%\",\"price_beg\":\"4479.46\",\"direction.text\":\"up\",\"date_end\":\"20200331\"},\"3m\":{\"percent.readable\":\"6,94%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"4733.45\",\"direction.text\":\"up\",\"percent\":\"6.94144862626626\",\"price_end\":\"5062.02\",\"date_end\":\"20200331\",\"date_beg\":\"20191231\",\"date_beg.readable\":\"31.12.2019\",\"direction\":1},\"1m\":{\"price_end\":\"5062.02\",\"percent\":\"0.236630383341236\",\"price_beg\":\"5050.07\",\"direction.text\":\"up\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"0,24%\",\"direction:up\":1,\"date_end\":\"20200331\",\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":1},\"all\":{\"date_beg.readable\":\"30.09.2005\",\"date_beg\":\"20050930\",\"direction\":1,\"date_end\":\"20200331\",\"price_end\":\"5062.02\",\"percent\":\"406.465361988234\",\"price_beg\":\"999.48\",\"direction.text\":\"up\",\"direction:up\":1,\"percent.readable\":\"406,47%\",\"date_end.readable\":\"31.03.2020\"}}}},\"ipifsi_ak\":{\"precalc\":{\"pifs_w_i\":{\"1\":{\"rounded_percents\":5,\"sell_price\":\"96.55\",\"sell_date\":\"20200529\",\"buy_price\":\"91.73\",\"buy_date\":\"20190531\"},\"3\":{\"rounded_percents\":32,\"sell_price\":\"96.55\",\"sell_date\":\"20200529\",\"buy_price\":\"73.26\",\"buy_date\":\"20170531\"},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"82.97\",\"sell_price\":\"96.55\",\"sell_date\":\"20200529\",\"rounded_percents\":16},\"4\":{\"rounded_percents\":43,\"sell_price\":\"96.55\",\"sell_date\":\"20200529\",\"buy_date\":\"20160531\",\"buy_price\":\"67.64\"},\"5\":{\"buy_date\":\"20150529\",\"buy_price\":\"57.71\",\"rounded_percents\":67,\"sell_price\":\"96.55\",\"sell_date\":\"20200529\"}},\"pifs_wo_i\":{\"3\":{\"buy_price\":\"73.26\",\"buy_date\":\"20170531\",\"sell_price\":\"96.55\",\"sell_date\":\"20200529\",\"rounded_percents\":32},\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"91.73\",\"rounded_percents\":5,\"sell_date\":\"20200529\",\"sell_price\":\"96.55\"},\"2\":{\"sell_price\":\"96.55\",\"sell_date\":\"20200529\",\"rounded_percents\":16,\"buy_date\":\"20180531\",\"buy_price\":\"82.97\"},\"5\":{\"sell_date\":\"20200529\",\"sell_price\":\"96.55\",\"rounded_percents\":67,\"buy_price\":\"57.71\",\"buy_date\":\"20150529\"},\"4\":{\"buy_date\":\"20160531\",\"buy_price\":\"67.64\",\"rounded_percents\":43,\"sell_date\":\"20200529\",\"sell_price\":\"96.55\"}},\"amiis\":{\"1\":{\"buy_price\":\"86.94\",\"buy_date\":\"20190329\",\"rounded_percents\":4,\"sell_price\":\"90.69\",\"sell_date\":\"20200331\"},\"3\":{\"rounded_percents\":21,\"sell_price\":\"90.69\",\"sell_date\":\"20200331\",\"buy_date\":\"20170331\",\"buy_price\":\"74.83\"},\"5\":{\"rounded_percents\":64,\"sell_price\":\"90.69\",\"sell_date\":\"20200331\",\"buy_price\":\"55.45\",\"buy_date\":\"20150331\"},\"4\":{\"buy_price\":\"65.17\",\"buy_date\":\"20160331\",\"sell_price\":\"90.69\",\"sell_date\":\"20200331\",\"rounded_percents\":39},\"2\":{\"buy_date\":\"20180330\",\"buy_price\":\"82.56\",\"rounded_percents\":10,\"sell_price\":\"90.69\",\"sell_date\":\"20200331\"}}},\"type\":\"pif\",\"share_price_table\":{\"amiis\":{\"date\":\"20200331\",\"6m\":{\"direction:down\":1,\"date_beg.readable\":\"30.09.2019\",\"direction\":-1,\"date_beg\":\"20190930\",\"price_end\":\"90.69\",\"percent\":\"-6.99415444569789\",\"direction.text\":\"down\",\"price_beg\":\"97.51\",\"percent.readable\":\"6,99%\",\"date_end.readable\":\"31.03.2020\",\"date_end\":\"20200331\"},\"3y\":{\"date_beg\":\"20170331\",\"direction\":1,\"date_beg.readable\":\"31.03.2017\",\"date_end\":\"20200331\",\"percent.readable\":\"21,19%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"price_beg\":\"74.83\",\"direction.text\":\"up\",\"percent\":\"21.1947080048109\",\"price_end\":\"90.69\"},\"date.readable\":\"31.03.2020\",\"all\":{\"date_beg\":\"20000929\",\"date_beg.readable\":\"29.09.2000\",\"direction\":1,\"date_end\":\"20200331\",\"price_end\":\"90.69\",\"percent\":\"394.762684124386\",\"price_beg\":\"18.33\",\"direction.text\":\"up\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"394,76%\",\"direction:up\":1},\"1m\":{\"direction:down\":1,\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":-1,\"date_end\":\"20200331\",\"percent\":\"-8.95492420439714\",\"price_end\":\"90.69\",\"percent.readable\":\"8,95%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"99.61\",\"direction.text\":\"down\"},\"3m\":{\"date_end\":\"20200331\",\"price_beg\":\"104.83\",\"direction.text\":\"down\",\"percent.readable\":\"13,49%\",\"date_end.readable\":\"31.03.2020\",\"price_end\":\"90.69\",\"percent\":\"-13.4885051988934\",\"direction\":-1,\"date_beg.readable\":\"31.12.2019\",\"date_beg\":\"20191231\",\"direction:down\":1},\"1y\":{\"direction.text\":\"up\",\"price_beg\":\"86.94\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"4,31%\",\"price_end\":\"90.69\",\"percent\":\"4.31331953071084\",\"date_end\":\"20200331\",\"direction\":1,\"date_beg.readable\":\"29.03.2019\",\"date_beg\":\"20190329\"}},\"pifs_wo_i\":{\"all\":{\"direction\":1,\"date_beg.readable\":\"29.09.2000\",\"date_beg\":\"20000929\",\"date_end\":\"20200529\",\"price_end\":\"96.55\",\"percent\":\"426.732133115112\",\"price_beg\":\"18.33\",\"direction.text\":\"up\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"426,73%\"},\"3m\":{\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\",\"direction\":-1,\"direction:down\":1,\"date_end\":\"20200529\",\"direction.text\":\"down\",\"price_beg\":\"99.61\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,07%\",\"price_end\":\"96.55\",\"percent\":\"-3.07198072482683\"},\"1y\":{\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"5,25%\",\"price_beg\":\"91.73\",\"direction.text\":\"up\",\"percent\":\"5.25455140085032\",\"price_end\":\"96.55\",\"date_end\":\"20200529\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1,\"date_beg\":\"20190531\"},\"1m\":{\"direction\":1,\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"1,87%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"94.78\",\"percent\":\"1.86748259126398\",\"price_end\":\"96.55\",\"date_end\":\"20200529\"},\"6m\":{\"direction:down\":1,\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction\":-1,\"percent\":\"-5.37096932274821\",\"price_end\":\"96.55\",\"percent.readable\":\"5,37%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"down\",\"price_beg\":\"102.03\",\"date_end\":\"20200529\"},\"date\":\"20200529\",\"3y\":{\"date_end\":\"20200529\",\"percent\":\"31.7908817908818\",\"price_end\":\"96.55\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"31,79%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"73.26\",\"direction\":1,\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\"},\"date.readable\":\"29.05.2020\"},\"pifs_w_i\":{\"3y\":{\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"date_beg\":\"20170531\",\"price_end\":\"96.55\",\"percent\":\"31.7908817908818\",\"price_beg\":\"73.26\",\"direction.text\":\"up\",\"percent.readable\":\"31,79%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"date_end\":\"20200529\"},\"date.readable\":\"29.05.2020\",\"6m\":{\"direction\":-1,\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction:down\":1,\"date_end\":\"20200529\",\"price_beg\":\"102.03\",\"direction.text\":\"down\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"5,37%\",\"price_end\":\"96.55\",\"percent\":\"-5.37096932274821\"},\"date\":\"20200529\",\"3m\":{\"percent\":\"-3.07198072482683\",\"price_end\":\"96.55\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"3,07%\",\"direction.text\":\"down\",\"price_beg\":\"99.61\",\"date_end\":\"20200529\",\"direction:down\":1,\"direction\":-1,\"date_beg\":\"20200228\",\"date_beg.readable\":\"28.02.2020\"},\"1y\":{\"direction\":1,\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\",\"date_end\":\"20200529\",\"direction.text\":\"up\",\"price_beg\":\"91.73\",\"percent.readable\":\"5,25%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_end\":\"96.55\",\"percent\":\"5.25455140085032\"},\"1m\":{\"direction\":1,\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"1,87%\",\"price_beg\":\"94.78\",\"direction.text\":\"up\",\"percent\":\"1.86748259126398\",\"price_end\":\"96.55\",\"date_end\":\"20200529\"},\"all\":{\"percent\":\"426.732133115112\",\"price_end\":\"96.55\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"426,73%\",\"direction.text\":\"up\",\"price_beg\":\"18.33\",\"date_end\":\"20200529\",\"date_beg\":\"20000929\",\"date_beg.readable\":\"29.09.2000\",\"direction\":1}}}},\"opifa_akps\":{\"share_price_table\":{\"amiis\":{\"all\":{\"date_beg\":\"20070828\",\"direction\":1,\"date_beg.readable\":\"28.08.2007\",\"date_end\":\"20200331\",\"price_end\":\"1659.26\",\"percent\":\"66.0222929298994\",\"direction.text\":\"up\",\"price_beg\":\"999.42\",\"percent.readable\":\"66,02%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\"},\"1m\":{\"date_beg.readable\":\"28.02.2020\",\"direction\":1,\"date_beg\":\"20200228\",\"percent\":\"3.94867907507063\",\"price_end\":\"1659.26\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"percent.readable\":\"3,95%\",\"price_beg\":\"1596.23\",\"direction.text\":\"up\",\"date_end\":\"20200331\"},\"3m\":{\"date_end\":\"20200331\",\"price_end\":\"1659.26\",\"percent\":\"3.5930349439037\",\"direction.text\":\"up\",\"price_beg\":\"1601.71\",\"percent.readable\":\"3,59%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"date_beg\":\"20191231\",\"date_beg.readable\":\"31.12.2019\",\"direction\":1},\"1y\":{\"direction.text\":\"up\",\"price_beg\":\"1468.37\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"13,00%\",\"direction:up\":1,\"price_end\":\"1659.26\",\"percent\":\"13.0001293951797\",\"date_end\":\"20200331\",\"date_beg\":\"20190329\",\"date_beg.readable\":\"29.03.2019\",\"direction\":1},\"date\":\"20200331\",\"6m\":{\"date_beg.readable\":\"30.09.2019\",\"direction\":1,\"date_beg\":\"20190930\",\"price_end\":\"1659.26\",\"percent\":\"4.85386584094285\",\"price_beg\":\"1582.45\",\"direction.text\":\"up\",\"percent.readable\":\"4,85%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"date_end\":\"20200331\"},\"3y\":{\"date_beg.readable\":\"31.03.2017\",\"direction\":1,\"date_beg\":\"20170331\",\"direction.text\":\"up\",\"price_beg\":\"1584.76\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"4,70%\",\"price_end\":\"1659.26\",\"percent\":\"4.70102728488857\",\"date_end\":\"20200331\"},\"date.readable\":\"31.03.2020\"},\"pifs_wo_i\":{\"all\":{\"date_end\":\"20200529\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"70,05%\",\"direction.text\":\"up\",\"price_beg\":\"999.42\",\"percent\":\"70.0516299453683\",\"price_end\":\"1699.53\",\"date_beg.readable\":\"28.08.2007\",\"date_beg\":\"20070828\",\"direction\":1},\"1m\":{\"date_beg\":\"20200430\",\"direction\":1,\"date_beg.readable\":\"30.04.2020\",\"percent\":\"1.01398539052703\",\"price_end\":\"1699.53\",\"percent.readable\":\"1,01%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"1682.47\",\"direction.text\":\"up\",\"date_end\":\"20200529\"},\"1y\":{\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"14,00%\",\"price_beg\":\"1490.76\",\"direction.text\":\"up\",\"percent\":\"14.0042662802866\",\"price_end\":\"1699.53\",\"direction\":1,\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\"},\"3m\":{\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":1,\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"6,47%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"1596.23\",\"percent\":\"6.47149846826585\",\"price_end\":\"1699.53\"},\"date\":\"20200529\",\"6m\":{\"direction\":1,\"date_beg\":\"20191129\",\"date_beg.readable\":\"29.11.2019\",\"direction:up\":1,\"percent.readable\":\"5,06%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"1617.71\",\"percent\":\"5.05776684325373\",\"price_end\":\"1699.53\",\"date_end\":\"20200529\"},\"date.readable\":\"29.05.2020\",\"3y\":{\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"7,40%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"1582.37\",\"percent\":\"7.40408374779604\",\"price_end\":\"1699.53\",\"direction\":1,\"date_beg.readable\":\"31.05.2017\",\"date_beg\":\"20170531\"}},\"pifs_w_i\":{\"3m\":{\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":1,\"price_end\":\"1699.53\",\"percent\":\"6.47149846826585\",\"direction.text\":\"up\",\"price_beg\":\"1596.23\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"6,47%\",\"date_end\":\"20200529\"},\"1y\":{\"price_beg\":\"1490.76\",\"direction.text\":\"up\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"14,00%\",\"price_end\":\"1699.53\",\"percent\":\"14.0042662802866\",\"date_end\":\"20200529\",\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\",\"direction\":1},\"1m\":{\"date_beg\":\"20200430\",\"date_beg.readable\":\"30.04.2020\",\"direction\":1,\"price_beg\":\"1682.47\",\"direction.text\":\"up\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"1,01%\",\"direction:up\":1,\"price_end\":\"1699.53\",\"percent\":\"1.01398539052703\",\"date_end\":\"20200529\"},\"all\":{\"date_end\":\"20200529\",\"percent\":\"70.0516299453683\",\"price_end\":\"1699.53\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"70,05%\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"999.42\",\"direction\":1,\"date_beg\":\"20070828\",\"date_beg.readable\":\"28.08.2007\"},\"3y\":{\"date_end\":\"20200529\",\"price_beg\":\"1582.37\",\"direction.text\":\"up\",\"percent.readable\":\"7,40%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_end\":\"1699.53\",\"percent\":\"7.40408374779604\",\"direction\":1,\"date_beg.readable\":\"31.05.2017\",\"date_beg\":\"20170531\"},\"date.readable\":\"29.05.2020\",\"6m\":{\"date_beg\":\"20191129\",\"direction\":1,\"date_beg.readable\":\"29.11.2019\",\"percent.readable\":\"5,06%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_beg\":\"1617.71\",\"direction.text\":\"up\",\"percent\":\"5.05776684325373\",\"price_end\":\"1699.53\",\"date_end\":\"20200529\"},\"date\":\"20200529\"}},\"precalc\":{\"pifs_wo_i\":{\"1\":{\"rounded_percents\":14,\"sell_date\":\"20200529\",\"sell_price\":\"1699.53\",\"buy_price\":\"1490.76\",\"buy_date\":\"20190531\"},\"3\":{\"rounded_percents\":7,\"sell_date\":\"20200529\",\"sell_price\":\"1699.53\",\"buy_price\":\"1582.37\",\"buy_date\":\"20170531\"},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"1576.94\",\"rounded_percents\":8,\"sell_price\":\"1699.53\",\"sell_date\":\"20200529\"},\"4\":{\"sell_date\":\"20200529\",\"sell_price\":\"1699.53\",\"rounded_percents\":2,\"buy_price\":\"1673\",\"buy_date\":\"20160531\"},\"5\":{\"sell_price\":\"1699.53\",\"sell_date\":\"20200529\",\"rounded_percents\":27,\"buy_price\":\"1334.27\",\"buy_date\":\"20150529\"}},\"pifs_w_i\":{\"2\":{\"buy_price\":\"1576.94\",\"buy_date\":\"20180531\",\"rounded_percents\":8,\"sell_date\":\"20200529\",\"sell_price\":\"1699.53\"},\"4\":{\"rounded_percents\":2,\"sell_date\":\"20200529\",\"sell_price\":\"1699.53\",\"buy_price\":\"1673\",\"buy_date\":\"20160531\"},\"5\":{\"buy_date\":\"20150529\",\"buy_price\":\"1334.27\",\"rounded_percents\":27,\"sell_price\":\"1699.53\",\"sell_date\":\"20200529\"},\"1\":{\"sell_price\":\"1699.53\",\"sell_date\":\"20200529\",\"rounded_percents\":14,\"buy_date\":\"20190531\",\"buy_price\":\"1490.76\"},\"3\":{\"buy_date\":\"20170531\",\"buy_price\":\"1582.37\",\"rounded_percents\":7,\"sell_price\":\"1699.53\",\"sell_date\":\"20200529\"}},\"amiis\":{\"2\":{\"buy_date\":\"20180330\",\"buy_price\":\"1679.33\",\"sell_price\":\"1659.26\",\"sell_date\":\"20200331\",\"rounded_percents\":-1},\"4\":{\"rounded_percents\":0,\"sell_date\":\"20200331\",\"sell_price\":\"1659.26\",\"buy_date\":\"20160331\",\"buy_price\":\"1673.51\"},\"5\":{\"sell_date\":\"20200331\",\"sell_price\":\"1659.26\",\"rounded_percents\":20,\"buy_price\":\"1378.78\",\"buy_date\":\"20150331\"},\"3\":{\"buy_date\":\"20170331\",\"buy_price\":\"1584.76\",\"sell_price\":\"1659.26\",\"sell_date\":\"20200331\",\"rounded_percents\":5},\"1\":{\"sell_date\":\"20200331\",\"sell_price\":\"1659.26\",\"rounded_percents\":13,\"buy_price\":\"1468.37\",\"buy_date\":\"20190329\"}}},\"type\":\"pif\"},\"opifa_akt\":{\"type\":\"pif\",\"precalc\":{\"amiis\":{\"1\":{\"rounded_percents\":20,\"sell_price\":\"3822.59\",\"sell_date\":\"20200331\",\"buy_date\":\"20190329\",\"buy_price\":\"3175.60\"},\"3\":{\"sell_price\":\"3822.59\",\"sell_date\":\"20200331\",\"rounded_percents\":70,\"buy_date\":\"20170331\",\"buy_price\":\"2244.91\"},\"2\":{\"buy_price\":\"2964.49\",\"buy_date\":\"20180330\",\"rounded_percents\":29,\"sell_date\":\"20200331\",\"sell_price\":\"3822.59\"},\"4\":{\"buy_date\":\"20160331\",\"buy_price\":\"2213.79\",\"rounded_percents\":73,\"sell_price\":\"3822.59\",\"sell_date\":\"20200331\"},\"5\":{\"sell_price\":\"3822.59\",\"sell_date\":\"20200331\",\"rounded_percents\":87,\"buy_date\":\"20150331\",\"buy_price\":\"2045.87\"}},\"pifs_wo_i\":{\"4\":{\"sell_price\":\"4060.02\",\"sell_date\":\"20200529\",\"rounded_percents\":82,\"buy_price\":\"2231.61\",\"buy_date\":\"20160531\"},\"5\":{\"buy_price\":\"1897.80\",\"buy_date\":\"20150529\",\"sell_date\":\"20200529\",\"sell_price\":\"4060.02\",\"rounded_percents\":114},\"2\":{\"rounded_percents\":22,\"sell_date\":\"20200529\",\"sell_price\":\"4060.02\",\"buy_date\":\"20180531\",\"buy_price\":\"3319\"},\"3\":{\"buy_date\":\"20170531\",\"buy_price\":\"2402.72\",\"rounded_percents\":69,\"sell_price\":\"4060.02\",\"sell_date\":\"20200529\"},\"1\":{\"rounded_percents\":37,\"sell_date\":\"20200529\",\"sell_price\":\"4060.02\",\"buy_price\":\"2968.54\",\"buy_date\":\"20190531\"}},\"pifs_w_i\":{\"3\":{\"rounded_percents\":69,\"sell_date\":\"20200529\",\"sell_price\":\"4060.02\",\"buy_price\":\"2402.72\",\"buy_date\":\"20170531\"},\"1\":{\"buy_date\":\"20190531\",\"buy_price\":\"2968.54\",\"sell_price\":\"4060.02\",\"sell_date\":\"20200529\",\"rounded_percents\":37},\"2\":{\"buy_price\":\"3319\",\"buy_date\":\"20180531\",\"rounded_percents\":22,\"sell_price\":\"4060.02\",\"sell_date\":\"20200529\"},\"4\":{\"buy_price\":\"2231.61\",\"buy_date\":\"20160531\",\"sell_price\":\"4060.02\",\"sell_date\":\"20200529\",\"rounded_percents\":82},\"5\":{\"rounded_percents\":114,\"sell_price\":\"4060.02\",\"sell_date\":\"20200529\",\"buy_date\":\"20150529\",\"buy_price\":\"1897.80\"}}},\"share_price_table\":{\"amiis\":{\"date.readable\":\"31.03.2020\",\"3y\":{\"date_beg.readable\":\"31.03.2017\",\"direction\":1,\"date_beg\":\"20170331\",\"date_end\":\"20200331\",\"price_end\":\"3822.59\",\"percent\":\"70.2780957811226\",\"price_beg\":\"2244.91\",\"direction.text\":\"up\",\"percent.readable\":\"70,28%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1},\"date\":\"20200331\",\"6m\":{\"date_beg\":\"20190930\",\"direction\":1,\"date_beg.readable\":\"30.09.2019\",\"date_end\":\"20200331\",\"direction.text\":\"up\",\"price_beg\":\"3097.83\",\"percent.readable\":\"23,40%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"price_end\":\"3822.59\",\"percent\":\"23.3957318510054\"},\"1m\":{\"date_end\":\"20200331\",\"direction.text\":\"up\",\"price_beg\":\"3409.60\",\"direction:up\":1,\"percent.readable\":\"12,11%\",\"date_end.readable\":\"31.03.2020\",\"price_end\":\"3822.59\",\"percent\":\"12.1125645236978\",\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":1},\"3m\":{\"direction.text\":\"up\",\"price_beg\":\"3374.02\",\"percent.readable\":\"13,29%\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"price_end\":\"3822.59\",\"percent\":\"13.2948233857535\",\"date_end\":\"20200331\",\"date_beg\":\"20191231\",\"direction\":1,\"date_beg.readable\":\"31.12.2019\"},\"1y\":{\"date_end\":\"20200331\",\"percent\":\"20.373787630684\",\"price_end\":\"3822.59\",\"direction:up\":1,\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"20,37%\",\"price_beg\":\"3175.60\",\"direction.text\":\"up\",\"direction\":1,\"date_beg.readable\":\"29.03.2019\",\"date_beg\":\"20190329\"},\"all\":{\"direction\":1,\"date_beg.readable\":\"27.12.2006\",\"date_beg\":\"20061227\",\"percent\":\"282.289583166653\",\"price_end\":\"3822.59\",\"direction:up\":1,\"percent.readable\":\"282,29%\",\"date_end.readable\":\"31.03.2020\",\"direction.text\":\"up\",\"price_beg\":\"999.92\",\"date_end\":\"20200331\"}},\"pifs_wo_i\":{\"1m\":{\"direction:down\":1,\"date_beg.readable\":\"30.04.2020\",\"direction\":-1,\"date_beg\":\"20200430\",\"price_end\":\"4060.02\",\"percent\":\"-0.106044538706257\",\"price_beg\":\"4064.33\",\"direction.text\":\"down\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,11%\",\"date_end\":\"20200529\"},\"3m\":{\"direction\":1,\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"date_end\":\"20200529\",\"price_end\":\"4060.02\",\"percent\":\"19.0761379633975\",\"price_beg\":\"3409.60\",\"direction.text\":\"up\",\"percent.readable\":\"19,08%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1},\"1y\":{\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1,\"date_end\":\"20200529\",\"price_beg\":\"2968.54\",\"direction.text\":\"up\",\"percent.readable\":\"36,77%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_end\":\"4060.02\",\"percent\":\"36.768242974661\"},\"all\":{\"date_beg.readable\":\"27.12.2006\",\"direction\":1,\"date_beg\":\"20061227\",\"direction:up\":1,\"percent.readable\":\"306,03%\",\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"999.92\",\"percent\":\"306.034482758621\",\"price_end\":\"4060.02\",\"date_end\":\"20200529\"},\"3y\":{\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"date_beg\":\"20170531\",\"date_end\":\"20200529\",\"price_end\":\"4060.02\",\"percent\":\"68.9759938736099\",\"direction.text\":\"up\",\"price_beg\":\"2402.72\",\"percent.readable\":\"68,98%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\"},\"date.readable\":\"29.05.2020\",\"date\":\"20200529\",\"6m\":{\"direction\":1,\"date_beg\":\"20191129\",\"date_beg.readable\":\"29.11.2019\",\"date_end\":\"20200529\",\"price_beg\":\"3383.68\",\"direction.text\":\"up\",\"percent.readable\":\"19,99%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"price_end\":\"4060.02\",\"percent\":\"19.9882967656516\"}},\"pifs_w_i\":{\"date.readable\":\"29.05.2020\",\"3y\":{\"price_beg\":\"2402.72\",\"direction.text\":\"up\",\"percent.readable\":\"68,98%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"price_end\":\"4060.02\",\"percent\":\"68.9759938736099\",\"date_end\":\"20200529\",\"date_beg\":\"20170531\",\"date_beg.readable\":\"31.05.2017\",\"direction\":1},\"6m\":{\"date_beg.readable\":\"29.11.2019\",\"date_beg\":\"20191129\",\"direction\":1,\"date_end\":\"20200529\",\"price_end\":\"4060.02\",\"percent\":\"19.9882967656516\",\"direction.text\":\"up\",\"price_beg\":\"3383.68\",\"percent.readable\":\"19,99%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1},\"date\":\"20200529\",\"1y\":{\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"percent.readable\":\"36,77%\",\"price_beg\":\"2968.54\",\"direction.text\":\"up\",\"percent\":\"36.768242974661\",\"price_end\":\"4060.02\",\"date_beg\":\"20190531\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1},\"3m\":{\"percent\":\"19.0761379633975\",\"price_end\":\"4060.02\",\"percent.readable\":\"19,08%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"3409.60\",\"date_end\":\"20200529\",\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":1},\"1m\":{\"date_beg.readable\":\"30.04.2020\",\"direction\":-1,\"date_beg\":\"20200430\",\"direction:down\":1,\"date_end\":\"20200529\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,11%\",\"direction.text\":\"down\",\"price_beg\":\"4064.33\",\"percent\":\"-0.106044538706257\",\"price_end\":\"4060.02\"},\"all\":{\"date_beg\":\"20061227\",\"direction\":1,\"date_beg.readable\":\"27.12.2006\",\"date_end\":\"20200529\",\"direction.text\":\"up\",\"price_beg\":\"999.92\",\"direction:up\":1,\"percent.readable\":\"306,03%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"4060.02\",\"percent\":\"306.034482758621\"}}}},\"ipifa_akar\":{\"type\":\"pif\",\"precalc\":{\"pifs_w_i\":{\"1\":{\"rounded_percents\":26,\"sell_date\":\"20200529\",\"sell_price\":\"3722.68\",\"buy_price\":\"2961.16\",\"buy_date\":\"20190531\"},\"3\":{\"rounded_percents\":65,\"sell_price\":\"3722.68\",\"sell_date\":\"20200529\",\"buy_price\":\"2251.94\",\"buy_date\":\"20170531\"},\"2\":{\"buy_date\":\"20180531\",\"buy_price\":\"2706.29\",\"sell_date\":\"20200529\",\"sell_price\":\"3722.68\",\"rounded_percents\":38},\"4\":{\"buy_date\":\"20160531\",\"buy_price\":\"2156.33\",\"rounded_percents\":73,\"sell_price\":\"3722.68\",\"sell_date\":\"20200529\"},\"5\":{\"rounded_percents\":139,\"sell_date\":\"20200529\",\"sell_price\":\"3722.68\",\"buy_price\":\"1556.92\",\"buy_date\":\"20150529\"}},\"pifs_wo_i\":{\"5\":{\"buy_date\":\"20150529\",\"buy_price\":\"1556.92\",\"sell_date\":\"20200529\",\"sell_price\":\"3722.68\",\"rounded_percents\":139},\"4\":{\"buy_date\":\"20160531\",\"buy_price\":\"2156.33\",\"sell_date\":\"20200529\",\"sell_price\":\"3722.68\",\"rounded_percents\":73},\"2\":{\"rounded_percents\":38,\"sell_date\":\"20200529\",\"sell_price\":\"3722.68\",\"buy_price\":\"2706.29\",\"buy_date\":\"20180531\"},\"3\":{\"buy_price\":\"2251.94\",\"buy_date\":\"20170531\",\"rounded_percents\":65,\"sell_price\":\"3722.68\",\"sell_date\":\"20200529\"},\"1\":{\"buy_price\":\"2961.16\",\"buy_date\":\"20190531\",\"sell_date\":\"20200529\",\"sell_price\":\"3722.68\",\"rounded_percents\":26}},\"amiis\":{\"4\":{\"buy_price\":\"2090.42\",\"buy_date\":\"20160331\",\"rounded_percents\":78,\"sell_price\":\"3722.68\",\"sell_date\":\"20200331\"},\"5\":{\"rounded_percents\":133,\"sell_date\":\"20200331\",\"sell_price\":\"3722.68\",\"buy_price\":\"1599.96\",\"buy_date\":\"20150331\"},\"2\":{\"buy_date\":\"20180330\",\"buy_price\":\"2748.16\",\"rounded_percents\":35,\"sell_date\":\"20200331\",\"sell_price\":\"3722.68\"},\"1\":{\"sell_date\":\"20200331\",\"sell_price\":\"3722.68\",\"rounded_percents\":29,\"buy_date\":\"20190329\",\"buy_price\":\"2884.71\"},\"3\":{\"buy_price\":\"2268.54\",\"buy_date\":\"20170331\",\"rounded_percents\":64,\"sell_date\":\"20200331\",\"sell_price\":\"3722.68\"}}},\"share_price_table\":{\"amiis\":{\"date\":\"20200331\",\"6m\":{\"date_beg.readable\":\"30.09.2019\",\"direction\":1,\"date_beg\":\"20190930\",\"date_end\":\"20200331\",\"percent\":\"13.891837814851\",\"price_end\":\"3722.68\",\"percent.readable\":\"13,89%\",\"date_end.readable\":\"31.03.2020\",\"direction:up\":1,\"direction.text\":\"up\",\"price_beg\":\"3268.61\"},\"3y\":{\"date_beg.readable\":\"31.03.2017\",\"date_beg\":\"20170331\",\"direction\":1,\"price_beg\":\"2268.54\",\"direction.text\":\"up\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"64,10%\",\"direction:up\":1,\"price_end\":\"3722.68\",\"percent\":\"64.1002583159213\",\"date_end\":\"20200331\"},\"date.readable\":\"31.03.2020\",\"all\":{\"date_beg\":\"20061227\",\"date_beg.readable\":\"27.12.2006\",\"direction\":1,\"direction:up\":1,\"percent.readable\":\"272,27%\",\"date_end.readable\":\"31.03.2020\",\"direction.text\":\"up\",\"price_beg\":\"1000\",\"percent\":\"272.268\",\"price_end\":\"3722.68\",\"date_end\":\"20200331\"},\"1m\":{\"date_end\":\"20200331\",\"price_end\":\"3722.68\",\"percent\":0,\"direction.text\":\"center\",\"price_beg\":\"3722.68\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"31.03.2020\",\"date_beg.readable\":\"28.02.2020\",\"direction\":0,\"date_beg\":\"20200228\"},\"3m\":{\"date_end\":\"20200331\",\"direction:up\":1,\"percent.readable\":\"5,89%\",\"date_end.readable\":\"31.03.2020\",\"price_beg\":\"3515.65\",\"direction.text\":\"up\",\"percent\":\"5.88881145734075\",\"price_end\":\"3722.68\",\"date_beg.readable\":\"31.12.2019\",\"direction\":1,\"date_beg\":\"20191231\"},\"1y\":{\"date_end\":\"20200331\",\"price_end\":\"3722.68\",\"percent\":\"29.0486738701637\",\"direction.text\":\"up\",\"price_beg\":\"2884.71\",\"date_end.readable\":\"31.03.2020\",\"percent.readable\":\"29,05%\",\"direction:up\":1,\"date_beg.readable\":\"29.03.2019\",\"date_beg\":\"20190329\",\"direction\":1}},\"pifs_w_i\":{\"date.readable\":\"29.05.2020\",\"3y\":{\"date_end\":\"20200529\",\"direction:up\":1,\"percent.readable\":\"65,31%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"2251.94\",\"direction.text\":\"up\",\"percent\":\"65.3099105660009\",\"price_end\":\"3722.68\",\"date_beg.readable\":\"31.05.2017\",\"direction\":1,\"date_beg\":\"20170531\"},\"date\":\"20200529\",\"6m\":{\"date_beg\":\"20191129\",\"date_beg.readable\":\"29.11.2019\",\"direction\":1,\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"8,21%\",\"direction.text\":\"up\",\"price_beg\":\"3440.18\",\"percent\":\"8.21177961618288\",\"price_end\":\"3722.68\",\"date_end\":\"20200529\"},\"1m\":{\"percent\":0,\"price_end\":\"3722.68\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\",\"price_beg\":\"3722.68\",\"direction.text\":\"center\",\"date_end\":\"20200529\",\"direction\":0,\"date_beg.readable\":\"30.04.2020\",\"date_beg\":\"20200430\"},\"1y\":{\"direction\":1,\"date_beg.readable\":\"31.05.2019\",\"date_beg\":\"20190531\",\"date_end\":\"20200529\",\"percent.readable\":\"25,72%\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"direction.text\":\"up\",\"price_beg\":\"2961.16\",\"percent\":\"25.7169487633225\",\"price_end\":\"3722.68\"},\"3m\":{\"date_beg\":\"20200228\",\"direction\":0,\"date_beg.readable\":\"28.02.2020\",\"date_end\":\"20200529\",\"price_beg\":\"3722.68\",\"direction.text\":\"center\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"29.05.2020\",\"price_end\":\"3722.68\",\"percent\":0},\"all\":{\"date_end\":\"20200529\",\"percent\":\"272.268\",\"price_end\":\"3722.68\",\"direction:up\":1,\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"272,27%\",\"price_beg\":\"1000\",\"direction.text\":\"up\",\"date_beg.readable\":\"27.12.2006\",\"direction\":1,\"date_beg\":\"20061227\"}},\"pifs_wo_i\":{\"date\":\"20200529\",\"6m\":{\"date_beg\":\"20191129\",\"direction\":1,\"date_beg.readable\":\"29.11.2019\",\"price_end\":\"3722.68\",\"percent\":\"8.21177961618288\",\"price_beg\":\"3440.18\",\"direction.text\":\"up\",\"percent.readable\":\"8,21%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"date_end\":\"20200529\"},\"date.readable\":\"29.05.2020\",\"3y\":{\"direction\":1,\"date_beg.readable\":\"31.05.2017\",\"date_beg\":\"20170531\",\"price_end\":\"3722.68\",\"percent\":\"65.3099105660009\",\"price_beg\":\"2251.94\",\"direction.text\":\"up\",\"percent.readable\":\"65,31%\",\"date_end.readable\":\"29.05.2020\",\"direction:up\":1,\"date_end\":\"20200529\"},\"all\":{\"date_beg.readable\":\"27.12.2006\",\"date_beg\":\"20061227\",\"direction\":1,\"percent\":\"272.268\",\"price_end\":\"3722.68\",\"direction:up\":1,\"percent.readable\":\"272,27%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"1000\",\"direction.text\":\"up\",\"date_end\":\"20200529\"},\"1m\":{\"date_beg\":\"20200430\",\"direction\":0,\"date_beg.readable\":\"30.04.2020\",\"price_end\":\"3722.68\",\"percent\":0,\"price_beg\":\"3722.68\",\"direction.text\":\"center\",\"percent.readable\":\"0,00%\",\"date_end.readable\":\"29.05.2020\",\"date_end\":\"20200529\"},\"3m\":{\"date_beg.readable\":\"28.02.2020\",\"date_beg\":\"20200228\",\"direction\":0,\"date_end\":\"20200529\",\"price_end\":\"3722.68\",\"percent\":0,\"direction.text\":\"center\",\"price_beg\":\"3722.68\",\"date_end.readable\":\"29.05.2020\",\"percent.readable\":\"0,00%\"},\"1y\":{\"percent\":\"25.7169487633225\",\"price_end\":\"3722.68\",\"direction:up\":1,\"percent.readable\":\"25,72%\",\"date_end.readable\":\"29.05.2020\",\"price_beg\":\"2961.16\",\"direction.text\":\"up\",\"date_end\":\"20200529\",\"date_beg.readable\":\"31.05.2019\",\"direction\":1,\"date_beg\":\"20190531\"}}}}}}"),
    precalc_mode: "amiis",
//
//
    $nodeResultsMain: $('.js-calc-result'),
    $nodeResultsSecond: $('.js-calc-result-second'),
    teaser_selector: '.js-teaser',
    onChangeCriteria: (function () {

        return function (allStrategies, criteria) {
            console.log('onChangeCriteria:', allStrategies, criteria);

            if(criteria.amount.length > 12){
              $('.js-amount-value').addClass('small')
            }else{
              $('.js-amount-value').removeClass('small')
            }

//

            var _getHtml = function (data, suppress_compare_button) {
                var html = '<div class="table table_pifs-profit"> \
                <div class="table__caption">Динамика стоимости пая на&nbsp;' + data.date + '&nbsp;г.</div> \
                <div class="table__tr table__tr_head"> \
                    <div class="table__th m-pp-name">Название</div> \
                    <div class="table__th m-pp-graph"></div> \
                    <div class="table__th m-pp-period">За 1 мес.</div> \
                    <div class="table__th m-pp-period">За 3 мес.</div> \
                    <div class="table__th m-pp-period">За 6 мес.</div> \
                    <div class="table__th m-pp-period">За 1 год</div> \
                    <div class="table__th m-pp-period">За 3 года</div> \
                    <div class="table__th m-pp-period">С момента формирования</div> \
                </div> \
                </div> \
                <div class="table table_pifs-profit body">';

                for (var i = 0; i < data.items.length; i++) {
                    var item = data.items[i];
                    var rec = item['share_price_table']["amiis"];
                    html += '<div class="table__tr js-row" data-alias="'+item.alias+'"> \
                        <div class="table__td m-pp-name"> \
                        <span class="table__td-mobile-label">Название: </span> \
                        <a href="' + item.buy_link + '" class="table__td-mobile-name link link_red">' + item.name.replace('<br>', '') + '</a> \
                        </div> \
                        <div class="table__td m-pp-graph"> \
                          <a href="/disclosure/pifs/' + item.alias + '" class="m-pp-graph-link"><img class="m-pp-graph-img" src="/graphics/spt-' + item.alias + '.svg" alt="" /></a> \
                        </div> \
                        <div class="table__td m-pp-period"><span class="table__td-mobile-label table__name-width">За 1 месяц</span> <div class="table__td-mobile-count"><span class="table__td-text '+rec['1m']['direction.text']+'">' + (rec['1m']['direction'] < 0 ? '&ndash;' : '+') + rec['1m']['percent.readable'] + '</span> <i class="icn icn_arrow-' + rec['1m']['direction.text'] + ' m-profit"></i></div></div> \
                        <div class="table__td m-pp-period"><span class="table__td-mobile-label table__name-width">За 3 месяца</span> <div class="table__td-mobile-count"><span class="table__td-text '+rec['3m']['direction.text']+'">' + (rec['3m']['direction'] < 0 ? '&ndash;' : '+') + rec['3m']['percent.readable'] + '</span> <i class="icn icn_arrow-' + rec['3m']['direction.text'] + ' m-profit"></i> </div></div> \
                        <div class="table__td m-pp-period"><span class="table__td-mobile-label table__name-width">За 6 месяцев</span> <div class="table__td-mobile-count"><span class="table__td-text '+rec['6m']['direction.text']+'">' + (rec['6m']['direction'] < 0 ? '&ndash;' : '+') + rec['6m']['percent.readable'] + '</span> <i class="icn icn_arrow-' + rec['6m']['direction.text'] + ' m-profit"></i> </div></div> \
                        <div class="table__td m-pp-period"><span class="table__td-mobile-label table__name-width">За 1 год</span> <div class="table__td-mobile-count"><span class="table__td-text '+rec['1y']['direction.text']+'">' + (rec['1y']['direction'] < 0 ? '&ndash;' : '+') + rec['1y']['percent.readable'] + '</span> <i class="icn icn_arrow-' + rec['1y']['direction.text'] + ' m-profit"></i> </div></div> \
                        <div class="table__td m-pp-period"><span class="table__td-mobile-label table__name-width">За 3 года</span> <div class="table__td-mobile-count"><span class="table__td-text '+rec['3y']['direction.text']+'">' + (rec['3y']['direction'] < 0 ? '&ndash;' : '+') + rec['3y']['percent.readable'] + '</span> <i class="icn icn_arrow-' + rec['3y']['direction.text'] + ' m-profit"></i> </div></div> \
                        <div class="table__td m-pp-period"><span class="table__td-mobile-label table__name-width">С момента формирования</span> <div class="table__td-mobile-count"><span class="table__td-text '+rec['all']['direction.text']+'">' + (rec['all']['direction'] < 0 ? '&ndash;' : '+') + rec['all']['percent.readable'] + '</span> <i class="icn icn_arrow-' + rec['all']['direction.text'] + ' m-profit"></i> </div></div> \
                        </div>';
                }

                html += '</div>';

                if (!suppress_compare_button) {
                    html += '<div class="calc__yield-more"> \
                        <span onclick="app.slideside.open(\'pifs-profit\');" class="open-link"> \
                        <span>Сравнить все паевые фонды</span> \
                        <i class="icn icn_arrow-right-thin"></i> \
                        </span> \
                        </div>';
                }

                return html;
            };

            //var pifsStrategies = allStrategies.slice(0, 3).filter(function(el) { return el.pif_alias; });
            var pifsStrategies = allStrategies.filter(function(el) { return el.pif_alias; });
            var headStrategies = allStrategies.slice(0, 3);
            var headAliases = [];
            for (var i=0, l=headStrategies.length; i<l; i++) {
              headAliases.push(headStrategies[i].alias);
            }

            if (pifsStrategies.length > 0) {
                //
                var suppress_compare_button = true;
                //

                var share_price = {
                    date: pifsStrategies[0]['share_price_table']["amiis"]['date.readable'],
                    items: []
                };
                for (var i = 0; i < pifsStrategies.length; i++) {
                    share_price.items.push(pifsStrategies[i]);
                }
                $('.js-calc-yield').html(_getHtml(share_price, suppress_compare_button));
            }
            else {
                $('.js-calc-yield').html('');
            }
            jQuery(document).on('calculatorToggleShowMore', function (e, data) {
              var expand = data && data.expand ? true : false;
              var rows = jQuery('.js-calc-yield').find('.table_pifs-profit').find('.js-row');
              if (expand) {
                rows.each(function (ndx, elem) {
                  jQuery(elem).show();
                });
              }
              else {
                rows.each(function (ndx, elem) {
                  var alias = jQuery(elem).attr('data-alias');
                  if (alias && headAliases.indexOf(alias) != -1) {
                    jQuery(elem).show();
                  }
                  else {
                    jQuery(elem).hide();
                  }
                });
              }
            });
            jQuery(document).trigger('calculatorToggleShowMore', {expand: false});
//

//

//
            var reader = new AKRecommendationsStrategyReader();
            var dates_beg = [];
            var dates_end = [];
            for (var i=0, l=allStrategies.length; i<l; i++) {
              var strategy = allStrategies[i];
              var date_end = reader.end_date_for_product(strategy); 
              var date_beg = reader.start_date_for_product_years_back(strategy, criteria.years);
              dates_beg.push(moment(date_beg, 'DD.MM.YYYY').format('YYYYMMDD'));
              dates_end.push(moment(date_end, 'DD.MM.YYYY').format('YYYYMMDD'));
            }
            var date_beg = Math.min.apply(dates_beg, dates_beg);
            var date_end = Math.max.apply(dates_end, dates_end);
            if (date_beg && date_end) {
              var container = jQuery('.js-yield-info-dates-label');
              container.find('span[data-type=date_beg]').html('c&nbsp;' + moment(date_beg, 'YYYYMMDD').format('DD.MM.YYYY'));
              container.find('span[data-type=date_end]').html('по ' + moment(date_end, 'YYYYMMDD').format('DD.MM.YYYY'));
            }
//

//
//
//

      jQuery(document).trigger('compareList:refreshToCompareButtons');
      jQuery(document).trigger('basketList:refreshToBasketButtons');
      //jQuery(document).trigger('products:refreshRiskLevels');
      //jQuery(document).trigger('products:refreshProfitLevels');
        };
    })(),

    onReadyCalc: function (strategy, params) {
        console.log('onReadyCalc', strategy, params);
        jQuery(document).trigger('compareList:refreshToCompareButtons');
        jQuery(document).trigger('basketList:refreshToBasketButtons');
        //jQuery(document).trigger('products:refreshRiskLevels');
        //jQuery(document).trigger('products:refreshProfitLevels');

        //
    },
    max_main_results: /**//**/null/**//**/,
/**/
/**/
    defaultAmountValue: /**//**/150000/**//**/,
    page_type: /**//**/'index'/**//**/
  });

//

//
});

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
 * Initialize the calc yield block.
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