/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { useAccount } from '@/components/Account/composables/useAccount.ts';
import AccountRow from '@/components/Account/AccountRow.vue';
const { account_store, showPasswordColumn, saveUpdate } = useAccount();
const isDuplicateLogin = (account) => {
    return account_store.CHECK_LOGIN(account.id, account.login);
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "border rounded-xl shadow-xl relative overflow-x-auto" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({
    ...{ class: "w-full text-sm text-left text-gray-500" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({
    ...{ class: "text-xs text-gray-500 uppercase bg-gray-100" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
    ...{ class: "px-6 py-3 w-[20%]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
    ...{ class: "px-6 py-3 w-[20%]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
    ...{ class: "px-6 py-3 w-[20%]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
    ...{ class: "px-6 py-3 w-[20%]" },
});
(__VLS_ctx.showPasswordColumn || !__VLS_ctx.account_store?.LIST?.length ? 'Пароль' : '');
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({
    ...{ class: "px-6 py-3 w-[10%]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
for (const [account] of __VLS_getVForSourceType((__VLS_ctx.account_store?.LIST))) {
    /** @type {[typeof AccountRow, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(AccountRow, new AccountRow({
        ...{ 'onUpdateLabel': {} },
        ...{ 'onSaveUpdate': {} },
        ...{ 'onUpdateType': {} },
        ...{ 'onUpdateLogin': {} },
        ...{ 'onDeleteAccount': {} },
        key: (account.id),
        account: (account),
        isDuplicateLogin: (__VLS_ctx.isDuplicateLogin),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onUpdateLabel': {} },
        ...{ 'onSaveUpdate': {} },
        ...{ 'onUpdateType': {} },
        ...{ 'onUpdateLogin': {} },
        ...{ 'onDeleteAccount': {} },
        key: (account.id),
        account: (account),
        isDuplicateLogin: (__VLS_ctx.isDuplicateLogin),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    let __VLS_5;
    const __VLS_6 = {
        onUpdateLabel: ((account, value) => (account.label = value))
    };
    const __VLS_7 = {
        onSaveUpdate: (__VLS_ctx.saveUpdate)
    };
    const __VLS_8 = {
        onUpdateType: ((account) => __VLS_ctx.account_store.SET_ONE({
            ...account,
            password: account.type === 'LDAP' ? null : account.password,
        }))
    };
    const __VLS_9 = {
        onUpdateLogin: ((account, value) => (account.login = value))
    };
    const __VLS_10 = {
        onDeleteAccount: ((id) => __VLS_ctx.account_store.DELETE(id))
    };
    var __VLS_2;
}
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-x-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[20%]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[20%]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[20%]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[20%]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[10%]']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            AccountRow: AccountRow,
            account_store: account_store,
            showPasswordColumn: showPasswordColumn,
            saveUpdate: saveUpdate,
            isDuplicateLogin: isDuplicateLogin,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
