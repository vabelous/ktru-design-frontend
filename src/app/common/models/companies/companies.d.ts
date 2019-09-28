/**
 * Справочник «Компании»
 * Одна запись (короткое значение)
 *
 * @param id                  // Порядковый номер записи в БД
 * @param short_title         // Краткое наименование
 * @param title_native_lang   // Полное наименование
 *
 */
declare interface CompanyShortDTO {
  id: number;
  short_title: string;
  title_native_lang: string;
}

/**
 * Справочник «Компании»
 * Массив записей (короткое значение)
 *
 */
declare interface CompaniesShortDTO extends Array<CompanyShortDTO> {}
