/**
 * Справочник «Группы единицы измерения»
 * Одна запись
 *
 * @param id                                  // Порядковый номер записи в БД
 * @param title    			                      // Наименование
 *
 */
declare interface UnitGroupDTO {
  id: number;
  title: string;
}

/**
 * Справочник «Группы единицы измерения»
 * Массив записей
 *
 */
declare interface UnitGroupsDTO extends Array<UnitGroupDTO> {}
