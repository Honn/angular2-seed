# Info
Based on ng-seed/universal, modified to suite my need better.

# Changes
 * I18N stripped out.
 * Supports .sass files with indented syntax.
 * Switches between proper and legacy version of initialNavigation to avoid page flickering on Universal startup as the SPA takes over.
 * Inlines base css files during SSR. Does not inline openfonts and similar as that is of dubious value.
 * Supports tsconfig path aliases for better imports (no ../../../ spam).
 * Added Angular Playground and commands to run it with HMR

# Playground
Create a .sandbox.ts file to add a component to the playground. See the playgroundDemo component.
To generate the playground:
 * npm run playground (this does currently not exit properly, so just close it when done)
 * npm run build:spa-dev
 * npm run serve:spa-playground
