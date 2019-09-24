/**
 * Справочник «Группы атрибутов»
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
export interface AttributeGroupDTO {
  id: number;
  alias: string;
  parent: AttributeGroupParentDTO;
  title: string;
  create_date: string;
  created_by: number;
  modify_date: string;
  modified_by: number;
}

/**
 * Справочник «Группы атрибутов»
 * Массив записей
 *
 */
export interface AttributeGroupsDTO extends Array<AttributeGroupDTO> {}

/**
 * Справочник «Группы атрибутов»
 * Родитель
 * Одна запись
 *
 * @param id                                  // Порядковый номер записи в БД
 * @param alias    			                      // Алиас (не обязательный)
 * @param title    			                      // Наименование
 *
 */
export interface AttributeGroupParentDTO {
  id: number;
  alias?: string;
  title: string;
}

/**
 * Справочник «Группы атрибутов»
 * Результаты поиска
 * Одна запись
 *
 * @param id                                  // Порядковый номер записи в БД
 * @param id_path                             // Порядковые номера записей в БД текущей записи и родителей
 * @param alias    			                      // Алиас
 * @param parent    			                    // Родительская группа
 * @param parent_id    			                  // Id Родительской группы (не обязательный)
 * @param title    			                      // Наименование
 * @param title_path    			                // Наименование текущей записи и родителей
 * @param has_children    			              // Является родителем
 *
 */
export interface AttributeGroupListItemDTO {
  id: number;
  id_path: string;
  alias: string;
  parent: AttributeGroupParentDTO;
  parent_id?: number;
  title: string;
  title_path: string;
  has_children: boolean;
}

/**
 * Справочник «Группы атрибутов»
 * Результаты поиска
 * Массив записей
 *
 */
export interface AttributeGroupListItemsDTO extends Array<AttributeGroupListItemDTO> {}
