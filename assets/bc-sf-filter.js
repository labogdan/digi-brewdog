// Override Settings
var bcSfFilterSettings = {
    general: {
        limit: bcSfFilterConfig.custom.products_per_page,
        // Optional
        loadProductFirst: true
    }
};

// Declare Templates
var bcSfFilterTemplate = {
    'saleLabelHtml': '<div class="sale-badge">' + bcSfFilterConfig.label.sale + '</div>',

    // Grid Template
    'productGridItemHtml': '<div class="grid__item ' + bcSfFilterConfig.custom.fit_image_class + ' ' + bcSfFilterConfig.custom.hover_class + ' ' + bcSfFilterConfig.custom.grid_item_width + '" data-product-tags="{{itemTags}}">' +
                                '<a href="{{itemUrl}}" tabindex=\'0\'>' +
                                    '<div class="cell-wrapper">' +
                                        '{{itemSaleLabel}}' +
                                        '{{itemImages}}' +
                                    '</div>' +
                                    '<span class="product_image_caption">' +
                                        '<h6>{{itemTitle}}</h6>' +
                                        '{{itemPrice}}' +
                                    '</span>' +
                                '</a>' +
                            '</div>',

    // Pagination Template
    'previousHtml': '<span class="prev"><a href="{{itemUrl}}">&larr;</a></span>',
    'nextHtml': '<span class="next"><a href="{{itemUrl}}">&rarr;</a></span>',
    'pageItemHtml': '<span class="page"><a href="{{itemUrl}}">{{itemTitle}}</a></span>',
    'pageItemSelectedHtml': '<span class="page current">{{itemTitle}}</span>',
    'pageItemRemainHtml': '<span class="deco">{{itemTitle}}</span>',
    'paginateHtml': '{{previous}}{{pageItems}}{{next}}',
  
    // Sorting Template
    'sortingHtml': '<span class="collection-filters-title">' + bcSfFilterConfig.label.sorting + '</span><select>{{sortingItems}}</select>',
};

// Build Product Grid Item
BCSfFilter.prototype.buildProductGridItem = function(data, index) {
    /*** Prepare data ***/
    var images = data.images_info;
    data.price_min *= 100, data.price_max *= 100, data.compare_at_price_min *= 100, data.compare_at_price_max *= 100; // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices
    // Get First Variant (selected_or_first_available_variant)
    var firstVariant = data['variants'][0];
    if (getParam('variant') !== null && getParam('variant') != '') {
        var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
        if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
    } else {
        for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                firstVariant = data['variants'][i];
                break;
            }
        }
    }
    /*** End Prepare data ***/

    // Get Template
    var itemHtml = bcSfFilterTemplate.productGridItemHtml;
  
    // Add onSale label
    var itemSaleLabelHtml = onSale ? bcSfFilterTemplate.saleLabelHtml : '';
    itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabelHtml);

    // Add Images
    var itemImagesHtml = '';
    var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0]['src'], '700x') : bcSfFilterConfig.general.no_image_url;
    if (images.length > 0) {
        if (images.length > 1) {
            itemImagesHtml += '<img src="' + this.optimizeImage(images[1]['src'], '700x') + '" alt="{{itemTitle}}" class="is-variant">';
        }
        var hoverClass = images.length > 1 ? 'has-hover' : '';
        itemImagesHtml += '<img src="' + itemThumbUrl + '" alt="{{itemTitle}}" class="'+ hoverClass + '">';
    }
    itemHtml = itemHtml.replace(/{{itemImages}}/g, itemImagesHtml);

    // Add Price
    var itemPriceHtml = '';
    if (onSale) {
        if (priceVaries) {
            itemPriceHtml += '<span class="price">' + bcSfFilterConfig.label.sale_from_price.replace(/{{ price }}/g, this.formatMoney(data.price_min)) + '</span>';
        } else {
            itemPriceHtml += '<span class="price">' + this.formatMoney(data.price_min) + '</span>';
        }
    } else {
        if (priceVaries) {
            itemPriceHtml += '<span class="price">' + bcSfFilterConfig.label.from_price.replace(/{{ price }}/g, this.formatMoney(data.price_min)) + '</span>';
        } else {
            itemPriceHtml += this.formatMoney(data.price_min);
        }
    }
    if (soldOut) {
        itemPriceHtml += '<strong>' + bcSfFilterConfig.label.sold_out + '</strong>';
    }
    if (onSale) {
        itemPriceHtml += '<s><span class="price">' + this.formatMoney(data.compare_at_price_min, this.moneyFormat) + '</span></s>';
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    // Add main attribute
    itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
    itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
    itemHtml = itemHtml.replace(/{{itemTags}}/g, data.tags);
    itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

    return itemHtml;
};

// Customize data to suit the data of Shopify API
BCSfFilter.prototype.prepareProductData = function(data) {
    for (var k in data) {
        // Featured image
        if (data['images_info'] > 0) {
            data[k]['featured_image'] = data['images_info'][0];
        } else {
            data[k]['featured_image'] = {width: '', height: '', aspect_ratio: 0}
        }

        // Add Options
        var optionsArr = [];
        for (var i in data[k]['options_with_values']) {
            optionsArr.push(data[k]['options_with_values'][i]['name']);
        }
        data[k]['options'] = optionsArr;

        // Customize variants
        for (var i in data[k]['variants']) {
            var variantOptionArr = [];
            var count = 1;
            var variant = data[k]['variants'][i];
            // Add Options
            var variantOptions = variant['merged_options'];
            if (Array.isArray(variantOptions)) {
                for (var j = 0; j < variantOptions.length; j++) {
                    var temp = variantOptions[j].split(':');
                    data[k]['variants'][i]['option' + (parseInt(j) + 1)] = temp[1];
                    data[k]['variants'][i]['option_' + temp[0]] = temp[1];
                    variantOptionArr.push(temp[1]);
                }
                data[k]['variants'][i]['options'] = variantOptionArr;
            }
            data[k]['variants'][i]['compare_at_price'] = parseFloat(data[k]['variants'][i]['compare_at_price']) * 100;
            data[k]['variants'][i]['price'] = parseFloat(data[k]['variants'][i]['price']) * 100;
        }

        // Add Description
        data[k]['description'] = data[k]['body_html'];
    }
    return data;
};

// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
    // Get page info
    var currentPage = parseInt(this.queryParams.page);
    var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

    // If it has only one page, clear Pagination
    if (totalPage == 1) {
        jQ(this.selector.bottomPagination).html('');
        return false;
    }

    if (this.getSettingValue('general.paginationType') == 'default') {
        var paginationHtml = bcSfFilterTemplate.paginateHtml;

        // Build Previous
        var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousHtml : '';
        previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage -1));
        paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

        // Build Next
        var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextHtml : '';
        nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
        paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

        // Create page items array
        var beforeCurrentPageArr = [];
        for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
            beforeCurrentPageArr.unshift(iBefore);
        }
        if (currentPage - 4 > 0) {
            beforeCurrentPageArr.unshift('...');
        }
        if (currentPage - 4 >= 0) {
            beforeCurrentPageArr.unshift(1);
        }
        beforeCurrentPageArr.push(currentPage);

        var afterCurrentPageArr = [];
        for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
            afterCurrentPageArr.push(iAfter);
        }
        if (currentPage + 3 < totalPage) {
            afterCurrentPageArr.push('...');
        }
        if (currentPage + 3 <= totalPage) {
            afterCurrentPageArr.push(totalPage);
        }

        // Build page items
        var pageItemsHtml = '';
        var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
        for (var iPage = 0; iPage < pageArr.length; iPage++) {
            if (pageArr[iPage] == '...') {
                pageItemsHtml += bcSfFilterTemplate.pageItemRemainHtml;
            } else {
                pageItemsHtml += (pageArr[iPage] == currentPage) ? bcSfFilterTemplate.pageItemSelectedHtml : bcSfFilterTemplate.pageItemHtml;
            }
            pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
            pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, pageArr[iPage]));
        }
        paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);

        jQ(this.selector.bottomPagination).html(paginationHtml);
    }
};

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
    if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
        jQ(this.selector.topSorting).html('');

        var sortingArr = this.getSortingList();
        if (sortingArr) {
            // Build content 
            var sortingItemsHtml = '';
            for (var k in sortingArr) {
                sortingItemsHtml += '<option value="' + k +'">' + sortingArr[k] + '</option>';
            }
            var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
            jQ(this.selector.topSorting).html(html);

            // Set current value
            jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
        }
    }
};

// Build Breadcrumb
BCSfFilter.prototype.buildBreadcrumb = function(colData, apiData) {
    if (typeof colData !== 'undefined' && colData.hasOwnProperty('collection')) {
        var colInfo = colData.collection;
        var breadcrumbHtml = '<a href="/" title="' + bcSfFilterConfig.label.breadcrumb_home_link + '">' + bcSfFilterConfig.label.breadcrumb_home + '</a>';
        breadcrumbHtml += ' <span aria-hidden="true">/</span>';
        if (bcSfFilterConfig.general.current_tags !== null) {
            var currentTags = bcSfFilterConfig.general.current_tags;
            breadcrumbHtml += ' <a href="/collections/' + colInfo.handle + '">' + colInfo.title + '</a>';
            breadcrumbHtml += ' <span aria-hidden="true">/</span>';
            breadcrumbHtml += ' <span>' + currentTags.join(' + ') + '</span>';
        } else {
            breadcrumbHtml += ' <span>' + colInfo.title + '</span>';
        }
        jQ('.breadcrumb').html(breadcrumbHtml);
    }
};

// Add additional feature for product list, used commonly in customizing product list
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {};

// Build additional elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {
  this.buildRobotsMetaTag();
    // Unbind fadeOutOnClick in ira.js
    $("*").unbind("click");
};
/* boost-start-2.4.2 */
/* If you upgrade the lib to the version >= 2.4.2, please comment the functions below out */
BCSfFilter.prototype.buildRobotsMetaTag = function(data) { var self = this; var metaContent = 'meta[content="noindex,nofollow"]'; if (self.checkIfPFParamsPartOfAURL() === true && jQ('head').find( metaContent).length === 0) { var m = document.createElement('meta'); m.name = 'robots'; m.content = 'noindex,nofollow'; document.head.appendChild(m); } }; BCSfFilter.prototype.checkIfPFParamsPartOfAURL = function() { var self = this; if (window.location.search.length > 0 && window.location.search.indexOf('pf_') > 0) { return true; } return false; };
/* boost-end-2.4.2 */