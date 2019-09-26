/**
 * Справочник «Атрибуты»
 * Одна запись
 *
 * @param id                                  // Порядковый номер записи в БД
 * @param alias    			                      // Алиас
 * @param parent    			                    // Родительская группа
 * @param title    			                      // Наименование
 * @param create_date				                  // Дата создания записи (UTC)
 * @param created_by				                  // Id пользователя создавшего запись
 * @param modify_date				                  // Дата последнего обновления записи (UTC)
 * @param modified_by				                  // Id пользователя выполнившего последнее обновление записи
 *
 */
declare interface AttributeDTO {
  id: number;
  alias: string;
  parent: string;
  title: string;
  create_date: string;
  created_by: number;
  modify_date: string;
  modified_by: number;
}


declare const enum ATTRIBUTE_VALUE_TYPES  {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Composite = 'composite'
}
