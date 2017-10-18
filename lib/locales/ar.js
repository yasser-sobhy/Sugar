/*
 * Spanish locale definition.
 * See the readme for customization and more information.
 * To set this locale globally:
 *
 * Sugar.Date.setLocale('es')
 *
 */
Sugar.Date.addLocale('ar', {
  'plural': true,
  'numeralUnits': true,
  'units': 'لحظة|,ثانية|,دقيقة|,ساعة|,يوم|,أسبوع|,شهر|,سنة|',
  'months': 'يناير|,فبراير|,مارس|,أبريل|,مايو|,يونيو|,يوليو|,أغسطس|,سبتمبر|,أكتوبر|,نوفمبر|,ديسمبر|',
  'weekdays': 'السبت|س,الأحد|ح,الاثنين|ن,الثلاثاء|ث,الأربعاء|ر,الخميس|خ,الجمعة|ع',
  'numerals': 'صفر,واحد,اثنين,ثلاثة,أربعة,خمسة,ستة,سبعة,ثمانية,تسعة,عشرة',
  'tokens': ',,من',
  'short':  '{dd}/{MM}/{yyyy}',
  'medium': '{d} {Month} {yyyy}',
  'long':   '{d} {Month} {yyyy} {time}',
  'full':   '{weekday}, {d} {month} {yyyy} {time}',
  'stamp':  '{dow} {d} {mon} {yyyy} {time}',
  'time':   '{hh}:{mm}',
  'past':   '{sign} {num} {unit}',
  'future': '{sign} {num} {unit}',
  'duration': '{num} {unit}',
  'timeMarkers': 'a las',
  'ampm': 'ص,م',
  'modifiers': [
    { 'name': 'day', 'src': 'anteayer', 'value': -2 },
    { 'name': 'day', 'src': 'ayer', 'value': -1 },
    { 'name': 'day', 'src': 'hoy', 'value': 0 },
    { 'name': 'day', 'src': 'mañana|manana', 'value': 1 },
    { 'name': 'sign', 'src': 'hace', 'value': -1 },
    { 'name': 'sign', 'src': 'dentro de', 'value': 1 },
    { 'name': 'shift', 'src': 'pasad:o|a', 'value': -1 },
    { 'name': 'shift', 'src': 'próximo|próxima|proximo|proxima', 'value': 1 }
  ],
  'parse': [
    '{months} {2?} {year?}',
    '{sign} {num} {unit}',
    '{num} {unit} {sign}',
    '{0?}{1?} {unit:5-7} {shift}',
    '{0?}{1?} {shift} {unit:5-7}'
  ],
  'timeParse': [
    '{shift?} {day|weekday} {shift?}',
    '{date} {2?} {months?}\\.? {2?} {year?}'
  ],
  'timeFrontParse': [
    '{shift?} {weekday} {shift?}',
    '{date} {2?} {months?}\\.? {2?} {year?}'
  ]
});
