import { UnitGroupDTO } from '@ktru-models/index';

/**
 * Справочник «Единицы измерения»
 * Одна запись
 *
 * @param id                                  // Порядковый номер записи в БД
 * @param code    			                      // Код общероссийского классификатора единиц измерения (ОКЕИ) (###)
 * @param code_mark_international				      // Кодовое обозначение международное
 * @param symbol				                      // Символ, используемый для обозначения в РФ
 * @param symbol_international				        // Символ, используемый для международного обозначения
 * @param title				                        // Наименование
 *
 */
export interface UnitDTO {
  id: number;
  code: string;
  code_mark_international: string;
  group: UnitGroupDTO;
  symbol: string;
  symbol_international: string;
  title: string;
}

/**
 * Справочник «Единицы измерения»
 * Массив записей
 *
 */
export interface UnitsDTO extends Array<UnitDTO> {}

/**
 * Справочник «Единицы измерения»
 * Параметры запроса
 * Добавление и обновление
 *
 * @param id                                  // Порядковый номер записи в БД
 * @param code    			                      // Код общероссийского классификатора единиц измерения (ОКЕИ) (###)
 * @param code_mark_international				      // Кодовое обозначение международное
 * @param symbol				                      // Символ, используемый для обозначения в РФ
 * @param symbol_international				        // Символ, используемый для международного обозначения
 * @param title				                        // Наименование
 *
 */
export interface UnitCUDTO {
  id: number;
  code: string;
  code_mark_international: string;
  group: UnitGroupDTO;
  symbol: string;
  symbol_international: string;
  title: string;
}
