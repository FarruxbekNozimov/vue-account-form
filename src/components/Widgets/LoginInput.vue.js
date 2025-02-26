/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
const __VLS_props = defineProps({ modelValue: String, isDuplicate: Boolean });
const __VLS_emit = defineEmits(['update:modelValue', 'blur']); /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.$emit('update:modelValue', $event.target.value);
        } },
    ...{ onBlur: (...[$event]) => {
            __VLS_ctx.$emit('blur', $event.target.value);
        } },
    value: (__VLS_ctx.modelValue),
    ...{ class: "w-full p-2 px-3 border-2 rounded outline-none focus:ring-1 focus:ring-green-300 focus:border-green-300" },
    ...{ class: ({
            'border-red-500 focus:ring-red-300 focus:border-red-300': __VLS_ctx.isDuplicate,
            'border-gray-400': !__VLS_ctx.isDuplicate,
        }) },
    maxlength: (100),
});
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-1']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-green-300']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-green-300']} */ ;
/** @type {__VLS_StyleScopedClasses['border-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-red-300']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-red-300']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-400']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
            $emit: __VLS_emit,
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
