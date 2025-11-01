// Durações de animação
export const duration = {
  fast: '150ms',
  normal: '250ms',
  slow: '350ms',
  slower: '500ms',
} as const;

// Easing functions
export const easing = {
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
} as const;

// Transições prontas
export const transitions = {
  default: `all ${duration.normal} ${easing.easeInOut}`,
  fast: `all ${duration.fast} ${easing.easeOut}`,
  slow: `all ${duration.slow} ${easing.easeInOut}`,
  colors: `background-color ${duration.normal} ${easing.easeInOut}, color ${duration.normal} ${easing.easeInOut}, border-color ${duration.normal} ${easing.easeInOut}`,
  transform: `transform ${duration.normal} ${easing.easeOut}`,
} as const;

// Keyframes para styled-components
export const keyframes = {
  // Modal fadeIn (overlay)
  fadeIn: `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  
  // Modal slideUp (desktop)
  slideUp: `
    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
  
  // Modal slideUpMobile (mobile - full screen)
  slideUpMobile: `
    @keyframes slideUpMobile {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
  `,
  
  // Toast slideInRight (desktop)
  slideInRight: `
    @keyframes slideInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  `,
  
  // Toast slideInUp (mobile - bottom)
  slideInUp: `
    @keyframes slideInUp {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
} as const;

export type Duration = keyof typeof duration;
export type Easing = keyof typeof easing;
export type Keyframe = keyof typeof keyframes;
