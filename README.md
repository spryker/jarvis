# Spryker Jarvis - Migration Tool
Spryker Jarvis helps projects to keep up on Spryker updates, migrate to the latest versions and integrate new features.

:warning: :rotating_light: Beta version :rotating_light: :warning:

## Installation & Usage

1. Fork/Clone/Download this repo
2. Install nodejs & npm in case you do not have them already installed on your machine 
3. Open a terminal inside the folder and run `npm install` and then `node jarvis.js <path to your spryker project folder>`. Follow the terminal instructions.
4. Open `http://localhost:7777` inside your browser and enjoy your migration analysis

If you want to reset the local configuration, run `npm run jarvis-reset`

### Different views

Spryker Jarvis comes with 3 views:

* `node jarvis.js <path to your spryker project folder>` allows you to migrate your project from Product Release to Product Release
* `node jarvis.js <path to your spryker project folder> --no-features` allows you to see for each module how outdated you are
* `node jarvis.js <path to your spryker project folder> --missing-features` allows you to migrate your project to the Spryker feature repository	

## Disclaimer

### English

Please note that the following data will be processed by Spryker Sytsems GmbH when this software is installed:
	
`composer.json` file

* name -> The name of the package
* description -> A short description of the package
* license -> The license of the package
* require -> Lists packages required by this package
* require-dev -> Lists packages required for developing this package, or running tests, etc
* autoload -> Autoload mapping for a PHP autoloader
* autoload-dev -> Same as "autoload", but only considered in development mode
* minimum-stability -> This defines the default behavior for filtering packages by stability
* prefer-stable -> When this is enabled, Composer will prefer more stable packages over unstable ones when finding compatible stable packages is possible
* config -> A set of configuration options. It is only used for projects
* repositories -> Custom package repositories to use
* scripts -> Composer allows you to hook into various parts of the installation process through the use of scripts
* extra -> Arbitrary extra data for consumption by `scripts`

`composer.lock` file is a snapshot of your current Spryker project installed based on your `composer.json`.

If you do not agree with this, this software cannot be used.

### German

Bitte beachten Sie, dass mit Installation dieser Software folgende Daten von der Spryker Sytsems GmbH verarbeitet werden:

`composer.json` Datei

* name -> The name of the package
* description -> A short description of the package
* license -> The license of the package
* require -> Lists packages required by this package
* require-dev -> Lists packages required for developing this package, or running tests, etc
* autoload -> Autoload mapping for a PHP autoloader
* autoload-dev -> Same as "autoload", but only considered in development mode
* minimum-stability -> This defines the default behavior for filtering packages by stability
* prefer-stable -> When this is enabled, Composer will prefer more stable packages over unstable ones when finding compatible stable packages is possible
* config -> A set of configuration options. It is only used for projects
* repositories -> Custom package repositories to use
* scripts -> Composer allows you to hook into various parts of the installation process through the use of scripts
* extra -> Arbitrary extra data for consumption by `scripts`

Die Datei `composer.lock` ist eine Momentaufnahme Ihres aktuellen Spryker-Projekts, das auf der Grundlage Ihrer Datei `composer.json` installiert wurde.

Sollten sie damit nicht einverstanden sein, kann eine Nutzung dieser Software nicht erfolgen. 
