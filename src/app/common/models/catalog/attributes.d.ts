/**
 * Справочник «Атрибуты»
 * Одна запись
 *
 * @param av_type                                  // Тип значения атрибута
 * @param can_add_values                           // Разрешено добавлять значения из компонентов
 * @param composite_type                           // Композитный тип
 * @param create_date				                       // Дата создания записи (UTC)
 * @param created_by				                       // Id пользователя создавшего запись
 * @param description				                       // Описание
 * @param dictionaries				                     // Словари
 * @param group				                             // Группа атрибутов
 * @param has_values				                       // Запись содержит значения
 * @param id                                       // Порядковый номер записи в БД
 * @param modify_date				                       // Дата последнего обновления записи (UTC)
 * @param modified_by				                       // Id пользователя выполнившего последнее обновление записи
 * @param parent    			                         // Id родительского атрибута
 * @param title    			                           // Наименование
 * @param translate_type    			                 // Тип перевода
 * @param translate_type    			                 // Id единицы измерения
 * @param use_when_searching    			             // Использовать при поиске
 * @param use_when_searching    			             // Возможные значения атрибутов
 *
 */
declare interface AttributeDTO {
  av_type: AttribyteValueTypes;
  can_add_values: boolean;
  composite_type: CompositeTypeShortDTO;
  create_date: string;
  created_by: number;
  description: string;
  dictionaries: AttributeDictionariesDTO;
  group: AttributeGroupShortDTO;
  has_values: boolean;
  id: number;
  modify_date: string;
  modified_by: number;
  parent_id: number;
  title: string;
  translate_type: AttribyteTranslateTypes;
  unit_id: number;
  use_when_searching: boolean;
  values: AttributeValuesDTO;
}

/**
 * Справочник ««Атрибуты»»
 * Массив записей
 *
 */
declare interface AttributesDTO extends Array<AttributeDTO> {}

/**
 * Справочник «Значения атрибутов»
 * Одна запись
 *
 * @param code                                  // Представление значения в виде кода (не обязательный)
 * @param description                           // Описание (не обязательный)
 * @param female_value                          // Представление значения в женском роде (не обязательный)
 * @param id                                    // Порядковый номер записи в БД
 * @param female_value                          // Представление значения в мужском роде (не обязательный)
 * @param neuter_value                          // Представление значения в среднем роде (не обязательный)
 * @param parents                               // Id словарей в которых представлено значение
 * @param short_value                           // Представление значения в сокращенном виде (не обязательный)
 * @param translate_type                        // Тип перевода (не обязательный)
 * @param value                                 // Значение
 *
 */
declare interface AttributeValueDTO {
  code?: string;
  description?: string;
  female_value?: string;
  id: number;
  male_value?: string;
  neuter_value?: string;
  parents: Array<number>;
  short_value?: string;
  translate_type?: AttribyteTranslateTypes;
  value: string | number | boolean;
}

/**
 * Справочник «Значения атрибутов»
 * Массив записей
 *
 */
declare interface AttributeValuesDTO extends Array<AttributeValueDTO> {}

/**
 * Справочник «Справочники атрибутов»
 * Одна запись
 *
 * @param id                                    // Порядковый номер записи в БД
 * @param title                                 // Наименование
 * @param values                                // Массив Id значений входящих в словарь
 *
 *
 */
declare interface AttributeDictionaryDTO {
  id: number;
  title: string;
  values: Array<number>;
}

/**
 * Справочник «Справочники атрибутов»
 * Массив записей
 *
 */
declare interface AttributeDictionariesDTO extends Array<AttributeDictionaryDTO> {}

/**
 *  Возможные значения ключа
 *  для типа значений
 */
declare const enum AttribyteValueTypes {
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Composite = 'composite'
}

/**
 *  Возможные значения ключа
 *  для типа перевода
 */
declare const enum AttribyteTranslateTypes {
  Translate = 'translate',
  Translit = 'translit',
  Nochanges = 'nochanges',
}
