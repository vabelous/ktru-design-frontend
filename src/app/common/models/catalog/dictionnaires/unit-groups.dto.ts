/**
 * Справочник «Группы единицы измерения»
 * Одна запись
 *
 * @param id                                  // Порядковый номер записи в БД
 * @param title    			                      // Наименование
 *
 */
export interface UnitGroupDTO {
  id: number;
  title: string;
}

/**
 * Справочник «Группы единицы измерения»
 * Массив записей
 *
 */
export interface UnitGroupsDTO extends Array<UnitGroupDTO> {}

export const UNIT_GROUPS: UnitGroupsDTO = [
  {id: 1, title: 'Единицы длины'},
  {id: 2, title: 'Единицы площади'},
  {id: 3, title: 'Единицы объема'},
  {id: 4, title: 'Единицы массы'},
  {id: 5, title: 'Технические единицы'},
  {id: 6, title: 'Единицы времени'},
  {id: 7, title: 'Экономические единицы'},
];
