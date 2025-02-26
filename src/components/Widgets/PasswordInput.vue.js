/// <reference types="../../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref } from 'vue';
import { Eye, EyeClosed } from 'lucide-vue-next';
// Props for v-model and disabled state
const __VLS_props = defineProps({ modelValue: String, disabled: Boolean });
// Emit function for v-model
const emit = defineEmits(['update:modelValue']);
const showPassword = ref(false);
// Toggle password visibility
const togglePassword = () => {
    showPassword.value = !showPassword.value;
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "relative" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    ...{ onInput: (...[$event]) => {
            __VLS_ctx.emit('update:modelValue', $event.target.value);
        } },
    autocomplete: "new-password",
    autocapitalize: "off",
    spellcheck: "false",
    value: (__VLS_ctx.modelValue),
    type: (__VLS_ctx.showPassword ? 'text' : 'password'),
    disabled: (__VLS_ctx.disabled),
    ...{ class: "w-full p-2 px-3 border border-gray-400 rounded outline-none pr-8 focus:ring-1 focus:ring-green-300 focus:border-green-300" },
    ...{ class: ({ 'bg-gray-100 cursor-not-allowed': __VLS_ctx.disabled }) },
});
if (!__VLS_ctx.disabled) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.togglePassword) },
        type: "button",
        ...{ class: "absolute inset-y-0 right-2 flex items-center text-gray-500" },
    });
    const __VLS_0 = {}.Transition;
    /** @type {[typeof __VLS_components.Transition, typeof __VLS_components.Transition, ]} */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        name: "fade-scale",
        mode: "out-in",
    }));
    const __VLS_2 = __VLS_1({
        name: "fade-scale",
        mode: "out-in",
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_3.slots.default;
    const __VLS_4 = ((__VLS_ctx.showPassword ? __VLS_ctx.Eye : __VLS_ctx.EyeClosed));
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        key: (__VLS_ctx.showPassword),
    }));
    const __VLS_6 = __VLS_5({
        key: (__VLS_ctx.showPassword),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    var __VLS_3;
}
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-none']} */ ;
/** @type {__VLS_StyleScopedClasses['pr-8']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-1']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:ring-green-300']} */ ;
/** @type {__VLS_StyleScopedClasses['focus:border-green-300']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-not-allowed']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-y-0']} */ ;
/** @type {__VLS_StyleScopedClasses['right-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
            $emit: emit,
            Eye: Eye,
            EyeClosed: EyeClosed,
            emit: emit,
            showPassword: showPassword,
            togglePassword: togglePassword,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
            $emit: emit,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
