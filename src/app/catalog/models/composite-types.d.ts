/**
 * Справочник «Композитные типы»
 * Одна запись
 *
 * @param check_formula                     // Формула для проверки значений
 * @param fields                            // Поля
 * @param id                                // Порядковый номер записи в БД
 * @param template                          // Шаблон в формате Dot.Js
 * @param title    			                    // Наименование
 *
 */
declare interface CompositeTypeDTO {
  check_formula: string;
  fields: CompositeTypeFieldsDTO;
  id: number;
  template: string;
  title: string;
}

/**
 * Справочник «Композитные типы»
 * Массив записей
 *
 */
declare interface CompositeTypesDTO extends Array<CompositeTypeDTO> {}

/**
 * Справочник «Композитные типы»
 * Одна запись (сокращенная нотация)
 *
 * @param check_formula                     // Формула для проверки значений
 * @param fields                            // Поля
 * @param id                                // Порядковый номер записи в БД
 * @param template                          // Шаблон в формате Dot.Js
 * @param title    			                    // Наименование
 *
 */
declare interface CompositeTypeShortDTO {
  id: number;
  template: string;
  title: string;
}

/**
 * Справочник «Поля композитных типов»
 * Одна запись
 *
 * @param id                                  // Порядковый номер записи в БД
 * @param alias    			                      // Алиас (не обязательный)
 * @param num    			                        // Порядковый номер при отображении
 * @param title    			                      // Наименование
 * @param title    			                      // Тип значения составного типа
 * @param unit_id    			                    // Идентификатор единицы измерения
 *
 */
declare interface CompositeTypeFieldDTO {
  id: number;
  alias?: string;
  num: number;
  title: string;
  type: AttribyteValueTypes;
  unit_id: number;
}

/**
 * Справочник «Поля композитных типов»
 * Массив записей
 *
 */
declare interface CompositeTypeFieldsDTO extends Array<CompositeTypeFieldDTO> {}
