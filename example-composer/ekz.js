const ekz = {
    "name": "spryker-shop/b2c-demo-shop",
    "description": "Spryker B2C Demo Shop",
    "license": "proprietary",
    "require": {
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
        "ext-redis": "*",
        "fond-of-spryker/google-tagmanager": "^2.1",
        "spryker-eco/loggly": "dev-master",
        "spryker-feature/agent-assist": "~2018.12.0",
        "spryker-feature/alternative-products": "~2018.12.0",
        "spryker-feature/cart": "~2018.12.0",
        "spryker-feature/cart-notes": "~2018.12.0",
        "spryker-feature/catalog": "~2018.12.0",
        "spryker-feature/category-management": "~2018.12.0",
        "spryker-feature/checkout": "~2018.12.0",
        "spryker-feature/cms": "~2018.12.0",
        "spryker-feature/content-based-shop-navigation": "~2018.12.0",
        "spryker-feature/customer-account-management": "~2018.12.0",
        "spryker-feature/customer-notes": "~2018.12.0",
        "spryker-feature/deployment-tools": "~2018.12.0",
        "spryker-feature/development-integration": "~2018.12.0",
        "spryker-feature/development-tools": "~2018.12.0",
        "spryker-feature/digital-asset-management": "~2018.12.0",
        "spryker-feature/discontinued-products": "~2018.12.0",
        "spryker-feature/file-manager": "~2018.12.0",
        "spryker-feature/gift-cards": "~2018.12.0",
        "spryker-feature/inventory-management": "~2018.12.0",
        "spryker-feature/invoice": "~2018.12.0",
        "spryker-feature/mailing-notifications": "~2018.12.0",
        "spryker-feature/navigation": "~2018.12.0",
        "spryker-feature/non-splittable-products": "~2018.12.0",
        "spryker-feature/order-management": "~2018.12.0",
        "spryker-feature/order-threshold": "~2018.12.0",
        "spryker-feature/payments": "~2018.12.0",
        "spryker-feature/persistent-cart": "~2018.12.0",
        "spryker-feature/prices": "~2018.12.0",
        "spryker-feature/product": "~2018.12.0",
        "spryker-feature/product-barcode": "~2018.12.0",
        "spryker-feature/product-bundles": "~2018.12.0",
        "spryker-feature/product-groups": "~2018.12.0",
        "spryker-feature/product-image-management": "~2018.12.0",
        "spryker-feature/product-labels": "~2018.12.0",
        "spryker-feature/product-options": "~2018.12.0",
        "spryker-feature/product-promotions": "~2018.12.0",
        "spryker-feature/product-rating-reviews": "~2018.12.0",
        "spryker-feature/product-relations": "~2018.12.0",
        "spryker-feature/product-sets": "~2018.12.0",
        "spryker-feature/product-validity": "~2018.12.0",
        "spryker-feature/promotions-discounts": "~2018.12.0",
        "spryker-feature/reclamations": "~2018.12.0",
        "spryker-feature/refunds": "~2018.12.0",
        "spryker-feature/reorder": "~2018.12.0",
        "spryker-feature/search": "~2018.12.0",
        "spryker-feature/shipment": "~2018.12.0",
        "spryker-feature/spryker-core": "~2018.12.0",
        "spryker-feature/spryker-core-back-office": "~2018.12.0",
        "spryker-feature/spryker-core-e-commerce": "~2018.12.0",
        "spryker-feature/state-machine": "~2018.12.0",
        "spryker-feature/tax": "~2018.12.0",
        "spryker-feature/wishlist": "~2018.12.0",
        "spryker-shop/calculation-page": "^1.0.0",
        "spryker-shop/chart-widget": "^0.1.1",
        "spryker-shop/cms-content-widget-chart-connector": "^1.0.0",
        "spryker-shop/cms-content-widget-product-connector": "^1.0.0",
        "spryker-shop/cms-content-widget-product-set-connector": "^1.0.0",
        "spryker/assertion": "*",
        "spryker/auth-mail-connector": "^3.0.0",
        "spryker/auth-rest-api": "^2.2.1",
        "spryker/availability-cart-connector": "^4.2",
        "spryker/cart-currency-connector": "^1.1",
        "spryker/cart-note-product-bundle-connector": "^0.1.0",
        "spryker/carts-rest-api": "^2.2.0",
        "spryker/carts-rest-api-extension": "^1.0.0",
        "spryker/catalog-price-product-connector": "^1.2",
        "spryker/catalog-search-products-resource-relationship": "^1.1.0",
        "spryker/catalog-search-rest-api": "^2.1.0",
        "spryker/categories-rest-api": "^1.1.2",
        "spryker/category-navigation-connector": "^1.0.0",
        "spryker/chart": "*",
        "spryker/checkout-rest-api": "^1.0.0",
        "spryker/checkout-rest-api-extension": "^1.0.0",
        "spryker/cms-block-category-connector": "^2.1.4",
        "spryker/cms-block-product-connector": "^1.1.4",
        "spryker/cms-content-widget-product-connector": "^1.0.3",
        "spryker/cms-content-widget-product-group-connector": "^1.0.0",
        "spryker/cms-content-widget-product-search-connector": "^1.0.1",
        "spryker/cms-content-widget-product-set-connector": "^1.0.3",
        "spryker/cms-navigation-connector": "^1.0.0",
        "spryker/cms-user-connector": "^1.0",
        "spryker/code-it-now": "^1.0",
        "spryker/customer-catalog": "^1.0",
        "spryker/customer-group-discount-connector": "^2.0",
        "spryker/customer-user-connector": "^1.0",
        "spryker/customer-user-connector-gui": "^1.1",
        "spryker/customers-rest-api": "^1.6.1",
        "spryker/customers-rest-api-extension": "^1.0.0",
        "spryker/discount-calculation-connector": "^5.0",
        "spryker/documentation-generator-rest-api": "^1.1.0",
        "spryker/documentation-generator-rest-api-extension": "^1.0.0",
        "spryker/dummy-payment": "^2.4.0",
        "spryker/event-journal": "^3.0.0",
        "spryker/flysystem-ftp-file-system": "^1.0.0",
        "spryker/flysystem-local-file-system": "^1.0",
        "spryker/gift-card-mail-connector": "^1.0",
        "spryker/glue-application": "^1.9.1",
        "spryker/glue-application-extension": "^1.1.0",
        "spryker/log": "^3.6.0",
        "spryker/new-relic": "^3.0.0",
        "spryker/oauth-customer-connector": "^1.1.0",
        "spryker/oms-discount-connector": "^3.0",
        "spryker/orders-rest-api": "^1.2.1",
        "spryker/payment-cart-connector": "^1.0",
        "spryker/payments-rest-api": "^1.0.0",
        "spryker/price-cart-connector": "^4.5",
        "spryker/product-alternative-product-label-connector": "^1.0",
        "spryker/product-availabilities-rest-api": "^1.0.2",
        "spryker/product-cart-connector": "^4.3",
        "spryker/product-category": "^4.6",
        "spryker/product-discontinued-product-bundle-connector": "^1.0",
        "spryker/product-discontinued-product-label-connector": "^1.0",
        "spryker/product-discount-connector": "^3.2",
        "spryker/product-image-cart-connector": "^1.0",
        "spryker/product-image-sets-rest-api": "^1.0.3",
        "spryker/product-label-discount-connector": "^1.2.1",
        "spryker/product-labels-rest-api": "^1.0.1",
        "spryker/product-option-cart-connector": "^5.1",
        "spryker/product-prices-rest-api": "^1.1.0",
        "spryker/product-tax-sets-rest-api": "^1.0.6",
        "spryker/products-categories-resource-relationship": "^1.0.0",
        "spryker/products-product-availabilities-resource-relationship": "^1.0.0",
        "spryker/products-product-prices-resource-relationship": "^1.0.0",
        "spryker/products-product-tax-sets-resource-relationship": "^1.0.0",
        "spryker/products-rest-api": "^2.2.2",
        "spryker/quote": "^2.5.0",
        "spryker/rabbit-mq": "^2.2",
        "spryker/rest-request-validator": "^1.1.0",
        "spryker/sales-product-connector": "^1.1",
        "spryker/sales-statistics": "^1.0.0",
        "spryker/shipment-cart-connector": "^1.0.1",
        "spryker/shipment-checkout-connector": "^1.0.0",
        "spryker/shipment-discount-connector": "^1.1.2",
        "spryker/shipments-rest-api": "^1.0.0",
        "spryker/stock-sales-connector": "^3.0",
        "spryker/stores-rest-api": "^1.0.2",
        "spryker/symfony": "3.2.0",
        "spryker/wishlist-items-products-resource-relationship": "^1.0.0",
        "spryker/wishlists-rest-api": "^1.3.0",
        "stecman/symfony-console-completion": "^0.7.0",
        "swiftmailer/swiftmailer": "^5.4.5"
    },
    "require-dev": {
        "codeception/codeception": "~2.3.8",
        "doctrine/instantiator": "~1.0.5",
        "facebook/webdriver": "~1.3.0",
        "fzaninotto/faker": "^1.6",
        "jakoch/phantomjs-installer": "^2.1.0",
        "nette/php-generator": "^2.6.1",
        "pdepend/pdepend": "^2.2.4",
        "phpstan/phpstan": "^0.10.2",
        "phpunit/php-code-coverage": "^5.2.2",
        "phpunit/php-timer": "^1.0.9",
        "phpunit/phpunit": "^6.0.0",
        "sebastian/comparator": "^2.1.3",
        "sebastian/diff": "^2.0.1",
        "sebastian/environment": "^3.1.0",
        "sebastian/exporter": "^3.1.0",
        "sebastian/object-enumerator": "^3.0.3",
        "sebastian/phpcpd": "^2.0.2",
        "sebastian/recursion-context": "^3.0.0",
        "sensiolabs/security-checker": "^3.0.2",
        "site5/phantoman": "^1.1",
        "sllh/composer-versions-check": "^2.0.2",
        "spryker/architecture-sniffer": "^0.4.0",
        "spryker/code-generator": "^0.3.0",
        "spryker/code-sniffer": "^0.13.0",
        "spryker/development": "^3.0.0",
        "spryker/testify": "^3.0.0",
        "spryker/web-profiler": "1.1.1",
        "squizlabs/php_codesniffer": "~3.3.0",
        "symfony/var-dumper": "*",
        "symfony/web-profiler-bundle": "*"
    },
    "autoload": {
        "psr-4": {
            "Generated\\": "src/Generated/",
            "Orm\\": "src/Orm/",
            "Pyz\\": "src/Pyz/",
            "Install\\": "src/Install/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "PyzTest\\": "tests/PyzTest/",
            "PhpStan\\": "tests/PhpStan/",
            "Acceptance\\Auth\\": "vendor/spryker/auth/tests/",
            "Application\\Module\\": "vendor/spryker/application/tests/_support/Module/",
            "Auth\\Module\\": "vendor/spryker/auth/tests/_support/Module/"
        },
        "files": [
            "test-autoload.php"
        ]
    },
    "minimum-stability": "dev",
    "prefer-stable": true,
    "config": {
        "preferred-install": "dist",
        "platform": {
            "php": "7.1.11"
        },
        "use-include-path": true,
        "sort-packages": true,
        "github-protocols": [
            "https"
        ],
        "process-timeout": 900
    },
    "repositories": [{
            "type": "git",
            "url": "https://github.com/spryker-feature/agent-assist.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/alternative-products.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/backup.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-barcode.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/cart.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/customer-notes.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/cart-notes.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/catalog.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/category-management.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/checkout.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/cms.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/company-account.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/content-based-shop-navigation.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/customer-account-management.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/data-export.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/deployment-tools.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/development-integration.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/development-tools.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/digital-asset-management.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/discontinued-products.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/file-manager.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/gift-cards.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/inventory-management.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/invoice.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/mailing-notifications.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/measurement-units.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/merchant.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/merchant-contracts.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/merchant-custom-prices.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/merchant-order-threshold.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/merchant-product-restrictions.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/multiple-carts.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/multistore.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/navigation.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/newsletter-subscription.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/non-splittable-products.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/order-management.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/order-threshold.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/payments.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/persistent-cart.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/prices.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-based-shop-navigation.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-bundles.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-customer-restrictions.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-groups.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-image-management.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-labels.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-lists.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-options.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-promotions.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-rating-reviews.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-relations.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-sets.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/product-validity.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/promotions-discounts.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/purchaise-approval-not-in-october-release.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/quick-add-to-cart.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/reclamations.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/refunds.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/reorder.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/search.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/shipment.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/shopping-lists.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/split-shipment.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/spryker-core.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/spryker-core-back-office.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/spryker-core-e-commerce.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/state-machine.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/tax.git"
        },
        {
            "type": "git",
            "url": "https://github.com/spryker-feature/wishlist.git"
        }
    ],
    "scripts": {
        "compile": [
            "mkdir -p ./data/DE/logs/ZED",
            "echo '<?php return \"development-heroku\";' > config/Shared/console_env_local.php",
            "./deploy/heroku/run.sh"
        ],
        "post-install-cmd": [
            "PhantomInstaller\\Installer::installPhantomJS"
        ],
        "post-update-cmd": [
            "PhantomInstaller\\Installer::installPhantomJS"
        ],
        "phpstan": [
            "php -d memory_limit=1024M vendor/bin/phpstan analyze -c phpstan.neon src/ -l 4"
        ],
        "phpstan-setup": "vendor/bin/console dev:ide:generate-auto-completion"
    }
};
