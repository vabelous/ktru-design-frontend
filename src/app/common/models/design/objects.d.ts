/**
 * Справочник «Композитные типы»
 * Одна запись
 *
 * @param apartments_number                // Количество жилых помещений (квартир)
 * @param audits_count                     // Количество документов «Аудит»
 * @param audits_count                     // Количество балконов
 * @param building_square                  // Площадь здания (многоквартирного дома)
 * @param building_type                    // Серия, тип проект здания

 *
 */
declare interface CompositeTypeDTO {
  apartments_number: string;
  audits_count: number;
  balconies_number: string;
  building_square: string;
  building_type: string;

}
