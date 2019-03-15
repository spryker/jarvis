const oldDemoShopLock = {
    "_readme": [
        "This file locks the dependencies of your project to a known state",
        "Read more about it at https://getcomposer.org/doc/01-basic-usage.md#composer-lock-the-lock-file",
        "This file is @generated automatically"
    ],
    "content-hash": "2e3dc375958f48f8226e0cff8e827735",
    "packages": [{
            "name": "aws/aws-sdk-php",
            "version": "3.87.2",
            "source": {
                "type": "git",
                "url": "https://github.com/aws/aws-sdk-php.git",
                "reference": "7c00779a343c9b813628bf6a27b94945272ced93"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/aws/aws-sdk-php/zipball/7c00779a343c9b813628bf6a27b94945272ced93",
                "reference": "7c00779a343c9b813628bf6a27b94945272ced93",
                "shasum": ""
            },
            "require": {
                "ext-json": "*",
                "ext-pcre": "*",
                "ext-simplexml": "*",
                "ext-spl": "*",
                "guzzlehttp/guzzle": "^5.3.3|^6.2.1",
                "guzzlehttp/promises": "~1.0",
                "guzzlehttp/psr7": "^1.4.1",
                "mtdowling/jmespath.php": "~2.2",
                "php": ">=5.5"
            },
            "require-dev": {
                "andrewsville/php-token-reflection": "^1.4",
                "aws/aws-php-sns-message-validator": "~1.0",
                "behat/behat": "~3.0",
                "doctrine/cache": "~1.4",
                "ext-dom": "*",
                "ext-openssl": "*",
                "ext-pcntl": "*",
                "ext-sockets": "*",
                "nette/neon": "^2.3",
                "phpunit/phpunit": "^4.8.35|^5.4.3",
                "psr/cache": "^1.0"
            },
            "suggest": {
                "aws/aws-php-sns-message-validator": "To validate incoming SNS notifications",
                "doctrine/cache": "To use the DoctrineCacheAdapter",
                "ext-curl": "To send requests using cURL",
                "ext-openssl": "Allows working with CloudFront private distributions and verifying received SNS messages",
                "ext-sockets": "To use client-side monitoring"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Aws\\": "src/"
                },
                "files": [
                    "src/functions.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "Apache-2.0"
            ],
            "authors": [{
                "name": "Amazon Web Services",
                "homepage": "http://aws.amazon.com"
            }],
            "description": "AWS SDK for PHP - Use Amazon Web Services in your PHP project",
            "homepage": "http://aws.amazon.com/sdkforphp",
            "keywords": [
                "amazon",
                "aws",
                "cloud",
                "dynamodb",
                "ec2",
                "glacier",
                "s3",
                "sdk"
            ],
            "time": "2019-01-25T22:29:49+00:00"
        },
        {
            "name": "braintree/braintree_php",
            "version": "3.15.0",
            "source": {
                "type": "git",
                "url": "https://github.com/braintree/braintree_php.git",
                "reference": "1026b6cca5f2dd5dfdd5447843b920cc74d2b8ca"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/braintree/braintree_php/zipball/1026b6cca5f2dd5dfdd5447843b920cc74d2b8ca",
                "reference": "1026b6cca5f2dd5dfdd5447843b920cc74d2b8ca",
                "shasum": ""
            },
            "require": {
                "ext-curl": "*",
                "ext-dom": "*",
                "ext-hash": "*",
                "ext-openssl": "*",
                "ext-xmlwriter": "*",
                "php": ">=5.4.0"
            },
            "require-dev": {
                "phpunit/phpunit": "3.7.*"
            },
            "type": "library",
            "autoload": {
                "psr-0": {
                    "Braintree": "lib/"
                },
                "psr-4": {
                    "Braintree\\": "lib/Braintree"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Braintree",
                "homepage": "http://www.braintreepayments.com"
            }],
            "description": "Braintree PHP Client Library",
            "time": "2016-07-18T21:55:50+00:00"
        },
        {
            "name": "container-interop/container-interop",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/container-interop/container-interop.git",
                "reference": "79cbf1341c22ec75643d841642dd5d6acd83bdb8"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/container-interop/container-interop/zipball/79cbf1341c22ec75643d841642dd5d6acd83bdb8",
                "reference": "79cbf1341c22ec75643d841642dd5d6acd83bdb8",
                "shasum": ""
            },
            "require": {
                "psr/container": "^1.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Interop\\Container\\": "src/Interop/Container/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "Promoting the interoperability of container objects (DIC, SL, etc.)",
            "homepage": "https://github.com/container-interop/container-interop",
            "time": "2017-02-14T19:40:03+00:00"
        },
        {
            "name": "defuse/php-encryption",
            "version": "v2.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/defuse/php-encryption.git",
                "reference": "0f407c43b953d571421e0020ba92082ed5fb7620"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/defuse/php-encryption/zipball/0f407c43b953d571421e0020ba92082ed5fb7620",
                "reference": "0f407c43b953d571421e0020ba92082ed5fb7620",
                "shasum": ""
            },
            "require": {
                "ext-openssl": "*",
                "paragonie/random_compat": ">= 2",
                "php": ">=5.4.0"
            },
            "require-dev": {
                "nikic/php-parser": "^2.0|^3.0|^4.0",
                "phpunit/phpunit": "^4|^5"
            },
            "bin": [
                "bin/generate-defuse-key"
            ],
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Defuse\\Crypto\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Taylor Hornby",
                    "email": "taylor@defuse.ca",
                    "homepage": "https://defuse.ca/"
                },
                {
                    "name": "Scott Arciszewski",
                    "email": "info@paragonie.com",
                    "homepage": "https://paragonie.com"
                }
            ],
            "description": "Secure PHP Encryption Library",
            "keywords": [
                "aes",
                "authenticated encryption",
                "cipher",
                "crypto",
                "cryptography",
                "encrypt",
                "encryption",
                "openssl",
                "security",
                "symmetric key cryptography"
            ],
            "time": "2018-07-24T23:27:56+00:00"
        },
        {
            "name": "doctrine/lexer",
            "version": "v1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/doctrine/lexer.git",
                "reference": "83893c552fd2045dd78aef794c31e694c37c0b8c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/doctrine/lexer/zipball/83893c552fd2045dd78aef794c31e694c37c0b8c",
                "reference": "83893c552fd2045dd78aef794c31e694c37c0b8c",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.2"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Doctrine\\Common\\Lexer\\": "lib/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Roman Borschel",
                    "email": "roman@code-factory.org"
                },
                {
                    "name": "Guilherme Blanco",
                    "email": "guilhermeblanco@gmail.com"
                },
                {
                    "name": "Johannes Schmitt",
                    "email": "schmittjoh@gmail.com"
                }
            ],
            "description": "Base library for a lexer that can be used in Top-Down, Recursive Descent Parsers.",
            "homepage": "http://www.doctrine-project.org",
            "keywords": [
                "lexer",
                "parser"
            ],
            "time": "2014-09-09T13:34:57+00:00"
        },
        {
            "name": "egulias/email-validator",
            "version": "2.1.7",
            "source": {
                "type": "git",
                "url": "https://github.com/egulias/EmailValidator.git",
                "reference": "709f21f92707308cdf8f9bcfa1af4cb26586521e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/egulias/EmailValidator/zipball/709f21f92707308cdf8f9bcfa1af4cb26586521e",
                "reference": "709f21f92707308cdf8f9bcfa1af4cb26586521e",
                "shasum": ""
            },
            "require": {
                "doctrine/lexer": "^1.0.1",
                "php": ">= 5.5"
            },
            "require-dev": {
                "dominicsayers/isemail": "dev-master",
                "phpunit/phpunit": "^4.8.35||^5.7||^6.0",
                "satooshi/php-coveralls": "^1.0.1"
            },
            "suggest": {
                "ext-intl": "PHP Internationalization Libraries are required to use the SpoofChecking validation"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Egulias\\EmailValidator\\": "EmailValidator"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Eduardo Gulias Davis"
            }],
            "description": "A library for validating emails against several RFCs",
            "homepage": "https://github.com/egulias/EmailValidator",
            "keywords": [
                "email",
                "emailvalidation",
                "emailvalidator",
                "validation",
                "validator"
            ],
            "time": "2018-12-04T22:38:24+00:00"
        },
        {
            "name": "elasticsearch/elasticsearch",
            "version": "v5.3.2",
            "source": {
                "type": "git",
                "url": "https://github.com/elastic/elasticsearch-php.git",
                "reference": "4b29a4121e790bbfe690d5ee77da348b62d48eb8"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/elastic/elasticsearch-php/zipball/4b29a4121e790bbfe690d5ee77da348b62d48eb8",
                "reference": "4b29a4121e790bbfe690d5ee77da348b62d48eb8",
                "shasum": ""
            },
            "require": {
                "guzzlehttp/ringphp": "~1.0",
                "php": "^5.6|^7.0",
                "psr/log": "~1.0"
            },
            "require-dev": {
                "cpliakas/git-wrapper": "~1.0",
                "doctrine/inflector": "^1.1",
                "mockery/mockery": "0.9.4",
                "phpunit/phpunit": "^4.7|^5.4",
                "sami/sami": "~3.2",
                "symfony/finder": "^2.8",
                "symfony/yaml": "^2.8"
            },
            "suggest": {
                "ext-curl": "*",
                "monolog/monolog": "Allows for client-level logging and tracing"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Elasticsearch\\": "src/Elasticsearch/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "Apache-2.0"
            ],
            "authors": [{
                "name": "Zachary Tong"
            }],
            "description": "PHP Client for Elasticsearch",
            "keywords": [
                "client",
                "elasticsearch",
                "search"
            ],
            "time": "2017-11-08T17:04:47+00:00"
        },
        {
            "name": "everon/collection",
            "version": "v1.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/oliwierptak/everon-collection.git",
                "reference": "aea807d7bdf592b85e75658d03519267ac2a95cf"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/oliwierptak/everon-collection/zipball/aea807d7bdf592b85e75658d03519267ac2a95cf",
                "reference": "aea807d7bdf592b85e75658d03519267ac2a95cf",
                "shasum": ""
            },
            "require": {
                "everon/utils": "~1.0",
                "php": ">=5.6"
            },
            "require-dev": {
                "mockery/mockery": "dev-master",
                "phpunit/phpunit": "*"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Everon\\Component\\Collection\\": "src/",
                    "Everon\\Component\\Collection\\Tests\\Unit\\": "tests/unit/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Oliwier Ptak",
                "email": "everonphp@gmail.com"
            }],
            "description": "Everon Collection Component",
            "time": "2016-03-13T23:30:28+00:00"
        },
        {
            "name": "everon/criteria-builder",
            "version": "v1.1.6",
            "source": {
                "type": "git",
                "url": "https://github.com/oliwierptak/everon-criteria-builder.git",
                "reference": "5c8b0ba0dfb0bacb4e2a8f236d9201b6bdd26238"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/oliwierptak/everon-criteria-builder/zipball/5c8b0ba0dfb0bacb4e2a8f236d9201b6bdd26238",
                "reference": "5c8b0ba0dfb0bacb4e2a8f236d9201b6bdd26238",
                "shasum": ""
            },
            "require": {
                "everon/collection": "^1.0.0",
                "everon/factory": "^1.1.0",
                "everon/utils": "^1.0.0",
                "php": ">=5.6"
            },
            "require-dev": {
                "mockery/mockery": "dev-master",
                "phpunit/phpunit": "*"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Everon\\Component\\CriteriaBuilder\\": "src/",
                    "Everon\\Component\\CriteriaBuilder\\Tests\\Unit\\": "tests/unit/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Oliwier Ptak",
                "email": "everonphp@gmail.com"
            }],
            "description": "Everon Criteria Builder Component",
            "time": "2018-10-11T12:41:03+00:00"
        },
        {
            "name": "everon/factory",
            "version": "v1.1.4",
            "source": {
                "type": "git",
                "url": "https://github.com/oliwierptak/everon-factory.git",
                "reference": "443313f5b3a7ecfcdaee849288c1ae299cf2a99b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/oliwierptak/everon-factory/zipball/443313f5b3a7ecfcdaee849288c1ae299cf2a99b",
                "reference": "443313f5b3a7ecfcdaee849288c1ae299cf2a99b",
                "shasum": ""
            },
            "require": {
                "everon/collection": "^1.0.0",
                "everon/utils": "^1.0.0",
                "php": ">=5.6"
            },
            "require-dev": {
                "mockery/mockery": "dev-master",
                "phpunit/phpunit": "*"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Everon\\Component\\Factory\\": "src/",
                    "Everon\\Component\\Factory\\Tests\\Unit\\": "tests/unit/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Oliwier Ptak",
                "email": "everonphp@gmail.com"
            }],
            "description": "Everon Factory Component",
            "time": "2016-03-20T14:52:02+00:00"
        },
        {
            "name": "everon/utils",
            "version": "v1.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/oliwierptak/everon-utils.git",
                "reference": "fbdc50b6cc069229f778b720ae304e70c9e5dab5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/oliwierptak/everon-utils/zipball/fbdc50b6cc069229f778b720ae304e70c9e5dab5",
                "reference": "fbdc50b6cc069229f778b720ae304e70c9e5dab5",
                "shasum": ""
            },
            "require": {
                "php": ">=5.6"
            },
            "require-dev": {
                "mockery/mockery": "dev-master",
                "phpunit/phpunit": "*"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Everon\\Component\\Utils\\": "src/",
                    "Everon\\Component\\Utils\\Tests\\Unit\\": "tests/unit/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Oliwier Ptak",
                "email": "everonphp@gmail.com"
            }],
            "description": "Everon Utils Component",
            "time": "2016-03-20T14:52:54+00:00"
        },
        {
            "name": "filp/whoops",
            "version": "2.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/filp/whoops.git",
                "reference": "bc0fd11bc455cc20ee4b5edabc63ebbf859324c7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/filp/whoops/zipball/bc0fd11bc455cc20ee4b5edabc63ebbf859324c7",
                "reference": "bc0fd11bc455cc20ee4b5edabc63ebbf859324c7",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9 || ^7.0",
                "psr/log": "^1.0.1"
            },
            "require-dev": {
                "mockery/mockery": "^0.9 || ^1.0",
                "phpunit/phpunit": "^4.8.35 || ^5.7",
                "symfony/var-dumper": "^2.6 || ^3.0 || ^4.0"
            },
            "suggest": {
                "symfony/var-dumper": "Pretty print complex values better with var-dumper available",
                "whoops/soap": "Formats errors as SOAP responses"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.2-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Whoops\\": "src/Whoops/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Filipe Dobreira",
                "homepage": "https://github.com/filp",
                "role": "Developer"
            }],
            "description": "php error handling for cool kids",
            "homepage": "https://filp.github.io/whoops/",
            "keywords": [
                "error",
                "exception",
                "handling",
                "library",
                "throwable",
                "whoops"
            ],
            "time": "2018-10-23T09:00:00+00:00"
        },
        {
            "name": "fzaninotto/faker",
            "version": "v1.8.0",
            "source": {
                "type": "git",
                "url": "https://github.com/fzaninotto/Faker.git",
                "reference": "f72816b43e74063c8b10357394b6bba8cb1c10de"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/fzaninotto/Faker/zipball/f72816b43e74063c8b10357394b6bba8cb1c10de",
                "reference": "f72816b43e74063c8b10357394b6bba8cb1c10de",
                "shasum": ""
            },
            "require": {
                "php": "^5.3.3 || ^7.0"
            },
            "require-dev": {
                "ext-intl": "*",
                "phpunit/phpunit": "^4.8.35 || ^5.7",
                "squizlabs/php_codesniffer": "^1.5"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.8-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Faker\\": "src/Faker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "François Zaninotto"
            }],
            "description": "Faker is a PHP library that generates fake data for you.",
            "keywords": [
                "data",
                "faker",
                "fixtures"
            ],
            "time": "2018-07-12T10:23:15+00:00"
        },
        {
            "name": "guzzlehttp/guzzle",
            "version": "6.3.3",
            "source": {
                "type": "git",
                "url": "https://github.com/guzzle/guzzle.git",
                "reference": "407b0cb880ace85c9b63c5f9551db498cb2d50ba"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/guzzle/guzzle/zipball/407b0cb880ace85c9b63c5f9551db498cb2d50ba",
                "reference": "407b0cb880ace85c9b63c5f9551db498cb2d50ba",
                "shasum": ""
            },
            "require": {
                "guzzlehttp/promises": "^1.0",
                "guzzlehttp/psr7": "^1.4",
                "php": ">=5.5"
            },
            "require-dev": {
                "ext-curl": "*",
                "phpunit/phpunit": "^4.8.35 || ^5.7 || ^6.4 || ^7.0",
                "psr/log": "^1.0"
            },
            "suggest": {
                "psr/log": "Required for using the Log middleware"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "6.3-dev"
                }
            },
            "autoload": {
                "files": [
                    "src/functions_include.php"
                ],
                "psr-4": {
                    "GuzzleHttp\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Michael Dowling",
                "email": "mtdowling@gmail.com",
                "homepage": "https://github.com/mtdowling"
            }],
            "description": "Guzzle is a PHP HTTP client library",
            "homepage": "http://guzzlephp.org/",
            "keywords": [
                "client",
                "curl",
                "framework",
                "http",
                "http client",
                "rest",
                "web service"
            ],
            "time": "2018-04-22T15:46:56+00:00"
        },
        {
            "name": "guzzlehttp/promises",
            "version": "v1.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/guzzle/promises.git",
                "reference": "a59da6cf61d80060647ff4d3eb2c03a2bc694646"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/guzzle/promises/zipball/a59da6cf61d80060647ff4d3eb2c03a2bc694646",
                "reference": "a59da6cf61d80060647ff4d3eb2c03a2bc694646",
                "shasum": ""
            },
            "require": {
                "php": ">=5.5.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^4.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "GuzzleHttp\\Promise\\": "src/"
                },
                "files": [
                    "src/functions_include.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Michael Dowling",
                "email": "mtdowling@gmail.com",
                "homepage": "https://github.com/mtdowling"
            }],
            "description": "Guzzle promises library",
            "keywords": [
                "promise"
            ],
            "time": "2016-12-20T10:07:11+00:00"
        },
        {
            "name": "guzzlehttp/psr7",
            "version": "1.5.2",
            "source": {
                "type": "git",
                "url": "https://github.com/guzzle/psr7.git",
                "reference": "9f83dded91781a01c63574e387eaa769be769115"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/guzzle/psr7/zipball/9f83dded91781a01c63574e387eaa769be769115",
                "reference": "9f83dded91781a01c63574e387eaa769be769115",
                "shasum": ""
            },
            "require": {
                "php": ">=5.4.0",
                "psr/http-message": "~1.0",
                "ralouphie/getallheaders": "^2.0.5"
            },
            "provide": {
                "psr/http-message-implementation": "1.0"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.8.36 || ^5.7.27 || ^6.5.8"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.5-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "GuzzleHttp\\Psr7\\": "src/"
                },
                "files": [
                    "src/functions_include.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Michael Dowling",
                    "email": "mtdowling@gmail.com",
                    "homepage": "https://github.com/mtdowling"
                },
                {
                    "name": "Tobias Schultze",
                    "homepage": "https://github.com/Tobion"
                }
            ],
            "description": "PSR-7 message implementation that also provides common utility methods",
            "keywords": [
                "http",
                "message",
                "psr-7",
                "request",
                "response",
                "stream",
                "uri",
                "url"
            ],
            "time": "2018-12-04T20:46:45+00:00"
        },
        {
            "name": "guzzlehttp/ringphp",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/guzzle/RingPHP.git",
                "reference": "5e2a174052995663dd68e6b5ad838afd47dd615b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/guzzle/RingPHP/zipball/5e2a174052995663dd68e6b5ad838afd47dd615b",
                "reference": "5e2a174052995663dd68e6b5ad838afd47dd615b",
                "shasum": ""
            },
            "require": {
                "guzzlehttp/streams": "~3.0",
                "php": ">=5.4.0",
                "react/promise": "~2.0"
            },
            "require-dev": {
                "ext-curl": "*",
                "phpunit/phpunit": "~4.0"
            },
            "suggest": {
                "ext-curl": "Guzzle will use specific adapters if cURL is present"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.1-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "GuzzleHttp\\Ring\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Michael Dowling",
                "email": "mtdowling@gmail.com",
                "homepage": "https://github.com/mtdowling"
            }],
            "description": "Provides a simple API and specification that abstracts away the details of HTTP into a single PHP function.",
            "time": "2018-07-31T13:22:33+00:00"
        },
        {
            "name": "guzzlehttp/streams",
            "version": "3.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/guzzle/streams.git",
                "reference": "47aaa48e27dae43d39fc1cea0ccf0d84ac1a2ba5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/guzzle/streams/zipball/47aaa48e27dae43d39fc1cea0ccf0d84ac1a2ba5",
                "reference": "47aaa48e27dae43d39fc1cea0ccf0d84ac1a2ba5",
                "shasum": ""
            },
            "require": {
                "php": ">=5.4.0"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "GuzzleHttp\\Stream\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Michael Dowling",
                "email": "mtdowling@gmail.com",
                "homepage": "https://github.com/mtdowling"
            }],
            "description": "Provides a simple abstraction over streams of data",
            "homepage": "http://guzzlephp.org/",
            "keywords": [
                "Guzzle",
                "stream"
            ],
            "time": "2014-10-12T19:18:40+00:00"
        },
        {
            "name": "lcobucci/jwt",
            "version": "3.2.5",
            "source": {
                "type": "git",
                "url": "https://github.com/lcobucci/jwt.git",
                "reference": "82be04b4753f8b7693b62852b7eab30f97524f9b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/lcobucci/jwt/zipball/82be04b4753f8b7693b62852b7eab30f97524f9b",
                "reference": "82be04b4753f8b7693b62852b7eab30f97524f9b",
                "shasum": ""
            },
            "require": {
                "ext-openssl": "*",
                "php": ">=5.5"
            },
            "require-dev": {
                "mdanter/ecc": "~0.3.1",
                "mikey179/vfsstream": "~1.5",
                "phpmd/phpmd": "~2.2",
                "phpunit/php-invoker": "~1.1",
                "phpunit/phpunit": "~4.5",
                "squizlabs/php_codesniffer": "~2.3"
            },
            "suggest": {
                "mdanter/ecc": "Required to use Elliptic Curves based algorithms."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.1-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Lcobucci\\JWT\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Luís Otávio Cobucci Oblonczyk",
                "email": "lcobucci@gmail.com",
                "role": "Developer"
            }],
            "description": "A simple library to work with JSON Web Token and JSON Web Signature",
            "keywords": [
                "JWS",
                "jwt"
            ],
            "time": "2018-11-11T12:22:26+00:00"
        },
        {
            "name": "league/csv",
            "version": "9.1.4",
            "source": {
                "type": "git",
                "url": "https://github.com/thephpleague/csv.git",
                "reference": "9c8ad06fb5d747c149875beb6133566c00eaa481"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/thephpleague/csv/zipball/9c8ad06fb5d747c149875beb6133566c00eaa481",
                "reference": "9c8ad06fb5d747c149875beb6133566c00eaa481",
                "shasum": ""
            },
            "require": {
                "ext-mbstring": "*",
                "php": ">=7.0.10"
            },
            "require-dev": {
                "ext-curl": "*",
                "friendsofphp/php-cs-fixer": "^2.0",
                "phpstan/phpstan": "^0.9.2",
                "phpstan/phpstan-phpunit": "^0.9.4",
                "phpstan/phpstan-strict-rules": "^0.9.0",
                "phpunit/phpunit": "^6.0"
            },
            "suggest": {
                "ext-iconv": "Needed to ease transcoding CSV using iconv stream filters"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "9.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "League\\Csv\\": "src"
                },
                "files": [
                    "src/functions_include.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Ignace Nyamagana Butera",
                "email": "nyamsprod@gmail.com",
                "homepage": "https://github.com/nyamsprod/",
                "role": "Developer"
            }],
            "description": "Csv data manipulation made easy in PHP",
            "homepage": "http://csv.thephpleague.com",
            "keywords": [
                "csv",
                "export",
                "filter",
                "import",
                "read",
                "write"
            ],
            "time": "2018-05-01T18:32:48+00:00"
        },
        {
            "name": "league/event",
            "version": "2.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/thephpleague/event.git",
                "reference": "d2cc124cf9a3fab2bb4ff963307f60361ce4d119"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/thephpleague/event/zipball/d2cc124cf9a3fab2bb4ff963307f60361ce4d119",
                "reference": "d2cc124cf9a3fab2bb4ff963307f60361ce4d119",
                "shasum": ""
            },
            "require": {
                "php": ">=5.4.0"
            },
            "require-dev": {
                "henrikbjorn/phpspec-code-coverage": "~1.0.1",
                "phpspec/phpspec": "^2.2"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.2-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "League\\Event\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Frank de Jonge",
                "email": "info@frenky.net"
            }],
            "description": "Event package",
            "keywords": [
                "emitter",
                "event",
                "listener"
            ],
            "time": "2018-11-26T11:52:41+00:00"
        },
        {
            "name": "league/flysystem",
            "version": "1.0.49",
            "source": {
                "type": "git",
                "url": "https://github.com/thephpleague/flysystem.git",
                "reference": "a63cc83d8a931b271be45148fa39ba7156782ffd"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/thephpleague/flysystem/zipball/a63cc83d8a931b271be45148fa39ba7156782ffd",
                "reference": "a63cc83d8a931b271be45148fa39ba7156782ffd",
                "shasum": ""
            },
            "require": {
                "ext-fileinfo": "*",
                "php": ">=5.5.9"
            },
            "conflict": {
                "league/flysystem-sftp": "<1.0.6"
            },
            "require-dev": {
                "phpspec/phpspec": "^3.4",
                "phpunit/phpunit": "^5.7.10"
            },
            "suggest": {
                "ext-fileinfo": "Required for MimeType",
                "ext-ftp": "Allows you to use FTP server storage",
                "ext-openssl": "Allows you to use FTPS server storage",
                "league/flysystem-aws-s3-v2": "Allows you to use S3 storage with AWS SDK v2",
                "league/flysystem-aws-s3-v3": "Allows you to use S3 storage with AWS SDK v3",
                "league/flysystem-azure": "Allows you to use Windows Azure Blob storage",
                "league/flysystem-cached-adapter": "Flysystem adapter decorator for metadata caching",
                "league/flysystem-eventable-filesystem": "Allows you to use EventableFilesystem",
                "league/flysystem-rackspace": "Allows you to use Rackspace Cloud Files",
                "league/flysystem-sftp": "Allows you to use SFTP server storage via phpseclib",
                "league/flysystem-webdav": "Allows you to use WebDAV storage",
                "league/flysystem-ziparchive": "Allows you to use ZipArchive adapter",
                "spatie/flysystem-dropbox": "Allows you to use Dropbox storage",
                "srmklive/flysystem-dropbox-v2": "Allows you to use Dropbox storage for PHP 5 applications"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.1-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "League\\Flysystem\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Frank de Jonge",
                "email": "info@frenky.net"
            }],
            "description": "Filesystem abstraction: Many filesystems, one API.",
            "keywords": [
                "Cloud Files",
                "WebDAV",
                "abstraction",
                "aws",
                "cloud",
                "copy.com",
                "dropbox",
                "file systems",
                "files",
                "filesystem",
                "filesystems",
                "ftp",
                "rackspace",
                "remote",
                "s3",
                "sftp",
                "storage"
            ],
            "time": "2018-11-23T23:41:29+00:00"
        },
        {
            "name": "league/flysystem-aws-s3-v3",
            "version": "1.0.21",
            "source": {
                "type": "git",
                "url": "https://github.com/thephpleague/flysystem-aws-s3-v3.git",
                "reference": "43523fec10a831ea48bedb3277e3f3fa218f4e49"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/thephpleague/flysystem-aws-s3-v3/zipball/43523fec10a831ea48bedb3277e3f3fa218f4e49",
                "reference": "43523fec10a831ea48bedb3277e3f3fa218f4e49",
                "shasum": ""
            },
            "require": {
                "aws/aws-sdk-php": "^3.0.0",
                "league/flysystem": "^1.0.40",
                "php": ">=5.5.0"
            },
            "require-dev": {
                "henrikbjorn/phpspec-code-coverage": "~1.0.1",
                "phpspec/phpspec": "^2.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "League\\Flysystem\\AwsS3v3\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Frank de Jonge",
                "email": "info@frenky.net"
            }],
            "description": "Flysystem adapter for the AWS S3 SDK v3.x",
            "time": "2018-10-08T07:53:55+00:00"
        },
        {
            "name": "league/oauth2-server",
            "version": "7.3.2",
            "source": {
                "type": "git",
                "url": "https://github.com/thephpleague/oauth2-server.git",
                "reference": "b71f382cd76e3f6905dfc53ef8148b3eebe1fd41"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/thephpleague/oauth2-server/zipball/b71f382cd76e3f6905dfc53ef8148b3eebe1fd41",
                "reference": "b71f382cd76e3f6905dfc53ef8148b3eebe1fd41",
                "shasum": ""
            },
            "require": {
                "defuse/php-encryption": "^2.1",
                "ext-openssl": "*",
                "lcobucci/jwt": "^3.2.2",
                "league/event": "^2.1",
                "php": ">=7.0.0",
                "psr/http-message": "^1.0.1"
            },
            "replace": {
                "league/oauth2server": "*",
                "lncd/oauth2": "*"
            },
            "require-dev": {
                "phpstan/phpstan": "^0.9.2",
                "phpstan/phpstan-phpunit": "^0.9.4",
                "phpstan/phpstan-strict-rules": "^0.9.0",
                "phpunit/phpunit": "^6.3 || ^7.0",
                "roave/security-advisories": "dev-master",
                "zendframework/zend-diactoros": "^1.3.2"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "League\\OAuth2\\Server\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Alex Bilbie",
                    "email": "hello@alexbilbie.com",
                    "homepage": "http://www.alexbilbie.com",
                    "role": "Developer"
                },
                {
                    "name": "Andy Millington",
                    "email": "andrew@noexceptions.io",
                    "homepage": "https://www.noexceptions.io",
                    "role": "Developer"
                }
            ],
            "description": "A lightweight and powerful OAuth 2.0 authorization and resource server library with support for all the core specification grants. This library will allow you to secure your API with OAuth and allow your applications users to approve apps that want to access their data from your API.",
            "homepage": "https://oauth2.thephpleague.com/",
            "keywords": [
                "Authentication",
                "api",
                "auth",
                "authorisation",
                "authorization",
                "oauth",
                "oauth 2",
                "oauth 2.0",
                "oauth2",
                "protect",
                "resource",
                "secure",
                "server"
            ],
            "time": "2018-11-21T21:42:43+00:00"
        },
        {
            "name": "mandrill/mandrill",
            "version": "1.0.55",
            "source": {
                "type": "git",
                "url": "https://bitbucket.org/mailchimp/mandrill-api-php.git",
                "reference": "da3adc10042eafac2e53de141b358a52b8e53596"
            },
            "dist": {
                "type": "zip",
                "url": "https://bitbucket.org/mailchimp/mandrill-api-php/get/da3adc10042eafac2e53de141b358a52b8e53596.zip",
                "reference": "da3adc10042eafac2e53de141b358a52b8e53596",
                "shasum": ""
            },
            "require": {
                "php": ">=5.2.0"
            },
            "type": "library",
            "autoload": {
                "psr-0": {
                    "Mandrill": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "Apache-2.0"
            ],
            "authors": [{
                "name": "Mandrill Devs",
                "email": "community@mandrill.com",
                "homepage": "http://mandrill.com",
                "role": "Developer"
            }],
            "description": "API client library for the Mandrill email as a service platform",
            "homepage": "https://bitbucket.org/mailchimp/mandrill-api-php",
            "keywords": [
                "api",
                "email"
            ],
            "time": "2015-09-22T13:58:03+00:00"
        },
        {
            "name": "moneyphp/money",
            "version": "v3.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/moneyphp/money.git",
                "reference": "53ce6e4b9a2aac6e5194a0a633b7a556a6b04b07"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/moneyphp/money/zipball/53ce6e4b9a2aac6e5194a0a633b7a556a6b04b07",
                "reference": "53ce6e4b9a2aac6e5194a0a633b7a556a6b04b07",
                "shasum": ""
            },
            "require": {
                "php": ">=5.6"
            },
            "require-dev": {
                "cache/taggable-cache": "^0.4.0",
                "doctrine/instantiator": "^1.0.5",
                "ext-bcmath": "*",
                "ext-gmp": "*",
                "ext-intl": "*",
                "florianv/exchanger": "^1.0",
                "florianv/swap": "^3.0",
                "leanphp/phpspec-code-coverage": "^3.0 || ^4.0",
                "moneyphp/iso-currencies": "^3.0",
                "php-http/message": "^1.4",
                "php-http/mock-client": "^1.0.0",
                "phpspec/phpspec": "^3.0",
                "phpunit/phpunit": "^5.7 || ^6.4 || ^7.0",
                "psr/cache": "^1.0",
                "symfony/phpunit-bridge": "^4"
            },
            "suggest": {
                "ext-bcmath": "Calculate without integer limits",
                "ext-gmp": "Calculate without integer limits",
                "ext-intl": "Format Money objects with intl",
                "florianv/exchanger": "Exchange rates library for PHP",
                "florianv/swap": "Exchange rates library for PHP",
                "psr/cache-implementation": "Used for Currency caching"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Money\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Márk Sági-Kazár",
                    "email": "mark.sagikazar@gmail.com"
                },
                {
                    "name": "Mathias Verraes",
                    "email": "mathias@verraes.net",
                    "homepage": "http://verraes.net"
                },
                {
                    "name": "Frederik Bosch",
                    "email": "f.bosch@genkgo.nl"
                }
            ],
            "description": "PHP implementation of Fowler's Money pattern",
            "homepage": "http://moneyphp.org",
            "keywords": [
                "Value Object",
                "money",
                "vo"
            ],
            "time": "2018-12-05T12:17:01+00:00"
        },
        {
            "name": "monolog/monolog",
            "version": "1.24.0",
            "source": {
                "type": "git",
                "url": "https://github.com/Seldaek/monolog.git",
                "reference": "bfc9ebb28f97e7a24c45bdc3f0ff482e47bb0266"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Seldaek/monolog/zipball/bfc9ebb28f97e7a24c45bdc3f0ff482e47bb0266",
                "reference": "bfc9ebb28f97e7a24c45bdc3f0ff482e47bb0266",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.0",
                "psr/log": "~1.0"
            },
            "provide": {
                "psr/log-implementation": "1.0.0"
            },
            "require-dev": {
                "aws/aws-sdk-php": "^2.4.9 || ^3.0",
                "doctrine/couchdb": "~1.0@dev",
                "graylog2/gelf-php": "~1.0",
                "jakub-onderka/php-parallel-lint": "0.9",
                "php-amqplib/php-amqplib": "~2.4",
                "php-console/php-console": "^3.1.3",
                "phpunit/phpunit": "~4.5",
                "phpunit/phpunit-mock-objects": "2.3.0",
                "ruflin/elastica": ">=0.90 <3.0",
                "sentry/sentry": "^0.13",
                "swiftmailer/swiftmailer": "^5.3|^6.0"
            },
            "suggest": {
                "aws/aws-sdk-php": "Allow sending log messages to AWS services like DynamoDB",
                "doctrine/couchdb": "Allow sending log messages to a CouchDB server",
                "ext-amqp": "Allow sending log messages to an AMQP server (1.0+ required)",
                "ext-mongo": "Allow sending log messages to a MongoDB server",
                "graylog2/gelf-php": "Allow sending log messages to a GrayLog2 server",
                "mongodb/mongodb": "Allow sending log messages to a MongoDB server via PHP Driver",
                "php-amqplib/php-amqplib": "Allow sending log messages to an AMQP server using php-amqplib",
                "php-console/php-console": "Allow sending log messages to Google Chrome",
                "rollbar/rollbar": "Allow sending log messages to Rollbar",
                "ruflin/elastica": "Allow sending log messages to an Elastic Search server",
                "sentry/sentry": "Allow sending log messages to a Sentry server"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Monolog\\": "src/Monolog"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Jordi Boggiano",
                "email": "j.boggiano@seld.be",
                "homepage": "http://seld.be"
            }],
            "description": "Sends your logs to files, sockets, inboxes, databases and various web services",
            "homepage": "http://github.com/Seldaek/monolog",
            "keywords": [
                "log",
                "logging",
                "psr-3"
            ],
            "time": "2018-11-05T09:00:11+00:00"
        },
        {
            "name": "mtdowling/jmespath.php",
            "version": "2.4.0",
            "source": {
                "type": "git",
                "url": "https://github.com/jmespath/jmespath.php.git",
                "reference": "adcc9531682cf87dfda21e1fd5d0e7a41d292fac"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/jmespath/jmespath.php/zipball/adcc9531682cf87dfda21e1fd5d0e7a41d292fac",
                "reference": "adcc9531682cf87dfda21e1fd5d0e7a41d292fac",
                "shasum": ""
            },
            "require": {
                "php": ">=5.4.0"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.0"
            },
            "bin": [
                "bin/jp.php"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "JmesPath\\": "src/"
                },
                "files": [
                    "src/JmesPath.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Michael Dowling",
                "email": "mtdowling@gmail.com",
                "homepage": "https://github.com/mtdowling"
            }],
            "description": "Declaratively specify how to extract elements from a JSON document",
            "keywords": [
                "json",
                "jsonpath"
            ],
            "time": "2016-12-03T22:08:25+00:00"
        },
        {
            "name": "paragonie/random_compat",
            "version": "v9.99.99",
            "source": {
                "type": "git",
                "url": "https://github.com/paragonie/random_compat.git",
                "reference": "84b4dfb120c6f9b4ff7b3685f9b8f1aa365a0c95"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/paragonie/random_compat/zipball/84b4dfb120c6f9b4ff7b3685f9b8f1aa365a0c95",
                "reference": "84b4dfb120c6f9b4ff7b3685f9b8f1aa365a0c95",
                "shasum": ""
            },
            "require": {
                "php": "^7"
            },
            "require-dev": {
                "phpunit/phpunit": "4.*|5.*",
                "vimeo/psalm": "^1"
            },
            "suggest": {
                "ext-libsodium": "Provides a modern crypto API that can be used to generate random bytes."
            },
            "type": "library",
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Paragon Initiative Enterprises",
                "email": "security@paragonie.com",
                "homepage": "https://paragonie.com"
            }],
            "description": "PHP 5.x polyfill for random_bytes() and random_int() from PHP 7",
            "keywords": [
                "csprng",
                "polyfill",
                "pseudorandom",
                "random"
            ],
            "time": "2018-07-02T15:55:56+00:00"
        },
        {
            "name": "php-amqplib/php-amqplib",
            "version": "v2.8.1",
            "source": {
                "type": "git",
                "url": "https://github.com/php-amqplib/php-amqplib.git",
                "reference": "84449ffd3f5a7466bbee3946facb3746ff11f075"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-amqplib/php-amqplib/zipball/84449ffd3f5a7466bbee3946facb3746ff11f075",
                "reference": "84449ffd3f5a7466bbee3946facb3746ff11f075",
                "shasum": ""
            },
            "require": {
                "ext-bcmath": "*",
                "ext-sockets": "*",
                "php": ">=5.4.0"
            },
            "replace": {
                "videlalvaro/php-amqplib": "self.version"
            },
            "require-dev": {
                "phpdocumentor/phpdocumentor": "^2.9",
                "phpunit/phpunit": "^4.8",
                "scrutinizer/ocular": "^1.1",
                "squizlabs/php_codesniffer": "^2.5"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.8-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "PhpAmqpLib\\": "PhpAmqpLib/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "LGPL-2.1-or-later"
            ],
            "authors": [{
                    "name": "Alvaro Videla",
                    "role": "Original Maintainer"
                },
                {
                    "name": "John Kelly",
                    "email": "johnmkelly86@gmail.com",
                    "role": "Maintainer"
                },
                {
                    "name": "Raúl Araya",
                    "email": "nubeiro@gmail.com",
                    "role": "Maintainer"
                },
                {
                    "name": "Luke Bakken",
                    "email": "luke@bakken.io",
                    "role": "Maintainer"
                }
            ],
            "description": "Formerly videlalvaro/php-amqplib.  This library is a pure PHP implementation of the AMQP protocol. It's been tested against RabbitMQ.",
            "homepage": "https://github.com/php-amqplib/php-amqplib/",
            "keywords": [
                "message",
                "queue",
                "rabbitmq"
            ],
            "time": "2018-11-13T09:35:17+00:00"
        },
        {
            "name": "phpdocumentor/graphviz",
            "version": "1.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/phpDocumentor/GraphViz.git",
                "reference": "a906a90a9f230535f25ea31caf81b2323956283f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phpDocumentor/GraphViz/zipball/a906a90a9f230535f25ea31caf81b2323956283f",
                "reference": "a906a90a9f230535f25ea31caf81b2323956283f",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.0"
            },
            "type": "library",
            "autoload": {
                "psr-0": {
                    "phpDocumentor": [
                        "src/",
                        "tests/unit"
                    ]
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Mike van Riel",
                "email": "mike.vanriel@naenius.com"
            }],
            "time": "2016-02-02T13:00:08+00:00"
        },
        {
            "name": "predis/predis",
            "version": "v1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/nrk/predis.git",
                "reference": "f0210e38881631afeafb56ab43405a92cafd9fd1"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/nrk/predis/zipball/f0210e38881631afeafb56ab43405a92cafd9fd1",
                "reference": "f0210e38881631afeafb56ab43405a92cafd9fd1",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.9"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.8"
            },
            "suggest": {
                "ext-curl": "Allows access to Webdis when paired with phpiredis",
                "ext-phpiredis": "Allows faster serialization and deserialization of the Redis protocol"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Predis\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Daniele Alessandri",
                "email": "suppakilla@gmail.com",
                "homepage": "http://clorophilla.net"
            }],
            "description": "Flexible and feature-complete Redis client for PHP and HHVM",
            "homepage": "http://github.com/nrk/predis",
            "keywords": [
                "nosql",
                "predis",
                "redis"
            ],
            "time": "2016-06-16T16:22:20+00:00"
        },
        {
            "name": "propel/propel",
            "version": "2.0.0-alpha8",
            "source": {
                "type": "git",
                "url": "https://github.com/propelorm/Propel2.git",
                "reference": "4c309e3e5adaba077f54c0fab93c34995d7c9b3d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/propelorm/Propel2/zipball/4c309e3e5adaba077f54c0fab93c34995d7c9b3d",
                "reference": "4c309e3e5adaba077f54c0fab93c34995d7c9b3d",
                "shasum": ""
            },
            "require": {
                "php": ">=5.5",
                "psr/log": "~1.0",
                "symfony/config": "~2.3||~3.0||~4.0",
                "symfony/console": "~2.3||~3.0||~4.0",
                "symfony/filesystem": "~2.3||~3.0||~4.0",
                "symfony/finder": "~2.3||~3.0||~4.0",
                "symfony/validator": "~2.3||~3.0.0||~3.1.0||^3.2.4||~4.0",
                "symfony/yaml": "~2.3||~3.0||~4.0"
            },
            "require-dev": {
                "monolog/monolog": "~1.3",
                "phpunit/phpunit": "~4.0||~5.0"
            },
            "suggest": {
                "monolog/monolog": "The recommended logging library to use with Propel."
            },
            "bin": [
                "bin/propel"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Propel": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "William DURAND",
                "email": "william.durand1@gmail.com"
            }],
            "description": "Propel2 is an open-source Object-Relational Mapping (ORM) for PHP 5.5 and up.",
            "homepage": "http://www.propelorm.org/",
            "keywords": [
                "Active Record",
                "orm",
                "persistence"
            ],
            "time": "2018-02-19T12:58:55+00:00"
        },
        {
            "name": "psr/container",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/php-fig/container.git",
                "reference": "b7ce3b176482dbbc1245ebf52b181af44c2cf55f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-fig/container/zipball/b7ce3b176482dbbc1245ebf52b181af44c2cf55f",
                "reference": "b7ce3b176482dbbc1245ebf52b181af44c2cf55f",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Psr\\Container\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "PHP-FIG",
                "homepage": "http://www.php-fig.org/"
            }],
            "description": "Common Container Interface (PHP FIG PSR-11)",
            "homepage": "https://github.com/php-fig/container",
            "keywords": [
                "PSR-11",
                "container",
                "container-interface",
                "container-interop",
                "psr"
            ],
            "time": "2017-02-14T16:28:37+00:00"
        },
        {
            "name": "psr/http-message",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/php-fig/http-message.git",
                "reference": "f6561bf28d520154e4b0ec72be95418abe6d9363"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-fig/http-message/zipball/f6561bf28d520154e4b0ec72be95418abe6d9363",
                "reference": "f6561bf28d520154e4b0ec72be95418abe6d9363",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Psr\\Http\\Message\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "PHP-FIG",
                "homepage": "http://www.php-fig.org/"
            }],
            "description": "Common interface for HTTP messages",
            "homepage": "https://github.com/php-fig/http-message",
            "keywords": [
                "http",
                "http-message",
                "psr",
                "psr-7",
                "request",
                "response"
            ],
            "time": "2016-08-06T14:39:51+00:00"
        },
        {
            "name": "psr/log",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/php-fig/log.git",
                "reference": "4ebe3a8bf773a19edfe0a84b6585ba3d401b724d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-fig/log/zipball/4ebe3a8bf773a19edfe0a84b6585ba3d401b724d",
                "reference": "4ebe3a8bf773a19edfe0a84b6585ba3d401b724d",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Psr\\Log\\": "Psr/Log/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "PHP-FIG",
                "homepage": "http://www.php-fig.org/"
            }],
            "description": "Common interface for logging libraries",
            "homepage": "https://github.com/php-fig/log",
            "keywords": [
                "log",
                "psr",
                "psr-3"
            ],
            "time": "2016-10-10T12:19:37+00:00"
        },
        {
            "name": "ralouphie/getallheaders",
            "version": "2.0.5",
            "source": {
                "type": "git",
                "url": "https://github.com/ralouphie/getallheaders.git",
                "reference": "5601c8a83fbba7ef674a7369456d12f1e0d0eafa"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/ralouphie/getallheaders/zipball/5601c8a83fbba7ef674a7369456d12f1e0d0eafa",
                "reference": "5601c8a83fbba7ef674a7369456d12f1e0d0eafa",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3"
            },
            "require-dev": {
                "phpunit/phpunit": "~3.7.0",
                "satooshi/php-coveralls": ">=1.0"
            },
            "type": "library",
            "autoload": {
                "files": [
                    "src/getallheaders.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Ralph Khattar",
                "email": "ralph.khattar@gmail.com"
            }],
            "description": "A polyfill for getallheaders.",
            "time": "2016-02-11T07:05:27+00:00"
        },
        {
            "name": "ramsey/uuid",
            "version": "3.8.0",
            "source": {
                "type": "git",
                "url": "https://github.com/ramsey/uuid.git",
                "reference": "d09ea80159c1929d75b3f9c60504d613aeb4a1e3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/ramsey/uuid/zipball/d09ea80159c1929d75b3f9c60504d613aeb4a1e3",
                "reference": "d09ea80159c1929d75b3f9c60504d613aeb4a1e3",
                "shasum": ""
            },
            "require": {
                "paragonie/random_compat": "^1.0|^2.0|9.99.99",
                "php": "^5.4 || ^7.0",
                "symfony/polyfill-ctype": "^1.8"
            },
            "replace": {
                "rhumsaa/uuid": "self.version"
            },
            "require-dev": {
                "codeception/aspect-mock": "^1.0 | ~2.0.0",
                "doctrine/annotations": "~1.2.0",
                "goaop/framework": "1.0.0-alpha.2 | ^1.0 | ~2.1.0",
                "ircmaxell/random-lib": "^1.1",
                "jakub-onderka/php-parallel-lint": "^0.9.0",
                "mockery/mockery": "^0.9.9",
                "moontoast/math": "^1.1",
                "php-mock/php-mock-phpunit": "^0.3|^1.1",
                "phpunit/phpunit": "^4.7|^5.0|^6.5",
                "squizlabs/php_codesniffer": "^2.3"
            },
            "suggest": {
                "ext-ctype": "Provides support for PHP Ctype functions",
                "ext-libsodium": "Provides the PECL libsodium extension for use with the SodiumRandomGenerator",
                "ext-uuid": "Provides the PECL UUID extension for use with the PeclUuidTimeGenerator and PeclUuidRandomGenerator",
                "ircmaxell/random-lib": "Provides RandomLib for use with the RandomLibAdapter",
                "moontoast/math": "Provides support for converting UUID to 128-bit integer (in string form).",
                "ramsey/uuid-console": "A console application for generating UUIDs with ramsey/uuid",
                "ramsey/uuid-doctrine": "Allows the use of Ramsey\\Uuid\\Uuid as Doctrine field type."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Ramsey\\Uuid\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Marijn Huizendveld",
                    "email": "marijn.huizendveld@gmail.com"
                },
                {
                    "name": "Thibaud Fabre",
                    "email": "thibaud@aztech.io"
                },
                {
                    "name": "Ben Ramsey",
                    "email": "ben@benramsey.com",
                    "homepage": "https://benramsey.com"
                }
            ],
            "description": "Formerly rhumsaa/uuid. A PHP 5.4+ library for generating RFC 4122 version 1, 3, 4, and 5 universally unique identifiers (UUID).",
            "homepage": "https://github.com/ramsey/uuid",
            "keywords": [
                "guid",
                "identifier",
                "uuid"
            ],
            "time": "2018-07-19T23:38:55+00:00"
        },
        {
            "name": "react/promise",
            "version": "v2.7.1",
            "source": {
                "type": "git",
                "url": "https://github.com/reactphp/promise.git",
                "reference": "31ffa96f8d2ed0341a57848cbb84d88b89dd664d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/reactphp/promise/zipball/31ffa96f8d2ed0341a57848cbb84d88b89dd664d",
                "reference": "31ffa96f8d2ed0341a57848cbb84d88b89dd664d",
                "shasum": ""
            },
            "require": {
                "php": ">=5.4.0"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.8"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "React\\Promise\\": "src/"
                },
                "files": [
                    "src/functions_include.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Jan Sorgalla",
                "email": "jsorgalla@gmail.com"
            }],
            "description": "A lightweight implementation of CommonJS Promises/A for PHP",
            "keywords": [
                "promise",
                "promises"
            ],
            "time": "2019-01-07T21:25:54+00:00"
        },
        {
            "name": "ruflin/elastica",
            "version": "5.3.4",
            "source": {
                "type": "git",
                "url": "https://github.com/ruflin/Elastica.git",
                "reference": "6d7c20e632e203bac4aaf8ae9df9802fbabb6453"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/ruflin/Elastica/zipball/6d7c20e632e203bac4aaf8ae9df9802fbabb6453",
                "reference": "6d7c20e632e203bac4aaf8ae9df9802fbabb6453",
                "shasum": ""
            },
            "require": {
                "elasticsearch/elasticsearch": "5.3.*",
                "php": ">=5.6.0",
                "psr/log": "~1.0"
            },
            "require-dev": {
                "aws/aws-sdk-php": "~3.0",
                "guzzlehttp/guzzle": "~6.0"
            },
            "suggest": {
                "aws/aws-sdk-php": "Allow using IAM authentication with Amazon ElasticSearch Service",
                "egeloen/http-adapter": "Allow using httpadapter transport",
                "guzzlehttp/guzzle": "Allow using guzzle 6 as the http transport",
                "monolog/monolog": "Logging request"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.3.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Elastica\\": "lib/Elastica/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Nicolas Ruflin",
                "homepage": "http://ruflin.com/"
            }],
            "description": "Elasticsearch Client",
            "homepage": "http://elastica.io/",
            "keywords": [
                "client",
                "search"
            ],
            "time": "2019-01-16T13:43:32+00:00"
        },
        {
            "name": "spryker-eco/loggly",
            "version": "dev-master",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker-eco/loggly.git",
                "reference": "db0cff40b0d164599cf9fdce150e31374c1369b1"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker-eco/loggly/zipball/db0cff40b0d164599cf9fdce150e31374c1369b1",
                "reference": "db0cff40b0d164599cf9fdce150e31374c1369b1",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/monolog": "*",
                "spryker/queue": "*"
            },
            "suggest": {
                "spryker/monolog": "Needed to send messages to loggly via Curl helper",
                "spryker/queue": "Needed to process messages from the queue"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "SprykerEco\\": "src/SprykerEco/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Loggly module",
            "time": "2018-10-16T13:00:22+00:00"
        },
        {
            "name": "spryker-shop/price-product-volume-widget",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker-shop/price-product-volume-widget.git",
                "reference": "da48475b885680d0b8e5daae858ef25514cd98db"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker-shop/price-product-volume-widget/zipball/da48475b885680d0b8e5daae858ef25514cd98db",
                "reference": "da48475b885680d0b8e5daae858ef25514cd98db",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/currency": "^3.4.0",
                "spryker/kernel": "^3.24.0",
                "spryker/price": "^5.3.0",
                "spryker/price-product-storage": "^2.1.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker-shop/product-detail-page": "*",
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker-shop/product-detail-page": "Widget plugins are available for this module."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "SprykerShop\\": "src/SprykerShop/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceProductVolumeWidget module",
            "time": "2018-10-11T09:19:52+00:00"
        },
        {
            "name": "spryker/acl",
            "version": "3.1.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/acl.git",
                "reference": "e4ad271178cd3bceb7890fef29ffdc5c9be9fcd3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/acl/zipball/e4ad271178cd3bceb7890fef29ffdc5c9be9fcd3",
                "reference": "e4ad271178cd3bceb7890fef29ffdc5c9be9fcd3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/config": "^3.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/user": "^3.0.0",
                "spryker/util-date-time": "^1.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/installer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "suggest": {
                "spryker/installer": "If you want to use Installer plugins.",
                "spryker/silex": "If you want to use ServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Acl module",
            "time": "2018-11-14T15:13:52+00:00"
        },
        {
            "name": "spryker/api",
            "version": "0.1.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/api.git",
                "reference": "416c470f38a75b0689a470c8584f5b9ddf57da4c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/api/zipball/416c470f38a75b0689a470c8584f5b9ddf57da4c",
                "reference": "416c470f38a75b0689a470c8584f5b9ddf57da4c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/application": "^3.0.0",
                "spryker/config": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-encoding": "^2.0.1",
                "spryker/util-text": "^1.1.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/log": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/log": "For logging request and response."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Api module",
            "time": "2018-10-09T09:33:20+00:00"
        },
        {
            "name": "spryker/api-query-builder",
            "version": "0.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/api-query-builder.git",
                "reference": "a979f93ceaae09031cee3a9a2b9bd1acac115752"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/api-query-builder/zipball/a979f93ceaae09031cee3a9a2b9bd1acac115752",
                "reference": "a979f93ceaae09031cee3a9a2b9bd1acac115752",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/api": "^0.1.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.2.0",
                "spryker/propel-query-builder": "^0.3.0",
                "spryker/util-encoding": "^2.0.1"
            },
            "require-dev": {
                "spryker/assertion": "*",
                "spryker/code-sniffer": "*",
                "spryker/config": "*",
                "spryker/product": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/symfony": "^3.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ApiQueryBuilder module",
            "time": "2018-08-13T10:09:37+00:00"
        },
        {
            "name": "spryker/application",
            "version": "3.13.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/application.git",
                "reference": "56d2105ae30b39c0a37a91f904811a682b7bb7fe"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/application/zipball/56d2105ae30b39c0a37a91f904811a682b7bb7fe",
                "reference": "56d2105ae30b39c0a37a91f904811a682b7bb7fe",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/application-extension": "^1.0.0",
                "spryker/config": "^3.0.0",
                "spryker/container": "^1.1.0",
                "spryker/error-handler": "^2.0.0",
                "spryker/kernel": "^3.31.0",
                "spryker/log": "^3.1.0",
                "spryker/monolog": "^2.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/twig": "^3.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/util-network": "^1.1.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Application\\Helper\\": "tests/SprykerTest/Shared/Application/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Application module",
            "time": "2019-01-25T09:47:40+00:00"
        },
        {
            "name": "spryker/application-extension",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/application-extension.git",
                "reference": "52010958313fcffef3ecea9844387b8bc74c39c0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/application-extension/zipball/52010958313fcffef3ecea9844387b8bc74c39c0",
                "reference": "52010958313fcffef3ecea9844387b8bc74c39c0",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/container": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/container": "If you want to use ApplicationPluginInterface or BootableApplicationPluginInterface"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ApplicationExtension module",
            "time": "2019-01-14T15:22:14+00:00"
        },
        {
            "name": "spryker/assertion",
            "version": "3.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Assertion.git",
                "reference": "bd42cb51f8dc432a859e0ae396d9bf6b1924bcdf"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Assertion/zipball/bd42cb51f8dc432a859e0ae396d9bf6b1924bcdf",
                "reference": "bd42cb51f8dc432a859e0ae396d9bf6b1924bcdf",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use ServiceProvider you need to install spryker/silex."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Assertion bundle",
            "time": "2017-02-22T12:08:46+00:00"
        },
        {
            "name": "spryker/auth",
            "version": "3.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/auth.git",
                "reference": "83eb03a7273cfe1cd9fb0b257581c8e26172ae65"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/auth/zipball/83eb03a7273cfe1cd9fb0b257581c8e26172ae65",
                "reference": "83eb03a7273cfe1cd9fb0b257581c8e26172ae65",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/session": "^3.0.0 || ^4.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/user": "^3.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/config": "*",
                "spryker/discount": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use ServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Auth module",
            "time": "2018-10-29T12:36:26+00:00"
        },
        {
            "name": "spryker/auth-mail-connector",
            "version": "3.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/AuthMailConnector.git",
                "reference": "2300ca403314500e99411ccf41b312327532ed8d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/AuthMailConnector/zipball/2300ca403314500e99411ccf41b312327532ed8d",
                "reference": "2300ca403314500e99411ccf41b312327532ed8d",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.0.0",
                "spryker/mail": "^4.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/auth": "If you want to use Auth plugins you need to install spryker/auth."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "AuthMailConnector bundle",
            "time": "2017-02-22T12:08:46+00:00"
        },
        {
            "name": "spryker/availability",
            "version": "6.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/availability.git",
                "reference": "ea68cd0c3b4e17b685c99db6b143727afbc9bdb6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/availability/zipball/ea68cd0c3b4e17b685c99db6b143727afbc9bdb6",
                "reference": "ea68cd0c3b4e17b685c99db6b143727afbc9bdb6",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/oms": "^8.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-alternative-extension": "^1.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/stock": "^5.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/store": "^1.5.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/checkout": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/checkout": "If you want to use Checkout plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Availability\\Helper\\": "tests/SprykerTest/Shared/Availability/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Availability module",
            "time": "2018-11-20T07:34:47+00:00"
        },
        {
            "name": "spryker/availability-cart-connector",
            "version": "4.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/availability-cart-connector.git",
                "reference": "73d84ec5f9baa0e0da87c7428bb77e00a0da42e3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/availability-cart-connector/zipball/73d84ec5f9baa0e0da87c7428bb77e00a0da42e3",
                "reference": "73d84ec5f9baa0e0da87c7428bb77e00a0da42e3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/availability": "^5.0.0 || ^6.0.0",
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/cart": "*",
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/cart": "If you want to use Cart plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "AvailabilityCartConnector module",
            "time": "2018-04-06T07:18:05+00:00"
        },
        {
            "name": "spryker/availability-data-feed",
            "version": "0.1.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/availability-data-feed.git",
                "reference": "bb81d353afa52c044fb17e584b33202d25e0f8dd"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/availability-data-feed/zipball/bb81d353afa52c044fb17e584b33202d25e0f8dd",
                "reference": "bb81d353afa52c044fb17e584b33202d25e0f8dd",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/stock": "^4.0.0 || ^5.0.0"
            },
            "require-dev": {
                "spryker/availability": "^5.0.0 || ^6.0.0",
                "spryker/code-sniffer": "*",
                "spryker/locale": "^3.0.0",
                "spryker/propel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "AvailabilityDataFeed module",
            "time": "2018-02-20T11:05:53+00:00"
        },
        {
            "name": "spryker/availability-gui",
            "version": "3.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/availability-gui.git",
                "reference": "57023a86b95013c5abe8564c34faab30630c1934"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/availability-gui/zipball/57023a86b95013c5abe8564c34faab30630c1934",
                "reference": "57023a86b95013c5abe8564c34faab30630c1934",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/availability": "^6.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/oms": "^8.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-bundle": "^2.0.0 || ^3.0.0 || ^4.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/stock": "^5.0.0",
                "spryker/store": "^1.5.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/config": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "AvailabilityGui module",
            "time": "2019-01-09T08:20:26+00:00"
        },
        {
            "name": "spryker/availability-offer-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/availability-offer-connector.git",
                "reference": "ac7a33e86e4f2a3695ed580876741ad1e1138928"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/availability-offer-connector/zipball/ac7a33e86e4f2a3695ed580876741ad1e1138928",
                "reference": "ac7a33e86e4f2a3695ed580876741ad1e1138928",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/availability": "^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/offer-extension": "^1.0.0",
                "spryker/store": "^1.5.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "AvailabilityOfferConnector module",
            "time": "2018-04-20T09:46:04+00:00"
        },
        {
            "name": "spryker/braintree",
            "version": "0.5.9",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/braintree.git",
                "reference": "f9d9eae0fad8d8ab0a1376e225bae2b3a13dc8ac"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/braintree/zipball/f9d9eae0fad8d8ab0a1376e225bae2b3a13dc8ac",
                "reference": "f9d9eae0fad8d8ab0a1376e225bae2b3a13dc8ac",
                "shasum": ""
            },
            "require": {
                "braintree/braintree_php": "~3.15.0",
                "php": ">=7.1",
                "spryker/checkout": "^3.0.0 || ^4.0.0",
                "spryker/config": "^3.0.0",
                "spryker/currency": "^2.0.0 || ^3.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/money": "^2.0.0",
                "spryker/oms": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/payment": "^3.0.0 || ^4.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/refund": "^4.0.0 || ^5.0.0",
                "spryker/sales": "^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/step-engine": "^2.0.0 || ^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/country": "*",
                "spryker/customer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Braintree module",
            "time": "2018-08-15T06:37:03+00:00"
        },
        {
            "name": "spryker/cache",
            "version": "3.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Cache.git",
                "reference": "47154abd2196d54441c123493bbf27ce33cf14a9"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Cache/zipball/47154abd2196d54441c123493bbf27ce33cf14a9",
                "reference": "47154abd2196d54441c123493bbf27ce33cf14a9",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Cache bundle",
            "time": "2017-04-10T13:13:21+00:00"
        },
        {
            "name": "spryker/calculation",
            "version": "4.4.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/calculation.git",
                "reference": "2bf6f5dd9790615761a3046a74a44da757e8c5ba"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/calculation/zipball/2bf6f5dd9790615761a3046a74a44da757e8c5ba",
                "reference": "2bf6f5dd9790615761a3046a74a44da757e8c5ba",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/calculation-extension": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/util-text": "^1.1.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/checkout": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/checkout": "If you want to use Checkout plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Calculation module",
            "time": "2018-10-02T07:35:34+00:00"
        },
        {
            "name": "spryker/calculation-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/calculation-extension.git",
                "reference": "afc127154242237cf0b0f104cf33f2454811bba2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/calculation-extension/zipball/afc127154242237cf0b0f104cf33f2454811bba2",
                "reference": "afc127154242237cf0b0f104cf33f2454811bba2",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CalculationExtension module",
            "time": "2018-10-04T13:35:59+00:00"
        },
        {
            "name": "spryker/cart",
            "version": "5.5.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cart.git",
                "reference": "45859e550bf2acecdd12284b662ef6b882eb94af"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cart/zipball/45859e550bf2acecdd12284b662ef6b882eb94af",
                "reference": "45859e550bf2acecdd12284b662ef6b882eb94af",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/calculation": "^4.0.0",
                "spryker/cart-extension": "^1.6.0 || ^2.2.1",
                "spryker/kernel": "^3.19.0",
                "spryker/messenger": "^3.0.0",
                "spryker/quote": "^2.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/customer": "*",
                "spryker/price-product": "*",
                "spryker/product": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/customer": "If you want to use Customer plugins, minimum required version: 7.4.0.",
                "spryker/persistent-cart": "If you want to use persistent cart"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Cart module",
            "time": "2018-11-05T13:16:07+00:00"
        },
        {
            "name": "spryker/cart-currency-connector",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cart-currency-connector.git",
                "reference": "bc8a189fd3144a8b54637fa76951fc275a1cb38c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cart-currency-connector/zipball/bc8a189fd3144a8b54637fa76951fc275a1cb38c",
                "reference": "bc8a189fd3144a8b54637fa76951fc275a1cb38c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart": "^5.1.0",
                "spryker/currency": "^3.1.0",
                "spryker/currency-extension": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "suggest": {
                "spryker/currency": "If you want to use plugin to rebuild cart when currency changed"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CartCurrencyConnector module",
            "time": "2018-05-16T15:12:24+00:00"
        },
        {
            "name": "spryker/cart-extension",
            "version": "2.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cart-extension.git",
                "reference": "76c39071de9b806368ba2b1be8677b5be9f39191"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cart-extension/zipball/76c39071de9b806368ba2b1be8677b5be9f39191",
                "reference": "76c39071de9b806368ba2b1be8677b5be9f39191",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CartExtension module",
            "time": "2018-10-31T13:42:25+00:00"
        },
        {
            "name": "spryker/cart-note",
            "version": "0.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cart-note.git",
                "reference": "f77d22771dbf7e4da658ba25404980bcfb2f614c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cart-note/zipball/f77d22771dbf7e4da658ba25404980bcfb2f614c",
                "reference": "f77d22771dbf7e4da658ba25404980bcfb2f614c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart-note-extension": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/quote": "^2.0.0",
                "spryker/sales": "^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/checkout": "*",
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/checkout": "If you want to use Checkout plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CartNote module",
            "time": "2018-04-10T14:40:01+00:00"
        },
        {
            "name": "spryker/cart-note-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cart-note-extension.git",
                "reference": "e84cb4deaa84c9497f6d3dda62e70f5c6e6309b1"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cart-note-extension/zipball/e84cb4deaa84c9497f6d3dda62e70f5c6e6309b1",
                "reference": "e84cb4deaa84c9497f6d3dda62e70f5c6e6309b1",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CartNoteExtension module",
            "time": "2018-04-10T14:40:01+00:00"
        },
        {
            "name": "spryker/cart-note-product-bundle-connector",
            "version": "0.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cart-note-product-bundle-connector.git",
                "reference": "5a0d648406f4c50e68304322d2a2dd9e477b840a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cart-note-product-bundle-connector/zipball/5a0d648406f4c50e68304322d2a2dd9e477b840a",
                "reference": "5a0d648406f4c50e68304322d2a2dd9e477b840a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart-note-extension": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product-bundle": "^4.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CartNoteProductBundleConnector module",
            "time": "2018-04-10T14:40:01+00:00"
        },
        {
            "name": "spryker/cart-permission-connector",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cart-permission-connector.git",
                "reference": "d89c6836132b3113e16ceeaff475c0078dc5646d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cart-permission-connector/zipball/d89c6836132b3113e16ceeaff475c0078dc5646d",
                "reference": "d89c6836132b3113e16ceeaff475c0078dc5646d",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart-extension": "^1.0.0 || ^2.0.0",
                "spryker/kernel": "^3.19.0",
                "spryker/messenger": "^3.1.0",
                "spryker/permission": "^1.0.0",
                "spryker/permission-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CartPermissionConnector module",
            "time": "2018-11-07T12:00:53+00:00"
        },
        {
            "name": "spryker/cart-variant",
            "version": "1.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cart-variant.git",
                "reference": "8a22bddce0830476f1a1be8f6698a24ff1dffecd"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cart-variant/zipball/8a22bddce0830476f1a1be8f6698a24ff1dffecd",
                "reference": "8a22bddce0830476f1a1be8f6698a24ff1dffecd",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/availability": "^5.0.0 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CartVariant module",
            "time": "2018-02-08T10:41:19+00:00"
        },
        {
            "name": "spryker/catalog",
            "version": "5.5.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/catalog.git",
                "reference": "6631d9188d267132a335feb997b71508bfc2edf6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/catalog/zipball/6631d9188d267132a335feb997b71508bfc2edf6",
                "reference": "6631d9188d267132a335feb997b71508bfc2edf6",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/search": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/config": "*",
                "spryker/elastica": "*",
                "spryker/product-page-search": "*"
            },
            "suggest": {
                "spryker/config": "If you want to use Elastica plugins.",
                "spryker/elastica": "If you want to use Elastica plugins.",
                "spryker/product-page-search": "If you want to use ProductPageSearch plugins, minimum required version: 0.1.0."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Catalog module",
            "time": "2018-12-11T16:22:07+00:00"
        },
        {
            "name": "spryker/catalog-price-product-connector",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/catalog-price-product-connector.git",
                "reference": "1a0d685190ba7848afeaf82be82b5e733730274f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/catalog-price-product-connector/zipball/1a0d685190ba7848afeaf82be82b5e733730274f",
                "reference": "1a0d685190ba7848afeaf82be82b5e733730274f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/currency": "^3.2.0",
                "spryker/kernel": "^3.0.0",
                "spryker/price": "^5.0.0",
                "spryker/price-product": "^1.0.0 || ^2.0.0",
                "spryker/price-product-storage": "^1.0.0 || ^2.0.0"
            },
            "require-dev": {
                "spryker/catalog": "*",
                "spryker/code-sniffer": "*",
                "spryker/elastica": "*",
                "spryker/search": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/catalog": "If you want to use Catalog plugins, minimum required version: 5.2.0.",
                "spryker/config": "If you want to use Config plugins.",
                "spryker/elastica": "If you want to use Elastica plugins.",
                "spryker/search": "If you want to use Search plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CatalogPriceProductConnector module",
            "time": "2018-07-04T14:05:29+00:00"
        },
        {
            "name": "spryker/category",
            "version": "4.11.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/category.git",
                "reference": "fbf0c8f29f14b58e2a201ac386464c64b611ce2b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/category/zipball/fbf0c8f29f14b58e2a201ac386464c64b611ce2b",
                "reference": "fbf0c8f29f14b58e2a201ac386464c64b611ce2b",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/category-extension": "^1.0.0",
                "spryker/event": "^1.0.0 || ^2.0.0",
                "spryker/graph": "^3.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.17.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/url": "^3.2.1",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/code-sniffer": "*",
                "spryker/config": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Category\\Helper\\": "tests/SprykerTest/Zed/Category/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Category module",
            "time": "2019-01-16T15:45:59+00:00"
        },
        {
            "name": "spryker/category-data-feed",
            "version": "0.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/category-data-feed.git",
                "reference": "1685a9b5086f9634ea4afcbaa016171a21231e43"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/category-data-feed/zipball/1685a9b5086f9634ea4afcbaa016171a21231e43",
                "reference": "1685a9b5086f9634ea4afcbaa016171a21231e43",
                "shasum": ""
            },
            "require": {
                "spryker/category": "^3.0.0 || ^4.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/locale": "^3.0.0",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CategoryDataFeed module",
            "time": "2017-07-13T15:46:45+00:00"
        },
        {
            "name": "spryker/category-exporter",
            "version": "3.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/CategoryExporter.git",
                "reference": "e79fed31708944b5a9afa327f810813387b56110"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/CategoryExporter/zipball/e79fed31708944b5a9afa327f810813387b56110",
                "reference": "e79fed31708944b5a9afa327f810813387b56110",
                "shasum": ""
            },
            "require": {
                "spryker/category": "^3.0.0 || ^4.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/storage": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CategoryExporter module",
            "time": "2017-07-13T15:46:45+00:00"
        },
        {
            "name": "spryker/category-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/category-extension.git",
                "reference": "7f0267ecfa12de98bbf32c0897c61324879aee5a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/category-extension/zipball/7f0267ecfa12de98bbf32c0897c61324879aee5a",
                "reference": "7f0267ecfa12de98bbf32c0897c61324879aee5a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/symfony": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/symfony": "If you want to use CategoryFormPluginInterface"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CategoryExtension module",
            "time": "2019-01-10T18:40:34+00:00"
        },
        {
            "name": "spryker/category-navigation-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/category-navigation-connector.git",
                "reference": "0be5f54ddf8ddc87ed988cd9737a229629744ed2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/category-navigation-connector/zipball/0be5f54ddf8ddc87ed988cd9737a229629744ed2",
                "reference": "0be5f54ddf8ddc87ed988cd9737a229629744ed2",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/category": "^4.4.0",
                "spryker/kernel": "^3.0.0",
                "spryker/navigation": "^2.3.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CategoryNavigationConnector module",
            "time": "2018-01-31T12:07:33+00:00"
        },
        {
            "name": "spryker/category-storage",
            "version": "1.4.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/category-storage.git",
                "reference": "b1953264236cc3559a0a865633f42eb355d8a356"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/category-storage/zipball/b1953264236cc3559a0a865633f42eb355d8a356",
                "reference": "b1953264236cc3559a0a865633f42eb355d8a356",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/category": "^4.3.0",
                "spryker/event-behavior": "^1.1.0",
                "spryker/kernel": "^3.21.0",
                "spryker/locale": "^3.1.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/storage": "^3.4.0",
                "spryker/synchronization": "^0.2.0 || ^1.0.0",
                "spryker/synchronization-extension": "^1.0.0",
                "spryker/url": "^3.3.0",
                "spryker/util-sanitize": "^2.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/url-storage": "*"
            },
            "suggest": {
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0",
                "spryker/url-storage": "If you want to use UrlStorage plugins, minimum required version: 0.2.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CategoryStorage module",
            "time": "2019-01-14T20:51:51+00:00"
        },
        {
            "name": "spryker/checkout",
            "version": "4.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/checkout.git",
                "reference": "11252cfd96eb11c11642e96b8bd4c5c4277c8a00"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/checkout/zipball/11252cfd96eb11c11642e96b8bd4c5c4277c8a00",
                "reference": "11252cfd96eb11c11642e96b8bd4c5c4277c8a00",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/checkout-extension": "^1.0.0",
                "spryker/error-handler": "^2.1.0",
                "spryker/kernel": "^3.0.0",
                "spryker/oms": "^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/permission-extension": "^1.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/quote": "^1.0.0 || ^2.0.0",
                "spryker/step-engine": "^2.2.0 || ^3.2.0",
                "spryker/symfony": "^3.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/availability": "*",
                "spryker/country": "*",
                "spryker/customer": "*",
                "spryker/locale": "*",
                "spryker/product": "*",
                "spryker/propel": "*",
                "spryker/sales": "*",
                "spryker/stock": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Checkout module",
            "time": "2018-11-19T08:42:31+00:00"
        },
        {
            "name": "spryker/checkout-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/checkout-extension.git",
                "reference": "c8fcc8e6de2bd64c2424ac418ebe5aa4920b5ba7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/checkout-extension/zipball/c8fcc8e6de2bd64c2424ac418ebe5aa4920b5ba7",
                "reference": "c8fcc8e6de2bd64c2424ac418ebe5aa4920b5ba7",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CheckoutExtension module",
            "time": "2018-10-04T13:35:59+00:00"
        },
        {
            "name": "spryker/checkout-permission-connector",
            "version": "0.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/checkout-permission-connector.git",
                "reference": "fd29be277f791ca78902c2729d223c1baad82547"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/checkout-permission-connector/zipball/fd29be277f791ca78902c2729d223c1baad82547",
                "reference": "fd29be277f791ca78902c2729d223c1baad82547",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/permission": "^1.0.0",
                "spryker/permission-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/checkout": "*",
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/checkout": "^4.0.0 If you want to use the permission plugin"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CheckoutPermissionConnector module",
            "time": "2018-03-14T10:13:27+00:00"
        },
        {
            "name": "spryker/cms",
            "version": "6.7.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms.git",
                "reference": "a4d4d9a49c966a1f960f62a12d8f5dfebcee849f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms/zipball/a4d4d9a49c966a1f960f62a12d8f5dfebcee849f",
                "reference": "a4d4d9a49c966a1f960f62a12d8f5dfebcee849f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/category": "^3.0.0 || ^4.0.0",
                "spryker/glossary": "^3.1.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.28.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/url": "^3.2.1",
                "spryker/util-encoding": "^2.0.0",
                "spryker/util-text": "^1.1.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "suggest": {
                "spryker/cms-block": "If you want to have separate content blocks on your pages."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Cms\\Helper\\": "tests/SprykerTest/Zed/Cms/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Cms module",
            "time": "2018-11-23T15:45:53+00:00"
        },
        {
            "name": "spryker/cms-block",
            "version": "2.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-block.git",
                "reference": "1550cc3023619f7136e8e1155bfb1016cfa6382e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-block/zipball/1550cc3023619f7136e8e1155bfb1016cfa6382e",
                "reference": "1550cc3023619f7136e8e1155bfb1016cfa6382e",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/event": "^2.0.0",
                "spryker/glossary": "^3.1.0",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/store": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/twig": "*"
            },
            "suggest": {
                "spryker/silex": "*",
                "spryker/twig": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\CmsBlock\\Helper\\": "tests/SprykerTest/Zed/CmsBlock/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsBlock module",
            "time": "2018-10-25T05:34:19+00:00"
        },
        {
            "name": "spryker/cms-block-category-connector",
            "version": "2.1.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-block-category-connector.git",
                "reference": "3495d28d05f71dfe96411e7ff8d9732023ac7f3c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-block-category-connector/zipball/3495d28d05f71dfe96411e7ff8d9732023ac7f3c",
                "reference": "3495d28d05f71dfe96411e7ff8d9732023ac7f3c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/category": "^4.0.0",
                "spryker/cms-block": "^1.2.0 || ^2.0.0",
                "spryker/collector": "^5.0.0 || ^6.0.0",
                "spryker/gui": "^3.6.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-data-reader": "^1.0.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/cms-block-gui": "*",
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/cms-block-gui": "^1.0.0 || ^2.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsBlockCategoryConnector module",
            "time": "2018-02-09T12:03:48+00:00"
        },
        {
            "name": "spryker/cms-block-collector",
            "version": "2.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-block-collector.git",
                "reference": "1330afab0f421e1a643a14c0bf776964af94a96c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-block-collector/zipball/1330afab0f421e1a643a14c0bf776964af94a96c",
                "reference": "1330afab0f421e1a643a14c0bf776964af94a96c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cms-block": "^2.0.0",
                "spryker/collector": "^6.0.0",
                "spryker/glossary": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsBlockCollector module",
            "time": "2018-01-31T11:25:02+00:00"
        },
        {
            "name": "spryker/cms-block-gui",
            "version": "2.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-block-gui.git",
                "reference": "66b7f0a10277027f910125d8a4c1d01f7521e8ef"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-block-gui/zipball/66b7f0a10277027f910125d8a4c1d01f7521e8ef",
                "reference": "66b7f0a10277027f910125d8a4c1d01f7521e8ef",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cms-block": "^2.0.0",
                "spryker/gui": "^3.3.3",
                "spryker/kernel": "^3.13.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/twig": "^3.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsBlockGui module",
            "time": "2018-02-27T13:46:33+00:00"
        },
        {
            "name": "spryker/cms-block-product-connector",
            "version": "1.1.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-block-product-connector.git",
                "reference": "399cd7d5387951631da155a287784e2bd9860fda"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-block-product-connector/zipball/399cd7d5387951631da155a287784e2bd9860fda",
                "reference": "399cd7d5387951631da155a287784e2bd9860fda",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cms-block": "^1.2.0 || ^2.0.0",
                "spryker/collector": "^5.0.0 || ^6.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/cms-block-gui": "*",
                "spryker/code-sniffer": "*",
                "spryker/product-management": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/cms-block-gui": "^1.0.0 || ^2.0.0",
                "spryker/product-management": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsBlockProductConnector module",
            "time": "2018-04-23T11:09:15+00:00"
        },
        {
            "name": "spryker/cms-collector",
            "version": "2.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-collector.git",
                "reference": "ac8f05994338b8db74e0d19a1b2aea80d7fe0aaa"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-collector/zipball/ac8f05994338b8db74e0d19a1b2aea80d7fe0aaa",
                "reference": "ac8f05994338b8db74e0d19a1b2aea80d7fe0aaa",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cms": "^6.2.0",
                "spryker/collector": "^5.1.1 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/search": "^6.2.0 || ^7.0.0 || ^8.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/url": "^3.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsCollector module",
            "time": "2018-03-09T07:57:08+00:00"
        },
        {
            "name": "spryker/cms-content-widget",
            "version": "1.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-content-widget.git",
                "reference": "863c24758984508ecbf7007f9b95c6ce9112a366"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-content-widget/zipball/863c24758984508ecbf7007f9b95c6ce9112a366",
                "reference": "863c24758984508ecbf7007f9b95c6ce9112a366",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/glossary": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/log": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/twig": "^3.0.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/cms": "*",
                "spryker/cms-block-collector": "*",
                "spryker/cms-block-gui": "*",
                "spryker/cms-block-storage": "*",
                "spryker/cms-collector": "*",
                "spryker/cms-gui": "*",
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/propel-orm": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/cms": "If you want to use CmsPageParameterMapExpanderPlugin plugin.",
                "spryker/cms-block-collector": "If you want to expand CMS block collector with content widget mapping, provides plugin.",
                "spryker/cms-block-gui": "If you want to use content widgets with CMS blocks.",
                "spryker/cms-block-storage": "If you want to use CmsBlockStorage plugins, minimum required version: 1.2.0.",
                "spryker/cms-collector": "If you want to expand cms pages collector with content widget mapping, provides plugin.",
                "spryker/cms-gui": "If you want to use content widgets with CMS pages.",
                "spryker/silex": "Needed to get Twig environment for content widget service provider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsContentWidget module",
            "time": "2018-01-25T09:08:11+00:00"
        },
        {
            "name": "spryker/cms-content-widget-product-connector",
            "version": "1.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-content-widget-product-connector.git",
                "reference": "10df31935d8f33e1ae245b361ebcf9e225a97183"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-content-widget-product-connector/zipball/10df31935d8f33e1ae245b361ebcf9e225a97183",
                "reference": "10df31935d8f33e1ae245b361ebcf9e225a97183",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cms-content-widget": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/twig": "*"
            },
            "suggest": {
                "spryker/twig": "Required by Yves Twig function."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsContentWidgetProductConnector module",
            "time": "2018-08-28T12:34:54+00:00"
        },
        {
            "name": "spryker/cms-content-widget-product-group-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/CmsContentWidgetProductGroupConnector.git",
                "reference": "7016123ac7906a40b84ba28a12d463eb9962397f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/CmsContentWidgetProductGroupConnector/zipball/7016123ac7906a40b84ba28a12d463eb9962397f",
                "reference": "7016123ac7906a40b84ba28a12d463eb9962397f",
                "shasum": ""
            },
            "require": {
                "spryker/cms-content-widget": "^1.0.0",
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/propel-orm": "^1.0.0",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsContentWidgetProductGroupConnector module",
            "time": "2017-07-11T09:55:44+00:00"
        },
        {
            "name": "spryker/cms-content-widget-product-search-connector",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-content-widget-product-search-connector.git",
                "reference": "0eff1c1d838b7a945007eb73c70d3e48a5de16b3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-content-widget-product-search-connector/zipball/0eff1c1d838b7a945007eb73c70d3e48a5de16b3",
                "reference": "0eff1c1d838b7a945007eb73c70d3e48a5de16b3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cms-content-widget": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/search": "^7.2.0 || ^8.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/twig": "*"
            },
            "suggest": {
                "spryker/twig": "Required by Yves Twig function."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsContentWidgetProductSearchConnector module",
            "time": "2018-03-09T07:57:08+00:00"
        },
        {
            "name": "spryker/cms-content-widget-product-set-connector",
            "version": "1.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-content-widget-product-set-connector.git",
                "reference": "dbadc101bd361940a87f7220f6fb17bec585a792"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-content-widget-product-set-connector/zipball/dbadc101bd361940a87f7220f6fb17bec585a792",
                "reference": "dbadc101bd361940a87f7220f6fb17bec585a792",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cms-content-widget": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-set": "^1.0.0",
                "spryker/propel-orm": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/twig": "*"
            },
            "suggest": {
                "spryker/twig": "Required by Yves Twig function."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsContentWidgetProductSetConnector module",
            "time": "2018-01-24T11:43:27+00:00"
        },
        {
            "name": "spryker/cms-gui",
            "version": "4.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-gui.git",
                "reference": "9b752239825f8e71174c5b432d3ec13d53d2da1b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-gui/zipball/9b752239825f8e71174c5b432d3ec13d53d2da1b",
                "reference": "9b752239825f8e71174c5b432d3ec13d53d2da1b",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/application": "^3.2.0",
                "spryker/cms": "^5.1.0 || ^6.6.0",
                "spryker/glossary": "^3.0.0",
                "spryker/gui": "^3.10.0",
                "spryker/kernel": "^3.28.0",
                "spryker/locale": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/twig": "^3.0.0",
                "spryker/url": "^3.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/config": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsGui module",
            "time": "2018-11-23T15:45:53+00:00"
        },
        {
            "name": "spryker/cms-navigation-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-navigation-connector.git",
                "reference": "eea1cdb3e66f42fe325ba5a40670cdccdb4f9df3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-navigation-connector/zipball/eea1cdb3e66f42fe325ba5a40670cdccdb4f9df3",
                "reference": "eea1cdb3e66f42fe325ba5a40670cdccdb4f9df3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cms": "^6.5.0",
                "spryker/kernel": "^3.0.0",
                "spryker/navigation": "^2.3.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsNavigationConnector module",
            "time": "2018-01-31T12:07:33+00:00"
        },
        {
            "name": "spryker/cms-storage",
            "version": "1.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/cms-storage.git",
                "reference": "9f8efa9ac0e4f78d1a81394a2cea4cb1489af591"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/cms-storage/zipball/9f8efa9ac0e4f78d1a81394a2cea4cb1489af591",
                "reference": "9f8efa9ac0e4f78d1a81394a2cea4cb1489af591",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cms": "^6.4.0",
                "spryker/event-behavior": "^1.1.0",
                "spryker/kernel": "^3.21.0",
                "spryker/locale": "^3.1.0",
                "spryker/synchronization": "^0.2.0 || ^1.0.0",
                "spryker/synchronization-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/propel": "*",
                "spryker/propel-orm": "*",
                "spryker/testify": "*",
                "spryker/url": "*",
                "spryker/url-storage": "*"
            },
            "suggest": {
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0",
                "spryker/propel-orm": "If you want to use transaction functionality, minimum required version: 1.3.0",
                "spryker/url": "If you want to use Url plugins, minimum required version: 3.3.0",
                "spryker/url-storage": "If you want to use UrlStorage plugins, minimum required version: 0.2.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "0.1.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsStorage module",
            "time": "2019-01-17T19:49:29+00:00"
        },
        {
            "name": "spryker/cms-user-connector",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/CmsUserConnector.git",
                "reference": "5d124aa6ddb7d492b5a9d1dc97e72f944c5c63f5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/CmsUserConnector/zipball/5d124aa6ddb7d492b5a9d1dc97e72f944c5c63f5",
                "reference": "5d124aa6ddb7d492b5a9d1dc97e72f944c5c63f5",
                "shasum": ""
            },
            "require": {
                "spryker/cms": "^5.0.0 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/user": "^3.0.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/propelorm": "^1.0.0",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CmsUserConnector bundle",
            "time": "2017-06-29T10:18:58+00:00"
        },
        {
            "name": "spryker/collector",
            "version": "6.1.7",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/collector.git",
                "reference": "6ef79f1d9842271e2aa9f9f9c397a0552947de6e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/collector/zipball/6ef79f1d9842271e2aa9f9f9c397a0552947de6e",
                "reference": "6ef79f1d9842271e2aa9f9f9c397a0552947de6e",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/config": "^3.0.0",
                "spryker/elastica": "^2.0.0 || ^3.0.0 || ^4.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/redis": "^2.0.0",
                "spryker/search": "^6.6.0 || ^7.0.0 || ^8.0.0",
                "spryker/sql-criteria-builder": "^1.0.0",
                "spryker/storage": "^3.2.0",
                "spryker/store": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^4.0.0",
                "spryker/util-data-reader": "^1.2.0"
            },
            "require-dev": {
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Collector\\Helper\\": "tests/SprykerTest/Shared/Collector/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Collector module",
            "time": "2018-10-08T12:38:04+00:00"
        },
        {
            "name": "spryker/collector-search-connector",
            "version": "1.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/collector-search-connector.git",
                "reference": "bafb41b0f409c9d6df02088c26d610a0b794e75b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/collector-search-connector/zipball/bafb41b0f409c9d6df02088c26d610a0b794e75b",
                "reference": "bafb41b0f409c9d6df02088c26d610a0b794e75b",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^5.0.0 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/search": "^6.0.0 || ^7.0.0 || ^8.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CollectorSearchConnector module",
            "time": "2018-03-09T07:57:08+00:00"
        },
        {
            "name": "spryker/collector-storage-connector",
            "version": "1.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/collector-storage-connector.git",
                "reference": "09cc4cad4e273a95b6ba3aee2171e1cbdfec509c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/collector-storage-connector/zipball/09cc4cad4e273a95b6ba3aee2171e1cbdfec509c",
                "reference": "09cc4cad4e273a95b6ba3aee2171e1cbdfec509c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^5.0.0 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/storage": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CollectorStorageConnector module",
            "time": "2018-01-24T11:43:27+00:00"
        },
        {
            "name": "spryker/company",
            "version": "1.1.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company.git",
                "reference": "ddb396a094f8784ca5a87583d6e01d6628e5d3c0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company/zipball/ddb396a094f8784ca5a87583d6e01d6628e5d3c0",
                "reference": "ddb396a094f8784ca5a87583d6e01d6628e5d3c0",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company-extension": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/store": "^1.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/mail": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/mail": "If you want to use mail plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Company\\Helper\\": "tests/SprykerTest/Zed/Company/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Company module",
            "time": "2018-06-14T09:24:59+00:00"
        },
        {
            "name": "spryker/company-business-unit",
            "version": "2.7.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-business-unit.git",
                "reference": "bb84f896d9c6c29671dafa520c46d6ddf408f178"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-business-unit/zipball/bb84f896d9c6c29671dafa520c46d6ddf408f178",
                "reference": "bb84f896d9c6c29671dafa520c46d6ddf408f178",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company": "^1.0.0",
                "spryker/company-business-unit-extension": "^1.2.0",
                "spryker/company-extension": "^1.0.0",
                "spryker/company-user-extension": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/company-user": "If you want to have company users management functionality: ^2.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\CompanyBusinessUnit\\Helper\\": "tests/SprykerTest/Zed/CompanyBusinessUnit/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyBusinessUnit module",
            "time": "2018-10-26T16:19:49+00:00"
        },
        {
            "name": "spryker/company-business-unit-extension",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-business-unit-extension.git",
                "reference": "aad8e102dfef3daa04fd743b9b4d3861c69d6311"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-business-unit-extension/zipball/aad8e102dfef3daa04fd743b9b4d3861c69d6311",
                "reference": "aad8e102dfef3daa04fd743b9b4d3861c69d6311",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyBusinessUnitExtension module",
            "time": "2018-10-26T10:31:11+00:00"
        },
        {
            "name": "spryker/company-business-unit-gui",
            "version": "2.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-business-unit-gui.git",
                "reference": "f946fca05c67799702f2bcd821b061d6aa02b0ec"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-business-unit-gui/zipball/f946fca05c67799702f2bcd821b061d6aa02b0ec",
                "reference": "f946fca05c67799702f2bcd821b061d6aa02b0ec",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company": "^1.0.0",
                "spryker/company-business-unit": "^2.1.0",
                "spryker/company-business-unit-gui-extension": "^1.0.0",
                "spryker/company-user-gui-extension": "^1.0.0",
                "spryker/gui": "^3.13.0",
                "spryker/kernel": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-text": "^1.2.0"
            },
            "require-dev": {
                "spryker/company-user": "*",
                "spryker/customer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyBusinessUnitGui module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/company-business-unit-gui-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-business-unit-gui-extension.git",
                "reference": "1829b8b89db8fe329521f98a138af01822092c05"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-business-unit-gui-extension/zipball/1829b8b89db8fe329521f98a138af01822092c05",
                "reference": "1829b8b89db8fe329521f98a138af01822092c05",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/company-business-unit": "^1.1.0",
                "spryker/gui": "^3.13.0",
                "spryker/symfony": "^3.0.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/company-business-unit": "To get full functionality of the current module",
                "spryker/gui": "If you need gui",
                "spryker/symfony": "If you want to provide plugins to CompanyBusinessUnitGui module"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyBusinessUnitGuiExtension module",
            "time": "2018-03-30T15:22:15+00:00"
        },
        {
            "name": "spryker/company-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-extension.git",
                "reference": "1be7153b1c666ca4858a83c775b761c9bddcb99f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-extension/zipball/1be7153b1c666ca4858a83c775b761c9bddcb99f",
                "reference": "1be7153b1c666ca4858a83c775b761c9bddcb99f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyExtension module",
            "time": "2018-03-13T18:47:20+00:00"
        },
        {
            "name": "spryker/company-gui",
            "version": "1.1.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-gui.git",
                "reference": "52e089231ec7df69e3cf0e97d3f2dab1e63ede2c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-gui/zipball/52e089231ec7df69e3cf0e97d3f2dab1e63ede2c",
                "reference": "52e089231ec7df69e3cf0e97d3f2dab1e63ede2c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company": "^1.0.0",
                "spryker/company-gui-extension": "^1.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyGui module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/company-gui-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-gui-extension.git",
                "reference": "62c056a004ac0dc6546aa8fce16e2f3bb0e806d4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-gui-extension/zipball/62c056a004ac0dc6546aa8fce16e2f3bb0e806d4",
                "reference": "62c056a004ac0dc6546aa8fce16e2f3bb0e806d4",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/gui": "^3.13.0",
                "spryker/symfony": "^3.0.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/company-gui": "If you want to provide plugins to CompanyGui module",
                "spryker/gui": "If you want to use CompanyGuiExtension module plugin interfaces which used Gui transfer object.",
                "spryker/symfony": "If you want to use CompanyGui plugins"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyGuiExtension module",
            "time": "2018-04-04T10:42:53+00:00"
        },
        {
            "name": "spryker/company-mail-connector",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-mail-connector.git",
                "reference": "89b478fd609b8bd0b3563b4b8f78ac22c4baf836"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-mail-connector/zipball/89b478fd609b8bd0b3563b4b8f78ac22c4baf836",
                "reference": "89b478fd609b8bd0b3563b4b8f78ac22c4baf836",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company-extension": "^1.0.0",
                "spryker/company-user": "^1.0.0 || ^2.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/mail": "^4.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyMailConnector module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/company-role",
            "version": "1.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-role.git",
                "reference": "2bb7f12c26814dcfa452accaa5ff4e4c80f3ed1d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-role/zipball/2bb7f12c26814dcfa452accaa5ff4e4c80f3ed1d",
                "reference": "2bb7f12c26814dcfa452accaa5ff4e4c80f3ed1d",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company": "^1.0.0",
                "spryker/company-extension": "^1.0.0",
                "spryker/company-user": "^1.0.0 || ^2.0.0",
                "spryker/company-user-extension": "^1.0.0",
                "spryker/customer": "^7.5.0",
                "spryker/kernel": "^3.0.0",
                "spryker/permission": "^1.2.0",
                "spryker/permission-extension": "^1.1.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\CompanyRole\\Helper\\": "tests/SprykerTest/Zed/CompanyRole/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyRole module",
            "time": "2018-11-01T11:34:16+00:00"
        },
        {
            "name": "spryker/company-supplier",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-supplier.git",
                "reference": "5324a20ee775fa353ecbf7dd1bdc86d9776d16f3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-supplier/zipball/5324a20ee775fa353ecbf7dd1bdc86d9776d16f3",
                "reference": "5324a20ee775fa353ecbf7dd1bdc86d9776d16f3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^6.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\CompanySupplier\\Helper\\": "tests/SprykerTest/Zed/CompanySupplier/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanySupplier module",
            "time": "2018-04-04T19:04:19+00:00"
        },
        {
            "name": "spryker/company-supplier-gui",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-supplier-gui.git",
                "reference": "908f88f628a7d2290e143b9a87266cbf55b42d34"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-supplier-gui/zipball/908f88f628a7d2290e143b9a87266cbf55b42d34",
                "reference": "908f88f628a7d2290e143b9a87266cbf55b42d34",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company-gui-extension": "^1.0.0",
                "spryker/company-supplier": "^1.0.0",
                "spryker/currency": "^3.0.0",
                "spryker/gui": "^3.13.0",
                "spryker/kernel": "^3.0.0",
                "spryker/money": "^2.0.0",
                "spryker/price-product": "^1.0.0 || ^2.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-management-extension": "^1.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/store": "^1.5.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/company": "*",
                "spryker/company-gui": "*"
            },
            "suggest": {
                "spryker/company": "If you want to use CompanyTableCompanyTypePlugin which used Company module entity map.",
                "spryker/company-gui": "If you want to provide plugins to CompanyGui module"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanySupplierGui module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/company-unit-address",
            "version": "1.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-unit-address.git",
                "reference": "5e33181d7180760f27845b2a43d18dfedd5a6014"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-unit-address/zipball/5e33181d7180760f27845b2a43d18dfedd5a6014",
                "reference": "5e33181d7180760f27845b2a43d18dfedd5a6014",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company": "^1.0.0",
                "spryker/company-business-unit": "^1.0.0 || ^2.0.0",
                "spryker/company-business-unit-extension": "^1.2.0",
                "spryker/company-unit-address-extension": "^1.0.0",
                "spryker/country": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\CompanyUnitAddress\\Helper\\": "tests/SprykerTest/Zed/CompanyUnitAddress/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyUnitAddress module",
            "time": "2018-11-01T16:59:56+00:00"
        },
        {
            "name": "spryker/company-unit-address-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-unit-address-extension.git",
                "reference": "391ebf532c3189d179f17a66ebe3820d49f8160b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-unit-address-extension/zipball/391ebf532c3189d179f17a66ebe3820d49f8160b",
                "reference": "391ebf532c3189d179f17a66ebe3820d49f8160b",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/symfony": "^3.0.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/symfony": "If you want to provide plugins to CompanyUnitAddress module"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyUnitAddressExtension module",
            "time": "2018-03-22T07:48:15+00:00"
        },
        {
            "name": "spryker/company-unit-address-gui",
            "version": "0.2.5",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-unit-address-gui.git",
                "reference": "1db9c429686dbc744c1a683cb593bd9bd76527ac"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-unit-address-gui/zipball/1db9c429686dbc744c1a683cb593bd9bd76527ac",
                "reference": "1db9c429686dbc744c1a683cb593bd9bd76527ac",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company": "^1.0.0",
                "spryker/company-business-unit-gui-extension": "^1.0.0",
                "spryker/company-unit-address": "^1.1.0",
                "spryker/company-unit-address-gui-extension": "^1.0.0",
                "spryker/country": "^3.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-text": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyUnitAddressGui module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/company-unit-address-gui-extension",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-unit-address-gui-extension.git",
                "reference": "d2abff7c2c83df54ec363f49cbf7ec5f9ad73bb4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-unit-address-gui-extension/zipball/d2abff7c2c83df54ec363f49cbf7ec5f9ad73bb4",
                "reference": "d2abff7c2c83df54ec363f49cbf7ec5f9ad73bb4",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/company-unit-address": "^1.2.0",
                "spryker/gui": "^3.13.0",
                "spryker/symfony": "^3.0.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/company-unit-address": "To get full functionality of the current module",
                "spryker/gui": "If you want to use CompanyUnitAddressGuiExtension module plugin interfaces which used Gui transfer object.",
                "spryker/symfony": "If you want to provide plugins to CompanyUnitAddressGui module"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyUnitAddressGuiExtension module",
            "time": "2018-04-04T10:42:53+00:00"
        },
        {
            "name": "spryker/company-unit-address-label",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-unit-address-label.git",
                "reference": "55ae18b742b84a82da4160938a8b509d7914a795"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-unit-address-label/zipball/55ae18b742b84a82da4160938a8b509d7914a795",
                "reference": "55ae18b742b84a82da4160938a8b509d7914a795",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company-unit-address": "^1.1.0",
                "spryker/company-unit-address-extension": "^1.0.0",
                "spryker/company-unit-address-gui-extension": "^1.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\CompanyUnitAddressLabel\\Helper\\": "tests/SprykerTest/Zed/CompanyUnitAddressLabel/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyUnitAddressLabel module",
            "time": "2018-04-04T12:07:30+00:00"
        },
        {
            "name": "spryker/company-unit-address-label-gui",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-unit-address-label-gui.git",
                "reference": "829d049e09b7517f296652ee8a895bfe00c41a6e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-unit-address-label-gui/zipball/829d049e09b7517f296652ee8a895bfe00c41a6e",
                "reference": "829d049e09b7517f296652ee8a895bfe00c41a6e",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company-unit-address-gui-extension": "^1.0.0",
                "spryker/company-unit-address-label": "^1.1.0",
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/company-unit-address": "*",
                "spryker/gui": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/company-unit-address": "If you want to use CompanyUnitAddressTableExpanderPlugin which used CompanyUnitAddress module entity map.",
                "spryker/gui": "If you want to use CompanyUnitAddressTableExpanderPlugin which used Gui transfer object."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyUnitAddressLabelGui module",
            "time": "2018-04-04T10:42:53+00:00"
        },
        {
            "name": "spryker/company-user",
            "version": "1.5.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-user.git",
                "reference": "ffe45b2fd57e02e5246704afe9b555a8c25fbaaf"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-user/zipball/ffe45b2fd57e02e5246704afe9b555a8c25fbaaf",
                "reference": "ffe45b2fd57e02e5246704afe9b555a8c25fbaaf",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company": "^1.0.0",
                "spryker/company-extension": "^1.0.0",
                "spryker/company-user-extension": "^1.0.0",
                "spryker/customer": "^7.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/permission-extension": "^1.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/permission": "Permission ^1.0.0 to have possibility use user permissions."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\CompanyUser\\Helper\\": "tests/SprykerTest/Shared/CompanyUser/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyUser module",
            "time": "2018-10-05T07:18:28+00:00"
        },
        {
            "name": "spryker/company-user-extension",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-user-extension.git",
                "reference": "35dc1d31347910185b45cceee1213dbfb6540849"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-user-extension/zipball/35dc1d31347910185b45cceee1213dbfb6540849",
                "reference": "35dc1d31347910185b45cceee1213dbfb6540849",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyUserExtension module",
            "time": "2018-10-30T12:43:40+00:00"
        },
        {
            "name": "spryker/company-user-gui-extension",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-user-gui-extension.git",
                "reference": "ca3a9c698aa09852d2d426e70b58c53d7bdb502a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-user-gui-extension/zipball/ca3a9c698aa09852d2d426e70b58c53d7bdb502a",
                "reference": "ca3a9c698aa09852d2d426e70b58c53d7bdb502a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/gui": "*",
                "spryker/symfony": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/gui": "If you want to use CompanyUserGuiExtension module plugin interfaces: ^3.13.1",
                "spryker/symfony": "If you want to use Step handler plugin."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyUserGuiExtension module",
            "time": "2018-12-20T12:46:33+00:00"
        },
        {
            "name": "spryker/company-user-invitation",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/company-user-invitation.git",
                "reference": "abedcdac82d254dc64567f9e5939923c516f1fa3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/company-user-invitation/zipball/abedcdac82d254dc64567f9e5939923c516f1fa3",
                "reference": "abedcdac82d254dc64567f9e5939923c516f1fa3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/application": "^3.9.0",
                "spryker/company-business-unit": "^1.1.0 || ^2.0.0",
                "spryker/company-user": "^1.0.0 || ^2.0.0",
                "spryker/customer-extension": "^1.0.0",
                "spryker/kernel": "^3.8.0",
                "spryker/mail": "^4.0.2",
                "spryker/permission-extension": "^1.0.0",
                "spryker/propel-orm": "^1.6.1",
                "spryker/util-text": "^1.2.1",
                "spryker/zed-request": "^3.4.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/company": "*",
                "spryker/company-role": "*",
                "spryker/customer": "*",
                "spryker/installer": "*",
                "spryker/permission": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/customer": "You need to have Customer installed create company users after registration",
                "spryker/installer": "You need to have Installer to set up values for invitation statuses",
                "spryker/silex": "You need to have Silex installed to use the Config Profiler",
                "spryker/twig": "You need to have Twig installed to use the Config Profiler"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\CompanyUserInvitation\\Helper\\": "tests/SprykerTest/Zed/CompanyUserInvitation/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CompanyUserInvitation module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/config",
            "version": "3.1.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/config.git",
                "reference": "a3cc0b997c0a752ee2454b6244acbd383966343b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/config/zipball/a3cc0b997c0a752ee2454b6244acbd383966343b",
                "reference": "a3cc0b997c0a752ee2454b6244acbd383966343b",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.8.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/twig": "*"
            },
            "suggest": {
                "spryker/silex": "You need to have Silex installed to use the Config Profiler",
                "spryker/twig": "You need to have Twig installed to use the Config Profiler"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Config\\Helper\\": "tests/SprykerTest/Shared/Config/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Config module",
            "time": "2018-03-22T16:25:55+00:00"
        },
        {
            "name": "spryker/console",
            "version": "4.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Console.git",
                "reference": "6236226914f051bb40946d5c3861c54d2aca7a2e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Console/zipball/6236226914f051bb40946d5c3861c54d2aca7a2e",
                "reference": "6236226914f051bb40946d5c3861c54d2aca7a2e",
                "shasum": ""
            },
            "require": {
                "spryker/config": "^3.0.0",
                "spryker/error-handler": "^2.0.0",
                "spryker/kernel": "^3.0.0",
                "symfony/console": "^2.6.13 || ^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/log": "^3.0.0",
                "spryker/propel-orm": "*",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/log": "If you want to use the Log feature in console commands, install this package and add ConsoleLogPlugin to the list of EventSubscriber in your ConsoleDependencyProvider."
            },
            "bin": [
                "bin/console"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Console module",
            "time": "2017-11-29T17:42:02+00:00"
        },
        {
            "name": "spryker/container",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/container.git",
                "reference": "e3154f6cc3c092e5133dd0abefe7a50d96827ab0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/container/zipball/e3154f6cc3c092e5133dd0abefe7a50d96827ab0",
                "reference": "e3154f6cc3c092e5133dd0abefe7a50d96827ab0",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "psr/container": "^1.0.0"
            },
            "conflict": {
                "pimple/pimple": "*",
                "silex/silex": "*",
                "spryker/pimple": "*"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                },
                "psr-0": {
                    "Pimple": "src/Spryker"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Container module",
            "time": "2019-01-25T17:11:22+00:00"
        },
        {
            "name": "spryker/country",
            "version": "3.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/country.git",
                "reference": "ff649871d151b76ce34cc2fba48c18c5ce65ab85"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/country/zipball/ff649871d151b76ce34cc2fba48c18c5ce65ab85",
                "reference": "ff649871d151b76ce34cc2fba48c18c5ce65ab85",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/installer": "*",
                "spryker/log": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/installer": "If you want to use Installer plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Country\\Helper\\": "tests/SprykerTest/Zed/Country/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Country module",
            "time": "2018-09-03T08:58:06+00:00"
        },
        {
            "name": "spryker/csv",
            "version": "3.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/csv.git",
                "reference": "d91fcc6cdcb3b727e17f0ce85e67610db6e57351"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/csv/zipball/d91fcc6cdcb3b727e17f0ce85e67610db6e57351",
                "reference": "d91fcc6cdcb3b727e17f0ce85e67610db6e57351",
                "shasum": ""
            },
            "require": {
                "league/csv": "^9.1",
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Csv module",
            "time": "2018-06-20T12:42:41+00:00"
        },
        {
            "name": "spryker/currency",
            "version": "3.5.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/currency.git",
                "reference": "8a227917c93d20867e366afc82ab2eb071ab049b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/currency/zipball/8a227917c93d20867e366afc82ab2eb071ab049b",
                "reference": "8a227917c93d20867e366afc82ab2eb071ab049b",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/currency-extension": "^1.0.0",
                "spryker/kernel": "^3.15.0",
                "spryker/messenger": "^3.1.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/quote-extension": "^1.0.0",
                "spryker/session": "^3.0.0 || ^4.0.0",
                "spryker/store": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/zed-request": "^3.2.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/twig": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use ServiceProvider.",
                "spryker/twig": "If you want to use currency in Twig."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Currency\\Helper\\": "tests/SprykerTest/Shared/Currency/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Currency module",
            "time": "2018-10-29T12:36:26+00:00"
        },
        {
            "name": "spryker/currency-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/currency-extension.git",
                "reference": "e82dca49a6e9a96dddebc87887d60b5c7f874350"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/currency-extension/zipball/e82dca49a6e9a96dddebc87887d60b5c7f874350",
                "reference": "e82dca49a6e9a96dddebc87887d60b5c7f874350",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CurrencyExtension module",
            "time": "2018-04-18T07:46:48+00:00"
        },
        {
            "name": "spryker/customer",
            "version": "7.16.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer.git",
                "reference": "111fa2b92bcd0381f06754ed1ce0108f06d1e75f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer/zipball/111fa2b92bcd0381f06754ed1ce0108f06d1e75f",
                "reference": "111fa2b92bcd0381f06754ed1ce0108f06d1e75f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/country": "^3.0.0",
                "spryker/customer-extension": "^1.1.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/mail": "^4.0.0",
                "spryker/propel": "^3.0.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/sequence-number": "^3.0.0",
                "spryker/session": "^3.0.0 || ^4.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-date-time": "^1.0.0",
                "spryker/util-sanitize": "^2.0.0",
                "spryker/util-text": "^1.1.0",
                "spryker/util-validate": "^1.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/checkout": "*",
                "spryker/sales": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "suggest": {
                "spryker/checkout": "If you want to use Checkout plugins.",
                "spryker/sales": "If you want customer information in sales."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Customer\\Helper\\": "tests/SprykerTest/Shared/Customer/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Customer module",
            "time": "2019-01-09T07:58:07+00:00"
        },
        {
            "name": "spryker/customer-access",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-access.git",
                "reference": "1d891d79fc9a27afa139525ff2d62c36e4718c11"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-access/zipball/1d891d79fc9a27afa139525ff2d62c36e4718c11",
                "reference": "1d891d79fc9a27afa139525ff2d62c36e4718c11",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.17.0",
                "spryker/propel-orm": "^1.5.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/installer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/installer": "If the installer for the customer access will be used, InstallerPluginInterface is needed"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\CustomerAccess\\Helper\\": "tests/SprykerTest/Zed/CustomerAccess/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerAccess module",
            "time": "2018-12-07T12:35:47+00:00"
        },
        {
            "name": "spryker/customer-access-gui",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-access-gui.git",
                "reference": "e326270fefc1adc019eccafb2fa05ff8707e5e3d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-access-gui/zipball/e326270fefc1adc019eccafb2fa05ff8707e5e3d",
                "reference": "e326270fefc1adc019eccafb2fa05ff8707e5e3d",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer-access": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerAccessGui module",
            "time": "2019-01-08T14:16:26+00:00"
        },
        {
            "name": "spryker/customer-access-permission",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-access-permission.git",
                "reference": "3180be9d73429e132f6c264f2e9d0008574bcfbe"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-access-permission/zipball/3180be9d73429e132f6c264f2e9d0008574bcfbe",
                "reference": "3180be9d73429e132f6c264f2e9d0008574bcfbe",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer": "^7.0.0",
                "spryker/customer-access-storage": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/permission-extension": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerAccessPermission module",
            "time": "2018-10-16T11:38:02+00:00"
        },
        {
            "name": "spryker/customer-access-storage",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-access-storage.git",
                "reference": "7b6d6253a0a5df4b1cff6aa8ce7c9056600f1551"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-access-storage/zipball/7b6d6253a0a5df4b1cff6aa8ce7c9056600f1551",
                "reference": "7b6d6253a0a5df4b1cff6aa8ce7c9056600f1551",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer-access": "^1.0.0",
                "spryker/kernel": "^3.17.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/storage": "^3.0.0",
                "spryker/synchronization": "^0.2.0 || ^1.0.0",
                "spryker/synchronization-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/propel": "*",
                "spryker/queue": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerAccessStorage module",
            "time": "2018-11-16T13:44:20+00:00"
        },
        {
            "name": "spryker/customer-api",
            "version": "0.1.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/CustomerApi.git",
                "reference": "4394c0ea129e26096625a471d837928a7a5d0e9c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/CustomerApi/zipball/4394c0ea129e26096625a471d837928a7a5d0e9c",
                "reference": "4394c0ea129e26096625a471d837928a7a5d0e9c",
                "shasum": ""
            },
            "require": {
                "spryker/api": "^0.1",
                "spryker/api-query-builder": "^0.1",
                "spryker/customer": "^4.3.0 || ^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.2.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-date-time": "^1.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/assertion": "*",
                "spryker/code-sniffer": "*",
                "spryker/config": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerApi module",
            "time": "2017-11-10T15:08:30+00:00"
        },
        {
            "name": "spryker/customer-catalog",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-catalog.git",
                "reference": "f7c4ac835797956303e00c4b9ae2d1aee3783a21"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-catalog/zipball/f7c4ac835797956303e00c4b9ae2d1aee3783a21",
                "reference": "f7c4ac835797956303e00c4b9ae2d1aee3783a21",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer": "^7.0.0",
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/elastica": "*",
                "spryker/search": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/elastica": "If you want to use Elastica plugins.",
                "spryker/search": "If you want to use Search plugins, minimum required version: 7.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerCatalog module",
            "time": "2018-08-06T14:30:50+00:00"
        },
        {
            "name": "spryker/customer-extension",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-extension.git",
                "reference": "8d180af73d93e0a5d8d235e2ed9dc23f96915eca"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-extension/zipball/8d180af73d93e0a5d8d235e2ed9dc23f96915eca",
                "reference": "8d180af73d93e0a5d8d235e2ed9dc23f96915eca",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerExtension module",
            "time": "2018-10-11T10:29:34+00:00"
        },
        {
            "name": "spryker/customer-group",
            "version": "2.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-group.git",
                "reference": "78f3c4eeede3c3eae585f3714b9b2e150d997a00"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-group/zipball/78f3c4eeede3c3eae585f3714b9b2e150d997a00",
                "reference": "78f3c4eeede3c3eae585f3714b9b2e150d997a00",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer": "^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-date-time": "^1.0.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\CustomerGroup\\Helper\\": "tests/SprykerTest/Zed/CustomerGroup/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerGroup module",
            "time": "2018-10-16T09:02:19+00:00"
        },
        {
            "name": "spryker/customer-group-discount-connector",
            "version": "2.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-group-discount-connector.git",
                "reference": "a21b9745258553596d14b25358c9ab93e23a0600"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-group-discount-connector/zipball/a21b9745258553596d14b25358c9ab93e23a0600",
                "reference": "a21b9745258553596d14b25358c9ab93e23a0600",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer-group": "^2.3.0",
                "spryker/discount": "^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerGroupDiscountConnector module",
            "time": "2018-11-19T14:34:38+00:00"
        },
        {
            "name": "spryker/customer-note",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-note.git",
                "reference": "4036c0bac8ec80abb0609a3235e86e3734fc5f6b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-note/zipball/4036c0bac8ec80abb0609a3235e86e3734fc5f6b",
                "reference": "4036c0bac8ec80abb0609a3235e86e3734fc5f6b",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer": "^7.1.0",
                "spryker/kernel": "^3.0.0",
                "spryker/user": "^1.0.0 || ^2.0.0 || ^3.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/assertion": "*",
                "spryker/code-sniffer": "*",
                "spryker/config": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "0.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\CustomerNote\\Helper\\": "tests/SprykerTest/Shared/CustomerNote/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerNote module",
            "time": "2018-03-13T17:39:52+00:00"
        },
        {
            "name": "spryker/customer-note-gui",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-note-gui.git",
                "reference": "ce927c5d4a46c4b316c5d40096f6023c88358e67"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-note-gui/zipball/ce927c5d4a46c4b316c5d40096f6023c88358e67",
                "reference": "ce927c5d4a46c4b316c5d40096f6023c88358e67",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer-note": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/customer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "0.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerNoteGui module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/customer-offer-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-offer-connector.git",
                "reference": "3bc324f7ac5194c855ab6be67f61fb4c372fbcaf"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-offer-connector/zipball/3bc324f7ac5194c855ab6be67f61fb4c372fbcaf",
                "reference": "3bc324f7ac5194c855ab6be67f61fb4c372fbcaf",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer": "^7.8.0",
                "spryker/kernel": "^3.0.0",
                "spryker/offer-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerOfferConnector module",
            "time": "2018-04-20T09:46:04+00:00"
        },
        {
            "name": "spryker/customer-user-connector",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/CustomerUserConnector.git",
                "reference": "303132410d1d31a8318a3a7a1361537e446956ca"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/CustomerUserConnector/zipball/303132410d1d31a8318a3a7a1361537e446956ca",
                "reference": "303132410d1d31a8318a3a7a1361537e446956ca",
                "shasum": ""
            },
            "require": {
                "spryker/customer": "^6.3.0 || ^7.0.0",
                "spryker/kernel": "^3.5.0",
                "spryker/user": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerUserConnector module",
            "time": "2017-11-23T12:28:31+00:00"
        },
        {
            "name": "spryker/customer-user-connector-gui",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/customer-user-connector-gui.git",
                "reference": "71c8b1de6d0a2d0e27530d7519e7e03b956df6fd"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/customer-user-connector-gui/zipball/71c8b1de6d0a2d0e27530d7519e7e03b956df6fd",
                "reference": "71c8b1de6d0a2d0e27530d7519e7e03b956df6fd",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer": "^6.3.0 || ^7.0.0",
                "spryker/customer-user-connector": "^1.0.0",
                "spryker/gui": "^3.10.0",
                "spryker/kernel": "^3.5.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/user": "^3.0.0",
                "spryker/user-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/util-text": "*"
            },
            "suggest": {
                "spryker/util-text": "If you want to use the UsersTableExpanderPlugin"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "CustomerUserConnectorGui module",
            "time": "2018-10-30T09:46:18+00:00"
        },
        {
            "name": "spryker/data-import",
            "version": "1.4.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/data-import.git",
                "reference": "d8adbb92ca47afb2897dfa722d44669eefb3f3c7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/data-import/zipball/d8adbb92ca47afb2897dfa722d44669eefb3f3c7",
                "reference": "d8adbb92ca47afb2897dfa722d44669eefb3f3c7",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/data-import-extension": "^1.0.0",
                "spryker/error-handler": "^2.1.0",
                "spryker/event": "^2.3.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^2.0.0 || ^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event-behavior": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/event-behavior": "To be able to use the DataImportEventBehaviorPlugin please install the spryker/event-behavior module, minimum required version: 0.1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\DataImport\\Helper\\": "tests/SprykerTest/Zed/DataImport/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "DataImport module",
            "time": "2018-11-03T19:21:57+00:00"
        },
        {
            "name": "spryker/data-import-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/data-import-extension.git",
                "reference": "c1f9b34012bb189fccb8000686395aac90a1542b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/data-import-extension/zipball/c1f9b34012bb189fccb8000686395aac90a1542b",
                "reference": "c1f9b34012bb189fccb8000686395aac90a1542b",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/data-import": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/data-import": "If you want to provide plugins to DataImport module"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "DataImportExtension module",
            "time": "2018-10-01T14:28:44+00:00"
        },
        {
            "name": "spryker/dataset",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/dataset.git",
                "reference": "772b6e8994f353f97b56fd6361ea60e71d069ad8"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/dataset/zipball/772b6e8994f353f97b56fd6361ea60e71d069ad8",
                "reference": "772b6e8994f353f97b56fd6361ea60e71d069ad8",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/csv": "^3.0.0",
                "spryker/gui": "^3.13.0",
                "spryker/kernel": "^3.16.0",
                "spryker/locale": "^3.1.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/symfony": "^3.1.2",
                "spryker/util-text": "^1.2.1"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Dataset module",
            "time": "2018-10-02T10:56:18+00:00"
        },
        {
            "name": "spryker/discount",
            "version": "7.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/discount.git",
                "reference": "145662f29aa661b2de61fb0dee8307b783a79751"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/discount/zipball/145662f29aa661b2de61fb0dee8307b783a79751",
                "reference": "145662f29aa661b2de61fb0dee8307b783a79751",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart-extension": "^1.0.0 || ^2.0.0",
                "spryker/currency": "^3.1.0",
                "spryker/discount-extension": "^1.0.0",
                "spryker/gui": "^3.7.0",
                "spryker/kernel": "^3.11.0",
                "spryker/log": "^3.0.0",
                "spryker/messenger": "^3.0.0",
                "spryker/money": "^2.0.0",
                "spryker/product-option": "^6.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/sales": "^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/store": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/checkout": "*",
                "spryker/code-sniffer": "*",
                "spryker/config": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "suggest": {
                "spryker/checkout": "If you want to use Checkout plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Discount\\Helper\\": "tests/SprykerTest/Shared/Discount/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Discount module",
            "time": "2019-01-16T15:45:32+00:00"
        },
        {
            "name": "spryker/discount-calculation-connector",
            "version": "5.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/discount-calculation-connector.git",
                "reference": "cc4ab7ffc6b241be7fafd4547ac1c748ae50bd3b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/discount-calculation-connector/zipball/cc4ab7ffc6b241be7fafd4547ac1c748ae50bd3b",
                "reference": "cc4ab7ffc6b241be7fafd4547ac1c748ae50bd3b",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/discount": "^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/calculation": "*"
            },
            "suggest": {
                "spryker/calculation": "If you want to use Calculation plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "DiscountCalculationConnector module",
            "time": "2018-11-19T14:34:38+00:00"
        },
        {
            "name": "spryker/discount-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/discount-extension.git",
                "reference": "16ac5bd816f6757b0dbcad3851bb2f7df30d133f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/discount-extension/zipball/16ac5bd816f6757b0dbcad3851bb2f7df30d133f",
                "reference": "16ac5bd816f6757b0dbcad3851bb2f7df30d133f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "DiscountExtension module",
            "time": "2018-06-19T11:09:44+00:00"
        },
        {
            "name": "spryker/discount-promotion",
            "version": "1.1.5",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/discount-promotion.git",
                "reference": "db82a90003f7762ed1766620a34b36cf5612d899"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/discount-promotion/zipball/db82a90003f7762ed1766620a34b36cf5612d899",
                "reference": "db82a90003f7762ed1766620a34b36cf5612d899",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/availability": "^5.0.3 || ^6.0.0",
                "spryker/cart-extension": "^1.0.0 || ^2.0.0",
                "spryker/discount": "^4.5.0 || ^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/persistent-cart-extension": "^1.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/calculation": "*",
                "spryker/cart": "*",
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/calculation": "Used by plugin to reset promotional items.",
                "spryker/cart": "Used by plugin to add promotional item identifier to group key."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "DiscountPromotion module",
            "time": "2018-11-19T14:34:38+00:00"
        },
        {
            "name": "spryker/documentation-generator-rest-api-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/documentation-generator-rest-api-extension.git",
                "reference": "fe6a4d0ed3d6d437b7498c59f35865ffd0eca221"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/documentation-generator-rest-api-extension/zipball/fe6a4d0ed3d6d437b7498c59f35865ffd0eca221",
                "reference": "fe6a4d0ed3d6d437b7498c59f35865ffd0eca221",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/glue-application-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "DocumentationGeneratorRestApiExtension module",
            "time": "2018-11-05T12:18:13+00:00"
        },
        {
            "name": "spryker/dummy-payment",
            "version": "2.5.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/dummy-payment.git",
                "reference": "74dfb9b2e44f34b85f3c4dacbea27755e2d0a931"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/dummy-payment/zipball/74dfb9b2e44f34b85f3c4dacbea27755e2d0a931",
                "reference": "74dfb9b2e44f34b85f3c4dacbea27755e2d0a931",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/checkout": "^3.0.0 || ^4.0.0",
                "spryker/kernel": "^3.31.0",
                "spryker/manual-order-entry-gui-extension": "^1.0.0",
                "spryker/oms": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/payment": "^3.0.0 || ^4.0.0",
                "spryker/refund": "^4.0.0 || ^5.0.0",
                "spryker/sales": "^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/step-engine": "^3.1.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/manual-order-entry-gui": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "DummyPayment module",
            "time": "2019-01-24T14:35:59+00:00"
        },
        {
            "name": "spryker/egulias",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Egulias.git",
                "reference": "154f30dd86390d29382936290b48c6891fef130f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Egulias/zipball/154f30dd86390d29382936290b48c6891fef130f",
                "reference": "154f30dd86390d29382936290b48c6891fef130f",
                "shasum": ""
            },
            "require": {
                "egulias/email-validator": "~2.1.2"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Egulias module",
            "time": "2017-11-09T13:55:22+00:00"
        },
        {
            "name": "spryker/elastica",
            "version": "4.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/elastica.git",
                "reference": "5bf51d5cb26434d2bf3cce6deddcff39526aefa4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/elastica/zipball/5bf51d5cb26434d2bf3cce6deddcff39526aefa4",
                "reference": "5bf51d5cb26434d2bf3cce6deddcff39526aefa4",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "ruflin/elastica": "~5.3.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Elastica module",
            "time": "2018-02-01T12:54:55+00:00"
        },
        {
            "name": "spryker/error-handler",
            "version": "2.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/error-handler.git",
                "reference": "bfd27fbc9ab81c609030b1836024971b8cfad2eb"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/error-handler/zipball/bfd27fbc9ab81c609030b1836024971b8cfad2eb",
                "reference": "bfd27fbc9ab81c609030b1836024971b8cfad2eb",
                "shasum": ""
            },
            "require": {
                "filp/whoops": "^2.1",
                "php": ">=7.1",
                "spryker/config": "^3.0.0",
                "spryker/log": "^3.0.0",
                "spryker/monitoring": "^1.0.0 || ^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use ServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ErrorHandler module",
            "time": "2018-10-29T12:36:26+00:00"
        },
        {
            "name": "spryker/event",
            "version": "2.4.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/event.git",
                "reference": "98a5d7954b4796a73dcc39f817ca58d7caa7468f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/event/zipball/98a5d7954b4796a73dcc39f817ca58d7caa7468f",
                "reference": "98a5d7954b4796a73dcc39f817ca58d7caa7468f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/error-handler": "^2.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/log": "^3.0.0",
                "spryker/monolog": "^2.0.0",
                "spryker/queue": "^1.1.0",
                "spryker/util-encoding": "^2.1.0"
            },
            "require-dev": {
                "spryker/propel": "^3.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Event module",
            "time": "2019-01-15T13:09:50+00:00"
        },
        {
            "name": "spryker/event-behavior",
            "version": "1.4.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/event-behavior.git",
                "reference": "3bda07a7ac5b6e8f65de70dfe348042f31023da4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/event-behavior/zipball/3bda07a7ac5b6e8f65de70dfe348042f31023da4",
                "reference": "3bda07a7ac5b6e8f65de70dfe348042f31023da4",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/event": "^2.4.0",
                "spryker/kernel": "^3.20.0",
                "spryker/propel-orm": "^1.6.0",
                "spryker/symfony": "^3.1.0",
                "spryker/util-encoding": "^2.1.0",
                "spryker/zend": "^2.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/config": "^3.1.0",
                "spryker/console": "^3.1.0 || ^4.0.0",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/console": "*",
                "spryker/silex": "^2.0.0"
            },
            "type": "propel-behavior",
            "extra": {
                "name": "event",
                "class": "\\Spryker\\Zed\\EventBehavior\\Persistence\\Propel\\Behavior\\EventBehavior",
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "include-path": [
                "src/"
            ],
            "license": [
                "proprietary"
            ],
            "description": "EventBehavior module",
            "time": "2019-01-18T15:14:18+00:00"
        },
        {
            "name": "spryker/event-journal",
            "version": "3.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/event-journal.git",
                "reference": "1d6f3adc99a688752c20f3b6722e4f52fc75af32"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/event-journal/zipball/1d6f3adc99a688752c20f3b6722e4f52fc75af32",
                "reference": "1d6f3adc99a688752c20f3b6722e4f52fc75af32",
                "shasum": ""
            },
            "require": {
                "spryker/config": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/new-relic-api": "^1.0.0",
                "spryker/util-network": "^1.1.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "EventJournal bundle",
            "time": "2017-02-22T12:08:46+00:00"
        },
        {
            "name": "spryker/file-manager",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/file-manager.git",
                "reference": "31a152b686816c8707a2665c3210b4032283801e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/file-manager/zipball/31a152b686816c8707a2665c3210b4032283801e",
                "reference": "31a152b686816c8707a2665c3210b4032283801e",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/file-system": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/flysystem": "*",
                "spryker/flysystem-local-file-system": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "FileManager module",
            "time": "2018-11-16T13:25:28+00:00"
        },
        {
            "name": "spryker/file-manager-data-import",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/file-manager-data-import.git",
                "reference": "48fd2a3c2390061c9a2f3dd9a37a7f95a652c822"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/file-manager-data-import/zipball/48fd2a3c2390061c9a2f3dd9a37a7f95a652c822",
                "reference": "48fd2a3c2390061c9a2f3dd9a37a7f95a652c822",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/data-import": "^1.3.0",
                "spryker/file-manager": "^1.0.0",
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/installer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\FileManagerDataImport\\Helper\\": "tests/SprykerTest/Zed/FileManagerDataImport/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "FileManagerDataImport module",
            "time": "2018-08-08T10:51:12+00:00"
        },
        {
            "name": "spryker/file-manager-gui",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/file-manager-gui.git",
                "reference": "3b4ffe4ea281309e787bc750ad9d5caa3605c7ef"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/file-manager-gui/zipball/3b4ffe4ea281309e787bc750ad9d5caa3605c7ef",
                "reference": "3b4ffe4ea281309e787bc750ad9d5caa3605c7ef",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/file-manager": "^1.0.0",
                "spryker/file-system": "^1.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-text": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "FileManagerGui module",
            "time": "2018-08-01T10:53:28+00:00"
        },
        {
            "name": "spryker/file-manager-storage",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/file-manager-storage.git",
                "reference": "ea65a203f9cc1d644b671afd2b47dd242a96acf5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/file-manager-storage/zipball/ea65a203f9cc1d644b671afd2b47dd242a96acf5",
                "reference": "ea65a203f9cc1d644b671afd2b47dd242a96acf5",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/event-behavior": "^1.0.0",
                "spryker/file-manager": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/synchronization": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "FileManagerStorage module",
            "time": "2019-01-14T20:51:51+00:00"
        },
        {
            "name": "spryker/file-system",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/FileSystem.git",
                "reference": "eaa99c62c76d8f5fc4e159ca3ce9855ca4642e67"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/FileSystem/zipball/eaa99c62c76d8f5fc4e159ca3ce9855ca4642e67",
                "reference": "eaa99c62c76d8f5fc4e159ca3ce9855ca4642e67",
                "shasum": ""
            },
            "require": {
                "spryker/flysystem": "^1.0.0",
                "spryker/kernel": "^3.5.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/flysystem-local-file-system": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/fly-system": "For filesystem handling via Flysystem library."
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "FileSystem module",
            "time": "2017-10-24T13:32:31+00:00"
        },
        {
            "name": "spryker/flysystem",
            "version": "1.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/flysystem.git",
                "reference": "4ec333b71ae49ed3993b93b2953d0c88e1d2fa8b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/flysystem/zipball/4ec333b71ae49ed3993b93b2953d0c88e1d2fa8b",
                "reference": "4ec333b71ae49ed3993b93b2953d0c88e1d2fa8b",
                "shasum": ""
            },
            "require": {
                "league/flysystem": "^1.0",
                "php": ">=7.1",
                "spryker/file-system": "^1.0.0",
                "spryker/kernel": "^3.5.0"
            },
            "require-dev": {
                "spryker/flysystem-local-file-system": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/flysystem-aws3v3-file-system": "For handling AWS3v3 filesystem.",
                "spryker/flysystem-ftp-file-system": "For handling FTP filesystem.",
                "spryker/flysystem-local-file-system": "For handling local files."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Flysystem module",
            "time": "2018-10-08T08:29:08+00:00"
        },
        {
            "name": "spryker/flysystem-aws3v3-file-system",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/flysystem-aws3v3-file-system.git",
                "reference": "b818d07dbae84d07a3f5ac41a1aa65b743b59ab3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/flysystem-aws3v3-file-system/zipball/b818d07dbae84d07a3f5ac41a1aa65b743b59ab3",
                "reference": "b818d07dbae84d07a3f5ac41a1aa65b743b59ab3",
                "shasum": ""
            },
            "require": {
                "league/flysystem-aws-s3-v3": "^1.0",
                "php": ">=7.1",
                "spryker/kernel": "^3.5.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/flysystem": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/flysystem": "Flysystem module"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "FlysystemAws3v3FileSystem module",
            "time": "2018-02-15T17:59:36+00:00"
        },
        {
            "name": "spryker/flysystem-ftp-file-system",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/FlysystemFtpFileSystem.git",
                "reference": "f697e5bff48e75652a7d389700ab501d4a1ccf8f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/FlysystemFtpFileSystem/zipball/f697e5bff48e75652a7d389700ab501d4a1ccf8f",
                "reference": "f697e5bff48e75652a7d389700ab501d4a1ccf8f",
                "shasum": ""
            },
            "require": {
                "league/flysystem": "^1.0",
                "spryker/kernel": "^3.5.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/flysystem": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/flysystem": "Flysystem module"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "FlysystemFtpFileSystem module",
            "time": "2017-10-25T08:03:49+00:00"
        },
        {
            "name": "spryker/flysystem-local-file-system",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/FlysystemLocalFileSystem.git",
                "reference": "c00835e434eaac58a326c254bb8bac81469f4f88"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/FlysystemLocalFileSystem/zipball/c00835e434eaac58a326c254bb8bac81469f4f88",
                "reference": "c00835e434eaac58a326c254bb8bac81469f4f88",
                "shasum": ""
            },
            "require": {
                "league/flysystem": "^1.0",
                "spryker/kernel": "^3.5.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/flysystem": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/flysystem": "Flysystem module"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "FlysystemLocalFileSystem module",
            "time": "2017-10-25T08:03:49+00:00"
        },
        {
            "name": "spryker/gift-card",
            "version": "1.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/gift-card.git",
                "reference": "759d489a5e488f52973e520b3d43e6180029155a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/gift-card/zipball/759d489a5e488f52973e520b3d43e6180029155a",
                "reference": "759d489a5e488f52973e520b3d43e6180029155a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/payment": "^4.0.0",
                "spryker/product": "^1.0.0 || ^2.0.0 || ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/sales": "^8.0.0",
                "spryker/symfony": "^3.1.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/calculation": "*",
                "spryker/cart": "^4.0.0 || ^5.0.0",
                "spryker/checkout": "^3.2.0 || ^4.0.0",
                "spryker/code-sniffer": "*",
                "spryker/discount": "^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/oms": "^7.0.0 || ^8.0.0",
                "spryker/propel": "^3.0.0",
                "spryker/shipment": "^6.2.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/calculation": "To correctly calculate gift card payments",
                "spryker/cart": "To expand information about gift card products",
                "spryker/checkout": "To save gift card payments using order savers",
                "spryker/discount": "If you want to make sure GiftCards have no Discount applied",
                "spryker/oms": "If you want to use OMS plugins",
                "spryker/shipment": "To filter shipment methods based on gift card rules"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\GiftCard\\Helper\\": "tests/SprykerTest/Zed/GiftCard/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "GiftCard module",
            "time": "2018-11-20T08:59:39+00:00"
        },
        {
            "name": "spryker/gift-card-balance",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/gift-card-balance.git",
                "reference": "3d710e89cb68dcc77cabbebeba8dafcbb9fe8bb1"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/gift-card-balance/zipball/3d710e89cb68dcc77cabbebeba8dafcbb9fe8bb1",
                "reference": "3d710e89cb68dcc77cabbebeba8dafcbb9fe8bb1",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/gift-card": "^1.0.0",
                "spryker/gui": "^3.12.0",
                "spryker/kernel": "^3.0.0",
                "spryker/money": "^2.3.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/sales": "^8.0.0",
                "spryker/symfony": "^3.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "GiftCardBalance module",
            "time": "2018-08-28T16:39:42+00:00"
        },
        {
            "name": "spryker/gift-card-mail-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/gift-card-mail-connector.git",
                "reference": "53630c030a8dce0267a994fde008ed8f853ab105"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/gift-card-mail-connector/zipball/53630c030a8dce0267a994fde008ed8f853ab105",
                "reference": "53630c030a8dce0267a994fde008ed8f853ab105",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer": "^6.2.0 || ^7.0.0",
                "spryker/gift-card": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/mail": "^4.0.0",
                "spryker/sales": "^8.6.0"
            },
            "require-dev": {
                "spryker/checkout": "*",
                "spryker/code-sniffer": "*",
                "spryker/oms": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/checkout": "If you want to use Checkout plugins (SendEmailToGiftCardUser)",
                "spryker/oms": "In case you will use commands (ShipGiftCardByEmailCommandPlugin)"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "GiftCardMailConnector module",
            "time": "2018-02-20T11:46:57+00:00"
        },
        {
            "name": "spryker/glossary",
            "version": "3.5.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/glossary.git",
                "reference": "a9736cdfbd34840d61a6ca4879170ccc78b57e4d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/glossary/zipball/a9736cdfbd34840d61a6ca4879170ccc78b57e4d",
                "reference": "a9736cdfbd34840d61a6ca4879170ccc78b57e4d",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/messenger": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/installer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/twig": "*",
                "spryker/zed-navigation": "*"
            },
            "suggest": {
                "spryker/installer": "If you want to use Installer plugins.",
                "spryker/twig": "If you want to use Twig with Gui."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Glossary module",
            "time": "2018-11-23T09:25:43+00:00"
        },
        {
            "name": "spryker/glue-application",
            "version": "1.11.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/glue-application.git",
                "reference": "e6c469b1c1ca61861cd47ebc0b688f80d5a3fd90"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/glue-application/zipball/e6c469b1c1ca61861cd47ebc0b688f80d5a3fd90",
                "reference": "e6c469b1c1ca61861cd47ebc0b688f80d5a3fd90",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/application": "^3.13.0",
                "spryker/documentation-generator-rest-api-extension": "^1.0.0",
                "spryker/glue-application-extension": "^1.1.0",
                "spryker/kernel": "^3.31.0",
                "spryker/log": "^3.0.0",
                "spryker/session": "^3.0.0 || ^4.0.0",
                "spryker/store": "^1.7.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-encoding": "^2.0.0",
                "willdurand/negotiation": "^2.3"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/config": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/config": "If you want to use Config.",
                "spryker/silex": "If you want to use ServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "GlueApplication module",
            "time": "2019-01-24T11:25:47+00:00"
        },
        {
            "name": "spryker/glue-application-extension",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/glue-application-extension.git",
                "reference": "05ed2530470c3e386047ba5a90533fd5e57492e4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/glue-application-extension/zipball/05ed2530470c3e386047ba5a90533fd5e57492e4",
                "reference": "05ed2530470c3e386047ba5a90533fd5e57492e4",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/glue-application": "*",
                "spryker/kernel": "*",
                "spryker/symfony": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/glue-application": "If you want to use plugins with glue application.",
                "spryker/kernel": "If you want to use kernel functionality with certain plugins",
                "spryker/symfony": "If you want to plugins with symfony components."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "GlueApplicationExtension module",
            "time": "2019-01-08T14:16:26+00:00"
        },
        {
            "name": "spryker/graph",
            "version": "3.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Graph.git",
                "reference": "9616836f46e536abcb93970497d25f0313da9547"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Graph/zipball/9616836f46e536abcb93970497d25f0313da9547",
                "reference": "9616836f46e536abcb93970497d25f0313da9547",
                "shasum": ""
            },
            "require": {
                "spryker/graphviz": "^2.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/",
                    "Function": "tests/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Graph bundle",
            "time": "2017-02-22T12:08:46+00:00"
        },
        {
            "name": "spryker/graphviz",
            "version": "2.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Graphviz.git",
                "reference": "0a90ede6aacfbd5e96f9fd61a52f4908f1b5e11d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Graphviz/zipball/0a90ede6aacfbd5e96f9fd61a52f4908f1b5e11d",
                "reference": "0a90ede6aacfbd5e96f9fd61a52f4908f1b5e11d",
                "shasum": ""
            },
            "require": {
                "phpdocumentor/graphviz": "^1.0.4"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Graphviz module",
            "time": "2017-08-02T16:31:17+00:00"
        },
        {
            "name": "spryker/gui",
            "version": "3.16.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/gui.git",
                "reference": "33da9d7e27be89c6c411d164c764653c8688d86c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/gui/zipball/33da9d7e27be89c6c411d164c764653c8688d86c",
                "reference": "33da9d7e27be89c6c411d164c764653c8688d86c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/twig": "^3.0.0",
                "spryker/util-sanitize": "^2.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use ServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Gui\\Helper\\": "tests/SprykerTest/Zed/Gui/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Gui module",
            "time": "2018-11-29T11:53:57+00:00"
        },
        {
            "name": "spryker/guzzle",
            "version": "2.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/guzzle.git",
                "reference": "617a11041763dd60738a5a978d54bbd5fc61513f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/guzzle/zipball/617a11041763dd60738a5a978d54bbd5fc61513f",
                "reference": "617a11041763dd60738a5a978d54bbd5fc61513f",
                "shasum": ""
            },
            "require": {
                "guzzlehttp/guzzle": "~6.3.0",
                "php": ">=7.1"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Guzzle module",
            "time": "2018-02-27T11:21:15+00:00"
        },
        {
            "name": "spryker/heartbeat",
            "version": "3.2.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/heartbeat.git",
                "reference": "738ef769450251e5e170b4244c32b25c8fb1ee43"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/heartbeat/zipball/738ef769450251e5e170b4244c32b25c8fb1ee43",
                "reference": "738ef769450251e5e170b4244c32b25c8fb1ee43",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/application": "^3.4.0",
                "spryker/config": "^3.0.0",
                "spryker/elastica": "^2.0.0 || ^3.0.0 || ^4.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/redis": "^2.0.0",
                "spryker/session": "^3.0.0 || ^4.0.0",
                "spryker/storage": "^3.2.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Heartbeat module",
            "time": "2018-10-29T12:36:26+00:00"
        },
        {
            "name": "spryker/install",
            "version": "0.5.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/install.git",
                "reference": "8c9c7d30e10c226de4729ee0211e7947c179fe30"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/install/zipball/8c9c7d30e10c226de4729ee0211e7947c179fe30",
                "reference": "8c9c7d30e10c226de4729ee0211e7947c179fe30",
                "shasum": ""
            },
            "require": {
                "monolog/monolog": "^1.23",
                "php": ">=7.1",
                "symfony/console": "^3.0.0",
                "symfony/process": "^3.0.0",
                "symfony/yaml": "^3.0.0"
            },
            "require-dev": {
                "codeception/codeception": "*",
                "php-coveralls/php-coveralls": "^1.0",
                "phpstan/phpstan": "^0.8.5",
                "spryker/code-sniffer": "dev-master as 1.0.0",
                "symfony/var-dumper": "^3.0.0"
            },
            "bin": [
                "bin/install"
            ],
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "Spryker install tool",
            "time": "2018-07-26T07:36:01+00:00"
        },
        {
            "name": "spryker/installer",
            "version": "4.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/installer.git",
                "reference": "7ff9b6841bc7e448cd66b5a6f7d73914d4ca5361"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/installer/zipball/7ff9b6841bc7e448cd66b5a6f7d73914d4ca5361",
                "reference": "7ff9b6841bc7e448cd66b5a6f7d73914d4ca5361",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Installer module",
            "time": "2018-09-03T14:04:14+00:00"
        },
        {
            "name": "spryker/invoice",
            "version": "2.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Invoice.git",
                "reference": "d472459b08520dbeb45ce7ea0f54079fbae16b2d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Invoice/zipball/d472459b08520dbeb45ce7ea0f54079fbae16b2d",
                "reference": "d472459b08520dbeb45ce7ea0f54079fbae16b2d",
                "shasum": ""
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Invoice bundle",
            "time": "2017-02-22T11:53:10+00:00"
        },
        {
            "name": "spryker/kernel",
            "version": "3.31.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/kernel.git",
                "reference": "4589ef96176fa1e78cc67a45a53da3cbcc0f93a6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/kernel/zipball/4589ef96176fa1e78cc67a45a53da3cbcc0f93a6",
                "reference": "4589ef96176fa1e78cc67a45a53da3cbcc0f93a6",
                "shasum": ""
            },
            "require": {
                "everon/collection": "^1.0.0",
                "php": ">=5.6.0",
                "spryker/config": "^3.0.0",
                "spryker/container": "^1.1.0",
                "spryker/error-handler": "^2.2.0",
                "spryker/propel-orm": "^1.6.0",
                "spryker/silex": "^2.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/zend": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "^3.3.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Kernel module",
            "time": "2019-01-25T08:10:20+00:00"
        },
        {
            "name": "spryker/key-builder",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/KeyBuilder.git",
                "reference": "cf9a19a226b6001d767f90f55cc795ba0af10943"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/KeyBuilder/zipball/cf9a19a226b6001d767f90f55cc795ba0af10943",
                "reference": "cf9a19a226b6001d767f90f55cc795ba0af10943",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "KeyBuilder module",
            "time": "2017-09-26T09:11:18+00:00"
        },
        {
            "name": "spryker/locale",
            "version": "3.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Locale.git",
                "reference": "069b0f291ebd59ddaaa0338acbc83406f9acb75b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Locale/zipball/069b0f291ebd59ddaaa0338acbc83406f9acb75b",
                "reference": "069b0f291ebd59ddaaa0338acbc83406f9acb75b",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/propel-orm": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/installer": "If you want to use Installer plugins you need to install spryker/installer."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Locale bundle",
            "time": "2017-06-16T09:45:17+00:00"
        },
        {
            "name": "spryker/log",
            "version": "3.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/log.git",
                "reference": "f66a7c85dd01fc14c0bc448366bde56cfd96c320"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/log/zipball/f66a7c85dd01fc14c0bc448366bde56cfd96c320",
                "reference": "f66a7c85dd01fc14c0bc448366bde56cfd96c320",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "psr/log": "~1.0.0",
                "spryker/config": "^3.0.0",
                "spryker/kernel": "^3.8.0",
                "spryker/monolog": "^2.0.0",
                "spryker/queue": "^0.3.0 || ^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-network": "^1.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use ServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Log module",
            "time": "2018-12-11T11:45:42+00:00"
        },
        {
            "name": "spryker/mail",
            "version": "4.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/mail.git",
                "reference": "168e9b2ca9ce22806b7bbdf6bb2604b58aac60d7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/mail/zipball/168e9b2ca9ce22806b7bbdf6bb2604b58aac60d7",
                "reference": "168e9b2ca9ce22806b7bbdf6bb2604b58aac60d7",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/glossary": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "swiftmailer/swiftmailer": "^5.4.5 || ^6.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/twig": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Mail module",
            "time": "2018-10-19T11:24:52+00:00"
        },
        {
            "name": "spryker/maintenance",
            "version": "3.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Maintenance.git",
                "reference": "e4235d9edf546f5c8ed13485e3048ee83427f991"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Maintenance/zipball/e4235d9edf546f5c8ed13485e3048ee83427f991",
                "reference": "e4235d9edf546f5c8ed13485e3048ee83427f991",
                "shasum": ""
            },
            "require": {
                "spryker/config": "^3.0.0",
                "spryker/error-handler": "^2.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Maintenance module",
            "time": "2017-11-27T14:09:45+00:00"
        },
        {
            "name": "spryker/mandrill",
            "version": "2.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Mandrill.git",
                "reference": "0973fea26836ae22f4a78575efecea5bacd6d9eb"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Mandrill/zipball/0973fea26836ae22f4a78575efecea5bacd6d9eb",
                "reference": "0973fea26836ae22f4a78575efecea5bacd6d9eb",
                "shasum": ""
            },
            "require": {
                "mandrill/mandrill": "~1.0.55"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "mandrill bundle",
            "time": "2016-04-01T13:06:05+00:00"
        },
        {
            "name": "spryker/manual-order-entry",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/manual-order-entry.git",
                "reference": "3ff135e691c1af56f4b8262b4d1cb1799ddc4dbf"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/manual-order-entry/zipball/3ff135e691c1af56f4b8262b4d1cb1799ddc4dbf",
                "reference": "3ff135e691c1af56f4b8262b4d1cb1799ddc4dbf",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.18.0",
                "spryker/symfony": "^3.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/sales": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/sales": "If you want to use PreSaveOrderHydratePluginInterface"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\ManualOrderEntry\\Helper\\": "tests/SprykerTest/Zed/ManualOrderEntry/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ManualOrderEntry module",
            "time": "2018-08-15T06:37:02+00:00"
        },
        {
            "name": "spryker/manual-order-entry-gui",
            "version": "0.5.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/manual-order-entry-gui.git",
                "reference": "eae8c0a945948b213007c7182c6c258a2c37c264"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/manual-order-entry-gui/zipball/eae8c0a945948b213007c7182c6c258a2c37c264",
                "reference": "eae8c0a945948b213007c7182c6c258a2c37c264",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/calculation": "^4.2.2",
                "spryker/cart": "^5.0.0",
                "spryker/checkout": "^4.1.0",
                "spryker/currency": "^3.1.0",
                "spryker/customer": "^7.1.0",
                "spryker/discount": "^6.1.0 || ^7.0.0",
                "spryker/gui": "^3.1.0",
                "spryker/kernel": "^3.18.0",
                "spryker/manual-order-entry": "^1.0.0",
                "spryker/manual-order-entry-gui-extension": "^1.0.0",
                "spryker/messenger": "^3.1.0",
                "spryker/money": "^2.1.0",
                "spryker/payment": "^4.1.0",
                "spryker/product": "^6.0.0",
                "spryker/sales": "^8.1.0",
                "spryker/shipment": "^6.1.0",
                "spryker/store": "^1.0.0",
                "spryker/symfony": "^3.1.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ManualOrderEntryGui module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/manual-order-entry-gui-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/manual-order-entry-gui-extension.git",
                "reference": "46efb708b7aba7b9e2c1b8a031ea6a6aaafc53e3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/manual-order-entry-gui-extension/zipball/46efb708b7aba7b9e2c1b8a031ea6a6aaafc53e3",
                "reference": "46efb708b7aba7b9e2c1b8a031ea6a6aaafc53e3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ManualOrderEntryGuiExtension module",
            "time": "2018-03-27T17:57:59+00:00"
        },
        {
            "name": "spryker/merchant",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/merchant.git",
                "reference": "263318ede3b4181a468766e32d8dad0c86a5f05f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/merchant/zipball/263318ede3b4181a468766e32d8dad0c86a5f05f",
                "reference": "263318ede3b4181a468766e32d8dad0c86a5f05f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/util-text": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Merchant\\Helper\\": "tests/SprykerTest/Zed/Merchant/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Merchant module",
            "time": "2018-11-19T09:29:22+00:00"
        },
        {
            "name": "spryker/merchant-relationship",
            "version": "1.5.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/merchant-relationship.git",
                "reference": "ebd9748637e2ca7b455217efa06287ca2af29623"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/merchant-relationship/zipball/ebd9748637e2ca7b455217efa06287ca2af29623",
                "reference": "ebd9748637e2ca7b455217efa06287ca2af29623",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company-business-unit": "^1.0.0 || ^2.0.0",
                "spryker/company-user-extension": "^1.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/merchant": "^1.1.0",
                "spryker/propel-orm": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\MerchantRelationship\\Helper\\": "tests/SprykerTest/Zed/MerchantRelationship/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "MerchantRelationship module",
            "time": "2018-11-19T09:29:22+00:00"
        },
        {
            "name": "spryker/merchant-relationship-product-list",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/merchant-relationship-product-list.git",
                "reference": "19d148e98948d0e6a634a4f36bbbd32026c1a821"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/merchant-relationship-product-list/zipball/19d148e98948d0e6a634a4f36bbbd32026c1a821",
                "reference": "19d148e98948d0e6a634a4f36bbbd32026c1a821",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.17.0",
                "spryker/merchant-relationship": "^1.0.0",
                "spryker/product-list": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/customer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/customer": "If you want to use Customer plugins, minimum required version: 7.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "MerchantRelationshipProductList module",
            "time": "2018-08-06T14:30:50+00:00"
        },
        {
            "name": "spryker/merchant-relationship-product-list-data-import",
            "version": "0.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/merchant-relationship-product-list-data-import.git",
                "reference": "40d03911316df7fb4065de5753199ad65e071a11"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/merchant-relationship-product-list-data-import/zipball/40d03911316df7fb4065de5753199ad65e071a11",
                "reference": "40d03911316df7fb4065de5753199ad65e071a11",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/data-import": "^1.3.0",
                "spryker/kernel": "^3.17.0",
                "spryker/merchant-relationship": "^1.0.0",
                "spryker/product-list": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/company-business-unit": "*",
                "spryker/merchant": "*",
                "spryker/product-list-data-import": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\MerchantRelationshipProductListDataImport\\Helper\\": "tests/SprykerTest/Zed/MerchantRelationshipProductListDataImport/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "MerchantRelationshipProductListDataImport module",
            "time": "2018-10-02T07:35:34+00:00"
        },
        {
            "name": "spryker/merchant-relationship-product-list-gui",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/merchant-relationship-product-list-gui.git",
                "reference": "dfe30bbdee291a043ee6a46153777fad032a4b84"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/merchant-relationship-product-list-gui/zipball/dfe30bbdee291a043ee6a46153777fad032a4b84",
                "reference": "dfe30bbdee291a043ee6a46153777fad032a4b84",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.17.0",
                "spryker/merchant-relationship": "^1.2.0",
                "spryker/product-list-gui-extension": "^1.1.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/gui": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/gui": "If you want to provide plugins for ProductListGui module. Minimum required version: ^1.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "MerchantRelationshipProductListGui module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/merchant-relationship-sales-order-threshold",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/merchant-relationship-sales-order-threshold.git",
                "reference": "b72ed853e77875c756ae12b4f4718118ebcc7fcd"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/merchant-relationship-sales-order-threshold/zipball/b72ed853e77875c756ae12b4f4718118ebcc7fcd",
                "reference": "b72ed853e77875c756ae12b4f4718118ebcc7fcd",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/currency": "^3.0.0",
                "spryker/glossary": "^3.1.0",
                "spryker/kernel": "^3.17.0",
                "spryker/merchant-relationship": "^1.0.0",
                "spryker/sales-order-threshold": "^1.0.0",
                "spryker/sales-order-threshold-extension": "^1.0.0",
                "spryker/store": "^1.2.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/company-business-unit": "*",
                "spryker/merchant": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\MerchantRelationshipSalesOrderThreshold\\Helper\\": "tests/SprykerTest/Zed/MerchantRelationshipSalesOrderThreshold/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "MerchantRelationshipSalesOrderThreshold module",
            "time": "2019-01-08T13:43:38+00:00"
        },
        {
            "name": "spryker/merchant-relationship-sales-order-threshold-gui",
            "version": "1.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/merchant-relationship-sales-order-threshold-gui.git",
                "reference": "ca2283512838508a1d0c389aa6affe503d1bff2d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/merchant-relationship-sales-order-threshold-gui/zipball/ca2283512838508a1d0c389aa6affe503d1bff2d",
                "reference": "ca2283512838508a1d0c389aa6affe503d1bff2d",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company": "^1.0.0",
                "spryker/company-business-unit": "^1.0.0 || ^2.0.0",
                "spryker/currency": "^3.1.0",
                "spryker/gui": "^3.1.0",
                "spryker/kernel": "^3.18.0",
                "spryker/locale": "^3.0.0",
                "spryker/merchant": "^1.0.0",
                "spryker/merchant-relationship": "^1.0.0",
                "spryker/merchant-relationship-sales-order-threshold": "^1.0.0",
                "spryker/merchant-relationship-sales-order-threshold-gui-extension": "^1.0.0",
                "spryker/money": "^2.1.0",
                "spryker/sales-order-threshold": "^1.0.0",
                "spryker/store": "^1.2.0",
                "spryker/symfony": "^3.1.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "MerchantRelationshipSalesOrderThresholdGui module",
            "time": "2019-01-08T14:16:26+00:00"
        },
        {
            "name": "spryker/merchant-relationship-sales-order-threshold-gui-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/merchant-relationship-sales-order-threshold-gui-extension.git",
                "reference": "920bb6a4f4e1b43971a52c807392be948a1efd96"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/merchant-relationship-sales-order-threshold-gui-extension/zipball/920bb6a4f4e1b43971a52c807392be948a1efd96",
                "reference": "920bb6a4f4e1b43971a52c807392be948a1efd96",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/symfony": "*"
            },
            "suggest": {
                "spryker/symfony": "If you want to use the form expander plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "MerchantRelationshipSalesOrderThresholdGuiExtension module",
            "time": "2018-12-04T14:58:56+00:00"
        },
        {
            "name": "spryker/messenger",
            "version": "3.1.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/messenger.git",
                "reference": "01c855b8bcb37f87a469632687601f5ad6ca0fea"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/messenger/zipball/01c855b8bcb37f87a469632687601f5ad6ca0fea",
                "reference": "01c855b8bcb37f87a469632687601f5ad6ca0fea",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/session": "^3.0.0 || ^4.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/silex": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use ServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Messenger module",
            "time": "2018-10-29T12:36:26+00:00"
        },
        {
            "name": "spryker/money",
            "version": "2.4.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/money.git",
                "reference": "5d3efd11da7c928e1af5e011bf99d88dbe7f29ce"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/money/zipball/5d3efd11da7c928e1af5e011bf99d88dbe7f29ce",
                "reference": "5d3efd11da7c928e1af5e011bf99d88dbe7f29ce",
                "shasum": ""
            },
            "require": {
                "moneyphp/money": "^3.0.0",
                "php": ">=7.1",
                "spryker/currency": "^2.0.0 || ^3.1.0",
                "spryker/kernel": "^3.11.0",
                "spryker/store": "^1.1.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/session": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/twig": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use ServiceProvider.",
                "spryker/twig": "If you want to use Money in Twig."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Money module",
            "time": "2018-10-17T12:31:46+00:00"
        },
        {
            "name": "spryker/monitoring",
            "version": "2.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/monitoring.git",
                "reference": "52c384c12344fb7bd58a4554498e4be8208f7526"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/monitoring/zipball/52c384c12344fb7bd58a4554498e4be8208f7526",
                "reference": "52c384c12344fb7bd58a4554498e4be8208f7526",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/monitoring-extension": "^1.0.0",
                "spryker/store": "^1.0.0",
                "spryker/util-network": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/silex": "^2.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use the Monitoring ServiceProvider, please add spryker/silex",
                "spryker/symfony": "If you want to use the Monitoring ServiceProvider, please add spryker/symfony"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Monitoring module",
            "time": "2018-10-29T12:36:27+00:00"
        },
        {
            "name": "spryker/monitoring-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/monitoring-extension.git",
                "reference": "dab766858ce64aa2176caeb3674c7691b9447f2d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/monitoring-extension/zipball/dab766858ce64aa2176caeb3674c7691b9447f2d",
                "reference": "dab766858ce64aa2176caeb3674c7691b9447f2d",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "MonitoringExtension module",
            "time": "2018-07-25T06:50:26+00:00"
        },
        {
            "name": "spryker/monolog",
            "version": "2.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Monolog.git",
                "reference": "d1c75126c08cfc38831750df9f6b0b70e412e73d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Monolog/zipball/d1c75126c08cfc38831750df9f6b0b70e412e73d",
                "reference": "d1c75126c08cfc38831750df9f6b0b70e412e73d",
                "shasum": ""
            },
            "require": {
                "monolog/monolog": "^1.21.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Monolog module",
            "time": "2017-08-02T16:31:17+00:00"
        },
        {
            "name": "spryker/navigation",
            "version": "2.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/navigation.git",
                "reference": "0aa68ccc2e9a9071547ad589965a2ff8af4871e3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/navigation/zipball/0aa68ccc2e9a9071547ad589965a2ff8af4871e3",
                "reference": "0aa68ccc2e9a9071547ad589965a2ff8af4871e3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/storage": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/twig": "^3.0.0",
                "spryker/url": "^3.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use the NavigationTwigServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Navigation\\Helper\\": "tests/SprykerTest/Zed/Navigation/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Navigation module",
            "time": "2018-09-07T16:45:12+00:00"
        },
        {
            "name": "spryker/navigation-collector",
            "version": "1.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/navigation-collector.git",
                "reference": "da2f69886ae26ce605c08824a616a576ad7388ea"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/navigation-collector/zipball/da2f69886ae26ce605c08824a616a576ad7388ea",
                "reference": "da2f69886ae26ce605c08824a616a576ad7388ea",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^5.1.1 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/navigation": "^1.0.0 || ^2.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "NavigationCollector module",
            "time": "2018-01-24T11:43:27+00:00"
        },
        {
            "name": "spryker/navigation-gui",
            "version": "2.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/navigation-gui.git",
                "reference": "4a40c7762c721affbf338d547888b81782fa6d7c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/navigation-gui/zipball/4a40c7762c721affbf338d547888b81782fa6d7c",
                "reference": "4a40c7762c721affbf338d547888b81782fa6d7c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/category": "^3.0.0 || ^4.0.0",
                "spryker/cms": "^4.0.0 || ^5.0.0 || ^6.0.0",
                "spryker/gui": "^3.13.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/navigation": "^2.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/url": "^3.1.0",
                "spryker/util-text": "^1.1.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "NavigationGui module",
            "time": "2018-10-02T11:39:06+00:00"
        },
        {
            "name": "spryker/new-relic",
            "version": "3.1.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/new-relic.git",
                "reference": "4373348ff2639eb1cafaa56e011e4800e0037b3e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/new-relic/zipball/4373348ff2639eb1cafaa56e011e4800e0037b3e",
                "reference": "4373348ff2639eb1cafaa56e011e4800e0037b3e",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/config": "^3.0.0",
                "spryker/guzzle": "^2.1.0",
                "spryker/kernel": "^3.0.0",
                "spryker/new-relic-api": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-network": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use ServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "NewRelic module",
            "time": "2018-07-16T16:21:26+00:00"
        },
        {
            "name": "spryker/new-relic-api",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/new-relic-api.git",
                "reference": "a6fe91219afe8e310e4a81126c93cfc01b35979e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/new-relic-api/zipball/a6fe91219afe8e310e4a81126c93cfc01b35979e",
                "reference": "a6fe91219afe8e310e4a81126c93cfc01b35979e",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/monitoring-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "NewRelicApi module",
            "time": "2018-07-25T06:50:29+00:00"
        },
        {
            "name": "spryker/newsletter",
            "version": "4.4.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/newsletter.git",
                "reference": "08c637bf65624106e9a1678d8c946afd24ae3c69"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/newsletter/zipball/08c637bf65624106e9a1678d8c946afd24ae3c69",
                "reference": "08c637bf65624106e9a1678d8c946afd24ae3c69",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer": "^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/glossary": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/mail": "^4.0.0",
                "spryker/util-text": "^1.1.0",
                "spryker/util-validate": "^1.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/installer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/installer": "If you want to use Installer plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Newsletter module",
            "time": "2018-12-03T17:27:47+00:00"
        },
        {
            "name": "spryker/nopayment",
            "version": "4.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/nopayment.git",
                "reference": "947f2bb802dd92db4727b4756ef6a9f4c2adc9cc"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/nopayment/zipball/947f2bb802dd92db4727b4756ef6a9f4c2adc9cc",
                "reference": "947f2bb802dd92db4727b4756ef6a9f4c2adc9cc",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/sales": "^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/oms": "*",
                "spryker/payment": "^4.0.0",
                "spryker/step-engine": "^3.1.0",
                "spryker/symfony": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/oms": "If you want to use Oms command plugins.",
                "spryker/payment": "If you want to use Payment command plugins.",
                "spryker/step-engine": "If you want to use Step engine command plugins.",
                "spryker/symfony": "If you want to use Step handler plugin."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Nopayment module",
            "time": "2018-02-21T16:07:28+00:00"
        },
        {
            "name": "spryker/oauth",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/oauth.git",
                "reference": "5692d1ee377ca073de2431a333533b89e4f0a76f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/oauth/zipball/5692d1ee377ca073de2431a333533b89e4f0a76f",
                "reference": "5692d1ee377ca073de2431a333533b89e4f0a76f",
                "shasum": ""
            },
            "require": {
                "league/oauth2-server": "^7.1",
                "php": ">=7.1",
                "spryker/config": "^3.0.0",
                "spryker/guzzle": "^2.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/oauth-extension": "^1.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Oauth module",
            "time": "2019-01-11T14:32:08+00:00"
        },
        {
            "name": "spryker/oauth-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/oauth-extension.git",
                "reference": "437b4f833b9268c7de8777969bee9be6dd8ae504"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/oauth-extension/zipball/437b4f833b9268c7de8777969bee9be6dd8ae504",
                "reference": "437b4f833b9268c7de8777969bee9be6dd8ae504",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "OauthExtension module",
            "time": "2018-07-11T08:13:38+00:00"
        },
        {
            "name": "spryker/offer",
            "version": "0.1.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/offer.git",
                "reference": "c27821eb22426476e8fd9c8479aa9aadcb269a09"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/offer/zipball/c27821eb22426476e8fd9c8479aa9aadcb269a09",
                "reference": "c27821eb22426476e8fd9c8479aa9aadcb269a09",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart": "^5.0.0",
                "spryker/customer": "^7.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/messenger": "^3.1.0",
                "spryker/offer-extension": "^1.0.0",
                "spryker/propel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/sales": "^8.10.0",
                "spryker/user": "^3.0.0",
                "spryker/util-encoding": "^2.0.1",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/calculation": "*",
                "spryker/checkout": "*",
                "spryker/code-sniffer": "*",
                "spryker/oms": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/calculation": "If you need offer items subtotal to be calculated",
                "spryker/checkout": "If you want to use checkout plugin from order module",
                "spryker/oms": "If you use offer state in you state machine, with commands and conditions from offer"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Offer\\Helper\\": "tests/SprykerTest/Zed/Offer/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Offer module",
            "time": "2018-06-07T08:07:35+00:00"
        },
        {
            "name": "spryker/offer-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/offer-extension.git",
                "reference": "e5182da6ed46ed502b8613131aac18d0232a37ab"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/offer-extension/zipball/e5182da6ed46ed502b8613131aac18d0232a37ab",
                "reference": "e5182da6ed46ed502b8613131aac18d0232a37ab",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "OfferExtension module",
            "time": "2018-04-02T08:43:05+00:00"
        },
        {
            "name": "spryker/offer-gui",
            "version": "0.1.7",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/offer-gui.git",
                "reference": "a2382e7b75fa0f10fdb4924f26cd283f4cdbccdf"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/offer-gui/zipball/a2382e7b75fa0f10fdb4924f26cd283f4cdbccdf",
                "reference": "a2382e7b75fa0f10fdb4924f26cd283f4cdbccdf",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart": "^5.0.0",
                "spryker/currency": "^3.3.0",
                "spryker/customer": "^7.8.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.20.0",
                "spryker/messenger": "^3.1.0",
                "spryker/money": "^2.0.0",
                "spryker/offer": "^0.1.0",
                "spryker/oms": "^8.0.0",
                "spryker/price": "^5.2.0",
                "spryker/session": "^3.0.0 || ^4.0.0",
                "spryker/store": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-date-time": "^1.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/util-sanitize": "^2.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/manual-order-entry-gui": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/calculation": "Recalculates prices for offer",
                "spryker/manual-order-entry-gui": "For order creation using offer quote transfer"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "OfferGui module",
            "time": "2018-10-29T12:36:26+00:00"
        },
        {
            "name": "spryker/oms",
            "version": "8.4.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/oms.git",
                "reference": "3208b48ec4aad892a16124895a7e7038a32f8950"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/oms/zipball/3208b48ec4aad892a16124895a7e7038a32f8950",
                "reference": "3208b48ec4aad892a16124895a7e7038a32f8950",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/graph": "^3.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/mail": "^4.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/sales": "^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/store": "^1.5.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-network": "^1.1.0",
                "spryker/util-sanitize": "^2.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/checkout": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/checkout": "If you want to use Checkout plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "6.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Oms\\Helper\\": "tests/SprykerTest/Zed/Oms/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Oms module",
            "time": "2018-11-17T15:40:05+00:00"
        },
        {
            "name": "spryker/oms-discount-connector",
            "version": "3.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/oms-discount-connector.git",
                "reference": "16e78b90bd36e48e5adb9e5d0f9f973b93fd0302"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/oms-discount-connector/zipball/16e78b90bd36e48e5adb9e5d0f9f973b93fd0302",
                "reference": "16e78b90bd36e48e5adb9e5d0f9f973b93fd0302",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/discount": "^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/oms": "*",
                "spryker/sales": "*"
            },
            "suggest": {
                "spryker/oms": "If you want to use Oms command plugins.",
                "spryker/sales": "If you want to use ReleaseUsedVoucherCodes plugin."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "OmsDiscountConnector module",
            "time": "2018-11-19T14:34:38+00:00"
        },
        {
            "name": "spryker/payment",
            "version": "4.4.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/payment.git",
                "reference": "ceeb2ca5357de318f94703808187ea47684b0edf"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/payment/zipball/ceeb2ca5357de318f94703808187ea47684b0edf",
                "reference": "ceeb2ca5357de318f94703808187ea47684b0edf",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/sales": "^8.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/calculation": "*",
                "spryker/checkout": "*",
                "spryker/installer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/calculation": "To correctly calculate multiple payment methods",
                "spryker/checkout": "If you want to use Checkout plugins.",
                "spryker/installer": "If you want to use Installer plugins: ^4.0.0."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Payment module",
            "time": "2019-01-22T10:51:57+00:00"
        },
        {
            "name": "spryker/payment-cart-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/PaymentCartConnector.git",
                "reference": "d854300db1c9121b5d318e989b725154fed123ef"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/PaymentCartConnector/zipball/d854300db1c9121b5d318e989b725154fed123ef",
                "reference": "d854300db1c9121b5d318e989b725154fed123ef",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.0.0"
            },
            "suggest": {
                "spryker/cart": "If you want to use Cart plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/",
                    "Function": "tests/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Payment cart connector module",
            "time": "2017-08-25T12:27:25+00:00"
        },
        {
            "name": "spryker/permission",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/permission.git",
                "reference": "a69bb14572e2ef9d21d1f50408d3e417d0b545f8"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/permission/zipball/a69bb14572e2ef9d21d1f50408d3e417d0b545f8",
                "reference": "a69bb14572e2ef9d21d1f50408d3e417d0b545f8",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/permission-extension": "^1.1.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/locale": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Permission\\Helper\\": "tests/SprykerTest/Zed/Permission/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Permission module",
            "time": "2018-09-19T08:50:08+00:00"
        },
        {
            "name": "spryker/permission-extension",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/permission-extension.git",
                "reference": "3c9472c7be78c64ad1fe7567c46b5dc5237dd70f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/permission-extension/zipball/3c9472c7be78c64ad1fe7567c46b5dc5237dd70f",
                "reference": "3c9472c7be78c64ad1fe7567c46b5dc5237dd70f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PermissionExtension module",
            "time": "2018-09-04T10:05:53+00:00"
        },
        {
            "name": "spryker/persistent-cart",
            "version": "1.5.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/persistent-cart.git",
                "reference": "2ce38eb515382f3f8b1c5f95bc036167adb3e6f2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/persistent-cart/zipball/2ce38eb515382f3f8b1c5f95bc036167adb3e6f2",
                "reference": "2ce38eb515382f3f8b1c5f95bc036167adb3e6f2",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart": "^5.0.0",
                "spryker/cart-extension": "^1.4.0 || ^2.0.0",
                "spryker/customer": "^6.0.0 || ^7.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/messenger": "^3.0.0",
                "spryker/persistent-cart-extension": "^1.0.0",
                "spryker/price-extension": "^1.0.0",
                "spryker/quote": "^2.4.0",
                "spryker/store": "^1.9.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PersistentCart module",
            "time": "2019-01-14T12:48:13+00:00"
        },
        {
            "name": "spryker/persistent-cart-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/persistent-cart-extension.git",
                "reference": "4ead8f41022bb25b57d3e7eccb6e3370a092122c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/persistent-cart-extension/zipball/4ead8f41022bb25b57d3e7eccb6e3370a092122c",
                "reference": "4ead8f41022bb25b57d3e7eccb6e3370a092122c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PersistentCartExtension module",
            "time": "2018-04-10T14:40:01+00:00"
        },
        {
            "name": "spryker/price",
            "version": "5.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price.git",
                "reference": "ca6d21cdefd83cedb8267647f8e054bdbb03e520"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price/zipball/ca6d21cdefd83cedb8267647f8e054bdbb03e520",
                "reference": "ca6d21cdefd83cedb8267647f8e054bdbb03e520",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/price-extension": "^1.0.0",
                "spryker/quote": "^1.2.0 || ^2.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/installer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/twig": "*"
            },
            "suggest": {
                "spryker/installer": "If you want to use Installer plugins.",
                "spryker/silex": "If you want to use ServiceProvider.",
                "spryker/twig": "If you want to use twig extension plugins"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Price module",
            "time": "2018-05-07T14:54:26+00:00"
        },
        {
            "name": "spryker/price-cart-connector",
            "version": "4.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-cart-connector.git",
                "reference": "60a277cebcb0478693942b2a4427cd5784d49a33"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-cart-connector/zipball/60a277cebcb0478693942b2a4427cd5784d49a33",
                "reference": "60a277cebcb0478693942b2a4427cd5784d49a33",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart-extension": "^2.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/messenger": "^3.0.0",
                "spryker/price": "^5.0.0",
                "spryker/price-product": "^1.3.0 || ^2.3.0"
            },
            "require-dev": {
                "spryker/calculation": "*",
                "spryker/cart": "*",
                "spryker/product": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/cart": "If you want to use Cart plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceCartConnector module",
            "time": "2018-10-30T10:14:21+00:00"
        },
        {
            "name": "spryker/price-data-feed",
            "version": "0.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-data-feed.git",
                "reference": "c794403c5b736fb2622130c52f14b0ad65c4055d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-data-feed/zipball/c794403c5b736fb2622130c52f14b0ad65c4055d",
                "reference": "c794403c5b736fb2622130c52f14b0ad65c4055d",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/price-product": "^1.0.0 || ^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceDataFeed module",
            "time": "2018-07-04T16:15:53+00:00"
        },
        {
            "name": "spryker/price-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-extension.git",
                "reference": "0a86d46536951a8618a4c51bdc7374efddbcf343"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-extension/zipball/0a86d46536951a8618a4c51bdc7374efddbcf343",
                "reference": "0a86d46536951a8618a4c51bdc7374efddbcf343",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceExtension module",
            "time": "2018-04-18T12:56:17+00:00"
        },
        {
            "name": "spryker/price-product",
            "version": "2.8.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-product.git",
                "reference": "9527547ebcca11e4fc8d8620d49f19d8398e210f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-product/zipball/9527547ebcca11e4fc8d8620d49f19d8398e210f",
                "reference": "9527547ebcca11e4fc8d8620d49f19d8398e210f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/currency": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/price": "^5.0.0",
                "spryker/price-product-extension": "^1.0.0",
                "spryker/product": "^5.6.0 || ^6.3.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/quote": "^2.1.0",
                "spryker/store": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/installer": "*",
                "spryker/price-product-storage": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/installer": "If you want to use default price product data installer"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\PriceProduct\\Helper\\": "tests/SprykerTest/Shared/PriceProduct/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceProduct module",
            "time": "2019-01-15T08:36:14+00:00"
        },
        {
            "name": "spryker/price-product-data-import",
            "version": "0.1.5",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-product-data-import.git",
                "reference": "80e43f492b72ec776ae312d7b14f5386897997e3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-product-data-import/zipball/80e43f492b72ec776ae312d7b14f5386897997e3",
                "reference": "80e43f492b72ec776ae312d7b14f5386897997e3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/currency": "^3.0.0",
                "spryker/data-import": "^1.2.0",
                "spryker/kernel": "^3.0.0",
                "spryker/price-product": "^1.0.0 || ^2.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/store": "^1.0.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\PriceProductDataImport\\Helper\\": "tests/SprykerTest/Zed/PriceProductDataImport/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "PriceProductDataImport module",
            "time": "2018-09-18T11:04:04+00:00"
        },
        {
            "name": "spryker/price-product-extension",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-product-extension.git",
                "reference": "29eb9c340a1adea0fe5d1fb53f5c0d67a03aa2e8"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-product-extension/zipball/29eb9c340a1adea0fe5d1fb53f5c0d67a03aa2e8",
                "reference": "29eb9c340a1adea0fe5d1fb53f5c0d67a03aa2e8",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceProductExtension module",
            "time": "2018-09-17T07:39:21+00:00"
        },
        {
            "name": "spryker/price-product-merchant-relationship",
            "version": "1.4.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-product-merchant-relationship.git",
                "reference": "1f0a836945902e184b7268c18b67ca7e346663a2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-product-merchant-relationship/zipball/1f0a836945902e184b7268c18b67ca7e346663a2",
                "reference": "1f0a836945902e184b7268c18b67ca7e346663a2",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart": "^5.1.0",
                "spryker/kernel": "^3.21.0",
                "spryker/merchant-relationship": "^1.4.0",
                "spryker/price-product": "^2.0.0",
                "spryker/price-product-extension": "^1.0.0",
                "spryker/product": "^6.1.0",
                "spryker/propel-orm": "^1.6.2",
                "spryker/symfony": "^3.1.5"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/company-business-unit": "*",
                "spryker/customer": "*",
                "spryker/merchant": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/customer": "If you want to use prices per customer functionality"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceProductMerchantRelationship module",
            "time": "2018-11-21T09:16:02+00:00"
        },
        {
            "name": "spryker/price-product-merchant-relationship-data-import",
            "version": "0.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-product-merchant-relationship-data-import.git",
                "reference": "95e9a265f328624e9a7d04840db165815d4842fe"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-product-merchant-relationship-data-import/zipball/95e9a265f328624e9a7d04840db165815d4842fe",
                "reference": "95e9a265f328624e9a7d04840db165815d4842fe",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/currency": "^3.0.0",
                "spryker/data-import": "^1.3.0",
                "spryker/kernel": "^3.0.0",
                "spryker/merchant-relationship": "^1.0.0",
                "spryker/price-product": "^2.0.0",
                "spryker/price-product-merchant-relationship": "^1.0.0",
                "spryker/product": "^6.0.0",
                "spryker/store": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/company-business-unit": "*",
                "spryker/merchant": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\PriceProductMerchantRelationshipDataImport\\Helper\\": "tests/SprykerTest/Zed/PriceProductMerchantRelationshipDataImport/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "PriceProductMerchantRelationshipDataImport module",
            "time": "2018-10-31T21:30:56+00:00"
        },
        {
            "name": "spryker/price-product-merchant-relationship-gui",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-product-merchant-relationship-gui.git",
                "reference": "c274f4920c1c307a3c2997ca372ffbb6c100e6e6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-product-merchant-relationship-gui/zipball/c274f4920c1c307a3c2997ca372ffbb6c100e6e6",
                "reference": "c274f4920c1c307a3c2997ca372ffbb6c100e6e6",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/merchant-relationship": "^1.4.0",
                "spryker/product-management-extension": "^1.2.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceProductMerchantRelationshipGui module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/price-product-merchant-relationship-storage",
            "version": "1.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-product-merchant-relationship-storage.git",
                "reference": "f79e83bc89494d235462f9bacbc787b389c4c55f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-product-merchant-relationship-storage/zipball/f79e83bc89494d235462f9bacbc787b389c4c55f",
                "reference": "f79e83bc89494d235462f9bacbc787b389c4c55f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/currency": "^3.0.0",
                "spryker/customer": "^7.10.0",
                "spryker/event-behavior": "^1.1.0",
                "spryker/kernel": "^3.0.0",
                "spryker/merchant-relationship": "^1.0.0",
                "spryker/price-product": "^2.0.0",
                "spryker/price-product-merchant-relationship": "^1.4.1",
                "spryker/price-product-storage-extension": "^1.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/store": "^1.0.0",
                "spryker/synchronization": "^0.2.0 || ^1.0.0",
                "spryker/synchronization-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceProductMerchantRelationshipStorage module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/price-product-storage",
            "version": "2.11.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-product-storage.git",
                "reference": "384f606790a9282f7a19253a9c4a56375c226ec2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-product-storage/zipball/384f606790a9282f7a19253a9c4a56375c226ec2",
                "reference": "384f606790a9282f7a19253a9c4a56375c226ec2",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/event-behavior": "^1.1.0",
                "spryker/kernel": "^3.21.0",
                "spryker/price-product": "^2.8.0",
                "spryker/price-product-storage-extension": "^1.0.0",
                "spryker/product": "^5.5.0 || ^6.0.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/storage": "^3.4.0",
                "spryker/store": "^1.7.0",
                "spryker/synchronization": "^0.2.0 || ^1.0.0",
                "spryker/synchronization-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/product-storage": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0",
                "spryker/product-storage": "If you want to use ProductStorage plugins, minimum required version: 0.1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceProductStorage module",
            "time": "2019-01-17T19:49:29+00:00"
        },
        {
            "name": "spryker/price-product-storage-extension",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-product-storage-extension.git",
                "reference": "8f8210e0992f6b6cf1eb54bca73950f13a621493"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-product-storage-extension/zipball/8f8210e0992f6b6cf1eb54bca73950f13a621493",
                "reference": "8f8210e0992f6b6cf1eb54bca73950f13a621493",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceProductStorageExtension module",
            "time": "2018-07-18T15:21:52+00:00"
        },
        {
            "name": "spryker/price-product-volume",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/price-product-volume.git",
                "reference": "ed50c88e5bca352b6d07e7e16d780a0ed4e4afa9"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/price-product-volume/zipball/ed50c88e5bca352b6d07e7e16d780a0ed4e4afa9",
                "reference": "ed50c88e5bca352b6d07e7e16d780a0ed4e4afa9",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.21.0",
                "spryker/locale": "^3.0.0",
                "spryker/price-product": "^2.1.0",
                "spryker/price-product-extension": "^1.1.0",
                "spryker/price-product-storage": "^2.1.0",
                "spryker/price-product-storage-extension": "^1.1.0",
                "spryker/product-storage": "^1.1.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PriceProductVolume module",
            "time": "2018-10-05T14:06:36+00:00"
        },
        {
            "name": "spryker/product",
            "version": "6.8.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product.git",
                "reference": "fd5e08404f9af11aea7ccd26270c98fc75be24ff"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product/zipball/fd5e08404f9af11aea7ccd26270c98fc75be24ff",
                "reference": "fd5e08404f9af11aea7ccd26270c98fc75be24ff",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/event": "^1.0.0 || ^2.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/store": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/url": "^3.2.1",
                "spryker/util-encoding": "^2.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Product\\Helper\\": "tests/SprykerTest/Shared/Product/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Product module",
            "time": "2019-01-17T11:09:57+00:00"
        },
        {
            "name": "spryker/product-abstract-data-feed",
            "version": "0.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-abstract-data-feed.git",
                "reference": "8ba2fd81bc6523db22308fac3a2721576778ed1f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-abstract-data-feed/zipball/8ba2fd81bc6523db22308fac3a2721576778ed1f",
                "reference": "8ba2fd81bc6523db22308fac3a2721576778ed1f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/stock": "^4.0.0 || ^5.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/locale": "^3.0.0",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductAbstractDataFeed module",
            "time": "2018-02-08T10:41:19+00:00"
        },
        {
            "name": "spryker/product-alternative",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-alternative.git",
                "reference": "c5f8c1e612834e3e81dd4ad8a54aaa98d4a7c749"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-alternative/zipball/c5f8c1e612834e3e81dd4ad8a54aaa98d4a7c749",
                "reference": "c5f8c1e612834e3e81dd4ad8a54aaa98d4a7c749",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/category": "^4.4.0",
                "spryker/kernel": "^3.20.0",
                "spryker/locale": "^3.1.0",
                "spryker/product": "^6.0.0",
                "spryker/product-alternative-extension": "^1.0.0",
                "spryker/propel-orm": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductAlternative module",
            "time": "2018-07-24T13:51:15+00:00"
        },
        {
            "name": "spryker/product-alternative-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-alternative-extension.git",
                "reference": "15b589fbff38a5bf5f258bdcfcc0ab008336e437"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-alternative-extension/zipball/15b589fbff38a5bf5f258bdcfcc0ab008336e437",
                "reference": "15b589fbff38a5bf5f258bdcfcc0ab008336e437",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductAlternativeExtension module",
            "time": "2018-07-24T08:04:43+00:00"
        },
        {
            "name": "spryker/product-alternative-gui",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-alternative-gui.git",
                "reference": "c89c0c07459474995930166e912c1a3b50bfc5b2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-alternative-gui/zipball/c89c0c07459474995930166e912c1a3b50bfc5b2",
                "reference": "c89c0c07459474995930166e912c1a3b50bfc5b2",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.28.0",
                "spryker/product": "^6.0.0",
                "spryker/product-alternative": "^1.0.0",
                "spryker/product-management-extension": "^1.1.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductAlternativeGui module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/product-alternative-product-label-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-alternative-product-label-connector.git",
                "reference": "5efb5fe12a47341eda54e7f3d46ff16d82cd0787"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-alternative-product-label-connector/zipball/5efb5fe12a47341eda54e7f3d46ff16d82cd0787",
                "reference": "5efb5fe12a47341eda54e7f3d46ff16d82cd0787",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product": "^6.2.0",
                "spryker/product-alternative": "^1.0.0",
                "spryker/product-alternative-extension": "^1.0.0",
                "spryker/product-label": "^2.5.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/installer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/installer": "If you want to use Installer plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\ProductAlternativeProductLabelConnector\\Helper\\": "tests/SprykerTest/Zed/ProductAlternativeProductLabelConnector/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductAlternativeProductLabelConnector module",
            "time": "2018-07-24T21:54:48+00:00"
        },
        {
            "name": "spryker/product-alternative-storage-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-alternative-storage-extension.git",
                "reference": "3f950c8120f7326a8ed8fc5004684f860f836682"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-alternative-storage-extension/zipball/3f950c8120f7326a8ed8fc5004684f860f836682",
                "reference": "3f950c8120f7326a8ed8fc5004684f860f836682",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductAlternativeStorageExtension module",
            "time": "2018-07-24T08:04:43+00:00"
        },
        {
            "name": "spryker/product-api",
            "version": "0.1.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-api.git",
                "reference": "d4e91e3e0834c91b7d684fb0d0c03e2508f8bef0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-api/zipball/d4e91e3e0834c91b7d684fb0d0c03e2508f8bef0",
                "reference": "d4e91e3e0834c91b7d684fb0d0c03e2508f8bef0",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/api": "^0.1",
                "spryker/api-query-builder": "^0.1",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.2.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-date-time": "^1.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/assertion": "*",
                "spryker/code-sniffer": "*",
                "spryker/config": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductApi module",
            "time": "2018-01-24T11:43:27+00:00"
        },
        {
            "name": "spryker/product-attribute",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-attribute.git",
                "reference": "e7ef7bf452152594b4b30e0f426b53434b59edb5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-attribute/zipball/e7ef7bf452152594b4b30e0f426b53434b59edb5",
                "reference": "e7ef7bf452152594b4b30e0f426b53434b59edb5",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/glossary": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product": "^5.2.0 || ^6.0.0",
                "spryker/propel-orm": "^1.2.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\ProductAttribute\\Helper\\": "tests/SprykerTest/Zed/ProductAttribute/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductAttribute module",
            "time": "2018-11-16T13:25:28+00:00"
        },
        {
            "name": "spryker/product-attribute-gui",
            "version": "1.0.7",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-attribute-gui.git",
                "reference": "a62b2c8f33730d8a0df163e0e7367de26aec1d29"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-attribute-gui/zipball/a62b2c8f33730d8a0df163e0e7367de26aec1d29",
                "reference": "a62b2c8f33730d8a0df163e0e7367de26aec1d29",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product": "^5.2.0 || ^6.0.0",
                "spryker/product-attribute": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-text": "^1.2.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductAttributeGui module",
            "time": "2018-10-02T13:51:34+00:00"
        },
        {
            "name": "spryker/product-bundle",
            "version": "4.8.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-bundle.git",
                "reference": "f860435eca3aba52e802d221c839a30d788a1dcb"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-bundle/zipball/f860435eca3aba52e802d221c839a30d788a1dcb",
                "reference": "f860435eca3aba52e802d221c839a30d788a1dcb",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/availability": "^5.0.1 || ^6.0.0",
                "spryker/cart-extension": "^1.0.0 || ^2.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/messenger": "^3.0.0",
                "spryker/persistent-cart-extension": "^1.0.0",
                "spryker/price": "^5.0.0",
                "spryker/price-product": "^1.0.0 || ^2.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-image": "^3.3.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/sales": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/shopping-list-extension": "^1.0.0",
                "spryker/stock": "^4.0.0 || ^5.0.0",
                "spryker/store": "^1.5.0"
            },
            "require-dev": {
                "spryker/calculation": "*",
                "spryker/cart": "*",
                "spryker/checkout": "*",
                "spryker/oms": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/calculation": "If you want to use Calculation plugins.",
                "spryker/cart": "If you want to use Cart plugins.",
                "spryker/checkout": "If you want to use Checkout plugins.",
                "spryker/oms": "If you want to use Oms plugins.",
                "spryker/sales-aggregator": "If you want to use SalesAggregator plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductBundle module",
            "time": "2019-01-16T15:45:32+00:00"
        },
        {
            "name": "spryker/product-cart-connector",
            "version": "4.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-cart-connector.git",
                "reference": "d73f2e81efc057c1db861dbe6952504b5f299bbc"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-cart-connector/zipball/d73f2e81efc057c1db861dbe6952504b5f299bbc",
                "reference": "d73f2e81efc057c1db861dbe6952504b5f299bbc",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/messenger": "^3.0.0",
                "spryker/product": "^6.1.0"
            },
            "require-dev": {
                "spryker/cart": "*",
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/propel-orm": "*",
                "spryker/silex": "*",
                "spryker/tax": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/cart": "If you want to use Cart plugins. Must be >= 4.0.2!"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductCartConnector module",
            "time": "2018-08-20T09:43:27+00:00"
        },
        {
            "name": "spryker/product-category",
            "version": "4.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-category.git",
                "reference": "adbd35650b7d8054a1420faeb61cc6650bcd1044"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-category/zipball/adbd35650b7d8054a1420faeb61cc6650bcd1044",
                "reference": "adbd35650b7d8054a1420faeb61cc6650bcd1044",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/category": "^3.2.0 || ^4.0.0",
                "spryker/event": "^1.0.0 || ^2.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/config": "*",
                "spryker/propel": "^3.0.0",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\ProductCategory\\Helper\\": "tests/SprykerTest/Zed/ProductCategory/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductCategory module",
            "time": "2018-10-24T10:03:42+00:00"
        },
        {
            "name": "spryker/product-category-filter",
            "version": "1.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-category-filter.git",
                "reference": "bd21b619f65ddcd09de92b9c58327e90c0071dd6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-category-filter/zipball/bd21b619f65ddcd09de92b9c58327e90c0071dd6",
                "reference": "bd21b619f65ddcd09de92b9c58327e90c0071dd6",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/category": "^4.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\ProductCategoryFilter\\Helper\\": "tests/SprykerTest/Zed/ProductCategoryFilter/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductCategoryFilter module",
            "time": "2018-08-13T10:09:37+00:00"
        },
        {
            "name": "spryker/product-category-filter-collector",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-category-filter-collector.git",
                "reference": "692b724491124705a83e296a8cebc61c33d5b645"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-category-filter-collector/zipball/692b724491124705a83e296a8cebc61c33d5b645",
                "reference": "692b724491124705a83e296a8cebc61c33d5b645",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^5.1.1 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product-category-filter": "^1.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductCategoryFilterCollector module",
            "time": "2018-01-24T11:43:27+00:00"
        },
        {
            "name": "spryker/product-category-filter-gui",
            "version": "1.1.8",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-category-filter-gui.git",
                "reference": "df8672ee0d04a23b50c0ab7a5d8008cf7c48fc1a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-category-filter-gui/zipball/df8672ee0d04a23b50c0ab7a5d8008cf7c48fc1a",
                "reference": "df8672ee0d04a23b50c0ab7a5d8008cf7c48fc1a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/catalog": "^5.0.0",
                "spryker/category": "^4.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-category": "^4.0.0",
                "spryker/product-category-filter": "^1.2.0",
                "spryker/product-search": "^5.3.0",
                "spryker/search": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductCategoryFilterGui module",
            "time": "2019-01-18T10:12:15+00:00"
        },
        {
            "name": "spryker/product-customer-permission",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-customer-permission.git",
                "reference": "0bdee0c10bdfd4c6b8fa323e0b9297e2847c1611"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-customer-permission/zipball/0bdee0c10bdfd4c6b8fa323e0b9297e2847c1611",
                "reference": "0bdee0c10bdfd4c6b8fa323e0b9297e2847c1611",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer": "^6.0.0 || ^7.0.0",
                "spryker/glossary": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0"
            },
            "require-dev": {
                "spryker/cart": "*",
                "spryker/checkout": "*",
                "spryker/code-sniffer": "*",
                "spryker/elastica": "*",
                "spryker/propel": "*",
                "spryker/search": "^6.0.0 || ^7.0.0 || ^8.0.0"
            },
            "suggest": {
                "spryker/cart": "*",
                "spryker/checkout": "*",
                "spryker/elastica": "*",
                "spryker/search": "*"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductCustomerPermission module",
            "time": "2018-03-09T07:57:08+00:00"
        },
        {
            "name": "spryker/product-customer-permission-collector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-customer-permission-collector.git",
                "reference": "885ed7ee810445f81803385d0aea3210df747902"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-customer-permission-collector/zipball/885ed7ee810445f81803385d0aea3210df747902",
                "reference": "885ed7ee810445f81803385d0aea3210df747902",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^5.0.0 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-customer-permission": "^1.0.0",
                "spryker/propel-orm": "^1.4.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductCustomerPermissionCollector module",
            "time": "2018-02-12T13:38:45+00:00"
        },
        {
            "name": "spryker/product-discontinued",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-discontinued.git",
                "reference": "bbb1c080197b0ea1d5f828f2d893e7acd803dfb6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-discontinued/zipball/bbb1c080197b0ea1d5f828f2d893e7acd803dfb6",
                "reference": "bbb1c080197b0ea1d5f828f2d893e7acd803dfb6",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/log": "^2.0.0 || ^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-alternative-extension": "^1.0.0",
                "spryker/product-discontinued-extension": "^1.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/shopping-list-extension": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/wishlist-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/cart": "*",
                "spryker/checkout": "*",
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/cart": "If you want to use Cart plugins.",
                "spryker/checkout": "If you want to use Checkout plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductDiscontinued module",
            "time": "2018-07-24T14:18:13+00:00"
        },
        {
            "name": "spryker/product-discontinued-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-discontinued-extension.git",
                "reference": "016710297d3606a869e2410635a12fa1c7d82892"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-discontinued-extension/zipball/016710297d3606a869e2410635a12fa1c7d82892",
                "reference": "016710297d3606a869e2410635a12fa1c7d82892",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductDiscontinuedExtension module",
            "time": "2018-07-24T08:04:43+00:00"
        },
        {
            "name": "spryker/product-discontinued-gui",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-discontinued-gui.git",
                "reference": "251d9a2832ccdff9408c7456a79fb755e21954f7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-discontinued-gui/zipball/251d9a2832ccdff9408c7456a79fb755e21954f7",
                "reference": "251d9a2832ccdff9408c7456a79fb755e21954f7",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product-discontinued": "^1.0.0",
                "spryker/product-management-extension": "^1.1.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductDiscontinuedGui module",
            "time": "2019-01-04T15:54:23+00:00"
        },
        {
            "name": "spryker/product-discontinued-product-bundle-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-discontinued-product-bundle-connector.git",
                "reference": "af8aedf55a549eba883d82aeb1a7dd74edca1c6a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-discontinued-product-bundle-connector/zipball/af8aedf55a549eba883d82aeb1a7dd74edca1c6a",
                "reference": "af8aedf55a549eba883d82aeb1a7dd74edca1c6a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/product-bundle": "^2.0.0 || ^3.0.0 || ^4.0.0",
                "spryker/product-discontinued": "^1.0.0",
                "spryker/product-discontinued-extension": "^1.0.0",
                "spryker/propel-orm": "^1.1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductDiscontinuedProductBundleConnector module",
            "time": "2018-07-24T08:04:43+00:00"
        },
        {
            "name": "spryker/product-discontinued-product-label-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-discontinued-product-label-connector.git",
                "reference": "5a64c97b29d68a8d81653c30a576463ff4f7d91e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-discontinued-product-label-connector/zipball/5a64c97b29d68a8d81653c30a576463ff4f7d91e",
                "reference": "5a64c97b29d68a8d81653c30a576463ff4f7d91e",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product": "^6.2.0",
                "spryker/product-discontinued": "^1.0.0",
                "spryker/product-discontinued-extension": "^1.0.0",
                "spryker/product-label": "^2.5.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/installer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/installer": "If you want to use Installer plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\ProductDiscontinuedProductLabelConnector\\Helper\\": "tests/SprykerTest/Zed/ProductDiscontinuedProductLabelConnector/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductDiscontinuedProductLabelConnector module",
            "time": "2018-07-24T21:54:48+00:00"
        },
        {
            "name": "spryker/product-discount-connector",
            "version": "3.2.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-discount-connector.git",
                "reference": "35c66c5ce6eacdcfec701e604ab7d35804928801"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-discount-connector/zipball/35c66c5ce6eacdcfec701e604ab7d35804928801",
                "reference": "35c66c5ce6eacdcfec701e604ab7d35804928801",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/discount": "^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/tax": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductDiscountConnector module",
            "time": "2018-11-19T14:34:38+00:00"
        },
        {
            "name": "spryker/product-group",
            "version": "1.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-group.git",
                "reference": "eb7e8998a648ef087740a13351d750ecd8c63b83"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-group/zipball/eb7e8998a648ef087740a13351d750ecd8c63b83",
                "reference": "eb7e8998a648ef087740a13351d750ecd8c63b83",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/storage": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/twig": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use the ProductGroupTwigServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\ProductGroup\\Helper\\": "tests/SprykerTest/Shared/ProductGroup/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductGroup module",
            "time": "2018-11-20T07:34:47+00:00"
        },
        {
            "name": "spryker/product-group-collector",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-group-collector.git",
                "reference": "a11e5c6c596f2a0008a4872660b2569218068f72"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-group-collector/zipball/a11e5c6c596f2a0008a4872660b2569218068f72",
                "reference": "a11e5c6c596f2a0008a4872660b2569218068f72",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^5.1.1 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product-group": "^1.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductGroupCollector module",
            "time": "2018-01-24T11:43:27+00:00"
        },
        {
            "name": "spryker/product-image",
            "version": "3.5.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-image.git",
                "reference": "87d5056ca0209d554b41091562111be606d98f03"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-image/zipball/87d5056ca0209d554b41091562111be606d98f03",
                "reference": "87d5056ca0209d554b41091562111be606d98f03",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\ProductImage\\Helper\\": "tests/SprykerTest/Shared/ProductImage/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductImage module",
            "time": "2018-11-20T07:34:47+00:00"
        },
        {
            "name": "spryker/product-image-cart-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/ProductImageCartConnector.git",
                "reference": "02a5f7aba00999072d4d2a69d0df9531779e240e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/ProductImageCartConnector/zipball/02a5f7aba00999072d4d2a69d0df9531779e240e",
                "reference": "02a5f7aba00999072d4d2a69d0df9531779e240e",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.0.0",
                "spryker/product-image": "^3.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/propel-orm": "*",
                "spryker/silex": "*",
                "spryker/tax": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/cart": "If you want to use Cart plugins you need to install spryker/cart."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Spryker": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductImageCartConnector module",
            "time": "2017-06-29T12:15:48+00:00"
        },
        {
            "name": "spryker/product-label",
            "version": "2.5.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-label.git",
                "reference": "d66a9eb44186a5fce2aad432f82547f1abfec715"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-label/zipball/d66a9eb44186a5fce2aad432f82547f1abfec715",
                "reference": "d66a9eb44186a5fce2aad432f82547f1abfec715",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.1.0",
                "spryker/log": "^2.0.0 || ^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/storage": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.1.0 || ^4.0.0",
                "spryker/twig": "^3.0.0"
            },
            "require-dev": {
                "spryker/catalog": "*",
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/search": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/catalog": "If you want to use Catalog plugins, minimum required version: 5.2.0.",
                "spryker/search": "(^6.4.0) If you want to use ProductLabelFacetValueTransformerPlugin.",
                "spryker/silex": "If you want to use the ProductLabelTwigServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\ProductLabel\\Helper\\": "tests/SprykerTest/Zed/ProductLabel/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductLabel module",
            "time": "2018-11-16T13:25:28+00:00"
        },
        {
            "name": "spryker/product-label-collector",
            "version": "1.1.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-label-collector.git",
                "reference": "315811d3780c50208abb68673276ed0de36ad6b1"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-label-collector/zipball/315811d3780c50208abb68673276ed0de36ad6b1",
                "reference": "315811d3780c50208abb68673276ed0de36ad6b1",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^5.1.1 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product-label": "^1.0.0 || ^2.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductLabelCollector module",
            "time": "2018-01-24T11:43:27+00:00"
        },
        {
            "name": "spryker/product-label-discount-connector",
            "version": "1.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-label-discount-connector.git",
                "reference": "cbf48136b5934ddd1c3b1985f781ec2ab57b1784"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-label-discount-connector/zipball/cbf48136b5934ddd1c3b1985f781ec2ab57b1784",
                "reference": "cbf48136b5934ddd1c3b1985f781ec2ab57b1784",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/discount": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product-label": "^1.1.0 || ^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/product": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductLabelDiscountConnector module",
            "time": "2018-11-19T14:34:38+00:00"
        },
        {
            "name": "spryker/product-label-gui",
            "version": "2.0.11",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-label-gui.git",
                "reference": "74da6cefa08070021930a2992ae0f875fa824ee3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-label-gui/zipball/74da6cefa08070021930a2992ae0f875fa824ee3",
                "reference": "74da6cefa08070021930a2992ae0f875fa824ee3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/category": "^3.2.0 || ^4.0.0",
                "spryker/gui": "^3.4.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/money": "^2.0.0",
                "spryker/price": "^5.0.0",
                "spryker/price-product": "^1.0.0 || ^2.0.0",
                "spryker/product": "^5.1.0 || ^6.0.0",
                "spryker/product-label": "^1.0.0 || ^2.0.0",
                "spryker/product-management": "^0.6.0 || ^0.7.0 || ^0.8.0 || ^0.9.0 || ^0.10.0 || ^0.11.0 || ^0.12.0 || ^0.13.0 || ^0.14.0 || ^0.15.0 || ^0.16.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductLabelGui module",
            "time": "2018-10-29T13:52:51+00:00"
        },
        {
            "name": "spryker/product-label-storage",
            "version": "1.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-label-storage.git",
                "reference": "25f834f2752fdf96455bff239c8bb4f77d948e4f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-label-storage/zipball/25f834f2752fdf96455bff239c8bb4f77d948e4f",
                "reference": "25f834f2752fdf96455bff239c8bb4f77d948e4f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/event-behavior": "^1.1.0",
                "spryker/kernel": "^3.21.0",
                "spryker/product": "^5.5.0 || ^6.0.0",
                "spryker/product-label": "^2.4.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/storage": "^3.4.0",
                "spryker/synchronization": "^0.2.0 || ^1.0.0",
                "spryker/synchronization-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/catalog": "*",
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/locale": "*",
                "spryker/product-attribute": "*",
                "spryker/propel": "*",
                "spryker/search": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/catalog": "If you want to use Catalog plugins, minimum required version: 5.2.0",
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0",
                "spryker/search": "If you want to use Search plugins, minimum required version: 7.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductLabelStorage module",
            "time": "2019-01-17T19:49:29+00:00"
        },
        {
            "name": "spryker/product-list",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-list.git",
                "reference": "fa7501a23b7e7df6f57c5a2e775a41e5de4fc1ca"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-list/zipball/fa7501a23b7e7df6f57c5a2e775a41e5de4fc1ca",
                "reference": "fa7501a23b7e7df6f57c5a2e775a41e5de4fc1ca",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart-extension": "^1.5.0 || ^2.1.0",
                "spryker/category": "^3.0.0 || ^4.0.0",
                "spryker/kernel": "^3.17.0",
                "spryker/messenger": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-category": "^4.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/util-text": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\ProductList\\Helper\\": "tests/SprykerTest/Zed/ProductList/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductList module",
            "time": "2018-10-31T12:24:05+00:00"
        },
        {
            "name": "spryker/product-list-gui",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-list-gui.git",
                "reference": "5d337d8c28cb1ac41c2a6f8f94ee87c05bdbfb31"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-list-gui/zipball/5d337d8c28cb1ac41c2a6f8f94ee87c05bdbfb31",
                "reference": "5d337d8c28cb1ac41c2a6f8f94ee87c05bdbfb31",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/category": "^4.6.0",
                "spryker/gui": "^3.13.0",
                "spryker/kernel": "^3.17.0",
                "spryker/locale": "^3.1.0",
                "spryker/product": "^6.4.0",
                "spryker/product-list": "^1.0.0",
                "spryker/product-list-gui-extension": "^1.1.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-csv": "^1.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/merchant-relationship-product-list-gui": "If you want to use MerchantRelationshipProductListGui plugins. Minimum required version: ^1.1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductListGui module",
            "time": "2019-01-10T15:43:38+00:00"
        },
        {
            "name": "spryker/product-list-gui-extension",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-list-gui-extension.git",
                "reference": "14f8b55f40470428980211d1566a987123160166"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-list-gui-extension/zipball/14f8b55f40470428980211d1566a987123160166",
                "reference": "14f8b55f40470428980211d1566a987123160166",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/gui": "*",
                "spryker/symfony": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/gui": "If you want to use ProductListGui plugins. Minimum required version: ^1.0.0",
                "spryker/symfony": "Required to use form in plugin"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductListGuiExtension module",
            "time": "2018-11-19T12:14:21+00:00"
        },
        {
            "name": "spryker/product-management",
            "version": "0.15.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-management.git",
                "reference": "38e33d086f04dce88088e93dbdc5a6a05ab5431e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-management/zipball/38e33d086f04dce88088e93dbdc5a6a05ab5431e",
                "reference": "38e33d086f04dce88088e93dbdc5a6a05ab5431e",
                "shasum": ""
            },
            "require": {
                "everon/collection": "^1.0.0",
                "php": ">=7.1",
                "spryker/availability": "^6.0.0",
                "spryker/category": "^3.0.0 || ^4.0.0",
                "spryker/currency": "^2.1.0 || ^3.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.13.0",
                "spryker/locale": "^3.0.0",
                "spryker/money": "^2.4.0",
                "spryker/price": "^5.0.0",
                "spryker/price-product": "^2.0.0",
                "spryker/product": "^6.7.0",
                "spryker/product-attribute": "^1.1.0",
                "spryker/product-bundle": "^2.0.0 || ^3.0.0 || ^4.0.0",
                "spryker/product-category": "^4.6.0",
                "spryker/product-group": "^1.0.0",
                "spryker/product-image": "^3.0.0",
                "spryker/product-management-extension": "^1.2.0",
                "spryker/product-validity": "^1.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/stock": "^5.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/tax": "^4.0.0 || ^5.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/config": "*",
                "spryker/propel": "*",
                "spryker/store": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductManagement module",
            "time": "2018-11-03T13:57:37+00:00"
        },
        {
            "name": "spryker/product-management-extension",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-management-extension.git",
                "reference": "c0993b0e9ca1f9dbcf7dd2107df33e229c7672fe"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-management-extension/zipball/c0993b0e9ca1f9dbcf7dd2107df33e229c7672fe",
                "reference": "c0993b0e9ca1f9dbcf7dd2107df33e229c7672fe",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/symfony": "^3.0.0"
            },
            "suggest": {
                "spryker/symfony": ""
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductManagementExtension module",
            "time": "2018-10-18T11:06:54+00:00"
        },
        {
            "name": "spryker/product-new",
            "version": "1.1.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-new.git",
                "reference": "0089688f4abb8a7fdf3bf81ab2470f4eb1700b34"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-new/zipball/0089688f4abb8a7fdf3bf81ab2470f4eb1700b34",
                "reference": "0089688f4abb8a7fdf3bf81ab2470f4eb1700b34",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-label": "^2.1.0",
                "spryker/product-label-storage": "^0.1.0 || ^1.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/search": "^7.0.0 || ^8.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/elastica": "*",
                "spryker/propel": "^3.0.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/elastica": "If you want to use Elastica plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductNew module",
            "time": "2018-10-04T15:21:15+00:00"
        },
        {
            "name": "spryker/product-option",
            "version": "6.6.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-option.git",
                "reference": "fc11defe714e728719f5cf22d90f29f7fce85951"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-option/zipball/fc11defe714e728719f5cf22d90f29f7fce85951",
                "reference": "fc11defe714e728719f5cf22d90f29f7fce85951",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/country": "^3.0.0",
                "spryker/currency": "^3.0.0",
                "spryker/event": "^2.1.0",
                "spryker/glossary": "^3.0.0",
                "spryker/gui": "^3.7.0",
                "spryker/kernel": "^3.15.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/money": "^2.4.0",
                "spryker/price": "^5.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/sales": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/store": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/tax": "^5.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/calculation": "*",
                "spryker/checkout": "*",
                "spryker/config": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "suggest": {
                "spryker/calculation": "If tax rate calculation for options is needed.",
                "spryker/checkout": "If checkout plugins are needed."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\ProductOption\\Helper\\": "tests/SprykerTest/Shared/ProductOption/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductOption module",
            "time": "2019-01-21T12:35:39+00:00"
        },
        {
            "name": "spryker/product-option-cart-connector",
            "version": "5.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-option-cart-connector.git",
                "reference": "18c26ba0d4f87423c5e53b13050d478c1bc70642"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-option-cart-connector/zipball/18c26ba0d4f87423c5e53b13050d478c1bc70642",
                "reference": "18c26ba0d4f87423c5e53b13050d478c1bc70642",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart-extension": "^2.1.0",
                "spryker/kernel": "^3.0.0",
                "spryker/price": "^5.0.0",
                "spryker/product-option": "^6.6.0"
            },
            "require-dev": {
                "spryker/cart": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/cart": "If you want to use Cart plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductOptionCartConnector module",
            "time": "2018-11-19T10:36:01+00:00"
        },
        {
            "name": "spryker/product-page-search",
            "version": "2.6.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-page-search.git",
                "reference": "250c446e7b7dbe9036b838c9973ce2739a51e23a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-page-search/zipball/250c446e7b7dbe9036b838c9973ce2739a51e23a",
                "reference": "250c446e7b7dbe9036b838c9973ce2739a51e23a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/catalog-price-product-connector": "^1.1.0",
                "spryker/category": "^4.3.0",
                "spryker/error-handler": "^2.0.0",
                "spryker/event-behavior": "^1.1.0",
                "spryker/kernel": "^3.21.0",
                "spryker/price": "^5.3.0",
                "spryker/price-product": "^1.1.0 || ^2.1.0",
                "spryker/product": "^5.5.0 || ^6.0.0",
                "spryker/product-category": "^4.5.0",
                "spryker/product-image": "^3.5.0",
                "spryker/product-page-search-extension": "^1.0.0",
                "spryker/product-search": "^5.5.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/search": "^7.0.0 || ^8.0.0",
                "spryker/store": "^1.7.0",
                "spryker/synchronization-extension": "^1.0.0",
                "spryker/url": "^3.3.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/util-sanitize": "^2.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/locale": "*",
                "spryker/product-attribute": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductPageSearch module",
            "time": "2018-12-17T16:51:31+00:00"
        },
        {
            "name": "spryker/product-page-search-extension",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-page-search-extension.git",
                "reference": "8273a03048950a20401642140ea078f3d7e36822"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-page-search-extension/zipball/8273a03048950a20401642140ea078f3d7e36822",
                "reference": "8273a03048950a20401642140ea078f3d7e36822",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/search": "If you want to use ProductConcretePageMapExpanderPluginInterface: ^1.0.0."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductPageSearchExtension module",
            "time": "2018-12-12T11:22:13+00:00"
        },
        {
            "name": "spryker/product-relation",
            "version": "2.1.7",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-relation.git",
                "reference": "709debf6ee2f3af4d9071d0123e78df03c0ccda6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-relation/zipball/709debf6ee2f3af4d9071d0123e78df03c0ccda6",
                "reference": "709debf6ee2f3af4d9071d0123e78df03c0ccda6",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/application": "^3.0.0",
                "spryker/category": "^3.0.0 || ^4.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/log": "^3.0.0",
                "spryker/money": "^2.0.0",
                "spryker/price-product": "^1.0.0 || ^2.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-category": "^4.0.0",
                "spryker/product-image": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/propel-query-builder": "^0.1.1 || ^0.2.0 || ^0.3.0",
                "spryker/storage": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/url": "^3.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/util-text": "^1.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/twig": "*",
                "spryker/zed-navigation": "*"
            },
            "suggest": {
                "spryker/event": "Required to listen for changes affecting product relations.",
                "spryker/silex": "Required by product relation Twig component.",
                "spryker/twig": "Required because of the product relation component."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\ProductRelation\\Helper\\": "tests/SprykerTest/Shared/ProductRelation/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductRelation module",
            "time": "2018-11-20T07:34:47+00:00"
        },
        {
            "name": "spryker/product-relation-collector",
            "version": "2.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-relation-collector.git",
                "reference": "a29672dc24fe0818fc74c74fb2a3e83a34539051"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-relation-collector/zipball/a29672dc24fe0818fc74c74fb2a3e83a34539051",
                "reference": "a29672dc24fe0818fc74c74fb2a3e83a34539051",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^5.1.1 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/price-product": "^1.0.0 || ^2.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-image": "^3.0.0",
                "spryker/product-relation": "^1.0.0 || ^2.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/url": "^3.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductRelationCollector module",
            "time": "2018-07-04T16:15:53+00:00"
        },
        {
            "name": "spryker/product-review",
            "version": "2.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-review.git",
                "reference": "2d22334fd4cb27dd62b9fc55793443676347e7d5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-review/zipball/2d22334fd4cb27dd62b9fc55793443676347e7d5",
                "reference": "2d22334fd4cb27dd62b9fc55793443676347e7d5",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.1.0",
                "spryker/product": "^5.2.0 || ^6.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/search": "^6.3.0 || ^7.0.0 || ^8.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/touch": "^3.1.0 || ^4.0.0",
                "spryker/twig": "^3.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/catalog": "*",
                "spryker/code-sniffer": "*",
                "spryker/customer": "*",
                "spryker/elastica": "*",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/catalog": "If you want to use Catalog plugins, minimum required version: 5.2.0.",
                "spryker/elastica": "Allow sending log messages to an Elastic Search server.",
                "spryker/silex": "If you want to use ServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\ProductReview\\Helper\\": "tests/SprykerTest/Shared/ProductReview/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductReview module",
            "time": "2018-09-07T11:05:09+00:00"
        },
        {
            "name": "spryker/product-review-collector",
            "version": "1.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-review-collector.git",
                "reference": "a78c2d9411b17452a227c128c162689af1561949"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-review-collector/zipball/a78c2d9411b17452a227c128c162689af1561949",
                "reference": "a78c2d9411b17452a227c128c162689af1561949",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^5.5.0 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product-review": "^1.0.0 || ^2.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/search": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductReviewCollector module",
            "time": "2018-03-09T07:57:08+00:00"
        },
        {
            "name": "spryker/product-review-gui",
            "version": "1.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-review-gui.git",
                "reference": "5a64d52f7e11ac289d1ea21ab14a28706c3d6e42"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-review-gui/zipball/5a64d52f7e11ac289d1ea21ab14a28706c3d6e42",
                "reference": "5a64d52f7e11ac289d1ea21ab14a28706c3d6e42",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/customer": "^6.0.0 || ^7.0.0",
                "spryker/gui": "^3.9.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.1.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-review": "^1.0.0 || ^2.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-date-time": "^1.0.0",
                "spryker/util-sanitize": "^2.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductReviewGui module",
            "time": "2018-03-09T07:57:08+00:00"
        },
        {
            "name": "spryker/product-search",
            "version": "5.6.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-search.git",
                "reference": "e8d632d1b125314a0d55b6152bc36fd5c5789b70"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-search/zipball/e8d632d1b125314a0d55b6152bc36fd5c5789b70",
                "reference": "e8d632d1b125314a0d55b6152bc36fd5c5789b70",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^5.1.1 || ^6.0.0",
                "spryker/event": "^2.1.0",
                "spryker/glossary": "^3.0.0",
                "spryker/gui": "^3.7.0",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/search": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/config": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductSearch module",
            "time": "2019-01-17T11:09:57+00:00"
        },
        {
            "name": "spryker/product-set",
            "version": "1.3.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-set.git",
                "reference": "10220c08f319d323a989d506429bf758261d0664"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-set/zipball/10220c08f319d323a989d506429bf758261d0664",
                "reference": "10220c08f319d323a989d506429bf758261d0664",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.4.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.1.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-image": "^3.3.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/search": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/url": "^3.2.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/elastica": "*",
                "spryker/propel": "^3.0.0",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/elastica": "If you want to use ProductSetCollectorClient with the provided search functionalities."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\ProductSet\\Helper\\": "tests/SprykerTest/Zed/ProductSet/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductSet module",
            "time": "2018-08-03T10:02:01+00:00"
        },
        {
            "name": "spryker/product-set-collector",
            "version": "1.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-set-collector.git",
                "reference": "b1646c625a9452233ad22445cc4295c9e5076327"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-set-collector/zipball/b1646c625a9452233ad22445cc4295c9e5076327",
                "reference": "b1646c625a9452233ad22445cc4295c9e5076327",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^5.1.1 || ^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/product-set": "^1.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/search": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0",
                "spryker/url": "^3.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductSetCollector module",
            "time": "2018-03-09T07:57:08+00:00"
        },
        {
            "name": "spryker/product-set-gui",
            "version": "2.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-set-gui.git",
                "reference": "966d4a584f728434a10f644a87bf7b41da5c42af"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-set-gui/zipball/966d4a584f728434a10f644a87bf7b41da5c42af",
                "reference": "966d4a584f728434a10f644a87bf7b41da5c42af",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/gui": "^3.5.0",
                "spryker/kernel": "^3.4.0",
                "spryker/locale": "^3.0.0",
                "spryker/money": "^2.0.0",
                "spryker/price-product": "^1.0.0 || ^2.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/product-image": "^3.3.0",
                "spryker/product-set": "^1.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/url": "^3.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/util-text": "^1.2.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductSetGui module",
            "time": "2018-07-04T16:15:53+00:00"
        },
        {
            "name": "spryker/product-set-storage",
            "version": "1.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-set-storage.git",
                "reference": "6df62f6b947cf95d28fc786cb97ee6234bf87847"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-set-storage/zipball/6df62f6b947cf95d28fc786cb97ee6234bf87847",
                "reference": "6df62f6b947cf95d28fc786cb97ee6234bf87847",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/event-behavior": "^1.1.0",
                "spryker/kernel": "^3.21.0",
                "spryker/product-image": "^3.5.0",
                "spryker/product-set": "^1.3.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/storage": "^3.4.0",
                "spryker/synchronization": "^0.2.0 || ^1.0.0",
                "spryker/synchronization-extension": "^1.0.0",
                "spryker/url": "^3.3.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/url-storage": "*"
            },
            "suggest": {
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0",
                "spryker/url-storage": "If you want to use UrlStorage plugins, minimum required version: 0.2.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductSetStorage module",
            "time": "2019-01-17T19:49:29+00:00"
        },
        {
            "name": "spryker/product-storage",
            "version": "1.9.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-storage.git",
                "reference": "de4ab7f6785b2237b07d036a643f1c3ac977ce8e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-storage/zipball/de4ab7f6785b2237b07d036a643f1c3ac977ce8e",
                "reference": "de4ab7f6785b2237b07d036a643f1c3ac977ce8e",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/event-behavior": "^1.1.0",
                "spryker/kernel": "^3.21.0",
                "spryker/locale": "^3.1.0",
                "spryker/product": "^5.5.0 || ^6.0.0",
                "spryker/product-storage-extension": "^1.1.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/storage": "^3.4.0",
                "spryker/synchronization": "^0.2.0 || ^1.0.0",
                "spryker/synchronization-extension": "^1.0.0",
                "spryker/url": "^3.3.0",
                "spryker/zend": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/product-attribute": "*",
                "spryker/propel": "*",
                "spryker/queue": "*",
                "spryker/store": "*",
                "spryker/testify": "*",
                "spryker/url-storage": "*"
            },
            "suggest": {
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0",
                "spryker/url-storage": "If you want to use UrlStorage plugins, minimum required version: 0.2.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductStorage module",
            "time": "2019-01-17T19:49:29+00:00"
        },
        {
            "name": "spryker/product-storage-extension",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-storage-extension.git",
                "reference": "81f9aacdeb57b2b630a96c7d85e58506eb6bd643"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-storage-extension/zipball/81f9aacdeb57b2b630a96c7d85e58506eb6bd643",
                "reference": "81f9aacdeb57b2b630a96c7d85e58506eb6bd643",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductStorageExtension module",
            "time": "2019-01-11T11:24:33+00:00"
        },
        {
            "name": "spryker/product-validity",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/product-validity.git",
                "reference": "8c3f070dcebfa0cd0bf9c97ab110e4eda521d758"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/product-validity/zipball/8c3f070dcebfa0cd0bf9c97ab110e4eda521d758",
                "reference": "8c3f070dcebfa0cd0bf9c97ab110e4eda521d758",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.13.0",
                "spryker/product": "^6.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ProductValidity module",
            "time": "2018-10-18T15:50:28+00:00"
        },
        {
            "name": "spryker/propel",
            "version": "3.8.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/propel.git",
                "reference": "308ae4c13fe2c96d869fbb51aaaa02050e87126b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/propel/zipball/308ae4c13fe2c96d869fbb51aaaa02050e87126b",
                "reference": "308ae4c13fe2c96d869fbb51aaaa02050e87126b",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/config": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/log": "^3.0.0",
                "spryker/monolog": "^2.0.0",
                "spryker/propel-orm": "^1.4.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use ServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Propel\\Helper\\": "tests/SprykerTest/Shared/Propel/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Propel module",
            "time": "2018-11-16T13:25:28+00:00"
        },
        {
            "name": "spryker/propel-orm",
            "version": "1.8.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/propel-orm.git",
                "reference": "9bfe093eb6e087d64c84e0380a075cbc86df9c75"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/propel-orm/zipball/9bfe093eb6e087d64c84e0380a075cbc86df9c75",
                "reference": "9bfe093eb6e087d64c84e0380a075cbc86df9c75",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "propel/propel": "2.0.0-alpha8",
                "spryker/config": "^3.0.0",
                "spryker/error-handler": "^2.0.0",
                "spryker/kernel": "^3.17.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PropelOrm module",
            "time": "2018-11-12T12:32:21+00:00"
        },
        {
            "name": "spryker/propel-query-builder",
            "version": "0.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/propel-query-builder.git",
                "reference": "0ae24e2a7347f671907083599103bc79928d3cda"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/propel-query-builder/zipball/0ae24e2a7347f671907083599103bc79928d3cda",
                "reference": "0ae24e2a7347f671907083599103bc79928d3cda",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.2.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel": "^3.0.0",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "PropelQueryBuilder module",
            "time": "2018-01-24T11:43:27+00:00"
        },
        {
            "name": "spryker/queue",
            "version": "1.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/queue.git",
                "reference": "8b55a694d0d85aac9cc329da599e832f11c43c48"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/queue/zipball/8b55a694d0d85aac9cc329da599e832f11c43c48",
                "reference": "8b55a694d0d85aac9cc329da599e832f11c43c48",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/transfer": "^3.0.0",
                "spryker/util-encoding": "^2.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Queue module",
            "time": "2019-01-15T13:09:50+00:00"
        },
        {
            "name": "spryker/quick-order",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/quick-order.git",
                "reference": "453f33dc27fdd0b4e132db800a945206e851d9a7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/quick-order/zipball/453f33dc27fdd0b4e132db800a945206e851d9a7",
                "reference": "453f33dc27fdd0b4e132db800a945206e851d9a7",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/product-storage": "^1.6.0",
                "spryker/quick-order-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "QuickOrder module",
            "time": "2018-12-18T18:01:18+00:00"
        },
        {
            "name": "spryker/quick-order-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/quick-order-extension.git",
                "reference": "697ae64ed1d4d4f375f60a0868d079c0655d5958"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/quick-order-extension/zipball/697ae64ed1d4d4f375f60a0868d079c0655d5958",
                "reference": "697ae64ed1d4d4f375f60a0868d079c0655d5958",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "QuickOrderExtension module",
            "time": "2018-12-18T15:41:13+00:00"
        },
        {
            "name": "spryker/quote",
            "version": "2.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/quote.git",
                "reference": "be1009f934cbe088c6191e936f41796b0a337ef0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/quote/zipball/be1009f934cbe088c6191e936f41796b0a337ef0",
                "reference": "be1009f934cbe088c6191e936f41796b0a337ef0",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/currency": "^3.4.0",
                "spryker/customer": "^6.0.0 || ^7.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/quote-extension": "^1.0.0",
                "spryker/session": "^3.0.0 || ^4.0.0",
                "spryker/store": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Quote\\Helper\\": "tests/SprykerTest/Shared/Quote/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Quote module",
            "time": "2019-01-11T09:31:58+00:00"
        },
        {
            "name": "spryker/quote-extension",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/quote-extension.git",
                "reference": "db719450933bfeb5ed4debe47f4c76baba9c7cb0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/quote-extension/zipball/db719450933bfeb5ed4debe47f4c76baba9c7cb0",
                "reference": "db719450933bfeb5ed4debe47f4c76baba9c7cb0",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "QuoteExtension module",
            "time": "2018-09-13T17:04:05+00:00"
        },
        {
            "name": "spryker/rabbit-mq",
            "version": "2.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/rabbit-mq.git",
                "reference": "5da48f3e7f34b3a2c777c9a6ac3f5d7a4e5f4f49"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/rabbit-mq/zipball/5da48f3e7f34b3a2c777c9a6ac3f5d7a4e5f4f49",
                "reference": "5da48f3e7f34b3a2c777c9a6ac3f5d7a4e5f4f49",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "php-amqplib/php-amqplib": "^2.6",
                "spryker/kernel": "^3.20.0",
                "spryker/queue": "^1.1.2",
                "spryker/store": "^1.9.0",
                "spryker/transfer": "^3.6.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "include-path": [
                "src/"
            ],
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Spryker",
                "homepage": "https://spryker.com"
            }],
            "description": "Spryker RabbitMq adapter",
            "homepage": "http://spryker.com",
            "keywords": [
                "framework",
                "queue",
                "rabbit-mq",
                "standards"
            ],
            "time": "2018-10-02T06:33:11+00:00"
        },
        {
            "name": "spryker/ramsey-uuid",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/ramsey-uuid.git",
                "reference": "622d58c423fcae4facf128eb09401a9dc0142578"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/ramsey-uuid/zipball/622d58c423fcae4facf128eb09401a9dc0142578",
                "reference": "622d58c423fcae4facf128eb09401a9dc0142578",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "ramsey/uuid": "^3.8.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "RamseyUuid module",
            "time": "2018-07-25T11:16:07+00:00"
        },
        {
            "name": "spryker/redis",
            "version": "2.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Redis.git",
                "reference": "5a453b3d1542f0fd8534b43e437636a54d7bc7ad"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Redis/zipball/5a453b3d1542f0fd8534b43e437636a54d7bc7ad",
                "reference": "5a453b3d1542f0fd8534b43e437636a54d7bc7ad",
                "shasum": ""
            },
            "require": {
                "predis/predis": "^1.1.1"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Redis bundle",
            "time": "2017-04-26T15:15:36+00:00"
        },
        {
            "name": "spryker/refund",
            "version": "5.1.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Refund.git",
                "reference": "dc154292c6d90dfa0eecbf2737f1c587b653d76d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Refund/zipball/dc154292c6d90dfa0eecbf2737f1c587b653d76d",
                "reference": "dc154292c6d90dfa0eecbf2737f1c587b653d76d",
                "shasum": ""
            },
            "require": {
                "spryker/calculation": "^4.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/money": "^2.0.0",
                "spryker/sales": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-date-time": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Refund module",
            "time": "2017-11-27T14:09:42+00:00"
        },
        {
            "name": "spryker/sales",
            "version": "8.17.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sales.git",
                "reference": "14b37c4bcfb97903ce72da88906a3d394c68d81f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sales/zipball/14b37c4bcfb97903ce72da88906a3d394c68d81f",
                "reference": "14b37c4bcfb97903ce72da88906a3d394c68d81f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/calculation": "^4.0.0",
                "spryker/country": "^3.0.0",
                "spryker/customer": "^6.0.0 || ^7.0.0",
                "spryker/gui": "^3.7.0",
                "spryker/kernel": "^3.28.0",
                "spryker/locale": "^3.0.0",
                "spryker/money": "^2.0.0",
                "spryker/oms": "^7.3.0 || ^8.0.0",
                "spryker/propel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/sales-extension": "^1.1.0",
                "spryker/sales-split": "^3.0.0",
                "spryker/sequence-number": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/user": "^3.0.0",
                "spryker/util-date-time": "^1.0.0",
                "spryker/util-sanitize": "^2.0.0",
                "spryker/util-text": "^1.1.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/checkout": "*",
                "spryker/config": "*",
                "spryker/price": "*",
                "spryker/product": "*",
                "spryker/shipment": "*",
                "spryker/stock": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "suggest": {
                "spryker/checkout": "If you want to use Checkout plugins. ^4.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Sales\\Helper\\": "tests/SprykerTest/Shared/Sales/_support/Helper/",
                    "SprykerTest\\Zed\\Sales\\Helper\\": "tests/SprykerTest/Zed/Sales/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Sales module",
            "time": "2018-11-23T15:45:53+00:00"
        },
        {
            "name": "spryker/sales-extension",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sales-extension.git",
                "reference": "c2d5620f34898dc40439ffdc9d9304a9aaa79040"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sales-extension/zipball/c2d5620f34898dc40439ffdc9d9304a9aaa79040",
                "reference": "c2d5620f34898dc40439ffdc9d9304a9aaa79040",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SalesExtension module",
            "time": "2018-06-18T17:01:18+00:00"
        },
        {
            "name": "spryker/sales-order-threshold",
            "version": "1.1.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sales-order-threshold.git",
                "reference": "d9a54e8327887c56597d2ad621ae49f1c3a90a99"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sales-order-threshold/zipball/d9a54e8327887c56597d2ad621ae49f1c3a90a99",
                "reference": "d9a54e8327887c56597d2ad621ae49f1c3a90a99",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/calculation-extension": "^1.0.0",
                "spryker/cart-extension": "^1.6.0 || ^2.2.1",
                "spryker/checkout-extension": "^1.0.0",
                "spryker/currency": "^3.0.0",
                "spryker/glossary": "^3.1.0",
                "spryker/kernel": "^3.17.0",
                "spryker/messenger": "^3.1.0",
                "spryker/money": "^2.0.0",
                "spryker/sales": "^8.16.0",
                "spryker/sales-order-threshold-extension": "^1.0.0",
                "spryker/store": "^1.2.0",
                "spryker/tax": "^5.0.0"
            },
            "require-dev": {
                "spryker/checkout": "*",
                "spryker/code-sniffer": "*",
                "spryker/installer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/calculation": "If you want to use Calculation plugins.",
                "spryker/cart": "If you want to use Cart plugins: ^4.0.0.",
                "spryker/checkout": "If you want to use Checkout plugins: ^3.0.0.",
                "spryker/installer": "If you want to use Installer plugins: ^4.0.0."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\SalesOrderThreshold\\Helper\\": "tests/SprykerTest/Zed/SalesOrderThreshold/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SalesOrderThreshold module",
            "time": "2019-01-08T13:43:38+00:00"
        },
        {
            "name": "spryker/sales-order-threshold-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sales-order-threshold-extension.git",
                "reference": "897af49181ac74f936db1a4ee1cdee6d443f472d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sales-order-threshold-extension/zipball/897af49181ac74f936db1a4ee1cdee6d443f472d",
                "reference": "897af49181ac74f936db1a4ee1cdee6d443f472d",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SalesOrderThresholdExtension module",
            "time": "2018-10-04T13:35:59+00:00"
        },
        {
            "name": "spryker/sales-order-threshold-gui",
            "version": "1.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sales-order-threshold-gui.git",
                "reference": "3daef08a9cdbecfb4a3a3b2f760b0c74e926a588"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sales-order-threshold-gui/zipball/3daef08a9cdbecfb4a3a3b2f760b0c74e926a588",
                "reference": "3daef08a9cdbecfb4a3a3b2f760b0c74e926a588",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/currency": "^3.1.0",
                "spryker/gui": "^3.1.0",
                "spryker/kernel": "^3.18.0",
                "spryker/locale": "^3.0.0",
                "spryker/money": "^2.1.0",
                "spryker/sales-order-threshold": "^1.0.0",
                "spryker/sales-order-threshold-gui-extension": "^1.0.0",
                "spryker/store": "^1.2.0",
                "spryker/symfony": "^3.1.0",
                "spryker/tax": "^5.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SalesOrderThresholdGui module",
            "time": "2019-01-08T14:16:26+00:00"
        },
        {
            "name": "spryker/sales-order-threshold-gui-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sales-order-threshold-gui-extension.git",
                "reference": "0e5c98b60f636a5abd844a0ac16903cfe3c181a1"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sales-order-threshold-gui-extension/zipball/0e5c98b60f636a5abd844a0ac16903cfe3c181a1",
                "reference": "0e5c98b60f636a5abd844a0ac16903cfe3c181a1",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/symfony": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/symfony": "If you want to use the form expander plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SalesOrderThresholdGuiExtension module",
            "time": "2018-12-04T14:58:56+00:00"
        },
        {
            "name": "spryker/sales-product-connector",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sales-product-connector.git",
                "reference": "4f5763be4de70a2dd16fd1168b6a04663edef9b4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sales-product-connector/zipball/4f5763be4de70a2dd16fd1168b6a04663edef9b4",
                "reference": "4f5763be4de70a2dd16fd1168b6a04663edef9b4",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/sales": "^7.0.0 || ^8.0.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/checkout": "*",
                "spryker/code-sniffer": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/checkout": "If you want to save product specific information during checkout"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SalesProductConnector module",
            "time": "2018-01-24T11:43:27+00:00"
        },
        {
            "name": "spryker/sales-quantity",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sales-quantity.git",
                "reference": "539f660e70ad7293a439257e763ee430c2f98062"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sales-quantity/zipball/539f660e70ad7293a439257e763ee430c2f98062",
                "reference": "539f660e70ad7293a439257e763ee430c2f98062",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/discount-extension": "^1.0.0",
                "spryker/kernel": "^3.17.0",
                "spryker/product": "^6.0.0",
                "spryker/sales-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/cart": "*",
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/cart": "If you want to use cart plugins: ^4.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SalesQuantity module",
            "time": "2018-07-31T09:22:49+00:00"
        },
        {
            "name": "spryker/sales-reclamation",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sales-reclamation.git",
                "reference": "c0f85017a2fa8ac1d1ad9084293f412b614db10d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sales-reclamation/zipball/c0f85017a2fa8ac1d1ad9084293f412b614db10d",
                "reference": "c0f85017a2fa8ac1d1ad9084293f412b614db10d",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/sales": "^8.3.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SalesReclamation module",
            "time": "2019-01-22T15:40:07+00:00"
        },
        {
            "name": "spryker/sales-reclamation-gui",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sales-reclamation-gui.git",
                "reference": "67df95c7983c8febc372cd8c3135346b6e61beed"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sales-reclamation-gui/zipball/67df95c7983c8febc372cd8c3135346b6e61beed",
                "reference": "67df95c7983c8febc372cd8c3135346b6e61beed",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/oms": "^8.0.0",
                "spryker/sales": "^8.0.0",
                "spryker/sales-extension": "^1.0.0",
                "spryker/sales-reclamation": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-date-time": "^1.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SalesReclamationGui module",
            "time": "2019-01-23T10:28:19+00:00"
        },
        {
            "name": "spryker/sales-split",
            "version": "3.0.5",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sales-split.git",
                "reference": "18d6a56c3ad9cc3911337288d172a3d02480d24c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sales-split/zipball/18d6a56c3ad9cc3911337288d172a3d02480d24c",
                "reference": "18d6a56c3ad9cc3911337288d172a3d02480d24c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/sales": "^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "^3.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SalesSplit module",
            "time": "2018-02-05T06:01:59+00:00"
        },
        {
            "name": "spryker/search",
            "version": "8.5.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/search.git",
                "reference": "1be19c4dbe17b3863b3adeb4587cd84aa98ecdd2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/search/zipball/1be19c4dbe17b3863b3adeb4587cd84aa98ecdd2",
                "reference": "1be19c4dbe17b3863b3adeb4587cd84aa98ecdd2",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/config": "^3.0.0",
                "spryker/elastica": "^4.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/guzzle": "^2.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/log": "^3.0.0",
                "spryker/money": "^2.0.0",
                "spryker/product-page-search-extension": "^1.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/twig": "^3.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/zend": "^2.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "6.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Search module",
            "time": "2018-12-18T14:28:57+00:00"
        },
        {
            "name": "spryker/sequence-number",
            "version": "3.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/SequenceNumber.git",
                "reference": "8b1affa634325d3dd8a98b5516e636831bd7e830"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/SequenceNumber/zipball/8b1affa634325d3dd8a98b5516e636831bd7e830",
                "reference": "8b1affa634325d3dd8a98b5516e636831bd7e830",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.4.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SequenceNumber module",
            "time": "2017-11-10T14:11:45+00:00"
        },
        {
            "name": "spryker/session",
            "version": "4.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/session.git",
                "reference": "b02774b6e69be6f6ce303b6c4c342ecf1b7055c6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/session/zipball/b02774b6e69be6f6ce303b6c4c342ecf1b7055c6",
                "reference": "b02774b6e69be6f6ce303b6c4c342ecf1b7055c6",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/config": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/monitoring": "^1.0.0 || ^2.0.0",
                "spryker/redis": "^2.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Session\\Helper\\": "tests/SprykerTest/Shared/Session/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Session module",
            "time": "2018-10-29T12:36:26+00:00"
        },
        {
            "name": "spryker/setup",
            "version": "4.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/setup.git",
                "reference": "a6aca472e63a671aeab5e5843654e522ebe04d83"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/setup/zipball/a6aca472e63a671aeab5e5843654e522ebe04d83",
                "reference": "a6aca472e63a671aeab5e5843654e522ebe04d83",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cache": "^3.1.0",
                "spryker/config": "^3.0.0",
                "spryker/installer": "^4.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel": "^3.0.0",
                "spryker/search": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/transfer": "^3.0.0",
                "spryker/zed-navigation": "^1.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Setup module",
            "time": "2018-12-17T11:30:53+00:00"
        },
        {
            "name": "spryker/setup-frontend",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/setup-frontend.git",
                "reference": "b1af69f99eddea12d41d8598d4a5777242b1aaab"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/setup-frontend/zipball/b1af69f99eddea12d41d8598d4a5777242b1aaab",
                "reference": "b1af69f99eddea12d41d8598d4a5777242b1aaab",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/log": "^3.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SetupFrontend module",
            "time": "2018-04-23T14:45:14+00:00"
        },
        {
            "name": "spryker/shipment",
            "version": "6.6.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/shipment.git",
                "reference": "d7a57e95d48e23d5138b5b625cb068c99a03980f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/shipment/zipball/d7a57e95d48e23d5138b5b625cb068c99a03980f",
                "reference": "d7a57e95d48e23d5138b5b625cb068c99a03980f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/currency": "^3.1.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.13.0",
                "spryker/money": "^2.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/sales": "^6.0.0 || ^7.0.0 || ^8.0.0",
                "spryker/session": "^3.0.0 || ^4.0.0",
                "spryker/store": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/tax": "^5.0.0",
                "spryker/util-text": "^1.1.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/calculation": "*",
                "spryker/checkout": "*",
                "spryker/code-sniffer": "*",
                "spryker/config": "*",
                "spryker/country": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "suggest": {
                "spryker/calculation": "If you want to use Calculation plugins.",
                "spryker/checkout": "If you want to use Checkout plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Shipment\\Helper\\": "tests/SprykerTest/Shared/Shipment/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Shipment module",
            "time": "2018-11-16T13:25:28+00:00"
        },
        {
            "name": "spryker/shipment-cart-connector",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/shipment-cart-connector.git",
                "reference": "e73f35574a83f2a4ea536894b882e11cac9f1015"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/shipment-cart-connector/zipball/e73f35574a83f2a4ea536894b882e11cac9f1015",
                "reference": "e73f35574a83f2a4ea536894b882e11cac9f1015",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.13.0",
                "spryker/price": "^5.0.0",
                "spryker/shipment": "^6.2.0"
            },
            "require-dev": {
                "spryker/cart": "^4.2.0 || ^5.0.0"
            },
            "suggest": {
                "spryker/cart": "If you want to use shipment cart plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ShipmentCartConnector module",
            "time": "2018-04-10T10:41:59+00:00"
        },
        {
            "name": "spryker/shipment-checkout-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/shipment-checkout-connector.git",
                "reference": "62046a36b5c44b8f807c9298f456d1249792bf53"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/shipment-checkout-connector/zipball/62046a36b5c44b8f807c9298f456d1249792bf53",
                "reference": "62046a36b5c44b8f807c9298f456d1249792bf53",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.14.0",
                "spryker/shipment": "^6.4.0"
            },
            "require-dev": {
                "spryker/checkout": "*",
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/checkout": "If you want to use Checkout plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ShipmentCheckoutConnector module",
            "time": "2018-03-21T09:32:22+00:00"
        },
        {
            "name": "spryker/shipment-discount-connector",
            "version": "1.1.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/shipment-discount-connector.git",
                "reference": "9f3bc6835ebbd00ee10afcbf1770397d5494206a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/shipment-discount-connector/zipball/9f3bc6835ebbd00ee10afcbf1770397d5494206a",
                "reference": "9f3bc6835ebbd00ee10afcbf1770397d5494206a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/discount": "^4.3.0 || ^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/money": "^2.0.0",
                "spryker/shipment": "^5.1.0 || ^6.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ShipmentDiscountConnector module",
            "time": "2018-11-19T14:34:38+00:00"
        },
        {
            "name": "spryker/shopping-list",
            "version": "2.5.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/shopping-list.git",
                "reference": "db8bbe0cba04cacfbeed66eda0ca9dad5b8fddc4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/shopping-list/zipball/db8bbe0cba04cacfbeed66eda0ca9dad5b8fddc4",
                "reference": "db8bbe0cba04cacfbeed66eda0ca9dad5b8fddc4",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart": "^5.1.0",
                "spryker/company-business-unit": "^1.0.0 || ^2.0.0",
                "spryker/company-business-unit-extension": "^1.1.0",
                "spryker/company-user": "^1.0.0 || ^2.0.0",
                "spryker/company-user-extension": "^1.1.0",
                "spryker/customer": "^7.0.0",
                "spryker/event": "^1.0.0 || ^2.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/messenger": "^3.0.0",
                "spryker/permission": "^1.1.0",
                "spryker/permission-extension": "^1.1.0",
                "spryker/persistent-cart": "^0.1.0 || ^1.0.0",
                "spryker/price-product": "^1.0.0 || ^2.0.0",
                "spryker/product": "^6.6.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/shopping-list-extension": "^1.3.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/company": "*",
                "spryker/installer": "*",
                "spryker/propel": "*",
                "spryker/quote": "*",
                "spryker/stock": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/installer": "If ShoppingListPermissionsInstallerPlugin is to be used, minimum version is 4.0.04"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\ShoppingList\\Helper\\": "tests/SprykerTest/Shared/ShoppingList/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ShoppingList module",
            "time": "2018-12-28T09:57:27+00:00"
        },
        {
            "name": "spryker/shopping-list-extension",
            "version": "1.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/shopping-list-extension.git",
                "reference": "518656875e02bcec80f315301c9ac7c8c2610cf9"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/shopping-list-extension/zipball/518656875e02bcec80f315301c9ac7c8c2610cf9",
                "reference": "518656875e02bcec80f315301c9ac7c8c2610cf9",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ShoppingListExtension module",
            "time": "2018-10-05T12:25:36+00:00"
        },
        {
            "name": "spryker/shopping-list-note",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/shopping-list-note.git",
                "reference": "3d742d35a488077f475491be0f2bf6718a2ead71"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/shopping-list-note/zipball/3d742d35a488077f475491be0f2bf6718a2ead71",
                "reference": "3d742d35a488077f475491be0f2bf6718a2ead71",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart": "^5.3.0",
                "spryker/kernel": "^3.0.0",
                "spryker/shopping-list": "^1.0.0 || ^2.0.0",
                "spryker/shopping-list-extension": "^1.2.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/company": "*",
                "spryker/company-business-unit": "*",
                "spryker/company-user": "*",
                "spryker/customer": "*",
                "spryker/permission": "*",
                "spryker/product": "*",
                "spryker/propel": "*",
                "spryker/quote": "*",
                "spryker/stock": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\ShoppingListNote\\Helper\\": "tests/SprykerTest/Shared/ShoppingListNote/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ShoppingListNote module",
            "time": "2018-10-08T11:55:20+00:00"
        },
        {
            "name": "spryker/shopping-list-product-option-connector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/shopping-list-product-option-connector.git",
                "reference": "ddd0f39e1027e0a68e992d71468595bc5ae85199"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/shopping-list-product-option-connector/zipball/ddd0f39e1027e0a68e992d71468595bc5ae85199",
                "reference": "ddd0f39e1027e0a68e992d71468595bc5ae85199",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/product-option": "^6.4.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/shopping-list": "^1.7.0 || ^2.1.0",
                "spryker/shopping-list-extension": "^1.3.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/company": "*",
                "spryker/company-business-unit": "*",
                "spryker/company-user": "*",
                "spryker/customer": "*",
                "spryker/permission": "*",
                "spryker/product": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ShoppingListProductOptionConnector module",
            "time": "2018-10-15T09:17:44+00:00"
        },
        {
            "name": "spryker/shopping-list-session",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/shopping-list-session.git",
                "reference": "ea91788e2101b8ee067f01e887f2a05bc9811073"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/shopping-list-session/zipball/ea91788e2101b8ee067f01e887f2a05bc9811073",
                "reference": "ea91788e2101b8ee067f01e887f2a05bc9811073",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/session": "^3.0.0 || ^4.0.0",
                "spryker/shopping-list": "^1.1.0 || ^2.0.0",
                "spryker/shopping-list-session-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/symfony": "^3.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ShoppingListSession module",
            "time": "2018-10-29T12:36:26+00:00"
        },
        {
            "name": "spryker/shopping-list-session-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/shopping-list-session-extension.git",
                "reference": "91325237e4db9a591d3242845b0477ffa7a18e85"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/shopping-list-session-extension/zipball/91325237e4db9a591d3242845b0477ffa7a18e85",
                "reference": "91325237e4db9a591d3242845b0477ffa7a18e85",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ShoppingListSessionExtension module",
            "time": "2018-09-12T15:07:51+00:00"
        },
        {
            "name": "spryker/shopping-list-storage",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/shopping-list-storage.git",
                "reference": "81c375602859329d6d8720a409d6923c954839a6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/shopping-list-storage/zipball/81c375602859329d6d8720a409d6923c954839a6",
                "reference": "81c375602859329d6d8720a409d6923c954839a6",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/company-business-unit": "^2.2.0",
                "spryker/company-user": "^1.4.0 || ^2.0.0",
                "spryker/customer": "^7.0.0",
                "spryker/event-behavior": "^1.1.0",
                "spryker/kernel": "^3.17.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/shopping-list": "^1.2.0 || ^2.0.0",
                "spryker/shopping-list-session-extension": "^1.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/synchronization": "^1.0.0",
                "spryker/synchronization-extension": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ShoppingListStorage module",
            "time": "2018-11-20T14:22:12+00:00"
        },
        {
            "name": "spryker/silex",
            "version": "2.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/silex.git",
                "reference": "00478686108579ab5a0e600b3a14b84357124498"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/silex/zipball/00478686108579ab5a0e600b3a14b84357124498",
                "reference": "00478686108579ab5a0e600b3a14b84357124498",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/silexphp": "^0.1.0 || ^0.2.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Silex module",
            "time": "2019-01-25T10:37:59+00:00"
        },
        {
            "name": "spryker/silexphp",
            "version": "0.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/silexphp.git",
                "reference": "534ac4280186a98fec685096720ef2b8ef09b739"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/silexphp/zipball/534ac4280186a98fec685096720ef2b8ef09b739",
                "reference": "534ac4280186a98fec685096720ef2b8ef09b739",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/container": "^1.1.0",
                "symfony/event-dispatcher": "^3.0.0 || ^4.0.0",
                "symfony/http-foundation": "^3.0.0",
                "symfony/http-kernel": "^3.0.0 || ^4.0.0",
                "symfony/routing": "^3.0.0 || ^4.0.0"
            },
            "require-dev": {
                "doctrine/dbal": "~2.2",
                "monolog/monolog": "^1.4.1",
                "phpunit/phpunit": "^5 || ^6 || ^7",
                "swiftmailer/swiftmailer": "~5",
                "symfony/browser-kit": "~2.3|3.0.*",
                "symfony/config": "~2.3|3.0.*",
                "symfony/css-selector": "~2.3|3.0.*",
                "symfony/debug": "~2.3|3.0.*",
                "symfony/dom-crawler": "~2.3|3.0.*",
                "symfony/finder": "~2.3|3.0.*",
                "symfony/form": "^3.0.0 || ^4.0.0",
                "symfony/intl": "~2.3|3.0.*",
                "symfony/monolog-bridge": "~2.3|3.0.*",
                "symfony/options-resolver": "~2.3|3.0.*",
                "symfony/phpunit-bridge": "~2.7",
                "symfony/process": "~2.3|3.0.*",
                "symfony/security": "~2.3|3.0.*",
                "symfony/serializer": "~2.3|3.0.*",
                "symfony/translation": "~2.3|3.0.*",
                "symfony/twig-bridge": "^3.2.0 || ^4.0.0",
                "symfony/validator": "^3.0.0",
                "twig/twig": "~1.28|~2.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.3.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Silex\\": "src/Silex"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Igor Wiedler",
                    "email": "igor@wiedler.ch"
                }
            ],
            "description": "The PHP micro-framework based on the Symfony Components",
            "homepage": "http://silex.sensiolabs.org",
            "keywords": [
                "microframework"
            ],
            "time": "2019-01-25T09:02:20+00:00"
        },
        {
            "name": "spryker/sql-criteria-builder",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/sql-criteria-builder.git",
                "reference": "790478d256cc3e687bd67b8dcdd41c1ab97ae57e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/sql-criteria-builder/zipball/790478d256cc3e687bd67b8dcdd41c1ab97ae57e",
                "reference": "790478d256cc3e687bd67b8dcdd41c1ab97ae57e",
                "shasum": ""
            },
            "require": {
                "everon/collection": "~1.0.3",
                "everon/criteria-builder": "~1.1.5",
                "everon/factory": "~1.1.4",
                "everon/utils": "~1.0.4",
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SqlCriteriaBuilder module",
            "time": "2018-01-24T11:43:27+00:00"
        },
        {
            "name": "spryker/state-machine",
            "version": "2.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/state-machine.git",
                "reference": "aad45f29d5bcaa4e098bc189d03353a4263e82db"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/state-machine/zipball/aad45f29d5bcaa4e098bc189d03353a4263e82db",
                "reference": "aad45f29d5bcaa4e098bc189d03353a4263e82db",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/graph": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-network": "^1.1.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "StateMachine module",
            "time": "2018-10-04T19:43:28+00:00"
        },
        {
            "name": "spryker/step-engine",
            "version": "3.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/step-engine.git",
                "reference": "7b4ed82876fd5f02e5d51375eb7c8f8849a8cad0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/step-engine/zipball/7b4ed82876fd5f02e5d51375eb7c8f8849a8cad0",
                "reference": "7b4ed82876fd5f02e5d51375eb7c8f8849a8cad0",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/messenger": "Allows to use StepHandlerPluginWithMessengerInterface."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "StepEngine module",
            "time": "2018-11-13T15:09:10+00:00"
        },
        {
            "name": "spryker/stock",
            "version": "5.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/stock.git",
                "reference": "db3ad636e878ef812077bebba9bcd8be3e550f4c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/stock/zipball/db3ad636e878ef812077bebba9bcd8be3e550f4c",
                "reference": "db3ad636e878ef812077bebba9bcd8be3e550f4c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.17.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/store": "^1.5.0",
                "spryker/touch": "^3.0.0 || ^4.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Stock\\Helper\\": "tests/SprykerTest/Shared/Stock/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Stock module",
            "time": "2018-10-02T06:35:14+00:00"
        },
        {
            "name": "spryker/stock-sales-connector",
            "version": "3.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/stock-sales-connector.git",
                "reference": "bec0e86dbe7477eccc668f4a67c24ee44e629c64"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/stock-sales-connector/zipball/bec0e86dbe7477eccc668f4a67c24ee44e629c64",
                "reference": "bec0e86dbe7477eccc668f4a67c24ee44e629c64",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/stock": "^4.0.0 || ^5.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "StockSalesConnector module",
            "time": "2018-02-08T10:41:19+00:00"
        },
        {
            "name": "spryker/storage",
            "version": "3.5.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/storage.git",
                "reference": "6870c5af0ddf09dc84108bf495a8a1c7535d05b8"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/storage/zipball/6870c5af0ddf09dc84108bf495a8a1c7535d05b8",
                "reference": "6870c5af0ddf09dc84108bf495a8a1c7535d05b8",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/config": "^3.0.0",
                "spryker/gui": "^3.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/redis": "^2.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-sanitize": "^2.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/collector-storage-connector": "If you want to use dropStorageTimestamps functionality from Collector module"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Client\\Storage\\Helper\\": "tests/SprykerTest/Client/Storage/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Storage module",
            "time": "2018-11-21T10:17:03+00:00"
        },
        {
            "name": "spryker/store",
            "version": "1.9.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/store.git",
                "reference": "a30faa7c13cbf1c209c12222dca3f9654ffddb39"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/store/zipball/a30faa7c13cbf1c209c12222dca3f9654ffddb39",
                "reference": "a30faa7c13cbf1c209c12222dca3f9654ffddb39",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.18.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/quote": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/quote": "If you want to use StoreQuoteTransferExpander plugin, minimum required version: 1.2.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Store\\Helper\\": "tests/SprykerTest/Shared/Store/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Store module",
            "time": "2018-11-20T07:34:47+00:00"
        },
        {
            "name": "spryker/symfony",
            "version": "3.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/symfony.git",
                "reference": "c331fb41968d9399ae7f56bfbd108f4de82ca431"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/symfony/zipball/c331fb41968d9399ae7f56bfbd108f4de82ca431",
                "reference": "c331fb41968d9399ae7f56bfbd108f4de82ca431",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "symfony-cmf/routing": "^1.3.0",
                "symfony/console": "^2.6.13 || ^3.0.0",
                "symfony/debug": "^2.6.13 || ^3.0.0",
                "symfony/filesystem": "^2.6.13 || ^3.0.0",
                "symfony/finder": "^2.6.13 || ^3.0.0",
                "symfony/form": "^2.7.0 || ^3.0.0",
                "symfony/http-kernel": "^2.6.13 || ^3.0.0",
                "symfony/intl": "^2.8.8 || ^3.0.0",
                "symfony/options-resolver": "^2.6.13 || ^3.0.0",
                "symfony/process": "^2.6.13 || ^3.0.0",
                "symfony/property-access": "^2.6.13 || ^3.0.0",
                "symfony/routing": "^2.6.13 || ^3.0.0",
                "symfony/security": "^2.6.13 || ^3.0.0",
                "symfony/serializer": "^2.6.13 || ^3.0.0",
                "symfony/stopwatch": "^4.0.0",
                "symfony/translation": "^2.6.13 || ^3.0.0",
                "symfony/twig-bridge": "^3.4.0 || ^4.0.0",
                "symfony/validator": "^2.6.13 || ^3.0.0",
                "symfony/yaml": "^2.6.13 || ^3.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Symfony module",
            "time": "2019-01-28T07:41:45+00:00"
        },
        {
            "name": "spryker/synchronization",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/synchronization.git",
                "reference": "4e1a8b07ca85e6c8b83ed4544b0b811bb5649518"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/synchronization/zipball/4e1a8b07ca85e6c8b83ed4544b0b811bb5649518",
                "reference": "4e1a8b07ca85e6c8b83ed4544b0b811bb5649518",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/elastica": "^2.0.0 || ^3.0.0 || ^4.0.0",
                "spryker/kernel": "^3.4.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/queue": "^1.0.0",
                "spryker/search": "^6.8.0 || ^7.0.0 || ^8.3.0",
                "spryker/storage": "^3.4.1",
                "spryker/symfony": "^3.1.0",
                "spryker/synchronization-extension": "^1.0.0",
                "spryker/util-encoding": "^2.0.0"
            },
            "require-dev": {
                "spryker/availability-storage": "*",
                "spryker/category-page-search": "*",
                "spryker/category-storage": "*",
                "spryker/cms-block-category-storage": "*",
                "spryker/cms-block-product-storage": "*",
                "spryker/cms-block-storage": "*",
                "spryker/cms-page-search": "*",
                "spryker/cms-storage": "*",
                "spryker/code-sniffer": "*",
                "spryker/glossary-storage": "*",
                "spryker/navigation-storage": "*",
                "spryker/price-product-storage": "*",
                "spryker/product-category-filter-storage": "*",
                "spryker/product-category-storage": "*",
                "spryker/product-group-storage": "*",
                "spryker/product-image-storage": "*",
                "spryker/product-label-storage": "*",
                "spryker/product-measurement-unit-storage": "*",
                "spryker/product-option-storage": "*",
                "spryker/product-page-search": "*",
                "spryker/product-quantity-storage": "*",
                "spryker/product-relation-storage": "*",
                "spryker/product-review-search": "*",
                "spryker/product-review-storage": "*",
                "spryker/product-search-config-storage": "*",
                "spryker/product-set-page-search": "*",
                "spryker/product-set-storage": "*",
                "spryker/product-storage": "*",
                "spryker/propel": "^3.0.0",
                "spryker/testify": "*",
                "spryker/url-storage": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Synchronization module",
            "time": "2018-11-16T10:49:53+00:00"
        },
        {
            "name": "spryker/synchronization-behavior",
            "version": "1.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/synchronization-behavior.git",
                "reference": "fd3050c45d11c80cb01c070f0f164d0738fd74f5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/synchronization-behavior/zipball/fd3050c45d11c80cb01c070f0f164d0738fd74f5",
                "reference": "fd3050c45d11c80cb01c070f0f164d0738fd74f5",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.20.0",
                "spryker/propel-orm": "^1.6.0",
                "spryker/queue": "^1.1.2",
                "spryker/synchronization": "^0.1.0 || ^0.2.0 || ^1.0.0",
                "spryker/zend": "^2.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "propel-behavior",
            "extra": {
                "name": "synchronization",
                "class": "\\Spryker\\Zed\\SynchronizationBehavior\\Persistence\\Propel\\Behavior\\SynchronizationBehavior",
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "include-path": [
                "src/"
            ],
            "license": [
                "proprietary"
            ],
            "description": "SynchronizationBehavior module",
            "time": "2018-09-24T13:36:34+00:00"
        },
        {
            "name": "spryker/synchronization-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/synchronization-extension.git",
                "reference": "7fb0212647977f0d5f3f13cd2c1f2e9db35447fd"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/synchronization-extension/zipball/7fb0212647977f0d5f3f13cd2c1f2e9db35447fd",
                "reference": "7fb0212647977f0d5f3f13cd2c1f2e9db35447fd",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel-orm": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/propel-orm": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "SynchronizationExtension module",
            "time": "2018-07-20T06:21:48+00:00"
        },
        {
            "name": "spryker/tax",
            "version": "5.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/tax.git",
                "reference": "c3d48b47deef8279b85bc36df61857df786b9c70"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/tax/zipball/c3d48b47deef8279b85bc36df61857df786b9c70",
                "reference": "c3d48b47deef8279b85bc36df61857df786b9c70",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/calculation": "^4.0.0",
                "spryker/country": "^3.0.0",
                "spryker/gui": "^3.7.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-date-time": "^1.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/propel": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Tax module",
            "time": "2019-01-21T12:35:39+00:00"
        },
        {
            "name": "spryker/tax-product-connector",
            "version": "4.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/tax-product-connector.git",
                "reference": "236eb5e6a35e7a365bcc15a56013ae26b096eee7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/tax-product-connector/zipball/236eb5e6a35e7a365bcc15a56013ae26b096eee7",
                "reference": "236eb5e6a35e7a365bcc15a56013ae26b096eee7",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/tax": "^4.0.0 || ^5.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/calculation": "*",
                "spryker/country": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/calculation": "If you want to use Calculation plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "TaxProductConnector module",
            "time": "2018-09-12T17:42:18+00:00"
        },
        {
            "name": "spryker/touch",
            "version": "4.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/touch.git",
                "reference": "71a7df3739ab8833dcadb50deeec700d7c8f890a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/touch/zipball/71a7df3739ab8833dcadb50deeec700d7c8f890a",
                "reference": "71a7df3739ab8833dcadb50deeec700d7c8f890a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/store": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Touch\\Helper\\": "tests/SprykerTest/Zed/Touch/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Touch module",
            "time": "2018-03-19T09:35:33+00:00"
        },
        {
            "name": "spryker/transfer",
            "version": "3.7.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/transfer.git",
                "reference": "6bdc0505c9817e6fa22606e28a6816e453a44e6e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/transfer/zipball/6bdc0505c9817e6fa22606e28a6816e453a44e6e",
                "reference": "6bdc0505c9817e6fa22606e28a6816e453a44e6e",
                "shasum": ""
            },
            "require": {
                "fzaninotto/faker": "^1.6",
                "php": ">=7.1",
                "spryker/kernel": "^3.17.0",
                "spryker/log": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/twig": "^3.0.0",
                "spryker/zend": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Transfer\\Helper\\": "tests/SprykerTest/Shared/Transfer/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Transfer module",
            "time": "2018-11-28T08:11:02+00:00"
        },
        {
            "name": "spryker/twig",
            "version": "3.3.4",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/twig.git",
                "reference": "3cdbe8c977bd8f1ddd00b56bb9ca83d8b472b32e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/twig/zipball/3cdbe8c977bd8f1ddd00b56bb9ca83d8b472b32e",
                "reference": "3cdbe8c977bd8f1ddd00b56bb9ca83d8b472b32e",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-text": "^1.0.0",
                "spryker/zend": "^2.0.0",
                "twig/twig": "^1.20.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/config": "*",
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/config": "If you want to use the TwigServiceProvider.",
                "spryker/silex": "If you want to use the TwigServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Twig module",
            "time": "2019-01-11T11:55:05+00:00"
        },
        {
            "name": "spryker/url",
            "version": "3.4.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/url.git",
                "reference": "1dbd3ce30117f7c33781bd23994bb223cf1ae787"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/url/zipball/1dbd3ce30117f7c33781bd23994bb223cf1ae787",
                "reference": "1dbd3ce30117f7c33781bd23994bb223cf1ae787",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/key-builder": "^1.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/storage": "^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^3.0.0 || ^4.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/twig": "*",
                "spryker/util-text": "*"
            },
            "suggest": {
                "spryker/silex": "Required by url Twig component.",
                "spryker/twig": "Required because of the url component."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Url module",
            "time": "2018-12-03T12:12:23+00:00"
        },
        {
            "name": "spryker/url-collector",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/url-collector.git",
                "reference": "f93204cd72fb73eedfcc929d6b666bb1479b8e34"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/url-collector/zipball/f93204cd72fb73eedfcc929d6b666bb1479b8e34",
                "reference": "f93204cd72fb73eedfcc929d6b666bb1479b8e34",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/collector": "^6.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/touch": "^4.0.0",
                "spryker/url": "^3.0.0",
                "spryker/util-data-reader": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*",
                "spryker/twig": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UrlCollector module",
            "time": "2018-02-20T13:23:25+00:00"
        },
        {
            "name": "spryker/url-storage",
            "version": "1.4.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/url-storage.git",
                "reference": "997b70a3bb146f1b77dffda40608486991b2db29"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/url-storage/zipball/997b70a3bb146f1b77dffda40608486991b2db29",
                "reference": "997b70a3bb146f1b77dffda40608486991b2db29",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/event-behavior": "^1.1.0",
                "spryker/kernel": "^3.21.0",
                "spryker/locale": "^3.0.0",
                "spryker/propel-orm": "^1.5.0",
                "spryker/storage": "^3.4.0",
                "spryker/store": "^1.9.0",
                "spryker/synchronization": "^0.2.0 || ^1.0.0",
                "spryker/synchronization-extension": "^1.0.0",
                "spryker/url": "^3.3.0",
                "spryker/util-sanitize": "^2.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/event": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/event": "If you want to use Event plugins, minimum required version: 2.1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UrlStorage module",
            "time": "2019-01-23T09:49:21+00:00"
        },
        {
            "name": "spryker/user",
            "version": "3.5.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/user.git",
                "reference": "51acd92db7bd8e62b7dd6fa1911d8c15fe61fd5e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/user/zipball/51acd92db7bd8e62b7dd6fa1911d8c15fe61fd5e",
                "reference": "51acd92db7bd8e62b7dd6fa1911d8c15fe61fd5e",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/gui": "^3.10.0",
                "spryker/kernel": "^3.0.0",
                "spryker/session": "^3.1.1 || ^4.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/user-extension": "^1.0.0",
                "spryker/util-date-time": "^1.0.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/application": "*",
                "spryker/installer": "*",
                "spryker/propel": "*",
                "spryker/sales": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/zed-navigation": "*"
            },
            "suggest": {
                "spryker/installer": "If you want to use Installer plugin.",
                "spryker/silex": "If you want to use ServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\User\\Helper\\": "tests/SprykerTest/Shared/User/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "User module",
            "time": "2019-01-22T13:12:24+00:00"
        },
        {
            "name": "spryker/user-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/user-extension.git",
                "reference": "9988dd099cf32bb188e6397fb3a2d559f86dc664"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/user-extension/zipball/9988dd099cf32bb188e6397fb3a2d559f86dc664",
                "reference": "9988dd099cf32bb188e6397fb3a2d559f86dc664",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/gui": "*",
                "spryker/symfony": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/gui": "Required to use table in plugins.",
                "spryker/symfony": "Required to use form in plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UserExtension module",
            "time": "2018-09-05T07:46:20+00:00"
        },
        {
            "name": "spryker/util-csv",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/util-csv.git",
                "reference": "b90e0453dd6555297eebba14923e0ee21d90d6f3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/util-csv/zipball/b90e0453dd6555297eebba14923e0ee21d90d6f3",
                "reference": "b90e0453dd6555297eebba14923e0ee21d90d6f3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/symfony": "^3.1.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UtilCsv module",
            "time": "2018-07-10T12:34:02+00:00"
        },
        {
            "name": "spryker/util-data-reader",
            "version": "1.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/UtilDataReader.git",
                "reference": "cfcc0a1c57ff051f9c5eb018d9c681f3c797457c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/UtilDataReader/zipball/cfcc0a1c57ff051f9c5eb018d9c681f3c797457c",
                "reference": "cfcc0a1c57ff051f9c5eb018d9c681f3c797457c",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.3.0",
                "spryker/propel-orm": "^1.0.0",
                "spryker/sql-criteria-builder": "^1.0.0",
                "spryker/symfony": "^3.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UtilDataReader module",
            "time": "2017-10-25T08:03:49+00:00"
        },
        {
            "name": "spryker/util-date-time",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/UtilDateTime.git",
                "reference": "2692e02ce1377cf40b3278933f13416e15039f0d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/UtilDateTime/zipball/2692e02ce1377cf40b3278933f13416e15039f0d",
                "reference": "2692e02ce1377cf40b3278933f13416e15039f0d",
                "shasum": ""
            },
            "require": {
                "spryker/config": "^3.0.0",
                "spryker/kernel": "^3.3.0",
                "spryker/silex": "^2.0.0",
                "spryker/twig": "^3.1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UtilDateTime module",
            "time": "2017-10-24T13:32:31+00:00"
        },
        {
            "name": "spryker/util-encoding",
            "version": "2.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/util-encoding.git",
                "reference": "757fb1c8260381762be56f4cb7079a0e5c1ac509"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/util-encoding/zipball/757fb1c8260381762be56f4cb7079a0e5c1ac509",
                "reference": "757fb1c8260381762be56f4cb7079a0e5c1ac509",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UtilEncoding module",
            "time": "2019-01-15T09:00:26+00:00"
        },
        {
            "name": "spryker/util-network",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/UtilNetwork.git",
                "reference": "d517edc9406274c5223b0842ebcb544800d19667"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/UtilNetwork/zipball/d517edc9406274c5223b0842ebcb544800d19667",
                "reference": "d517edc9406274c5223b0842ebcb544800d19667",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UtilNetwork module",
            "time": "2017-10-24T13:32:31+00:00"
        },
        {
            "name": "spryker/util-sanitize",
            "version": "2.1.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/util-sanitize.git",
                "reference": "a494e19199349491a762c7c8f0450bf64fdf5e53"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/util-sanitize/zipball/a494e19199349491a762c7c8f0450bf64fdf5e53",
                "reference": "a494e19199349491a762c7c8f0450bf64fdf5e53",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UtilSanitize module",
            "time": "2018-02-05T11:41:16+00:00"
        },
        {
            "name": "spryker/util-text",
            "version": "1.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/UtilText.git",
                "reference": "c7fbae692a06470b6d392831fc4352e8b03704de"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/UtilText/zipball/c7fbae692a06470b6d392831fc4352e8b03704de",
                "reference": "c7fbae692a06470b6d392831fc4352e8b03704de",
                "shasum": ""
            },
            "require": {
                "spryker/kernel": "^3.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UtilText module",
            "time": "2017-10-24T13:32:31+00:00"
        },
        {
            "name": "spryker/util-uuid-generator",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/util-uuid-generator.git",
                "reference": "060829b2e2449be8247b0b2ffe116d406dc518fe"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/util-uuid-generator/zipball/060829b2e2449be8247b0b2ffe116d406dc518fe",
                "reference": "060829b2e2449be8247b0b2ffe116d406dc518fe",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/ramsey-uuid": "^1.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UtilUuidGenerator module",
            "time": "2018-07-26T08:59:06+00:00"
        },
        {
            "name": "spryker/util-validate",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/UtilValidate.git",
                "reference": "e9bb63d9ff8262a3c38579d260dab78de4b4fefb"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/UtilValidate/zipball/e9bb63d9ff8262a3c38579d260dab78de4b4fefb",
                "reference": "e9bb63d9ff8262a3c38579d260dab78de4b4fefb",
                "shasum": ""
            },
            "require": {
                "spryker/egulias": "^1.0.0",
                "spryker/kernel": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "UtilValidate module",
            "time": "2017-11-09T13:55:22+00:00"
        },
        {
            "name": "spryker/wishlist",
            "version": "6.4.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/wishlist.git",
                "reference": "d1216fd4673b38e351582718baabb63aad191bc1"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/wishlist/zipball/d1216fd4673b38e351582718baabb63aad191bc1",
                "reference": "d1216fd4673b38e351582718baabb63aad191bc1",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/cart": "^5.0.0",
                "spryker/customer": "^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/price-product": "^1.0.0 || ^2.0.0",
                "spryker/product": "^5.0.0 || ^6.0.0",
                "spryker/propel-orm": "^1.1.0",
                "spryker/wishlist-extension": "^1.0.0",
                "spryker/zed-request": "^3.0.0"
            },
            "require-dev": {
                "spryker/propel": "*",
                "spryker/stock": "^4.0.0 || ^5.0.0",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Wishlist module",
            "time": "2019-01-22T11:43:30+00:00"
        },
        {
            "name": "spryker/wishlist-extension",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/wishlist-extension.git",
                "reference": "963dde78f4a9c40d99419d5798782e1cf9167fae"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/wishlist-extension/zipball/963dde78f4a9c40d99419d5798782e1cf9167fae",
                "reference": "963dde78f4a9c40d99419d5798782e1cf9167fae",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "WishlistExtension module",
            "time": "2018-07-20T08:40:49+00:00"
        },
        {
            "name": "spryker/zed-navigation",
            "version": "1.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/zed-navigation.git",
                "reference": "23635784deccdcbee830db56ae6a1c0965849ee2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/zed-navigation/zipball/23635784deccdcbee830db56ae6a1c0965849ee2",
                "reference": "23635784deccdcbee830db56ae6a1c0965849ee2",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "spryker/log": "^2.0.0 || ^3.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/url": "^3.0.0",
                "spryker/util-encoding": "^2.0.0",
                "spryker/zend": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/silex": "*",
                "spryker/testify": "*",
                "spryker/twig": "*"
            },
            "suggest": {
                "spryker/silex": "If you want to use ServiceProvider.",
                "spryker/twig": "If you want to use ZedNavigationServiceProvider."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\ZedNavigation\\Helper\\": "tests/SprykerTest/Zed/ZedNavigation/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ZedNavigation module",
            "time": "2018-08-21T15:51:59+00:00"
        },
        {
            "name": "spryker/zed-request",
            "version": "3.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/zed-request.git",
                "reference": "d224ff6c8b6581474bb1f285662f67f97bc6ed64"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/zed-request/zipball/d224ff6c8b6581474bb1f285662f67f97bc6ed64",
                "reference": "d224ff6c8b6581474bb1f285662f67f97bc6ed64",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/application": "^3.2.0",
                "spryker/config": "^3.0.0",
                "spryker/guzzle": "^2.1.0",
                "spryker/kernel": "^3.0.0",
                "spryker/messenger": "^3.0.0",
                "spryker/silex": "^2.0.0",
                "spryker/symfony": "^3.0.0",
                "spryker/util-network": "^1.1.0",
                "spryker/util-text": "^1.1.0"
            },
            "require-dev": {
                "spryker/log": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/log": "Required for using the Log middleware"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\ZedRequest\\Helper\\": "tests/SprykerTest/Zed/ZedRequest/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "ZedRequest module",
            "time": "2019-01-11T11:55:05+00:00"
        },
        {
            "name": "spryker/zend",
            "version": "2.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/Zend.git",
                "reference": "820b8ecbadc8fb54b9e1e1048a788366f3248183"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/Zend/zipball/820b8ecbadc8fb54b9e1e1048a788366f3248183",
                "reference": "820b8ecbadc8fb54b9e1e1048a788366f3248183",
                "shasum": ""
            },
            "require": {
                "zendframework/zend-config": "^2.5.1 || ^3.1.0",
                "zendframework/zend-filter": "^2.5.1",
                "zendframework/zend-servicemanager": "^2.7.4 || ^3.3.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Zend module",
            "time": "2017-08-02T16:31:17+00:00"
        },
        {
            "name": "swiftmailer/swiftmailer",
            "version": "v5.4.12",
            "source": {
                "type": "git",
                "url": "https://github.com/swiftmailer/swiftmailer.git",
                "reference": "181b89f18a90f8925ef805f950d47a7190e9b950"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/swiftmailer/swiftmailer/zipball/181b89f18a90f8925ef805f950d47a7190e9b950",
                "reference": "181b89f18a90f8925ef805f950d47a7190e9b950",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3"
            },
            "require-dev": {
                "mockery/mockery": "~0.9.1",
                "symfony/phpunit-bridge": "~3.2"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.4-dev"
                }
            },
            "autoload": {
                "files": [
                    "lib/swift_required.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Chris Corbyn"
                },
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                }
            ],
            "description": "Swiftmailer, free feature-rich PHP mailer",
            "homepage": "https://swiftmailer.symfony.com",
            "keywords": [
                "email",
                "mail",
                "mailer"
            ],
            "time": "2018-07-31T09:26:32+00:00"
        },
        {
            "name": "symfony-cmf/routing",
            "version": "1.4.1",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony-cmf/routing.git",
                "reference": "fb1e7f85ff8c6866238b7e73a490a0a0243ae8ac"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony-cmf/routing/zipball/fb1e7f85ff8c6866238b7e73a490a0a0243ae8ac",
                "reference": "fb1e7f85ff8c6866238b7e73a490a0a0243ae8ac",
                "shasum": ""
            },
            "require": {
                "php": "^5.3.9|^7.0",
                "psr/log": "1.*",
                "symfony/http-kernel": "^2.2|3.*",
                "symfony/routing": "^2.2|3.*"
            },
            "require-dev": {
                "friendsofsymfony/jsrouting-bundle": "^1.1",
                "symfony-cmf/testing": "^1.3",
                "symfony/config": "^2.2|3.*",
                "symfony/dependency-injection": "^2.0.5|3.*",
                "symfony/event-dispatcher": "^2.1|3.*"
            },
            "suggest": {
                "symfony/event-dispatcher": "DynamicRouter can optionally trigger an event at the start of matching. Minimal version (~2.1)"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Cmf\\Component\\Routing\\": ""
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Symfony CMF Community",
                "homepage": "https://github.com/symfony-cmf/Routing/contributors"
            }],
            "description": "Extends the Symfony2 routing component for dynamic routes and chaining several routers",
            "homepage": "http://cmf.symfony.com",
            "keywords": [
                "database",
                "routing"
            ],
            "time": "2017-05-09T08:10:41+00:00"
        },
        {
            "name": "symfony/config",
            "version": "v4.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/config.git",
                "reference": "a7a7d0a0244cfc82f040729ccf769e6cf55a78fb"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/config/zipball/a7a7d0a0244cfc82f040729ccf769e6cf55a78fb",
                "reference": "a7a7d0a0244cfc82f040729ccf769e6cf55a78fb",
                "shasum": ""
            },
            "require": {
                "php": "^7.1.3",
                "symfony/filesystem": "~3.4|~4.0",
                "symfony/polyfill-ctype": "~1.8"
            },
            "conflict": {
                "symfony/finder": "<3.4"
            },
            "require-dev": {
                "symfony/dependency-injection": "~3.4|~4.0",
                "symfony/event-dispatcher": "~3.4|~4.0",
                "symfony/finder": "~3.4|~4.0",
                "symfony/yaml": "~3.4|~4.0"
            },
            "suggest": {
                "symfony/yaml": "To use the yaml reference dumper"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.2-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Config\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Config Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-03T09:07:35+00:00"
        },
        {
            "name": "symfony/console",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/console.git",
                "reference": "a700b874d3692bc8342199adfb6d3b99f62cc61a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/console/zipball/a700b874d3692bc8342199adfb6d3b99f62cc61a",
                "reference": "a700b874d3692bc8342199adfb6d3b99f62cc61a",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/debug": "~2.8|~3.0|~4.0",
                "symfony/polyfill-mbstring": "~1.0"
            },
            "conflict": {
                "symfony/dependency-injection": "<3.4",
                "symfony/process": "<3.3"
            },
            "require-dev": {
                "psr/log": "~1.0",
                "symfony/config": "~3.3|~4.0",
                "symfony/dependency-injection": "~3.4|~4.0",
                "symfony/event-dispatcher": "~2.8|~3.0|~4.0",
                "symfony/lock": "~3.4|~4.0",
                "symfony/process": "~3.3|~4.0"
            },
            "suggest": {
                "psr/log-implementation": "For using the console logger",
                "symfony/event-dispatcher": "",
                "symfony/lock": "",
                "symfony/process": ""
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Console\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Console Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-04T04:42:43+00:00"
        },
        {
            "name": "symfony/contracts",
            "version": "v1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/contracts.git",
                "reference": "1aa7ab2429c3d594dd70689604b5cf7421254cdf"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/contracts/zipball/1aa7ab2429c3d594dd70689604b5cf7421254cdf",
                "reference": "1aa7ab2429c3d594dd70689604b5cf7421254cdf",
                "shasum": ""
            },
            "require": {
                "php": "^7.1.3"
            },
            "require-dev": {
                "psr/cache": "^1.0",
                "psr/container": "^1.0"
            },
            "suggest": {
                "psr/cache": "When using the Cache contracts",
                "psr/container": "When using the Service contracts",
                "symfony/cache-contracts-implementation": "",
                "symfony/service-contracts-implementation": "",
                "symfony/translation-contracts-implementation": ""
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Contracts\\": ""
                },
                "exclude-from-classmap": [
                    "**/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "A set of abstractions extracted out of the Symfony components",
            "homepage": "https://symfony.com",
            "keywords": [
                "abstractions",
                "contracts",
                "decoupling",
                "interfaces",
                "interoperability",
                "standards"
            ],
            "time": "2018-12-05T08:06:11+00:00"
        },
        {
            "name": "symfony/debug",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/debug.git",
                "reference": "26d7f23b9bd0b93bee5583e4d6ca5cb1ab31b186"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/debug/zipball/26d7f23b9bd0b93bee5583e4d6ca5cb1ab31b186",
                "reference": "26d7f23b9bd0b93bee5583e4d6ca5cb1ab31b186",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "psr/log": "~1.0"
            },
            "conflict": {
                "symfony/http-kernel": ">=2.3,<2.3.24|~2.4.0|>=2.5,<2.5.9|>=2.6,<2.6.2"
            },
            "require-dev": {
                "symfony/http-kernel": "~2.8|~3.0|~4.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Debug\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Debug Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-01T13:45:19+00:00"
        },
        {
            "name": "symfony/event-dispatcher",
            "version": "v4.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/event-dispatcher.git",
                "reference": "887de6d34c86cf0cb6cbf910afb170cdb743cb5e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/event-dispatcher/zipball/887de6d34c86cf0cb6cbf910afb170cdb743cb5e",
                "reference": "887de6d34c86cf0cb6cbf910afb170cdb743cb5e",
                "shasum": ""
            },
            "require": {
                "php": "^7.1.3",
                "symfony/contracts": "^1.0"
            },
            "conflict": {
                "symfony/dependency-injection": "<3.4"
            },
            "require-dev": {
                "psr/log": "~1.0",
                "symfony/config": "~3.4|~4.0",
                "symfony/dependency-injection": "~3.4|~4.0",
                "symfony/expression-language": "~3.4|~4.0",
                "symfony/stopwatch": "~3.4|~4.0"
            },
            "suggest": {
                "symfony/dependency-injection": "",
                "symfony/http-kernel": ""
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.2-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\EventDispatcher\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony EventDispatcher Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-05T16:37:49+00:00"
        },
        {
            "name": "symfony/filesystem",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/filesystem.git",
                "reference": "c24ce3d18ccc9bb9d7e1d6ce9330fcc6061cafde"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/filesystem/zipball/c24ce3d18ccc9bb9d7e1d6ce9330fcc6061cafde",
                "reference": "c24ce3d18ccc9bb9d7e1d6ce9330fcc6061cafde",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/polyfill-ctype": "~1.8"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Filesystem\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Filesystem Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-01T13:45:19+00:00"
        },
        {
            "name": "symfony/finder",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/finder.git",
                "reference": "3f2a2ab6315dd7682d4c16dcae1e7b95c8b8555e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/finder/zipball/3f2a2ab6315dd7682d4c16dcae1e7b95c8b8555e",
                "reference": "3f2a2ab6315dd7682d4c16dcae1e7b95c8b8555e",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Finder\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Finder Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-01T13:45:19+00:00"
        },
        {
            "name": "symfony/form",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/form.git",
                "reference": "ddf55d5a380be3d76e7848e773a4c13d85d95844"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/form/zipball/ddf55d5a380be3d76e7848e773a4c13d85d95844",
                "reference": "ddf55d5a380be3d76e7848e773a4c13d85d95844",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/event-dispatcher": "~2.8|~3.0|~4.0",
                "symfony/intl": "^2.8.18|^3.2.5|~4.0",
                "symfony/options-resolver": "~3.4|~4.0",
                "symfony/polyfill-ctype": "~1.8",
                "symfony/polyfill-mbstring": "~1.0",
                "symfony/property-access": "~2.8|~3.0|~4.0"
            },
            "conflict": {
                "phpunit/phpunit": "<4.8.35|<5.4.3,>=5.0",
                "symfony/dependency-injection": "<3.3",
                "symfony/doctrine-bridge": "<2.7",
                "symfony/framework-bundle": "<3.4",
                "symfony/http-kernel": "<3.3.5",
                "symfony/twig-bridge": "<3.4.5|<4.0.5,>=4.0"
            },
            "require-dev": {
                "doctrine/collections": "~1.0",
                "symfony/config": "~2.7|~3.0|~4.0",
                "symfony/console": "~3.4|~4.0",
                "symfony/dependency-injection": "~3.3|~4.0",
                "symfony/http-foundation": "~2.8|~3.0|~4.0",
                "symfony/http-kernel": "^3.3.5|~4.0",
                "symfony/security-csrf": "^2.8.31|^3.3.13|~4.0",
                "symfony/translation": "~2.8|~3.0|~4.0",
                "symfony/validator": "^3.2.5|~4.0",
                "symfony/var-dumper": "~3.3.11|~3.4|~4.0"
            },
            "suggest": {
                "symfony/framework-bundle": "For templating with PHP.",
                "symfony/security-csrf": "For protecting forms against CSRF attacks.",
                "symfony/twig-bridge": "For templating with Twig.",
                "symfony/validator": "For form validation."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Form\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Form Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-05T06:17:43+00:00"
        },
        {
            "name": "symfony/http-foundation",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/http-foundation.git",
                "reference": "2b97319e68816d2120eee7f13f4b76da12e04d03"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/http-foundation/zipball/2b97319e68816d2120eee7f13f4b76da12e04d03",
                "reference": "2b97319e68816d2120eee7f13f4b76da12e04d03",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/polyfill-mbstring": "~1.1",
                "symfony/polyfill-php70": "~1.6"
            },
            "require-dev": {
                "symfony/expression-language": "~2.8|~3.0|~4.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\HttpFoundation\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony HttpFoundation Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-05T08:05:37+00:00"
        },
        {
            "name": "symfony/http-kernel",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/http-kernel.git",
                "reference": "60bd9d7444ca436e131c347d78ec039dd99a34b4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/http-kernel/zipball/60bd9d7444ca436e131c347d78ec039dd99a34b4",
                "reference": "60bd9d7444ca436e131c347d78ec039dd99a34b4",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "psr/log": "~1.0",
                "symfony/debug": "~2.8|~3.0|~4.0",
                "symfony/event-dispatcher": "~2.8|~3.0|~4.0",
                "symfony/http-foundation": "~3.4.12|~4.0.12|^4.1.1",
                "symfony/polyfill-ctype": "~1.8"
            },
            "conflict": {
                "symfony/config": "<2.8",
                "symfony/dependency-injection": "<3.4.10|<4.0.10,>=4",
                "symfony/var-dumper": "<3.3",
                "twig/twig": "<1.34|<2.4,>=2"
            },
            "provide": {
                "psr/log-implementation": "1.0"
            },
            "require-dev": {
                "psr/cache": "~1.0",
                "symfony/browser-kit": "~2.8|~3.0|~4.0",
                "symfony/class-loader": "~2.8|~3.0",
                "symfony/config": "~2.8|~3.0|~4.0",
                "symfony/console": "~2.8|~3.0|~4.0",
                "symfony/css-selector": "~2.8|~3.0|~4.0",
                "symfony/dependency-injection": "^3.4.10|^4.0.10",
                "symfony/dom-crawler": "~2.8|~3.0|~4.0",
                "symfony/expression-language": "~2.8|~3.0|~4.0",
                "symfony/finder": "~2.8|~3.0|~4.0",
                "symfony/process": "~2.8|~3.0|~4.0",
                "symfony/routing": "~3.4|~4.0",
                "symfony/stopwatch": "~2.8|~3.0|~4.0",
                "symfony/templating": "~2.8|~3.0|~4.0",
                "symfony/translation": "~2.8|~3.0|~4.0",
                "symfony/var-dumper": "~3.3|~4.0"
            },
            "suggest": {
                "symfony/browser-kit": "",
                "symfony/config": "",
                "symfony/console": "",
                "symfony/dependency-injection": "",
                "symfony/finder": "",
                "symfony/var-dumper": ""
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\HttpKernel\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony HttpKernel Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-06T15:53:59+00:00"
        },
        {
            "name": "symfony/inflector",
            "version": "v4.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/inflector.git",
                "reference": "9f64271222922ef1a10e43f77d88baf72bf22b0e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/inflector/zipball/9f64271222922ef1a10e43f77d88baf72bf22b0e",
                "reference": "9f64271222922ef1a10e43f77d88baf72bf22b0e",
                "shasum": ""
            },
            "require": {
                "php": "^7.1.3",
                "symfony/polyfill-ctype": "~1.8"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.2-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Inflector\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Bernhard Schussek",
                    "email": "bschussek@gmail.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Inflector Component",
            "homepage": "https://symfony.com",
            "keywords": [
                "inflection",
                "pluralize",
                "singularize",
                "string",
                "symfony",
                "words"
            ],
            "time": "2019-01-03T09:07:35+00:00"
        },
        {
            "name": "symfony/intl",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/intl.git",
                "reference": "e79bfb70956e686a34ca6ab7847f73e50082a4f0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/intl/zipball/e79bfb70956e686a34ca6ab7847f73e50082a4f0",
                "reference": "e79bfb70956e686a34ca6ab7847f73e50082a4f0",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/polyfill-intl-icu": "~1.0"
            },
            "require-dev": {
                "symfony/filesystem": "~2.8|~3.0|~4.0"
            },
            "suggest": {
                "ext-intl": "to use the component with locales other than \"en\""
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Intl\\": ""
                },
                "classmap": [
                    "Resources/stubs"
                ],
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Bernhard Schussek",
                    "email": "bschussek@gmail.com"
                },
                {
                    "name": "Eriksen Costa",
                    "email": "eriksen.costa@infranology.com.br"
                },
                {
                    "name": "Igor Wiedler",
                    "email": "igor@wiedler.ch"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "A PHP replacement layer for the C intl extension that includes additional data from the ICU library.",
            "homepage": "https://symfony.com",
            "keywords": [
                "i18n",
                "icu",
                "internationalization",
                "intl",
                "l10n",
                "localization"
            ],
            "time": "2019-01-03T14:54:54+00:00"
        },
        {
            "name": "symfony/options-resolver",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/options-resolver.git",
                "reference": "8a10e36ffd04c0c551051594952304d34ecece71"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/options-resolver/zipball/8a10e36ffd04c0c551051594952304d34ecece71",
                "reference": "8a10e36ffd04c0c551051594952304d34ecece71",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\OptionsResolver\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony OptionsResolver Component",
            "homepage": "https://symfony.com",
            "keywords": [
                "config",
                "configuration",
                "options"
            ],
            "time": "2019-01-01T13:45:19+00:00"
        },
        {
            "name": "symfony/polyfill-ctype",
            "version": "v1.10.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-ctype.git",
                "reference": "e3d826245268269cd66f8326bd8bc066687b4a19"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-ctype/zipball/e3d826245268269cd66f8326bd8bc066687b4a19",
                "reference": "e3d826245268269cd66f8326bd8bc066687b4a19",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3"
            },
            "suggest": {
                "ext-ctype": "For best performance"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.9-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Polyfill\\Ctype\\": ""
                },
                "files": [
                    "bootstrap.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                },
                {
                    "name": "Gert de Pagter",
                    "email": "BackEndTea@gmail.com"
                }
            ],
            "description": "Symfony polyfill for ctype functions",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "ctype",
                "polyfill",
                "portable"
            ],
            "time": "2018-08-06T14:22:27+00:00"
        },
        {
            "name": "symfony/polyfill-intl-icu",
            "version": "v1.10.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-intl-icu.git",
                "reference": "f22a90256d577c7ef7efad8df1f0201663d57644"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-intl-icu/zipball/f22a90256d577c7ef7efad8df1f0201663d57644",
                "reference": "f22a90256d577c7ef7efad8df1f0201663d57644",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3",
                "symfony/intl": "~2.3|~3.0|~4.0"
            },
            "suggest": {
                "ext-intl": "For best performance"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.9-dev"
                }
            },
            "autoload": {
                "files": [
                    "bootstrap.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill for intl's ICU-related data and classes",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "icu",
                "intl",
                "polyfill",
                "portable",
                "shim"
            ],
            "time": "2018-08-06T14:22:27+00:00"
        },
        {
            "name": "symfony/polyfill-mbstring",
            "version": "v1.10.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-mbstring.git",
                "reference": "c79c051f5b3a46be09205c73b80b346e4153e494"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-mbstring/zipball/c79c051f5b3a46be09205c73b80b346e4153e494",
                "reference": "c79c051f5b3a46be09205c73b80b346e4153e494",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3"
            },
            "suggest": {
                "ext-mbstring": "For best performance"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.9-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Polyfill\\Mbstring\\": ""
                },
                "files": [
                    "bootstrap.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill for the Mbstring extension",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "mbstring",
                "polyfill",
                "portable",
                "shim"
            ],
            "time": "2018-09-21T13:07:52+00:00"
        },
        {
            "name": "symfony/polyfill-php56",
            "version": "v1.10.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-php56.git",
                "reference": "ff208829fe1aa48ab9af356992bb7199fed551af"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-php56/zipball/ff208829fe1aa48ab9af356992bb7199fed551af",
                "reference": "ff208829fe1aa48ab9af356992bb7199fed551af",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3",
                "symfony/polyfill-util": "~1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.9-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Polyfill\\Php56\\": ""
                },
                "files": [
                    "bootstrap.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill backporting some PHP 5.6+ features to lower PHP versions",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "polyfill",
                "portable",
                "shim"
            ],
            "time": "2018-09-21T06:26:08+00:00"
        },
        {
            "name": "symfony/polyfill-php70",
            "version": "v1.10.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-php70.git",
                "reference": "6b88000cdd431cd2e940caa2cb569201f3f84224"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-php70/zipball/6b88000cdd431cd2e940caa2cb569201f3f84224",
                "reference": "6b88000cdd431cd2e940caa2cb569201f3f84224",
                "shasum": ""
            },
            "require": {
                "paragonie/random_compat": "~1.0|~2.0|~9.99",
                "php": ">=5.3.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.9-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Polyfill\\Php70\\": ""
                },
                "files": [
                    "bootstrap.php"
                ],
                "classmap": [
                    "Resources/stubs"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill backporting some PHP 7.0+ features to lower PHP versions",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "polyfill",
                "portable",
                "shim"
            ],
            "time": "2018-09-21T06:26:08+00:00"
        },
        {
            "name": "symfony/polyfill-util",
            "version": "v1.10.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-util.git",
                "reference": "3b58903eae668d348a7126f999b0da0f2f93611c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-util/zipball/3b58903eae668d348a7126f999b0da0f2f93611c",
                "reference": "3b58903eae668d348a7126f999b0da0f2f93611c",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.9-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Polyfill\\Util\\": ""
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony utilities for portability of PHP codes",
            "homepage": "https://symfony.com",
            "keywords": [
                "compat",
                "compatibility",
                "polyfill",
                "shim"
            ],
            "time": "2018-09-30T16:36:12+00:00"
        },
        {
            "name": "symfony/process",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/process.git",
                "reference": "0d41dd7d95ed179aed6a13393b0f4f97bfa2d25c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/process/zipball/0d41dd7d95ed179aed6a13393b0f4f97bfa2d25c",
                "reference": "0d41dd7d95ed179aed6a13393b0f4f97bfa2d25c",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Process\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Process Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-02T21:24:08+00:00"
        },
        {
            "name": "symfony/property-access",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/property-access.git",
                "reference": "2d14c17d63ede1f23bb8a591a3255e63ecfef85f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/property-access/zipball/2d14c17d63ede1f23bb8a591a3255e63ecfef85f",
                "reference": "2d14c17d63ede1f23bb8a591a3255e63ecfef85f",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/inflector": "~3.1|~4.0",
                "symfony/polyfill-php70": "~1.0"
            },
            "require-dev": {
                "symfony/cache": "~3.1|~4.0"
            },
            "suggest": {
                "psr/cache-implementation": "To cache access methods."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\PropertyAccess\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony PropertyAccess Component",
            "homepage": "https://symfony.com",
            "keywords": [
                "access",
                "array",
                "extraction",
                "index",
                "injection",
                "object",
                "property",
                "property path",
                "reflection"
            ],
            "time": "2019-01-01T13:45:19+00:00"
        },
        {
            "name": "symfony/routing",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/routing.git",
                "reference": "445d3629a26930158347a50d1a5f2456c49e0ae6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/routing/zipball/445d3629a26930158347a50d1a5f2456c49e0ae6",
                "reference": "445d3629a26930158347a50d1a5f2456c49e0ae6",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8"
            },
            "conflict": {
                "symfony/config": "<3.3.1",
                "symfony/dependency-injection": "<3.3",
                "symfony/yaml": "<3.4"
            },
            "require-dev": {
                "doctrine/annotations": "~1.0",
                "psr/log": "~1.0",
                "symfony/config": "^3.3.1|~4.0",
                "symfony/dependency-injection": "~3.3|~4.0",
                "symfony/expression-language": "~2.8|~3.0|~4.0",
                "symfony/http-foundation": "~2.8|~3.0|~4.0",
                "symfony/yaml": "~3.4|~4.0"
            },
            "suggest": {
                "doctrine/annotations": "For using the annotation loader",
                "symfony/config": "For using the all-in-one router or any loader",
                "symfony/dependency-injection": "For loading routes from a service",
                "symfony/expression-language": "For using expression matching",
                "symfony/http-foundation": "For using a Symfony Request object",
                "symfony/yaml": "For using the YAML loader"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Routing\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Routing Component",
            "homepage": "https://symfony.com",
            "keywords": [
                "router",
                "routing",
                "uri",
                "url"
            ],
            "time": "2019-01-01T13:45:19+00:00"
        },
        {
            "name": "symfony/security",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/security.git",
                "reference": "cf155892eda9ac8ecab73ab93f04273ab2d0a077"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/security/zipball/cf155892eda9ac8ecab73ab93f04273ab2d0a077",
                "reference": "cf155892eda9ac8ecab73ab93f04273ab2d0a077",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/event-dispatcher": "~2.8|~3.0|~4.0",
                "symfony/http-foundation": "^2.8.31|~3.3.13|~3.4|~4.0",
                "symfony/http-kernel": "~3.3|~4.0",
                "symfony/polyfill-php56": "~1.0",
                "symfony/polyfill-php70": "~1.0",
                "symfony/property-access": "~2.8|~3.0|~4.0"
            },
            "replace": {
                "symfony/security-core": "self.version",
                "symfony/security-csrf": "self.version",
                "symfony/security-guard": "self.version",
                "symfony/security-http": "self.version"
            },
            "require-dev": {
                "psr/container": "^1.0",
                "psr/log": "~1.0",
                "symfony/expression-language": "~2.8|~3.0|~4.0",
                "symfony/finder": "~2.8|~3.0|~4.0",
                "symfony/ldap": "~3.1|~4.0",
                "symfony/polyfill-intl-icu": "~1.0",
                "symfony/routing": "~2.8|~3.0|~4.0",
                "symfony/validator": "^3.2.5|~4.0"
            },
            "suggest": {
                "psr/container-implementation": "To instantiate the Security class",
                "symfony/expression-language": "For using the expression voter",
                "symfony/form": "",
                "symfony/ldap": "For using the LDAP user and authentication providers",
                "symfony/routing": "For using the HttpUtils class to create sub-requests, redirect the user, and match URLs",
                "symfony/validator": "For using the user password constraint"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Security\\": ""
                },
                "exclude-from-classmap": [
                    "/Core/Tests/",
                    "/Csrf/Tests/",
                    "/Guard/Tests/",
                    "/Http/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Security Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-01T13:45:19+00:00"
        },
        {
            "name": "symfony/serializer",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/serializer.git",
                "reference": "3bb84f8a785bf30be3d4aef6f3c80f103acc54df"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/serializer/zipball/3bb84f8a785bf30be3d4aef6f3c80f103acc54df",
                "reference": "3bb84f8a785bf30be3d4aef6f3c80f103acc54df",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/polyfill-ctype": "~1.8"
            },
            "conflict": {
                "phpdocumentor/type-resolver": "<0.2.1",
                "symfony/dependency-injection": "<3.2",
                "symfony/property-access": ">=3.0,<3.0.4|>=2.8,<2.8.4",
                "symfony/property-info": "<3.1",
                "symfony/yaml": "<3.4"
            },
            "require-dev": {
                "doctrine/annotations": "~1.0",
                "doctrine/cache": "~1.0",
                "phpdocumentor/reflection-docblock": "^3.0|^4.0",
                "symfony/cache": "~3.1|~4.0",
                "symfony/config": "~2.8|~3.0|~4.0",
                "symfony/dependency-injection": "~3.2|~4.0",
                "symfony/http-foundation": "~2.8|~3.0|~4.0",
                "symfony/property-access": "~2.8|~3.0|~4.0",
                "symfony/property-info": "~3.1|~4.0",
                "symfony/yaml": "~3.4|~4.0"
            },
            "suggest": {
                "doctrine/annotations": "For using the annotation mapping. You will also need doctrine/cache.",
                "doctrine/cache": "For using the default cached annotation reader and metadata cache.",
                "psr/cache-implementation": "For using the metadata cache.",
                "symfony/config": "For using the XML mapping loader.",
                "symfony/http-foundation": "To use the DataUriNormalizer.",
                "symfony/property-access": "For using the ObjectNormalizer.",
                "symfony/property-info": "To deserialize relations.",
                "symfony/yaml": "For using the default YAML mapping loader."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Serializer\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Serializer Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-01T13:45:19+00:00"
        },
        {
            "name": "symfony/stopwatch",
            "version": "v4.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/stopwatch.git",
                "reference": "af62b35760fc92c8dbdce659b4eebdfe0e6a0472"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/stopwatch/zipball/af62b35760fc92c8dbdce659b4eebdfe0e6a0472",
                "reference": "af62b35760fc92c8dbdce659b4eebdfe0e6a0472",
                "shasum": ""
            },
            "require": {
                "php": "^7.1.3",
                "symfony/contracts": "^1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.2-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Stopwatch\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Stopwatch Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-03T09:07:35+00:00"
        },
        {
            "name": "symfony/translation",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/translation.git",
                "reference": "5f357063f4907cef47e5cf82fa3187fbfb700456"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/translation/zipball/5f357063f4907cef47e5cf82fa3187fbfb700456",
                "reference": "5f357063f4907cef47e5cf82fa3187fbfb700456",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/polyfill-mbstring": "~1.0"
            },
            "conflict": {
                "symfony/config": "<2.8",
                "symfony/dependency-injection": "<3.4",
                "symfony/yaml": "<3.4"
            },
            "require-dev": {
                "psr/log": "~1.0",
                "symfony/config": "~2.8|~3.0|~4.0",
                "symfony/dependency-injection": "~3.4|~4.0",
                "symfony/finder": "~2.8|~3.0|~4.0",
                "symfony/intl": "^2.8.18|^3.2.5|~4.0",
                "symfony/yaml": "~3.4|~4.0"
            },
            "suggest": {
                "psr/log-implementation": "To use logging capability in translator",
                "symfony/config": "",
                "symfony/yaml": ""
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Translation\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Translation Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-01T13:45:19+00:00"
        },
        {
            "name": "symfony/twig-bridge",
            "version": "v4.0.15",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/twig-bridge.git",
                "reference": "ff8f4e0b1e496d7b1f0bf99b56288a76e80b0d43"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/twig-bridge/zipball/ff8f4e0b1e496d7b1f0bf99b56288a76e80b0d43",
                "reference": "ff8f4e0b1e496d7b1f0bf99b56288a76e80b0d43",
                "shasum": ""
            },
            "require": {
                "php": "^7.1.3",
                "twig/twig": "^1.35|^2.4.4"
            },
            "conflict": {
                "symfony/console": "<3.4",
                "symfony/form": "<3.4.13|>=4.0,<4.0.13|>=4.1,<4.1.2"
            },
            "require-dev": {
                "symfony/asset": "~3.4|~4.0",
                "symfony/console": "~3.4|~4.0",
                "symfony/dependency-injection": "~3.4|~4.0",
                "symfony/expression-language": "~3.4|~4.0",
                "symfony/finder": "~3.4|~4.0",
                "symfony/form": "^3.4.13|~4.0.13|^4.1.2",
                "symfony/http-foundation": "~3.4|~4.0",
                "symfony/http-kernel": "~3.4|~4.0",
                "symfony/polyfill-intl-icu": "~1.0",
                "symfony/routing": "~3.4|~4.0",
                "symfony/security": "~3.4|~4.0",
                "symfony/security-acl": "~2.8|~3.0",
                "symfony/stopwatch": "~3.4|~4.0",
                "symfony/templating": "~3.4|~4.0",
                "symfony/translation": "~3.4|~4.0",
                "symfony/var-dumper": "~3.4|~4.0",
                "symfony/web-link": "~3.4|~4.0",
                "symfony/workflow": "~3.4|~4.0",
                "symfony/yaml": "~3.4|~4.0"
            },
            "suggest": {
                "symfony/asset": "For using the AssetExtension",
                "symfony/expression-language": "For using the ExpressionExtension",
                "symfony/finder": "",
                "symfony/form": "For using the FormExtension",
                "symfony/http-kernel": "For using the HttpKernelExtension",
                "symfony/routing": "For using the RoutingExtension",
                "symfony/security": "For using the SecurityExtension",
                "symfony/stopwatch": "For using the StopwatchExtension",
                "symfony/templating": "For using the TwigEngine",
                "symfony/translation": "For using the TranslationExtension",
                "symfony/var-dumper": "For using the DumpExtension",
                "symfony/web-link": "For using the WebLinkExtension",
                "symfony/yaml": "For using the YamlExtension"
            },
            "type": "symfony-bridge",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Bridge\\Twig\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Twig Bridge",
            "homepage": "https://symfony.com",
            "time": "2018-07-26T11:22:46+00:00"
        },
        {
            "name": "symfony/validator",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/validator.git",
                "reference": "cd3fba16d309347883b74bb0ee8cb4720a60554c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/validator/zipball/cd3fba16d309347883b74bb0ee8cb4720a60554c",
                "reference": "cd3fba16d309347883b74bb0ee8cb4720a60554c",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/polyfill-ctype": "~1.8",
                "symfony/polyfill-mbstring": "~1.0",
                "symfony/translation": "~2.8|~3.0|~4.0"
            },
            "conflict": {
                "phpunit/phpunit": "<4.8.35|<5.4.3,>=5.0",
                "symfony/dependency-injection": "<3.3",
                "symfony/http-kernel": "<3.3.5",
                "symfony/yaml": "<3.4"
            },
            "require-dev": {
                "doctrine/annotations": "~1.0",
                "doctrine/cache": "~1.0",
                "egulias/email-validator": "^1.2.8|~2.0",
                "symfony/cache": "~3.1|~4.0",
                "symfony/config": "~2.8|~3.0|~4.0",
                "symfony/dependency-injection": "~3.3|~4.0",
                "symfony/expression-language": "~2.8|~3.0|~4.0",
                "symfony/http-foundation": "~2.8|~3.0|~4.0",
                "symfony/http-kernel": "^3.3.5|~4.0",
                "symfony/intl": "^2.8.18|^3.2.5|~4.0",
                "symfony/property-access": "~2.8|~3.0|~4.0",
                "symfony/var-dumper": "~3.3|~4.0",
                "symfony/yaml": "~3.4|~4.0"
            },
            "suggest": {
                "doctrine/annotations": "For using the annotation mapping. You will also need doctrine/cache.",
                "doctrine/cache": "For using the default cached annotation reader and metadata cache.",
                "egulias/email-validator": "Strict (RFC compliant) email validation",
                "psr/cache-implementation": "For using the metadata cache.",
                "symfony/config": "",
                "symfony/expression-language": "For using the Expression validator",
                "symfony/http-foundation": "",
                "symfony/intl": "",
                "symfony/property-access": "For accessing properties within comparison constraints",
                "symfony/yaml": ""
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Validator\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Validator Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-06T14:07:11+00:00"
        },
        {
            "name": "symfony/yaml",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/yaml.git",
                "reference": "554a59a1ccbaac238a89b19c8e551a556fd0e2ea"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/yaml/zipball/554a59a1ccbaac238a89b19c8e551a556fd0e2ea",
                "reference": "554a59a1ccbaac238a89b19c8e551a556fd0e2ea",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/polyfill-ctype": "~1.8"
            },
            "conflict": {
                "symfony/console": "<3.4"
            },
            "require-dev": {
                "symfony/console": "~3.4|~4.0"
            },
            "suggest": {
                "symfony/console": "For validating YAML files using the lint command"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Yaml\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony Yaml Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-01T13:45:19+00:00"
        },
        {
            "name": "twig/twig",
            "version": "v1.37.1",
            "source": {
                "type": "git",
                "url": "https://github.com/twigphp/Twig.git",
                "reference": "66be9366c76cbf23e82e7171d47cbfa54a057a62"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/twigphp/Twig/zipball/66be9366c76cbf23e82e7171d47cbfa54a057a62",
                "reference": "66be9366c76cbf23e82e7171d47cbfa54a057a62",
                "shasum": ""
            },
            "require": {
                "php": ">=5.4.0",
                "symfony/polyfill-ctype": "^1.8"
            },
            "require-dev": {
                "psr/container": "^1.0",
                "symfony/debug": "^2.7",
                "symfony/phpunit-bridge": "^3.4.19|^4.1.8"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.37-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Twig_": "lib/"
                },
                "psr-4": {
                    "Twig\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com",
                    "homepage": "http://fabien.potencier.org",
                    "role": "Lead Developer"
                },
                {
                    "name": "Armin Ronacher",
                    "email": "armin.ronacher@active-4.com",
                    "role": "Project Founder"
                },
                {
                    "name": "Twig Team",
                    "homepage": "https://twig.symfony.com/contributors",
                    "role": "Contributors"
                }
            ],
            "description": "Twig, the flexible, fast, and secure template language for PHP",
            "homepage": "https://twig.symfony.com",
            "keywords": [
                "templating"
            ],
            "time": "2019-01-14T14:59:29+00:00"
        },
        {
            "name": "willdurand/negotiation",
            "version": "v2.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/willdurand/Negotiation.git",
                "reference": "03436ededa67c6e83b9b12defac15384cb399dc9"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/willdurand/Negotiation/zipball/03436ededa67c6e83b9b12defac15384cb399dc9",
                "reference": "03436ededa67c6e83b9b12defac15384cb399dc9",
                "shasum": ""
            },
            "require": {
                "php": ">=5.4.0"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.5"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.3-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Negotiation\\": "src/Negotiation"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "William Durand",
                "email": "will+git@drnd.me"
            }],
            "description": "Content Negotiation tools for PHP provided as a standalone library.",
            "homepage": "http://williamdurand.fr/Negotiation/",
            "keywords": [
                "accept",
                "content",
                "format",
                "header",
                "negotiation"
            ],
            "time": "2017-05-14T17:21:12+00:00"
        },
        {
            "name": "zendframework/zend-config",
            "version": "3.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/zendframework/zend-config.git",
                "reference": "6796f5dcba52c84ef2501d7313618989b5ef3023"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/zendframework/zend-config/zipball/6796f5dcba52c84ef2501d7313618989b5ef3023",
                "reference": "6796f5dcba52c84ef2501d7313618989b5ef3023",
                "shasum": ""
            },
            "require": {
                "ext-json": "*",
                "php": "^5.6 || ^7.0",
                "psr/container": "^1.0",
                "zendframework/zend-stdlib": "^2.7.7 || ^3.1"
            },
            "conflict": {
                "container-interop/container-interop": "<1.2.0"
            },
            "require-dev": {
                "malukenho/docheader": "^0.1.6",
                "phpunit/phpunit": "^5.7.27 || ^6.5.8 || ^7.1.2",
                "zendframework/zend-coding-standard": "~1.0.0",
                "zendframework/zend-filter": "^2.7.2",
                "zendframework/zend-i18n": "^2.7.4",
                "zendframework/zend-servicemanager": "^2.7.8 || ^3.3"
            },
            "suggest": {
                "zendframework/zend-filter": "^2.7.2; install if you want to use the Filter processor",
                "zendframework/zend-i18n": "^2.7.4; install if you want to use the Translator processor",
                "zendframework/zend-servicemanager": "^2.7.8 || ^3.3; if you need an extensible plugin manager for use with the Config Factory"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.2.x-dev",
                    "dev-develop": "3.3.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Zend\\Config\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "description": "provides a nested object property based user interface for accessing this configuration data within application code",
            "keywords": [
                "ZendFramework",
                "config",
                "zf"
            ],
            "time": "2018-04-24T19:26:44+00:00"
        },
        {
            "name": "zendframework/zend-filter",
            "version": "2.9.1",
            "source": {
                "type": "git",
                "url": "https://github.com/zendframework/zend-filter.git",
                "reference": "1c3e6d02f9cd5f6c929c9859498f5efbe216e86f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/zendframework/zend-filter/zipball/1c3e6d02f9cd5f6c929c9859498f5efbe216e86f",
                "reference": "1c3e6d02f9cd5f6c929c9859498f5efbe216e86f",
                "shasum": ""
            },
            "require": {
                "php": "^5.6 || ^7.0",
                "zendframework/zend-stdlib": "^2.7.7 || ^3.1"
            },
            "conflict": {
                "zendframework/zend-validator": "<2.10.1"
            },
            "require-dev": {
                "pear/archive_tar": "^1.4.3",
                "phpunit/phpunit": "^5.7.23 || ^6.4.3",
                "psr/http-factory": "^1.0",
                "zendframework/zend-coding-standard": "~1.0.0",
                "zendframework/zend-crypt": "^3.2.1",
                "zendframework/zend-servicemanager": "^2.7.8 || ^3.3",
                "zendframework/zend-uri": "^2.6"
            },
            "suggest": {
                "psr/http-factory-implementation": "psr/http-factory-implementation, for creating file upload instances when consuming PSR-7 in file upload filters",
                "zendframework/zend-crypt": "Zend\\Crypt component, for encryption filters",
                "zendframework/zend-i18n": "Zend\\I18n component for filters depending on i18n functionality",
                "zendframework/zend-servicemanager": "Zend\\ServiceManager component, for using the filter chain functionality",
                "zendframework/zend-uri": "Zend\\Uri component, for the UriNormalize filter"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.9.x-dev",
                    "dev-develop": "2.10.x-dev"
                },
                "zf": {
                    "component": "Zend\\Filter",
                    "config-provider": "Zend\\Filter\\ConfigProvider"
                }
            },
            "autoload": {
                "psr-4": {
                    "Zend\\Filter\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "description": "provides a set of commonly needed data filters",
            "keywords": [
                "ZendFramework",
                "filter",
                "zf"
            ],
            "time": "2018-12-17T16:00:04+00:00"
        },
        {
            "name": "zendframework/zend-servicemanager",
            "version": "3.4.0",
            "source": {
                "type": "git",
                "url": "https://github.com/zendframework/zend-servicemanager.git",
                "reference": "a1ed6140d0d3ee803fec96582593ed024950067b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/zendframework/zend-servicemanager/zipball/a1ed6140d0d3ee803fec96582593ed024950067b",
                "reference": "a1ed6140d0d3ee803fec96582593ed024950067b",
                "shasum": ""
            },
            "require": {
                "container-interop/container-interop": "^1.2",
                "php": "^5.6 || ^7.0",
                "psr/container": "^1.0",
                "zendframework/zend-stdlib": "^3.2.1"
            },
            "provide": {
                "container-interop/container-interop-implementation": "^1.2",
                "psr/container-implementation": "^1.0"
            },
            "require-dev": {
                "mikey179/vfsstream": "^1.6.5",
                "ocramius/proxy-manager": "^1.0 || ^2.0",
                "phpbench/phpbench": "^0.13.0",
                "phpunit/phpunit": "^5.7.25 || ^6.4.4",
                "zendframework/zend-coding-standard": "~1.0.0"
            },
            "suggest": {
                "ocramius/proxy-manager": "ProxyManager 1.* to handle lazy initialization of services",
                "zendframework/zend-stdlib": "zend-stdlib ^2.5 if you wish to use the MergeReplaceKey or MergeRemoveKey features in Config instances"
            },
            "bin": [
                "bin/generate-deps-for-config-factory",
                "bin/generate-factory-for-class"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.3-dev",
                    "dev-develop": "4.0-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Zend\\ServiceManager\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "description": "Factory-Driven Dependency Injection Container",
            "keywords": [
                "PSR-11",
                "ZendFramework",
                "dependency-injection",
                "di",
                "dic",
                "service-manager",
                "servicemanager",
                "zf"
            ],
            "time": "2018-12-22T06:05:09+00:00"
        },
        {
            "name": "zendframework/zend-stdlib",
            "version": "3.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/zendframework/zend-stdlib.git",
                "reference": "66536006722aff9e62d1b331025089b7ec71c065"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/zendframework/zend-stdlib/zipball/66536006722aff9e62d1b331025089b7ec71c065",
                "reference": "66536006722aff9e62d1b331025089b7ec71c065",
                "shasum": ""
            },
            "require": {
                "php": "^5.6 || ^7.0"
            },
            "require-dev": {
                "phpbench/phpbench": "^0.13",
                "phpunit/phpunit": "^5.7.27 || ^6.5.8 || ^7.1.2",
                "zendframework/zend-coding-standard": "~1.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.2.x-dev",
                    "dev-develop": "3.3.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Zend\\Stdlib\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "description": "SPL extensions, array utilities, error handlers, and more",
            "keywords": [
                "ZendFramework",
                "stdlib",
                "zf"
            ],
            "time": "2018-08-28T21:34:05+00:00"
        }
    ],
    "packages-dev": [{
            "name": "behat/gherkin",
            "version": "v4.4.5",
            "source": {
                "type": "git",
                "url": "https://github.com/Behat/Gherkin.git",
                "reference": "5c14cff4f955b17d20d088dec1bde61c0539ec74"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Behat/Gherkin/zipball/5c14cff4f955b17d20d088dec1bde61c0539ec74",
                "reference": "5c14cff4f955b17d20d088dec1bde61c0539ec74",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.1"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.5|~5",
                "symfony/phpunit-bridge": "~2.7|~3",
                "symfony/yaml": "~2.3|~3"
            },
            "suggest": {
                "symfony/yaml": "If you want to parse features, represented in YAML files"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.4-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Behat\\Gherkin": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Konstantin Kudryashov",
                "email": "ever.zet@gmail.com",
                "homepage": "http://everzet.com"
            }],
            "description": "Gherkin DSL parser for PHP 5.3",
            "homepage": "http://behat.org/",
            "keywords": [
                "BDD",
                "Behat",
                "Cucumber",
                "DSL",
                "gherkin",
                "parser"
            ],
            "time": "2016-10-30T11:50:56+00:00"
        },
        {
            "name": "codeception/codeception",
            "version": "2.3.9",
            "source": {
                "type": "git",
                "url": "https://github.com/Codeception/Codeception.git",
                "reference": "104f46fa0bde339f1bcc3a375aac21eb36e65a1e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Codeception/Codeception/zipball/104f46fa0bde339f1bcc3a375aac21eb36e65a1e",
                "reference": "104f46fa0bde339f1bcc3a375aac21eb36e65a1e",
                "shasum": ""
            },
            "require": {
                "behat/gherkin": "~4.4.0",
                "codeception/stub": "^1.0",
                "ext-json": "*",
                "ext-mbstring": "*",
                "facebook/webdriver": ">=1.1.3 <2.0",
                "guzzlehttp/guzzle": ">=4.1.4 <7.0",
                "guzzlehttp/psr7": "~1.0",
                "php": ">=5.4.0 <8.0",
                "phpunit/php-code-coverage": ">=2.2.4 <6.0",
                "phpunit/phpunit": ">=4.8.28 <5.0.0 || >=5.6.3 <7.0",
                "sebastian/comparator": ">1.1 <3.0",
                "sebastian/diff": ">=1.4 <3.0",
                "symfony/browser-kit": ">=2.7 <5.0",
                "symfony/console": ">=2.7 <5.0",
                "symfony/css-selector": ">=2.7 <5.0",
                "symfony/dom-crawler": ">=2.7 <5.0",
                "symfony/event-dispatcher": ">=2.7 <5.0",
                "symfony/finder": ">=2.7 <5.0",
                "symfony/yaml": ">=2.7 <5.0"
            },
            "require-dev": {
                "codeception/specify": "~0.3",
                "facebook/graph-sdk": "~5.3",
                "flow/jsonpath": "~0.2",
                "monolog/monolog": "~1.8",
                "pda/pheanstalk": "~3.0",
                "php-amqplib/php-amqplib": "~2.4",
                "predis/predis": "^1.0",
                "squizlabs/php_codesniffer": "~2.0",
                "symfony/process": ">=2.7 <5.0",
                "vlucas/phpdotenv": "^2.4.0"
            },
            "suggest": {
                "aws/aws-sdk-php": "For using AWS Auth in REST module and Queue module",
                "codeception/phpbuiltinserver": "Start and stop PHP built-in web server for your tests",
                "codeception/specify": "BDD-style code blocks",
                "codeception/verify": "BDD-style assertions",
                "flow/jsonpath": "For using JSONPath in REST module",
                "league/factory-muffin": "For DataFactory module",
                "league/factory-muffin-faker": "For Faker support in DataFactory module",
                "phpseclib/phpseclib": "for SFTP option in FTP Module",
                "stecman/symfony-console-completion": "For BASH autocompletion",
                "symfony/phpunit-bridge": "For phpunit-bridge support"
            },
            "bin": [
                "codecept"
            ],
            "type": "library",
            "extra": {
                "branch-alias": []
            },
            "autoload": {
                "psr-4": {
                    "Codeception\\": "src\\Codeception",
                    "Codeception\\Extension\\": "ext"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Michael Bodnarchuk",
                "email": "davert@mail.ua",
                "homepage": "http://codegyre.com"
            }],
            "description": "BDD-style testing framework",
            "homepage": "http://codeception.com/",
            "keywords": [
                "BDD",
                "TDD",
                "acceptance testing",
                "functional testing",
                "unit testing"
            ],
            "time": "2018-02-26T23:29:41+00:00"
        },
        {
            "name": "codeception/stub",
            "version": "1.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/Codeception/Stub.git",
                "reference": "681b62348837a5ef07d10d8a226f5bc358cc8805"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Codeception/Stub/zipball/681b62348837a5ef07d10d8a226f5bc358cc8805",
                "reference": "681b62348837a5ef07d10d8a226f5bc358cc8805",
                "shasum": ""
            },
            "require": {
                "phpunit/phpunit-mock-objects": ">2.3 <7.0"
            },
            "require-dev": {
                "phpunit/phpunit": ">=4.8 <8.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Codeception\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "Flexible Stub wrapper for PHPUnit's Mock Builder",
            "time": "2018-05-17T09:31:08+00:00"
        },
        {
            "name": "composer/xdebug-handler",
            "version": "1.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/composer/xdebug-handler.git",
                "reference": "dc523135366eb68f22268d069ea7749486458562"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/composer/xdebug-handler/zipball/dc523135366eb68f22268d069ea7749486458562",
                "reference": "dc523135366eb68f22268d069ea7749486458562",
                "shasum": ""
            },
            "require": {
                "php": "^5.3.2 || ^7.0",
                "psr/log": "^1.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^4.8.35 || ^5.7 || ^6.5"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Composer\\XdebugHandler\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "John Stevenson",
                "email": "john-stevenson@blueyonder.co.uk"
            }],
            "description": "Restarts a process without xdebug.",
            "keywords": [
                "Xdebug",
                "performance"
            ],
            "time": "2018-11-29T10:59:02+00:00"
        },
        {
            "name": "doctrine/instantiator",
            "version": "1.0.5",
            "source": {
                "type": "git",
                "url": "https://github.com/doctrine/instantiator.git",
                "reference": "8e884e78f9f0eb1329e445619e04456e64d8051d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/doctrine/instantiator/zipball/8e884e78f9f0eb1329e445619e04456e64d8051d",
                "reference": "8e884e78f9f0eb1329e445619e04456e64d8051d",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3,<8.0-DEV"
            },
            "require-dev": {
                "athletic/athletic": "~0.1.8",
                "ext-pdo": "*",
                "ext-phar": "*",
                "phpunit/phpunit": "~4.0",
                "squizlabs/php_codesniffer": "~2.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Doctrine\\Instantiator\\": "src/Doctrine/Instantiator/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Marco Pivetta",
                "email": "ocramius@gmail.com",
                "homepage": "http://ocramius.github.com/"
            }],
            "description": "A small, lightweight utility to instantiate objects in PHP without invoking their constructors",
            "homepage": "https://github.com/doctrine/instantiator",
            "keywords": [
                "constructor",
                "instantiate"
            ],
            "time": "2015-06-14T21:17:01+00:00"
        },
        {
            "name": "facebook/webdriver",
            "version": "1.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/facebook/php-webdriver.git",
                "reference": "77300c4ab2025d4316635f592ec849ca7323bd8c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/facebook/php-webdriver/zipball/77300c4ab2025d4316635f592ec849ca7323bd8c",
                "reference": "77300c4ab2025d4316635f592ec849ca7323bd8c",
                "shasum": ""
            },
            "require": {
                "ext-curl": "*",
                "php": "^5.5 || ~7.0",
                "symfony/process": "^2.8 || ^3.1"
            },
            "require-dev": {
                "friendsofphp/php-cs-fixer": "^1.11",
                "php-mock/php-mock-phpunit": "^1.1",
                "phpunit/phpunit": "4.6.* || ~5.0",
                "satooshi/php-coveralls": "^1.0",
                "squizlabs/php_codesniffer": "^2.6"
            },
            "suggest": {
                "phpdocumentor/phpdocumentor": "2.*"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Facebook\\WebDriver\\": "lib/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "Apache-2.0"
            ],
            "description": "A PHP client for WebDriver",
            "homepage": "https://github.com/facebook/php-webdriver",
            "keywords": [
                "facebook",
                "php",
                "selenium",
                "webdriver"
            ],
            "time": "2017-01-13T15:48:08+00:00"
        },
        {
            "name": "jakoch/phantomjs-installer",
            "version": "2.1.1-p09",
            "source": {
                "type": "git",
                "url": "https://github.com/jakoch/phantomjs-installer.git",
                "reference": "41c9fc2608adbc3905338c60829d6e4dd3b739bf"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/jakoch/phantomjs-installer/zipball/41c9fc2608adbc3905338c60829d6e4dd3b739bf",
                "reference": "41c9fc2608adbc3905338c60829d6e4dd3b739bf",
                "shasum": ""
            },
            "require": {
                "ext-bz2": "*",
                "ext-openssl": "*",
                "php": ">5.3"
            },
            "require-dev": {
                "composer/composer": "^1.2",
                "phpunit/phpunit": "^4.8"
            },
            "type": "custom-installer",
            "autoload": {
                "psr-4": {
                    "PhantomInstaller\\Test\\": "tests/"
                },
                "psr-0": {
                    "PhantomInstaller\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Jens-André Koch",
                "email": "jakoch@web.de"
            }],
            "description": "A Composer package which installs the PhantomJS binary (Linux, Windows, Mac) into `/bin` of your project.",
            "keywords": [
                "binaries",
                "headless",
                "phantomjs"
            ],
            "time": "2017-08-16T08:57:05+00:00"
        },
        {
            "name": "jean85/pretty-package-versions",
            "version": "1.2",
            "source": {
                "type": "git",
                "url": "https://github.com/Jean85/pretty-package-versions.git",
                "reference": "75c7effcf3f77501d0e0caa75111aff4daa0dd48"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Jean85/pretty-package-versions/zipball/75c7effcf3f77501d0e0caa75111aff4daa0dd48",
                "reference": "75c7effcf3f77501d0e0caa75111aff4daa0dd48",
                "shasum": ""
            },
            "require": {
                "ocramius/package-versions": "^1.2.0",
                "php": "^7.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^6.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Jean85\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Alessandro Lai",
                "email": "alessandro.lai85@gmail.com"
            }],
            "description": "A wrapper for ocramius/package-versions to get pretty versions strings",
            "keywords": [
                "composer",
                "package",
                "release",
                "versions"
            ],
            "time": "2018-06-13T13:22:40+00:00"
        },
        {
            "name": "mikey179/vfsStream",
            "version": "v1.6.5",
            "source": {
                "type": "git",
                "url": "https://github.com/mikey179/vfsStream.git",
                "reference": "d5fec95f541d4d71c4823bb5e30cf9b9e5b96145"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/mikey179/vfsStream/zipball/d5fec95f541d4d71c4823bb5e30cf9b9e5b96145",
                "reference": "d5fec95f541d4d71c4823bb5e30cf9b9e5b96145",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.0"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.5"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.6.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "org\\bovigo\\vfs\\": "src/main/php"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Frank Kleine",
                "homepage": "http://frankkleine.de/",
                "role": "Developer"
            }],
            "description": "Virtual file system to mock the real file system in unit tests.",
            "homepage": "http://vfs.bovigo.org/",
            "time": "2017-08-01T08:02:14+00:00"
        },
        {
            "name": "myclabs/deep-copy",
            "version": "1.8.1",
            "source": {
                "type": "git",
                "url": "https://github.com/myclabs/DeepCopy.git",
                "reference": "3e01bdad3e18354c3dce54466b7fbe33a9f9f7f8"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/myclabs/DeepCopy/zipball/3e01bdad3e18354c3dce54466b7fbe33a9f9f7f8",
                "reference": "3e01bdad3e18354c3dce54466b7fbe33a9f9f7f8",
                "shasum": ""
            },
            "require": {
                "php": "^7.1"
            },
            "replace": {
                "myclabs/deep-copy": "self.version"
            },
            "require-dev": {
                "doctrine/collections": "^1.0",
                "doctrine/common": "^2.6",
                "phpunit/phpunit": "^7.1"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "DeepCopy\\": "src/DeepCopy/"
                },
                "files": [
                    "src/DeepCopy/deep_copy.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "Create deep copies (clones) of your objects",
            "keywords": [
                "clone",
                "copy",
                "duplicate",
                "object",
                "object graph"
            ],
            "time": "2018-06-11T23:09:50+00:00"
        },
        {
            "name": "nette/bootstrap",
            "version": "v2.4.6",
            "source": {
                "type": "git",
                "url": "https://github.com/nette/bootstrap.git",
                "reference": "268816e3f1bb7426c3a4ceec2bd38a036b532543"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/nette/bootstrap/zipball/268816e3f1bb7426c3a4ceec2bd38a036b532543",
                "reference": "268816e3f1bb7426c3a4ceec2bd38a036b532543",
                "shasum": ""
            },
            "require": {
                "nette/di": "~2.4.7",
                "nette/utils": "~2.4",
                "php": ">=5.6.0"
            },
            "conflict": {
                "nette/nette": "<2.2"
            },
            "require-dev": {
                "latte/latte": "~2.2",
                "nette/application": "~2.3",
                "nette/caching": "~2.3",
                "nette/database": "~2.3",
                "nette/forms": "~2.3",
                "nette/http": "~2.4.0",
                "nette/mail": "~2.3",
                "nette/robot-loader": "^2.4.2 || ^3.0",
                "nette/safe-stream": "~2.2",
                "nette/security": "~2.3",
                "nette/tester": "~2.0",
                "tracy/tracy": "^2.4.1"
            },
            "suggest": {
                "nette/robot-loader": "to use Configurator::createRobotLoader()",
                "tracy/tracy": "to use Configurator::enableTracy()"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.4-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause",
                "GPL-2.0",
                "GPL-3.0"
            ],
            "authors": [{
                    "name": "David Grudl",
                    "homepage": "https://davidgrudl.com"
                },
                {
                    "name": "Nette Community",
                    "homepage": "https://nette.org/contributors"
                }
            ],
            "description": "🅱 Nette Bootstrap: the simple way to configure and bootstrap your Nette application.",
            "homepage": "https://nette.org",
            "keywords": [
                "bootstrapping",
                "configurator",
                "nette"
            ],
            "time": "2018-05-17T12:52:20+00:00"
        },
        {
            "name": "nette/di",
            "version": "v2.4.14",
            "source": {
                "type": "git",
                "url": "https://github.com/nette/di.git",
                "reference": "923da3e2c0aa53162ef455472c0ac7787b096c5a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/nette/di/zipball/923da3e2c0aa53162ef455472c0ac7787b096c5a",
                "reference": "923da3e2c0aa53162ef455472c0ac7787b096c5a",
                "shasum": ""
            },
            "require": {
                "ext-tokenizer": "*",
                "nette/neon": "^2.3.3 || ~3.0.0",
                "nette/php-generator": "^2.6.1 || ~3.0.0",
                "nette/utils": "^2.4.3 || ~3.0.0",
                "php": ">=5.6.0"
            },
            "conflict": {
                "nette/bootstrap": "<2.4",
                "nette/nette": "<2.2"
            },
            "require-dev": {
                "nette/tester": "^2.0",
                "tracy/tracy": "^2.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.4-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause",
                "GPL-2.0",
                "GPL-3.0"
            ],
            "authors": [{
                    "name": "David Grudl",
                    "homepage": "https://davidgrudl.com"
                },
                {
                    "name": "Nette Community",
                    "homepage": "https://nette.org/contributors"
                }
            ],
            "description": "💎 Nette Dependency Injection Container: Flexible, compiled and full-featured DIC with perfectly usable autowiring and support for all new PHP 7.1 features.",
            "homepage": "https://nette.org",
            "keywords": [
                "compiled",
                "di",
                "dic",
                "factory",
                "ioc",
                "nette",
                "static"
            ],
            "time": "2018-09-17T15:47:40+00:00"
        },
        {
            "name": "nette/finder",
            "version": "v2.4.2",
            "source": {
                "type": "git",
                "url": "https://github.com/nette/finder.git",
                "reference": "ee951a656cb8ac622e5dd33474a01fd2470505a0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/nette/finder/zipball/ee951a656cb8ac622e5dd33474a01fd2470505a0",
                "reference": "ee951a656cb8ac622e5dd33474a01fd2470505a0",
                "shasum": ""
            },
            "require": {
                "nette/utils": "~2.4",
                "php": ">=5.6.0"
            },
            "conflict": {
                "nette/nette": "<2.2"
            },
            "require-dev": {
                "nette/tester": "~2.0",
                "tracy/tracy": "^2.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.4-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause",
                "GPL-2.0",
                "GPL-3.0"
            ],
            "authors": [{
                    "name": "David Grudl",
                    "homepage": "https://davidgrudl.com"
                },
                {
                    "name": "Nette Community",
                    "homepage": "https://nette.org/contributors"
                }
            ],
            "description": "🔍 Nette Finder: find files and directories with an intuitive API.",
            "homepage": "https://nette.org",
            "keywords": [
                "filesystem",
                "glob",
                "iterator",
                "nette"
            ],
            "time": "2018-06-28T11:49:23+00:00"
        },
        {
            "name": "nette/neon",
            "version": "v2.4.3",
            "source": {
                "type": "git",
                "url": "https://github.com/nette/neon.git",
                "reference": "5e72b1dd3e2d34f0863c5561139a19df6a1ef398"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/nette/neon/zipball/5e72b1dd3e2d34f0863c5561139a19df6a1ef398",
                "reference": "5e72b1dd3e2d34f0863c5561139a19df6a1ef398",
                "shasum": ""
            },
            "require": {
                "ext-iconv": "*",
                "ext-json": "*",
                "php": ">=5.6.0"
            },
            "require-dev": {
                "nette/tester": "~2.0",
                "tracy/tracy": "^2.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.4-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause",
                "GPL-2.0",
                "GPL-3.0"
            ],
            "authors": [{
                    "name": "David Grudl",
                    "homepage": "https://davidgrudl.com"
                },
                {
                    "name": "Nette Community",
                    "homepage": "https://nette.org/contributors"
                }
            ],
            "description": "🍸 Nette NEON: encodes and decodes NEON file format.",
            "homepage": "http://ne-on.org",
            "keywords": [
                "export",
                "import",
                "neon",
                "nette",
                "yaml"
            ],
            "time": "2018-03-21T12:12:21+00:00"
        },
        {
            "name": "nette/php-generator",
            "version": "v2.6.4",
            "source": {
                "type": "git",
                "url": "https://github.com/nette/php-generator.git",
                "reference": "c1f6b2163c5471c4d94cd94b93362f12bceef183"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/nette/php-generator/zipball/c1f6b2163c5471c4d94cd94b93362f12bceef183",
                "reference": "c1f6b2163c5471c4d94cd94b93362f12bceef183",
                "shasum": ""
            },
            "require": {
                "nette/utils": "^2.4.2 || ~3.0.0",
                "php": ">=5.6.0"
            },
            "conflict": {
                "nette/nette": "<2.2"
            },
            "require-dev": {
                "nette/tester": "^2.0",
                "tracy/tracy": "^2.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.6-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause",
                "GPL-2.0",
                "GPL-3.0"
            ],
            "authors": [{
                    "name": "David Grudl",
                    "homepage": "https://davidgrudl.com"
                },
                {
                    "name": "Nette Community",
                    "homepage": "https://nette.org/contributors"
                }
            ],
            "description": "🐘 Nette PHP Generator: generates neat PHP code for you. Supports new PHP 7.1 features.",
            "homepage": "https://nette.org",
            "keywords": [
                "code",
                "nette",
                "php",
                "scaffolding"
            ],
            "time": "2018-04-26T16:47:39+00:00"
        },
        {
            "name": "nette/robot-loader",
            "version": "v3.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/nette/robot-loader.git",
                "reference": "fc76c70e740b10f091e502b2e393d0be912f38d4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/nette/robot-loader/zipball/fc76c70e740b10f091e502b2e393d0be912f38d4",
                "reference": "fc76c70e740b10f091e502b2e393d0be912f38d4",
                "shasum": ""
            },
            "require": {
                "ext-tokenizer": "*",
                "nette/finder": "^2.3 || ^3.0",
                "nette/utils": "^2.4 || ^3.0",
                "php": ">=5.6.0"
            },
            "conflict": {
                "nette/nette": "<2.2"
            },
            "require-dev": {
                "nette/tester": "^2.0",
                "tracy/tracy": "^2.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.1-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause",
                "GPL-2.0",
                "GPL-3.0"
            ],
            "authors": [{
                    "name": "David Grudl",
                    "homepage": "https://davidgrudl.com"
                },
                {
                    "name": "Nette Community",
                    "homepage": "https://nette.org/contributors"
                }
            ],
            "description": "🍀 Nette RobotLoader: high performance and comfortable autoloader that will search and autoload classes within your application.",
            "homepage": "https://nette.org",
            "keywords": [
                "autoload",
                "class",
                "interface",
                "nette",
                "trait"
            ],
            "time": "2018-08-13T14:19:06+00:00"
        },
        {
            "name": "nette/utils",
            "version": "v2.5.3",
            "source": {
                "type": "git",
                "url": "https://github.com/nette/utils.git",
                "reference": "17b9f76f2abd0c943adfb556e56f2165460b15ce"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/nette/utils/zipball/17b9f76f2abd0c943adfb556e56f2165460b15ce",
                "reference": "17b9f76f2abd0c943adfb556e56f2165460b15ce",
                "shasum": ""
            },
            "require": {
                "php": ">=5.6.0"
            },
            "conflict": {
                "nette/nette": "<2.2"
            },
            "require-dev": {
                "nette/tester": "~2.0",
                "tracy/tracy": "^2.3"
            },
            "suggest": {
                "ext-gd": "to use Image",
                "ext-iconv": "to use Strings::webalize() and toAscii()",
                "ext-intl": "for script transliteration in Strings::webalize() and toAscii()",
                "ext-json": "to use Nette\\Utils\\Json",
                "ext-mbstring": "to use Strings::lower() etc...",
                "ext-xml": "to use Strings::length() etc. when mbstring is not available"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.5-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ],
                "files": [
                    "src/loader.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause",
                "GPL-2.0",
                "GPL-3.0"
            ],
            "authors": [{
                    "name": "David Grudl",
                    "homepage": "https://davidgrudl.com"
                },
                {
                    "name": "Nette Community",
                    "homepage": "https://nette.org/contributors"
                }
            ],
            "description": "🛠 Nette Utils: lightweight utilities for string & array manipulation, image handling, safe JSON encoding/decoding, validation, slug or strong password generating etc.",
            "homepage": "https://nette.org",
            "keywords": [
                "array",
                "core",
                "datetime",
                "images",
                "json",
                "nette",
                "paginator",
                "password",
                "slugify",
                "string",
                "unicode",
                "utf-8",
                "utility",
                "validation"
            ],
            "time": "2018-09-18T10:22:16+00:00"
        },
        {
            "name": "nikic/php-parser",
            "version": "dev-master",
            "source": {
                "type": "git",
                "url": "https://github.com/nikic/PHP-Parser.git",
                "reference": "b7e63615366dfacfbf29af9823d55c92ddbfd043"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/nikic/PHP-Parser/zipball/b7e63615366dfacfbf29af9823d55c92ddbfd043",
                "reference": "b7e63615366dfacfbf29af9823d55c92ddbfd043",
                "shasum": ""
            },
            "require": {
                "ext-tokenizer": "*",
                "php": ">=7.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^6.5 || ^7.0"
            },
            "bin": [
                "bin/php-parse"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.2-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "PhpParser\\": "lib/PhpParser"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Nikita Popov"
            }],
            "description": "A PHP parser written in PHP",
            "keywords": [
                "parser",
                "php"
            ],
            "time": "2019-01-19T10:18:00+00:00"
        },
        {
            "name": "ocramius/package-versions",
            "version": "1.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/Ocramius/PackageVersions.git",
                "reference": "4489d5002c49d55576fa0ba786f42dbb009be46f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Ocramius/PackageVersions/zipball/4489d5002c49d55576fa0ba786f42dbb009be46f",
                "reference": "4489d5002c49d55576fa0ba786f42dbb009be46f",
                "shasum": ""
            },
            "require": {
                "composer-plugin-api": "^1.0.0",
                "php": "^7.1.0"
            },
            "require-dev": {
                "composer/composer": "^1.6.3",
                "ext-zip": "*",
                "infection/infection": "^0.7.1",
                "phpunit/phpunit": "^7.0.0"
            },
            "type": "composer-plugin",
            "extra": {
                "class": "PackageVersions\\Installer",
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "PackageVersions\\": "src/PackageVersions"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Marco Pivetta",
                "email": "ocramius@gmail.com"
            }],
            "description": "Composer plugin that provides efficient querying for installed package versions (no runtime IO)",
            "time": "2018-02-05T13:05:30+00:00"
        },
        {
            "name": "pdepend/pdepend",
            "version": "2.5.2",
            "source": {
                "type": "git",
                "url": "https://github.com/pdepend/pdepend.git",
                "reference": "9daf26d0368d4a12bed1cacae1a9f3a6f0adf239"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/pdepend/pdepend/zipball/9daf26d0368d4a12bed1cacae1a9f3a6f0adf239",
                "reference": "9daf26d0368d4a12bed1cacae1a9f3a6f0adf239",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.7",
                "symfony/config": "^2.3.0|^3|^4",
                "symfony/dependency-injection": "^2.3.0|^3|^4",
                "symfony/filesystem": "^2.3.0|^3|^4"
            },
            "require-dev": {
                "phpunit/phpunit": "^4.8|^5.7",
                "squizlabs/php_codesniffer": "^2.0.0"
            },
            "bin": [
                "src/bin/pdepend"
            ],
            "type": "library",
            "autoload": {
                "psr-4": {
                    "PDepend\\": "src/main/php/PDepend"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "description": "Official version of pdepend to be handled with Composer",
            "time": "2017-12-13T13:21:38+00:00"
        },
        {
            "name": "phar-io/manifest",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/phar-io/manifest.git",
                "reference": "2df402786ab5368a0169091f61a7c1e0eb6852d0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phar-io/manifest/zipball/2df402786ab5368a0169091f61a7c1e0eb6852d0",
                "reference": "2df402786ab5368a0169091f61a7c1e0eb6852d0",
                "shasum": ""
            },
            "require": {
                "ext-dom": "*",
                "ext-phar": "*",
                "phar-io/version": "^1.0.1",
                "php": "^5.6 || ^7.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                    "name": "Arne Blankerts",
                    "email": "arne@blankerts.de",
                    "role": "Developer"
                },
                {
                    "name": "Sebastian Heuer",
                    "email": "sebastian@phpeople.de",
                    "role": "Developer"
                },
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "Developer"
                }
            ],
            "description": "Component for reading phar.io manifest information from a PHP Archive (PHAR)",
            "time": "2017-03-05T18:14:27+00:00"
        },
        {
            "name": "phar-io/version",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/phar-io/version.git",
                "reference": "a70c0ced4be299a63d32fa96d9281d03e94041df"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phar-io/version/zipball/a70c0ced4be299a63d32fa96d9281d03e94041df",
                "reference": "a70c0ced4be299a63d32fa96d9281d03e94041df",
                "shasum": ""
            },
            "require": {
                "php": "^5.6 || ^7.0"
            },
            "type": "library",
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                    "name": "Arne Blankerts",
                    "email": "arne@blankerts.de",
                    "role": "Developer"
                },
                {
                    "name": "Sebastian Heuer",
                    "email": "sebastian@phpeople.de",
                    "role": "Developer"
                },
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "Developer"
                }
            ],
            "description": "Library for handling version information and constraints",
            "time": "2017-03-05T17:38:23+00:00"
        },
        {
            "name": "phpdocumentor/reflection-common",
            "version": "2.0.0-beta1",
            "source": {
                "type": "git",
                "url": "https://github.com/phpDocumentor/ReflectionCommon.git",
                "reference": "63a995caa1ca9e5590304cd845c15ad6d482a62a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phpDocumentor/ReflectionCommon/zipball/63a995caa1ca9e5590304cd845c15ad6d482a62a",
                "reference": "63a995caa1ca9e5590304cd845c15ad6d482a62a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1"
            },
            "require-dev": {
                "phpunit/phpunit": "~6"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "phpDocumentor\\Reflection\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Jaap van Otterdijk",
                "email": "opensource@ijaap.nl"
            }],
            "description": "Common reflection classes used by phpdocumentor to reflect the code structure",
            "homepage": "http://www.phpdoc.org",
            "keywords": [
                "FQSEN",
                "phpDocumentor",
                "phpdoc",
                "reflection",
                "static analysis"
            ],
            "time": "2018-08-07T13:53:10+00:00"
        },
        {
            "name": "phpdocumentor/reflection-docblock",
            "version": "2.0.5",
            "source": {
                "type": "git",
                "url": "https://github.com/phpDocumentor/ReflectionDocBlock.git",
                "reference": "e6a969a640b00d8daa3c66518b0405fb41ae0c4b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phpDocumentor/ReflectionDocBlock/zipball/e6a969a640b00d8daa3c66518b0405fb41ae0c4b",
                "reference": "e6a969a640b00d8daa3c66518b0405fb41ae0c4b",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.0"
            },
            "suggest": {
                "dflydev/markdown": "~1.0",
                "erusev/parsedown": "~1.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "phpDocumentor": [
                        "src/"
                    ]
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Mike van Riel",
                "email": "mike.vanriel@naenius.com"
            }],
            "time": "2016-01-25T08:17:30+00:00"
        },
        {
            "name": "phpdocumentor/type-resolver",
            "version": "dev-master",
            "source": {
                "type": "git",
                "url": "https://github.com/phpDocumentor/TypeResolver.git",
                "reference": "287693547468b6f397a8685921325e8b3b5cdf4a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phpDocumentor/TypeResolver/zipball/287693547468b6f397a8685921325e8b3b5cdf4a",
                "reference": "287693547468b6f397a8685921325e8b3b5cdf4a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "phpdocumentor/reflection-common": "~2.0.0-beta1"
            },
            "require-dev": {
                "mockery/mockery": "~1",
                "phpunit/phpunit": "~6"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "phpDocumentor\\Reflection\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Mike van Riel",
                "email": "me@mikevanriel.com"
            }],
            "description": "A PSR-5 based resolver of Class names, Types and Structural Element Names",
            "time": "2018-10-30T15:32:22+00:00"
        },
        {
            "name": "phpmd/phpmd",
            "version": "2.4.4",
            "source": {
                "type": "git",
                "url": "https://github.com/phpmd/phpmd.git",
                "reference": "148b605040ae6f7cc839e14a9e206beec9868d97"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phpmd/phpmd/zipball/148b605040ae6f7cc839e14a9e206beec9868d97",
                "reference": "148b605040ae6f7cc839e14a9e206beec9868d97",
                "shasum": ""
            },
            "require": {
                "pdepend/pdepend": "^2.0.4",
                "php": ">=5.3.9"
            },
            "require-dev": {
                "phpunit/phpunit": "^4.0",
                "squizlabs/php_codesniffer": "^2.0"
            },
            "bin": [
                "src/bin/phpmd"
            ],
            "type": "project",
            "autoload": {
                "psr-0": {
                    "PHPMD\\": "src/main/php"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                    "name": "Manuel Pichler",
                    "email": "github@manuel-pichler.de",
                    "homepage": "https://github.com/manuelpichler",
                    "role": "Project Founder"
                },
                {
                    "name": "Other contributors",
                    "homepage": "https://github.com/phpmd/phpmd/graphs/contributors",
                    "role": "Contributors"
                },
                {
                    "name": "Marc Würth",
                    "email": "ravage@bluewin.ch",
                    "homepage": "https://github.com/ravage84",
                    "role": "Project Maintainer"
                }
            ],
            "description": "PHPMD is a spin-off project of PHP Depend and aims to be a PHP equivalent of the well known Java tool PMD.",
            "homepage": "http://phpmd.org/",
            "keywords": [
                "mess detection",
                "mess detector",
                "pdepend",
                "phpmd",
                "pmd"
            ],
            "time": "2016-11-22T14:35:17+00:00"
        },
        {
            "name": "phpspec/prophecy",
            "version": "1.8.0",
            "source": {
                "type": "git",
                "url": "https://github.com/phpspec/prophecy.git",
                "reference": "4ba436b55987b4bf311cb7c6ba82aa528aac0a06"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phpspec/prophecy/zipball/4ba436b55987b4bf311cb7c6ba82aa528aac0a06",
                "reference": "4ba436b55987b4bf311cb7c6ba82aa528aac0a06",
                "shasum": ""
            },
            "require": {
                "doctrine/instantiator": "^1.0.2",
                "php": "^5.3|^7.0",
                "phpdocumentor/reflection-docblock": "^2.0|^3.0.2|^4.0",
                "sebastian/comparator": "^1.1|^2.0|^3.0",
                "sebastian/recursion-context": "^1.0|^2.0|^3.0"
            },
            "require-dev": {
                "phpspec/phpspec": "^2.5|^3.2",
                "phpunit/phpunit": "^4.8.35 || ^5.7 || ^6.5 || ^7.1"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.8.x-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "Prophecy\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Konstantin Kudryashov",
                    "email": "ever.zet@gmail.com",
                    "homepage": "http://everzet.com"
                },
                {
                    "name": "Marcello Duarte",
                    "email": "marcello.duarte@gmail.com"
                }
            ],
            "description": "Highly opinionated mocking framework for PHP 5.3+",
            "homepage": "https://github.com/phpspec/prophecy",
            "keywords": [
                "Double",
                "Dummy",
                "fake",
                "mock",
                "spy",
                "stub"
            ],
            "time": "2018-08-05T17:53:17+00:00"
        },
        {
            "name": "phpstan/phpdoc-parser",
            "version": "0.3.1",
            "source": {
                "type": "git",
                "url": "https://github.com/phpstan/phpdoc-parser.git",
                "reference": "2cc49f47c69b023eaf05b48e6529389893b13d74"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phpstan/phpdoc-parser/zipball/2cc49f47c69b023eaf05b48e6529389893b13d74",
                "reference": "2cc49f47c69b023eaf05b48e6529389893b13d74",
                "shasum": ""
            },
            "require": {
                "php": "~7.1"
            },
            "require-dev": {
                "consistence/coding-standard": "^2.0.0",
                "jakub-onderka/php-parallel-lint": "^0.9.2",
                "phing/phing": "^2.16.0",
                "phpstan/phpstan": "^0.10",
                "phpunit/phpunit": "^6.3",
                "slevomat/coding-standard": "^3.3.0",
                "symfony/process": "^3.4 || ^4.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "0.3-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "PHPStan\\PhpDocParser\\": [
                        "src/"
                    ]
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "PHPDoc parser with support for nullable, intersection and generic types",
            "time": "2019-01-14T12:26:23+00:00"
        },
        {
            "name": "phpstan/phpstan",
            "version": "0.10.8",
            "source": {
                "type": "git",
                "url": "https://github.com/phpstan/phpstan.git",
                "reference": "4f828460a0276180da76c670a0a6e592e7c38b71"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phpstan/phpstan/zipball/4f828460a0276180da76c670a0a6e592e7c38b71",
                "reference": "4f828460a0276180da76c670a0a6e592e7c38b71",
                "shasum": ""
            },
            "require": {
                "composer/xdebug-handler": "^1.3.0",
                "jean85/pretty-package-versions": "^1.0.3",
                "nette/bootstrap": "^2.4 || ^3.0",
                "nette/di": "^2.4.7 || ^3.0",
                "nette/robot-loader": "^3.0.1",
                "nette/utils": "^2.4.5 || ^3.0",
                "nikic/php-parser": "^4.0.2",
                "php": "~7.1",
                "phpstan/phpdoc-parser": "^0.3",
                "symfony/console": "~3.2 || ~4.0",
                "symfony/finder": "~3.2 || ~4.0"
            },
            "conflict": {
                "symfony/console": "3.4.16 || 4.1.5"
            },
            "require-dev": {
                "brianium/paratest": "^2.0",
                "consistence/coding-standard": "^3.5",
                "dealerdirect/phpcodesniffer-composer-installer": "^0.4.4",
                "ext-gd": "*",
                "ext-intl": "*",
                "ext-mysqli": "*",
                "ext-zip": "*",
                "jakub-onderka/php-parallel-lint": "^1.0",
                "localheinz/composer-normalize": "~0.9.0",
                "phing/phing": "^2.16.0",
                "phpstan/phpstan-deprecation-rules": "^0.10.2",
                "phpstan/phpstan-php-parser": "^0.10",
                "phpstan/phpstan-phpunit": "^0.10",
                "phpstan/phpstan-strict-rules": "^0.10",
                "phpunit/phpunit": "^7.0",
                "slevomat/coding-standard": "^4.7.2",
                "squizlabs/php_codesniffer": "^3.3.2"
            },
            "bin": [
                "bin/phpstan"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "0.10-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "PHPStan\\": [
                        "src/",
                        "build/PHPStan"
                    ]
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "PHPStan - PHP Static Analysis Tool",
            "time": "2019-01-08T09:51:19+00:00"
        },
        {
            "name": "phpunit/php-code-coverage",
            "version": "5.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/php-code-coverage.git",
                "reference": "8ed1902a57849e117b5651fc1a5c48110946c06b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/php-code-coverage/zipball/8ed1902a57849e117b5651fc1a5c48110946c06b",
                "reference": "8ed1902a57849e117b5651fc1a5c48110946c06b",
                "shasum": ""
            },
            "require": {
                "ext-dom": "*",
                "ext-xmlwriter": "*",
                "php": "^7.0",
                "phpunit/php-file-iterator": "^1.4.2",
                "phpunit/php-text-template": "^1.2.1",
                "phpunit/php-token-stream": "^1.4.11 || ^2.0",
                "sebastian/code-unit-reverse-lookup": "^1.0.1",
                "sebastian/environment": "^3.0",
                "sebastian/version": "^2.0.1",
                "theseer/tokenizer": "^1.1"
            },
            "require-dev": {
                "ext-xdebug": "^2.5",
                "phpunit/phpunit": "^6.0"
            },
            "suggest": {
                "ext-xdebug": "^2.5.5"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.2.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sb@sebastian-bergmann.de",
                "role": "lead"
            }],
            "description": "Library that provides collection, processing, and rendering functionality for PHP code coverage information.",
            "homepage": "https://github.com/sebastianbergmann/php-code-coverage",
            "keywords": [
                "coverage",
                "testing",
                "xunit"
            ],
            "time": "2017-08-03T12:40:43+00:00"
        },
        {
            "name": "phpunit/php-file-iterator",
            "version": "1.4.5",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/php-file-iterator.git",
                "reference": "730b01bc3e867237eaac355e06a36b85dd93a8b4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/php-file-iterator/zipball/730b01bc3e867237eaac355e06a36b85dd93a8b4",
                "reference": "730b01bc3e867237eaac355e06a36b85dd93a8b4",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.4.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sb@sebastian-bergmann.de",
                "role": "lead"
            }],
            "description": "FilterIterator implementation that filters files based on a list of suffixes.",
            "homepage": "https://github.com/sebastianbergmann/php-file-iterator/",
            "keywords": [
                "filesystem",
                "iterator"
            ],
            "time": "2017-11-27T13:52:08+00:00"
        },
        {
            "name": "phpunit/php-text-template",
            "version": "1.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/php-text-template.git",
                "reference": "31f8b717e51d9a2afca6c9f046f5d69fc27c8686"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/php-text-template/zipball/31f8b717e51d9a2afca6c9f046f5d69fc27c8686",
                "reference": "31f8b717e51d9a2afca6c9f046f5d69fc27c8686",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3"
            },
            "type": "library",
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de",
                "role": "lead"
            }],
            "description": "Simple template engine.",
            "homepage": "https://github.com/sebastianbergmann/php-text-template/",
            "keywords": [
                "template"
            ],
            "time": "2015-06-21T13:50:34+00:00"
        },
        {
            "name": "phpunit/php-timer",
            "version": "1.0.9",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/php-timer.git",
                "reference": "3dcf38ca72b158baf0bc245e9184d3fdffa9c46f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/php-timer/zipball/3dcf38ca72b158baf0bc245e9184d3fdffa9c46f",
                "reference": "3dcf38ca72b158baf0bc245e9184d3fdffa9c46f",
                "shasum": ""
            },
            "require": {
                "php": "^5.3.3 || ^7.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^4.8.35 || ^5.7 || ^6.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sb@sebastian-bergmann.de",
                "role": "lead"
            }],
            "description": "Utility class for timing",
            "homepage": "https://github.com/sebastianbergmann/php-timer/",
            "keywords": [
                "timer"
            ],
            "time": "2017-02-26T11:10:40+00:00"
        },
        {
            "name": "phpunit/php-token-stream",
            "version": "1.4.12",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/php-token-stream.git",
                "reference": "1ce90ba27c42e4e44e6d8458241466380b51fa16"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/php-token-stream/zipball/1ce90ba27c42e4e44e6d8458241466380b51fa16",
                "reference": "1ce90ba27c42e4e44e6d8458241466380b51fa16",
                "shasum": ""
            },
            "require": {
                "ext-tokenizer": "*",
                "php": ">=5.3.3"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.2"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.4-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de"
            }],
            "description": "Wrapper around PHP's tokenizer extension.",
            "homepage": "https://github.com/sebastianbergmann/php-token-stream/",
            "keywords": [
                "tokenizer"
            ],
            "time": "2017-12-04T08:55:13+00:00"
        },
        {
            "name": "phpunit/phpunit",
            "version": "6.4.4",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/phpunit.git",
                "reference": "562f7dc75d46510a4ed5d16189ae57fbe45a9932"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/phpunit/zipball/562f7dc75d46510a4ed5d16189ae57fbe45a9932",
                "reference": "562f7dc75d46510a4ed5d16189ae57fbe45a9932",
                "shasum": ""
            },
            "require": {
                "ext-dom": "*",
                "ext-json": "*",
                "ext-libxml": "*",
                "ext-mbstring": "*",
                "ext-xml": "*",
                "myclabs/deep-copy": "^1.6.1",
                "phar-io/manifest": "^1.0.1",
                "phar-io/version": "^1.0",
                "php": "^7.0",
                "phpspec/prophecy": "^1.7",
                "phpunit/php-code-coverage": "^5.2.2",
                "phpunit/php-file-iterator": "^1.4.2",
                "phpunit/php-text-template": "^1.2.1",
                "phpunit/php-timer": "^1.0.9",
                "phpunit/phpunit-mock-objects": "^4.0.3",
                "sebastian/comparator": "^2.0.2",
                "sebastian/diff": "^2.0",
                "sebastian/environment": "^3.1",
                "sebastian/exporter": "^3.1",
                "sebastian/global-state": "^2.0",
                "sebastian/object-enumerator": "^3.0.3",
                "sebastian/resource-operations": "^1.0",
                "sebastian/version": "^2.0.1"
            },
            "conflict": {
                "phpdocumentor/reflection-docblock": "3.0.2",
                "phpunit/dbunit": "<3.0"
            },
            "require-dev": {
                "ext-pdo": "*"
            },
            "suggest": {
                "ext-xdebug": "*",
                "phpunit/php-invoker": "^1.1"
            },
            "bin": [
                "phpunit"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "6.4.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de",
                "role": "lead"
            }],
            "description": "The PHP Unit Testing framework.",
            "homepage": "https://phpunit.de/",
            "keywords": [
                "phpunit",
                "testing",
                "xunit"
            ],
            "time": "2017-11-08T11:26:09+00:00"
        },
        {
            "name": "phpunit/phpunit-mock-objects",
            "version": "4.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/phpunit-mock-objects.git",
                "reference": "2f789b59ab89669015ad984afa350c4ec577ade0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/phpunit-mock-objects/zipball/2f789b59ab89669015ad984afa350c4ec577ade0",
                "reference": "2f789b59ab89669015ad984afa350c4ec577ade0",
                "shasum": ""
            },
            "require": {
                "doctrine/instantiator": "^1.0.5",
                "php": "^7.0",
                "phpunit/php-text-template": "^1.2.1",
                "sebastian/exporter": "^3.0"
            },
            "conflict": {
                "phpunit/phpunit": "<6.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^6.0"
            },
            "suggest": {
                "ext-soap": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sb@sebastian-bergmann.de",
                "role": "lead"
            }],
            "description": "Mock Object library for PHPUnit",
            "homepage": "https://github.com/sebastianbergmann/phpunit-mock-objects/",
            "keywords": [
                "mock",
                "xunit"
            ],
            "time": "2017-08-03T14:08:16+00:00"
        },
        {
            "name": "roave/better-reflection",
            "version": "0.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/Roave/BetterReflection.git",
                "reference": "c7aa2c0a544e2a0cc1fc9021746d0c5d3fd7f142"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Roave/BetterReflection/zipball/c7aa2c0a544e2a0cc1fc9021746d0c5d3fd7f142",
                "reference": "c7aa2c0a544e2a0cc1fc9021746d0c5d3fd7f142",
                "shasum": ""
            },
            "require": {
                "nikic/php-parser": "dev-master",
                "php": ">= 5.6",
                "phpdocumentor/reflection-docblock": "^2.0",
                "phpdocumentor/type-resolver": "dev-master",
                "zendframework/zend-code": "^2.5@dev"
            },
            "require-dev": {
                "fabpot/php-cs-fixer": "^1.8",
                "phpunit/phpunit": "^4.6"
            },
            "suggest": {
                "composer/composer": "Required to use the ComposerSourceLocator thing"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "BetterReflection\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "Better Reflection - an improved code reflection API",
            "time": "2015-11-02T20:07:17+00:00"
        },
        {
            "name": "sebastian/code-unit-reverse-lookup",
            "version": "1.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/code-unit-reverse-lookup.git",
                "reference": "4419fcdb5eabb9caa61a27c7a1db532a6b55dd18"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/code-unit-reverse-lookup/zipball/4419fcdb5eabb9caa61a27c7a1db532a6b55dd18",
                "reference": "4419fcdb5eabb9caa61a27c7a1db532a6b55dd18",
                "shasum": ""
            },
            "require": {
                "php": "^5.6 || ^7.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^5.7 || ^6.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de"
            }],
            "description": "Looks up which function or method a line of code belongs to",
            "homepage": "https://github.com/sebastianbergmann/code-unit-reverse-lookup/",
            "time": "2017-03-04T06:30:41+00:00"
        },
        {
            "name": "sebastian/comparator",
            "version": "2.1.3",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/comparator.git",
                "reference": "34369daee48eafb2651bea869b4b15d75ccc35f9"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/comparator/zipball/34369daee48eafb2651bea869b4b15d75ccc35f9",
                "reference": "34369daee48eafb2651bea869b4b15d75ccc35f9",
                "shasum": ""
            },
            "require": {
                "php": "^7.0",
                "sebastian/diff": "^2.0 || ^3.0",
                "sebastian/exporter": "^3.1"
            },
            "require-dev": {
                "phpunit/phpunit": "^6.4"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.1.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                    "name": "Jeff Welch",
                    "email": "whatthejeff@gmail.com"
                },
                {
                    "name": "Volker Dusch",
                    "email": "github@wallbash.com"
                },
                {
                    "name": "Bernhard Schussek",
                    "email": "bschussek@2bepublished.at"
                },
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                }
            ],
            "description": "Provides the functionality to compare PHP values for equality",
            "homepage": "https://github.com/sebastianbergmann/comparator",
            "keywords": [
                "comparator",
                "compare",
                "equality"
            ],
            "time": "2018-02-01T13:46:46+00:00"
        },
        {
            "name": "sebastian/diff",
            "version": "2.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/diff.git",
                "reference": "347c1d8b49c5c3ee30c7040ea6fc446790e6bddd"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/diff/zipball/347c1d8b49c5c3ee30c7040ea6fc446790e6bddd",
                "reference": "347c1d8b49c5c3ee30c7040ea6fc446790e6bddd",
                "shasum": ""
            },
            "require": {
                "php": "^7.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^6.2"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                    "name": "Kore Nordmann",
                    "email": "mail@kore-nordmann.de"
                },
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                }
            ],
            "description": "Diff implementation",
            "homepage": "https://github.com/sebastianbergmann/diff",
            "keywords": [
                "diff"
            ],
            "time": "2017-08-03T08:09:46+00:00"
        },
        {
            "name": "sebastian/environment",
            "version": "3.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/environment.git",
                "reference": "cd0871b3975fb7fc44d11314fd1ee20925fce4f5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/environment/zipball/cd0871b3975fb7fc44d11314fd1ee20925fce4f5",
                "reference": "cd0871b3975fb7fc44d11314fd1ee20925fce4f5",
                "shasum": ""
            },
            "require": {
                "php": "^7.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^6.1"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.1.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de"
            }],
            "description": "Provides functionality to handle HHVM/PHP environments",
            "homepage": "http://www.github.com/sebastianbergmann/environment",
            "keywords": [
                "Xdebug",
                "environment",
                "hhvm"
            ],
            "time": "2017-07-01T08:51:00+00:00"
        },
        {
            "name": "sebastian/exporter",
            "version": "3.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/exporter.git",
                "reference": "234199f4528de6d12aaa58b612e98f7d36adb937"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/exporter/zipball/234199f4528de6d12aaa58b612e98f7d36adb937",
                "reference": "234199f4528de6d12aaa58b612e98f7d36adb937",
                "shasum": ""
            },
            "require": {
                "php": "^7.0",
                "sebastian/recursion-context": "^3.0"
            },
            "require-dev": {
                "ext-mbstring": "*",
                "phpunit/phpunit": "^6.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.1.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                    "name": "Jeff Welch",
                    "email": "whatthejeff@gmail.com"
                },
                {
                    "name": "Volker Dusch",
                    "email": "github@wallbash.com"
                },
                {
                    "name": "Bernhard Schussek",
                    "email": "bschussek@2bepublished.at"
                },
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                },
                {
                    "name": "Adam Harvey",
                    "email": "aharvey@php.net"
                }
            ],
            "description": "Provides the functionality to export PHP variables for visualization",
            "homepage": "http://www.github.com/sebastianbergmann/exporter",
            "keywords": [
                "export",
                "exporter"
            ],
            "time": "2017-04-03T13:19:02+00:00"
        },
        {
            "name": "sebastian/finder-facade",
            "version": "1.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/finder-facade.git",
                "reference": "4a3174709c2dc565fe5fb26fcf827f6a1fc7b09f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/finder-facade/zipball/4a3174709c2dc565fe5fb26fcf827f6a1fc7b09f",
                "reference": "4a3174709c2dc565fe5fb26fcf827f6a1fc7b09f",
                "shasum": ""
            },
            "require": {
                "symfony/finder": "~2.3|~3.0|~4.0",
                "theseer/fdomdocument": "~1.3"
            },
            "type": "library",
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de",
                "role": "lead"
            }],
            "description": "FinderFacade is a convenience wrapper for Symfony's Finder component.",
            "homepage": "https://github.com/sebastianbergmann/finder-facade",
            "time": "2017-11-18T17:31:49+00:00"
        },
        {
            "name": "sebastian/global-state",
            "version": "2.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/global-state.git",
                "reference": "e8ba02eed7bbbb9e59e43dedd3dddeff4a56b0c4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/global-state/zipball/e8ba02eed7bbbb9e59e43dedd3dddeff4a56b0c4",
                "reference": "e8ba02eed7bbbb9e59e43dedd3dddeff4a56b0c4",
                "shasum": ""
            },
            "require": {
                "php": "^7.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^6.0"
            },
            "suggest": {
                "ext-uopz": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de"
            }],
            "description": "Snapshotting of global state",
            "homepage": "http://www.github.com/sebastianbergmann/global-state",
            "keywords": [
                "global state"
            ],
            "time": "2017-04-27T15:39:26+00:00"
        },
        {
            "name": "sebastian/object-enumerator",
            "version": "3.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/object-enumerator.git",
                "reference": "7cfd9e65d11ffb5af41198476395774d4c8a84c5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/object-enumerator/zipball/7cfd9e65d11ffb5af41198476395774d4c8a84c5",
                "reference": "7cfd9e65d11ffb5af41198476395774d4c8a84c5",
                "shasum": ""
            },
            "require": {
                "php": "^7.0",
                "sebastian/object-reflector": "^1.1.1",
                "sebastian/recursion-context": "^3.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^6.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de"
            }],
            "description": "Traverses array structures and object graphs to enumerate all referenced objects",
            "homepage": "https://github.com/sebastianbergmann/object-enumerator/",
            "time": "2017-08-03T12:35:26+00:00"
        },
        {
            "name": "sebastian/object-reflector",
            "version": "1.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/object-reflector.git",
                "reference": "773f97c67f28de00d397be301821b06708fca0be"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/object-reflector/zipball/773f97c67f28de00d397be301821b06708fca0be",
                "reference": "773f97c67f28de00d397be301821b06708fca0be",
                "shasum": ""
            },
            "require": {
                "php": "^7.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^6.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.1-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de"
            }],
            "description": "Allows reflection of object attributes, including inherited and non-public ones",
            "homepage": "https://github.com/sebastianbergmann/object-reflector/",
            "time": "2017-03-29T09:07:27+00:00"
        },
        {
            "name": "sebastian/phpcpd",
            "version": "2.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/phpcpd.git",
                "reference": "24d9a880deadb0b8c9680e9cfe78e30b704225db"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/phpcpd/zipball/24d9a880deadb0b8c9680e9cfe78e30b704225db",
                "reference": "24d9a880deadb0b8c9680e9cfe78e30b704225db",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3",
                "phpunit/php-timer": ">=1.0.6",
                "sebastian/finder-facade": "~1.1",
                "sebastian/version": "~1.0|~2.0",
                "symfony/console": "~2.7|^3.0",
                "theseer/fdomdocument": "~1.4"
            },
            "bin": [
                "phpcpd"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de",
                "role": "lead"
            }],
            "description": "Copy/Paste Detector (CPD) for PHP code.",
            "homepage": "https://github.com/sebastianbergmann/phpcpd",
            "time": "2016-04-17T19:32:49+00:00"
        },
        {
            "name": "sebastian/recursion-context",
            "version": "3.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/recursion-context.git",
                "reference": "5b0cd723502bac3b006cbf3dbf7a1e3fcefe4fa8"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/recursion-context/zipball/5b0cd723502bac3b006cbf3dbf7a1e3fcefe4fa8",
                "reference": "5b0cd723502bac3b006cbf3dbf7a1e3fcefe4fa8",
                "shasum": ""
            },
            "require": {
                "php": "^7.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^6.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                    "name": "Jeff Welch",
                    "email": "whatthejeff@gmail.com"
                },
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                },
                {
                    "name": "Adam Harvey",
                    "email": "aharvey@php.net"
                }
            ],
            "description": "Provides functionality to recursively process PHP variables",
            "homepage": "http://www.github.com/sebastianbergmann/recursion-context",
            "time": "2017-03-03T06:23:57+00:00"
        },
        {
            "name": "sebastian/resource-operations",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/resource-operations.git",
                "reference": "ce990bb21759f94aeafd30209e8cfcdfa8bc3f52"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/resource-operations/zipball/ce990bb21759f94aeafd30209e8cfcdfa8bc3f52",
                "reference": "ce990bb21759f94aeafd30209e8cfcdfa8bc3f52",
                "shasum": ""
            },
            "require": {
                "php": ">=5.6.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de"
            }],
            "description": "Provides a list of PHP built-in functions that operate on resources",
            "homepage": "https://www.github.com/sebastianbergmann/resource-operations",
            "time": "2015-07-28T20:34:47+00:00"
        },
        {
            "name": "sebastian/version",
            "version": "2.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/version.git",
                "reference": "99732be0ddb3361e16ad77b68ba41efc8e979019"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/version/zipball/99732be0ddb3361e16ad77b68ba41efc8e979019",
                "reference": "99732be0ddb3361e16ad77b68ba41efc8e979019",
                "shasum": ""
            },
            "require": {
                "php": ">=5.6"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Sebastian Bergmann",
                "email": "sebastian@phpunit.de",
                "role": "lead"
            }],
            "description": "Library that helps with managing the version number of Git-hosted PHP projects",
            "homepage": "https://github.com/sebastianbergmann/version",
            "time": "2016-10-03T07:35:21+00:00"
        },
        {
            "name": "sensiolabs/security-checker",
            "version": "v3.0.7",
            "source": {
                "type": "git",
                "url": "https://github.com/sensiolabs/security-checker.git",
                "reference": "59a6a299e2f5612dc8692d40e84373703a5df1b5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sensiolabs/security-checker/zipball/59a6a299e2f5612dc8692d40e84373703a5df1b5",
                "reference": "59a6a299e2f5612dc8692d40e84373703a5df1b5",
                "shasum": ""
            },
            "require": {
                "symfony/console": "~2.0|~3.0"
            },
            "bin": [
                "security-checker"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0-dev"
                }
            },
            "autoload": {
                "psr-0": {
                    "SensioLabs\\Security": ""
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Fabien Potencier",
                "email": "fabien.potencier@gmail.com"
            }],
            "description": "A security checker for your composer.lock",
            "time": "2017-03-29T09:29:53+00:00"
        },
        {
            "name": "site5/phantoman",
            "version": "v1.1.7",
            "source": {
                "type": "git",
                "url": "https://github.com/grantlucas/phantoman.git",
                "reference": "f65d26d3311e44380692cb0255b95181743f69f2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/grantlucas/phantoman/zipball/f65d26d3311e44380692cb0255b95181743f69f2",
                "reference": "f65d26d3311e44380692cb0255b95181743f69f2",
                "shasum": ""
            },
            "require": {
                "codeception/codeception": "^2.1",
                "php": ">=5.4.0"
            },
            "suggest": {
                "jakoch/phantomjs-installer": "Automatically installs PhantomJS locally to your project."
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Codeception\\Extension\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Grant Lucas",
                "email": "contact@grantlucas.com"
            }],
            "description": "The Codeception extension for automatically starting and stopping PhantomJS when running tests.",
            "homepage": "https://github.com/grantlucas/phantoman",
            "keywords": [
                "codeception",
                "extension",
                "headless",
                "phantomjs"
            ],
            "time": "2016-09-15T14:35:04+00:00"
        },
        {
            "name": "slevomat/coding-standard",
            "version": "4.8.7",
            "source": {
                "type": "git",
                "url": "https://github.com/slevomat/coding-standard.git",
                "reference": "bff96313d8c7c2ba57a4edb13c1c141df8988c58"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/slevomat/coding-standard/zipball/bff96313d8c7c2ba57a4edb13c1c141df8988c58",
                "reference": "bff96313d8c7c2ba57a4edb13c1c141df8988c58",
                "shasum": ""
            },
            "require": {
                "php": "^7.1",
                "squizlabs/php_codesniffer": "^3.4.0"
            },
            "require-dev": {
                "jakub-onderka/php-parallel-lint": "1.0.0",
                "phing/phing": "2.16.1",
                "phpstan/phpstan": "0.9.2",
                "phpstan/phpstan-phpunit": "0.9.4",
                "phpstan/phpstan-strict-rules": "0.9",
                "phpunit/phpunit": "7.5.1"
            },
            "type": "phpcodesniffer-standard",
            "autoload": {
                "psr-4": {
                    "SlevomatCodingStandard\\": "SlevomatCodingStandard"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "Slevomat Coding Standard for PHP_CodeSniffer complements Consistence Coding Standard by providing sniffs with additional checks.",
            "time": "2019-01-03T13:15:50+00:00"
        },
        {
            "name": "sllh/composer-versions-check",
            "version": "v2.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/Soullivaneuh/composer-versions-check.git",
                "reference": "f6fe100dd71a9fa0d3c922612b445fb179e19127"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Soullivaneuh/composer-versions-check/zipball/f6fe100dd71a9fa0d3c922612b445fb179e19127",
                "reference": "f6fe100dd71a9fa0d3c922612b445fb179e19127",
                "shasum": ""
            },
            "require": {
                "composer-plugin-api": "^1.0",
                "php": "^5.3 || ^7.0"
            },
            "require-dev": {
                "composer/composer": "^1.0",
                "sllh/php-cs-fixer-styleci-bridge": "^2.0",
                "symfony/phpunit-bridge": "^2.7.4|^3.0"
            },
            "type": "composer-plugin",
            "extra": {
                "class": "SLLH\\ComposerVersionsCheck\\VersionsCheckPlugin",
                "branch-alias": {
                    "dev-master": "2.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "SLLH\\ComposerVersionsCheck\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Sullivan Sénéchal",
                "email": "soullivaneuh@gmail.com"
            }],
            "description": "Checks if packages are up to date to last major versions after update",
            "keywords": [
                "composer",
                "plugin",
                "update",
                "versions"
            ],
            "time": "2017-06-16T09:29:23+00:00"
        },
        {
            "name": "spryker-sdk/phpstan-spryker",
            "version": "0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker-sdk/phpstan-spryker.git",
                "reference": "a62130c0b1e96472e1183d0d9cbddafe68500267"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker-sdk/phpstan-spryker/zipball/a62130c0b1e96472e1183d0d9cbddafe68500267",
                "reference": "a62130c0b1e96472e1183d0d9cbddafe68500267",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "phpstan/phpstan": "^0.10.2"
            },
            "require-dev": {
                "consistence/coding-standard": "^3.5",
                "jakub-onderka/php-parallel-lint": "^1.0",
                "localheinz/composer-normalize": "~0.9.0",
                "phing/phing": "^2.16.0",
                "phpstan/phpstan-strict-rules": "^0.10",
                "slevomat/coding-standard": "^4.7.2",
                "spryker/code-sniffer": "dev-master",
                "spryker/kernel": "*",
                "squizlabs/php_codesniffer": "^3.3.1"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "PHPStan\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Spryker",
                "homepage": "http://spryker.com"
            }],
            "description": "Spryker PHPStan Extensions",
            "homepage": "http://spryker.com",
            "keywords": [
                "PHPStan",
                "analyzing"
            ],
            "time": "2018-12-20T14:15:37+00:00"
        },
        {
            "name": "spryker/architecture-sniffer",
            "version": "0.4.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/architecture-sniffer.git",
                "reference": "91400b2da8ec07297464dd9c1d84207e9e39f46d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/architecture-sniffer/zipball/91400b2da8ec07297464dd9c1d84207e9e39f46d",
                "reference": "91400b2da8ec07297464dd9c1d84207e9e39f46d",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "phpmd/phpmd": "^2.4",
                "roave/better-reflection": "*",
                "symfony/finder": "*",
                "zendframework/zend-config": "*",
                "zendframework/zend-filter": "*"
            },
            "require-dev": {
                "codeception/codeception": "^2.4",
                "phpstan/phpstan": "^0.10.0",
                "phpunit/phpunit": "~5.2",
                "spryker/code-sniffer": "*",
                "symfony/var-dumper": "^4.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "ArchitectureSniffer\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "include-path": [
                "src/"
            ],
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Spryker",
                "homepage": "https://spryker.com"
            }],
            "description": "Spryker Architecture Sniffer",
            "homepage": "https://spryker.com",
            "keywords": [
                "architecture",
                "framework",
                "sniffer",
                "standards"
            ],
            "time": "2019-01-25T15:37:13+00:00"
        },
        {
            "name": "spryker/code-generator",
            "version": "0.3.7",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/code-generator.git",
                "reference": "c2638cde2e7886c876a9d6752875f5e2ced1a86d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/code-generator/zipball/c2638cde2e7886c876a9d6752875f5e2ced1a86d",
                "reference": "c2638cde2e7886c876a9d6752875f5e2ced1a86d",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.0.0",
                "zendframework/zend-filter": "^2.8.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "CodeGenerator module",
            "time": "2018-09-04T09:50:22+00:00"
        },
        {
            "name": "spryker/code-sniffer",
            "version": "0.13.1",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/code-sniffer.git",
                "reference": "f06a2ad4116981ac9f3439209508493ca7f8864a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/code-sniffer/zipball/f06a2ad4116981ac9f3439209508493ca7f8864a",
                "reference": "f06a2ad4116981ac9f3439209508493ca7f8864a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "slevomat/coding-standard": "^4.8.3",
                "squizlabs/php_codesniffer": "^3.0"
            },
            "require-dev": {
                "phpstan/phpstan-shim": "^0.10.0",
                "phpunit/phpunit": "<5.0"
            },
            "bin": [
                "bin/tokenize"
            ],
            "type": "phpcodesniffer-standard",
            "autoload": {
                "psr-4": {
                    "Spryker\\": "Spryker"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Spryker",
                "homepage": "http://spryker.com"
            }],
            "description": "Spryker Code Sniffer Standards",
            "homepage": "http://spryker.com",
            "keywords": [
                "codesniffer",
                "framework",
                "phpcs",
                "standards"
            ],
            "time": "2018-12-17T09:14:25+00:00"
        },
        {
            "name": "spryker/development",
            "version": "3.16.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/development.git",
                "reference": "d23a6b46d28dbfe0d0fa875171a2af71606fb381"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/development/zipball/d23a6b46d28dbfe0d0fa875171a2af71606fb381",
                "reference": "d23a6b46d28dbfe0d0fa875171a2af71606fb381",
                "shasum": ""
            },
            "require": {
                "nette/di": "^2.4.7 || ^3.0",
                "php": ">=7.1",
                "spryker/config": "^3.0.0",
                "spryker/graph": "^3.0.0",
                "spryker/kernel": "^3.22.0",
                "spryker/symfony": "^3.0.0",
                "spryker/twig": "^3.0.0",
                "spryker/zend": "^2.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/propel": "*",
                "spryker/testify": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Zed\\Development\\Helper\\": "tests/SprykerTest/Zed/Development/_support/Helper/"
                },
                "files": [
                    "tests/dd.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Development module",
            "time": "2019-01-18T12:49:26+00:00"
        },
        {
            "name": "spryker/testify",
            "version": "3.10.0",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/testify.git",
                "reference": "36d02710f431b41692964e56e22fc52bcfb51f70"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/testify/zipball/36d02710f431b41692964e56e22fc52bcfb51f70",
                "reference": "36d02710f431b41692964e56e22fc52bcfb51f70",
                "shasum": ""
            },
            "require": {
                "codeception/codeception": "^2.3.5",
                "mikey179/vfsstream": "^1.6",
                "php": ">=7.1",
                "spryker/config": "^3.0.0",
                "spryker/error-handler": "^2.0.0",
                "spryker/kernel": "^3.0.0",
                "spryker/propel": "^3.0.4",
                "spryker/propel-orm": "^1.0.0",
                "spryker/silex": "^2.0.0"
            },
            "require-dev": {
                "spryker/symfony": "^3.0.0",
                "spryker/twig": "^3.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/",
                    "SprykerTest\\Shared\\Testify\\Helper\\": "tests/SprykerTest/Shared/Testify/_support/Helper/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "Testify module",
            "time": "2019-01-23T10:08:00+00:00"
        },
        {
            "name": "spryker/web-profiler",
            "version": "1.2.3",
            "source": {
                "type": "git",
                "url": "https://github.com/spryker/web-profiler.git",
                "reference": "60e2fc5a8e55080c4b3092b32734900de0cf0f0f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/spryker/web-profiler/zipball/60e2fc5a8e55080c4b3092b32734900de0cf0f0f",
                "reference": "60e2fc5a8e55080c4b3092b32734900de0cf0f0f",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "spryker/kernel": "^3.15.0",
                "spryker/symfony": "^3.2.0",
                "symfony/web-profiler-bundle": "^3.0.0"
            },
            "require-dev": {
                "spryker/code-sniffer": "*",
                "spryker/config": "^3.0.0",
                "spryker/silex": "*",
                "spryker/testify": "*"
            },
            "suggest": {
                "spryker/config": "If you want to use ServiceProvider plugins.",
                "spryker/silex": "If you want to use ServiceProvider plugins."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Spryker\\": "src/Spryker/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "proprietary"
            ],
            "description": "WebProfiler module",
            "time": "2019-01-23T10:08:00+00:00"
        },
        {
            "name": "squizlabs/php_codesniffer",
            "version": "3.4.0",
            "source": {
                "type": "git",
                "url": "https://github.com/squizlabs/PHP_CodeSniffer.git",
                "reference": "379deb987e26c7cd103a7b387aea178baec96e48"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/squizlabs/PHP_CodeSniffer/zipball/379deb987e26c7cd103a7b387aea178baec96e48",
                "reference": "379deb987e26c7cd103a7b387aea178baec96e48",
                "shasum": ""
            },
            "require": {
                "ext-simplexml": "*",
                "ext-tokenizer": "*",
                "ext-xmlwriter": "*",
                "php": ">=5.4.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^4.0 || ^5.0 || ^6.0 || ^7.0"
            },
            "bin": [
                "bin/phpcs",
                "bin/phpcbf"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Greg Sherwood",
                "role": "lead"
            }],
            "description": "PHP_CodeSniffer tokenizes PHP, JavaScript and CSS files and detects violations of a defined set of coding standards.",
            "homepage": "http://www.squizlabs.com/php-codesniffer",
            "keywords": [
                "phpcs",
                "standards"
            ],
            "time": "2018-12-19T23:57:18+00:00"
        },
        {
            "name": "stecman/symfony-console-completion",
            "version": "0.7.0",
            "source": {
                "type": "git",
                "url": "https://github.com/stecman/symfony-console-completion.git",
                "reference": "5461d43e53092b3d3b9dbd9d999f2054730f4bbb"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/stecman/symfony-console-completion/zipball/5461d43e53092b3d3b9dbd9d999f2054730f4bbb",
                "reference": "5461d43e53092b3d3b9dbd9d999f2054730f4bbb",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.2",
                "symfony/console": "~2.3 || ~3.0"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.4"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "0.6.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Stecman\\Component\\Symfony\\Console\\BashCompletion\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                "name": "Stephen Holdaway",
                "email": "stephen@stecman.co.nz"
            }],
            "description": "Automatic BASH completion for Symfony Console Component based applications.",
            "time": "2016-02-24T05:08:54+00:00"
        },
        {
            "name": "symfony/browser-kit",
            "version": "v4.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/browser-kit.git",
                "reference": "313512c878805971aebddb5d1707bcf3f4e25df7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/browser-kit/zipball/313512c878805971aebddb5d1707bcf3f4e25df7",
                "reference": "313512c878805971aebddb5d1707bcf3f4e25df7",
                "shasum": ""
            },
            "require": {
                "php": "^7.1.3",
                "symfony/dom-crawler": "~3.4|~4.0"
            },
            "require-dev": {
                "symfony/css-selector": "~3.4|~4.0",
                "symfony/process": "~3.4|~4.0"
            },
            "suggest": {
                "symfony/process": ""
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.2-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\BrowserKit\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony BrowserKit Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-03T09:07:35+00:00"
        },
        {
            "name": "symfony/css-selector",
            "version": "v4.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/css-selector.git",
                "reference": "76dac1dbe2830213e95892c7c2ec1edd74113ea4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/css-selector/zipball/76dac1dbe2830213e95892c7c2ec1edd74113ea4",
                "reference": "76dac1dbe2830213e95892c7c2ec1edd74113ea4",
                "shasum": ""
            },
            "require": {
                "php": "^7.1.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.2-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\CssSelector\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Jean-François Simon",
                    "email": "jeanfrancois.simon@sensiolabs.com"
                },
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony CssSelector Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-03T09:07:35+00:00"
        },
        {
            "name": "symfony/dependency-injection",
            "version": "v4.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/dependency-injection.git",
                "reference": "a28dda9df1d5494367454cad91e44751ac53921c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/dependency-injection/zipball/a28dda9df1d5494367454cad91e44751ac53921c",
                "reference": "a28dda9df1d5494367454cad91e44751ac53921c",
                "shasum": ""
            },
            "require": {
                "php": "^7.1.3",
                "psr/container": "^1.0",
                "symfony/contracts": "^1.0"
            },
            "conflict": {
                "symfony/config": "<4.2",
                "symfony/finder": "<3.4",
                "symfony/proxy-manager-bridge": "<3.4",
                "symfony/yaml": "<3.4"
            },
            "provide": {
                "psr/container-implementation": "1.0",
                "symfony/service-contracts-implementation": "1.0"
            },
            "require-dev": {
                "symfony/config": "~4.2",
                "symfony/expression-language": "~3.4|~4.0",
                "symfony/yaml": "~3.4|~4.0"
            },
            "suggest": {
                "symfony/config": "",
                "symfony/expression-language": "For using expressions in service container configuration",
                "symfony/finder": "For using double-star glob patterns or when GLOB_BRACE portability is required",
                "symfony/proxy-manager-bridge": "Generate service proxies to lazy load them",
                "symfony/yaml": ""
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.2-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\DependencyInjection\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony DependencyInjection Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-05T16:37:49+00:00"
        },
        {
            "name": "symfony/dom-crawler",
            "version": "v4.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/dom-crawler.git",
                "reference": "8dc06251d5ad98d8494e1f742bec9cfdb9e42044"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/dom-crawler/zipball/8dc06251d5ad98d8494e1f742bec9cfdb9e42044",
                "reference": "8dc06251d5ad98d8494e1f742bec9cfdb9e42044",
                "shasum": ""
            },
            "require": {
                "php": "^7.1.3",
                "symfony/polyfill-ctype": "~1.8",
                "symfony/polyfill-mbstring": "~1.0"
            },
            "require-dev": {
                "symfony/css-selector": "~3.4|~4.0"
            },
            "suggest": {
                "symfony/css-selector": ""
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.2-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\DomCrawler\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony DomCrawler Component",
            "homepage": "https://symfony.com",
            "time": "2019-01-03T09:07:35+00:00"
        },
        {
            "name": "symfony/polyfill-php72",
            "version": "v1.10.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-php72.git",
                "reference": "9050816e2ca34a8e916c3a0ae8b9c2fccf68b631"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-php72/zipball/9050816e2ca34a8e916c3a0ae8b9c2fccf68b631",
                "reference": "9050816e2ca34a8e916c3a0ae8b9c2fccf68b631",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.9-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Polyfill\\Php72\\": ""
                },
                "files": [
                    "bootstrap.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill backporting some PHP 7.2+ features to lower PHP versions",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "polyfill",
                "portable",
                "shim"
            ],
            "time": "2018-09-21T13:07:52+00:00"
        },
        {
            "name": "symfony/var-dumper",
            "version": "v4.2.2",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/var-dumper.git",
                "reference": "85bde661b178173d85c6f11ea9d03b61d1212bb2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/var-dumper/zipball/85bde661b178173d85c6f11ea9d03b61d1212bb2",
                "reference": "85bde661b178173d85c6f11ea9d03b61d1212bb2",
                "shasum": ""
            },
            "require": {
                "php": "^7.1.3",
                "symfony/polyfill-mbstring": "~1.0",
                "symfony/polyfill-php72": "~1.5"
            },
            "conflict": {
                "phpunit/phpunit": "<4.8.35|<5.4.3,>=5.0",
                "symfony/console": "<3.4"
            },
            "require-dev": {
                "ext-iconv": "*",
                "symfony/console": "~3.4|~4.0",
                "symfony/process": "~3.4|~4.0",
                "twig/twig": "~1.34|~2.4"
            },
            "suggest": {
                "ext-iconv": "To convert non-UTF-8 strings to UTF-8 (or symfony/polyfill-iconv in case ext-iconv cannot be used).",
                "ext-intl": "To show region name in time zone dump",
                "symfony/console": "To use the ServerDumpCommand and/or the bin/var-dump-server script"
            },
            "bin": [
                "Resources/bin/var-dump-server"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.2-dev"
                }
            },
            "autoload": {
                "files": [
                    "Resources/functions/dump.php"
                ],
                "psr-4": {
                    "Symfony\\Component\\VarDumper\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony mechanism for exploring and dumping PHP variables",
            "homepage": "https://symfony.com",
            "keywords": [
                "debug",
                "dump"
            ],
            "time": "2019-01-03T09:07:35+00:00"
        },
        {
            "name": "symfony/web-profiler-bundle",
            "version": "v3.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/web-profiler-bundle.git",
                "reference": "938046a45ebf03cf41bb89fd47ed00da86ea33db"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/web-profiler-bundle/zipball/938046a45ebf03cf41bb89fd47ed00da86ea33db",
                "reference": "938046a45ebf03cf41bb89fd47ed00da86ea33db",
                "shasum": ""
            },
            "require": {
                "php": "^5.5.9|>=7.0.8",
                "symfony/http-kernel": "~3.3|~4.0",
                "symfony/polyfill-php70": "~1.0",
                "symfony/routing": "~2.8|~3.0|~4.0",
                "symfony/twig-bridge": "~2.8|~3.0|~4.0",
                "symfony/var-dumper": "~3.3|~4.0",
                "twig/twig": "~1.34|~2.4"
            },
            "conflict": {
                "symfony/config": "<3.4",
                "symfony/dependency-injection": "<3.4",
                "symfony/event-dispatcher": "<3.3.1",
                "symfony/var-dumper": "<3.3"
            },
            "require-dev": {
                "symfony/config": "~3.4|~4.0",
                "symfony/console": "~2.8|~3.0|~4.0",
                "symfony/dependency-injection": "~3.4|~4.0",
                "symfony/stopwatch": "~2.8|~3.0|~4.0"
            },
            "type": "symfony-bundle",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.4-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Bundle\\WebProfilerBundle\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [{
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony WebProfilerBundle",
            "homepage": "https://symfony.com",
            "time": "2019-01-01T13:45:19+00:00"
        },
        {
            "name": "theseer/fdomdocument",
            "version": "1.6.6",
            "source": {
                "type": "git",
                "url": "https://github.com/theseer/fDOMDocument.git",
                "reference": "6e8203e40a32a9c770bcb62fe37e68b948da6dca"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/theseer/fDOMDocument/zipball/6e8203e40a32a9c770bcb62fe37e68b948da6dca",
                "reference": "6e8203e40a32a9c770bcb62fe37e68b948da6dca",
                "shasum": ""
            },
            "require": {
                "ext-dom": "*",
                "lib-libxml": "*",
                "php": ">=5.3.3"
            },
            "type": "library",
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Arne Blankerts",
                "email": "arne@blankerts.de",
                "role": "lead"
            }],
            "description": "The classes contained within this repository extend the standard DOM to use exceptions at all occasions of errors instead of PHP warnings or notices. They also add various custom methods and shortcuts for convenience and to simplify the usage of DOM.",
            "homepage": "https://github.com/theseer/fDOMDocument",
            "time": "2017-06-30T11:53:12+00:00"
        },
        {
            "name": "theseer/tokenizer",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/theseer/tokenizer.git",
                "reference": "cb2f008f3f05af2893a87208fe6a6c4985483f8b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/theseer/tokenizer/zipball/cb2f008f3f05af2893a87208fe6a6c4985483f8b",
                "reference": "cb2f008f3f05af2893a87208fe6a6c4985483f8b",
                "shasum": ""
            },
            "require": {
                "ext-dom": "*",
                "ext-tokenizer": "*",
                "ext-xmlwriter": "*",
                "php": "^7.0"
            },
            "type": "library",
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [{
                "name": "Arne Blankerts",
                "email": "arne@blankerts.de",
                "role": "Developer"
            }],
            "description": "A small library for converting tokenized PHP source code into XML and potentially other formats",
            "time": "2017-04-07T12:08:54+00:00"
        },
        {
            "name": "zendframework/zend-code",
            "version": "2.6.3",
            "source": {
                "type": "git",
                "url": "https://github.com/zendframework/zend-code.git",
                "reference": "95033f061b083e16cdee60530ec260d7d628b887"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/zendframework/zend-code/zipball/95033f061b083e16cdee60530ec260d7d628b887",
                "reference": "95033f061b083e16cdee60530ec260d7d628b887",
                "shasum": ""
            },
            "require": {
                "php": "^5.5 || 7.0.0 - 7.0.4 || ^7.0.6",
                "zendframework/zend-eventmanager": "^2.6 || ^3.0"
            },
            "require-dev": {
                "doctrine/annotations": "~1.0",
                "fabpot/php-cs-fixer": "1.7.*",
                "phpunit/phpunit": "^4.8.21",
                "zendframework/zend-stdlib": "^2.7 || ^3.0"
            },
            "suggest": {
                "doctrine/annotations": "Doctrine\\Common\\Annotations >=1.0 for annotation features",
                "zendframework/zend-stdlib": "Zend\\Stdlib component"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.6-dev",
                    "dev-develop": "2.7-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Zend\\Code\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "description": "provides facilities to generate arbitrary code using an object oriented interface",
            "homepage": "https://github.com/zendframework/zend-code",
            "keywords": [
                "code",
                "zf2"
            ],
            "time": "2016-04-20T17:26:42+00:00"
        },
        {
            "name": "zendframework/zend-eventmanager",
            "version": "3.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/zendframework/zend-eventmanager.git",
                "reference": "a5e2583a211f73604691586b8406ff7296a946dd"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/zendframework/zend-eventmanager/zipball/a5e2583a211f73604691586b8406ff7296a946dd",
                "reference": "a5e2583a211f73604691586b8406ff7296a946dd",
                "shasum": ""
            },
            "require": {
                "php": "^5.6 || ^7.0"
            },
            "require-dev": {
                "athletic/athletic": "^0.1",
                "container-interop/container-interop": "^1.1.0",
                "phpunit/phpunit": "^5.7.27 || ^6.5.8 || ^7.1.2",
                "zendframework/zend-coding-standard": "~1.0.0",
                "zendframework/zend-stdlib": "^2.7.3 || ^3.0"
            },
            "suggest": {
                "container-interop/container-interop": "^1.1.0, to use the lazy listeners feature",
                "zendframework/zend-stdlib": "^2.7.3 || ^3.0, to use the FilterChain feature"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.2-dev",
                    "dev-develop": "3.3-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Zend\\EventManager\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "description": "Trigger and listen to events within a PHP application",
            "homepage": "https://github.com/zendframework/zend-eventmanager",
            "keywords": [
                "event",
                "eventmanager",
                "events",
                "zf2"
            ],
            "time": "2018-04-25T15:33:34+00:00"
        }
    ],
    "aliases": [{
        "alias": "1.0.0",
        "alias_normalized": "1.0.0.0",
        "version": "9999999-dev",
        "package": "spryker-eco/loggly"
    }],
    "minimum-stability": "dev",
    "stability-flags": {
        "spryker-eco/loggly": 20
    },
    "prefer-stable": true,
    "prefer-lowest": false,
    "platform": {
        "php": ">=7.1",
        "ext-bcmath": "*",
        "ext-curl": "*",
        "ext-gd": "*",
        "ext-gmp": "*",
        "ext-intl": "*",
        "ext-json": "*",
        "ext-pdo_pgsql": "*",
        "ext-pgsql": "*",
        "ext-readline": "*",
        "ext-redis": "*"
    },
    "platform-dev": []
};
