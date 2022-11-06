# Styles Directory

The ~/src/styles directory is used to store scss style sheets for the application. It can contain
themes, Bootstrap,
Angular Material, and any other styles.

~/src/styles.scss is installed in the default Angular skeleton. It should contain @import statments
for all your global
application scss files. For instance it can import theme files stored in the ~/src/styles directory.

# Themes

The ~/src/styles/themes directory should contain the application-wide themes. This application
includes two theme-files,
black-theme.scss and light-theme.scss.

The themes are included in the styles.scss file along with the mat-core mixin, which adds the base
styles to material
components.
