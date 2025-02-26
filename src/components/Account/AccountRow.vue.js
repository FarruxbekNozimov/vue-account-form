/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, onMounted, onBeforeUnmount } from 'vue';
import LabelInput from '@/components/Widgets/LabelInput.vue';
import LoginInput from '@/components/Widgets/LoginInput.vue';
import PasswordInput from '@/components/Widgets/PasswordInput.vue';
import DeleteButton from '@/components/Widgets/DeleteButton.vue';
import { labelToString } from '../../utils/format-label.ts';
const __VLS_props = defineProps({ account: Object, isDuplicateLogin: Function });
const __VLS_emit = defineEmits(['update-label', 'save-update', 'update-type', 'update-login', 'delete-account']);
// Track unsaved changes
const hasUnsavedChanges = ref(false);
const handleInputChange = () => {
    hasUnsavedChanges.value = true;
};
const handleSave = () => {
    hasUnsavedChanges.value = false;
};
// Warn before leaving the page
const beforeUnloadHandler = (event) => {
    if (hasUnsavedChanges.value) {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
    }
};
// Add event listener on mount
onMounted(() => {
    window.addEventListener('beforeunload', beforeUnloadHandler);
});
// Remove event listener on unmount
onBeforeUnmount(() => {
    window.removeEventListener('beforeunload', beforeUnloadHandler);
}); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({
    ...{ class: "bg-white border-b border-gray-300 text-gray-700" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ class: "px-6 py-4" },
});
/** @type {[typeof LabelInput, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(LabelInput, new LabelInput({
    ...{ 'onUpdate:modelValue': {} },
    ...{ 'onBlur': {} },
    modelValue: (__VLS_ctx.labelToString(__VLS_ctx.account.label)),
}));
const __VLS_1 = __VLS_0({
    ...{ 'onUpdate:modelValue': {} },
    ...{ 'onBlur': {} },
    modelValue: (__VLS_ctx.labelToString(__VLS_ctx.account.label)),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
let __VLS_5;
const __VLS_6 = {
    'onUpdate:modelValue': ((value) => {
        __VLS_ctx.$emit('update-label', __VLS_ctx.account, value);
        __VLS_ctx.handleInputChange();
    })
};
const __VLS_7 = {
    onBlur: ((value) => {
        __VLS_ctx.$emit('save-update', __VLS_ctx.account, 'label', value);
        __VLS_ctx.handleSave();
    })
};
var __VLS_2;
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ class: "px-6 py-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    ...{ onChange: (...[$event]) => {
            __VLS_ctx.$emit('update-type', __VLS_ctx.account);
        } },
    value: (__VLS_ctx.account.type),
    ...{ class: "p-2 px-3 border border-gray-400 rounded outline-none bg-white" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "LDAP",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: "Локальная",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ class: "px-6 py-4" },
    colspan: (__VLS_ctx.account.type !== 'Локальная' ? 2 : 1),
});
/** @type {[typeof LoginInput, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(LoginInput, new LoginInput({
    ...{ 'onUpdate:modelValue': {} },
    ...{ 'onBlur': {} },
    modelValue: (__VLS_ctx.account.login),
    isDuplicate: (__VLS_ctx.isDuplicateLogin(__VLS_ctx.account)),
}));
const __VLS_9 = __VLS_8({
    ...{ 'onUpdate:modelValue': {} },
    ...{ 'onBlur': {} },
    modelValue: (__VLS_ctx.account.login),
    isDuplicate: (__VLS_ctx.isDuplicateLogin(__VLS_ctx.account)),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_11;
let __VLS_12;
let __VLS_13;
const __VLS_14 = {
    'onUpdate:modelValue': ((value) => {
        __VLS_ctx.$emit('update-login', __VLS_ctx.account, value);
        __VLS_ctx.handleInputChange();
    })
};
const __VLS_15 = {
    onBlur: ((value) => {
        __VLS_ctx.$emit('save-update', __VLS_ctx.account, 'login', value);
        __VLS_ctx.handleSave();
    })
};
var __VLS_10;
if (__VLS_ctx.account.type === 'Локальная') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
        ...{ class: "px-6 py-4" },
    });
    /** @type {[typeof PasswordInput, ]} */ ;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(PasswordInput, new PasswordInput({
        ...{ 'onBlur': {} },
        modelValue: (__VLS_ctx.account.password),
    }));
    const __VLS_17 = __VLS_16({
        ...{ 'onBlur': {} },
        modelValue: (__VLS_ctx.account.password),
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    let __VLS_19;
    let __VLS_20;
    let __VLS_21;
    const __VLS_22 = {
        onBlur: ((value) => {
            __VLS_ctx.$emit('save-update', __VLS_ctx.account, 'password', value);
            __VLS_ctx.handleSave();
        })
    };
    var __VLS_18;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({
    ...{ class: "px-6 py-4 text-center" },
});
/** @type {[typeof DeleteButton, ]} */ ;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent(DeleteButton, new DeleteButton({
    ...{ 'onClick': {} },
}));
const __VLS_24 = __VLS_23({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_23));
let __VLS_26;
let __VLS_27;
let __VLS_28;
const __VLS_29 = {
    onClick: (...[$event]) => {
        __VLS_ctx.$emit('delete-account', __VLS_ctx.account.id);
    }
};
var __VLS_25;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
            $emit: __VLS_emit,
            LabelInput: LabelInput,
            LoginInput: LoginInput,
            PasswordInput: PasswordInput,
            DeleteButton: DeleteButton,
            labelToString: labelToString,
            handleInputChange: handleInputChange,
            handleSave: handleSave,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
            $emit: __VLS_emit,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
