import { ExtFormControl } from './fc.models';

export enum AuthorizationActions {
    Login = 'Вход в учетную запись',
    Register = 'Создание учетной записи',
    ForgotPassword = 'Восстановление пароля',
    ResetPassword = 'Сброс пароля',
    LockScreen = 'Блокировка экрана',
    MailConfirmation = 'Подтверждение почтового адреса'
}

export enum AuthorizationFields {
    Email = 'Адрес электронной почты',
    Password = 'Пароль',
    FirstName = 'Имя',
    LastName = 'Фамилия',
    TermsOfUse = 'TermsOfUse',
    Submit = 'Submit'
}

export type AuthorizationConfig = Map<string, Set<AuthorizationFields>>;

export type MapOfAuthorizationFieldsAndFC = Map<AuthorizationFields, ExtFormControl>;

export type SetOfAuthorizationFields = Set<AuthorizationFields>;
