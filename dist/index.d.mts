import React, { ReactNode, CSSProperties, RefObject } from 'react';
export { CSSProperties, ReactNode, RefObject } from 'react';

type AnimationType = 'fade' | 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'zoom' | 'zoomIn' | 'zoomOut' | 'rotate' | 'rotateLeft' | 'rotateRight' | 'flip' | 'flipX' | 'flipY' | 'blur' | 'bounce';
type AnimationEngine = 'framer' | 'gsap' | 'headless';
interface AnimationProperties {
    opacity?: number;
    x?: number | string;
    y?: number | string;
    scale?: number;
    rotate?: number;
    rotateX?: number;
    rotateY?: number;
    filter?: string;
    transform?: string;
    [key: string]: any;
}
interface AnimationConfig {
    initial: AnimationProperties | CSSProperties;
    animate: AnimationProperties | CSSProperties;
}
interface CustomAnimation extends AnimationConfig {
    name?: string;
    description?: string;
}
interface ScrollRevealProps {
    /** Content to be revealed */
    children: ReactNode;
    /** Predefined animation type */
    animationType?: AnimationType;
    /** Custom animation configuration */
    customAnimation?: CustomAnimation;
    /** Animation delay in milliseconds */
    delay?: number;
    /** Animation duration in milliseconds */
    duration?: number;
    /** Whether animation should only play once */
    once?: boolean;
    /** Intersection observer threshold */
    threshold?: number | number[];
    /** Intersection observer root margin */
    rootMargin?: string;
    /** Disable animations */
    disabled?: boolean;
    /** Animation engine to use */
    engine?: AnimationEngine;
    /** Additional CSS classes */
    className?: string;
    /** Inline styles */
    style?: CSSProperties;
    /** Callback when element is revealed */
    onReveal?: () => void;
    /** Callback when element is hidden */
    onHide?: () => void;
}

/**
 * ScrollReveal Component
 *
 * A type-safe, production-ready scroll animation component that reveals
 * elements as they enter the viewport using IntersectionObserver.
 *
 * @example
 * ```tsx
 * <ScrollReveal animationType="fade" delay={200}>
 *   <div>Content to reveal</div>
 * </ScrollReveal>
 * ```
 */
declare const ScrollReveal: React.FC<ScrollRevealProps>;

interface UseScrollRevealOptions {
    /** Reference to the target element */
    ref: RefObject<Element>;
    /** Threshold for intersection (0-1) */
    threshold?: number | number[];
    /** Root margin for intersection observer */
    rootMargin?: string;
    /** Whether animation should only play once */
    once?: boolean;
    /** Disable the hook */
    disabled?: boolean;
    /** Custom root element for intersection */
    root?: Element | null;
}
interface UseScrollRevealReturn {
    /** Whether the element is currently in view */
    isInView: boolean;
    /** Whether the element has been animated (for once mode) */
    hasAnimated: boolean;
    /** Manually trigger reveal */
    reveal: () => void;
    /** Manually hide element */
    hide: () => void;
    /** Reset animation state */
    reset: () => void;
}
/**
 * Custom hook for scroll-based reveal animations
 *
 * @example
 * ```tsx
 * const { isInView, hasAnimated } = useScrollReveal({
 *   ref: elementRef,
 *   threshold: 0.1,
 *   once: true
 * });
 * ```
 */
declare function useScrollReveal({ ref, threshold, rootMargin, once, disabled, root, }: UseScrollRevealOptions): UseScrollRevealReturn;
/**
 * Hook for programmatic scroll reveal control
 *
 * @example
 * ```tsx
 * const controls = useScrollRevealControls();
 *
 * // Later in your code
 * controls.revealAll('.reveal-element');
 * controls.hideAll('.reveal-element');
 * ```
 */
declare function useScrollRevealControls(): {
    revealAll: (selector: string) => void;
    hideAll: (selector: string) => void;
    resetAll: (selector: string) => void;
};

interface ScrollRevealConfig {
    /** Default animation type */
    animationType?: AnimationType;
    /** Default animation delay */
    delay?: number;
    /** Default animation duration */
    duration?: number;
    /** Default once behavior */
    once?: boolean;
    /** Default threshold */
    threshold?: number | number[];
    /** Default root margin */
    rootMargin?: string;
    /** Default animation engine */
    engine?: AnimationEngine;
    /** Global disable flag */
    disabled?: boolean;
    /** Enable reduced motion support */
    respectReducedMotion?: boolean;
}
interface ScrollRevealProviderProps {
    children: ReactNode;
    config?: ScrollRevealConfig;
}
/**
 * Global configuration provider for ScrollReveal components
 *
 * @example
 * ```tsx
 * <ScrollRevealProvider config={{
 *   animationType: 'fadeUp',
 *   duration: 800,
 *   once: false
 * }}>
 *   <App />
 * </ScrollRevealProvider>
 * ```
 */
declare const ScrollRevealProvider: React.FC<ScrollRevealProviderProps>;
/**
 * Hook to access global ScrollReveal configuration
 *
 * @example
 * ```tsx
 * const config = useScrollRevealContext();
 * ```
 */
declare function useScrollRevealContext(): ScrollRevealConfig | null;
/**
 * Hook to check if animations should be disabled
 *
 * @example
 * ```tsx
 * const isDisabled = useAnimationDisabled();
 * ```
 */
declare function useAnimationDisabled(): boolean;

declare const animationPresets: Record<AnimationType, AnimationConfig>;
/**
 * Create a custom animation configuration
 *
 * @example
 * ```tsx
 * const customFade = createAnimation({
 *   initial: { opacity: 0, scale: 0.5 },
 *   animate: { opacity: 1, scale: 1 }
 * });
 * ```
 */
declare function createAnimation(config: AnimationConfig): CustomAnimation;
/**
 * Combine multiple animations
 *
 * @example
 * ```tsx
 * const combined = combineAnimations(
 *   animationPresets.fade,
 *   animationPresets.slideUp
 * );
 * ```
 */
declare function combineAnimations(...animations: AnimationConfig[]): AnimationConfig;

/**
 * Check if code is running on server-side
 */
declare function isSSR(): boolean;
/**
 * Safe window access for SSR environments
 */
declare function safeWindow<T>(callback: (window: Window) => T, fallback: T): T;
/**
 * Request animation frame with SSR safety
 */
declare function safeRequestAnimationFrame(callback: FrameRequestCallback): number | null;

interface ObserverOptions {
    threshold?: number | number[];
    rootMargin?: string;
    root?: Element | null;
    callback: IntersectionObserverCallback;
}
interface ObserverManager {
    observer: IntersectionObserver;
    observe: (element: Element) => void;
    unobserve: (element: Element) => void;
    disconnect: () => void;
}
/**
 * Create or reuse an IntersectionObserver instance
 */
declare function createObserver(options: ObserverOptions): ObserverManager;
/**
 * Batch observer operations for performance
 */
declare class BatchObserver {
    private queue;
    private observer;
    private rafId;
    constructor(options: ObserverOptions);
    observe(element: Element): void;
    unobserve(element: Element): void;
    disconnect(): void;
    private scheduleFlush;
    private flush;
}

declare const VERSION = "1.0.0";

export { type AnimationConfig, type AnimationEngine, type AnimationType, BatchObserver, type CustomAnimation, type ObserverManager, type ObserverOptions, ScrollReveal, type ScrollRevealConfig, type ScrollRevealProps, ScrollRevealProvider, type ScrollRevealProviderProps, type UseScrollRevealOptions, type UseScrollRevealReturn, VERSION, animationPresets, combineAnimations, createAnimation, createObserver, isSSR, safeRequestAnimationFrame, safeWindow, useAnimationDisabled, useScrollReveal, useScrollRevealContext, useScrollRevealControls };
