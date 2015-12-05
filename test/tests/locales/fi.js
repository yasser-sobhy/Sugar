package('Dates Finnish', function () {
  "use strict";

  var now, then;

  setup(function() {
    now = new Date();
    then = new Date(2010, 0, 5, 15, 52);
    testSetLocale('fi');
  });

  method('create', function() {

    dateEqual(testCreateDate('15. toukokuuta 2011'),          new Date(2011, 4, 15),              'basic Finnish date');
    dateEqual(testCreateDate('tiistai 5. tammikuuta 2012'),   new Date(2012, 0, 5),               '2012-01-05');
    dateEqual(testCreateDate('tiistaina 5. tammikuuta 2012'), new Date(2012, 0, 5),               '2012-01-05 (na)');
    dateEqual(testCreateDate('toukokuu 2011'),                new Date(2011, 4),                  'year and month');
    dateEqual(testCreateDate('15. toukokuuta'),               new Date(now.getFullYear(), 4, 15), 'month and date');
    dateEqual(testCreateDate('2011'),                         new Date(2011, 0),                  'year');

    dateEqual(testCreateDate('tiistai 5. tammikuuta 2012 klo 3.45'), new Date(2012, 0, 5,  3, 45), '2012-01-05 3.45');
    dateEqual(testCreateDate('tiistaina 5. tammikuuta 2012 klo 3.45'), new Date(2012, 0, 5,  3, 45), '2012-01-05 3.45 (na)');
    dateEqual(testCreateDate('tiistaina 5. tammikuuta 2012 klo 3.45.19'), new Date(2012, 0, 5,  3, 45, 19), '2012-01-05 3.45.19');
    dateEqual(testCreateDate('tiistaina 5. tammikuuta 2012 klo 3.45.19,30'), new Date(2012, 0, 5,  3, 45, 19, 300), '2012-01-05 3.45.19,30');

    dateEqual(testCreateDate('tiistai 5. tammikuuta 2012 klo 15:45'), new Date(2012, 0, 5, 15, 45), '2012-01-05 3:45pm');
    dateEqual(testCreateDate('tiistaina 5. tammikuuta 2012 klo 15:45'), new Date(2012, 0, 5, 15, 45), '2012-01-05 3:45pm (na)');

    dateEqual(testCreateDate('tiistaina 5. tammikuuta 2012 kello 15:45'), new Date(2012, 0, 5, 15, 45), 'also accepts "kello"');

    dateEqual(testCreateDate('tammikuu'),  new Date(now.getFullYear(),  0), 'January');
    dateEqual(testCreateDate('helmikuu'),  new Date(now.getFullYear(),  1), 'February');
    dateEqual(testCreateDate('maaliskuu'), new Date(now.getFullYear(),  2), 'March');
    dateEqual(testCreateDate('huhtikuu'),  new Date(now.getFullYear(),  3), 'April');
    dateEqual(testCreateDate('toukokuu'),  new Date(now.getFullYear(),  4), 'May');
    dateEqual(testCreateDate('kesäkuu'),   new Date(now.getFullYear(),  5), 'June');
    dateEqual(testCreateDate('heinäkuu'),  new Date(now.getFullYear(),  6), 'July');
    dateEqual(testCreateDate('elokuu'),    new Date(now.getFullYear(),  7), 'August');
    dateEqual(testCreateDate('syyskuu'),   new Date(now.getFullYear(),  8), 'September');
    dateEqual(testCreateDate('lokakuu'),   new Date(now.getFullYear(),  9), 'October');
    dateEqual(testCreateDate('marraskuu'), new Date(now.getFullYear(), 10), 'November');
    dateEqual(testCreateDate('joulukuu'),  new Date(now.getFullYear(), 11), 'December');

    dateEqual(testCreateDate('sunnuntai'),   getDateWithWeekdayAndOffset(0), 'Sunday');    // su
    dateEqual(testCreateDate('maanantai'),   getDateWithWeekdayAndOffset(1), 'Monday');    // ma
    dateEqual(testCreateDate('tiistai'),     getDateWithWeekdayAndOffset(2), 'Tuesday');   // ti
    dateEqual(testCreateDate('keskiviikko'), getDateWithWeekdayAndOffset(3), 'Wednesday'); // ke
    dateEqual(testCreateDate('torstai'),     getDateWithWeekdayAndOffset(4), 'Thursday');  // to
    dateEqual(testCreateDate('perjantai'),   getDateWithWeekdayAndOffset(5), 'Friday');    // pe
    dateEqual(testCreateDate('lauantai'),    getDateWithWeekdayAndOffset(6), 'Saturday');  // la

    dateEqual(testCreateDate('yksi millisekunti sitten'), getRelativeDate(null, null, null, null, null, null,-1), 'one millisecond ago');
    dateEqual(testCreateDate('yksi sekunti sitten'),      getRelativeDate(null, null, null, null, null, -1), 'one second ago');
    dateEqual(testCreateDate('yksi minuutti sitten'),     getRelativeDate(null, null, null, null, -1), 'one minute ago');
    dateEqual(testCreateDate('yksi tunti sitten'),        getRelativeDate(null, null, null, -1), 'one hour ago');
    dateEqual(testCreateDate('yksi päivä sitten'),        getRelativeDate(null, null, -1), 'one day ago');
    dateEqual(testCreateDate('yksi viikko sitten'),       getRelativeDate(null, null, -7), 'one week ago');
    dateEqual(testCreateDate('yksi kuukausi sitten'),     getRelativeDate(null, -1), 'one month ago');
    dateEqual(testCreateDate('yksi vuosi sitten'),        getRelativeDate(-1), 'one year ago');
    dateEqual(testCreateDate('millisekunti sitten'),      getRelativeDate(null, null, null, null, null, null,-1), 'one millisecond ago');
    dateEqual(testCreateDate('sekunti sitten'),           getRelativeDate(null, null, null, null, null, -1), 'one second ago');
    dateEqual(testCreateDate('minuutti sitten'),          getRelativeDate(null, null, null, null, -1), 'one minute ago');
    dateEqual(testCreateDate('tunti sitten'),             getRelativeDate(null, null, null, -1), 'one hour ago');
    dateEqual(testCreateDate('päivä sitten'),             getRelativeDate(null, null, -1), 'one day ago');
    dateEqual(testCreateDate('viikko sitten'),            getRelativeDate(null, null, -7), 'one week ago');
    dateEqual(testCreateDate('kuukausi sitten'),          getRelativeDate(null, -1), 'one month ago');
    dateEqual(testCreateDate('vuosi sitten'),             getRelativeDate(-1), 'one year ago');

    dateEqual(testCreateDate('5 millisekunnin päästä'),   getRelativeDate(null, null, null, null, null, null,5), 'five milliseconds from now');
    dateEqual(testCreateDate('5 sekunnin päästä'),        getRelativeDate(null, null, null, null, null, 5), 'five second from now');
    dateEqual(testCreateDate('5 minuutin päästä'),        getRelativeDate(null, null, null, null, 5), 'five minute from now');
    dateEqual(testCreateDate('5 tunnin päästä'),          getRelativeDate(null, null, null, 5), 'five hour from now');
    dateEqual(testCreateDate('5 päivän päästä'),          getRelativeDate(null, null, 5), 'five day from now');
    dateEqual(testCreateDate('5 viikon päästä'),          getRelativeDate(null, null, 35), 'five weeks from now');
    dateEqual(testCreateDate('5 kuukauden päästä'),       getRelativeDate(null, 5), 'five months from now');
    dateEqual(testCreateDate('5 vuoden päästä'),          getRelativeDate(5), 'five years from now');

    dateEqual(testCreateDate('toissa päivänä'), run(getRelativeDate(null, null, -2), 'reset'), 'day before yesterday');
    dateEqual(testCreateDate('eilen'),          run(getRelativeDate(null, null, -1), 'reset'), 'yesterday');
    dateEqual(testCreateDate('tänään'),         run(getRelativeDate(null, null,  0), 'reset'), 'today');
    dateEqual(testCreateDate('huomenna'),       run(getRelativeDate(null, null,  1), 'reset'), 'tomorrow');
    dateEqual(testCreateDate('ylihuomenna'),    run(getRelativeDate(null, null,  2), 'reset'), 'day after tomorrow');

    dateEqual(testCreateDate('viime viikko'),   getRelativeDate(null, null, -7), 'last week | viikko');
    dateEqual(testCreateDate('viime viikolla'), getRelativeDate(null, null, -7), 'last week | viikolla');
    dateEqual(testCreateDate('ensi viikko'),    getRelativeDate(null, null,  7), 'next week | viikko');
    dateEqual(testCreateDate('ensi viikolla'),  getRelativeDate(null, null,  7), 'next week | viikolla');
    dateEqual(testCreateDate('tällä viikolla'), getRelativeDate(null, null,  0), 'this week | viikolla');
    dateEqual(testCreateDate('tämä viikko'),    getRelativeDate(null, null,  0), 'this week | viikko');


    dateEqual(testCreateDate('tässä kuussa'),       getRelativeDate(null,  0), 'this month');
    dateEqual(testCreateDate('viime kuussa'),       getRelativeDate(null, -1), 'last month | viime');
    dateEqual(testCreateDate('edellinen kuukausi'), getRelativeDate(null, -1), 'last month | edellinen');
    dateEqual(testCreateDate('seuraava kuukausi'),  getRelativeDate(null,  1), 'next month | seuraava');
    dateEqual(testCreateDate('ensi kuussa'),        getRelativeDate(null,  1), 'next month | ensi');

    dateEqual(testCreateDate('viime vuosi'),  getRelativeDate(-1),         'last year | vuosi');
    dateEqual(testCreateDate('viime vuonna'), getRelativeDate(-1),         'last year | vuonna');
    dateEqual(testCreateDate('ensi vuosi'),   getRelativeDate(1),          'next year | vuosi');
    dateEqual(testCreateDate('ensi vuonna'),  getRelativeDate(1),          'next year | vuonna');
    dateEqual(testCreateDate('tämä vuosi'),   dstSafe(getRelativeDate(0)), 'this year | vuosi');
    dateEqual(testCreateDate('tänä vuonna'),  dstSafe(getRelativeDate(0)), 'this year | vuonna');

    dateEqual(testCreateDate('ensi maanantai'),    getDateWithWeekdayAndOffset(1, 7),  'next monday');
    dateEqual(testCreateDate('viime maanantai'),   getDateWithWeekdayAndOffset(1, -7), 'last monday');

    dateEqual(testCreateDate('ensi maanantaina'),  getDateWithWeekdayAndOffset(1, 7),  'next monday | na');
    dateEqual(testCreateDate('viime maanantaina'), getDateWithWeekdayAndOffset(1, -7), 'last monday | na');

    dateEqual(testCreateDate('viime maanantaina klo 3.45'), run(getDateWithWeekdayAndOffset(1, -7), 'set', [{ hour: 3, minute: 45 }, true]), 'last monday 3:45');
    dateEqual(testCreateDate('viime maanantai klo 3.45'),   run(getDateWithWeekdayAndOffset(1, -7), 'set', [{ hour: 3, minute: 45 }, true]), 'last monday 3:45 (na)');
    dateEqual(testCreateDate('huomenna klo 3.30'),          run(getRelativeDate(null, null, 1), 'set', [{hours:3,minutes:30}, true]), 'tomorrow at 3:30');

    dateEqual(testCreateDate('viime sunnuntaina'),   getDateWithWeekdayAndOffset(0, -7), 'last sunday');
    dateEqual(testCreateDate('viime maanantaina'),   getDateWithWeekdayAndOffset(1, -7), 'last monday');
    dateEqual(testCreateDate('viime tiistaina'),     getDateWithWeekdayAndOffset(2, -7), 'last tuesday');
    dateEqual(testCreateDate('viime keskiviikkona'), getDateWithWeekdayAndOffset(3, -7), 'last wednesday');
    dateEqual(testCreateDate('viime torstaina'),     getDateWithWeekdayAndOffset(4, -7), 'last thursday');
    dateEqual(testCreateDate('viime perjantaina'),   getDateWithWeekdayAndOffset(5, -7), 'last friday');
    dateEqual(testCreateDate('viime lauantaina'),    getDateWithWeekdayAndOffset(6, -7), 'last saturday');


    // Numbers

    dateEqual(testCreateDate('nolla vuotta sitten'),     getRelativeDate(0),  'zero years ago');
    dateEqual(testCreateDate('yksi vuosi sitten'),       getRelativeDate(-1), 'one years ago');
    dateEqual(testCreateDate('kaksi vuotta sitten'),     getRelativeDate(-2), 'two years ago');
    dateEqual(testCreateDate('kolme vuotta sitten'),     getRelativeDate(-3), 'three years ago');
    dateEqual(testCreateDate('neljä vuotta sitten'),     getRelativeDate(-4), 'four years ago');
    dateEqual(testCreateDate('viisi vuotta sitten'),     getRelativeDate(-5), 'five years ago');
    dateEqual(testCreateDate('kuusi vuotta sitten'),     getRelativeDate(-6), 'six years ago');
    dateEqual(testCreateDate('seitsemän vuotta sitten'), getRelativeDate(-7), 'seven years ago');
    dateEqual(testCreateDate('kahdeksan vuotta sitten'), getRelativeDate(-8), 'eight years ago');
    dateEqual(testCreateDate('yhdeksän vuotta sitten'),  getRelativeDate(-9), 'nine years ago');

  });

  method('format', function() {

    test(then, '5. tammikuuta 2010 klo 15.52', 'default format');

    assertFormatShortcut(then, 'short', '5.1.2010');
    assertFormatShortcut(then, 'medium', '5. tammikuuta 2010');
    assertFormatShortcut(then, 'long', '5. tammikuuta 2010 klo 15.52');
    assertFormatShortcut(then, 'full', 'tiistai 5. tammikuuta 2010 klo 15.52');

    test(then, ['{time}'], '15.52', 'preferred time');
    test(then, ['{stamp}'], 'ti 5 tammi 2010 15.52', 'preferred stamp');
    test(then, ['%c'], 'ti 5 tammi 2010 15.52', '%c stamp');

    test(new Date(2011, 0, 25), ['{d}. {month} {yyyy}'], '25. tammikuuta 2011', 'Jan');
    test(new Date(2011, 1, 25), ['{d}. {month} {yyyy}'], '25. helmikuuta 2011', 'Feb');
    test(new Date(2011, 2, 25), ['{d}. {month} {yyyy}'], '25. maaliskuuta 2011', 'Mar');
    test(new Date(2011, 3, 25), ['{d}. {month} {yyyy}'], '25. huhtikuuta 2011', 'Apr');
    test(new Date(2011, 4, 25), ['{d}. {month} {yyyy}'], '25. toukokuuta 2011', 'May');
    test(new Date(2011, 5, 25), ['{d}. {month} {yyyy}'], '25. kesäkuuta 2011', 'Jun');
    test(new Date(2011, 6, 25), ['{d}. {month} {yyyy}'], '25. heinäkuuta 2011', 'Jul');
    test(new Date(2011, 7, 25), ['{d}. {month} {yyyy}'], '25. elokuuta 2011', 'Aug');
    test(new Date(2011, 8, 25), ['{d}. {month} {yyyy}'], '25. syyskuuta 2011', 'Sep');
    test(new Date(2011, 9, 25), ['{d}. {month} {yyyy}'], '25. lokakuuta 2011', 'Oct');
    test(new Date(2011,10, 25), ['{d}. {month} {yyyy}'], '25. marraskuuta 2011', 'Nov');
    test(new Date(2011,11, 25), ['{d}. {month} {yyyy}'], '25. joulukuuta 2011', 'Dec');

    test(new Date(2011, 11, 5), ['{weekday}'], 'maanantai', 'Mon');
    test(new Date(2011, 11, 6), ['{weekday}'], 'tiistai', 'Tue');
    test(new Date(2011, 11, 7), ['{weekday}'], 'keskiviikko', 'Wed');
    test(new Date(2011, 11, 8), ['{weekday}'], 'torstai', 'Thu');
    test(new Date(2011, 11, 9), ['{weekday}'], 'perjantai', 'Fri');
    test(new Date(2011, 11,10), ['{weekday}'], 'lauantai', 'Sat');
    test(new Date(2011, 11,11), ['{weekday}'], 'sunnuntai', 'Sun');

    test(new Date('January 3, 2010'), ['{w}'], '53',   'locale week number | Jan 3 2010');
    test(new Date('January 3, 2010'), ['{ww}'], '53',  'locale week number padded | Jan 3 2010');
    test(new Date('January 3, 2010'), ['{wo}'], '53.', 'locale week number ordinal | Jan 3 2010');
    test(new Date('January 4, 2010'), ['{w}'], '1',    'locale week number | Jan 4 2010');
    test(new Date('January 4, 2010'), ['{ww}'], '01',  'locale week number padded | Jan 4 2010');
    test(new Date('January 4, 2010'), ['{wo}'], '1.',  'locale week number ordinal | Jan 4 2010');

    test(new Date(2015, 10, 8),  ['{Dow}'], 'su', 'Sun');
    test(new Date(2015, 10, 9),  ['{Dow}'], 'ma', 'Mon');
    test(new Date(2015, 10, 10), ['{Dow}'], 'ti', 'Tue');
    test(new Date(2015, 10, 11), ['{Dow}'], 'ke', 'Wed');
    test(new Date(2015, 10, 12), ['{Dow}'], 'to', 'Thu');
    test(new Date(2015, 10, 13), ['{Dow}'], 'pe', 'Fri');
    test(new Date(2015, 10, 14), ['{Dow}'], 'la', 'Sat');

    test(new Date(2015, 0, 1),  ['{Mon}'], 'tammi', 'Jan');
    test(new Date(2015, 1, 1),  ['{Mon}'], 'helmi', 'Feb');
    test(new Date(2015, 2, 1),  ['{Mon}'], 'maalis', 'Mar');
    test(new Date(2015, 3, 1),  ['{Mon}'], 'huhti', 'Apr');
    test(new Date(2015, 4, 1),  ['{Mon}'], 'touko', 'May');
    test(new Date(2015, 5, 1),  ['{Mon}'], 'kesä', 'Jun');
    test(new Date(2015, 6, 1),  ['{Mon}'], 'heinä', 'Jul');
    test(new Date(2015, 7, 1),  ['{Mon}'], 'elo', 'Aug');
    test(new Date(2015, 8, 1),  ['{Mon}'], 'syys', 'Sep');
    test(new Date(2015, 9, 1),  ['{Mon}'], 'loka', 'Oct');
    test(new Date(2015, 10, 1), ['{Mon}'], 'marras', 'Nov');
    test(new Date(2015, 11, 1), ['{Mon}'], 'joulu', 'Dec');

  });

  method('relative', function() {

    assertRelative('1 second ago', '1 sekunti sitten');
    assertRelative('1 minute ago', '1 minuutti sitten');
    assertRelative('1 hour ago',   '1 tunti sitten');
    assertRelative('1 day ago',    '1 päivä sitten');
    assertRelative('1 week ago',   '1 viikko sitten');
    assertRelative('1 month ago',  '1 kuukausi sitten');
    assertRelative('1 year ago',   '1 vuosi sitten');

    assertRelative('3 seconds ago', '3 sekuntia sitten');
    assertRelative('3 minutes ago', '3 minuuttia sitten');
    assertRelative('3 hours ago',   '3 tuntia sitten');
    assertRelative('3 days ago',    '3 päivää sitten');
    assertRelative('3 weeks ago',   '3 viikkoa sitten');
    assertRelative('3 months ago',  '3 kuukautta sitten');
    assertRelative('3 years ago',   '3 vuotta sitten');

    assertRelative('5 seconds ago', '5 sekuntia sitten');
    assertRelative('5 minutes ago', '5 minuuttia sitten');
    assertRelative('5 hours ago',   '5 tuntia sitten');
    assertRelative('5 days ago',    '5 päivää sitten');
    assertRelative('5 weeks ago',   '1 kuukausi sitten');
    assertRelative('5 months ago',  '5 kuukautta sitten');
    assertRelative('5 years ago',   '5 vuotta sitten');

    assertRelative('1 second from now', '1 sekunnin kuluttua');
    assertRelative('1 minute from now', '1 minuutin kuluttua');
    assertRelative('1 hour from now',   '1 tunnin kuluttua');
    assertRelative('1 day from now',    '1 päivän kuluttua');
    assertRelative('1 week from now',   '1 viikon kuluttua');
    assertRelative('1 month from now',  '1 kuukauden kuluttua');
    assertRelative('1 year from now',   '1 vuoden kuluttua');

    assertRelative('3 seconds from now', '3 sekunnin kuluttua');
    assertRelative('3 minutes from now', '3 minuutin kuluttua');
    assertRelative('3 hours from now',   '3 tunnin kuluttua');
    assertRelative('3 days from now',    '3 päivän kuluttua');
    assertRelative('3 weeks from now',   '3 viikon kuluttua');
    assertRelative('3 months from now',  '3 kuukauden kuluttua');
    assertRelative('3 years from now',   '3 vuoden kuluttua');

    assertRelative('5 seconds from now', '5 sekunnin kuluttua');
    assertRelative('5 minutes from now', '5 minuutin kuluttua');
    assertRelative('5 hours from now',   '5 tunnin kuluttua');
    assertRelative('5 days from now',    '5 päivän kuluttua');
    assertRelative('5 weeks from now',   '1 kuukauden kuluttua');
    assertRelative('5 months from now',  '5 kuukauden kuluttua');
    assertRelative('5 years from now',   '5 vuoden kuluttua');

  });

  method('beginning/end', function() {
    dateEqual(dateRun(new Date(2010, 0), 'beginningOfWeek'), new Date(2009, 11, 28), 'beginningOfWeek');
    dateEqual(dateRun(new Date(2010, 0), 'endOfWeek'), new Date(2010, 0, 3, 23, 59, 59, 999), 'endOfWeek');
  });

});

package('Number | Finnish Dates', function () {

  method('duration', function() {
    testSetLocale('fi');

    test(run(0, 'milliseconds'), '0 millisekuntia',  '0 milliseconds');

    test(run(1, 'second'), '1 sekunti',  '1 second');
    test(run(1, 'minute'), '1 minuutti', '1 minute');
    test(run(1, 'hour'),   '1 tunti',    '1 hour');
    test(run(1, 'day'),    '1 päivä',    '1 day');
    test(run(1, 'week'),   '1 viikko',   '1 week');
    test(run(1, 'month'),  '1 kuukausi', '1 month');
    test(run(1, 'year'),   '1 vuosi',    '1 year');

    test(run(3, 'seconds'), '3 sekuntia',  '3 seconds');
    test(run(3, 'minutes'), '3 minuuttia', '3 minutes');
    test(run(3, 'hours'),   '3 tuntia',    '3 hours');
    test(run(3, 'days'),    '3 päivää',    '3 days');
    test(run(3, 'weeks'),   '3 viikkoa',   '3 weeks');
    test(run(3, 'months'),  '3 kuukautta', '3 months');
    test(run(3, 'years'),   '3 vuotta',    '3 years');

    test(run(10, 'seconds'), '10 sekuntia',  '10 seconds');
    test(run(10, 'minutes'), '10 minuuttia', '10 minutes');
    test(run(10, 'hours'),   '10 tuntia',    '10 hours');
    test(run(10, 'months'),  '10 kuukautta', '10 months');
    test(run(10, 'years'),   '10 vuotta',    '10 years');

  });

});