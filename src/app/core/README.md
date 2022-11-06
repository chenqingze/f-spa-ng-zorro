# Core Module

**The Core Module is where we want to put our shared singleton services.** So the services that we
want only one
instance of while having them shared among multiple modules should live here.

The Angular injector creates a new instance of a service for each lazily loaded module it is
provided.

> We want to keep our singleton services in the core module, guaranteeing only one instance is ever
> created. We do not
> want to spread them out in our feature modules.

Another piece of our application that should live in the Core Modules is app-level components. A
good example of an
app-level component would be the navigation bar. Only the app needs to know about our navigation
component.

We do not want to put, are components used throughout the application inside of the Core Module. We
have the Shared
Module for that and we will look at that now.
