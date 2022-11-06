# Shared Module

The Shared Module is where we want everything to live that is shared throughout the application. **
Components,
directives, guards, & pipes can all live in the Shared Module.**

> A loading spinner is something commonly found in the shared module. This is something you will
> want to be shared
> throughout your application.

It is also common to import and export Angular built modules inside your Shared Module if you need
to access them in
multiple locations. Because Shared is imported into many of your Feature Modules, it's common to
import/export Common
Module or Angular Material modules. Import/Export the modules once in Shared Module and now anyone
that imports Shared
will have access to them.
