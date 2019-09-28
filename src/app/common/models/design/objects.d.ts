/**
 * Справочник «Объекты»
 * Одна запись
 *
 * @param apartments_number                // Количество жилых помещений (квартир)
 * @param audits_count                     // Количество документов «Аудит»
 * @param audits_count                     // Количество балконов
 * @param building_square                  // Площадь здания (многоквартирного дома)
 * @param building_type                    // Серия, тип проект здания
 * @param cadastral_number                 // Кадастровый номер
 * @param capital_repair_projects_count    // Количество проектов на капитальный ремонт
 * @param code                             // Код (номер)
 * @param commissioning_year               // Год ввода в эксплуатацию
 * @param common_square                    // Общая площадь помещений общего пользования в многоквартирном доме
 * @param company                          // Компания-владелец объекта
 * @param construction_year                // Год постройки
 * @param drawings_count                   // Количество чертежей в объекте
 * @param elevators_number                 // Количество лифтов
 * @param entrances_number                 // Количество подъездов
 * @param estimates_count                  // Количество смет у объекта
 * @param floors_number                    // Количество этажей
 * @param housefull                        // Адрес по ФИАС
 * @param houseguid                        // GUID адреса по ФИАС
 * @param id                               // Порядковый номер записи в БД
 * @param is_own                           // Текущая компания является владельцем объекта
 * @param is_public                        // Публичный объект, т.е. доступный всем компаниям
 * @param living_spaces_square             // Общая площадь жилых помещений
 * @param loggias_number                   // Количество лоджий
 * @param measurements_count               // Количество замеров у объекта
 * @param non_residential_premises_number  // Количество нежилых помещений
 * @param photos_count                     // Количество фотограйи подгруженных к объекту
 * @param projects_count                   // Количество проектов у объекта
 * @param projects_count                   // Количество ресурсных ведомостей у объекта
 * @param specs_count                      // Количество спецификаций у объекта
 * @param square_except_common             // Общая площадь нежилых помещений, за исключением помещений общего пользования
 * @param survey_reports_count             // Количество технических отчетов по обследованию
 * @param technical_passports_count        // Количество технических паспортов
 * @param technical_tasks_count            // Количество технических заданий
 * @param title                            // Наименование
 * @param underground_floors_number        // Количество подземных этажей
 *
 */
declare interface ObjectDTO {
  apartments_number: string;
  audits_count: number;
  balconies_number: string;
  building_square: string;
  building_type: string;
  cadastral_number: string;
  capital_repair_projects_count: number;
  code: string;
  commissioning_year: string;
  common_square: string;
  company: CompanyShortDTO;
  construction_year: string;
  drawings_count: number;
  elevators_number: string;
  entrances_number: string;
  estimates_count: number;
  floors_number: string;
  housefull: string;
  houseguid: string;
  id: number;
  is_own: boolean;
  is_public: boolean;
  living_spaces_square: string;
  loggias_number: string;
  measurements_count: number;
  non_residential_premises_number: string;
  photos_count: number;
  projects_count: number;
  resourceslists_count: number;
  specs_count: number;
  square_except_common: string;
  survey_reports_count: number;
  technical_passports_count: number;
  technical_tasks_count: number;
  title: string;
  underground_floors_number: string;
  visibility: CompaniesShortDTO;
}
