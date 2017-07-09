# Info
Based on ng-seed/universal, modified to suite my need better.

# Changes
 * I18N stripped out.
 * Supports .sass files with indented syntax.
 * Switches between proper and legacy version of initialNavigation to avoid page flickering on Universal startup as the SPA takes over.
 * Inlines base css files during SSR. Does not inline openfonts and similar as that is of dubious value.
 * Supports tsconfig path aliases for better imports (no ../../../ spam).

